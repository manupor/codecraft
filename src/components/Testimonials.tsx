"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "CodeCraftt built my restaurant's landing page in less than a day. I've already gotten 30+ reservations through it.",
      author: "Carlos M.",
      role: "Restaurante El Fogón, Alajuela, CR",
      rating: 5
    },
    {
      quote: "I needed a portfolio fast. I described it in 2 sentences and had a live link the same afternoon. Incredible.",
      author: "Sofía R.",
      role: "Freelance Designer, San José, CR",
      rating: 5
    },
    {
      quote: "We launched our real estate site in 48 hours. Professional, fast, and exactly what we asked for.",
      author: "Diego V.",
      role: "Inmobiliaria Pacífico, Guanacaste, CR",
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
            What our clients say
          </h2>
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
