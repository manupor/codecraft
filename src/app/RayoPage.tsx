"use client";

import React, { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

/* ── Compass/Star SVG from Rayo template design system ── */
const StarSVG = ({ cls = "" }: { cls?: string }) => (
  <svg className={cls} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" fill="currentColor">
    <path fill="currentColor" d="M78.4,38.4c0,0-11.8,0-15.8,0c-1.6,0-4.8-0.2-7.1-0.8c-2.3-0.6-4.3-0.8-6.3-2.4
      c-2-1.2-3.5-3.2-4.7-4.8c-1.2-1.6-1.6-3.6-2-5.5c-0.3-1.5-0.7-4.3-0.8-5.9c-0.2-4.3,0-17.4,0-17.4
      C41.8,0.8,41,0,40.2,0s-1.6,0.8-1.6,1.6c0,0,0,13.1,0,17.4c0,1.6-0.6,4.3-0.8,5.9c-0.3,2-0.8,4-2,5.5
      c-1.2,2-2.8,3.6-4.7,4.8s-4,1.8-6.3,2.4c-1.9,0.5-4.7,0.6-6.7,0.8c-3.9,0.4-16.6,0-16.6,0
      C0.8,38.4,0,39.2,0,40c0,0.8,0.8,1.6,1.6,1.6c0,0,12.2,0,16.6,0c1.6,0,4.8,0.3,6.7,0.8
      c2.3,0.6,4.3,0.8,6.3,2.4c1.6,1.2,3.2,2.8,4.3,4.4c1.2,2,2.1,3.9,2.4,6.3c0.2,1.7,0.7,4.7,0.8,6.7
      c0.2,4,0,16.2,0,16.2c0,0.8,0.8,1.6,1.6,1.6s1.6-0.8,1.6-1.6c0,0,0-12.3,0-16.2c0-1.6,0.5-5.1,0.8-6.7
      c0.5-2.3,0.8-4.4,2.4-6.3c1.2-1.6,2.8-3.2,4.3-4.4c2-1.2,3.9-2,6.3-2.4c1.8-0.3,5.1-0.7,7.1-0.8
      c3.5-0.2,15.8,0,15.8,0c0.8,0,1.6-0.8,1.6-1.6C80,39.2,79.2,38.4,78.4,38.4z"/>
  </svg>
);

/* ── Arrow icon used in nav and buttons ── */
const ArrowSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2,.4-.4s-.2-.4-.4-.4h0Z"/>
  </svg>
);

export default function RayoPage() {
  const { language, setLanguage } = useLanguage();
  const es = language === "es";

  /* Load template JS after mount */
  useEffect(() => {
    const loadScript = (src: string) =>
      new Promise<void>((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) { resolve(); return; }
        const s = document.createElement("script");
        s.src = src;
        s.onload = () => resolve();
        s.onerror = reject;
        document.body.appendChild(s);
      });

    loadScript("/rayo-js/libs.min.js")
      .then(() => loadScript("/rayo-js/app.js"))
      .then(() => {
        /* Use app.js global options — enableScrollSpy starts them automatically on scroll */
        const w = window as any;
        if (w.countUp && w.optionsPlus && w.optionsPercent) {
          new w.countUp.CountUp("cc-counter-1", 50, w.optionsPlus);
          new w.countUp.CountUp("cc-counter-2", 98, w.optionsPercent);
          new w.countUp.CountUp("cc-counter-3", 7, w.optionsPlus);
          new w.countUp.CountUp("cc-counter-4", 70, w.optionsPlus);
        }
      })
      .catch(() => {/* silently ignore JS load errors */});
  }, []);

  /* ── marquee item helper ── */
  const MarqueeItem = ({ text }: { text: string }) => (
    <div className="marquee__item one-line item-regular text">
      <p className="marquee__text">{text}</p>
      <div className="marquee__image"><StarSVG /></div>
    </div>
  );

  return (
    <>
      {/* ════════════════════════════════════════
          LOADER
      ════════════════════════════════════════ */}
      <div id="loader" className="loader">
        <div className="loader__wrapper">
          <div className="loader__content">
            <div className="loader__count">
              <span className="count__text">0</span>
              <span className="count__percent">%</span>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════
          HAMBURGER NAV
      ════════════════════════════════════════ */}
      {/* app.js handles hamburger open/close natively */}
      <nav className="mxd-nav__wrap" data-lenis-prevent="">
        <div className="mxd-nav__contain loading__fade">
          <a href="#0" className="mxd-nav__hamburger" aria-label="Menu">
            <div className="hamburger__base"></div>
            <div className="hamburger__line"></div>
            <div className="hamburger__line"></div>
          </a>
        </div>

        <div className="mxd-menu__wrapper">
          <div className="mxd-menu__base"></div>
          <div className="mxd-menu__contain">
            <div className="mxd-menu__inner">
              <div className="mxd-menu__left">
                <p className="mxd-menu__caption menu-fade-in">
                  {es ? "� Código de élite,\nresultados reales." : "� Elite code,\nreal results."}
                </p>
                <div className="main-menu">
                  <nav className="main-menu__content">
                    <ul id="main-menu" className="main-menu__accordion">
                      {[
                        { label: es ? "Inicio" : "Home", href: "#hero" },
                        { label: es ? "Servicios" : "Services", href: "#services" },
                        { label: es ? "Capacidades" : "Capabilities", href: "#capabilities" },
                        { label: es ? "Clientes" : "Clients", href: "#clients" },
                        { label: es ? "Contacto" : "Contact", href: "#contact" },
                      ].map((item) => (
                        <li key={item.href} className="main-menu__item">
                          <div className="main-menu__toggle">
                            <a href={item.href} className="main-menu__link btn btn-anim">
                              <span className="btn-caption">{item.label}</span>
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
              {/* right promo panel */}
              <div className="mxd-menu__right">
                <div className="menu-promo">
                  <div className="menu-promo__content">
                    <p className="menu-promo__caption menu-fade-in">
                      {es
                        ? "👋 ¡Mucho gusto!\nSomos CodeCraftt, el estudio de desarrollo de élite fundado por Manuel Portuguez."
                        : "👋 Nice to meet you!\nWe are CodeCraftt, the elite development studio founded by Manuel Portuguez."}
                    </p>
                    <div className="menu-promo__image" style={{ marginTop: "24px", borderRadius: "12px", overflow: "hidden" }}>
                      <img src="/rayo-img/demo/screens/01.webp" alt="CodeCraftt work" style={{ width: "100%", display: "block" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* bottom data line */}
            <div className="mxd-menu__data menu-fade-in">
              <p className="t-xsmall">
                {es ? "Hecho con" : "Made with"}
                {" "}<i className="ph-fill ph-heart t-additional"></i>{" "}
                {es ? "por" : "by"}{" "}
                <a className="no-effect" href="mailto:hello@codecraftt.com">CodeCraftt</a>
              </p>
              <p className="t-xsmall">
                <i className="ph ph-copyright"></i> 2025
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* ════════════════════════════════════════
          HEADER
      ════════════════════════════════════════ */}
      <header className="mxd-header loading__fade">
        <div className="mxd-header__logo">
          <a href="#hero" className="mxd-logo" aria-label="CodeCraftt">
            <span className="mxd-logo__text">CODE<br />CRAFTT</span>
          </a>
        </div>
        <div className="mxd-header__controls loading__fade">
          {/* Language toggle */}
          <button
            onClick={() => setLanguage(es ? "en" : "es")}
            className="btn btn-anim btn-default btn-outline"
            style={{ marginRight: "12px", minWidth: "52px" }}
          >
            <span className="btn-caption">{es ? "EN" : "ES"}</span>
          </button>
          {/* Required by app.js color switcher — controls dark/light mode */}
          <button id="color-switcher" className="mxd-color-switcher" type="button" role="switch" aria-label="light/dark mode" aria-checked="true"></button>
          <a className="btn btn-anim btn-default btn-mobile-icon btn-outline slide-right-up" href="#contact" aria-label="Say Hello">
            <span className="btn-caption">{es ? "Hablemos" : "Say Hello"}</span>
            <i className="ph-bold ph-arrow-up-right"></i>
          </a>
        </div>
      </header>

      {/* ════════════════════════════════════════
          MAIN CONTENT
      ════════════════════════════════════════ */}
      <main id="mxd-page-content" className="mxd-page-content">

        {/* ── HERO ── */}
        <div id="hero" className="mxd-section">
          <div className="mxd-hero-02 mxd-pinned-fullscreen">
            <div className="mxd-pinned-fullscreen__static hero-02-fade-out-scroll loading-wrap">
              <div className="hero-02-static__tl-trigger"></div>

              {/* Top caption */}
              <div className="mxd-hero-02-static__top hero-02-static-anim-el">
                <div className="mxd-container fullwidth-container grid-container">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                        <div className="hero-02-static__caption loading__item">
                          <p className="t-large t-medium t-120 t-bright">
                            {es ? "Dominamos el código." : "We master the code."}
                          </p>
                          <p className="t-large t-medium t-120 t-muted">
                            {es ? "Sin límites creativos." : "No creative limits."}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center: image + marquee */}
              <div className="mxd-hero-02-static__center">
                <div className="mxd-hero-02-marquee">
                  <div className="mxd-hero-02-marquee__image loading__item">
                    <img className="mxd-move" src="/rayo-img/demo/01_resp-img.webp" alt="CodeCraftt work" />
                  </div>
                  <div className="mxd-hero-02-marquee__line loading__item">
                    <div className="marquee marquee-left--gsap">
                      <div className="marquee__toleft">
                        {[...Array(4)].map((_, i) => (
                          <MarqueeItem key={i} text={es ? "el poder de la innovación" : "the power of innovation"} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom keywords */}
              <div className="mxd-hero-02-static__bottom hero-02-static-anim-el">
                <div className="mxd-container fullwidth-container grid-container">
                  <div className="container-fluid p-0">
                    <div className="row g-0">
                      <div className="col-12 col-md-6 col-xl-4 mxd-grid-item no-margin">
                        <div className="mxd-paragraph__lists loading__fade">
                          <div className="container-fluid p-0">
                            <div className="row g-0">
                              <div className="col-6 col-xl-5">
                                <ul>
                                  {(es
                                    ? ["Innovación","Creatividad","Experiencia","Precisión","Pasión"]
                                    : ["Innovation","Creativity","Experience","Precision","Passion"]
                                  ).map((w) => (
                                    <li key={w}><p className="t-small anim-uni-in-up">{w}</p></li>
                                  ))}
                                </ul>
                              </div>
                              <div className="col-6 col-xl-5">
                                <ul>
                                  {["UI/UX","SaaS","AI/ML","Full-Stack","Mobile"].map((w) => (
                                    <li key={w}><p className="t-small anim-uni-in-up">{w}</p></li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rotating scroll button */}
              <div className="mxd-hero-02-static__btn hero-02-static-anim-el loading__fade">
                <a href="#services" className="btn-rotating btn-rotating-160" aria-label="Scroll For More">
                  <svg version="1.1" id="scrollDown" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 160 160" className="btn-rotating__text mxd-rotate" data-value="360">
                    <defs>
                      <path id="textPath" d="M149.7,80c0,38.5-31.2,69.7-69.7,69.7S10.3,118.5,10.3,80S41.5,10.3,80,10.3S149.7,41.5,149.7,80z"/>
                    </defs>
                    <g>
                      <use href="#textPath" fill="none"></use>
                      <text>
                        <textPath href="#textPath">
                          {es
                            ? "Scroll para más * Scroll para más * Scroll para más * "
                            : "Scroll for More * Scroll for More * Scroll for More * "}
                        </textPath>
                      </text>
                    </g>
                  </svg>
                  <svg className="btn-rotating__image" xmlns="http://www.w3.org/2000/svg"
                    width="60" height="60" viewBox="0 0 60 60">
                    <path style={{ fill: "var(--accent)" }} d="M58.9,28.9c0,0-9.1,0.1-12.1,0c-1.3,0-5.3-0.5-5.3-0.5c-1.7-0.2-3.4-0.7-4.8-1.7
                      c-1.4-1-2.7-2.3-3.6-3.7c-0.8-1.3-1.3-2.7-1.5-4.2c0,0-0.4-3.3-0.5-4.4c-0.2-3.3,0-13.1,0-13.1
                      c0-0.6-0.5-1.1-1.1-1.1s-1.1,0.5-1.1,1.1c0,0,0.2,9.8,0,13.1c0,1.1-0.5,4.4-0.5,4.4
                      c-0.2,1.5-0.6,3-1.5,4.2c-0.9,1.5-2.2,2.7-3.6,3.7s-3,1.5-4.7,1.7c0,0-3.7,0.4-5,0.5
                      c-3.1,0.2-12.5,0-12.5,0C0.5,28.9,0,29.4,0,30s0.5,1.1,1.1,1.1c0,0,9.4-0.2,12.5,0
                      c1.2,0,5,0.5,5,0.5c1.7,0.2,3.3,0.7,4.7,1.7c1.3,0.9,2.4,2,3.3,3.3c1,1.4,1.5,3.1,1.7,4.8
                      c0,0,0.4,3.9,0.5,5.2c0.1,3,0,12.2,0,12.2c0,0.6,0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1
                      c0,0-0.1-9.2,0-12.2c0-1.3,0.5-5.2,0.5-5.2c0.2-1.7,0.7-3.4,1.7-4.8c0.9-1.3,2-2.4,3.3-3.3
                      c1.4-1,3.1-1.5,4.8-1.7c0,0,3.9-0.4,5.3-0.5c3-0.1,12.1,0,12.1,0c0.6,0,1.1-0.5,1.1-1.1
                      s-0.5-1.1-1.1-1.1l0,0L58.9,28.9z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Scroll image gallery */}
            <div className="mxd-pinned-fullscreen__scroll">
              <div className="mxd-hero-02-scroll__wrap">
                <div className="mxd-hero-02-scroll__images">
                  <div className="mxd-hero-02-images__row mxd-hero-02-images__row-01">
                    {[
                      { src: "/rayo-img/demo/screens/01.webp", cls: "mxd-hero-02-image__portrait portrait-01", inner: "type-01" },
                      { src: "/rayo-img/demo/screens/02.webp", cls: "mxd-hero-02-image__landscape landscape-01", inner: "type-03" },
                      { src: "/rayo-img/demo/screens/03.webp", cls: "mxd-hero-02-image__portrait portrait-02", inner: "type-01" },
                    ].map((img) => (
                      <a key={img.src} className={img.cls} href="#services">
                        <div className={`mxd-hero-02-image__inner ${img.inner} anim-uni-in-up`}>
                          <img src={img.src} alt="CodeCraftt project" />
                          <div className="mxd-preview-hover">
                            <i className="mxd-preview-hover__icon icon-small">
                              <img src="/rayo-img/icons/icon-eye.svg" alt="View" />
                            </i>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="mxd-hero-02-images__row mxd-hero-02-images__row-02">
                    {[
                      { src: "/rayo-img/demo/screens/04.webp", cls: "mxd-hero-02-image__landscape landscape-02", inner: "type-03" },
                      { src: "/rayo-img/demo/screens/05.webp", cls: "mxd-hero-02-image__portrait portrait-xl portrait-03", inner: "type-02" },
                    ].map((img) => (
                      <a key={img.src} className={img.cls} href="#services">
                        <div className={`mxd-hero-02-image__inner ${img.inner} anim-uni-in-up`}>
                          <img src={img.src} alt="CodeCraftt project" />
                          <div className="mxd-preview-hover">
                            <i className="mxd-preview-hover__icon icon-small">
                              <img src="/rayo-img/icons/icon-eye.svg" alt="View" />
                            </i>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="mxd-hero-02-images__row mxd-hero-02-images__row-03">
                    {[
                      { src: "/rayo-img/demo/screens/06.webp", cls: "mxd-hero-02-image__portrait portrait-04", inner: "type-01" },
                      { src: "/rayo-img/demo/screens/07.webp", cls: "mxd-hero-02-image__landscape landscape-03", inner: "type-03" },
                      { src: "/rayo-img/demo/screens/08.webp", cls: "mxd-hero-02-image__portrait portrait-05", inner: "type-01" },
                    ].map((img) => (
                      <a key={img.src} className={img.cls} href="#services">
                        <div className={`mxd-hero-02-image__inner ${img.inner} anim-uni-in-up`}>
                          <img src={img.src} alt="CodeCraftt project" />
                          <div className="mxd-preview-hover">
                            <i className="mxd-preview-hover__icon icon-small">
                              <img src="/rayo-img/icons/icon-eye.svg" alt="View" />
                            </i>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mxd-pinned-fullscreen__tl-trigger"></div>
          </div>
        </div>

        {/* ── SERVICES STACKING CARDS ── */}
        <div id="services" className="mxd-section padding-stacked-section">
          <div className="mxd-container grid-container">
            <div className="mxd-block mxd-grid-item no-margin">
              <div className="content__block">
                <div className="stack-wrapper mxd-hero-02-stack">
                  <div className="stack-offset"></div>
                  <div className="services-stack">

                    {[
                      {
                        bg: "bg-base-opp", titleCls: "opposite", numCls: "t-opp-muted", pCls: "t-opposite",
                        num: "/01",
                        title: es ? "Desarrollo SaaS" : "SaaS Development",
                        desc: es
                          ? "Construimos plataformas SaaS robustas y escalables desde cero. Arquitecturas cloud-native, autenticación, billing y paneles de control que convierten usuarios en clientes fieles."
                          : "We build robust, scalable SaaS platforms from scratch. Cloud-native architectures, authentication, billing and dashboards that turn users into loyal customers.",
                        imgs: [
                          { src: "/rayo-img/demo/screens/01.webp", tags: ["Next.js", "React", "Node.js"] },
                          { src: "/rayo-img/demo/screens/02.webp", tags: ["AWS", "PostgreSQL", "Stripe"] },
                        ],
                      },
                      {
                        bg: "bg-accent", titleCls: "opposite", numCls: "t-opp-brigth", pCls: "t-opposite",
                        num: "/02",
                        title: es ? "Aplicaciones Web" : "Web Applications",
                        desc: es
                          ? "Aplicaciones web de alto rendimiento con interfaces que enamoran. Cada pixel pensado para convertir, cada línea de código optimizada para velocidad."
                          : "High-performance web applications with interfaces that captivate. Every pixel designed to convert, every line of code optimized for speed.",
                        imgs: [
                          { src: "/rayo-img/demo/screens/03.webp", tags: ["TypeScript", "UI/UX", "Web"] },
                          { src: "/rayo-img/demo/screens/04.webp", tags: ["Performance", "SEO", "PWA"] },
                        ],
                      },
                      {
                        bg: "bg-base-tint", titleCls: "", numCls: "t-muted-extra", pCls: "",
                        num: "/03",
                        title: es ? "Apps Móviles" : "Mobile Apps",
                        desc: es
                          ? "Apps nativas e híbridas para iOS y Android que tus usuarios no querrán cerrar. React Native y arquitecturas offline-first para mercados exigentes."
                          : "Native and hybrid iOS and Android apps your users won't want to close. React Native and offline-first architectures for demanding markets.",
                        imgs: [
                          { src: "/rayo-img/demo/screens/05.webp", tags: ["React Native", "iOS", "Android"] },
                          { src: "/rayo-img/demo/screens/06.webp", tags: ["UX", "Offline-first", "Push"] },
                        ],
                      },
                      {
                        bg: "bg-base-opp", titleCls: "opposite", numCls: "t-opp-muted", pCls: "t-opposite",
                        num: "/04",
                        title: es ? "IA & Automatización" : "AI & Automation",
                        desc: es
                          ? "Integramos inteligencia artificial en tu flujo de trabajo. LLMs, agentes autónomos y automatizaciones que eliminan lo manual y escalan tu operación sin fricción."
                          : "We integrate artificial intelligence into your workflow. LLMs, autonomous agents and automations that eliminate manual work and scale your operation without friction.",
                        imgs: [
                          { src: "/rayo-img/demo/screens/07.webp", tags: ["GPT-4", "LangChain", "AI"] },
                          { src: "/rayo-img/demo/screens/08.webp", tags: ["Automation", "n8n", "Python"] },
                        ],
                      },
                    ].map((svc) => (
                      <div key={svc.num} className="stack-item">
                        <div className={`mxd-services-stack__inner showcase-inner ${svc.bg}`}>
                          <div className="mxd-services-stack__title showcase-title">
                            <h3 className={svc.titleCls}>{svc.title}</h3>
                            <span className={`mxd-services-stack__number ${svc.numCls}`}>{svc.num}</span>
                          </div>
                          <div className="mxd-services-stack__info showcase-info">
                            <p className={svc.pCls}>{svc.desc}</p>
                          </div>
                          <div className="mxd-services-stack__works">
                            {svc.imgs.map((img) => (
                              <a key={img.src} className="mxd-services-stack__work" href="#contact">
                                <img className="mxd-services-stack__preview" src={img.src} alt={svc.title} />
                                <div className="mxd-services-stack__tags tags-absolute">
                                  {img.tags.map((t) => (
                                    <span key={t} className="tag tag-default tag-permanent">{t}</span>
                                  ))}
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CAPABILITIES ── */}
        <div id="capabilities" className="mxd-section overflow-hidden padding-grid-pre-mtext">
          <div className="mxd-container grid-container">

            <div className="mxd-block">
              <div className="mxd-section-title">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrtitle">
                        <h2 className="reveal-type">{es ? "Nuestras capacidades" : "Our capabilities"}</h2>
                      </div>
                    </div>
                    <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrdescr">
                        <p className="anim-uni-in-up">{es ? "Diseño" : "Design"}</p>
                        <p className="anim-uni-in-up">{es ? "Desarrollo" : "Development"}</p>
                        <p className="anim-uni-in-up">{es ? "Maestría" : "Mastership"}</p>
                      </div>
                    </div>
                    <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                        <a className="btn btn-anim btn-default btn-outline slide-right-up" href="#contact">
                          <span className="btn-caption">{es ? "Contáctanos" : "Contact Us"}</span>
                          <i className="ph-bold ph-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mxd-block">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 mxd-grid-item no-margin">
                    <div className="mxd-cpb-list">
                      {[
                        { label: es ? "UI/UX & Diseño de Producto" : "UI/UX & Product Design", num: "/ 01", hoverImg: "/rayo-img/demo/screens/01.webp", rowImg: "/rayo-img/demo/screens/04.webp" },
                        { label: es ? "Plataformas SaaS Full-Stack" : "Full-Stack SaaS Platforms", num: "/ 02", hoverImg: "/rayo-img/demo/screens/02.webp", rowImg: "/rayo-img/demo/screens/05.webp" },
                        { label: es ? "Inteligencia Artificial Aplicada" : "Applied Artificial Intelligence", num: "/ 03", hoverImg: "/rayo-img/demo/screens/07.webp", rowImg: "/rayo-img/demo/screens/06.webp" },
                        { label: es ? "Apps Móviles iOS & Android" : "iOS & Android Mobile Apps", num: "/ 04", hoverImg: "/rayo-img/demo/screens/05.webp", rowImg: "/rayo-img/demo/screens/07.webp" },
                        { label: es ? "Gestión de Proyectos Técnicos" : "Technical Project Management", num: "/ 05", hoverImg: "/rayo-img/demo/screens/03.webp", rowImg: "/rayo-img/demo/screens/08.webp" },
                      ].map((item) => (
                        <div key={item.num} className="mxd-cpb-list__item hover-reveal__item">
                          <div className="mxd-cpb-list__divider anim-uni-in-up"></div>
                          <div className="hover-reveal__content hover-reveal-280x340">
                            <img className="hover-reveal__image" src={item.hoverImg} alt={item.label} />
                          </div>
                          <div className="mxd-cpb-list__content anim-uni-in-up">
                            <p className="mxd-cpb-list__title">{item.label}</p>
                            <div className="mxd-cpb-list__num"><span>{item.num}</span></div>
                          </div>
                          <div className="mxd-cpb-list__image anim-uni-in-up">
                            <img src={item.rowImg} alt={item.label} />
                          </div>
                          <div className="mxd-cpb-list__divider anim-uni-in-up"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── MARQUEE TEXT STRIP ── */}
        <div className="mxd-section padding-mtext-pre-grid">
          <div className="mxd-container fullwidth-container">
            <div className="mxd-block">
              <div className="marquee marquee-right--gsap muted-extra">
                <div className="marquee__toright">
                  {[
                    es ? "SaaS" : "SaaS",
                    es ? "Desarrollo" : "Development",
                    "AI / ML",
                    es ? "Móvil" : "Mobile",
                    es ? "Élite" : "Elite",
                  ].map((word, i) => (
                    <MarqueeItem key={i} text={word} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── STATISTICS CARDS ── */}
        <div className="mxd-section overflow-hidden padding-pre-title">
          <div className="mxd-container grid-container">
            <div className="mxd-block">
              <div className="mxd-stats-cards">
                <div className="container-fluid px-0">
                  <div className="row gx-0">
                    <div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right">
                      <div className="mxd-stats-cards__inner align-end bg-accent radius-m padding-4">
                        <div className="mxd-counter align-end">
                          <p id="cc-counter-1" className="mxd-counter__number mxd-stats-number opposite">50+</p>
                          <p className="mxd-counter__descr t-140 t-bright opposite">
                            {es ? "Proyectos exitosos\nentregados" : "Successfully completed\nprojects delivered"}
                          </p>
                        </div>
                        <div className="mxd-stats-cards__btngroup">
                          <a className="btn btn-anim btn-default btn-outline opposite slide-right-up" href="#contact">
                            <span className="btn-caption">{es ? "Empecemos" : "Let's Start"}</span>
                            <i className="ph-bold ph-arrow-up-right"></i>
                          </a>
                        </div>
                        <div className="mxd-stats-cards__image mxd-stats-cards-image-1">
                          <img src="/rayo-img/demo/screens/01.webp" alt="CodeCraftt project" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left">
                      <div className="mxd-stats-cards__inner align-end bg-base-tint radius-m padding-4">
                        <div className="mxd-stats-cards__btngroup">
                          <div className="mxd-avatars">
                            <div className="mxd-avatars__item">
                              <img src="/rayo-img/demo/screens/03.webp" alt="Client" />
                            </div>
                            <div className="mxd-avatars__item bg-base-opp">
                              <StarSVG cls="mxd-avatars__icon" />
                            </div>
                            <div className="mxd-avatars__item">
                              <img src="/rayo-img/demo/screens/02.webp" alt="Client" />
                            </div>
                          </div>
                        </div>
                        <div className="mxd-counter align-end">
                          <p id="cc-counter-2" className="mxd-counter__number mxd-stats-number">98%</p>
                          <p className="mxd-counter__descr t-140 t-bright">
                            {es ? "Clientes satisfechos\nque vuelven por más" : "Satisfied clients who\ncome back for more"}
                          </p>
                        </div>
                        <div className="mxd-stats-cards__image mxd-stats-cards-image-2">
                          <img src="/rayo-img/demo/screens/02.webp" alt="CodeCraftt project" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right">
                      <div className="mxd-stats-cards__inner bg-base-tint radius-m padding-4">
                        <div className="mxd-counter">
                          <p id="cc-counter-3" className="mxd-counter__number mxd-stats-number">7+</p>
                          <p className="mxd-counter__descr t-140 t-bright">
                            {es ? "Años de experiencia\nen productos digitales" : "Years of professional experience\nin digital products"}
                          </p>
                        </div>
                        <div className="mxd-stats-cards__btngroup">
                          <a className="btn btn-anim btn-default btn-outline slide-right-down" href="#contact">
                            <span className="btn-caption">{es ? "Nuevo Proyecto" : "New Project"}</span>
                            <i className="ph-bold ph-arrow-down-right"></i>
                          </a>
                        </div>
                        <div className="mxd-stats-cards__image mxd-stats-cards-image-3">
                          <img src="/rayo-img/demo/screens/07.webp" alt="CodeCraftt project" />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left">
                      <div className="mxd-stats-cards__inner bg-base-tint radius-m padding-4">
                        <div className="mxd-counter">
                          <p id="cc-counter-4" className="mxd-counter__number mxd-stats-number">70+</p>
                          <p className="mxd-counter__descr t-140 t-bright">
                            {es ? "Soluciones de software\ndesplegadas en producción" : "Software solutions\ndeployed in production"}
                          </p>
                        </div>
                        <div className="mxd-stats-cards__btngroup">
                          <a className="btn btn-anim btn-default btn-outline slide-right-up" href="#services">
                            <span className="btn-caption">{es ? "Ver servicios" : "Our Services"}</span>
                            <i className="ph-bold ph-arrow-up-right"></i>
                          </a>
                        </div>
                        <div className="mxd-stats-cards__image mxd-stats-cards-image-4">
                          <img src="/rayo-img/demo/screens/08.webp" alt="CodeCraftt project" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ABOUT ── */}
        <div className="mxd-section padding-pre-grid">
          <div className="mxd-container grid-container">
            <div className="mxd-block">
              <div className="container-fluid px-0">
                <div className="row gx-0">
                  <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                    <div className="mxd-block__name">
                      <h2 className="reveal-type anim-uni-in-up">CodeCraftt</h2>
                    </div>
                  </div>
                  <div className="col-12 col-xl-6 mxd-grid-item no-margin">
                    <div className="mxd-block__content">
                      <div className="mxd-block__paragraph">
                        <p className="t-large t-bright anim-uni-in-up">
                          {es
                            ? "Somos el brazo tecnológico que acelera negocios. Construimos motores digitales de alto rendimiento — SaaS, IA y aplicaciones que escalan sin límites."
                            : "We are the tech arm that accelerates businesses. We build high-performance digital engines — SaaS, AI and applications that scale without limits."}
                        </p>
                        <p className="anim-uni-in-up">
                          {es
                            ? "Fundado por Manuel Portuguez, CodeCraftt combina precisión técnica con visión estratégica. Cada proyecto es una inversión en el futuro de tu empresa. No somos proveedores — somos socios de crecimiento."
                            : "Founded by Manuel Portuguez, CodeCraftt combines technical precision with strategic vision. Every project is an investment in your company's future. We are not vendors — we are growth partners."}
                        </p>
                        <div className="mxd-paragraph__controls anim-uni-in-up">
                          <a className="btn btn-anim btn-default btn-outline slide-right-up" href="#contact">
                            <span className="btn-caption">{es ? "Trabajemos juntos" : "Let's Work Together"}</span>
                            <i className="ph-bold ph-arrow-up-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CLIENTS / PARTNERS ── */}
        <div id="clients" className="mxd-section padding-pre-title">
          <div className="mxd-container grid-container">
            <div className="mxd-block">
              <div className="mxd-partners-cards">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    {[
                      { name: "HiHub Global", logo: "/logos/logo-hihub-white.png", href: "https://hihubglobal.com" },
                      { name: "Olavivo", logo: "/logos/OLAVIVO.png", href: "https://olavivo.com" },
                      { name: "Riviera CR", logo: "/logos/logo-riviera.png", href: "https://rivieracr.net" },
                      { name: "Reserva", logo: "/logos/Logo-Reserva-08_GOLD-e1718579433972-768x779.png", href: "#" },
                      { name: "Ruby Wager", logo: "/logos/Ruby-Wager-Logo.png", href: "#" },
                    ].map((c) => (
                      <div key={c.name} className="col-12 col-md-6 col-xl-3 mxd-partners-cards__item mxd-grid-item animate-card-4">
                        <a className="mxd-partners-cards__inner" href={c.href} target="_blank" rel="noreferrer">
                          <div className="mxd-partners-cards__logo">
                            <img src={c.logo} alt={c.name} />
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── RECENT PROJECTS (Blog Preview) ── */}
        <div className="mxd-section padding-blog">
          <div className="mxd-container grid-container">
            <div className="mxd-block">
              <div className="mxd-section-title pre-grid">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    <div className="col-12 col-xl-5 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrtitle">
                        <h2 className="reveal-type anim-uni-in-up">
                          {es ? "Proyectos recientes" : "Recent projects"}
                        </h2>
                      </div>
                    </div>
                    <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrdescr">
                        <p className="anim-uni-in-up">
                          {es
                            ? "Productos reales, clientes reales, resultados medibles."
                            : "Real products, real clients, measurable results."}
                        </p>
                      </div>
                    </div>
                    <div className="col-12 col-xl-3 mxd-grid-item no-margin">
                      <div className="mxd-section-title__hrcontrols anim-uni-in-up">
                        <a className="btn btn-anim btn-default btn-outline slide-right-up" href="#contact">
                          <span className="btn-caption">{es ? "Ver todo" : "See All"}</span>
                          <i className="ph-bold ph-arrow-up-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mxd-block">
              <div className="mxd-blog-preview">
                <div className="container-fluid p-0">
                  <div className="row g-0">
                    {[
                      {
                        img: "/rayo-img/demo/screens/02.webp",
                        tags: es ? ["SaaS", "Full-Stack"] : ["SaaS", "Full-Stack"],
                        title: es ? "Plataforma de afiliados <span>HiHub Global</span>" : "<span>HiHub Global</span> affiliate platform",
                      },
                      {
                        img: "/rayo-img/demo/screens/05.webp",
                        tags: ["Mobile", "iOS / Android"],
                        title: es ? "App móvil para <span>Olavivo</span>" : "Mobile app for <span>Olavivo</span>",
                      },
                      {
                        img: "/rayo-img/demo/screens/07.webp",
                        tags: ["AI", "Automation"],
                        title: es ? "Motor de IA para <span>Riviera CR</span>" : "AI engine for <span>Riviera CR</span>",
                      },
                    ].map((post, i) => (
                      <div key={i} className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
                        <a className="mxd-blog-preview__media" href="#contact">
                          <div className="mxd-blog-preview__image">
                            <img src={post.img} alt="Project preview" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                          </div>
                          <div className="mxd-preview-hover">
                            <i className="mxd-preview-hover__icon">
                              <img src="/rayo-img/icons/icon-eye.svg" alt="View" />
                            </i>
                          </div>
                          <div className="mxd-blog-preview__tags">
                            {post.tags.map((t) => (
                              <span key={t} className="tag tag-default tag-permanent">{t}</span>
                            ))}
                          </div>
                        </a>
                        <div className="mxd-blog-preview__data">
                          <a className="anim-uni-in-up" href="#contact" dangerouslySetInnerHTML={{ __html: post.title }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div id="contact" className="mxd-section overflow-hidden">
          <div className="mxd-container">
            <div className="mxd-block">
              <div className="mxd-promo">
                <div className="mxd-promo__inner anim-zoom-out-container">
                  <div className="mxd-promo__bg"></div>
                  <div className="mxd-promo__content">
                    <p className="mxd-promo__title anim-uni-in-up">
                      <span className="mxd-promo__icon">
                        <img src="/rayo-img/icons/60x60_obj-btn-02.svg" alt="CodeCraftt" />
                      </span>
                      <span className="mxd-promo__caption reveal-type">
                        {es ? "¡Hablemos de tu proyecto!" : "Let's talk about your project!"}
                      </span>
                    </p>
                    <div className="mxd-promo__controls anim-uni-in-up">
                      <a
                        className="btn btn-anim btn-default btn-large btn-additional slide-right-up"
                        href="mailto:hello@codecraftt.com"
                      >
                        <span className="btn-caption">{es ? "Escríbenos" : "Contact Us"}</span>
                        <i className="ph-bold ph-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="mxd-promo__images">
                    <img className="promo-image promo-image-1" src="/rayo-img/demo/screens/04.webp" alt="CodeCraftt project" />
                    <img className="promo-image promo-image-2" src="/rayo-img/demo/screens/06.webp" alt="CodeCraftt project" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>

      {/* ════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════ */}
      <footer id="mxd-footer" className="mxd-footer">

        <div className="mxd-footer__text-wrap">
          <div className="fullwidth-text__tl-trigger"></div>
          <div className="mxd-footer__fullwidth-text anim-top-to-bottom"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)", fontWeight: 900, letterSpacing: "-0.04em", padding: "40px 0", opacity: 0.08 }}>
            CODECRAFTT
          </div>
        </div>

        <div className="mxd-footer__footer-blocks">
          <div className="footer-blocks__column animate-card-3">
            <div className="footer-blocks__card fullheight-card">
              <div className="footer-blocks__nav">
                <ul className="footer-nav">
                  {[
                    { label: es ? "Inicio" : "Home", href: "#hero" },
                    { label: es ? "Servicios" : "Services", href: "#services" },
                    { label: es ? "Capacidades" : "Capabilities", href: "#capabilities" },
                    { label: es ? "Clientes" : "Clients", href: "#clients" },
                    { label: es ? "Contacto" : "Contact", href: "#contact" },
                  ].map((link) => (
                    <li key={link.href} className="footer-nav__item anim-uni-in-up">
                      <a href={link.href} className="footer-nav__link btn-anim">
                        <span className="btn-caption">{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="footer-blocks__links anim-uni-in-up">
                <a className="btn btn-line-xsmall btn-muted slide-right anim-no-delay" href="#0">
                  <span className="btn-caption">{es ? "Política de Privacidad" : "Privacy Policy"}</span>
                  <i className="ph ph-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-blocks__column animate-card-3">
            <div className="footer-blocks__card">
              <p className="mxd-point-subtitle anim-uni-in-up">
                <ArrowSVG />
                <a href="mailto:hello@codecraftt.com">hello@codecraftt.com</a>
              </p>
            </div>
            <div className="footer-blocks__card fill-card notify">
              <div className="footer-blocks__title anim-uni-in-up">
                <p className="footer-blocks__title-m">
                  {es ? "Suscríbete a nuestras novedades:" : "Subscribe to our insights:"}
                </p>
              </div>
              <div className="form-container anim-uni-in-up">
                <form className="form notify-form form-light">
                  <input type="email" placeholder={es ? "Tu Email" : "Your Email"} required />
                  <button className="btn btn-form btn-absolute-right btn-muted slide-right-up anim-no-delay" type="submit" aria-label="Submit">
                    <i className="ph ph-arrow-up-right"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="footer-blocks__column animate-card-3">
            <div className="footer-blocks__card fullheight-card">
              <div className="footer-blocks__block">
                <div className="footer-blocks__title anim-uni-in-up">
                  <p className="footer-blocks__title-l">{es ? "Ecosistema" : "Ecosystem"}</p>
                </div>
                <div className="footer-blocks__socials">
                  <ul className="footer-socials">
                    <li className="footer-socials__item anim-uni-in-up">
                      <a href="https://github.com/codecraftt" className="footer-socials__link" target="_blank" rel="noreferrer">Github</a>
                    </li>
                    <li className="footer-socials__item anim-uni-in-up">
                      <a href="https://linkedin.com/company/codecraftt" className="footer-socials__link" target="_blank" rel="noreferrer">LinkedIn</a>
                    </li>
                    <li className="footer-socials__item anim-uni-in-up">
                      <a href="https://instagram.com/codecraftt" className="footer-socials__link" target="_blank" rel="noreferrer">Instagram</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-blocks__links anim-uni-in-up">
                <p className="t-xsmall t-muted">
                  CodeCraftt <i className="ph-bold ph-copyright"></i> 2025
                </p>
              </div>
            </div>
          </div>
        </div>

      </footer>

      {/* To-top button */}
      <a href="#0" id="to-top" className="btn btn-round btn-to-top slide-up anim-no-delay">
        <i className="ph ph-arrow-up"></i>
      </a>
    </>
  );
}
