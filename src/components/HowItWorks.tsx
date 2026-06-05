"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    description:
      "We spend 30–60 minutes understanding your business, your audience, and your goals. No templates — every brand and website starts with your story.",
  },
  {
    num: "02",
    title: "Brand & Strategy",
    description:
      "We define your positioning, visual direction, and content strategy. You get a clear creative direction and proposal before any design begins.",
  },
  {
    num: "03",
    title: "Design & Identity",
    description:
      "Logo, color, typography, and full website mockups. We craft a cohesive brand and an interactive design you can review and refine with us.",
  },
  {
    num: "04",
    title: "Build & Develop",
    description:
      "We bring the design to life — pixel-perfect, responsive, and fast. You see live previews every few days, not just reports.",
  },
  {
    num: "05",
    title: "Polish & QA",
    description:
      "Cross-device testing, performance audits, SEO setup, and accessibility checks. We don't launch until every detail is right.",
  },
  {
    num: "06",
    title: "Launch & Support",
    description:
      "We deploy your site, hand over everything, and include a 30-day support window. Need ongoing updates? We offer care plans to keep you growing.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-4">
            Process
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
            From first call to{" "}
            <span className="gradient-text">launch day.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-xl mx-auto">
            A clear, collaborative process that takes the stress out of building your brand and website.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
              viewport={{ once: true, margin: "-60px" }}
              className="group relative p-7 rounded-2xl bg-white/[0.03] border border-white/[0.1] hover:border-[#8B5CF6]/40 hover:bg-white/[0.06] transition-all duration-300"
            >
              <span className="text-5xl font-bold text-white/[0.12] leading-none block mb-4 group-hover:text-violet-500/20 transition-colors">
                {step.num}
              </span>
              <h3 className="text-base font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
