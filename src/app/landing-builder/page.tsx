"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Loader2, Eye } from "lucide-react";

export default function LandingBuilder() {
  const [prompt, setPrompt] = useState("");
  const [generatedHtml, setGeneratedHtml] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isPaid, setIsPaid] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  // TODO: Replace with real payment gateway (PayPal/Stripe)
  const handlePayment = () => {
    // Simulate payment for now
    setIsPaid(true);
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert("Please enter a description for your landing page");
      return;
    }

    setIsGenerating(true);
    setShowPreview(false);

    try {
      // TODO: This will be replaced with a call to Python backend
      // POST https://your-python-backend.com/generate
      const response = await fetch("/api/generate-landing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate landing page");
      }

      const data = await response.json();
      setGeneratedHtml(data.html);
      setShowPreview(true);
    } catch (error) {
      console.error("Error generating landing:", error);
      alert("Failed to generate landing page. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span className="text-sm text-emerald-500 font-medium">
              AI-Powered Landing Pages
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Generate Your Landing Page
            <br />
            <span className="text-emerald-500">in Minutes</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Describe your business and get a professional, conversion-optimized
            landing page instantly. Only <span className="text-white font-semibold">$50</span> per landing page.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="prompt"
                className="block text-sm font-medium text-zinc-300 mb-3"
              >
                Describe Your Landing Page
              </label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Example: Landing page for a coffee shop in Alajuela, Costa Rica with online reservations, cozy atmosphere, specialty drinks menu, and customer testimonials section..."
                className="w-full h-64 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
              />
              <p className="mt-2 text-xs text-zinc-500">
                Be as detailed as possible. Include your business type, target
                audience, key features, and desired sections.
              </p>
            </div>

            {/* Payment Section */}
            {!isPaid ? (
              <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Payment Required</h3>
                <p className="text-sm text-zinc-400 mb-4">
                  One-time payment of $50 USD to generate your landing page.
                </p>
                <button
                  onClick={handlePayment}
                  className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  Pay $50 USD
                </button>
                <p className="mt-3 text-xs text-zinc-500 text-center">
                  {/* TODO: Connect real payment gateway here (PayPal/Stripe) */}
                  Secure payment via PayPal or Stripe (coming soon)
                </p>
              </div>
            ) : (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
                <p className="text-emerald-500 font-medium">
                  ✓ Payment confirmed! You can now generate your landing page.
                </p>
              </div>
            )}

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={!isPaid || isGenerating || !prompt.trim()}
              className="w-full px-6 py-4 bg-white hover:bg-zinc-200 text-black font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate & Preview
                </>
              )}
            </button>
          </motion.div>

          {/* Right Column - Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Eye className="w-5 h-5 text-emerald-500" />
                Live Preview
              </h3>
              {generatedHtml && (
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="text-sm text-emerald-500 hover:text-emerald-400"
                >
                  {showPreview ? "Hide" : "Show"} Preview
                </button>
              )}
            </div>

            <div className="relative bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
              {!generatedHtml ? (
                <div className="flex items-center justify-center h-[600px] text-zinc-500">
                  <div className="text-center">
                    <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Your landing page preview will appear here</p>
                  </div>
                </div>
              ) : showPreview ? (
                <iframe
                  srcDoc={generatedHtml}
                  className="w-full h-[600px] bg-white"
                  title="Landing Page Preview"
                  sandbox="allow-same-origin"
                />
              ) : (
                <div className="flex items-center justify-center h-[600px] text-zinc-500">
                  <p>Preview hidden</p>
                </div>
              )}
            </div>

            {generatedHtml && (
              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                <p className="text-sm text-zinc-400 mb-3">
                  Your landing page is ready! Next steps:
                </p>
                <ul className="text-sm text-zinc-300 space-y-2">
                  <li>• Download the HTML file</li>
                  <li>• Deploy to your hosting (Vercel, Netlify, etc.)</li>
                  <li>• Customize further if needed</li>
                </ul>
                <button className="mt-4 w-full px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors duration-200">
                  Download HTML
                </button>
              </div>
            )}
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6 text-emerald-500" />
            </div>
            <h4 className="font-semibold mb-2">AI-Powered</h4>
            <p className="text-sm text-zinc-400">
              Advanced AI generates professional, conversion-optimized layouts
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Eye className="w-6 h-6 text-emerald-500" />
            </div>
            <h4 className="font-semibold mb-2">Instant Preview</h4>
            <p className="text-sm text-zinc-400">
              See your landing page in real-time before downloading
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Loader2 className="w-6 h-6 text-emerald-500" />
            </div>
            <h4 className="font-semibold mb-2">Ready in Minutes</h4>
            <p className="text-sm text-zinc-400">
              From description to deployed landing page in under 5 minutes
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
