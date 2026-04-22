import { useEffect, useMemo, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { BookingSection } from "@/components/BookingSection";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Footer } from "@/components/Footer";
import { CarSize, SERVICES } from "@/data/services";

const Index = () => {
  const [carSize, setCarSize] = useState<CarSize>("small");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const total = useMemo(
    () =>
      SERVICES.filter((s) => selected.has(s.id)).reduce(
        (sum, s) => sum + (carSize === "small" ? s.small : s.big),
        0
      ),
    [selected, carSize]
  );

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
      "Premium car wash, ceramic coating, polishing & full detailing in Kampala. Book via WhatsApp. Open daily 8 AM – 10 PM at Kisasi Bukoto Rd."
    );
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection
          carSize={carSize}
          setCarSize={setCarSize}
          selected={selected}
          toggle={toggle}
          total={total}
        />
        <BookingSection
          carSize={carSize}
          setCarSize={setCarSize}
          selected={selected}
          total={total}
        />
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
