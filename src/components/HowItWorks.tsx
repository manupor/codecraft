"use client";

import { motion } from "framer-motion";
import { useLang } from "../context/LanguageContext";

export default function HowItWorks() {
  const { t } = useLang();
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
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e89230] mb-4">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
              className="group relative p-7 rounded-sm bg-white/[0.03] border border-white/[0.1] hover:border-[#e89230]/40 hover:bg-white/[0.06] transition-all duration-300"
            >
              <span className="text-5xl font-bold text-white/[0.12] leading-none block mb-4 group-hover:text-[#e89230]/20 transition-colors">
                {step.num}
              </span>
              <h3 className="text-base font-semibold text-[#efece7] mb-2">{step.title}</h3>
              <p className="text-sm text-[#b8b5ae] leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
