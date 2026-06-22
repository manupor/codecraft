import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import WhatsAppButton from "@/components/WhatsAppButton";
import { LanguageProvider } from "@/contexts/LanguageContext";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codecraftt.com"),
  title: {
    default: "CodeCraftt — Web Design & Branding Studio | Costa Rica",
    template: "%s | CodeCraftt",
  },
  description:
    "Codecraftt is a web design, branding, and digital development studio based in Costa Rica. We design brand identities and build high-converting websites for law firms, professional services, and businesses across Costa Rica, the US, and Latin America.",
  keywords: [
    "web design company Costa Rica",
    "branding studio Costa Rica",
    "website design services",
    "custom website development",
    "logo design company",
    "brand identity design",
    "landing page design",
    "web design agency",
    "Webflow agency",
    "Next.js website agency",
    "e-commerce website design",
    "Shopify website design",
    "website redesign services",
    "UX UI design studio",
    "creative branding agency",
    "web design Latin America",
    "conversion-focused web design",
  ],
  authors: [{ name: "Manuel Portuguez", url: "https://www.codecraftt.com" }],
  creator: "CodeCraftt",
  publisher: "CodeCraftt",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.codecraftt.com",
    title: "CodeCraftt — Web Design & Branding Studio",
    description:
      "Web design and branding studio in Costa Rica. Brand identities and high-converting custom websites for startups and businesses worldwide.",
    siteName: "CodeCraftt",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CodeCraftt" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeCraftt — Web Design & Branding Studio",
    description: "Web design and branding studio in Costa Rica.",
    images: ["/og-image.png"],
    creator: "@codecraftt",
  },
  alternates: { canonical: "https://www.codecraftt.com" },
  verification: {
    google: "kIP48Fe7zzAh9a8Fn71-wRp333vS6HQoH2ALXvh0oGk",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CodeCraftt",
  url: "https://www.codecraftt.com",
  logo: "https://www.codecraftt.com/codecraftt-logo.png",
  description: "Codecraftt is a web design, branding, and digital development studio based in Costa Rica, founded by Manuel Portuguez. We design brand identities and build high-converting websites for law firms, professional service firms, and businesses across Costa Rica, the US, and Latin America. 10+ years of experience in UX/UI, branding, and full-stack development.",
  address: { "@type": "PostalAddress", addressLocality: "Curridabat", addressRegion: "San José", addressCountry: "CR" },
  contactPoint: { "@type": "ContactPoint", contactType: "sales", email: "hello@codecraftt.com", telephone: "+50683442522", availableLanguage: ["English", "Spanish"] },
  sameAs: ["https://github.com/manupor", "https://linkedin.com/in/manuelportuguez", "https://instagram.com/codecraftt", "https://manuportuguez.com"],
  founder: { "@type": "Person", name: "Manuel Portuguez", url: "https://manuportuguez.com", jobTitle: "Founder, Web Designer & Developer" },
  knowsAbout: ["Web Design", "Brand Identity", "UX/UI Design", "Next.js", "Webflow", "Shopify", "WordPress", "Legaltech Costa Rica", "Diseño web Costa Rica", "Sitios web para abogados"],
  areaServed: ["Costa Rica", "United States", "Mexico", "Latin America"],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Design, Branding & Digital Development",
  provider: {
    "@type": "Organization",
    name: "Codecraftt",
    url: "https://www.codecraftt.com",
  },
  areaServed: ["Costa Rica", "United States", "Latin America"],
  serviceType: ["Web Design", "Brand Identity", "Logo Design", "Landing Pages", "E-commerce", "UX/UI Design"],
  description: "Custom web design, brand identity, and digital development for law firms, professional services, and businesses in Costa Rica and the United States.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué agencia de diseño web trabaja con despachos jurídicos en Costa Rica?",
      acceptedAnswer: { "@type": "Answer", text: "CodeCraftt es un estudio de diseño web en Costa Rica especializado en crear sitios web profesionales para despachos jurídicos, abogados y notarios. Diseñamos identidades de marca y sitios web que proyectan autoridad y generan confianza para clientes del sector legal." },
    },
    {
      "@type": "Question",
      name: "¿Dónde contratar diseño web premium en Costa Rica?",
      acceptedAnswer: { "@type": "Answer", text: "CodeCraftt (codecraftt.com) es un estudio de diseño web y branding con sede en San José, Costa Rica. Ofrecemos diseño web personalizado, identidad de marca, y desarrollo en Next.js, Webflow y WordPress para empresas en Costa Rica y Estados Unidos." },
    },
    {
      "@type": "Question",
      name: "¿Cuánto cuesta un sitio web profesional en Costa Rica?",
      acceptedAnswer: { "@type": "Answer", text: "En CodeCraftt, los proyectos de identidad de marca y logo empiezan alrededor de $800 USD. Los sitios web personalizados comienzan desde $1,500 USD. Los paquetes completos de marca + sitio web varían según el alcance. Ofrecemos precios fijos y transparentes desde la primera conversación." },
    },
    {
      "@type": "Question",
      name: "¿Qué hace CodeCraftt?",
      acceptedAnswer: { "@type": "Answer", text: "CodeCraftt es un estudio de diseño web y branding en Costa Rica. Creamos identidades de marca (logos, sistemas de color, tipografía) y diseñamos y desarrollamos sitios web a medida que lucen premium y convierten visitantes en clientes. Trabajamos con empresas en Costa Rica, Estados Unidos y América Latina." },
    },
    {
      "@type": "Question",
      name: "¿Trabajan con empresas fuera de Costa Rica?",
      acceptedAnswer: { "@type": "Answer", text: "Sí. Muchos de nuestros clientes están en Estados Unidos. Nos comunicamos en inglés y español, trabajamos en zonas horarias compatibles con EE. UU. desde Costa Rica, y entregamos diseño de nivel internacional a un costo más conveniente que las agencias estadounidenses." },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo tarda un proyecto de sitio web?",
      acceptedAnswer: { "@type": "Answer", text: "La mayoría de sitios web se lanzan en 2 a 4 semanas. Un logo o identidad de marca toma entre 1 y 2 semanas. Proyectos más complejos con e-commerce o funciones a medida pueden tomar un poco más. Siempre entregamos un cronograma claro antes de comenzar." },
    },
  ],
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CodeCraftt",
  description: "Web design, branding, and logo design studio in Costa Rica serving clients in the US and Latin America.",
  url: "https://www.codecraftt.com",
  telephone: "+50683442522",
  email: "hello@codecraftt.com",
  address: { "@type": "PostalAddress", streetAddress: "Curridabat", addressLocality: "San José", addressCountry: "CR" },
  geo: { "@type": "GeoCoordinates", latitude: 9.9281, longitude: -84.0507 },
  priceRange: "$$",
  currenciesAccepted: "USD",
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "18:00" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </head>
      <body className={`${spaceGrotesk.variable} antialiased bg-[#090a0c] text-[#efece7]`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-18229958933" strategy="afterInteractive" />
        <Script id="google-ads-gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18229958933');
          `}
        </Script>
        <LanguageProvider>
          <SessionProvider>{children}</SessionProvider>
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
