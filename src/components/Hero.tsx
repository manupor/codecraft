"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const stats = [
  { value: "120+", label: "Products Delivered" },
  { value: "5+",   label: "Years Engineering" },
  { value: "4–8wk", label: "Avg. Time to Launch" },
  { value: "100%", label: "US Timezone Aligned" },
];

const tech = ["React", "Next.js", "Node.js", "React Native", "Python", "Flutter", "AWS", "OpenAI"];

const marquee = [
  "SaaS Platforms", "AI Systems", "Mobile Apps", "Web Applications",
  "Landing Pages", "API Integrations", "Cloud Infrastructure", "UX/UI Design",
];

const bars = [
  { label: "Automation Rate", pct: 87, color: "bg-emerald-500" },
  { label: "AI Accuracy",     pct: 94, color: "bg-indigo-500" },
  { label: "Response Speed",  pct: 78, color: "bg-violet-500" },
];

const chartBars = [30, 50, 40, 70, 55, 80, 65, 90, 72, 85, 60, 95];

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="CodeCraftt — AI-Native Software Development Studio"
      className="relative min-h-screen flex flex-col overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-indigo-600/[0.07] blur-[160px]" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/[0.06] blur-[130px]" />
        <div className="absolute bottom-1/4 left-1/2 w-[350px] h-[350px] rounded-full bg-emerald-500/[0.04] blur-[110px]" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 lg:px-8">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-12"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/[0.06] text-xs font-semibold text-indigo-400 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            AI-Native Product Studio — Costa Rica
          </span>
        </motion.div>

        {/* Two-column grid */}
        <div className="flex-1 grid lg:grid-cols-[1fr_460px] gap-10 items-center py-10">

          {/* Left — text */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: "easeOut" }}
              className="text-[clamp(2.4rem,5.5vw,4.4rem)] font-bold tracking-tight leading-[1.05]"
            >
              AI-Powered SaaS,{" "}
              <span className="gradient-text">Scalable Apps</span>{" "}
              & High-Converting Websites
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: "easeOut" }}
              className="mt-5 text-lg text-zinc-400 leading-relaxed max-w-lg"
            >
              We design and build SaaS platforms, AI systems, mobile apps, and performance-driven websites for{" "}
              <strong className="text-zinc-200 font-medium">startups and growing businesses in the USA and Latin America</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {tech.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-zinc-400 text-xs font-medium">
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52, ease: "easeOut" }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] text-black font-bold text-sm hover:shadow-xl hover:shadow-emerald-500/25 transition-all duration-200"
              >
                Book a Discovery Call
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/[0.1] text-zinc-300 font-medium text-sm hover:bg-white/[0.04] hover:border-white/20 transition-all duration-200"
              >
                Explore Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-5 flex items-center gap-2 text-xs text-zinc-600"
            >
              <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
              Trusted by startups and businesses across USA &amp; Latin America
            </motion.div>
          </div>

          {/* Right — floating UI cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex flex-col gap-4"
          >
            {/* SaaS dashboard mockup */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm overflow-hidden"
            >
              <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-white/[0.05] bg-white/[0.02]">
                <div className="w-2 h-2 rounded-full bg-red-500/40" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/40" />
                <div className="ml-2 flex-1 h-3.5 rounded bg-white/[0.04] text-[8px] text-zinc-600 flex items-center px-2">
                  app.saas-client.com — Dashboard
                </div>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-3 gap-2.5 mb-3">
                  {[
                    { label: "MRR", val: "$42K", c: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
                    { label: "Users", val: "1,284", c: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20" },
                    { label: "Uptime", val: "99.9%", c: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
                  ].map((card) => (
                    <div key={card.label} className={`rounded-lg border p-2 text-center ${card.bg}`}>
                      <div className={`text-sm font-bold ${card.c}`}>{card.val}</div>
                      <div className="text-[9px] text-zinc-600 mt-0.5">{card.label}</div>
                    </div>
                  ))}
                </div>
                <div className="h-14 rounded-lg bg-white/[0.03] border border-white/[0.05] flex items-end px-2 pb-1.5 gap-0.5">
                  {chartBars.map((h, i) => (
                    <div key={i} className="flex-1 rounded-sm bg-indigo-500/30" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </motion.div>

            {/* AI metrics card */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              className="self-end w-[85%] rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-4"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-semibold text-zinc-400">AI System Performance</span>
                <span className="text-[9px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full">Live</span>
              </div>
              {bars.map((b) => (
                <div key={b.label} className="mb-2.5">
                  <div className="flex justify-between text-[9px] mb-1">
                    <span className="text-zinc-500">{b.label}</span>
                    <span className="text-zinc-300">{b.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.05]">
                    <motion.div
                      className={`h-full rounded-full ${b.color}/60`}
                      initial={{ width: 0 }}
                      animate={{ width: `${b.pct}%` }}
                      transition={{ duration: 1.5, delay: 1.2 }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Deploy card */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="w-[62%] rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm p-3.5"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-zinc-500 font-mono">deploy.ts</span>
              </div>
              <div className="font-mono space-y-1">
                <div className="text-[9px]">
                  <span className="text-violet-400">const </span>
                  <span className="text-blue-300">app </span>
                  <span className="text-zinc-500">= await </span>
                  <span className="text-emerald-400">build()</span>
                </div>
                <div className="text-[9px] text-zinc-600">// Ship in weeks, not months</div>
                <div className="text-[9px]">
                  <span className="text-zinc-500">→ </span>
                  <span className="text-emerald-300">{"{ status: 'live ✓' }"}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <div className="h-px bg-white/[0.06] mb-8" />
          <div className="pb-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.0 + i * 0.06 }}
              >
                <p className="text-2xl sm:text-3xl font-bold text-white">{s.value}</p>
                <p className="text-xs text-zinc-500 mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="relative z-10 border-t border-white/[0.05] overflow-hidden"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex py-3.5 whitespace-nowrap"
        >
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-5 px-5">
              <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-700 font-medium">{item}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-800 shrink-0" />
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
