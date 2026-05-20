"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BrainCircuit, Rocket, Users, BarChart3, GitBranch } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Senior-Level Team",
    description:
      "No juniors, no outsourcing. Every project is built by senior engineers and designers with 5+ years of real-world product experience.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Native Builders",
    description:
      "We don't add AI as a feature — we architect systems where intelligence is the core. From GPT integrations to custom ML pipelines.",
  },
  {
    icon: Rocket,
    title: "Startup Speed",
    description:
      "We ship fast without cutting corners. Most MVPs go from kickoff to production in under 6 weeks. Your idea can't afford to wait.",
  },
  {
    icon: Users,
    title: "Founder-Friendly",
    description:
      "We think like founders. We challenge assumptions, flag bad ideas early, and always optimize for business outcomes — not just code.",
  },
  {
    icon: BarChart3,
    title: "Conversion-Focused",
    description:
      "Every interface we design is built to convert. UX decisions are backed by data, heatmaps, and proven conversion frameworks.",
  },
  {
    icon: GitBranch,
    title: "Full Ownership",
    description:
      "You own everything: source code, infrastructure, and IP. We hand over clean, documented, production-ready work — no lock-in.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="relative py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.03] to-transparent" />
      </div>

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
            Built different.{" "}
            <span className="gradient-text">Engineered to win.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto">
            We're not a generic agency. We're a focused product studio that ships software that actually grows your business.
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
              <div className="w-11 h-11 rounded-xl bg-violet-500/10 flex items-center justify-center mb-5 group-hover:bg-violet-500/20 transition-colors">
                <r.icon size={22} className="text-violet-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{r.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
