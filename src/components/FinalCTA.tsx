"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FinalCTA() {
  const { t } = useLanguage();
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/[0.04] to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-violet-600/[0.06] blur-[100px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-600 mb-7">
            {t.finalCta.eyebrow}
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.0]">
            {t.finalCta.headline1}<br />
            <span className="gradient-text">{t.finalCta.headlineAccent}</span>
          </h2>
          <p className="mt-7 text-lg text-zinc-300 max-w-sm mx-auto leading-relaxed">
            {t.finalCta.paragraph}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-bold hover:shadow-2xl hover:shadow-violet-500/30 transition-all duration-200"
            >
              {t.finalCta.cta1}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/50683442522"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/[0.1] text-zinc-300 font-medium hover:bg-white/[0.04] hover:border-white/20 transition-all duration-200"
            >
              {t.finalCta.cta2}
            </a>
          </div>
          <p className="mt-6 text-xs text-zinc-500">
            {t.finalCta.trust}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
