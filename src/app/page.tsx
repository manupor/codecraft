import NavMenuWrapper from "@/components/NavMenuWrapper";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import HowItWorks from "@/components/HowItWorks";
import ServicesPreview from "@/components/ServicesPreview";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import GlobalBackground from "@/components/GlobalBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <GlobalBackground />
      <div className="relative z-10">
      <NavMenuWrapper />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <ServicesPreview />
      <Testimonials />
      <FinalCTA />
      <Footer />
      </div>
    </main>
  );
}
