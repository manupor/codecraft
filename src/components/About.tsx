"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Server,
  TrendingUp,
  Cloud,
  Plug,
  LayoutTemplate,
} from "lucide-react";

const projects = [
  { icon: Brain, label: "AI-driven financial platforms" },
  { icon: Server, label: "Multi-tenant SaaS infrastructure" },
  { icon: TrendingUp, label: "Affiliate marketing ecosystems" },
  { icon: LayoutTemplate, label: "High-conversion landing architectures" },
  { icon: Cloud, label: "Cloud deployments (AWS / Lightsail / EC2)" },
  { icon: Plug, label: "API integrations (QuickBooks, Plaid, payment systems)" },
];

function FadeInWhenVisible({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-12 lg:py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left column */}
          <div>
            <FadeInWhenVisible>
              <p className="text-sm font-medium text-indigo-400 tracking-wider uppercase mb-4">
                About
              </p>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Architecture for{" "}
                <span className="gradient-text">performance</span>
              </h2>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.1}>
              <p className="mt-4 text-base sm:text-lg text-zinc-200 leading-relaxed">
                CodeCraft is a product development studio founded by Manuel
                Portuguez — a technical creative leader with over a decade of
                experience building digital systems that generate revenue.
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <p className="mt-3 text-base sm:text-lg text-zinc-200 leading-relaxed">
                From enterprise tool redesigns to AI-powered SaaS platforms, the
                focus has always been the same:
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <div className="mt-6 space-y-2">
                {[
                  "Build scalable systems.",
                  "Engineer conversion.",
                  "Design for growth.",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-base text-white"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <div className="mt-8 p-4 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <p className="text-base text-zinc-100 italic leading-relaxed">
                  &ldquo;This is not design for aesthetics.
                  <br />
                  This is architecture for performance.&rdquo;
                </p>
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Right column — projects */}
          <div className="space-y-4">
            <FadeInWhenVisible>
              <p className="text-sm font-medium text-zinc-300 uppercase tracking-wider mb-6">
                Projects Include
              </p>
            </FadeInWhenVisible>
            {projects.map((project, i) => (
              <FadeInWhenVisible key={project.label} delay={0.1 * i}>
                <div className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/[0.03] transition-colors duration-200 border border-transparent hover:border-white/[0.06]">
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors">
                    <project.icon size={20} className="text-indigo-400" />
                  </div>
                  <span className="text-base text-zinc-100 pt-2 leading-snug">
                    {project.label}
                  </span>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
