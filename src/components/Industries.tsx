"use client";

import { motion } from "framer-motion";

const industries = [
  { name: "SaaS & Software" },
  { name: "AI Startups" },
  { name: "E-commerce" },
  { name: "Real Estate" },
  { name: "Finance & FinTech" },
  { name: "Healthcare" },
  { name: "iGaming" },
  { name: "Logistics" },
  { name: "Media & Content" },
  { name: "Startups" },
];

export default function Industries() {
  return (
    <section className="relative py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-4">
            Industries
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            We build for every <span className="gradient-text">vertical.</span>
          </h2>
          <p className="mt-3 text-base text-zinc-400 max-w-xl mx-auto">
            From regulated industries to fast-moving startups — we understand the unique requirements of your sector.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-wrap justify-center gap-3"
        >
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.04, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
              className="group flex items-center gap-2 px-5 py-3 rounded-full bg-white/[0.03] border border-white/[0.07] hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-200 cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 group-hover:bg-indigo-400 transition-colors shrink-0" />
              <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                {ind.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* SEO content block */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid sm:grid-cols-3 gap-6 text-center"
        >
          {[
            {
              title: "Nearshore Development for US Companies",
              body: "Same time zones, fluent English, US-standard code quality — at nearshore rates. The best of both worlds for American businesses.",
            },
            {
              title: "AI-Powered SaaS Development",
              body: "We design and build SaaS products with AI at the core — not as an add-on. Intelligent workflows, smart recommendations, and automated pipelines.",
            },
            {
              title: "Custom Software for Latin America",
              body: "Deep expertise in the LATAM market. We build products that understand regional nuances, payment systems, and user behavior.",
            },
          ].map((block) => (
            <div
              key={block.title}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
            >
              <h3 className="text-sm font-semibold text-white mb-2">{block.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">{block.body}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
