"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.work': 'Work',
    
    // Hero Section
    'hero.title': 'Build Your Digital Future',
    'hero.subtitle': 'with AI Technology',
    'hero.description': 'We create modern apps and websites powered by artificial intelligence. Transform your ideas into reality with cutting-edge technology.',
    'hero.cta': 'Get a Quote',
    
    // About Section
    'about.title': 'About CodeCraftt',
    'about.description': 'We are a development team specialized in creating innovative digital solutions. We combine artificial intelligence with modern design to build applications that drive business growth.',
    
    // Services Section
    'services.title': 'Our Services',
    'services.subtitle': 'Complete solutions for your digital needs',
    'services.web.title': 'Website Development',
    'services.web.description': 'Modern, responsive websites optimized for performance and SEO.',
    'services.web.price': 'Starting at $400',
    'services.app.title': 'Mobile Applications',
    'services.app.description': 'Native and cross-platform apps for iOS and Android.',
    'services.ai.title': 'AI Integration',
    'services.ai.description': 'Intelligent solutions with machine learning and automation.',
    
    // Testimonials Section
    'testimonials.title': 'Professional Recommendations',
    'testimonials.subtitle': 'What colleagues say about working with Manuel',
    
    // Contact Section
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Ready to start your project?',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending...',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message. Please try again or email us directly at',
    'contact.or': 'Or email us directly at',
    
    // Our Work Section
    'work.title': 'Our Clients',
    'work.subtitle': 'Trusted by companies around the world',
    'work.preview': 'Preview',
    'work.visit': 'Visit Site',
    
    // Footer
    'footer.location': 'San José, Curridabat, Costa Rica 🇨🇷',
    'footer.created': 'Created by',
    'footer.role': 'Sr. Full Stack Developer & Visual Designer',
    'footer.rights': 'Built with AI. Designed for performance.',
  },
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.services': 'Servicios',
    'nav.work': 'Trabajo',
    
    // Hero Section
    'hero.title': 'Construye Tu Futuro Digital',
    'hero.subtitle': 'con Tecnología AI',
    'hero.description': 'Creamos aplicaciones y sitios web modernos impulsados por inteligencia artificial. Transforma tus ideas en realidad con tecnología de vanguardia.',
    'hero.cta': 'Solicitar Cotización',
    
    // About Section
    'about.title': 'Acerca de CodeCraftt',
    'about.description': 'Somos un equipo de desarrollo especializado en crear soluciones digitales innovadoras. Combinamos inteligencia artificial con diseño moderno para construir aplicaciones que impulsan el crecimiento empresarial.',
    
    // Services Section
    'services.title': 'Nuestros Servicios',
    'services.subtitle': 'Soluciones completas para tus necesidades digitales',
    'services.web.title': 'Desarrollo Web',
    'services.web.description': 'Sitios web modernos y responsivos optimizados para rendimiento y SEO.',
    'services.web.price': 'Desde $400',
    'services.app.title': 'Aplicaciones Móviles',
    'services.app.description': 'Apps nativas y multiplataforma para iOS y Android.',
    'services.ai.title': 'Integración de IA',
    'services.ai.description': 'Soluciones inteligentes con aprendizaje automático y automatización.',
    
    // Testimonials Section
    'testimonials.title': 'Recomendaciones Profesionales',
    'testimonials.subtitle': 'Lo que dicen los colegas sobre trabajar con Manuel',
    
    // Contact Section
    'contact.title': 'Contáctanos',
    'contact.subtitle': '¿Listo para comenzar tu proyecto?',
    'contact.name': 'Nombre',
    'contact.email': 'Correo Electrónico',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.sending': 'Enviando...',
    'contact.success': '¡Mensaje enviado exitosamente!',
    'contact.error': 'Error al enviar el mensaje. Por favor intenta de nuevo o escríbenos directamente a',
    'contact.or': 'O escríbenos directamente a',
    
    // Our Work Section
    'work.title': 'Nuestros Clientes',
    'work.subtitle': 'Confianza de empresas alrededor del mundo',
    'work.preview': 'Vista Previa',
    'work.visit': 'Visitar Sitio',
    
    // Footer
    'footer.location': 'San José, Curridabat, Costa Rica 🇨🇷',
    'footer.created': 'Creado por',
    'footer.role': 'Desarrollador Full Stack Sr. y Diseñador Visual',
    'footer.rights': 'Construido con IA. Diseñado para rendimiento.',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // Auto-detect browser language on mount
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('es')) {
      setLanguage('es');
    }
    
    // Check localStorage for saved preference
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
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
