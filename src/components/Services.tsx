"use client";

import { motion } from "framer-motion";
import { Globe, Brain, Zap, Rocket } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "SaaS Platform Development",
    description: "Full-stack SaaS products — auth, billing, dashboards, and multi-tenant architecture built to scale.",
    tag: "Most Requested",
  },
  {
    icon: Brain,
    title: "AI Systems & Automation",
    description: "LLM integrations, AI pipelines, and intelligent workflows that make your product dramatically smarter.",
    tag: "AI-Native",
  },
  {
    icon: Zap,
    title: "Landing Pages & Websites",
    description: "Conversion-optimized, SEO-ready, Core Web Vitals 90+. Pages that rank and turn visitors into revenue.",
    tag: "High-Converting",
  },
  {
    icon: Rocket,
    title: "Startup MVP Development",
    description: "From idea to live product in 4–8 weeks. Lean, focused, and investor-ready from day one.",
    tag: "Ship Fast",
  },
];

export default function Services() {
  return (
    <section id="services" aria-label="Software Development Services" className="relative py-28 bg-[#04060E]/50">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.015] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-400 mb-5">
            What we build
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-xl">
            The full stack,<br />
            <span className="gradient-text">end to end.</span>
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
              className="group flex gap-6 p-8 rounded-2xl border border-white/[0.1] bg-white/[0.03] hover:border-indigo-500/35 hover:bg-white/[0.06] transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                <s.icon size={21} className="text-indigo-400" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-base font-semibold text-white">{s.title}</h3>
                  <span className="text-[10px] font-semibold text-indigo-400/70 bg-indigo-500/[0.08] px-2 py-0.5 rounded-full shrink-0">{s.tag}</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">{s.description}</p>
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
          <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-semibold text-sm hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-200">
            Book a Discovery Call →
          </a>
          <span className="text-xs text-zinc-400">Also: Mobile apps, custom APIs, UX/UI design</span>
        </motion.div>
      </div>
    </section>
  );
}
