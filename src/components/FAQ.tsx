"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Where is CodeCraftt located?",
    a: "We're based in San José, Curridabat, Costa Rica. We operate fully remotely and serve clients across the United States, Mexico, and Latin America. Our team works in EST/CST-compatible time zones, making collaboration seamless for North American companies.",
  },
  {
    q: "Do you work with companies in the United States?",
    a: "Yes — most of our clients are US-based startups and companies looking for high-quality nearshore development. We communicate in English, follow US business standards, and deliver at a cost-effective rate without sacrificing quality.",
  },
  {
    q: "What is nearshore software development?",
    a: "Nearshore development means hiring a development team in a neighboring country with overlapping time zones, similar culture, and lower rates than onshore teams. For US companies, Costa Rica is a top nearshore destination — close, English-fluent, and technically excellent.",
  },
  {
    q: "How long does it take to build a SaaS platform?",
    a: "Most MVPs take 6–12 weeks depending on complexity. A simple SaaS with auth, dashboard, and billing can launch in 6 weeks. More complex platforms with AI features, integrations, and custom infrastructure take 10–16 weeks. We always provide a clear timeline before starting.",
  },
  {
    q: "What technologies does CodeCraftt use?",
    a: "We primarily build with Next.js, React, Node.js, TypeScript, and PostgreSQL. For mobile, we use React Native and Flutter. For AI, we integrate OpenAI, Anthropic, and custom ML models. Infrastructure runs on AWS, Vercel, and GCP. We choose tools based on your product needs, not trends.",
  },
  {
    q: "Can you integrate AI features into my existing product?",
    a: "Absolutely. We can add AI chat interfaces, intelligent automation, document analysis, recommendation engines, and GPT-powered workflows to your existing app. We start with an audit of your current stack and propose the highest-ROI AI integrations.",
  },
  {
    q: "Do you offer fixed-price projects?",
    a: "Yes. For well-defined scopes, we offer fixed-price contracts with clear milestones and deliverables. For evolving products or startups who need flexibility, we also work on a monthly retainer. We'll recommend the right model after our discovery call.",
  },
  {
    q: "What is your minimum project budget?",
    a: "Our landing page and website projects start at $1,500 USD. SaaS platforms and mobile apps typically start at $8,000 USD. AI integrations vary by scope. We're transparent about pricing from day one — no surprises.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400 mb-4">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Questions we <span className="gradient-text">always get.</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.04, ease: "easeOut" }}
              viewport={{ once: true, margin: "-40px" }}
              className="rounded-xl border border-white/[0.1] bg-white/[0.03] overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <span className="text-sm sm:text-base font-medium text-white">{faq.q}</span>
                <span className="shrink-0 text-zinc-300">
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <p className="px-6 pb-5 text-sm text-zinc-300 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
