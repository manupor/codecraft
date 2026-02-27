"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#10B981]/20 via-[#059669]/10 to-black border border-[#10B981]/30 p-12 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Ready to launch your website?
            </h2>
            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
              Start with a $50 landing page. No meetings. No delays. Just results.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/landing-builder"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#10B981] text-black font-bold text-base hover:bg-[#059669] transition-all duration-200 shadow-lg shadow-[#10B981]/20"
              >
                Generate Your Landing Now
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="mailto:hola@codecraftt.com"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-medium text-base hover:bg-white/5 hover:border-white/30 transition-all duration-200"
              >
                Book a Free Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
