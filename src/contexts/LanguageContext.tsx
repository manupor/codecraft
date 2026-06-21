"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, type Lang, type Translations } from '@/lib/i18n';

type Language = Lang;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggle: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language | null;
    if (savedLang === 'en' || savedLang === 'es') {
      setLanguage(savedLang);
      return;
    }
    // Auto-detect browser language on first visit
    const browserLang = navigator.language.toLowerCase();
    setLanguage(browserLang.startsWith('es') ? 'es' : 'en');
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const toggle = () => handleSetLanguage(language === 'en' ? 'es' : 'en');

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
