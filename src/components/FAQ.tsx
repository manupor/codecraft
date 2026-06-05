"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What does CodeCraftt actually do?",
    a: "We're a web design and branding studio. We create brand identities — logos, color systems, typography — and design and build custom websites that look premium and convert visitors into customers. From a brand refresh to a full website launch, we cover it end to end.",
  },
  {
    q: "Do you only design, or do you build the website too?",
    a: "Both. We're a full-service studio — we handle the strategy, brand identity, copywriting, design, and development. You get a finished, live website without needing to hire a separate developer or agency.",
  },
  {
    q: "How long does a website or branding project take?",
    a: "Most websites launch in 2–4 weeks. A standalone logo or brand identity takes about 1–2 weeks. Larger projects with e-commerce or custom features take a bit longer. We always give you a clear timeline before we start.",
  },
  {
    q: "Do you work with companies in the United States?",
    a: "Yes — many of our clients are US-based. We communicate in English, work in US-compatible time zones from Costa Rica, and deliver world-class design at a more cost-effective rate than US agencies.",
  },
  {
    q: "Will my website be easy for me to update?",
    a: "Absolutely. We build on platforms like Webflow, Shopify, or modern CMS setups so you can edit content yourself. We also include a handover walkthrough and offer care plans if you'd rather we handle updates for you.",
  },
  {
    q: "Can you redesign my existing website or brand?",
    a: "Yes. Rebrands and website redesigns are some of our most requested projects. We audit your current presence, identify what's holding you back, and rebuild it into something modern, cohesive, and high-converting.",
  },
  {
    q: "Do you offer fixed-price projects?",
    a: "Yes. For well-defined scopes — like a website or brand package — we offer fixed prices with clear deliverables. For ongoing needs we also offer monthly care plans. We'll recommend the right fit after our discovery call.",
  },
  {
    q: "What does a project cost?",
    a: "Logo and brand identity projects start around $800 USD. Custom websites typically start at $1,500 USD, and full brand + website packages scale from there. We're transparent about pricing from day one — no surprises.",
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
