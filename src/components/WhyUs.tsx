"use client";

import { motion } from "framer-motion";
import { Palette, Zap, TrendingUp } from "lucide-react";

const reasons = [
  {
    icon: Palette,
    stat: "Design-led",
    title: "Design that turns heads.",
    description:
      "Every project is led by senior designers. We craft brands and websites that look premium, feel intentional, and set you apart from the competition.",
  },
  {
    icon: Zap,
    stat: "2–4 weeks",
    title: "Launch fast. Look polished.",
    description:
      "No endless revisions or agency bureaucracy. We move quickly with a clear process and ship a website you're proud of in weeks, not months.",
  },
  {
    icon: TrendingUp,
    stat: "Built to convert",
    title: "Beautiful and built to sell.",
    description:
      "Pretty isn't enough. Every page is engineered for speed, SEO, and conversion — so your website doesn't just impress, it drives real results.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="relative py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.025] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-4">
            Why CodeCraftt
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Why teams choose{" "}
            <span className="gradient-text">CodeCraftt.</span>
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
              className="group relative p-9 rounded-2xl bg-white/[0.03] border border-white/[0.1] hover:border-violet-500/40 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                  <r.icon size={20} className="text-violet-400" />
                </div>
                <span className="text-[11px] font-bold text-violet-400/80 bg-violet-500/10 px-2 py-1 rounded-lg">{r.stat}</span>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{r.title}</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
