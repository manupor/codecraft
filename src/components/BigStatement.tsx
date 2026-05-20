"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BigStatement() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.025] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <h2 className="text-5xl sm:text-7xl lg:text-[86px] font-bold tracking-tight leading-[1.0]">
            From idea to<br />
            <span className="gradient-text">live product.</span><br />
            In weeks.
          </h2>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 max-w-4xl">
            <p className="text-xl text-zinc-400 max-w-md leading-relaxed">
              We handle architecture, design, engineering, and launch — so you focus on growth.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/[0.1] text-zinc-300 font-medium text-sm hover:bg-white/[0.04] hover:border-white/20 transition-all duration-200 whitespace-nowrap"
            >
              Let&apos;s build it
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
