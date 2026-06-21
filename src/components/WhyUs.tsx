"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useContactModal } from "@/components/HomeClient";

export default function WhyUs() {
  const { t } = useLanguage();
  const { openModal } = useContactModal();
  const reasons = t.whyUs.items;
  return (
    <section id="about" className="relative py-28 border-t border-white/[0.05]">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — sticky claim */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
            className="lg:sticky lg:top-32"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8b5cf6] mb-5">
              {t.whyUs.eyebrow}
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
              {t.whyUs.headline}{" "}
              <span className="gradient-text">{t.whyUs.headlineAccent}</span>
            </h2>
            <p className="mt-6 text-base text-[#9ca3af] leading-relaxed max-w-sm">
              {t.whyUs.items[0].description}
            </p>
            <button
              onClick={openModal}
              className="group mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-sm bg-[#8b5cf6] text-white font-semibold text-sm hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-200"
            >
              {t.bigStatement.cta}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          {/* Right — stacked rows */}
          <div className="flex flex-col divide-y divide-white/[0.07]">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                viewport={{ once: true, margin: "-40px" }}
                className="py-8 first:pt-0 last:pb-0 flex gap-6 items-start"
              >
                <span className="text-4xl font-bold text-[#8b5cf6]/20 leading-none shrink-0 w-12 text-right tabular-nums">
                  0{i + 1}
                </span>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-[#efece7]">{r.title}</h3>
                    <span className="text-[10px] font-bold text-[#8b5cf6] bg-[#8b5cf6]/10 px-2 py-0.5 rounded-sm shrink-0">{r.stat}</span>
                  </div>
                  <p className="text-sm text-[#9ca3af] leading-relaxed">{r.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
