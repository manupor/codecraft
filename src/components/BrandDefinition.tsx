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
            <"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

exp  
import { moineimport { useLanguage } from "@/contextss
export default function BrandDefinition() {
  const { tw-l  const { t } = useLanguage();
  const b =    const b = t.brandDef;

  re  
  return (
    <secti pillars */}
          <div      aria-label={b.ari     s-3 lg:grid-cols-1 xl:grid    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
               <motion.div
          initial={{ opacity: 0,             initial=ro          whileInView={{ opacity: 1, y: hi          transition={{ duration: 0.6, easeio          viewport={{ once: true, margin: "-80px" }}
  <p           className="grid lg:grid-cols[#efece7] mb-1"        >
          {/* Left — definition */}
          <div>
     ea        ax          <div>
            <p class>
            <p}
              {b.eyebrow}
       .div>
      </div>
    </section>
  );
}
