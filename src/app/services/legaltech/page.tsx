import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Legaltech · Diseño web para despachos jurídicos en Costa Rica – Codecraftt",
  description:
    "Codecraftt diseña sitios web, portales y herramientas digitales para despachos jurídicos en Costa Rica. Proyectos entregados en 2 semanas, desde $900 USD. Captación de clientes, imagen profesional y automatizaciones legales.",
  alternates: { canonical: "https://www.codecraftt.com/services/legaltech" },
  openGraph: {
    title: "Legaltech · Diseño web para despachos jurídicos en Costa Rica – Codecraftt",
    description:
      "Sitios web profesionales, branding y herramientas digitales para firmas y despachos jurídicos en Costa Rica y América Latina. Diseñados para captar clientes y proyectar confianza.",
    url: "https://www.codecraftt.com/services/legaltech",
    siteName: "CodeCraftt",
    type: "website",
  },
};

const capabilities = [
  ["Sitio web para despacho", "Diseño a medida que refleja tu especialidad, genera confianza y convierte visitas en consultas."],
  ["Identidad visual legal", "Logotipo, paleta, tipografía y guía de marca coherente con el posicionamiento del despacho."],
  ["Portal de clientes", "Área privada donde tus clientes acceden a documentos, firman y comunican avances sin llamadas."],
  ["Formularios de intake", "Captura datos del caso antes de la primera reunión. Menos tiempo perdido, consultas más calificadas."],
  ["Automatizaciones legales", "Flujos de n8n o Make que actualizan casos, envían recordatorios y ahorran horas semanales."],
  ["SEO y visibilidad en IA", "Estructura semántica optimizada para Google y para motores de IA como ChatGPT o Perplexity."],
];

const useCases = [
  { title: "Firma de familia y sucesiones", desc: "Sitio que explica servicios, capta leads con formulario de intake y agenda primera cita automáticamente." },
  { title: "Despacho corporativo y M&A", desc: "Presencia que comunica expertise en fusiones y adquisiciones, con sección de equipo y casos destacados." },
  { title: "Bufete de migración", desc: "Múltiples idiomas, portal de documentos y sistema de seguimiento de trámites para clientes en el exterior." },
  { title: "Notaría y registro", desc: "Agenda en línea, portal de firma electrónica y automatización de recordatorios de citas y vencimientos." },
];

const process = [
  { num: "01", title: "Sesión de diagnóstico", desc: "Entendemos tu despacho, tus servicios reales y qué tipo de cliente quieres captar. 45 minutos, sin costo." },
  { num: "02", title: "Propuesta y arquitectura", desc: "Te enviamos estructura de páginas, propuesta visual y presupuesto desglosado en 48 horas." },
  { num: "03", title: "Diseño y contenido", desc: "Diseñamos en Figma con tu retroalimentación directa. Sin rondas infinitas: máximo 2 revisiones por sección." },
  { num: "04", title: "Desarrollo y entrega", desc: "Construimos en Next.js, probamos en dispositivos reales y entregamos con capacitación y documentación." },
];

const tiers = [
  {
    name: "Presencia esencial",
    price: "Desde $900 USD",
    ideal: "Despachos que necesitan salir del limbo digital con urgencia.",
    includes: ["Hasta 5 secciones", "Formulario de contacto", "SEO técnico básico", "Entrega en 10 días hábiles"],
  },
  {
    name: "Despacho profesional",
    price: "Desde $1,800 USD",
    ideal: "Firmas que quieren diferenciarse y captar consultas calificadas.",
    includes: ["Diseño a medida + branding", "Formulario de intake", "Blog o casos de éxito", "Integración de agenda online", "SEO + estructura para IA"],
    highlight: true,
  },
  {
    name: "Sistema legal completo",
    price: "Desde $3,200 USD",
    ideal: "Firmas que quieren un ecosistema digital que ahorre tiempo real.",
    includes: ["Todo lo anterior", "Portal de clientes privado", "Automatizaciones de casos", "Firma electrónica básica", "Soporte técnico 3 meses"],
  },
];

const faqs = [
  {
    question: "¿Cuánto tiempo tarda en estar listo el sitio de mi despacho?",
    answer:
      "Un sitio esencial lo entregamos en 10 días hábiles. Proyectos con portal de clientes o automatizaciones toman entre 3 y 6 semanas dependiendo de la complejidad y la velocidad de retroalimentación del despacho.",
  },
  {
    question: "¿Trabajan solo con despachos en Costa Rica?",
    answer:
      "No. Tenemos clientes en Costa Rica, Estados Unidos, México y otros países de América Latina. Trabajamos 100% remoto con reuniones por videollamada y entregables documentados.",
  },
  {
    question: "¿Qué diferencia a Codecraftt de otras agencias web?",
    answer:
      "Conocemos el sector legal: entendemos la terminología, la forma en que los clientes buscan abogados y qué genera confianza en ese contexto. No usamos plantillas genéricas. Cada proyecto parte de cero basado en tu despacho y tus objetivos reales.",
  },
  {
    question: "¿Puedo agregar un portal de clientes después del lanzamiento inicial?",
    answer:
      "Sí. Diseñamos los proyectos con arquitectura modular para que puedas escalar. El portal, las automatizaciones o el área de firma electrónica se pueden agregar como fase 2 sin rehacer el sitio desde cero.",
  },
  {
    question: "¿Qué es un formulario de intake y por qué me conviene?",
    answer:
      "Es un formulario inteligente que captura información clave del caso antes de la primera consulta: tipo de problema, datos del cliente, documentos adjuntos. Llega a tu primera reunión ya preparado, con clientes más calificados y menos tiempo perdido en llamadas exploratorias.",
  },
  {
    question: "¿Ofrecen mantenimiento y soporte después de entregar el sitio?",
    answer:
      "Sí. Ofrecemos soporte técnico mensual opcional. El plan Esencial incluye 30 días de correcciones gratuitas post-lanzamiento. Los planes superiores incluyen soporte extendido. También capacitamos a tu equipo para que puedas actualizar contenidos básicos sin depender de nosotros.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Diseño web y legaltech para despachos jurídicos",
  provider: {
    "@type": "Organization",
    name: "Codecraftt",
    url: "https://www.codecraftt.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Curridabat",
      addressRegion: "San José",
      addressCountry: "CR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+506-8344-2522",
      email: "hello@codecraftt.com",
      contactType: "customer service",
    },
  },
  areaServed: ["Costa Rica", "United States", "Latin America"],
  description:
    "Diseño web profesional, branding, portales de clientes y automatizaciones para despachos jurídicos en Costa Rica y América Latina.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "900",
    highPrice: "5000",
    offerCount: "3",
  },
};

export default function LegaltechPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <main className="min-h-screen bg-[#090a0c] text-[#efece7]">
        <div className="mx-auto max-w-4xl px-6 py-20 space-y-24">

          {/* HERO */}
          <section className="space-y-6">
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-[#8b5cf6]">
              Servicios · Legaltech
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight max-w-3xl">
              Diseño web y herramientas digitales para despachos jurídicos en Costa Rica
            </h1>
            <p className="text-lg text-[#9ca3af] leading-relaxed max-w-2xl">
              Tu despacho merece una presencia digital que transmita confianza desde el primer clic.
              Diseñamos sitios web, portales de clientes y automatizaciones legales que reducen
              la fricción administrativa y atraen consultas calificadas.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center px-6 py-3 rounded-md bg-[#8b5cf6] text-white text-sm font-medium hover:bg-[#7c3aed] transition-colors"
              >
                Agendar consulta gratuita
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center px-6 py-3 rounded-md border border-[#ffffff15] text-[#9ca3af] text-sm font-medium hover:border-[#8b5cf6] hover:text-[#efece7] transition-colors"
              >
                Ver todos los servicios
              </Link>
            </div>
          </section>

          {/* QUÉ HACEMOS */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Qué hacemos por tu despacho</h2>
            <p className="text-[#9ca3af] leading-relaxed">
              No somos una agencia genérica. Combinamos conocimiento del sector legal con diseño de
              producto y desarrollo de software para entregar soluciones que tienen sentido en el
              contexto de un despacho real: equipos pequeños, clientes exigentes, procesos regulados.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {capabilities.map(([title, desc]) => (
                <div
                  key={title}
                  className="p-5 rounded-lg border border-[#ffffff0d] bg-[#ffffff05] space-y-1.5"
                >
                  <p className="font-medium text-sm text-[#efece7]">{title}</p>
                  <p className="text-sm text-[#9ca3af] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CASOS DE USO */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Casos de uso frecuentes</h2>
            <p className="text-[#9ca3af] leading-relaxed">
              Cada despacho es diferente. Estos son los escenarios más comunes en los que trabajamos.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {useCases.map(({ title, desc }) => (
                <div
                  key={title}
                  className="p-5 rounded-lg border border-[#ffffff0d] bg-[#ffffff05] space-y-2"
                >
                  <p className="font-semibold text-sm text-[#efece7]">{title}</p>
                  <p className="text-sm text-[#9ca3af] leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PROCESO */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Cómo trabajamos</h2>
            <div className="space-y-0 divide-y divide-white/[0.06]">
              {process.map(({ num, title, desc }) => (
                <div key={num} className="flex gap-5 py-6 first:pt-0 last:pb-0">
                  <span className="text-xl font-bold text-[#8b5cf6]/30 shrink-0 w-8 tabular-nums pt-0.5">{num}</span>
                  <div>
                    <p className="font-semibold text-sm text-[#efece7] mb-1">{title}</p>
                    <p className="text-sm text-[#9ca3af] leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PRECIOS */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Inversión</h2>
            <p className="text-[#9ca3af]">
              Precios orientativos. Cada proyecto se cotiza a medida después de la sesión de diagnóstico.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {tiers.map(({ name, price, ideal, includes, highlight }) => (
                <div
                  key={name}
                  className={`p-5 rounded-lg border space-y-4 ${
                    highlight
                      ? "border-[#8b5cf6]/50 bg-[#8b5cf6]/[0.06]"
                      : "border-[#ffffff0d] bg-[#ffffff05]"
                  }`}
                >
                  {highlight && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#8b5cf6] bg-[#8b5cf6]/10 px-2 py-0.5 rounded-sm">
                      Más popular
                    </span>
                  )}
                  <div>
                    <p className="font-semibold text-sm text-[#efece7]">{name}</p>
                    <p className="text-[#8b5cf6] font-mono text-sm mt-1">{price}</p>
                  </div>
                  <p className="text-xs text-[#9ca3af] leading-relaxed">{ideal}</p>
                  <ul className="space-y-1.5">
                    {includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-[#9ca3af]">
                        <span className="mt-1 w-1 h-1 rounded-full bg-[#8b5cf6]/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="space-y-5">
            <h2 className="text-2xl font-semibold">
              Preguntas frecuentes sobre legaltech y diseño web para despachos
            </h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border border-[#ffffff0d] rounded-lg"
                >
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-sm text-[#efece7] list-none">
                    {faq.question}
                    <span className="ml-4 shrink-0 text-[#8b5cf6] group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <p className="px-4 pb-4 text-sm text-[#9ca3af] leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="space-y-5 text-center py-8 border-t border-white/[0.05]">
            <h2 className="text-2xl font-semibold">¿Hablamos de tu despacho?</h2>
            <p className="text-[#9ca3af] max-w-md mx-auto leading-relaxed">
              La sesión inicial es gratuita y sin compromiso. Analizamos tu situación actual,
              tus objetivos y te proponemos un plan concreto con presupuesto claro.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center px-8 py-3 rounded-md bg-[#8b5cf6] text-white text-sm font-medium hover:bg-[#7c3aed] transition-colors"
              >
                Agendar consulta gratuita
              </Link>
              <a
                href="mailto:hello@codecraftt.com"
                className="inline-flex items-center px-8 py-3 rounded-md border border-[#ffffff15] text-[#9ca3af] text-sm font-medium hover:border-[#8b5cf6] hover:text-[#efece7] transition-colors"
              >
                hello@codecraftt.com
              </a>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}
