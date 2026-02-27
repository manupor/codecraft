"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export default function TrustBar() {
  return (
    <section className="py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-sm text-zinc-500 mb-4">Trusted by founders and businesses in:</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-400">
            <span className="flex items-center gap-2"><Globe size={16} className="text-[#10B981]" /> Costa Rica</span>
            <span className="flex items-center gap-2"><Globe size={16} className="text-[#10B981]" /> United States</span>
            <span className="flex items-center gap-2"><Globe size={16} className="text-[#10B981]" /> México</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">+120</div>
            <div className="text-sm text-zinc-500">Websites Built</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">48h</div>
            <div className="text-sm text-zinc-500">Avg. Delivery</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#10B981] mb-1">$50</div>
            <div className="text-sm text-zinc-500">Starting Price</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
            <div className="text-sm text-zinc-500">Responsive</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
