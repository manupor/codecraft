"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function BigStatement() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/[0.025] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative rounded-2xl overflow-hidden border border-white/[0.08]"
          >
            <Image
              src="/rayo-img/demo/01_fea-img.webp"
              alt="CodeCraftt product development — SaaS and AI applications"
              width={720}
              height={480}
              className="w-full h-auto object-cover"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-transparent pointer-events-none" />
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.0]">
              From idea to<br />
              <span className="gradient-text">live product.</span><br />
              In weeks.
            </h2>

            <p className="mt-7 text-xl text-zinc-300 leading-relaxed max-w-md">
              We handle architecture, design, engineering, and launch — so you focus on growth.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/[0.12] text-zinc-300 font-medium text-sm hover:bg-white/[0.05] hover:border-white/25 transition-all duration-200"
            >
              Let&apos;s build it
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
