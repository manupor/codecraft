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
    default: "CodeCraftt — Custom Software Development & AI Solutions | Costa Rica",
    template: "%s | CodeCraftt",
  },
  description:
    "CodeCraftt is a premium software development studio based in Costa Rica. We build SaaS platforms, AI-powered apps, mobile applications, and high-performance websites for startups and businesses in the US, Mexico, and Latin America.",
  keywords: [
    "software development company Costa Rica",
    "custom software development",
    "SaaS development company",
    "AI solutions company",
    "mobile app development company",
    "web development company",
    "nearshore software development",
    "React Native development",
    "Next.js development agency",
    "landing page development",
    "startup software development",
    "AI automation company",
    "custom web applications",
    "software company Latin America",
    "AI software agency",
    "SaaS developers",
    "website development services",
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
    title: "CodeCraftt — Custom Software Development & AI Solutions",
    description:
      "Premium software development studio in Costa Rica. SaaS platforms, AI solutions, mobile apps, and high-converting websites for startups and businesses worldwide.",
    siteName: "CodeCraftt",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "CodeCraftt" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeCraftt — Custom Software Development & AI Solutions",
    description: "Premium software development studio in Costa Rica.",
    images: ["/og-image.png"],
    creator: "@codecraftt",
  },
  alternates: { canonical: "https://www.codecraftt.com" },
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
  description: "Premium software development studio specializing in SaaS platforms, AI solutions, mobile apps, and high-performance websites.",
  address: { "@type": "PostalAddress", addressLocality: "Curridabat", addressRegion: "San José", addressCountry: "CR" },
  contactPoint: { "@type": "ContactPoint", contactType: "sales", email: "hello@codecraftt.com", telephone: "+50683442522", availableLanguage: ["English", "Spanish"] },
  sameAs: ["https://github.com/codecraftt", "https://linkedin.com/company/codecraftt", "https://instagram.com/codecraftt"],
  founder: { "@type": "Person", name: "Manuel Portuguez", jobTitle: "Sr. Full Stack Developer & Visual Designer" },
};

const localSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CodeCraftt",
  description: "Custom software development, AI solutions, and SaaS platform development studio in Costa Rica serving clients in the US and Latin America.",
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
