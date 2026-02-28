"use client";

import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CreditCard, Check, Sparkles, Monitor, MousePointer2, Upload, History, Edit3, Undo, Redo, Download, ExternalLink, Save, Globe, Copy } from "lucide-react";
import ImageUpload from "@/components/ImageUpload";

export const dynamic = 'force-dynamic';

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp?: number;
}

interface HistoryEntry {
  id: string;
  prompt: string;
  html: string;
  timestamp: number;
}

interface UploadedFile {
  filename: string;
  originalName: string;
  size: number;
  type: string;
  url: string;
}

interface SelectedElement {
  selector: string;
  element: HTMLElement;
  rect: DOMRect;
}

const welcomeMessage: Message = {
  role: "assistant",
  content:
    "Hi! I'm your CodeCraftt Builder.\n\n**Create Mode:** Describe the landing page you want — include:\n• Your business name\n• What you sell or offer\n• Your location (city, country)\n• Any colors or style preferences\n• Your main call to action (e.g. 'Book a call', 'Buy now')\n\n**Clone Mode:** Toggle on Clone Mode and upload screenshots of a website you want to replicate. I'll analyze the design and create a similar landing page for your business.\n\nI'll generate your live landing page in minutes.",
};

export default function LandingBuilder() {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [previewHtml, setPreviewHtml] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [paid, setPaid] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedElement, setSelectedElement] = useState<SelectedElement | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [currentHistoryIndex, setCurrentHistoryIndex] = useState(-1);
  const [showHistory, setShowHistory] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [chatId, setChatId] = useState<string>("");
  const [currentLandingId, setCurrentLandingId] = useState<string | null>(null);
  const [landingName, setLandingName] = useState("");
  const [saving, setSaving] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [publishedUrl, setPublishedUrl] = useState<string | null>(null);
  const [uploadedImages, setUploadedImages] = useState<UploadedFile[]>([]);
  const [isCloneMode, setIsCloneMode] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [mobileTab, setMobileTab] = useState<"chat" | "preview" | "code">("chat");
  const [isDemo, setIsDemo] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

  // ── RESTORE full session from localStorage on mount ──
  useEffect(() => {
    // Demo flow takes priority — handled in the next useEffect
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('demo') === 'true') return;

    try {
      const savedHistory = localStorage.getItem('lb-history');
      const savedMessages = localStorage.getItem('lb-messages');
      const savedIndex = localStorage.getItem('lb-history-index');

      if (savedHistory) {
        const parsedHistory: HistoryEntry[] = JSON.parse(savedHistory);
        if (parsedHistory.length > 0) {
          setHistory(parsedHistory);
          const idx = savedIndex ? parseInt(savedIndex, 10) : parsedHistory.length - 1;
          const safeIdx = Math.min(Math.max(idx, 0), parsedHistory.length - 1);
          setCurrentHistoryIndex(safeIdx);
          setPreviewHtml(parsedHistory[safeIdx].html);
          setGeneratedCode(parsedHistory[safeIdx].html);
          setActiveTab("preview");
        }
      }

      if (savedMessages) {
        const parsedMessages: Message[] = JSON.parse(savedMessages);
        if (parsedMessages.length > 0) setMessages(parsedMessages);
      }
    } catch (e) {
      console.error('Failed to restore session:', e);
    }
  }, []);

  // ── PERSIST history whenever it changes ──
  useEffect(() => {
    if (history.length > 0) {
      localStorage.setItem('lb-history', JSON.stringify(history));
    }
  }, [history]);

  // ── PERSIST current history index ──
  useEffect(() => {
    localStorage.setItem('lb-history-index', String(currentHistoryIndex));
  }, [currentHistoryIndex]);

  // ── PERSIST messages (skip the default empty array) ──
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('lb-messages', JSON.stringify(messages));
    }
  }, [messages]);

  // ── PERSIST previewHtml so iframe survives refresh ──
  useEffect(() => {
    if (previewHtml) {
      localStorage.setItem('lb-preview-html', previewHtml);
    }
  }, [previewHtml]);

  // Load demo HTML from sessionStorage if coming from homepage demo
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const isDemoParam = urlParams.get('demo');
    
    if (isDemoParam === 'true') {
      const demoHtml = sessionStorage.getItem('demo_generated_html');
      const demoPrompt = sessionStorage.getItem('demo_generated_prompt');
      
      if (demoHtml && demoPrompt) {
        setPreviewHtml(demoHtml);
        setGeneratedCode(demoHtml);
        setIsDemo(true);
        // Switch to preview tab on mobile automatically
        setMobileTab("preview");
        setActiveTab("preview");
        
        // Add to messages
        setMessages((prev) => [
          ...prev,
          { role: "user", content: demoPrompt, timestamp: Date.now() },
          { role: "assistant", content: "✨ Your landing page preview is ready!\n\nTo download, edit, save, or publish this page, you need to create a free account.", timestamp: Date.now() }
        ]);
        
        const newEntry: HistoryEntry = {
          id: `demo-${Date.now()}`,
          prompt: demoPrompt,
          html: demoHtml,
          timestamp: Date.now(),
        };
        setHistory([newEntry]);
        setCurrentHistoryIndex(0);
        
        sessionStorage.removeItem('demo_generated_html');
        sessionStorage.removeItem('demo_generated_prompt');
        window.history.replaceState({}, '', '/landing-builder');
      }
    }
  }, []);

  const handleGenerate = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setLoading(true);

    try {
      // Detect if this is a modification request (we already have HTML)
      const isModification = generatedCode.length > 0;
      
      let res;
      if (isModification) {
        // Use intelligent iteration endpoint
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "🔄 Making targeted changes to your page...",
            timestamp: Date.now(),
          },
        ]);

        res = await fetch("/api/iterate-landing", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            feedback: input,
            current_html: generatedCode,
            original_prompt: history[0]?.prompt || ""
          }),
        });
      } else {
        // Generate new page from scratch
        let finalPrompt = input;
        let imagesToSend: string[] = [];
        
        // If in clone mode with uploaded images, prepare them for vision analysis
        if (isCloneMode && uploadedImages.length > 0) {
          imagesToSend = uploadedImages.map(img => img.url);
          finalPrompt = `CLONE MODE: Analyze the provided reference images and create a landing page that matches their design, layout, colors, and style.\n\nUser requirements: ${input}\n\nIMPORTANT: Study the visual design from the reference images carefully and recreate a similar landing page with the user's requirements. Use the same visual style, color scheme, typography, and layout structure as shown in the images.`;
        }
        
        res = await fetch("/api/generate-landing", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
            prompt: finalPrompt,
            images: imagesToSend
          }),
        });
      }

      if (!res.ok) {
        throw new Error("Failed to generate landing page");
      }

      const data = await res.json();
      
      if (isModification && data.html) {
        // For iterations, we get HTML directly
        const newHtml = data.html;
        setPreviewHtml(newHtml);
        setGeneratedCode(newHtml);
        
        // Save to history
        const newEntry: HistoryEntry = {
          id: `entry-${Date.now()}`,
          prompt: input,
          html: newHtml,
          timestamp: Date.now(),
        };
        setHistory(prev => [...prev, newEntry]);
        setCurrentHistoryIndex(history.length);
        
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "✅ Changes applied! Only the requested parts were modified.",
            timestamp: Date.now(),
          },
        ]);
      } else {
        // For new generations
        const htmlContent = data.files?.[1]?.content || data.files?.[0]?.content || "";
        setPreviewHtml(htmlContent);
        setGeneratedCode(htmlContent);
        setChatId(data.chatId || "");

        // Save to history
        const newEntry: HistoryEntry = {
          id: data.chatId || `entry-${Date.now()}`,
          prompt: input,
          html: data.files?.[1]?.content || data.files?.[0]?.content || "",
          timestamp: Date.now(),
        };
        setHistory(prev => [...prev, newEntry]);
        setCurrentHistoryIndex(history.length);

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "✅ Your landing page is ready! Check the preview on the right. You can:\n• Click 'Edit Mode' to select and modify elements\n• Upload images to replace placeholders\n• Make changes by describing what you want",
            timestamp: Date.now(),
          },
        ]);
      }

      setInput("");
      setActiveTab("preview");
    } catch (error) {
      console.error("Error generating landing:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "❌ Sorry, there was an error generating your landing page. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  const handleDownloadHTML = () => {
    if (!previewHtml) return;
    
    const blob = new Blob([previewHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'landing-page.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleOpenInNewTab = () => {
    if (!previewHtml) return;
    
    const newWindow = window.open();
    if (newWindow) {
      newWindow.document.write(previewHtml);
      newWindow.document.close();
    }
  };

  const saveLanding = async () => {
    if (!generatedCode) {
      alert("Please generate a landing page first");
      return;
    }

    if (!session) {
      alert("Please sign in to save your landing page");
      return;
    }

    const name = landingName || prompt("Enter a name for this landing page:") || "Untitled Landing";
    
    try {
      setSaving(true);
      const AUTH_SERVICE_URL = process.env.NEXT_PUBLIC_AUTH_SERVICE_URL || "http://localhost:4000";
      const token = (session as any)?.accessToken;

      if (!token) {
        alert("Authentication error. Please sign in again.");
        setSaving(false);
        return;
      }

      const response = await fetch(`${AUTH_SERVICE_URL}/api/landings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          html: generatedCode,
          prompt: history[0]?.prompt || input,
          provider: 'openai',
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setCurrentLandingId(data.landing.id);
        setLandingName(name);
        alert("Landing page saved successfully!");
      } else {
        alert("Failed to save landing page");
      }
    } catch (error) {
      console.error("Error saving landing:", error);
      alert("Error saving landing page");
    } finally {
      setSaving(false);
    }
  };

  const publishLanding = async () => {
    if (!generatedCode) {
      alert("Please generate a landing page first");
      return;
    }

    if (!session) {
      alert("Please sign in to publish your landing page");
      return;
    }

    // Save first if not saved yet
    let landingId = currentLandingId;
    if (!landingId) {
      const name = landingName || prompt("Enter a name for this landing page:") || "Untitled Landing";
      try {
        setSaving(true);
        const AUTH_SERVICE_URL = process.env.NEXT_PUBLIC_AUTH_SERVICE_URL || "http://localhost:4000";
        const token = (session as any)?.accessToken;
        if (!token) { alert("Auth error"); setSaving(false); return; }

        const saveRes = await fetch(`${AUTH_SERVICE_URL}/api/landings`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
          body: JSON.stringify({ name, html: generatedCode, prompt: history[0]?.prompt || input, provider: 'openai' }),
        });
        if (saveRes.ok) {
          const data = await saveRes.json();
          landingId = data.landing.id;
          setCurrentLandingId(landingId);
          setLandingName(name);
        } else {
          alert("Failed to save before publishing"); setSaving(false); return;
        }
      } catch { alert("Error saving"); setSaving(false); return; }
      finally { setSaving(false); }
    }

    // Now publish
    const customSlug = prompt("Enter a custom URL slug (e.g. 'my-coffee-shop'):");
    if (!customSlug) return;

    try {
      setPublishing(true);
      const AUTH_SERVICE_URL = process.env.NEXT_PUBLIC_AUTH_SERVICE_URL || "http://localhost:4000";
      const token = (session as any)?.accessToken;

      const res = await fetch(`${AUTH_SERVICE_URL}/api/landings/${landingId}/publish`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ slug: customSlug }),
      });

      if (res.ok) {
        const data = await res.json();
        setPublishedUrl(data.landing.publishedUrl);
        setMessages(prev => [...prev, {
          role: "assistant",
          content: `🚀 Your landing page is live!\n\n🔗 ${data.landing.publishedUrl}\n\nShare this URL with anyone — it's publicly accessible!`,
          timestamp: Date.now(),
        }]);
      } else {
        const err = await res.json();
        alert(err.message || "Failed to publish");
      }
    } catch (error) {
      console.error("Error publishing:", error);
      alert("Error publishing landing page");
    } finally {
      setPublishing(false);
    }
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setSelectedElement(null);
    if (!editMode) {
      // Enable edit mode
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "🎨 Edit mode activated! Click on any element in the preview to select it. You can then:\n• Describe changes you want\n• Upload an image to replace it\n• Modify text, colors, or layout",
          timestamp: Date.now(),
        },
      ]);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      // Convert image to base64
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        
        if (selectedElement && iframeRef.current?.contentWindow) {
          const iframe = iframeRef.current;
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
          if (!iframeDoc) return;
          const element = iframeDoc.querySelector(selectedElement.selector);
          
          if (element) {
            if (element.tagName === 'IMG') {
              (element as HTMLImageElement).src = base64;
            } else {
              element.setAttribute('style', `${element.getAttribute('style') || ''}; background-image: url(${base64});`);
            }
            
            // Update the HTML
            const newHtml = iframeDoc.documentElement.outerHTML;
            setPreviewHtml(newHtml);
            setGeneratedCode(newHtml);
            
            setMessages((prev) => [
              ...prev,
              {
                role: "assistant",
                content: `✅ Image uploaded and applied to selected element!`,
                timestamp: Date.now(),
              },
            ]);
          }
        }
        setUploadingImage(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploadingImage(false);
    }
  };

  const handleIframeClick = (e: React.MouseEvent) => {
    if (!editMode || !iframeRef.current) return;

    const iframe = iframeRef.current;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!iframeDoc) return;

    // Get click position relative to iframe
    const rect = iframe.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Find element at position in iframe
    const element = iframeDoc.elementFromPoint(x, y) as HTMLElement;
    if (element && element !== iframeDoc.body && element !== iframeDoc.documentElement) {
      // Generate a unique selector for the element
      let selector = element.tagName.toLowerCase();
      if (element.id) {
        selector = `#${element.id}`;
      } else if (element.className) {
        selector = `${selector}.${element.className.split(' ').join('.')}`;
      }

      const elementRect = element.getBoundingClientRect();
      setSelectedElement({
        selector,
        element,
        rect: elementRect,
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `🎯 Selected: ${element.tagName}${element.id ? '#' + element.id : ''}${element.className ? '.' + element.className.split(' ')[0] : ''}\n\nWhat would you like to change? You can:\n• Upload an image\n• Change text or colors\n• Modify the layout`,
          timestamp: Date.now(),
        },
      ]);
    }
  };

  const loadHistoryEntry = (entry: HistoryEntry) => {
    setPreviewHtml(entry.html);
    setGeneratedCode(entry.html);
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: `📜 Loaded from history: "${entry.prompt.substring(0, 50)}..."`,
        timestamp: Date.now(),
      },
    ]);
    setShowHistory(false);
  };

  const handleUndo = () => {
    if (currentHistoryIndex > 0) {
      const newIndex = currentHistoryIndex - 1;
      setCurrentHistoryIndex(newIndex);
      loadHistoryEntry(history[newIndex]);
    }
  };

  const handleRedo = () => {
    if (currentHistoryIndex < history.length - 1) {
      const newIndex = currentHistoryIndex + 1;
      setCurrentHistoryIndex(newIndex);
      loadHistoryEntry(history[newIndex]);
    }
  };

  // Shared chat panel content
  const ChatPanel = () => (
    <div className="flex flex-col h-full">
      {/* Banner: demo sign-in CTA OR payment OR confirmed */}
      {isDemo && !session ? (
        /* Demo users without account: show sign-in CTA */
        <div className="mx-4 mt-4 p-4 bg-gradient-to-br from-green-900/30 to-gray-900 rounded-xl border border-green-500/40">
          <p className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
            <Sparkles size={16} className="text-green-400" /> Your preview is ready! 🎉
          </p>
          <p className="text-xs text-gray-400 mb-3">
            Create a free account to download, edit, save, and publish your landing page.
          </p>
          <a
            href="/api/auth/signin"
            className="w-full block text-center bg-gradient-to-r from-[#10B981] to-[#059669] hover:shadow-lg hover:shadow-green-500/40 text-black font-bold py-3 rounded-lg text-sm transition"
          >
            Create Free Account →
          </a>
          <p className="text-xs text-gray-600 mt-2 text-center">Free forever. No credit card required.</p>
        </div>
      ) : (
        /* Authenticated users or non-demo: show payment banner */
        <div className="mx-4 mt-4 p-4 bg-gradient-to-br from-green-900/20 to-gray-900 rounded-lg border border-green-700/30">
          <p className="text-sm text-gray-300 mb-1 flex items-center gap-2">
            <CreditCard size={16} className="text-green-400" />
            One-time: <span className="text-green-400 font-bold">$50 USD</span>
          </p>
          <p className="text-xs text-gray-500 mb-3">
            Includes: AI generation + hosted URL + source code
          </p>
          {!paid && (
            <button
              onClick={() => setPaid(true)}
              className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-lg text-sm transition shadow-lg shadow-green-500/20"
            >
              Pay with PayPal →
            </button>
          )}
          {paid && (
            <div className="text-sm text-green-400 font-medium flex items-center gap-2">
              <Check size={18} /> Payment confirmed
            </div>
          )}
        </div>
      )}

      {/* Clone Mode Toggle — only for paid non-demo users */}
      {paid && !isDemo && (
        <div className="mx-4 mt-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Copy size={16} className="text-cyan-400" />
              <span className="text-sm font-medium text-gray-300">Clone Mode</span>
            </div>
            <button
              onClick={() => setIsCloneMode(!isCloneMode)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isCloneMode ? 'bg-cyan-600' : 'bg-gray-600'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isCloneMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          {isCloneMode && (
            <p className="text-xs text-gray-500 mb-3">
              Upload screenshots of a website you want to clone
            </p>
          )}
        </div>
      )}

      {/* Image Upload Section */}
      {isCloneMode && !isDemo && (
        <div className="mx-4 mt-2">
          <button
            onClick={() => setShowImageUpload(!showImageUpload)}
            className="w-full px-4 py-2.5 bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-600/30 rounded-lg text-cyan-400 text-sm font-medium transition flex items-center justify-center gap-2"
          >
            <Upload size={16} />
            {showImageUpload ? 'Hide Images' : `Upload Images (${uploadedImages.length})`}
          </button>
          {showImageUpload && (
            <div className="mt-3">
              <ImageUpload
                onImagesUploaded={setUploadedImages}
                maxImages={5}
                maxSize={5}
                className="mt-2"
              />
            </div>
          )}
        </div>
      )}

      {/* Messages Chat */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] sm:max-w-xs px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                msg.role === "user"
                  ? "bg-gray-700 text-white rounded-br-sm"
                  : "bg-gray-900 text-gray-200 rounded-bl-sm border border-gray-700"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-900 border border-gray-700 px-4 py-3 rounded-2xl rounded-bl-sm">
              <div className="flex gap-1 items-center">
                <span className="text-xs text-gray-400 mr-2">Generating...</span>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Bar — locked for demo users without session */}
      <div className="p-4 border-t border-gray-800">
        {isDemo && !session ? (
          <a
            href="/api/auth/signin"
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#10B981] to-[#059669] text-black font-bold py-3.5 rounded-xl text-sm transition hover:shadow-lg hover:shadow-green-500/30"
          >
            <Sparkles size={16} />
            Sign in to edit & iterate →
          </a>
        ) : (
          <>
            <div className="flex gap-2 bg-gray-900 border border-gray-700 rounded-xl p-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isCloneMode
                  ? "Describe what you want to change or add..."
                  : "e.g. 'Landing page for a coffee shop in San José, Costa Rica...'"
                }
                rows={2}
                disabled={!paid}
                className="flex-1 bg-transparent resize-none text-sm text-white placeholder-gray-500 outline-none"
              />
              <button
                onClick={() => {
                  handleGenerate();
                  setMobileTab("preview");
                }}
                disabled={loading || !paid || !input.trim()}
                className="self-end bg-green-500 hover:bg-green-400 disabled:opacity-30 disabled:cursor-not-allowed text-black p-3 rounded-lg transition min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                ➤
              </button>
            </div>
            <p className="text-xs text-gray-600 mt-1 text-center hidden sm:block">
              Shift+Enter for new line · Enter to send
            </p>
          </>
        )}
      </div>
    </div>
  );

  // Shared preview panel content
  const PreviewPanel = () => (
    <div className="flex flex-col h-full">
      {/* Demo sign-in banner over preview */}
      {isDemo && !session && previewHtml && (
        <div className="mx-3 mt-2 px-3 py-2 bg-black/60 border border-green-500/30 rounded-lg flex items-center justify-between gap-2 shrink-0">
          <p className="text-xs text-gray-300">🔒 Sign in to edit, save & download</p>
          <a href="/api/auth/signin" className="text-xs font-bold text-green-400 hover:text-green-300 whitespace-nowrap">
            Create Account →
          </a>
        </div>
      )}

      {/* Toolbar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-gray-900 border-b border-gray-800 flex-wrap">
        {previewHtml && (
          <>
            {/* Edit Mode — locked for demo without session */}
            {session ? (
              <button
                onClick={toggleEditMode}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition min-h-[36px] ${
                  editMode ? "bg-green-500 text-black" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                <MousePointer2 size={13} />
                {editMode ? "Edit ON" : "Edit"}
              </button>
            ) : (
              <button onClick={() => setShowSignInModal(true)} className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-gray-800 text-gray-500 hover:text-gray-300 transition min-h-[36px]">
                <MousePointer2 size={13} />
                Edit 🔒
              </button>
            )}

            {selectedElement && session && (
              <>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploadingImage}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium bg-blue-600 hover:bg-blue-500 text-white transition disabled:opacity-50 min-h-[36px]"
                >
                  <Upload size={13} />
                  {uploadingImage ? "..." : "Img"}
                </button>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </>
            )}
            <div className="flex items-center gap-1 ml-auto">
              <button onClick={handleUndo} disabled={currentHistoryIndex <= 0} className="p-2 rounded hover:bg-gray-800 disabled:opacity-30 transition min-h-[36px] min-w-[36px] flex items-center justify-center" title="Undo">
                <Undo size={13} />
              </button>
              <button onClick={handleRedo} disabled={currentHistoryIndex >= history.length - 1} className="p-2 rounded hover:bg-gray-800 disabled:opacity-30 transition min-h-[36px] min-w-[36px] flex items-center justify-center" title="Redo">
                <Redo size={13} />
              </button>
              {session && (
                <button onClick={saveLanding} disabled={saving} className="text-xs text-purple-400 hover:text-purple-300 disabled:opacity-50 flex items-center gap-1 px-2 py-2 transition min-h-[36px]">
                  <Save size={13} />
                  <span className="hidden sm:inline">{saving ? "..." : currentLandingId ? "Saved" : "Save"}</span>
                </button>
              )}
              {session && (
                <button onClick={publishLanding} disabled={publishing} className="text-xs text-cyan-400 hover:text-cyan-300 disabled:opacity-50 flex items-center gap-1 px-2 py-2 transition min-h-[36px]">
                  <Globe size={13} />
                  <span className="hidden sm:inline">{publishing ? "..." : publishedUrl ? "✓" : "Publish"}</span>
                </button>
              )}
              <button onClick={handleOpenInNewTab} className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 px-2 py-2 transition min-h-[36px]" title="Open in new tab">
                <ExternalLink size={13} />
              </button>
              {/* Download — locked for demo without session */}
              {session ? (
                <button onClick={handleDownloadHTML} className="text-xs text-green-400 hover:text-green-300 flex items-center gap-1 px-2 py-2 transition min-h-[36px]" title="Download HTML">
                  <Download size={13} />
                </button>
              ) : (
                <button onClick={() => setShowSignInModal(true)} className="text-xs text-gray-600 hover:text-gray-400 flex items-center gap-1 px-2 py-2 transition min-h-[36px]" title="Sign in to download">
                  <Download size={13} />
                  <span className="text-[10px]">🔒</span>
                </button>
              )}
              <button onClick={() => setShowHistory(!showHistory)} className="flex items-center gap-1 px-2 py-2 rounded hover:bg-gray-800 transition text-xs min-h-[36px]">
                <History size={13} />
                <span className="text-gray-400">{history.length}</span>
              </button>
            </div>
          </>
        )}
        {!previewHtml && <span className="text-xs text-gray-500">Preview will appear here after generation</span>}
      </div>

      {/* History Panel */}
      {showHistory && history.length > 0 && (
        <div className="absolute right-4 top-16 w-72 max-h-80 bg-gray-900 border border-gray-700 rounded-lg shadow-2xl z-50 overflow-hidden">
          <div className="p-3 border-b border-gray-700 flex items-center justify-between">
            <h3 className="text-sm font-semibold flex items-center gap-2">
              <History size={16} className="text-green-400" /> History
            </h3>
            <button onClick={() => setShowHistory(false)} className="text-gray-400 hover:text-white p-1">✕</button>
          </div>
          <div className="overflow-y-auto max-h-64">
            {history.map((entry, index) => (
              <button key={entry.id} onClick={() => loadHistoryEntry(entry)}
                className={`w-full text-left p-3 border-b border-gray-800 hover:bg-gray-800 transition ${index === currentHistoryIndex ? "bg-gray-800" : ""}`}>
                <p className="text-xs text-gray-400 mb-1">{new Date(entry.timestamp).toLocaleString()}</p>
                <p className="text-sm text-white line-clamp-2">{entry.prompt}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Preview iframe */}
      <div className="flex-1 overflow-hidden relative">
        {previewHtml ? (
          <div className="w-full h-full relative" onClick={handleIframeClick} style={{ cursor: editMode ? 'crosshair' : 'default' }}>
            <iframe
              ref={iframeRef}
              srcDoc={previewHtml}
              className="w-full h-full border-0"
              title="Landing preview"
              style={{ pointerEvents: editMode ? 'none' : 'auto' }}
              key={previewHtml.substring(0, 50)}
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
            {editMode && (
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-black px-4 py-2 rounded-lg text-sm font-medium shadow-lg z-10">
                👆 Click any element to select it
              </div>
            )}
            {selectedElement && (
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1.5 rounded-lg text-xs shadow-lg z-10">
                Selected: <strong>{selectedElement.selector}</strong>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-gray-600 gap-3 px-6 text-center">
            <Monitor size={48} className="text-gray-700" />
            <p className="text-sm">Your landing page will appear here</p>
            <p className="text-xs text-gray-700">Go to Chat → describe your page → send</p>
          </div>
        )}
      </div>
    </div>
  );

  // Shared code panel content
  const CodePanel = () => (
    <div className="h-full overflow-auto p-4 bg-gray-950">
      {generatedCode ? (
        <SyntaxHighlighter language="tsx" style={vscDarkPlus} customStyle={{ margin: 0, background: "transparent", fontSize: "0.8rem" }}>
          {generatedCode}
        </SyntaxHighlighter>
      ) : (
        <span className="text-gray-600 text-sm">Generated code will appear here...</span>
      )}
    </div>
  );

  return (
    <div className="flex flex-col h-[100dvh] bg-black text-white overflow-hidden">

      {/* ── SIGN IN MODAL ── */}
      {showSignInModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowSignInModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative w-full max-w-sm bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-2xl shadow-black/60"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setShowSignInModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-200 transition text-lg leading-none"
            >
              ✕
            </button>

            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-4">
              <MousePointer2 size={22} className="text-green-400" />
            </div>

            <h2 className="text-lg font-bold text-white mb-1">Sign in to edit your website</h2>
            <p className="text-sm text-gray-400 mb-5">
              Create a free account to unlock editing, downloading, saving, and publishing your landing page.
            </p>

            <a
              href="/api/auth/signin"
              className="w-full block text-center bg-gradient-to-r from-[#10B981] to-[#059669] hover:shadow-lg hover:shadow-green-500/30 text-black font-bold py-3 rounded-xl text-sm transition mb-3"
            >
              Create Free Account →
            </a>
            <a
              href="/api/auth/signin"
              className="w-full block text-center text-gray-400 hover:text-gray-200 text-sm transition py-1"
            >
              Already have an account? Sign in
            </a>

            <p className="text-xs text-gray-600 text-center mt-3">Free forever · No credit card required</p>
          </div>
        </div>
      )}

      {/* ── HEADER ── */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800 shrink-0">
        <span className="font-bold text-green-400 text-sm">codecraftt</span>
        <span className="text-gray-500 text-sm">/ Landing Builder</span>

        {/* Mobile tab switcher */}
        <div className="ml-auto flex lg:hidden bg-gray-900 rounded-lg p-0.5 gap-0.5">
          {([
            { key: "chat", label: "Chat" },
            { key: "preview", label: "Preview" },
            { key: "code", label: "Code" },
          ] as const).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setMobileTab(key)}
              className={`px-3 py-1.5 text-xs rounded-md font-medium transition ${
                mobileTab === key
                  ? "bg-green-500 text-black"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {label}
              {key === "preview" && previewHtml && (
                <span className="ml-1 w-1.5 h-1.5 bg-green-400 rounded-full inline-block" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── BODY ── */}
      <div className="flex flex-1 overflow-hidden">

        {/* ── DESKTOP: left panel chat ── */}
        <div className="hidden lg:flex lg:w-2/5 flex-col border-r border-gray-800 overflow-hidden">
          <ChatPanel />
        </div>

        {/* ── DESKTOP: right panel preview/code ── */}
        <div className="hidden lg:flex flex-1 flex-col overflow-hidden relative">
          {/* Desktop Preview/Code tabs */}
          <div className="flex border-b border-gray-800 px-4 shrink-0">
            {(["preview", "code"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm capitalize transition ${
                  activeTab === tab
                    ? "text-white border-b-2 border-green-400"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-hidden relative">
            {activeTab === "preview" ? <PreviewPanel /> : <CodePanel />}
          </div>
        </div>

        {/* ── MOBILE: full-screen panels ── */}
        <div className="flex lg:hidden flex-1 overflow-hidden">
          {mobileTab === "chat" && (
            <div className="flex-1 overflow-hidden">
              <ChatPanel />
            </div>
          )}
          {mobileTab === "preview" && (
            <div className="flex-1 overflow-hidden relative">
              <PreviewPanel />
            </div>
          )}
          {mobileTab === "code" && (
            <div className="flex-1 overflow-hidden">
              <CodePanel />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
