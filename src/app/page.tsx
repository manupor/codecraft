import NavMenuWrapper from "@/components/NavMenuWrapper";
import GlobalBackground from "@/components/GlobalBackground";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BigStatement from "@/components/BigStatement";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <GlobalBackground />
      <div className="relative z-10">
        <NavMenuWrapper />
        <Hero />
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
