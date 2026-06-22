"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BrandDefinition() {
  const { t } = useLanguage();
  const b = t.brandDef;

  return (
    <section
      id="about-brand"
      aria-label={b.ariaLabel}
      className="relative py-20 border-b border-white/[0.05]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start"
        >
          {/* Left — definition */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8b5cf6] mb-4">
              {b.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] text-[#efece7]">
              {b.headline}
            </h2>
            <p className="mt-5 text-base text-[#9ca3af] leading-relaxed">
              {b.definition}
            </p>
          </div>

          {/* Right — pillars */}
          <div className="grid grid-cols-1 gap-5">
            {b.pillars.map((pillar: { title: string; desc: string }, i: number) => (
              <div key={i} className="flex gap-4 items-start p-5 rounded-sm border border-white/[0.07] bg-white/[0.02]">
                <span className="text-lg font-bold text-[#8b5cf6]/30 shrink-0 w-6 tabular-nums">0{i + 1}</span>
                <div>
                  <h3 className="text-sm font-semibold text-[#efece7] mb-1">{pillar.title}</h3>
                  <p className="text-sm text-[#9ca3af] leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
