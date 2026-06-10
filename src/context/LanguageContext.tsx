import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "es" | "en";

interface LanguageContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  es: {
    // Nav
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",

    // Hero
    "hero.subtitle": "Estudio de Diseño Web y Branding — Costa Rica",
    "hero.title": "Marcas y sitios web\nque venden.",
    "hero.title.line1": "Marcas y sitios web",
    "hero.title.line2": "que venden.",
    "hero.start": "Inicia\nTu Proyecto",
    "hero.desc": "Diseñamos marcas y construimos sitios web de alta conversión que hacen que las empresas ambiciosas luzcan inolvidables — para clientes en EE. UU. y Latinoamérica.",
    "hero.cta": "Inicia Tu Proyecto",
    "hero.scroll": "Ver Más",
    "hero.scrolltext": "Diseño Web · Branding · Diseño de Logo · Costa Rica",

    // About section (home)
    "about.tag": "(¿Quien Soy?)",
    "about.box1.title": "Diseño Primero",
    "about.box1.desc": "Cada proyecto es liderado por mi directamente. Diseño marcas y sitios web que lucen premium, se sienten intencionales y te diferencian de la competencia.",
    "about.box2.title": "Hecho para Vender",
    "about.box2.desc": "Lo bonito no basta. Cada pagina esta optimizada para velocidad, SEO y conversion — para que tu sitio no solo impresione, sino que genere resultados reales.",
    "about.heading": "De una página en blanco a una marca que vende.",
    "about.desc": "Me encargo de la estrategia, el diseno, el copy y el desarrollo - para que tu marca luzca premium y tu sitio web convierta. Construyamos tu marca juntos.",
    "about.cta": "Sobre CodeCraftt",

    // Counter
    "counter.1": "Sitios y Marcas Entregados",
    "counter.2": "Años Diseñando",
    "counter.3": "Tiempo Promedio de Lanzamiento",
    "counter.4": "A Medida, Nunca Plantillas",

    // Clients
    "clients.title": "Confían en CodeCraftt",
    "clients.subtitle": "Empresas Innovadoras",
    "clients.desc": "Desde startups tecnológicas hasta empresas consolidadas, hemos tenido el privilegio de colaborar con organizaciones que buscan excelencia digital.",

    // Portfolio
    "portfolio.tag": "Lo que hacemos",
    "portfolio.subtitle": "Diseñamos, marcamos y lanzamos.",
    "portfolio.desc": "Diseñamos marcas y construimos sitios web de alta conversión para startups y empresas ambiciosas.",

    // Working / Process
    "working.tag": "Nuestro Proceso",
    "working.title": "Cómo Trabajamos",
    "working.step1.title": "Descubrimiento",
    "working.step1.desc": "Dedicamos 30-60 minutos entendiendo tu negocio, tu audiencia y tus objetivos. Sin plantillas — cada marca empieza con tu historia.",
    "working.step2.title": "Estrategia",
    "working.step2.desc": "Definimos tu posicionamiento, dirección visual y estrategia de contenido. Recibes una propuesta clara antes de comenzar.",
    "working.step3.title": "Diseño",
    "working.step3.desc": "Logo, color, tipografía y mockups completos del sitio. Creamos una marca cohesiva que revisas y refinas con nosotros.",
    "working.step4.title": "Desarrollo",
    "working.step4.desc": "Damos vida al diseño — pixel-perfect, responsivo y rápido. Verás vistas previas en vivo cada pocos días.",
    "working.step5.title": "Control de Calidad",
    "working.step5.desc": "Pruebas en todos los dispositivos, auditorías de rendimiento, SEO y accesibilidad. No lanzamos hasta que todo esté perfecto.",
    "working.step6.title": "Lanzamiento y Soporte",
    "working.step6.desc": "Desplegamos tu sitio, te entregamos todo e incluimos 30 días de soporte. Ofrecemos planes de mantenimiento para seguir creciendo.",

    // Testimonials
    "testimonials.tag": "(Recomendaciones de colegas en Amazon & AWS)",
    "testimonials.title": "Testimonios",

    // CTA
    "cta.tag": "¿Listo para Transformar tu Negocio?",
    "cta.title": "Hablemos de Tu Proyecto.",
    "cta.desc": "Agenda una llamada estratégica gratuita. En 30 minutos analizaremos tus objetivos, identificaremos oportunidades y te presentaremos un plan de acción claro.",
    "cta.btn": "Agendar Llamada",

    // Footer
    "footer.desc": "Estudio digital especializado en branding, desarrollo web premium y soluciones tecnológicas para empresas modernas. Más de 10 años transformando negocios en Estados Unidos y Latinoamérica con diseño a medida, sin plantillas genéricas.",
    "footer.follow": "Síguenos:",
    "footer.company": "Empresa",
    "footer.services": "Servicios",
    "footer.contact": "Contacto",
    "footer.copyright": "Todos los derechos reservados.",
    "footer.terms": "Términos de Servicio",
    "footer.privacy": "Política de Privacidad",
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.blog": "Blog",
    "nav.contact": "Contact",

    // Hero
    "hero.subtitle": "Web Design & Branding Studio — Costa Rica",
    "hero.title": "Brands and websites\nthat sell.",
    "hero.title.line1": "Brands and websites",
    "hero.title.line2": "that sell.",
    "hero.start": "Start\nYour Project",
    "hero.desc": "We design brands and build high-conversion websites that make ambitious businesses look unforgettable — for clients in the U.S. and Latin America.",
    "hero.cta": "Start Your Project",
    "hero.scroll": "See More",
    "hero.scrolltext": "Web Design · Branding · Logo Design · Costa Rica",

    // About section (home)
    "about.tag": "(Who We Are)",
    "about.box1.title": "Design First",
    "about.box1.desc": "Every project is personally led by our team. We design brands and websites that look premium, feel intentional, and set you apart from the competition.",
    "about.box2.title": "Built to Convert",
    "about.box2.desc": "Looking good isn't enough. Every page is optimized for speed, SEO, and conversion — so your site doesn't just impress, it drives real results.",
    "about.heading": "From a blank page to a brand that sells.",
    "about.desc": "We handle strategy, design, copy, and development — so your brand looks premium and your website converts. Let's build your brand together.",
    "about.cta": "About CodeCraftt",

    // Counter
    "counter.1": "Sites & Brands Delivered",
    "counter.2": "Years Designing",
    "counter.3": "Average Launch Time",
    "counter.4": "Custom, Never Templates",

    // Clients
    "clients.title": "Trusted by CodeCraftt",
    "clients.subtitle": "Innovative Companies",
    "clients.desc": "From tech startups to established enterprises, we've had the privilege of collaborating with organizations that seek digital excellence.",

    // Portfolio
    "portfolio.tag": "What we do",
    "portfolio.subtitle": "We design, brand, and launch.",
    "portfolio.desc": "We design brands and build high-conversion websites for startups and ambitious companies.",

    // Working / Process
    "working.tag": "Our Process",
    "working.title": "How We Work",
    "working.step1.title": "Discovery",
    "working.step1.desc": "We spend 30-60 minutes understanding your business, audience, and goals. No templates — every brand starts with your story.",
    "working.step2.title": "Strategy",
    "working.step2.desc": "We define your positioning, visual direction, and content strategy. You receive a clear proposal before we begin.",
    "working.step3.title": "Design",
    "working.step3.desc": "Logo, color, typography, and full site mockups. We create a cohesive brand that you review and refine with us.",
    "working.step4.title": "Development",
    "working.step4.desc": "We bring the design to life — pixel-perfect, responsive, and fast. You'll see live previews every few days.",
    "working.step5.title": "Quality Assurance",
    "working.step5.desc": "Testing across all devices, performance audits, SEO, and accessibility. We don't launch until everything is perfect.",
    "working.step6.title": "Launch & Support",
    "working.step6.desc": "We deploy your site, hand over everything, and include 30 days of support. We offer maintenance plans to keep growing.",

    // Testimonials
    "testimonials.tag": "(Recommendations from Amazon & AWS colleagues)",
    "testimonials.title": "Testimonials",

    // CTA
    "cta.tag": "Ready to Transform Your Business?",
    "cta.title": "Let's Talk About Your Project.",
    "cta.desc": "Schedule a free strategic call. In 30 minutes we'll analyze your goals, identify opportunities, and present a clear action plan.",
    "cta.btn": "Schedule a Call",

    // Footer
    "footer.desc": "Digital studio specializing in branding, premium web development, and technology solutions for modern businesses. Over 10 years transforming businesses in the U.S. and Latin America with custom design, no generic templates.",
    "footer.follow": "Follow us:",
    "footer.company": "Company",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.copyright": "All rights reserved.",
    "footer.terms": "Terms of Service",
    "footer.privacy": "Privacy Policy",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("es");

  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  const t = (key: string): string =>
    translations[lang][key] ?? translations["es"][key] ?? key;

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
};
