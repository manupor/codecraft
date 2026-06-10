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
    "nav.1": "Inicio",
    "nav.2": "Nosotros",
    "nav.3": "Servicios",
    "nav.4": "Blog",
    "nav.5": "Contacto",

    // Process section
    "process.tag": "Nuestro Proceso",
    "process.title": "Pasos simples para llevar tu idea a una",
    "process.title.highlight": "marca exitosa",
    "process.s1": "Descubrimiento y Estrategia",
    "process.s2": "Diseño y Desarrollo",
    "process.s3": "Revisión y Ajustes",
    "process.s4": "Lanzamiento y Soporte",

    // About h2
    "about.h2.1": "De una página en blanco",
    "about.h2.2": "a una marca",
    "about.h2.3": "que vende.",

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
    "about.tag": "(¿Quiénes Somos?)",
    "about.box1.title": "Diseñamos Primero",
    "about.box1.desc": "Nos tomamos el tiempo para entender tu negocio, tu audiencia y tus objetivos. A partir de ahí, diseñamos juntos una marca y un sitio web que realmente te represente.",
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
    "counter.5": "Clientes Satisfechos",

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

    // Why CodeCraftt (ProjectHomeOne)
    "project.title": "Por que elegir CodeCraftt",
    "project.desc": "Por que me eligen para crear marcas y sitios web que venden.",
    "project.viewmore": "Ver mas",
    "project.s1.title": "Diseno primero",
    "project.s1.desc": "Cada proyecto es liderado por disenadores senior. Creamos marcas y sitios web que lucen premium.",
    "project.s2.title": "2-4 semanas",
    "project.s2.desc": "Lanza rapido. Luce impecable. Sin revisiones interminables ni burocracia de agencia.",
    "project.s3.title": "Hecho para vender",
    "project.s3.desc": "Hermoso y hecho para vender. Optimizado para velocidad, SEO y conversion.",
    "project.s4.title": "Tecnologias Modernas",
    "project.s4.desc": "React, Next.js, TypeScript, Node.js, Python, AWS, OpenAI, Flutter.",
    "project.s5.title": "EE.UU. y Latinoamerica",
    "project.s5.desc": "Trabajamos con clientes en Estados Unidos y toda Latinoamerica.",

    // Blog section
    "blog.tag": "(Blog)",
    "blog.title1": "Conocimiento y",
    "blog.title2": "Recursos",
    "blog.desc": "Comparto insights sobre diseno web, branding y estrategias digitales que ayudan a las empresas a crecer online.",
    "blog.readmore": "Leer Mas",
    "blog.viewall": "Ver Todos",
    "blog.post1.date": "15, Ene - 2026",
    "blog.post1.cat": "SEO",
    "blog.post1.title": "Core Web Vitals: Por que importan para tu sitio",
    "blog.post2.date": "08, Ene - 2026",
    "blog.post2.cat": "Branding",
    "blog.post2.title": "Como crear una marca memorable desde cero",
    "blog.post3.date": "02, Ene - 2026",
    "blog.post3.cat": "Desarrollo",
    "blog.post3.title": "Next.js vs Webflow: Cual elegir para tu proyecto",
    "blog.post4.date": "28, Dic - 2025",
    "blog.post4.cat": "Conversion",
    "blog.post4.title": "5 elementos que toda landing page necesita",

    // CTA home (CtaHomeOne)
    "ctahome.title1": "¿Listo para destacar?",
    "ctahome.title2": "Construyamos una marca",
    "ctahome.title3": "que la gente recuerde.",
    "ctahome.desc": "Cuéntanos sobre tu proyecto. Respondemos en menos de 24 horas.",
    "ctahome.cta": "Inicia Tu Proyecto",
    "ctahome.write": "Escríbenos",

    // Portfolio items
    "portfolio.item1.title": "Diseño y Desarrollo Web",
    "portfolio.item1.badge": "Más Solicitado",
    "portfolio.item1.li1": "Sitios Web a Medida",
    "portfolio.item1.li2": "Webflow & Next.js",
    "portfolio.item1.li3": "Diseño Responsivo",
    "portfolio.item2.title": "Identidad de Marca y Logo",
    "portfolio.item2.badge": "Branding",
    "portfolio.item2.li1": "Diseño de Logo",
    "portfolio.item2.li2": "Sistemas de Color",
    "portfolio.item2.li3": "Guías de Marca",
    "portfolio.item3.title": "Landing Pages y Conversión",
    "portfolio.item3.badge": "Alta Conversión",
    "portfolio.item3.li1": "SEO Optimizado",
    "portfolio.item3.li2": "Core Web Vitals 90+",
    "portfolio.item3.li3": "Listo para Convertir",
    "portfolio.item4.title": "E-commerce y Tiendas Online",
    "portfolio.item4.badge": "Vende Más",
    "portfolio.item4.li1": "Shopify",
    "portfolio.item4.li2": "Desarrollo a Medida",
    "portfolio.item4.li3": "Listo para Vender",
    "portfolio.cta": "Inicia Tu Proyecto →",

    // Services section
    "services.tag": "Lo Que Hacemos",
    "services.title.1": "Creamos Marcas y",
    "services.title.2": "Negocios",
    "services.title.3": "que Destacan en la Era Digital",
    "services.viewall": "Ver Todos los Servicios",
    "services.viewdetails": "Ver Detalles",
    "services.s1.title": "Estrategia de Marca",
    "services.s1.desc": "Definimos la identidad, valores y posicionamiento de tu marca para que conecte con tu audiencia ideal.",
    "services.s2.title": "Diseño & Branding",
    "services.s2.desc": "Creamos logotipos, paletas de color y sistemas visuales únicos que reflejan la esencia de tu negocio.",
    "services.s3.title": "Desarrollo Web",
    "services.s3.desc": "Diseñamos y desarrollamos sitios web rápidos, modernos y optimizados para convertir visitantes en clientes.",
    "services.s4.title": "Marketing Digital",
    "services.s4.desc": "Estrategias de contenido, SEO y redes sociales que aumentan tu visibilidad y generan resultados reales.",

    // Team section
    "team.tag": "Sobre CodeCraftt",
    "team.title": "Manu Portuguez",
    "team.role": "CEO & Sr Full Stack Developer",
    "team.founder.tag": "El Fundador",
    "team.founder.title": "Conoce a",
    "team.p1": "Como fundador principal de CodeCraftt, trabajo directamente en cada proyecto, asegurando calidad premium en cada detalle.",
    "team.p2": "Cuando un proyecto requiere escalar o especializarse, colaboro con una red seleccionada de desarrolladores senior, diseñadores UX/UI, especialistas en marketing digital y arquitectos cloud.",
    "team.p3": "Todos con experiencia comprobada en empresas como Amazon AWS, startups de Silicon Valley y agencias internacionales. Esta estructura flexible me permite ofrecerte el mejor talento sin la burocracia ni los costos de una agencia tradicional.",
    "team.cta": "Trabajemos Juntos",

    // Footer
    "footer.scrolltext": "CodeCraftt — Diseño Web y Branding · Costa Rica",
    "footer.desc": "Estudio de diseño web y branding en Costa Rica. Diseñamos marcas y construimos sitios web de alta conversión para startups y empresas en EE. UU. y Latinoamérica.",
    "footer.services.title": "Servicios",
    "footer.services.li1": "Diseño y Desarrollo Web",
    "footer.services.li2": "Identidad de Marca y Logo",
    "footer.services.li3": "Landing Pages",
    "footer.services.li4": "E-commerce",
    "footer.services.li5": "Diseño UX/UI",
    "footer.industries.title": "Industrias",
    "footer.industries.li1": "Startups",
    "footer.industries.li2": "E-commerce",
    "footer.industries.li3": "Restaurantes",
    "footer.industries.li4": "Bienes Raíces",
    "footer.industries.li5": "Servicios Profesionales",
    "footer.company.title": "Empresa",
    "footer.company.about": "Nosotros",
    "footer.company.blog": "Blog",
    "footer.company.services": "Servicios",
    "footer.company.faq": "Preguntas Frecuentes",
    "footer.company.contact": "Contacto",
    "footer.contact.title": "Contacto",
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
    "nav.1": "Home",
    "nav.2": "About",
    "nav.3": "Services",
    "nav.4": "Blog",
    "nav.5": "Contact",

    // Process section
    "process.tag": "Our Process",
    "process.title": "Simple steps to take your idea to a",
    "process.title.highlight": "successful brand",
    "process.s1": "Discovery & Strategy",
    "process.s2": "Design & Development",
    "process.s3": "Review & Adjustments",
    "process.s4": "Launch & Support",

    // About h2
    "about.h2.1": "From a blank page",
    "about.h2.2": "to a brand",
    "about.h2.3": "that sells.",

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
    "about.box1.title": "We Design First",
    "about.box1.desc": "We take the time to understand your business, your audience, and your goals. From there, we design together a brand and website that truly represents you.",
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
    "counter.5": "Happy Clients",

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

    // Why CodeCraftt (ProjectHomeOne)
    "project.title": "Why Choose CodeCraftt",
    "project.desc": "Why clients choose us to build brands and websites that sell.",
    "project.viewmore": "Learn more",
    "project.s1.title": "Design First",
    "project.s1.desc": "Every project is led by senior designers. We build brands and websites that look premium.",
    "project.s2.title": "2-4 Weeks",
    "project.s2.desc": "Launch fast. Look flawless. No endless revisions or agency bureaucracy.",
    "project.s3.title": "Built to Sell",
    "project.s3.desc": "Beautiful and built to convert. Optimized for speed, SEO, and conversion.",
    "project.s4.title": "Modern Technologies",
    "project.s4.desc": "React, Next.js, TypeScript, Node.js, Python, AWS, OpenAI, Flutter.",
    "project.s5.title": "U.S. & Latin America",
    "project.s5.desc": "We work with clients across the United States and all of Latin America.",

    // Blog section
    "blog.tag": "(Blog)",
    "blog.title1": "Knowledge &",
    "blog.title2": "Resources",
    "blog.desc": "I share insights on web design, branding, and digital strategies that help businesses grow online.",
    "blog.readmore": "Read More",
    "blog.viewall": "View All",
    "blog.post1.date": "Jan 15 - 2026",
    "blog.post1.cat": "SEO",
    "blog.post1.title": "Core Web Vitals: Why They Matter for Your Site",
    "blog.post2.date": "Jan 08 - 2026",
    "blog.post2.cat": "Branding",
    "blog.post2.title": "How to Build a Memorable Brand from Scratch",
    "blog.post3.date": "Jan 02 - 2026",
    "blog.post3.cat": "Development",
    "blog.post3.title": "Next.js vs Webflow: Which to Choose for Your Project",
    "blog.post4.date": "Dec 28 - 2025",
    "blog.post4.cat": "Conversion",
    "blog.post4.title": "5 Elements Every Landing Page Needs",

    // CTA home (CtaHomeOne)
    "ctahome.title1": "Ready to stand out?",
    "ctahome.title2": "Let's build a brand",
    "ctahome.title3": "people remember.",
    "ctahome.desc": "Tell us about your project. We respond in less than 24 hours.",
    "ctahome.cta": "Start Your Project",
    "ctahome.write": "Message Us",

    // Portfolio items
    "portfolio.item1.title": "Web Design & Development",
    "portfolio.item1.badge": "Most Requested",
    "portfolio.item1.li1": "Custom Websites",
    "portfolio.item1.li2": "Webflow & Next.js",
    "portfolio.item1.li3": "Responsive Design",
    "portfolio.item2.title": "Brand Identity & Logo",
    "portfolio.item2.badge": "Branding",
    "portfolio.item2.li1": "Logo Design",
    "portfolio.item2.li2": "Color Systems",
    "portfolio.item2.li3": "Brand Guidelines",
    "portfolio.item3.title": "Landing Pages & Conversion",
    "portfolio.item3.badge": "High Conversion",
    "portfolio.item3.li1": "SEO Optimized",
    "portfolio.item3.li2": "Core Web Vitals 90+",
    "portfolio.item3.li3": "Built to Convert",
    "portfolio.item4.title": "E-commerce & Online Stores",
    "portfolio.item4.badge": "Sell More",
    "portfolio.item4.li1": "Shopify",
    "portfolio.item4.li2": "Custom Development",
    "portfolio.item4.li3": "Ready to Sell",
    "portfolio.cta": "Start Your Project →",

    // Services section
    "services.tag": "What We Do",
    "services.title.1": "We Build Brands and",
    "services.title.2": "Businesses",
    "services.title.3": "that Stand Out in the Digital Age",
    "services.viewall": "View All Services",
    "services.viewdetails": "View Details",
    "services.s1.title": "Brand Strategy",
    "services.s1.desc": "We define your brand's identity, values, and positioning so it connects with your ideal audience.",
    "services.s2.title": "Design & Branding",
    "services.s2.desc": "We create logos, color palettes, and unique visual systems that reflect the essence of your business.",
    "services.s3.title": "Web Development",
    "services.s3.desc": "We design and build fast, modern websites optimized to convert visitors into customers.",
    "services.s4.title": "Digital Marketing",
    "services.s4.desc": "Content strategies, SEO, and social media that increase your visibility and drive real results.",

    // Team section
    "team.tag": "About CodeCraftt",
    "team.title": "Manu Portuguez",
    "team.role": "CEO & Sr Full Stack Developer",
    "team.founder.tag": "The Founder",
    "team.founder.title": "Meet",
    "team.p1": "As the lead founder of CodeCraftt, I work directly on every project, ensuring premium quality in every detail.",
    "team.p2": "When a project needs to scale or specialize, I collaborate with a curated network of senior developers, UX/UI designers, digital marketing specialists, and cloud architects.",
    "team.p3": "All with proven experience at companies like Amazon AWS, Silicon Valley startups, and international agencies. This flexible structure lets me offer you top talent without the bureaucracy or costs of a traditional agency.",
    "team.cta": "Let's Work Together",

    // Footer
    "footer.scrolltext": "CodeCraftt — Web Design & Branding · Costa Rica",
    "footer.desc": "Web design and branding studio in Costa Rica. We design brands and build high-conversion websites for startups and companies in the U.S. and Latin America.",
    "footer.services.title": "Services",
    "footer.services.li1": "Web Design & Development",
    "footer.services.li2": "Brand Identity & Logo",
    "footer.services.li3": "Landing Pages",
    "footer.services.li4": "E-commerce",
    "footer.services.li5": "UX/UI Design",
    "footer.industries.title": "Industries",
    "footer.industries.li1": "Startups",
    "footer.industries.li2": "E-commerce",
    "footer.industries.li3": "Restaurants",
    "footer.industries.li4": "Real Estate",
    "footer.industries.li5": "Professional Services",
    "footer.company.title": "Company",
    "footer.company.about": "About",
    "footer.company.blog": "Blog",
    "footer.company.services": "Services",
    "footer.company.faq": "FAQ",
    "footer.company.contact": "Contact",
    "footer.contact.title": "Contact",
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
