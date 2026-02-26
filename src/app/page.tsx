import NavMenuWrapper from "@/components/NavMenuWrapper";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import About from "@/components/About";
import Services from "@/components/Services";
import Authority from "@/components/Authority";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <GlobalBackground />
      <div className="relative z-10">
      <NavMenuWrapper />
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <Authority />
      <CTA />
      <Footer />
      </div>
    </main>
  );
}
