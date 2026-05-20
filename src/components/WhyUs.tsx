"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Rocket, Clock, Target, Code2 } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    stat: "5+ yrs",
    title: "Senior Engineers Only",
    description:
      "No juniors, no outsourcing chains. Every project is led by senior engineers with production experience across SaaS, AI, and mobile.",
  },
  {
    icon: Zap,
    stat: "3× faster",
    title: "AI-Native Workflows",
    description:
      "We use AI across the full dev cycle — architecture, testing, deployment — so you get to market significantly faster than traditional shops.",
  },
  {
    icon: Rocket,
    stat: "4–8 weeks",
    title: "Startup Execution Speed",
    description:
      "We move like a startup. MVPs in 4–8 weeks, features shipped weekly, no bureaucracy. You get velocity without sacrificing quality.",
  },
  {
    icon: Clock,
    stat: "US TZ",
    title: "Same Timezone. No Gaps.",
    description:
      "Based in Costa Rica, fully aligned with US timezones. Real-time collaboration, fast feedback loops, and no overnight delays.",
  },
  {
    icon: Target,
    stat: "Revenue-first",
    title: "Business Outcomes First",
    description:
      "We measure success by your metrics — signups, conversion, MRR — not by code quality alone. Every decision ties back to business impact.",
  },
  {
    icon: Code2,
    stat: "100% yours",
    title: "Full IP Ownership",
    description:
      "You own 100% of the source code from day one. No lock-in, no dependency on us to keep things running. Your product, your IP.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="relative py-24">
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
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            We're not a body-shop or an outsourcing firm. We're a focused product studio that ships software engineered to grow your business.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
              className="group relative p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                  <r.icon size={20} className="text-violet-400" />
                </div>
                <span className="text-[11px] font-bold text-violet-400/80 bg-violet-500/10 px-2 py-1 rounded-lg">{r.stat}</span>
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{r.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
