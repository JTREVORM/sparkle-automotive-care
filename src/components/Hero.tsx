import { Star, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-foam-bmw.jpg";
import logo from "@/assets/logo.jpeg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Premium purple BMW receiving foam wash at RamosMAX detailing bay"
          className="h-full w-full object-cover scale-105"
          fetchPriority="high"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Floating gold orbs */}
      <div className="absolute top-1/4 -left-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-10 h-96 w-96 rounded-full bg-primary-glow/20 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="relative container text-center pt-32 pb-20">
        {/* Logo - now first */}
        <div className="flex justify-center mb-8 animate-fade-up">
          <div className="relative">
            <div className="absolute inset-0 bg-gold/30 blur-3xl rounded-full" />
            <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden ring-4 ring-gold/60 shadow-glow bg-background">
              <img src={logo} alt="RamosMAX logo" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>

        {/* Rating pill - moved below logo */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass gold-border mb-8 animate-fade-in">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
            ))}
          </div>
          <span className="text-xs font-medium text-foreground/90 tracking-wider">
            5.0 RATED · KAMPALA'S PREMIUM DETAILING
          </span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Car Wash & <span className="gradient-gold-text italic">Auto Detailing</span>
          <br /> in Kampala
        </h1>

        <p className="max-w-2xl mx-auto font-display italic text-lg md:text-2xl gradient-gold-text mb-4 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          “Where your car gets a royal treatment.”
        </p>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-foreground/75 mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Premium washing bay in Kampala offering T-cut polishing, ceramic coating,
          engine cleaning and full interior detailing on Kisasi Bukoto Road.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#booking"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-gold-foreground font-semibold shadow-gold hover:scale-105 transition-bounce"
          >
            <Sparkles className="h-5 w-5 transition-transform group-hover:rotate-12" />
            Book Now
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full glass gold-border text-foreground font-semibold hover:bg-gold/10 transition-smooth"
          >
            View Services
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.4s" }}>
          {[
            { v: "13+", l: "Premium Services" },
            { v: "8AM–10PM", l: "Open Daily" },
            { v: "5.0★", l: "Customer Rating" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-2xl md:text-3xl gradient-gold-text font-bold">{s.v}</div>
              <div className="text-xs text-muted-foreground tracking-wider uppercase mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
