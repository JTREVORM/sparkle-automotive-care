import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "glass shadow-elegant py-2" : "bg-transparent py-4"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="h-11 w-11 rounded-full overflow-hidden ring-2 ring-gold/60 shadow-gold">
            <img src={logo} alt="RamosMAX Automotive Care logo" className="h-full w-full object-cover" />
          </div>
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg text-foreground">
              Ramos<span className="gradient-gold-text">MAX</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Automotive Care
            </div>
          </div>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-gold transition-smooth relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+256748020649"
            className="flex items-center gap-2 text-sm text-foreground/90 hover:text-gold transition-smooth"
          >
            <Phone className="h-4 w-4" /> 0748 020 649
          </a>
          <a
            href="#booking"
            className="px-5 py-2.5 rounded-full bg-gradient-gold text-gold-foreground text-sm font-semibold shadow-gold hover:scale-105 transition-bounce"
          >
            Book Now
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass mx-4 mt-3 rounded-2xl p-6 animate-fade-in">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-foreground/90 hover:text-gold transition-smooth"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="block text-center mt-2 px-5 py-3 rounded-full bg-gradient-gold text-gold-foreground font-semibold shadow-gold"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
