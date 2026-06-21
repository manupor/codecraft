"use client";

import { motion } from "framer-motion";
import { Globe, Sparkles, Zap, ShoppingBag } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useContactModal } from "@/components/HomeClient";

const icons = [Globe, Sparkles, Zap, ShoppingBag];

export default function Services() {
  const { t } = useLanguage();
  const { openModal } = useContactModal();
  const services = t.services.items.map((item, i) => ({ ...item, icon: icons[i] }));
  return (
    <section id="services" aria-label="Web Design and Branding Services" className="relative py-28 bg-[#0d0f11]/50">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-600/[0.015] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8b5cf6] mb-5">
            {t.services.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-xl">
            {t.services.headline}<br />
            <span className="gradient-text">{t.services.headlineAccent}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
          className="grid sm:grid-cols-2 gap-5"
        >
          {services.map((s) => (
            <div
              key={s.title}
              className="group flex gap-6 p-8 rounded-sm border border-white/[0.1] bg-white/[0.03] hover:border-[#8b5cf6]/35 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-sm bg-[#8b5cf6]/10 flex items-center justify-center shrink-0 group-hover:bg-[#8b5cf6]/20 transition-colors">
                <s.icon size={21} className="text-[#8b5cf6]" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-base font-semibold text-[#efece7]">{s.title}</h3>
                  <span className="text-[10px] font-semibold text-[#8b5cf6]/70 bg-[#8b5cf6]/[0.08] px-2 py-0.5 rounded-sm shrink-0">{s.tag}</span>
                </div>
                <p className="text-sm text-[#b8b5ae] leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 flex items-center gap-4"
        >
          <button onClick={openModal} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm bg-[#8b5cf6] text-white font-semibold text-sm hover:shadow-xl hover:shadow-violet-500/30 transition-all duration-200">
            {t.services.cta}
          </button>
          <span className="text-xs text-[#5c5f66]">{t.services.also}</span>
        </motion.div>
      </div>
    </section>
  );
}
