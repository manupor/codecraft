"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    description:
      "We spend 30–60 minutes understanding your business, goals, and technical requirements. No templates — every conversation is tailored to your context.",
  },
  {
    num: "02",
    title: "Strategy & Scope",
    description:
      "We define architecture, tech stack, MVP scope, and timeline. You get a clear proposal with milestones, costs, and deliverables — before we write a line of code.",
  },
  {
    num: "03",
    title: "Design & Prototype",
    description:
      "Wireframes, UI components, and an interactive prototype you can test. We validate UX decisions early so development is fast and on-target.",
  },
  {
    num: "04",
    title: "Development",
    description:
      "Sprints of 1–2 weeks with continuous delivery. You see real progress in Vercel previews every week — not just reports. Code reviews and documentation included.",
  },
  {
    num: "05",
    title: "QA & Testing",
    description:
      "Automated tests, cross-browser QA, performance audits, and accessibility checks. We don't ship until it's production-ready — and we put that in writing.",
  },
  {
    num: "06",
    title: "Launch & Scale",
    description:
      "Deployment to your cloud environment, monitoring setup, and a 30-day post-launch support window. After that, we offer retainer plans for continuous growth.",
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
            How we go from{" "}
            <span className="gradient-text">idea to launch.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-xl mx-auto">
            A transparent, predictable process designed to reduce risk and maximize output.
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
