"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Package, Cpu, Server } from "lucide-react";

const metrics = [
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Package, value: "100+", label: "Digital Products" },
  { icon: Cpu, value: "Multi-Tenant", label: "SaaS Architecture" },
  { icon: Server, value: "Cloud-First", label: "Infrastructure" },
];

const currentProjects = [
  "AI-powered SaaS platforms for finance & automation",
  "High-scale affiliate marketing ecosystems",
  "SaaS-based landing page generators",
];

export default function Authority() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="authority" className="relative py-12 lg:py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-indigo-400 tracking-wider uppercase mb-4">
            Track Record
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Built to <span className="gradient-text">deliver</span>
          </h2>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center group hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-500/20 transition-colors">
                <metric.icon size={24} className="text-indigo-400" />
              </div>
              <div className="text-2xl sm:text-4xl font-bold gradient-text mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-zinc-200">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Currently leading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-center text-base sm:text-lg font-semibold text-white mb-6 sm:mb-8">
            Currently leading
          </h3>
          <div className="space-y-4">
            {currentProjects.map((project, i) => (
              <motion.div
                key={project}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + 0.1 * i }}
                className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                <span className="text-zinc-100">{project}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
