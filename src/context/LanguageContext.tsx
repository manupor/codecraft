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
    "hero.subtitle": "Estudio Digital",
    "hero.title": "Diseño Web, Branding\ny Desarrollo Digital",
    "hero.title.line1": "Diseño Web, Branding",
    "hero.title.line2": "y Desarrollo Digital",
    "hero.start": "Inicia\nTu Proyecto",
    "hero.desc": "Creamos sitios web, marcas y productos digitales que generan confianza, atraen clientes y convierten visitas en oportunidades de negocio.",
    "hero.cta": "Agenda una Consulta Gratuita",
    "hero.cta2": "Ver Proyectos",
    "hero.b1": "Diseño Web a Medida",
    "hero.b2": "Branding Estratégico",
    "hero.b3": "UX/UI para SaaS y Aplicaciones",
    "hero.b4": "Desarrollo Full-Stack",
    "hero.scroll": "Ver Más",
    "hero.scrolltext": "Diseño Web · Branding · UX/UI · Desarrollo Full-Stack · SaaS · E-commerce",

    // About section (home)
    "about.tag": "(Quiénes Somos)",
    "about.box1.title": "Diseñamos primero.",
    "about.box1.desc": "Antes de escribir una línea de código o diseñar una pantalla, entendemos tu negocio, tus objetivos y a quién quieres llegar.",
    "about.box2.title": "Desarrollamos después.",
    "about.box2.desc": "Nuestro proceso combina estrategia, diseño y tecnología para crear soluciones digitales que no solo se ven bien, sino que funcionan.",
    "about.heading": "Diseñamos primero. Desarrollamos después.",
    "about.desc": "Unimos estrategia, diseño y tecnología para crear soluciones digitales que no solo se ven bien, sino que funcionan.",
    "about.cta": "Conoce Nuestro Proceso",

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
    "portfolio.tag": "Capacidades",
    "portfolio.subtitle": "De la estrategia al lanzamiento.",
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

    // Trust / Social Proof (CounterHomeOne replacement)
    "trust.heading": "Más de 100 proyectos entregados para empresas en Estados Unidos y Latinoamérica",
    "trust.text": "Ayudamos a startups, empresas en crecimiento y marcas establecidas a construir experiencias digitales que impulsan resultados reales.",
    "trust.s1": "Diseño Web y Desarrollo",
    "trust.s2": "Branding e Identidad Visual",
    "trust.s3": "SaaS y Aplicaciones Web",
    "trust.s4": "E-commerce",
    "trust.s5": "Optimización de Conversión",
    "trust.s6": "UX/UI Design",

    // Why CodeCraftt (ProjectHomeOne)
    "project.title": "¿Por qué elegir CodeCraftt?",
    "project.desc": "Unimos diseño estratégico, tecnología de punta y enfoque en resultados para construir productos digitales que impulsan tu negocio.",
    "project.viewmore": "Ver más",
    "project.s1.title": "Estrategia antes que diseño",
    "project.s1.desc": "Cada proyecto comienza con un análisis profundo de tu negocio, mercado y competencia. El diseño es la consecuencia de una estrategia clara.",
    "project.s2.title": "Diseño orientado a resultados",
    "project.s2.desc": "Creamos experiencias que generan confianza, atraen clientes y convierten visitas en oportunidades de negocio.",
    "project.s3.title": "Stack moderno y escalable",
    "project.s3.desc": "React, Next.js, TypeScript, Node.js, AWS. Construido para crecer desde el primer día.",
    "project.s4.title": "Alcance internacional",
    "project.s4.desc": "Clientes activos en Estados Unidos, México, Colombia y Latinoamérica.",
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
    "portfolio.item1.li1": "Sitios Web a Medida",
    "portfolio.item1.li2": "Optimizado para Conversión",
    "portfolio.item1.li3": "Rendimiento y SEO",
    "portfolio.item2.title": "Branding e Identidad Visual",
    "portfolio.item2.badge": "Branding",
    "portfolio.item2.li1": "Logo y Paleta de Color",
    "portfolio.item2.li2": "Sistemas Visuales",
    "portfolio.item2.li3": "Guías de Marca",
    "portfolio.item3.title": "UX/UI para SaaS y Aplicaciones",
    "portfolio.item3.badge": "Experiencia de Usuario",
    "portfolio.item3.li1": "Interfaces Intuitivas",
    "portfolio.item3.li2": "Prototipado y Testing",
    "portfolio.item3.li3": "Centrado en el Usuario",
    "portfolio.item4.title": "Desarrollo Full-Stack",
    "portfolio.item4.badge": "Tecnología",
    "portfolio.item4.li1": "React · Next.js · Node.js",
    "portfolio.item4.li2": "APIs y Bases de Datos",
    "portfolio.item4.li3": "Escalable y Seguro",
    "portfolio.item5.title": "E-commerce y Tiendas Online",
    "portfolio.item5.badge": "Vende Más",
    "portfolio.item5.li1": "Shopify y WooCommerce",
    "portfolio.item5.li2": "Checkout Optimizado",
    "portfolio.item5.li3": "Experiencia de Compra",
    "portfolio.item6.title": "Automatización e IA",
    "portfolio.item6.badge": "Innovación",
    "portfolio.item6.li1": "Agentes de IA",
    "portfolio.item6.li2": "Automatización de Procesos",
    "portfolio.item6.li3": "Productividad",
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
    "footer.scrolltext": "CodeCraftt — Diseño Web · Branding · Desarrollo Digital",
    "footer.desc": "Estudio digital especializado en diseño web, branding y desarrollo de productos digitales para empresas en Estados Unidos y Latinoamérica.",
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
    "hero.subtitle": "Digital Studio",
    "hero.title": "Web Design, Branding\n& Digital Development",
    "hero.title.line1": "Web Design, Branding",
    "hero.title.line2": "& Digital Development",
    "hero.start": "Start\nYour Project",
    "hero.desc": "We create websites, brands, and digital products that build trust, attract customers, and turn visits into business opportunities.",
    "hero.cta": "Book a Free Consultation",
    "hero.cta2": "View Projects",
    "hero.b1": "Custom Web Design",
    "hero.b2": "Strategic Branding",
    "hero.b3": "UX/UI for SaaS & Apps",
    "hero.b4": "Full-Stack Development",
    "hero.scroll": "See More",
    "hero.scrolltext": "Web Design · Branding · UX/UI · Full-Stack Development · SaaS · E-commerce",

    // About section (home)
    "about.tag": "(Who We Are)",
    "about.box1.title": "We design first.",
    "about.box1.desc": "Before writing a single line of code or designing a screen, we understand your business, your goals, and who you want to reach.",
    "about.box2.title": "We develop after.",
    "about.box2.desc": "Our process combines strategy, design, and technology to create digital solutions that don't just look good — they work.",
    "about.heading": "We design first. We develop after.",
    "about.desc": "We combine strategy, design, and technology to create digital solutions that don't just look good — they work.",
    "about.cta": "Learn Our Process",

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
    "portfolio.tag": "Capabilities",
    "portfolio.subtitle": "From strategy to launch.",
    "portfolio.desc": "We become a digital partner to accompany every stage of your company's growth.",

    // Working / Process
    "working.tag": "Process",
    "working.title": "A clear process to get results.",
    "working.step1.title": "Discovery",
    "working.step1.desc": "We understand your business, market, and objectives.",
    "working.step2.title": "Strategy",
    "working.step2.desc": "We define the right solution for your project.",
    "working.step3.title": "Design",
    "working.step3.desc": "We create visual experiences aligned with your brand.",
    "working.step4.title": "Development",
    "working.step4.desc": "We build a fast, secure, and scalable solution.",
    "working.step5.title": "Quality Testing",
    "working.step5.desc": "We validate every detail before launch.",
    "working.step6.title": "Launch & Optimization",
    "working.step6.desc": "We publish, measure, and continuously improve.",

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

    // Trust / Social Proof (CounterHomeOne replacement)
    "trust.heading": "Over 100 projects delivered for companies in the United States and Latin America",
    "trust.text": "We help startups, growing companies, and established brands build digital experiences that drive real results.",
    "trust.s1": "Web Design & Development",
    "trust.s2": "Branding & Visual Identity",
    "trust.s3": "SaaS & Web Applications",
    "trust.s4": "E-commerce",
    "trust.s5": "Conversion Optimization",
    "trust.s6": "UX/UI Design",

    // Why CodeCraftt (ProjectHomeOne)
    "project.title": "Why Choose CodeCraftt?",
    "project.desc": "We combine strategic design, cutting-edge technology, and a results-driven focus to build digital products that grow your business.",
    "project.viewmore": "Learn more",
    "project.s1.title": "Strategy before design",
    "project.s1.desc": "Every project begins with a deep analysis of your business, market, and competition. Design is the outcome of a clear strategy.",
    "project.s2.title": "Results-driven design",
    "project.s2.desc": "We create experiences that build trust, attract customers, and turn visits into business opportunities.",
    "project.s3.title": "Modern, scalable stack",
    "project.s3.desc": "React, Next.js, TypeScript, Node.js, AWS. Built to grow from day one.",
    "project.s4.title": "International reach",
    "project.s4.desc": "Active clients in the United States, Mexico, Colombia, and Latin America.",
    "project.s5.title": "100% custom",
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
    "portfolio.item1.li1": "Custom Websites",
    "portfolio.item1.li2": "Conversion Optimized",
    "portfolio.item1.li3": "Performance & SEO",
    "portfolio.item2.title": "Branding & Visual Identity",
    "portfolio.item2.badge": "Branding",
    "portfolio.item2.li1": "Logo & Color Palette",
    "portfolio.item2.li2": "Visual Systems",
    "portfolio.item2.li3": "Brand Guidelines",
    "portfolio.item3.title": "UX/UI for SaaS & Apps",
    "portfolio.item3.badge": "User Experience",
    "portfolio.item3.li1": "Intuitive Interfaces",
    "portfolio.item3.li2": "Prototyping & Testing",
    "portfolio.item3.li3": "User-Centered Design",
    "portfolio.item4.title": "Full-Stack Development",
    "portfolio.item4.badge": "Technology",
    "portfolio.item4.li1": "React · Next.js · Node.js",
    "portfolio.item4.li2": "APIs & Databases",
    "portfolio.item4.li3": "Scalable & Secure",
    "portfolio.item5.title": "E-commerce & Online Stores",
    "portfolio.item5.badge": "Sell More",
    "portfolio.item5.li1": "Shopify & WooCommerce",
    "portfolio.item5.li2": "Optimized Checkout",
    "portfolio.item5.li3": "Shopping Experience",
    "portfolio.item6.title": "Automation & AI",
    "portfolio.item6.badge": "Innovation",
    "portfolio.item6.li1": "AI Agents",
    "portfolio.item6.li2": "Process Automation",
    "portfolio.item6.li3": "Productivity",
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
    "footer.scrolltext": "CodeCraftt — Web Design · Branding · Digital Development",
    "footer.desc": "Digital studio specializing in web design, branding, and digital product development for companies in the United States and Latin America.",
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
