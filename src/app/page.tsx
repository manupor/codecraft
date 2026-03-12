"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Zap, Globe, Sparkles } from "lucide-react";
import ImageUpload from "@/components/ImageUpload";
import NavMenuWrapper from "@/components/NavMenuWrapper";
import About from "@/components/About";
import Services from "@/components/Services";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import ServicesPreview from "@/components/ServicesPreview";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
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
              Apps. Platforms.
              <br />
              <span className="gradient-text">Intelligence.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="mt-6 text-base sm:text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
            >
              We design and develop intelligent apps and websites that help businesses launch, grow, and scale faster.
              <br className="hidden sm:block" />
              From idea to launch — we build scalable, high-performance digital solutions.
            </motion.p>


            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] text-black font-bold text-base hover:shadow-lg hover:shadow-green-500/50 transition-all duration-200"
              >
                Get a Quote
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
              <span>React Native</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>Next.js</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>Flutter</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>AI / Machine Learning</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>AWS Cloud</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>API Systems</span>
            </motion.div>
          </div>
        </section>

        {/* Rest of the original sections */}
        <TrustBar />
        <About />
        <Services />
        <HowItWorks />
        <ServicesPreview />
        <Testimonials />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
