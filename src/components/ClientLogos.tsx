"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const clients = [
  { name: "Book IQ", logo: "/assets/images/clients/Book-IQ-Logo_long_WHITE.png" },
  { name: "Clenivax", logo: "/assets/images/clients/Clenivax-LOGO.png" },
  { name: "Egsu", logo: "/assets/images/clients/Egsu-logo-versiones_dorado.png" },
  { name: "HiHub", logo: "/assets/images/clients/Logo%20Hihub.png" },
  { name: "Chamo Gourmet", logo: "/assets/images/clients/Logo_CG_.png" },
  { name: "Med", logo: "/assets/images/clients/logho%20med%20white.png" },
  { name: "Marianela Ibarra", logo: "/assets/images/clients/mibarra-web.png" },
];

const allClients = [...clients, ...clients];

export default function ClientLogos() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const dragStartX = useRef(0);
  const initialX = useRef(0);
  const currentX = useRef(0);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setIsPaused(true);
    dragStartX.current = e.clientX;
    const matrix = new window.WebKitCSSMatrix(window.getComputedStyle(trackRef.current).transform);
    initialX.current = matrix.m41;
    currentX.current = matrix.m41;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    const delta = e.clientX - dragStartX.current;
    const newX = initialX.current + delta;
    currentX.current = newX;
    trackRef.current.style.transform = `translateX(${newX}px)`;
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    if (trackRef.current) {
      const trackWidth = trackRef.current.scrollWidth;
      const originalWidth = trackWidth / 2;
      const progress = 1 + currentX.current / originalWidth;
      const normalized = ((progress % 1) + 1) % 1;
      trackRef.current.style.animationDelay = `${-normalized * 35}s`;
      trackRef.current.style.transform = "";
    }
    setIsDragging(false);
    setIsPaused(false);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDragging || !trackRef.current) return;
      const delta = e.clientX - dragStartX.current;
      const newX = initialX.current + delta;
      currentX.current = newX;
      trackRef.current.style.transform = `translateX(${newX}px)`;
    };
    const onUp = () => handleMouseUp();
    if (isDragging) {
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseup", onUp);
    }
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [isDragging, handleMouseUp]);

  return (
    <section className="relative py-16 overflow-hidden border-y border-white/[0.05]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#090a0c] via-transparent to-[#090a0c] z-10" />

      <div className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5c5f66]">
          {t.clientsLogos.title}
        </p>
      </div>

      <div
        className="relative overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <motion.div
          ref={trackRef}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          }}
          style={{
            animationPlayState: isPaused ? "paused" : "running",
            userSelect: "none",
          }}
          className="flex gap-16 items-center w-fit"
        >
          {allClients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="shrink-0 flex items-center justify-center h-[60px]"
            >
              <img
                src={client.logo}
                alt={client.name}
                draggable={false}
                className="h-[60px] w-auto max-w-[200px] object-contain brightness-0 invert pointer-events-none"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
