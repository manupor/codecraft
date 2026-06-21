"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function HowItWorks() {
  const { t } = useLanguage();
  const steps = t.howItWorks.steps;
  return (
    <section id="process" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b5cf6] mb-4">
            {t.howItWorks.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            {t.howItWorks.headline}{" "}
            <span className="gradient-text">{t.howItWorks.headlineAccent}</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#b8b5ae] max-w-xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-x-16 gap-y-0 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
              className="flex gap-5 py-7 border-b border-white/[0.06] last:border-0"
            >
              <span className="text-2xl font-bold text-[#8b5cf6]/30 leading-none shrink-0 pt-0.5 w-8 tabular-nums">{step.num}</span>
              <div>
                <h3 className="text-sm font-semibold text-[#efece7] mb-1">{step.title}</h3>
                <p className="text-sm text-[#9ca3af] leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
