"use client";

import { motion } from "framer-motion";
import { Globe, Sparkles, Zap, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const icons = [Globe, Sparkles, Zap, ShoppingBag];

export default function Services() {
  const { t } = useLanguage();
  const services = t.services.items.map((item, i) => ({ ...item, icon: icons[i] }));
  return (
    <section id="services" aria-label="Web Design and Branding Services" className="relative py-28 bg-[#0d0f11]/50">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.015] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#e89230] mb-5">
            {t.services.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-xl">
            {t.services.headline}<br />
            <span className="gradient-text">{t.services.headlineAccent}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.07, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
              className="group flex gap-6 p-8 rounded-sm border border-white/[0.1] bg-white/[0.03] hover:border-[#e89230]/35 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-sm bg-[#e89230]/10 flex items-center justify-center shrink-0 group-hover:bg-[#e89230]/20 transition-colors">
                <s.icon size={21} className="text-[#e89230]" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-base font-semibold text-[#efece7]">{s.title}</h3>
                  <span className="text-[10px] font-semibold text-[#e89230]/70 bg-[#e89230]/[0.08] px-2 py-0.5 rounded-sm shrink-0">{s.tag}</span>
                </div>
                <p className="text-sm text-[#b8b5ae] leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 flex items-center gap-4"
        >
          <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm bg-[#e89230] text-[#090a0c] font-semibold text-sm hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-200">
            {t.services.cta}
          </a>
          <span className="text-xs text-[#5c5f66]">{t.services.also}</span>
        </motion.div>
      </div>
    </section>
  );
}
