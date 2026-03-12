"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Monitor, Store, Bot } from "lucide-react";

export default function ServicesPreview() {
  const services = [
    {
      icon: Monitor,
      title: "Mobile Apps",
      description: "Custom iOS and Android applications. Perfect for startups, SaaS platforms, marketplace apps, and enterprise tools.",
      tag: "Custom Quote",
      href: "/pricing"
    },
    {
      icon: Store,
      title: "Websites",
      description: "High-performance websites designed to convert. Corporate sites, landing pages, e-commerce platforms, and marketing funnels.",
      tag: "Custom Quote",
      href: "#contact"
    },
    {
      icon: Bot,
      title: "AI Solutions",
      description: "AI chatbots, automation tools, intelligent recommendation systems, and AI-powered SaaS products.",
      tag: "Custom Quote",
      href: "/pricing"
    }
  ];

  return (
    <section id="work" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            What We Build
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Link href={service.href}>
                <div className="group h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#10B981]/50 hover:bg-white/10 transition-all duration-300 cursor-pointer">
                  <div className="mb-6">
                    <service.icon size={48} className="text-[#10B981]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#10B981] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="inline-block px-4 py-2 bg-[#10B981]/10 border border-[#10B981]/30 rounded-full">
                    <span className="text-sm font-semibold text-[#10B981]">{service.tag}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
