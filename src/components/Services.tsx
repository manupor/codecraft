"use client";

import { motion } from "framer-motion";
import {
  Globe, LayoutTemplate, Boxes, BrainCircuit,
  Smartphone, Palette, Cloud, Plug,
} from "lucide-react";

const services = [
  {
    icon: LayoutTemplate,
    title: "Landing Page Development",
    description:
      "High-converting landing pages engineered for leads, signups, and sales. SEO-optimized, mobile-first, and built to outperform ads.",
    tag: "From $1,500",
    featured: false,
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Enterprise-grade websites built with Next.js. Lightning-fast, fully responsive, and designed to rank on Google from day one.",
    tag: "From $3,000",
    featured: false,
  },
  {
    icon: Boxes,
    title: "SaaS Development",
    description:
      "End-to-end SaaS platform development — from auth and billing to multi-tenant architecture and admin dashboards that scale.",
    tag: "From $8,000",
    featured: true,
  },
  {
    icon: BrainCircuit,
    title: "AI Integrations",
    description:
      "Connect your product to OpenAI, Anthropic, or custom ML models. Chatbots, document analysis, automation — built right, not rushed.",
    tag: "Custom Quote",
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "React Native and Flutter apps for iOS and Android. From startup MVPs to enterprise mobile platforms — we ship apps that users love.",
    tag: "From $8,000",
    featured: false,
  },
  {
    icon: Palette,
    title: "UX/UI Design",
    description:
      "Pixel-perfect interfaces backed by user research. We design products that feel intuitive, look premium, and convert at every touchpoint.",
    tag: "Custom Quote",
    featured: false,
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "AWS, GCP, and Azure setup, CI/CD pipelines, containerization, and DevOps — the backbone your product needs to stay online and fast.",
    tag: "Custom Quote",
    featured: false,
  },
  {
    icon: Plug,
    title: "API & Integrations",
    description:
      "Connect any system, payment provider, CRM, or third-party API. We build robust integration layers that keep your stack unified.",
    tag: "Custom Quote",
    featured: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.02] to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-4">
            Services
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            Everything you need to{" "}
            <span className="gradient-text">build & grow.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-xl mx-auto">
            From a single landing page to a full AI-powered SaaS — we cover the entire product lifecycle.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
              className={`group relative flex flex-col p-6 rounded-2xl border transition-all duration-300 ${
                s.featured
                  ? "bg-indigo-500/[0.06] border-indigo-500/25 hover:border-indigo-500/50"
                  : "bg-white/[0.02] border-white/[0.06] hover:border-indigo-500/25 hover:bg-white/[0.04]"
              }`}
            >
              {s.featured && (
                <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full">
                  Popular
                </span>
              )}
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-5 group-hover:bg-indigo-500/20 transition-colors">
                <s.icon size={20} className="text-indigo-400" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed flex-1">{s.description}</p>
              <div className="mt-5 pt-4 border-t border-white/[0.06]">
                <span className="text-xs font-semibold text-indigo-400">{s.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-semibold text-sm hover:shadow-xl hover:shadow-violet-500/25 transition-all duration-200"
          >
            Discuss Your Project →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
