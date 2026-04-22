import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { BookingSection } from "@/components/BookingSection";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Footer } from "@/components/Footer";
import { CarSize } from "@/data/services";

const Index = () => {
  const [carSize, setCarSize] = useState<CarSize>("small");

  useEffect(() => {
    document.title = "RamosMAX Automotive Care | Premium Car Wash & Detailing Kampala";
    const meta = document.querySelector('meta[name="description"]') ?? (() => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute(
      "content",
      "Premium car wash, ceramic coating, polishing & full detailing in Kampala. Where your car gets a royal treatment. Book via WhatsApp. Open daily 8 AM – 10 PM at Kisasi Bukoto Rd."
    );
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection carSize={carSize} setCarSize={setCarSize} />
        <BookingSection carSize={carSize} setCarSize={setCarSize} />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
