"use client";

import { Instagram, Mail, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useContactModal } from "@/components/HomeClient";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const NAV_ES = [
  { label: "Servicios", href: "#services" },
  { label: "Nosotros", href: "#about" },
  { label: "Proceso", href: "#process" },
  { label: "Preguntas", href: "#faq" },
];

export default function Footer() {
  const { t, language } = useLanguage();
  const { openModal } = useContactModal();
  const nav = language === "es" ? NAV_ES : NAV;

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#090a0c]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main row */}
        <div className="py-14 flex flex-col md:flex-row md:items-start gap-12 md:gap-0 md:justify-between">

          {/* Brand */}
          <div className="max-w-xs">
            <a href="/">
              <img src="/codecraftt-logo.png" alt="CodeCraftt" className="h-7 w-auto brightness-0 invert" />
            </a>
            <p className="mt-4 text-sm text-[#5c5f66] leading-relaxed">
              {t.footer.tagline}
            </p>
            <button
              onClick={openModal}
              className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#8b5cf6] text-white text-sm font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition-all"
            >
              {t.footer.cta} <ArrowRight size={13} />
            </button>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3e4149] mb-5">
              {language === "es" ? "Navegación" : "Navigation"}
            </h3>
            <ul className="space-y-3">
              {nav.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-[#6b7280] hover:text-[#efece7] transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3e4149] mb-5">
              {t.footer.contactTitle}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@codecraftt.com" className="flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#efece7] transition-colors">
                  <Mail size={13} className="shrink-0" /> hello@codecraftt.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/50683442522" target="_blank" rel="noopener noreferrer"
                  className="text-sm text-[#6b7280] hover:text-[#efece7] transition-colors">
                  +506 8344 2522
                </a>
              </li>
              <li className="text-sm text-[#4b5563] pt-1">
                San José, Costa Rica
              </li>
              <li className="pt-2">
                <a href="https://instagram.com/codecraftt" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#efece7] transition-colors">
                  <Instagram size={13} /> @codecraftt
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-[#3e4149]">
            &copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> CodeCraftt. {t.footer.rights}
          </p>
          <p className="text-xs text-[#2e3138]">
            {t.footer.bottomTagline}
          </p>
        </div>

      </div>
    </footer>
  );
}
