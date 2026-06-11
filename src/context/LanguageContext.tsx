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
    "about.h2.1": "Diseñamos primero.",
    "about.h2.2": "Desarrollamos",
    "about.h2.3": "después.",

    // Hero
    "hero.subtitle": "Diseño Web y Branding",
    "hero.title": "para Empresas que\nQuieren Crecer.",
    "hero.title.line1": "para Empresas que",
    "hero.title.line2": "Quieren Crecer.",
    "hero.start": "Consulta\nGratuita",
    "hero.desc": "Creamos sitios web, marcas y productos digitales que generan confianza, atraen clientes y convierten visitas en oportunidades de negocio.",
    "hero.cta": "Agenda una Consulta Gratuita",
    "hero.scroll": "Ver Proyectos",
    "hero.scrolltext": "Diseño Web · Branding · UX/UI · Full-Stack · SaaS · E-commerce · IA",

    // About section (home)
    "about.tag": "(Quiénes Somos)",
    "about.box1.title": "Entendemos tu negocio primero",
    "about.box1.desc": "Antes de escribir una línea de código o diseñar una pantalla, entendemos tu negocio, tus objetivos y a quién quieres llegar.",
    "about.box2.title": "Estrategia, diseño y tecnología",
    "about.box2.desc": "Nuestro proceso combina estrategia, diseño y tecnología para crear soluciones digitales que no solo se ven bien, sino que funcionan.",
    "about.heading": "Diseñamos primero. Desarrollamos después.",
    "about.desc": "Más de 100 proyectos entregados para startups, empresas en crecimiento y marcas establecidas en Estados Unidos y Latinoamérica.",
    "about.cta": "Conoce a CodeCraftt",

    // Counter
    "counter.1": "Proyectos Entregados",
    "counter.2": "Años de Experiencia",
    "counter.3": "Países con Clientes Activos",
    "counter.4": "Código Propio, Sin Plantillas",

    // Clients
    "clients.title": "Confían en CodeCraftt",
    "clients.subtitle": "Empresas Innovadoras",
    "clients.desc": "Desde startups tecnológicas hasta empresas consolidadas, hemos tenido el privilegio de colaborar con organizaciones que buscan excelencia digital.",

    // Portfolio
    "portfolio.tag": "De la estrategia al lanzamiento.",
    "portfolio.subtitle": "Diseño Web · Branding · SaaS · E-commerce · IA",
    "portfolio.desc": "Nos convertimos en un aliado digital para acompañar cada etapa de crecimiento de tu empresa.",

    // Working / Process
    "working.tag": "Proceso",
    "working.title": "Un proceso claro para obtener resultados.",
    "working.step1.title": "Descubrimiento",
    "working.step1.desc": "Entendemos tu negocio, mercado y objetivos.",
    "working.step2.title": "Estrategia",
    "working.step2.desc": "Definimos la solución adecuada para tu proyecto.",
    "working.step3.title": "Diseño",
    "working.step3.desc": "Creamos experiencias visuales alineadas con tu marca.",
    "working.step4.title": "Desarrollo",
    "working.step4.desc": "Construimos una solución rápida, segura y escalable.",
    "working.step5.title": "Pruebas de Calidad",
    "working.step5.desc": "Validamos cada detalle antes del lanzamiento.",
    "working.step6.title": "Lanzamiento y Optimización",
    "working.step6.desc": "Publicamos, medimos y mejoramos continuamente.",

    // Testimonials
    "testimonials.tag": "(Amazon · Amazon Music · AWS)",
    "testimonials.title": "Lo que dicen quienes trabajaron con nosotros",
    "testimonials.t1": "Trabajé con Manu en Amazon en el área de entretenimiento y recomiendo ampliamente sus servicios de diseño gráfico. Se tomó el tiempo para comprender los resultados que buscábamos en distintos wikis, presentaciones y más, entregando productos que beneficiaron a nuestra comunidad y stakeholders.",
    "testimonials.t2": "Trabajé con Manu cuando era creador de contenido digital en la Oficina del CFO de AWS. Colaboró con liderazgo senior en AWS FGBS para producir contenido en video, siendo un socio confiable para mi equipo. Tenía un gran ojo para el diseño y agregaba efectos visuales únicos. Manu exige altos estándares y tiene las habilidades para crear contenido de calidad ejecutiva.",
    "testimonials.t3": "Trabajé con Manu en AWS y recomiendo ampliamente sus servicios de diseño gráfico. Manu ayudó a llevar nuestra visión de un programa de capacitación al siguiente nivel con visuales y gráficos de vanguardia. Tomó presentaciones complejas y las transformó, logrando aumentar la participación de nuestra comunidad de usuarios.",
    "testimonials.t4": "Manu es un diseñador gráfico talentoso, profesional y trabajador, con una actitud positiva y colaborativa excepcional. Trabajamos juntos en AWS durante 2022-2023, y fue clave para completar una serie de productos de comunicación interna y externa de alta calidad. Lo recomiendo sin reservas para trabajo freelance o de tiempo completo.",

    // CTA
    "cta.tag": "(Conversación sin compromiso)",
    "cta.title": "Hablemos de Tu Proyecto.",
    "cta.desc": "30 minutos. Analizamos tu situación actual, identificamos oportunidades y te damos un plan de acción claro — sin costo y sin compromiso.",
    "cta.btn": "Agendar Llamada",

    // Why CodeCraftt (ProjectHomeOne)
    "project.title": "Por qué CodeCraftt",
    "project.desc": "No somos una agencia tradicional. Somos un estudio especializado donde el criterio ejecutivo guía cada decisión.",
    "project.viewmore": "Ver más",
    "project.s1.title": "Liderado por Manu",
    "project.s1.desc": "Ex Amazon AWS. Full Stack Developer y UX/UI Designer con más de 10 años. Tú hablas directamente con quien ejecuta.",
    "project.s2.title": "Entrega en 2-4 semanas",
    "project.s2.desc": "Proceso eficiente, sin burocracia. Del brief al lanzamiento en tiempo récord sin sacrificar calidad.",
    "project.s3.title": "Stack moderno",
    "project.s3.desc": "React, Next.js, TypeScript, Node.js, AWS, OpenAI. Construido para escalar desde el primer día.",
    "project.s4.title": "Presencia internacional",
    "project.s4.desc": "Clientes activos en Estados Unidos, México, Colombia, Argentina y Costa Rica.",
    "project.s5.title": "100% a medida",
    "project.s5.desc": "Sin plantillas, sin atajos. Cada solución se diseña y desarrolla específicamente para tu negocio.",

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
    "ctahome.title1": "Tu próximo proyecto",
    "ctahome.title2": "empieza con",
    "ctahome.title3": "una conversación.",
    "ctahome.desc": "Ya sea un sitio web, una nueva marca o una plataforma digital, estamos listos para ayudarte a construir algo extraordinario.",
    "ctahome.cta": "Agenda una Consulta Gratuita",
    "ctahome.write": "Escríbenos",

    // Portfolio items
    "portfolio.item1.title": "Diseño Web Profesional",
    "portfolio.item1.badge": "Más Solicitado",
    "portfolio.item1.li1": "Sitios rápidos y modernos",
    "portfolio.item1.li2": "Optimizados para convertir",
    "portfolio.item1.li3": "Generan confianza",
    "portfolio.item2.title": "Branding e Identidad Visual",
    "portfolio.item2.badge": "Marcas Memorables",
    "portfolio.item2.li1": "Identidad clara y consistente",
    "portfolio.item2.li2": "Diseño de Logo",
    "portfolio.item2.li3": "Guías de Marca",
    "portfolio.item3.title": "UX/UI para SaaS y Aplicaciones",
    "portfolio.item3.badge": "Producto Digital",
    "portfolio.item3.li1": "Experiencias intuitivas",
    "portfolio.item3.li2": "Centradas en el usuario",
    "portfolio.item3.li3": "Alineadas a objetivos de negocio",
    "portfolio.item4.title": "Desarrollo Full-Stack y E-commerce",
    "portfolio.item4.badge": "Escalable",
    "portfolio.item4.li1": "Plataformas y aplicaciones",
    "portfolio.item4.li2": "Tiendas online optimizadas",
    "portfolio.item4.li3": "Automatización e IA",
    "portfolio.cta": "Agenda una Consulta Gratuita →",

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
    "footer.scrolltext": "CodeCraftt — Full Stack · UX/UI · Branding · Costa Rica",
    "footer.desc": "Estudio digital en Costa Rica. Full Stack Development, UX/UI y Branding para startups y empresas en EE. UU. y Latinoamérica.",
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
    "about.h2.1": "We design first.",
    "about.h2.2": "We develop",
    "about.h2.3": "after.",

    // Hero
    "hero.subtitle": "Web Design & Branding",
    "hero.title": "for Companies that\nWant to Grow.",
    "hero.title.line1": "for Companies that",
    "hero.title.line2": "Want to Grow.",
    "hero.start": "Free\nConsultation",
    "hero.desc": "We create websites, brands, and digital products that build trust, attract customers, and turn visits into business opportunities.",
    "hero.cta": "Book a Free Consultation",
    "hero.scroll": "View Projects",
    "hero.scrolltext": "Web Design · Branding · UX/UI · Full-Stack · SaaS · E-commerce · AI",

    // About section (home)
    "about.tag": "(Who We Are)",
    "about.box1.title": "We understand your business first",
    "about.box1.desc": "Before writing a single line of code or designing a screen, we understand your business, your goals, and who you want to reach.",
    "about.box2.title": "Strategy, design & technology",
    "about.box2.desc": "Our process combines strategy, design, and technology to create digital solutions that don't just look good — they work.",
    "about.heading": "We design first. We develop after.",
    "about.desc": "100+ projects delivered for startups, growing companies, and established brands across the United States and Latin America.",
    "about.cta": "Meet CodeCraftt",

    // Counter
    "counter.1": "Projects Delivered",
    "counter.2": "Years of Experience",
    "counter.3": "Countries with Active Clients",
    "counter.4": "Custom Code, Never Templates",

    // Clients
    "clients.title": "Trusted by CodeCraftt",
    "clients.subtitle": "Innovative Companies",
    "clients.desc": "From tech startups to established enterprises, we've had the privilege of collaborating with organizations that seek digital excellence.",

    // Portfolio
    "portfolio.tag": "From strategy to launch.",
    "portfolio.subtitle": "Web Design · Branding · SaaS · E-commerce · AI",
    "portfolio.desc": "We become your digital partner, supporting every stage of your company's growth.",

    // Working / Process
    "working.tag": "Process",
    "working.title": "A clear process for real results.",
    "working.step1.title": "Discovery",
    "working.step1.desc": "We understand your business, market, and goals.",
    "working.step2.title": "Strategy",
    "working.step2.desc": "We define the right solution for your project.",
    "working.step3.title": "Design",
    "working.step3.desc": "We craft visual experiences aligned with your brand.",
    "working.step4.title": "Development",
    "working.step4.desc": "We build a fast, secure, and scalable solution.",
    "working.step5.title": "Quality Testing",
    "working.step5.desc": "We validate every detail before launch.",
    "working.step6.title": "Launch & Optimization",
    "working.step6.desc": "We launch, measure, and continuously improve.",

    // Testimonials
    "testimonials.tag": "(Amazon · Amazon Music · AWS)",
    "testimonials.title": "From people who've worked with us",
    "testimonials.t1": "I worked with Manu at Amazon in the entertainment division and I highly recommend his graphic design services. He took the time to understand the results we were looking for across wikis, presentations, and more, delivering work that benefited our community and stakeholders.",
    "testimonials.t2": "I worked with Manu when he was a digital content creator in the AWS CFO Office. He collaborated with senior leadership at AWS FGBS to produce video content, serving as a reliable partner for my team. He had a great eye for design and added unique visual effects. Manu holds himself to high standards and has the skills to create executive-quality content.",
    "testimonials.t3": "I worked with Manu at AWS and highly recommend his graphic design services. Manu helped take our vision for a training program to the next level with cutting-edge visuals and graphics. He took complex presentations and transformed them, increasing engagement within our user community.",
    "testimonials.t4": "Manu is a talented, professional, and hardworking graphic designer with an exceptional positive and collaborative attitude. We worked together at AWS during 2022-2023, and he was key to completing a series of high-quality internal and external communication products. I recommend him without reservation for freelance or full-time work.",

    // CTA
    "cta.tag": "(No commitment required)",
    "cta.title": "Let's Talk About Your Project.",
    "cta.desc": "30 minutes. We assess your current situation, identify opportunities, and give you a clear action plan — at no cost.",
    "cta.btn": "Schedule a Call",

    // Why CodeCraftt (ProjectHomeOne)
    "project.title": "Why CodeCraftt",
    "project.desc": "We're not a traditional agency. We're a specialized studio where executive judgment drives every decision.",
    "project.viewmore": "Learn more",
    "project.s1.title": "Led by Manu",
    "project.s1.desc": "Former Amazon AWS. Full Stack Developer and UX/UI Designer with 10+ years. You talk directly to the person executing.",
    "project.s2.title": "2-4 Week Delivery",
    "project.s2.desc": "Efficient process, no bureaucracy. From brief to launch in record time without sacrificing quality.",
    "project.s3.title": "Modern Stack",
    "project.s3.desc": "React, Next.js, TypeScript, Node.js, AWS, OpenAI. Built to scale from day one.",
    "project.s4.title": "International Reach",
    "project.s4.desc": "Active clients in the United States, Mexico, Colombia, Argentina, and Costa Rica.",
    "project.s5.title": "100% Custom",
    "project.s5.desc": "No templates, no shortcuts. Every solution is designed and built specifically for your business.",

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
    "ctahome.title1": "Your next project",
    "ctahome.title2": "starts with",
    "ctahome.title3": "a conversation.",
    "ctahome.desc": "Whether it's a website, a new brand, or a digital platform, we're ready to help you build something extraordinary.",
    "ctahome.cta": "Book a Free Consultation",
    "ctahome.write": "Message Us",

    // Portfolio items
    "portfolio.item1.title": "Professional Web Design",
    "portfolio.item1.badge": "Most Requested",
    "portfolio.item1.li1": "Fast, modern websites",
    "portfolio.item1.li2": "Optimized to convert",
    "portfolio.item1.li3": "Built to earn trust",
    "portfolio.item2.title": "Branding & Visual Identity",
    "portfolio.item2.badge": "Memorable Brands",
    "portfolio.item2.li1": "Clear, consistent identity",
    "portfolio.item2.li2": "Logo Design",
    "portfolio.item2.li3": "Brand Guidelines",
    "portfolio.item3.title": "UX/UI for SaaS & Applications",
    "portfolio.item3.badge": "Digital Product",
    "portfolio.item3.li1": "Intuitive experiences",
    "portfolio.item3.li2": "User-centered design",
    "portfolio.item3.li3": "Aligned with business goals",
    "portfolio.item4.title": "Full-Stack Development & E-commerce",
    "portfolio.item4.badge": "Scalable",
    "portfolio.item4.li1": "Platforms & applications",
    "portfolio.item4.li2": "Optimized online stores",
    "portfolio.item4.li3": "Automation & AI",
    "portfolio.cta": "Book a Free Consultation →",

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
    "footer.scrolltext": "CodeCraftt — Full Stack · UX/UI · Branding · Costa Rica",
    "footer.desc": "Digital studio in Costa Rica. Full Stack Development, UX/UI, and Branding for startups and companies in the U.S. and Latin America.",
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
