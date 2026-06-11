"use client";

import { motion } from "framer-motion";
import { Palette, Zap, TrendingUp } from "lucide-react";
import { useLang } from "../context/LanguageContext";

const icons = [Palette, Zap, TrendingUp];

export default function WhyUs() {
  const { t } = useLang();
  const reasons = t.whyUs.items.map((item, i) => ({ ...item, icon: icons[i] }));
  return (
    <section id="about" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.025] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#e89230] mb-4">
            {t.whyUs.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            {t.whyUs.headline}{" "}
            <span className="gradient-text">{t.whyUs.headlineAccent}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
              className="group relative p-9 rounded-sm bg-white/[0.03] border border-white/[0.1] hover:border-[#e89230]/40 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-sm bg-[#e89230]/10 flex items-center justify-center group-hover:bg-[#e89230]/20 transition-colors">
                  <r.icon size={20} className="text-[#e89230]" />
                </div>
                <span className="text-[11px] font-bold text-[#e89230]/80 bg-[#e89230]/10 px-2 py-1 rounded-sm">{r.stat}</span>
              </div>
              <h3 className="text-base font-semibold text-[#efece7] mb-2">{r.title}</h3>
              <p className="text-sm text-[#b8b5ae] leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
