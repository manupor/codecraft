"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Monitor, Store, Bot, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";

export default function ServicesPage() {
  const services = [
    {
      icon: Monitor,
      title: "Landing Pages",
      price: "From $50 USD",
      description: "High-converting single pages for your product, service, or campaign. Built fast, hosted free.",
      features: [
        "AI-powered generation in minutes",
        "Responsive, mobile-first design",
        "SEO-optimized meta tags",
        "Contact forms included",
        "Free Vercel hosting",
        "Delivered in < 24 hours"
      ],
      cta: "Generate Now",
      href: "/landing-builder"
    },
    {
      icon: Store,
      title: "Business Websites",
      price: "From $299 USD",
      description: "Professional multi-page websites for local businesses, restaurants, clinics, and service providers.",
      features: [
        "Up to 5 custom pages",
        "Custom design (not template-based)",
        "Blog or portfolio section",
        "Google Analytics integration",
        "Custom domain setup",
        "Mobile-optimized, fast loading",
        "1 round of revisions",
        "Delivered in < 5 business days"
      ],
      cta: "Get Started",
      href: "/pricing"
    },
    {
      icon: Bot,
      title: "AI-Powered Web Apps",
      price: "Custom Quote",
      description: "Custom SaaS platforms, booking systems, dashboards, and client portals built for scale.",
      features: [
        "Full-stack development",
        "AI/ML integrations",
        "Admin dashboard & CMS",
        "Database architecture",
        "Payment processing (Stripe/PayPal)",
        "API development",
        "Ongoing support & maintenance",
        "Scalable cloud infrastructure"
      ],
      cta: "Book a Call",
      href: "mailto:hola@codecraftt.com?subject=Custom Web App Inquiry"
    }
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
                Our Services
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto">
                From quick landing pages to complex web applications — we build digital solutions that drive results.
              </p>
            </motion.div>

            <div className="space-y-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 hover:border-[#10B981]/50 transition-all duration-300"
                >
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="mb-4">
                        <service.icon size={56} className="text-[#10B981]" />
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-3">
                        {service.title}
                      </h2>
                      <div className="inline-block px-4 py-2 bg-[#10B981]/10 border border-[#10B981]/30 rounded-full mb-4">
                        <span className="text-sm font-semibold text-[#10B981]">
                          {service.price}
                        </span>
                      </div>
                      <p className="text-zinc-400 leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#10B981] text-black font-bold hover:bg-[#059669] transition-all duration-200"
                      >
                        {service.cta} →
                      </Link>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">
                        What's included:
                      </h3>
                      <ul className="space-y-3">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check size={18} className="text-[#10B981] mt-1 flex-shrink-0" />
                            <span className="text-zinc-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-20 text-center bg-gradient-to-br from-[#10B981]/20 via-[#059669]/10 to-black border border-[#10B981]/30 rounded-3xl p-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Not sure which service you need?
              </h2>
              <p className="text-lg text-zinc-300 mb-6 max-w-2xl mx-auto">
                Let's talk about your project. We'll help you choose the right solution for your business goals and budget.
              </p>
              <a
                href="mailto:hola@codecraftt.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 hover:border-white/30 transition-all duration-200"
              >
                Schedule a Free Consultation
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
