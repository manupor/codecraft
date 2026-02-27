"use client";

import { motion } from "framer-motion";
import { MessageSquare, Zap, Rocket } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Tell us what you need",
      description: "Write a prompt describing your business — industry, services, location, style. No technical knowledge required."
    },
    {
      icon: Zap,
      title: "We build it with AI",
      description: "Our AI engine creates a fully responsive, SEO-ready landing page in minutes. You get a live preview instantly."
    },
    {
      icon: Rocket,
      title: "Go live immediately",
      description: "We host and deploy your website for you. Share your link with the world — no setup needed."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            How CodeCraftt Works
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Three steps to a live, professional website.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#10B981]/50 transition-all duration-300">
                <div className="mb-6">
                  <step.icon size={48} className="text-[#10B981]" />
                </div>
                <div className="absolute top-6 right-6 text-6xl font-bold text-white/5">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
