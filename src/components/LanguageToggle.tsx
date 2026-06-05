"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageToggle() {
  const { language, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      aria-label={language === "en" ? "Cambiar a español" : "Switch to English"}
      className="fixed top-7 right-[5.5rem] z-50 flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-white/15 bg-black/40 backdrop-blur-md text-xs font-semibold text-zinc-300 hover:text-white hover:border-white/30 transition-colors"
    >
      <span className={language === "en" ? "text-white" : "text-zinc-500"}>EN</span>
      <span className="text-zinc-600">/</span>
      <span className={language === "es" ? "text-white" : "text-zinc-500"}>ES</span>
    </button>
  );
}
