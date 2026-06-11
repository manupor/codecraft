"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const stats = t.hero.stats;
  const marquee = t.hero.marquee;
  return (
    <section
      id="home"
      aria-label="CodeCraftt — Web Design & Branding Studio"
      className="relative min-h-[100svh] flex flex-col overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.12]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] rounded-full bg-orange-500/[0.04] blur-[180px]" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-amber-600/[0.03] blur-[140px]" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 lg:px-8">

        {/* Centered hero content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5c5f66]"
          >
            {t.hero.label}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: "easeOut" }}
            className="mt-8 text-[clamp(3rem,7vw,6rem)] font-bold tracking-tight leading-[1.0]"
          >
            {t.hero.headline}<br />
            <span className="gradient-text">{t.hero.headlineAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="mt-7 text-lg sm:text-xl text-[#b8b5ae] leading-relaxed max-w-2xl"
          >
{t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-sm bg-[#e89230] text-[#090a0c] font-bold hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-200"
            >
              {t.hero.cta1}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-8 py-4 rounded-sm border border-[#efece7]/10 text-[#b8b5ae] font-medium hover:bg-[#efece7]/[0.04] hover:border-[#efece7]/20 transition-all duration-200"
            >
              {t.hero.cta2}
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
                <p className="text-3xl sm:text-4xl font-bold text-[#efece7]">{s.value}</p>
                <p className="text-xs text-[#5c5f66] mt-1.5">{s.label}</p>
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
              <span className="text-[11px] uppercase tracking-[0.22em] text-[#2e3138]">{item}</span>
              <span className="w-1 h-1 rounded-full bg-[#1f2229] shrink-0" />
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
