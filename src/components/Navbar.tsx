"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2">
            <img src="/codecraftt-logo.png" alt="CodeCraft" className="h-12 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-200 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <a
                href="/login"
                className="text-sm text-zinc-200 hover:text-white transition-colors duration-200 px-4 py-2"
              >
                Log In
              </a>
              <a
                href="/signup"
                className="text-sm font-semibold px-5 py-2.5 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] text-black hover:shadow-lg hover:shadow-green-500/50 transition-all duration-200"
              >
                Sign Up Free
              </a>
            </div>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-zinc-400 hover:text-white"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#09090b]/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
                <a
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium px-5 py-2.5 rounded-full border border-green-500/50 text-green-400 text-center hover:bg-green-500/10 transition-colors"
                >
                  Log In
                </a>
                <a
                  href="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-bold px-5 py-2.5 rounded-full bg-gradient-to-r from-[#10B981] to-[#059669] text-black text-center hover:shadow-lg transition-colors"
                >
                  Sign Up Free
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
