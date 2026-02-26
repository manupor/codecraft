"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cta" className="relative py-12 lg:py-16">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-base sm:text-xl text-zinc-200 mb-4 sm:mb-6">
            If you are building a product, not just a website —
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
            CodeCraft builds the{" "}
            <span className="gradient-text">engine behind it</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-zinc-200">
            Let&apos;s build something scalable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href="mailto:hello@thedevfactory.com"
            className="group inline-flex items-center gap-2 px-8 py-4 sm:px-10 sm:py-5 rounded-full text-base sm:text-lg bg-white text-black font-semibold text-lg hover:bg-zinc-200 transition-all duration-200 glow"
          >
            Start Your Build
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="mailto:hello@thedevfactory.com"
            className="inline-flex items-center gap-2 px-8 py-4 sm:px-10 sm:py-5 rounded-full text-base sm:text-lg border border-white/10 text-white font-semibold text-lg hover:bg-white/5 hover:border-white/20 transition-all duration-200"
          >
            <Calendar size={20} />
            Book a Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
