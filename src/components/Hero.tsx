"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "120+", label: "Products Delivered" },
  { value: "5+",   label: "Years Engineering" },
  { value: "4–8wk", label: "Time to Launch" },
  { value: "3",    label: "Countries" },
];

const marquee = [
  "SaaS Platforms", "AI Systems", "Mobile Apps", "Web Applications",
  "Landing Pages", "API Integrations", "Cloud Infrastructure", "UX/UI Design",
];

const chartBars = [30, 50, 40, 70, 55, 80, 65, 90, 72, 85, 60, 95];

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="CodeCraftt — AI-Native Software Studio"
      className="relative min-h-screen flex flex-col overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.15]" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-[700px] h-[700px] rounded-full bg-indigo-600/[0.06] blur-[180px]" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/[0.04] blur-[140px]" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 lg:px-8">

        {/* Studio label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="pt-14 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500"
        >
          AI-Native Product Studio — Costa Rica
        </motion.p>

        {/* Two-column grid */}
        <div className="flex-1 grid lg:grid-cols-[1fr_440px] gap-16 items-center py-12">

          {/* Left */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: "easeOut" }}
              className="text-[clamp(3rem,6.5vw,5.5rem)] font-bold tracking-tight leading-[1.0]"
            >
              We build software<br />
              <span className="gradient-text">that scales.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="mt-7 text-lg sm:text-xl text-zinc-300 leading-relaxed max-w-md"
            >
              SaaS platforms, AI systems, mobile apps, and high-converting websites for startups across the <strong className="text-zinc-300 font-medium">USA and Latin America</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] text-black font-bold hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-200"
              >
                Book a Discovery Call
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center px-8 py-4 rounded-full border border-white/[0.1] text-zinc-300 font-medium hover:bg-white/[0.04] hover:border-white/20 transition-all duration-200"
              >
                Our Services
              </a>
            </motion.div>
          </div>

          {/* Right — single clean dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm overflow-hidden"
            >
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.05]">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                <div className="ml-3 flex-1 h-4 rounded-md bg-white/[0.05] flex items-center px-2 text-[9px] text-zinc-600">
                  app.saas-client.com
                </div>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "MRR", val: "$42K", c: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/20" },
                    { label: "Users", val: "1,284", c: "text-indigo-400", bg: "bg-indigo-500/10 border-indigo-500/20" },
                    { label: "Uptime", val: "99.9%", c: "text-violet-400", bg: "bg-violet-500/10 border-violet-500/20" },
                  ].map((card) => (
                    <div key={card.label} className={`rounded-xl border p-3 text-center ${card.bg}`}>
                      <div className={`text-base font-bold ${card.c}`}>{card.val}</div>
                      <div className="text-[9px] text-zinc-600 mt-1">{card.label}</div>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl bg-white/[0.03] border border-white/[0.05] p-3">
                  <div className="flex items-end gap-1 h-16">
                    {chartBars.map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-sm bg-indigo-500/25"
                        style={{ height: `${h}%` }}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.4, delay: 1 + i * 0.04, ease: "easeOut" }}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-[9px] text-zinc-600">
                    <span>Revenue Growth</span>
                    <span className="text-emerald-400">+38% MRR</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="h-px bg-white/[0.06] mb-8" />
          <div className="pb-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + i * 0.07 }}
              >
                <p className="text-3xl sm:text-4xl font-bold text-white">{s.value}</p>
                <p className="text-xs text-zinc-500 mt-1.5">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="relative z-10 border-t border-white/[0.05] overflow-hidden"
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex py-4 whitespace-nowrap"
        >
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6">
              <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-700">{item}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-800 shrink-0" />
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
