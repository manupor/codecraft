import NavMenuWrapper from "@/components/NavMenuWrapper";
import GlobalBackground from "@/components/GlobalBackground";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import BigStatement from "@/components/BigStatement";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#090a0c]">
      <GlobalBackground />
      <div className="relative z-10">
        <NavMenuWrapper />
        <Hero />
        <TechMarquee />
        <ClientLogos />
        <Services />
        <BigStatement />
        <WhyUs />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
