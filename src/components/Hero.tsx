"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "120+", label: "Projects Shipped" },
  { value: "5+",   label: "Years Building" },
  { value: "3",    label: "Countries" },
  { value: "100%", label: "Remote-Ready" },
];

const marquee = [
  "SaaS Platforms", "AI Systems", "Mobile Apps", "Landing Pages",
  "Web Applications", "API Integrations", "Cloud Infrastructure", "UX/UI Design",
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="CodeCraftt — Custom Software Development & AI Solutions"
      className="relative min-h-screen flex flex-col overflow-hidden pt-24"
    >
      {/* Grid texture */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-25" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[560px] h-[560px] rounded-full bg-[#10B981]/8 blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/7 blur-[120px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 lg:px-8">

        {/* Studio label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="pt-14 pb-10 flex items-center gap-3"
        >
          <span className="w-8 h-px bg-zinc-700" />
          <span className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-medium">
            Software Development Studio — Costa Rica
          </span>
        </motion.div>

        {/* H1 */}
        <div className="flex-1 flex flex-col justify-center pb-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: "easeOut" }}
            className="text-[clamp(2.6rem,7vw,6rem)] font-bold tracking-tight leading-[1.04] max-w-5xl"
          >
            We Build SaaS Platforms, AI Systems &{" "}
            <span className="gradient-text">High-Converting Websites</span>{" "}
            That Scale
          </motion.h1>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
          className="h-px bg-white/[0.08]"
        />

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
          className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end"
        >
          {/* Left */}
          <div>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-lg mb-8">
              Senior-level product studio in Costa Rica. We design and engineer software for startups and businesses across the US and Latin America.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] text-black font-bold text-sm hover:shadow-xl hover:shadow-[#10B981]/25 transition-all duration-200"
              >
                Start Your Project
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/10 text-white font-medium text-sm hover:bg-white/5 hover:border-white/20 transition-all duration-200"
              >
                Explore Services
              </a>
            </div>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.75 + i * 0.07, ease: "easeOut" }}
              >
                <p className="text-3xl xl:text-4xl font-bold text-white">{s.value}</p>
                <p className="text-xs text-zinc-500 mt-1 leading-snug">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="relative z-10 border-t border-white/[0.06] overflow-hidden"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex py-4 whitespace-nowrap"
        >
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6">
              <span className="text-xs uppercase tracking-[0.22em] text-zinc-600 font-medium">{item}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700 shrink-0" />
            </span>
          ))}
        </motion.div>
      </motion.div>

    </section>
  );
}
