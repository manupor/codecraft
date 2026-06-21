"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { language, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      aria-label={language === "en" ? "Cambiar a español" : "Switch to English"}
      className="fixed top-[48px] -translate-y-1/2 right-[5.5rem] z-50 flex items-center gap-1 px-2.5 py-1.5 rounded-sm border border-white/15 bg-[#090a0c]/40 backdrop-blur-md text-xs font-semibold text-[#b8b5ae] hover:text-[#efece7] hover:border-white/30 transition-colors"
    >
      <span className={language === "en" ? "text-[#efece7]" : "text-[#5c5f66]"}>EN</span>
      <span className="text-[#3e4149]">/</span>
      <span className={language === "es" ? "text-[#efece7]" : "text-[#5c5f66]"}>ES</span>
    </button>
  );
}
