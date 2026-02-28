"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Sparkles, ArrowRight, Monitor, Code2, Zap, Globe, Check, CreditCard } from "lucide-react";
import ImageUpload from "@/components/ImageUpload";
import Footer from "@/components/Footer";

interface UploadedFile {
  filename: string;
  originalName: string;
  size: number;
  type: string;
  url: string;
}

export default function Home() {
  const { data: session } = useSession();
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [previewHtml, setPreviewHtml] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [uploadedImages, setUploadedImages] = useState<UploadedFile[]>([]);
  const [isCloneMode, setIsCloneMode] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    try {
      let finalPrompt = prompt;
      
      // If in clone mode with uploaded images, add them to the prompt
      if (isCloneMode && uploadedImages.length > 0) {
        const imageUrls = uploadedImages.map(img => `https://codecraftt.com${img.url}`).join('\n');
        finalPrompt = `CLONE MODE: Create a landing page based on these reference images:\n\n${imageUrls}\n\nUser requirements:\n${prompt}\n\nIMPORTANT: Analyze the design, layout, colors, and style from the reference images and recreate a similar landing page with the user's requirements. Use the same visual style, color scheme, and layout structure as shown in the images.`;
      }

      const response = await fetch("/api/generate-landing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: finalPrompt }),
      });

      if (!response.ok) throw new Error("Failed to generate");

      const data = await response.json();
      if (data.html) {
        setPreviewHtml(data.html);
        setShowPreview(true);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to generate landing page");
    } finally {
      setLoading(false);
    }
  };

  if (showPreview) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-white">
                CodeCraftt
              </Link>
              <button
                onClick={() => setShowPreview(false)}
                className="text-gray-400 hover:text-white transition"
              >
                ← Back
              </button>
            </div>
          </div>
        </header>

        {/* Preview Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Your Landing Page Preview</h1>
            <p className="text-gray-400">This is a demo preview. Sign in to save and publish your landing page.</p>
          </div>

          {/* Landing Preview */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
            <iframe
              srcDoc={previewHtml}
              className="w-full h-[600px] border-0"
              title="Landing Preview"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            />
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <Globe size={20} />
              Sign In to Save & Publish
            </Link>
            <button
              onClick={() => setShowPreview(false)}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <ArrowRight size={20} />
              Try Another
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-2xl font-bold text-white">
                CodeCraftt
              </Link>
              <nav className="hidden md:flex gap-6">
                <Link href="/dashboard" className="text-white hover:text-purple-400 transition">
                  Dashboard
                </Link>
                <Link href="/landing-builder" className="text-white hover:text-purple-400 transition">
                  Create New
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              {session ? (
                <Link
                  href="/dashboard"
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link href="/login" className="text-white hover:text-purple-400 transition">
                    Sign In
                  </Link>
                  <Link
                    href="/signup"
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-semibold transition"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section with Demo Generator */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">AI-Powered Landing Pages</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Create Stunning Landing Pages
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {" "}in Minutes
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Generate professional landing pages with AI. Clone existing designs or create from scratch. 
            No coding required.
          </p>

          {/* Demo Generator */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              {/* Clone Mode Toggle */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Code2 size={16} className="text-cyan-400" />
                  <span className="text-sm font-medium text-gray-300">Demo Generator</span>
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
                  Upload screenshots to clone a design
                </p>
              )}

              {/* Image Upload for Clone Mode */}
              {isCloneMode && (
                <div className="mb-4">
                  <button
                    onClick={() => setShowImageUpload(!showImageUpload)}
                    className="w-full px-4 py-2 bg-cyan-600/20 hover:bg-cyan-600/30 border border-cyan-600/30 rounded-lg text-cyan-400 text-sm font-medium transition flex items-center justify-center gap-2"
                  >
                    📁 {showImageUpload ? 'Hide Images' : `Upload Images (${uploadedImages.length})`}
                  </button>
                  
                  {showImageUpload && (
                    <div className="mt-3">
                      <ImageUpload
                        onImagesUploaded={setUploadedImages}
                        maxImages={3}
                        maxSize={5}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Prompt Input */}
              <div className="space-y-4">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={isCloneMode 
                    ? "Describe what you want to change or add to the cloned design..." 
                    : "e.g. 'Landing page for a coffee shop in San José, Costa Rica. Modern style, warm colors, CTA: Order online'"
                  }
                  rows={3}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition resize-none"
                />
                
                <button
                  onClick={handleGenerate}
                  disabled={loading || !prompt.trim()}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Zap size={20} />
                      Generate Landing Page
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-gray-500 mt-4">
                🎯 This is a free demo. Sign in to save, edit, and publish your landing pages.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Generation</h3>
            <p className="text-gray-400">
              Generate complete landing pages with embedded CSS, animations, and original AI images.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="w-12 h-12 bg-cyan-600/20 rounded-lg flex items-center justify-center mb-4">
              <Monitor className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Visual Editor</h3>
            <p className="text-gray-400">
              Edit any element with our visual editor. Upload images, change colors, modify text.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Custom URLs</h3>
            <p className="text-gray-400">
              Publish with custom URLs. Your landing pages get hosted instantly with shareable links.
            </p>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Simple, Transparent Pricing</h2>
          <div className="max-w-md mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-300">One-time payment</span>
              <span className="text-3xl font-bold text-green-400">$50</span>
            </div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-gray-400">
                <Check className="w-4 h-4 text-green-400" />
                AI-generated landing page
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Check className="w-4 h-4 text-green-400" />
                Original AI images (DALL-E 3)
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Check className="w-4 h-4 text-green-400" />
                Custom URL hosting
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Check className="w-4 h-4 text-green-400" />
                Source code download
              </li>
            </ul>
            <Link
              href="/landing-builder"
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
            >
              <CreditCard size={20} />
              Get Started Now
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
