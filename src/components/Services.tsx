"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Layers,
  BrainCircuit,
  Target,
  CloudCog,
  RefreshCcw,
} from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "SaaS Development",
    description: "End-to-end product architecture from MVP to scale.",
  },
  {
    icon: BrainCircuit,
    title: "AI Integrations",
    description:
      "Automation, categorization engines, workflow intelligence.",
  },
  {
    icon: Target,
    title: "High-Conversion Platforms",
    description:
      "Landing systems optimized for revenue, not vanity metrics.",
  },
  {
    icon: CloudCog,
    title: "Cloud Infrastructure",
    description:
      "AWS deployment, scalability optimization, system hardening.",
  },
  {
    icon: RefreshCcw,
    title: "Product Re-Engineering",
    description:
      "Turning unstable systems into structured, scalable engines.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-12 lg:py-16">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-indigo-400 tracking-wider uppercase mb-4">
            Services
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            What we <span className="gradient-text">build</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-200 max-w-xl mx-auto">
            Full-stack product development with a focus on systems that generate revenue and scale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-5 group-hover:bg-indigo-500/20 transition-colors duration-300">
                <service.icon size={24} className="text-indigo-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                {service.description}
              </p>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow" />
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-6 mt-6">
          {services.slice(3).map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * (i + 3) }}
              className="group relative p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-300 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-5 group-hover:bg-indigo-500/20 transition-colors duration-300">
                <service.icon size={24} className="text-indigo-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                {service.description}
              </p>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
