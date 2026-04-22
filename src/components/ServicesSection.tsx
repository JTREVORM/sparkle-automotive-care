import { Check, Car, Truck } from "lucide-react";
import { CarSize, Service, SERVICES, formatUGX } from "@/data/services";

interface Props {
  carSize: CarSize;
  setCarSize: (s: CarSize) => void;
  selected: Set<string>;
  toggle: (id: string) => void;
  total: number;
}

export const ServicesSection = ({ carSize, setCarSize, selected, toggle, total }: Props) => {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Services</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Choose Your <span className="gradient-gold-text italic">Detail</span>
          </h2>
          <p className="text-muted-foreground">
            Select services and your car size — your total updates instantly. Continue to booking when ready.
          </p>
        </div>

        {/* Car size toggle */}
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

        {/* Service grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.id}
              service={s}
              size={carSize}
              isSelected={selected.has(s.id)}
              onToggle={() => toggle(s.id)}
            />
          ))}
        </div>

        {/* Total bar */}
        <div className="sticky bottom-4 z-30">
          <div className="glass gold-border rounded-2xl p-5 md:p-6 shadow-elegant flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                {selected.size} service{selected.size === 1 ? "" : "s"} · {carSize === "small" ? "Small Car" : "Big Car"}
              </div>
              <div className="font-display text-3xl md:text-4xl font-bold">
                <span className="gradient-gold-text">UGX {formatUGX(total)}</span>
              </div>
            </div>
            <a
              href="#booking"
              className={`px-8 py-3.5 rounded-full font-semibold transition-bounce ${
                selected.size > 0
                  ? "bg-gradient-gold text-gold-foreground shadow-gold hover:scale-105"
                  : "glass gold-border text-foreground/60 cursor-not-allowed"
              }`}
              onClick={(e) => selected.size === 0 && e.preventDefault()}
            >
              Continue to Booking →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({
  service,
  size,
  isSelected,
  onToggle,
}: {
  service: Service;
  size: CarSize;
  isSelected: boolean;
  onToggle: () => void;
}) => {
  const price = size === "small" ? service.small : service.big;
  const altPrice = size === "small" ? service.big : service.small;

  return (
    <button
      onClick={onToggle}
      className={`group relative text-left p-6 rounded-2xl transition-smooth hover-lift overflow-hidden ${
        isSelected
          ? "bg-gradient-card gold-border shadow-gold ring-2 ring-gold/60"
          : "bg-gradient-card border border-border hover:border-gold/40"
      }`}
    >
      {isSelected && (
        <div className="absolute top-4 right-4 h-7 w-7 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
          <Check className="h-4 w-4 text-gold-foreground" strokeWidth={3} />
        </div>
      )}

      <div className="pr-10">
        <h3 className="font-display text-xl font-semibold text-foreground mb-3 leading-tight">
          {service.name}
        </h3>

        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-2xl font-bold gradient-gold-text">UGX {formatUGX(price)}</span>
        </div>
        <div className="text-xs text-muted-foreground">
          {size === "small" ? "Small" : "Big"} car · ({size === "small" ? "Big" : "Small"}: {formatUGX(altPrice)})
        </div>
      </div>

      <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </button>
  );
};
