"use client";

import { motion } from "framer-motion";
import { Globe, Brain, Smartphone, Zap, Code2, Server, Palette, Rocket } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "SaaS Platform Development",
    description: "End-to-end SaaS products built for scale, from MVP to enterprise.",
    bullets: ["Multi-tenant architecture & auth", "Subscription billing (Stripe, Paddle)", "Analytics dashboards & admin panel"],
    tag: "Most Popular",
    featured: true,
  },
  {
    icon: Brain,
    title: "AI Systems & Integrations",
    description: "Custom AI that automates workflows and makes your product smarter.",
    bullets: ["OpenAI, Claude & LLM integrations", "AI automation pipelines", "Custom ML models & fine-tuning"],
    tag: "AI-Native",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform iOS & Android apps with native performance.",
    bullets: ["React Native single codebase", "App Store & Play Store launch", "Push notifications & offline mode"],
    tag: "iOS & Android",
  },
  {
    icon: Zap,
    title: "Landing Pages & Websites",
    description: "Conversion-optimized pages that rank and turn visitors into leads.",
    bullets: ["CRO-focused design & copy", "Core Web Vitals 90+ score", "A/B testing ready architecture"],
    tag: "High-Converting",
    featured: true,
  },
  {
    icon: Code2,
    title: "Custom Web Applications",
    description: "Complex web apps with real-time features and deep integrations.",
    bullets: ["Next.js / React frontend", "Complex business logic", "Third-party API integrations"],
    tag: "Full-Stack",
  },
  {
    icon: Server,
    title: "Backend & API Development",
    description: "Scalable APIs and cloud infrastructure built for growth.",
    bullets: ["RESTful & GraphQL APIs", "Microservices architecture", "AWS / GCP cloud-native"],
    tag: "Cloud-Native",
  },
  {
    icon: Palette,
    title: "UX/UI Design & Prototyping",
    description: "Premium product design systems that convert and delight users.",
    bullets: ["Figma design systems", "Interactive prototyping", "Design-to-code handoff"],
    tag: "Design-First",
  },
  {
    icon: Rocket,
    title: "Startup MVP Development",
    description: "Go from idea to live product in 4–8 weeks, investor-ready.",
    bullets: ["Lean scope → fast launch", "Investor-ready product", "Post-launch iteration support"],
    tag: "Ship Fast",
    featured: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-[#04060E]/60">
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
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
                <s.icon size={19} className="text-indigo-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1.5">{s.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed mb-3">{s.description}</p>
              <ul className="space-y-1.5 flex-1">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-xs text-zinc-400">
                    <span className="mt-[5px] w-1 h-1 rounded-full bg-indigo-500/60 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-3 border-t border-white/[0.05]">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-500/70">{s.tag}</span>
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
            Book a Discovery Call →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
