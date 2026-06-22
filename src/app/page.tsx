import NavMenuWrapper from "@/components/NavMenuWrapper";
import GlobalBackground from "@/components/GlobalBackground";
import { CinematicHero } from "@/components/ui/cinematic-hero";
import TechMarquee from "@/components/TechMarquee";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import BigStatement from "@/components/BigStatement";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import HomeClient from "@/components/HomeClient";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#090a0c]">
      <GlobalBackground />
      <HomeClient>
        <div className="relative z-10">
          <NavMenuWrapper />
          <CinematicHero />
          <ClientLogos />
          <Services />
          <BigStatement />
          <WhyUs />
          <HowItWorks />
          <TechMarquee />
          <FAQ />
          <Footer />
        </div>
      </HomeClient>
    </main>
  );
}
