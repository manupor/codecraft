import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/components/SessionProvider";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.codecraftt.com"),
  title: {
    default: "CodeCraftt — Web Design & Branding Studio | Costa Rica",
    template: "%s | CodeCraftt",
  },
  description:
    "CodeCraftt is a web design and branding studio based in Costa Rica. We craft brand identities and build high-converting custom websites for startups and businesses across the US, Mexico, and Latin America.",
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
    icon: "/codecraftt-logo.png",
    shortcut: "/codecraftt-logo.png",
    apple: "/codecraftt-logo.png",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CodeCraftt",
  url: "https://www.codecraftt.com",
  logo: "https://www.codecraftt.com/codecraftt-logo.png",
  description: "Web design and branding studio specializing in brand identity, logo design, and high-converting custom websites.",
  address: { "@type": "PostalAddress", addressLocality: "Curridabat", addressRegion: "San José", addressCountry: "CR" },
  contactPoint: { "@type": "ContactPoint", contactType: "sales", email: "hello@codecraftt.com", telephone: "+50683442522", availableLanguage: ["English", "Spanish"] },
  sameAs: ["https://github.com/codecraftt", "https://linkedin.com/company/codecraftt", "https://instagram.com/codecraftt"],
  founder: { "@type": "Person", name: "Manuel Portuguez", jobTitle: "Brand & Web Designer" },
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <SessionProvider>{children}</SessionProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
