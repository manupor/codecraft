"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import LogoLoop from "./LogoLoop";

const logos = [
  { src: "/logos/OLAVIVO.png", alt: "" },
  { src: "/logos/Logo-Reserva-08_GOLD-e1718579433972-768x779.png", alt: "" },
  { src: "/logos/Ruby-Wager-Logo.png", alt: "" },
  { src: "/logos/logo-riviera.png", alt: "" },
  { src: "/logos/aws.svg", alt: "" },
];

export default function TrustedBy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="relative py-8 lg:py-12" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-sm font-medium text-zinc-300 uppercase tracking-[0.2em] mb-12"
        >
          Our clients
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ height: "80px", position: "relative", overflow: "hidden" }}
      >
        <LogoLoop
          logos={logos}
          speed={60}
          direction="left"
          logoHeight={50}
          gap={80}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Trusted partners and clients"
        />
      </motion.div>
    </section>
  );
}
