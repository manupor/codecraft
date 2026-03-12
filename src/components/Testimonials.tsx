"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "CodeCraftt built our mobile application with intelligent automation that improved our internal processes dramatically.",
      author: "Carlos M.",
      role: "CEO, Retail Solutions",
      rating: 5
    },
    {
      quote: "They developed our online store and integrated smart product recommendations. Our conversions increased significantly.",
      author: "Sofía R.",
      role: "Founder, Fashion Brand",
      rating: 5
    },
    {
      quote: "The AI chatbot they built reduced our customer support workload by more than half.",
      author: "Diego V.",
      role: "CTO, Technology Startup",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Client Results
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Real products. Real growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#10B981]/30 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating).fill(null).map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-zinc-300 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="font-semibold text-[#10B981]">{testimonial.author}</p>
                <p className="text-sm text-zinc-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
