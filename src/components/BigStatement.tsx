"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BigStatement() {
  const { t } = useLanguage();
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.025] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.0]">
              {t.bigStatement.headline1}<br />
              <span className="gradient-text">{t.bigStatement.headlineAccent}</span><br />
              {t.bigStatement.headline2}
            </h2>

            <p className="mt-7 text-xl text-zinc-300 leading-relaxed max-w-md">
              {t.bigStatement.paragraph}
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/[0.12] text-zinc-300 font-medium text-sm hover:bg-white/[0.05] hover:border-white/25 transition-all duration-200"
            >
              {t.bigStatement.cta}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right — floating image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative flex items-center justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/rayo-img/demo/01_fea-img.webp"
                alt="CodeCraftt — SaaS and AI product development"
                width={680}
                height={460}
                className="w-full max-w-[580px] h-auto object-contain drop-shadow-2xl"
                priority={false}
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
