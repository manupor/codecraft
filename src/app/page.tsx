import NavMenuWrapper from "@/components/NavMenuWrapper";
import GlobalBackground from "@/components/GlobalBackground";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Industries from "@/components/Industries";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <GlobalBackground />
      <div className="relative z-10">
        <NavMenuWrapper />
        <Hero />
        <Services />
        <WhyUs />
        <Industries />
        <HowItWorks />
        <FAQ />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
