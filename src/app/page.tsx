"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Zap, Globe, Sparkles } from "lucide-react";
import ImageUpload from "@/components/ImageUpload";
import NavMenuWrapper from "@/components/NavMenuWrapper";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import ServicesPreview from "@/components/ServicesPreview";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";

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
  const [uploadedImages, setUploadedImages] = useState<UploadedFile[]>([]);
  const [isCloneMode, setIsCloneMode] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    try {
      let finalPrompt = prompt;
      let imagesToSend: string[] = [];
      
      // If in clone mode with uploaded images, prepare them for vision analysis
      if (isCloneMode && uploadedImages.length > 0) {
        imagesToSend = uploadedImages.map(img => img.url);
        finalPrompt = `CLONE MODE: Analyze the provided reference images and create a landing page that matches their design, layout, colors, and style.\n\nUser requirements: ${prompt}\n\nIMPORTANT: Study the visual design from the reference images carefully and recreate a similar landing page with the user's requirements. Use the same visual style, color scheme, typography, and layout structure as shown in the images.`;
      }

      const response = await fetch("/api/generate-landing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          prompt: finalPrompt,
          images: imagesToSend
        }),
      });

      if (!response.ok) throw new Error("Failed to generate");

      const data = await response.json();
      if (data.html) {
        // Store the generated HTML in sessionStorage
        sessionStorage.setItem('demo_generated_html', data.html);
        sessionStorage.setItem('demo_generated_prompt', prompt);
        
        // Redirect to landing-builder
        window.location.href = '/landing-builder?demo=true';
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to generate landing page");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-black">
      <GlobalBackground />
      <div className="relative z-10">
        <NavMenuWrapper />
        
        {/* Hero Section with Demo Generator */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 sm:pt-28">
          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05]"
            >
              Your Website.
              <br />
              Built in Minutes.
              <br />
              <span className="gradient-text">Powered by AI.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-base sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
            >
              CodeCraftt designs and deploys high-converting web pages for businesses in Costa Rica and beyond.
              <br className="hidden sm:block" />
              From idea to live website — fast, affordable, and built to grow.
            </motion.p>

            {/* Demo Generator */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mt-8 max-w-4xl mx-auto"
            >
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                {/* Clone Mode Toggle */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Code2 size={16} className="text-green-400" />
                    <span className="text-sm font-medium text-zinc-300">Try Demo Generator</span>
                  </div>
                  <button
                    onClick={() => setIsCloneMode(!isCloneMode)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      isCloneMode ? 'bg-green-600' : 'bg-zinc-600'
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
                  <p className="text-xs text-zinc-500 mb-3">
                    Upload screenshots to clone a design
                  </p>
                )}

                {/* Image Upload for Clone Mode */}
                {isCloneMode && (
                  <div className="mb-4">
                    <button
                      onClick={() => setShowImageUpload(!showImageUpload)}
                      className="w-full px-4 py-2 bg-green-600/20 hover:bg-green-600/30 border border-green-600/30 rounded-lg text-green-400 text-sm font-medium transition flex items-center justify-center gap-2"
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
                    className="w-full bg-black/60 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-green-500 transition resize-none"
                  />
                  
                  <button
                    onClick={handleGenerate}
                    disabled={loading || !prompt.trim()}
                    className="w-full px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#059669] disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold rounded-full transition flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-green-500/50"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
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

                <p className="text-xs text-zinc-500 mt-4">
                  🎯 This is a free demo. Sign in to save, edit, and publish your landing pages.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <a
                href="/signup"
                className="group inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] text-black font-bold text-base hover:shadow-lg hover:shadow-green-500/50 transition-all duration-200"
              >
                Start Building Free
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-white/10 text-white font-medium text-base hover:bg-white/5 hover:border-white/20 transition-all duration-200"
              >
                See Our Work ↓
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-12 flex items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-zinc-300"
            >
              <span>Next.js</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>AWS</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>React</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>AI/ML</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>TypeScript</span>
            </motion.div>
          </div>
        </section>

        {/* Rest of the original sections */}
        <TrustBar />
        <HowItWorks />
        <ServicesPreview />
        <Testimonials />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
