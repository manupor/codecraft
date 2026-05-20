"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "HiHub Global",  logo: "/logos/logo-hihub-white.png",                           href: "https://hihubglobal.com" },
  { name: "Olavivo",       logo: "/logos/OLAVIVO.png",                                    href: "https://olavivo.com" },
  { name: "Reserva",       logo: "/logos/Logo-Reserva-08_GOLD-e1718579433972-768x779.png", href: "#" },
  { name: "Ruby Wager",    logo: "/logos/Ruby-Wager-Logo.png",                             href: "#" },
  { name: "AWS",           logo: "/logos/aws.svg",                                         href: "#" },
];

export default function ClientLogos() {
  return (
    <section className="py-14 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 mb-10"
        >
          Trusted by
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-10 lg:gap-16"
        >
          {clients.map((client, i) => (
            <motion.a
              key={client.name}
              href={client.href}
              target={client.href !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="group"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-[44px] w-auto object-contain brightness-0 invert opacity-40 group-hover:opacity-70 transition-opacity duration-300"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
