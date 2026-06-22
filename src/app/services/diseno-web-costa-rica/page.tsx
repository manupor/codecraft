import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diseño web profesional en Costa Rica – Codecraftt",
  description:
    "Sitios web profesionales para despachos jurídicos y pymes en Costa Rica. Diseño claro, orientado a captar clientes, con SEO e integración para herramientas de IA.",
  alternates: { canonical: "https://www.codecraftt.com/services/diseno-web-costa-rica" },
  openGraph: {
    title: "Diseño web profesional en Costa Rica – Codecraftt",
    description:
      "Diseñamos y desarrollamos sitios web para despachos jurídicos, pymes y empresas de servicios en Costa Rica y América Latina.",
    url: "https://www.codecraftt.com/services/diseno-web-costa-rica",
    siteName: "CodeCraftt",
  },
};

const faqs = [
  {
    question: "¿Qué agencia diseña sitios web para despachos jurídicos en Costa Rica?",
    answer:
      "Codecraftt diseña sitios web profesionales para despachos jurídicos en Costa Rica. Nos enfocamos en captar clientes potenciales, simplificar la comunicación con clientes actuales y proyectar una imagen clara y confiable del bufete.",
  },
  {
    question: "¿Cuánto cuesta un sitio web profesional en Costa Rica?",
    answer:
      "Un sitio web profesional básico para un despacho o pyme en Costa Rica suele empezar alrededor de $900–$1,500 USD, dependiendo del número de secciones, integraciones y del contenido. Proyectos con automatizaciones, portales de clientes o integraciones específicas pueden superar los $2,000 USD.",
  },
  {
    question: "¿Trabajan solo con despachos jurídicos en Costa Rica?",
    answer:
      "No. Aunque tenemos mucha experiencia con despachos jurídicos, también trabajamos con pymes de servicios profesionales como consultoras, contadores, agencias creativas y negocios B2B que necesitan un sitio web claro y orientado a resultados.",
  },
  {
    question: "¿Puedo trabajar con Codecraftt si mi empresa está fuera de Costa Rica?",
    answer:
      "Sí. Trabajamos con clientes dentro y fuera de Costa Rica de forma remota. Organizamos reuniones online, definimos objetivos y entregamos el sitio con documentación y soporte para que puedas gestionarlo día a día.",
  },
  {
    question: "¿Incluyen SEO y optimización para motores de búsqueda con IA?",
    answer:
      "Sí. Además del SEO técnico básico, diseñamos el contenido y la estructura para que tu sitio sea fácil de entender y citar por herramientas de IA como ChatGPT, Claude o los resúmenes de búsqueda de Google.",
  },
  {
    question: "¿Qué necesito para empezar un proyecto de sitio web con ustedes?",
    answer:
      "Normalmente comenzamos con una reunión corta para entender tu despacho o empresa, tus servicios y tus objetivos. A partir de ahí, definimos estructura, contenidos y un presupuesto claro antes de empezar el diseño.",
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
  name: "Diseño web profesional en Costa Rica",
  provider: {
    "@type": "Organization",
    name: "Codecraftt",
    url: "https://www.codecraftt.com",
  },
  areaServed: ["Costa Rica", "United States", "Latin America"],
  description:
    "Diseño y desarrollo de sitios web profesionales para despachos jurídicos, pymes y empresas de servicios en Costa Rica. Incluye identidad de marca, SEO técnico y optimización para motores de IA.",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    priceRange: "$900 - $3000+",
  },
};

export default function DisenoWebCostaRicaPage() {
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
        <div className="mx-auto max-w-4xl px-6 py-20 space-y-20">

          {/* HERO */}
          <section className="space-y-6">
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-[#8b5cf6]">
              Diseño web · Costa Rica
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Diseño web profesional en Costa Rica para despachos jurídicos y pymes
            </h1>
            <p className="text-lg text-[#9ca3af] leading-relaxed max-w-2xl">
              Diseñamos sitios web claros, rápidos y orientados a resultados para despachos
              de abogados y empresas de servicios en Costa Rica. Combinamos diseño, contenido
              y tecnología para que tu web no solo se vea bien, sino que atraiga clientes y
              ahorre tiempo a tu equipo.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center px-6 py-3 rounded-md bg-[#8b5cf6] text-white text-sm font-medium hover:bg-[#7c3aed] transition-colors"
              >
                Agendar una llamada
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center px-6 py-3 rounded-md border border-[#ffffff15] text-[#9ca3af] text-sm font-medium hover:border-[#8b5cf6] hover:text-[#efece7] transition-colors"
              >
                Ver todos los servicios
              </Link>
            </div>
          </section>

          {/* PARA QUIÉN ES */}
          <section className="space-y-5">
            <h2 className="text-2xl font-semibold">
              Pensado para despachos jurídicos y pymes de servicios
            </h2>
            <p className="text-[#9ca3af] leading-relaxed">
              Este servicio es ideal si necesitas algo más que una plantilla genérica.
              Nos enfocamos en negocios donde la confianza y la claridad importan más que nunca.
            </p>
            <ul className="space-y-3">
              {[
                "Despachos de abogados que quieren digitalizar su captación de clientes.",
                "Pymes de servicios profesionales que necesitan explicar bien qué hacen.",
                "Empresas que ofrecen servicios complejos y requieren formularios, agendas o automatizaciones.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[#9ca3af]">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#8b5cf6] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* QUÉ INCLUYE */}
          <section className="space-y-5">
            <h2 className="text-2xl font-semibold">Qué incluye tu nuevo sitio</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                ["Arquitectura de contenido", "Estructurada para tus servicios reales, no para una plantilla genérica."],
                ["Diseño visual a medida", "Alineado con tu marca y con el tipo de cliente que quieres atraer."],
                ["Desarrollo en Next.js", "Con buenas prácticas de performance, SEO técnico y tiempos de carga rápidos."],
                ["Formularios inteligentes", "Intake de clientes, agendas o formularios de contacto personalizados."],
                ["Integraciones", "Con herramientas que ya usas: calendarios, CRM, email marketing, etc."],
                ["Optimización para IA", "Contenido estructurado para que ChatGPT, Claude y Google puedan citar tu sitio."],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="p-5 rounded-lg border border-[#ffffff0d] bg-[#ffffff05] space-y-1"
                >
                  <p className="font-medium text-sm">{title}</p>
                  <p className="text-sm text-[#9ca3af]">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PRECIOS */}
          <section className="space-y-5">
            <h2 className="text-2xl font-semibold">Precios orientativos</h2>
            <p className="text-[#9ca3af]">
              Cada proyecto se define a medida, pero estos rangos te ayudan a tener una idea antes de hablar.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  tier: "Sitio esencial",
                  price: "Desde $900 USD",
                  desc: "Ideal para un despacho o pyme que necesita una presencia sólida y clara.",
                },
                {
                  tier: "Sitio avanzado",
                  price: "Desde $1,500 USD",
                  desc: "Más secciones, casos de éxito, integraciones básicas y pequeñas automatizaciones.",
                },
                {
                  tier: "Con automatización",
                  price: "Desde $2,000 USD",
                  desc: "Formularios inteligentes, portales de clientes o integraciones legales específicas.",
                },
              ].map(({ tier, price, desc }) => (
                <div
                  key={tier}
                  className="p-5 rounded-lg border border-[#ffffff0d] bg-[#ffffff05] space-y-2"
                >
                  <p className="font-semibold text-sm">{tier}</p>
                  <p className="text-[#8b5cf6] font-mono text-sm">{price}</p>
                  <p className="text-sm text-[#9ca3af]">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* EXPERIENCIA LEGALTECH */}
          <section className="space-y-4 p-6 rounded-lg border border-[#8b5cf620] bg-[#8b5cf608]">
            <h2 className="text-2xl font-semibold">Experiencia real en legaltech y SaaS</h2>
            <p className="text-[#9ca3af] leading-relaxed">
              No solo diseñamos sitios bonitos: venimos de construir productos digitales y SaaS
              para el sector legal y empresarial. Eso se nota en cómo estructuramos el contenido,
              los flujos de captación y las automatizaciones que proponemos. Con clientes como
              Amazon Web Services y proyectos en 3+ países, llevamos experiencia de nivel
              internacional a cada proyecto costarricense.
            </p>
          </section>

          {/* FAQs */}
          <section className="space-y-5">
            <h2 className="text-2xl font-semibold">
              Preguntas frecuentes sobre diseño web en Costa Rica
            </h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border border-[#ffffff0d] rounded-lg"
                >
                  <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-sm list-none">
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
          <section className="space-y-4 text-center py-8">
            <h2 className="text-2xl font-semibold">¿Hablamos de tu proyecto?</h2>
            <p className="text-[#9ca3af] max-w-md mx-auto">
              Cuéntanos qué tipo de sitio necesitas y qué objetivos tienes. Te proponemos
              una estructura clara, un plan y un presupuesto sin compromiso.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center px-8 py-3 rounded-md bg-[#8b5cf6] text-white text-sm font-medium hover:bg-[#7c3aed] transition-colors"
            >
              Agendar una llamada
            </Link>
          </section>

        </div>
      </main>
    </>
  );
}
