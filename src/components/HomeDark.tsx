import NavMenuWrapper from "./NavMenuWrapper";
import Hero from "./Hero";
import TechMarquee from "./TechMarquee";
import Services from "./Services";
import BigStatement from "./BigStatement";
import WhyUs from "./WhyUs";
import HowItWorks from "./HowItWorks";
import FAQ from "./FAQ";
import FinalCTA from "./FinalCTA";
import Footer from "./Footer";

export default function HomeDark() {
  return (
    <main className="relative min-h-screen bg-[#090a0c]">
      <div className="relative z-10">
        <NavMenuWrapper />
        <Hero />
        <TechMarquee />
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
