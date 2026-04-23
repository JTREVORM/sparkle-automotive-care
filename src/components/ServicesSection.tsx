import { Car, Truck, ArrowRight } from "lucide-react";
import { CarSize, Service, SERVICES, formatUGX } from "@/data/services";

interface Props {
  carSize: CarSize;
  setCarSize: (s: CarSize) => void;
}

export const ServicesSection = ({ carSize, setCarSize }: Props) => {
  return (
    <section id="services" className="relative py-12 md:py-16 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Services</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Premium <span className="gradient-gold-text italic">Detailing Menu</span>
          </h2>
          <p className="text-muted-foreground">
            Browse our full menu of services with transparent pricing for small and big cars.
            Ready to book? Head to the booking section and pick the service you want.
          </p>
        </div>

        {/* Car size toggle (price view) */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full glass gold-border">
            <button
              onClick={() => setCarSize("small")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-smooth ${
                carSize === "small"
                  ? "bg-gradient-gold text-gold-foreground shadow-gold"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              <Car className="h-4 w-4" /> Small Car
            </button>
            <button
              onClick={() => setCarSize("big")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-smooth ${
                carSize === "big"
                  ? "bg-gradient-gold text-gold-foreground shadow-gold"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              <Truck className="h-4 w-4" /> Big Car (SUV / Van / Pickup)
            </button>
          </div>
        </div>

        {/* Service grid (display only) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} service={s} size={carSize} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-gold text-gold-foreground font-semibold shadow-gold hover:scale-105 transition-bounce"
          >
            Book a Service <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, size }: { service: Service; size: CarSize }) => {
  const price = size === "small" ? service.small : service.big;
  const altPrice = size === "small" ? service.big : service.small;

  return (
    <div className="group relative text-left p-6 rounded-2xl bg-gradient-card border border-border hover:border-gold/40 transition-smooth hover-lift overflow-hidden">
      <h3 className="font-display text-xl font-semibold text-foreground mb-2 leading-tight">
        {service.name}
      </h3>

      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {service.description}
      </p>

      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-2xl font-bold gradient-gold-text">UGX {formatUGX(price)}</span>
      </div>
      <div className="text-xs text-muted-foreground">
        {size === "small" ? "Small" : "Big"} car · ({size === "small" ? "Big" : "Small"}: UGX {formatUGX(altPrice)})
      </div>

      <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </div>
  );
};
