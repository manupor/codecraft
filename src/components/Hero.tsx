"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "150+", label: "Sites & Brands Shipped" },
  { value: "7+",   label: "Years Designing" },
  { value: "2–4wk", label: "Average Launch Time" },
  { value: "100%", label: "Custom, Never Templates" },
];

const marquee = [
  "Web Design", "Brand Identity", "Logo Design", "Landing Pages",
  "E-commerce", "Webflow & Next.js", "Art Direction", "UX/UI Design",
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="CodeCraftt — Web Design & Branding Studio"
      className="relative min-h-screen flex flex-col overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.15]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] rounded-full bg-indigo-600/[0.06] blur-[180px]" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/[0.04] blur-[140px]" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 lg:px-8">

        {/* Centered hero content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500"
          >
            Web Design & Branding Studio — Costa Rica
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: "easeOut" }}
            className="mt-8 text-[clamp(3rem,7vw,6rem)] font-bold tracking-tight leading-[1.0]"
          >
            Brands & websites<br />
            <span className="gradient-text">that sell.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-7 text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-2xl"
          >
We design brands and build high-converting websites that make ambitious companies look unforgettable — for clients across the <strong className="text-zinc-300 font-medium">USA and Latin America</strong>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] text-black font-bold hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-200"
            >
              Start Your Project
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-8 py-4 rounded-full border border-white/[0.1] text-zinc-300 font-medium hover:bg-white/[0.04] hover:border-white/20 transition-all duration-200"
            >
              See What We Do
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="h-px bg-white/[0.06] mb-8" />
          <div className="pb-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.07 }}
              >
                <p className="text-3xl sm:text-4xl font-bold text-white">{s.value}</p>
                <p className="text-xs text-zinc-500 mt-1.5">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="relative z-10 border-t border-white/[0.05] overflow-hidden"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex py-4 whitespace-nowrap"
        >
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6">
              <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-700">{item}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-800 shrink-0" />
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
