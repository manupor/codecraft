"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Cloud, Bot } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";

export default function AboutPage() {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "120+", label: "Websites" },
    { value: "3", label: "Countries" },
    { value: "48h", label: "Avg. Delivery" },
  ];

  const technologies = [
    { name: "Next.js", icon: Code2 },
    { name: "React", icon: Code2 },
    { name: "TypeScript", icon: Code2 },
    { name: "Tailwind CSS", icon: Palette },
    { name: "Python", icon: Code2 },
    { name: "AWS", icon: Cloud },
    { name: "Vercel", icon: Cloud },
    { name: "OpenAI", icon: Bot },
  ];

  return (
    <main className="relative min-h-screen bg-black">
      <GlobalBackground />
      <div className="relative z-10">
        <Navbar />

        <section className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Built by a builder, for builders.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-invert prose-lg max-w-none mb-16"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
                <p className="text-zinc-300 leading-relaxed mb-6">
                  CodeCraftt was founded by <span className="text-[#10B981] font-semibold">Manuel Portuguez</span> — a technical creative with over a decade of experience building digital systems across Costa Rica, the United States, and beyond.
                </p>
                <p className="text-zinc-300 leading-relaxed">
                  The mission is simple: give every business — from a small café in Alajuela to a startup in Silicon Valley — access to professional web design at a price that makes sense. No agencies. No bloated quotes. Just fast, clean, revenue-generating websites.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#10B981]/50 transition-all duration-300"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-[#10B981] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-zinc-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Technologies we use
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-[#10B981]/50 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="mb-3 flex justify-center">
                      <tech.icon size={32} className="text-[#10B981]" />
                    </div>
                    <div className="text-sm font-medium text-zinc-300">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center bg-gradient-to-br from-[#10B981]/20 via-[#059669]/10 to-black border border-[#10B981]/30 rounded-3xl p-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Let's build something together
              </h2>
              <p className="text-lg text-zinc-300 mb-6 max-w-2xl mx-auto">
                Whether you need a simple landing page or a complex web application, we're here to help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/landing-builder"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#10B981] text-black font-bold hover:bg-[#059669] transition-all duration-200"
                >
                  Start with a $50 Landing Page →
                </a>
                <a
                  href="mailto:hola@codecraftt.com"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium hover:bg-white/5 hover:border-white/30 transition-all duration-200"
                >
                  Email Us
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
