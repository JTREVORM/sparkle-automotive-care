import logo from "@/assets/logo.jpeg";
import { MapPin, Phone, Clock, Instagram, Music } from "lucide-react";
import { PHONE_DISPLAY } from "@/data/services";

export const Footer = () => (
  <footer className="border-t border-border bg-surface/40 py-12">
    <div className="container grid md:grid-cols-3 gap-8 items-start">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-12 w-12 rounded-full overflow-hidden ring-2 ring-gold/60">
            <img src={logo} alt="RamosMAX logo" className="h-full w-full object-cover" />
          </div>
          <div>
            <div className="font-display text-lg">
              Ramos<span className="gradient-gold-text">MAX</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Automotive Care
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Premium car wash & detailing studio in Kampala. Hand-finished care for every vehicle.
        </p>
      </div>

      <div>
        <div className="text-xs uppercase tracking-wider text-gold mb-4">Visit</div>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-gold shrink-0" /> Kisasi Bukoto Rd, Kampala, Uganda</li>
          <li className="flex items-start gap-2"><Clock className="h-4 w-4 mt-0.5 text-gold shrink-0" /> Open daily 8:00 AM – 10:00 PM</li>
          <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-gold shrink-0" /> {PHONE_DISPLAY}</li>
        </ul>
      </div>

      <div>
        <div className="text-xs uppercase tracking-wider text-gold mb-4">Quick Links</div>
        <ul className="space-y-2 text-sm">
          {[
            ["Services", "#services"],
            ["Book Now", "#booking"],
            ["About", "#about"],
            ["Gallery", "#gallery"],
            ["Contact", "#contact"],
          ].map(([l, h]) => (
            <li key={l}>
              <a href={h} className="text-muted-foreground hover:text-gold transition-smooth">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="container mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} RamosMAX Automotive Care (U) Ltd. All rights reserved.
    </div>
  </footer>
);
