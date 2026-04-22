import priceList from "@/assets/price-list.jpg";
import bayNight from "@/assets/bay-night.webp";
import exterior from "@/assets/exterior.webp";
import signage from "@/assets/signage.webp";
import logo from "@/assets/logo.jpeg";
import heroBg from "@/assets/hero-foam-bmw.jpg";

const items = [
  { src: heroBg, alt: "Purple BMW receiving foam wash at RamosMAX", span: "md:col-span-2 md:row-span-2" },
  { src: bayNight, alt: "Detailing bay with multiple cars at night" },
  { src: exterior, alt: "RamosMAX exterior at AHA Liquor Mart" },
  { src: signage, alt: "RamosMAX premium car wash & detailing signage" },
  { src: logo, alt: "RamosMAX Automotive Care logo" },
  { src: priceList, alt: "RamosMAX price list", span: "md:col-span-2" },
];

export const Gallery = () => {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-surface/30">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Gallery</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Inside the <span className="gradient-gold-text italic">Studio</span>
          </h2>
          <p className="text-muted-foreground">
            A glimpse of our facility, our team in action and the standard we deliver every day.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl gold-border bg-card ${it.span ?? ""}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-transparent opacity-60 group-hover:opacity-90 transition-smooth" />
              <div className="absolute bottom-3 left-4 right-4 text-xs text-foreground/90 font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-smooth">
                {it.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
