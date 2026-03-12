"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import FloatingLines from "./FloatingLines";

export default function Hero() {
  return (
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

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
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
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 sm:mt-20 flex items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-zinc-300"
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
  );
}
