"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const welcomeMessage: Message = {
  role: "assistant",
  content:
    "Hi! Describe the landing page you want to build. Be as specific as possible (business type, location, services, colors, CTA). After payment of $50 USD, I'll generate it for you.",
};

export default function LandingBuilder() {
  const [messages, setMessages] = useState<Message[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [paid, setPaid] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;

    // Add user message to chat
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setLoading(true);

    try {
      const res = await fetch("/api/generate-landing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      if (!res.ok) {
        throw new Error("Failed to generate landing page");
      }

      const data = await res.json();
      setPreviewUrl(data.demoUrl);
      setGeneratedCode(data.files?.[0]?.content || "");

      // Add AI response to chat
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "✅ Your landing page is ready! Check the preview on the right. You can copy the code or share the live URL.",
        },
      ]);

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
    if (e.key === "Enter" && !e.shiftKey && paid && !loading) {
      e.preventDefault();
      handleGenerate();
    }
  };

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* Left Panel - Chat Interface */}
      <div className="w-full lg:w-2/5 flex flex-col border-r border-gray-800">
        {/* Header */}
        <div className="p-4 border-b border-gray-800 flex items-center gap-2">
          <span className="font-bold text-green-400">codecraftt</span>
          <span className="text-gray-400">/ Landing Builder</span>
        </div>

        {/* Payment Banner */}
        <div className="mx-4 mt-4 p-3 bg-gray-900 rounded-lg border border-gray-700">
          <p className="text-sm text-gray-300">
            💳 One-time:{" "}
            <span className="text-green-400 font-bold">$50 USD</span> — AI
            generation + free hosting
          </p>
          {!paid && (
            <button
              onClick={() => setPaid(true)} // TODO: connect PayPal or Stripe here
              className="mt-2 w-full bg-green-500 hover:bg-green-400 text-black font-bold py-2 rounded-lg text-sm transition"
            >
              Pay & Unlock Generator
            </button>
          )}
          {paid && (
            <div className="mt-2 text-sm text-green-400 font-medium">
              ✓ Payment confirmed
            </div>
          )}
        </div>

        {/* Messages Chat */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl text-sm ${
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
              <div className="bg-gray-900 border border-gray-700 px-4 py-2 rounded-2xl rounded-bl-sm">
                <div className="flex gap-1">
                  <span
                    className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="w-2 h-2 bg-green-400 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-gray-800">
          <div className="flex gap-2 bg-gray-900 border border-gray-700 rounded-xl p-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe your landing page..."
              rows={2}
              disabled={!paid}
              className="flex-1 bg-transparent resize-none text-sm text-white placeholder-gray-500 outline-none"
            />
            <button
              onClick={handleGenerate}
              disabled={loading || !paid || !input.trim()}
              className="self-end bg-green-500 hover:bg-green-400 disabled:opacity-30 disabled:cursor-not-allowed text-black p-2 rounded-lg transition"
            >
              ➤
            </button>
          </div>
          <p className="text-xs text-gray-600 mt-1 text-center">
            Shift+Enter for new line · Enter to send
          </p>
        </div>
      </div>

      {/* Right Panel - Preview + Code Tabs */}
      <div className="hidden lg:flex flex-1 flex-col">
        {/* Tabs */}
        <div className="flex border-b border-gray-800 px-4">
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
          {previewUrl && !previewUrl.startsWith("data:") && (
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto self-center text-xs text-green-400 hover:underline py-3"
            >
              ↗ Open live
            </a>
          )}
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-hidden">
          {activeTab === "preview" ? (
            previewUrl ? (
              <iframe
                src={previewUrl}
                className="w-full h-full border-0"
                title="Landing preview"
                sandbox="allow-scripts allow-same-origin"
              />
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-600">
                <span className="text-6xl mb-4">🖥</span>
                <p>Your landing page preview will appear here</p>
              </div>
            )
          ) : (
            <div className="h-full overflow-auto bg-gray-950">
              {generatedCode ? (
                <SyntaxHighlighter
                  language="tsx"
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    padding: "1rem",
                    background: "#0a0a0a",
                    fontSize: "0.875rem",
                  }}
                  showLineNumbers
                >
                  {generatedCode}
                </SyntaxHighlighter>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <span className="text-gray-600">
                    Generated code will appear here...
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Mobile: Show preview below chat */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 h-1/3 bg-gray-950 border-t border-gray-800">
        <div className="flex border-b border-gray-800 px-4">
          {(["preview", "code"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs capitalize transition ${
                activeTab === tab
                  ? "text-white border-b-2 border-green-400"
                  : "text-gray-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="h-full overflow-hidden">
          {activeTab === "preview" ? (
            previewUrl ? (
              <iframe
                src={previewUrl}
                className="w-full h-full border-0"
                title="Landing preview"
                sandbox="allow-scripts allow-same-origin"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-600 text-sm">
                <p>Preview will appear here</p>
              </div>
            )
          ) : (
            <div className="h-full overflow-auto bg-gray-950 p-2 text-xs">
              {generatedCode || (
                <span className="text-gray-600">Code will appear here...</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
