"use client";

import { motion } from "framer-motion";
import { Check, X, CreditCard } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";

export default function PricingPage() {
  const pricingTiers = [
    {
      name: "AI Landing Page",
      price: "$50",
      subtitle: "One-time payment",
      badge: "Most Popular",
      features: [
        { text: "1-page responsive design", included: true },
        { text: "AI-generated from your prompt", included: true },
        { text: "SEO meta tags included", included: true },
        { text: "Contact form", included: true },
        { text: "Free hosting (Vercel)", included: true },
        { text: "Delivered in < 24 hours", included: true },
        { text: "Custom domain", included: false },
        { text: "Editable CMS", included: false },
      ],
      cta: "Generate Now",
      href: "/landing-builder",
      highlighted: true,
    },
    {
      name: "Business Website",
      price: "$299",
      subtitle: "One-time payment",
      features: [
        { text: "Up to 5 pages", included: true },
        { text: "Custom design (not template-based)", included: true },
        { text: "Blog or portfolio section", included: true },
        { text: "Google Analytics connected", included: true },
        { text: "Custom domain setup", included: true },
        { text: "Mobile-first, fast load", included: true },
        { text: "1 round of revisions", included: true },
        { text: "Delivered in < 5 business days", included: true },
      ],
      cta: "Get Started",
      href: "mailto:hola@codecraftt.com?subject=Business Website Inquiry",
      highlighted: false,
    },
    {
      name: "AI Web App / SaaS",
      price: "Custom",
      subtitle: "Project-based",
      features: [
        { text: "Full-stack development", included: true },
        { text: "AI integrations", included: true },
        { text: "Admin dashboard", included: true },
        { text: "Database & API", included: true },
        { text: "Payment processing", included: true },
        { text: "Ongoing support options", included: true },
        { text: "Scalable architecture", included: true },
      ],
      cta: "Book a Strategy Call",
      href: "mailto:hola@codecraftt.com?subject=Custom Web App Inquiry",
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: "Do I need technical knowledge to use the Landing Builder?",
      answer: "Not at all. Just describe your business in plain language and we handle the rest.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "PayPal, SINPE Móvil (Costa Rica), and bank transfer.",
    },
    {
      question: "Can I edit my landing page after it's generated?",
      answer: "Yes — we deliver the source code so you or your developer can make changes.",
    },
    {
      question: "How is the website hosted?",
      answer: "We deploy it on Vercel, one of the fastest hosting platforms globally. Free for basic sites.",
    },
    {
      question: "Do you work with businesses outside Costa Rica?",
      answer: "Yes, we work internationally. Payment in USD via PayPal.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-black">
      <GlobalBackground />
      <div className="relative z-10">
        <Navbar />

        <section className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Simple, transparent pricing.
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
                No hidden fees. No subscriptions. Pay once, launch forever.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {tier.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <span className="inline-block px-4 py-1 bg-[#10B981] text-black text-xs font-bold rounded-full">
                        {tier.badge}
                      </span>
                    </div>
                  )}
                  <div
                    className={`h-full bg-white/5 backdrop-blur-sm rounded-2xl p-8 ${
                      tier.highlighted
                        ? "border-2 border-[#10B981]"
                        : "border border-white/10"
                    } hover:border-[#10B981]/50 transition-all duration-300`}
                  >
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {tier.name}
                      </h3>
                      <p className="text-sm text-zinc-500">{tier.subtitle}</p>
                    </div>

                    <div className="mb-8">
                      <div className="text-4xl font-bold text-white mb-1">
                        {tier.price}
                      </div>
                      {tier.price !== "Custom" && (
                        <p className="text-sm text-zinc-500">USD</p>
                      )}
                    </div>

                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          {feature.included ? (
                            <Check className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-zinc-600 flex-shrink-0 mt-0.5" />
                          )}
                          <span
                            className={
                              feature.included
                                ? "text-zinc-300"
                                : "text-zinc-600"
                            }
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={tier.href}
                      className={`block w-full text-center py-3 rounded-lg font-bold transition-all duration-200 ${
                        tier.highlighted
                          ? "bg-[#10B981] text-black hover:bg-[#059669]"
                          : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                      }`}
                    >
                      {tier.cta} →
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#10B981]/30 transition-all duration-300"
                  >
                    <summary className="cursor-pointer text-white font-semibold list-none flex items-center justify-between">
                      {faq.question}
                      <span className="text-[#10B981] group-open:rotate-180 transition-transform">
                        ▼
                      </span>
                    </summary>
                    <p className="mt-4 text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
