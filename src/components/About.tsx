import { Award, Sparkles, Shield, Clock } from "lucide-react";

const features = [
  { icon: Award, title: "5.0 Rated", text: "Trusted by Kampala's drivers for spotless results, every visit." },
  { icon: Sparkles, title: "Premium Detail", text: "Ceramic coating, T-cut polishing & full interior restoration." },
  { icon: Shield, title: "Safe Products", text: "PH-balanced foams, microfibre care, paint-safe techniques." },
  { icon: Clock, title: "Open Daily", text: "8 AM – 10 PM, including weekends. Walk-ins welcome." },
];

export const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">About Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Trusted <span className="gradient-gold-text italic">car wash in Kampala</span> — auto detailing done right
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Located in Kisasi along Bukoto Road, RamosMAX Automotive Care is a trusted car wash
              in Kampala offering professional auto detailing in Uganda — from express hand washes
              to T-cut polishing and long-lasting ceramic coating. Our specialists combine premium
              products, refined technique and patient craftsmanship to treat every vehicle like
              their own.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you drive a sedan, an SUV, or a pickup, our washing bay in Kampala delivers a
              finish that turns heads and protects your investment — backed by transparent pricing
              and easy WhatsApp booking.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#booking" className="px-6 py-3 rounded-full bg-gradient-gold text-gold-foreground font-semibold shadow-gold hover:scale-105 transition-bounce">
                Book Your Detail
              </a>
              <a href="#contact" className="px-6 py-3 rounded-full glass gold-border text-foreground font-semibold hover:bg-gold/10 transition-smooth">
                Visit Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="bg-gradient-card gold-border rounded-2xl p-6 hover-lift"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-4 shadow-gold">
                  <f.icon className="h-6 w-6 text-gold-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
