"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Credibility() {
  const { t } = useLanguage();
  const c = t.credibility;

  return (
    <section className="relative py-20 border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 lg:gap-24"
        >
          {/* Left — headline + sentence */}
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8b5cf6] mb-4">
              {c.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] text-[#efece7]">
              {c.headline}
            </h2>

            {/* Author row */}
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://manuportuguez.com"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 block"
                aria-label="Manuel Portuguez"
              >
                <img
                  src="/mp.jpg"
                  alt="Manuel Portuguez"
                  className="w-20 h-20 rounded-full object-cover object-[center_20%] ring-2 ring-[#8b5cf6]/40 hover:ring-[#8b5cf6] transition-all duration-200"
                />
              </a>
              <p className="text-[#9ca3af] text-base leading-relaxed">
                {c.sentencePre}{" "}
                <a
                  href="https://manuportuguez.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#efece7] font-semibold hover:text-[#8b5cf6] transition-colors duration-200 underline underline-offset-2 decoration-[#8b5cf6]/40 hover:decoration-[#8b5cf6]"
                >
                  Manuel Portuguez
                </a>
                {" "}{c.sentencePost}
              </p>
            </div>
          </div>

          {/* Right — three proof points */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-6 lg:gap-5 shrink-0 lg:min-w-[280px]">
            {c.points.map((point, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="mt-0.5 w-1 h-full min-h-[36px] rounded-full bg-[#8b5cf6]/40 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[#efece7] leading-snug">{point.label}</p>
                  <p className="text-xs text-[#5c5f66] mt-0.5 leading-snug">{point.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
