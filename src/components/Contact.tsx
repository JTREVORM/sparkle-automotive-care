import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER, PHONE_DISPLAY } from "@/data/services";

export const Contact = () => {
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello RamosMAX, I'd like to enquire about your services.")}`;

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Visit or <span className="gradient-gold-text italic">Call Us</span>
          </h2>
          <p className="text-muted-foreground">
            Find us on Kisasi Bukoto Road. Open every day, 8 AM – 10 PM.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Info cards */}
          <div className="lg:col-span-2 space-y-4">
            <InfoCard icon={<MapPin />} title="Location" lines={["Kisasi Bukoto Rd", "Kampala, Uganda"]} />
            <InfoCard icon={<Clock />} title="Hours" lines={["Open Daily", "8:00 AM – 10:00 PM"]} />
            <a href={`tel:+${WHATSAPP_NUMBER}`} className="block">
              <InfoCard icon={<Phone />} title="Call" lines={[PHONE_DISPLAY, "Tap to call"]} highlight />
            </a>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="block">
              <InfoCard icon={<MessageCircle />} title="WhatsApp" lines={[PHONE_DISPLAY, "Chat with us instantly"]} highlight />
            </a>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl overflow-hidden gold-border shadow-elegant h-full min-h-[420px]">
              <iframe
                title="RamosMAX location on Kisasi Bukoto Rd, Kampala"
                src="https://www.google.com/maps?q=Kisasi+Bukoto+Road,+Kampala,+Uganda&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 420, filter: "invert(0.9) hue-rotate(180deg) saturate(0.8)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoCard = ({
  icon,
  title,
  lines,
  highlight,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  highlight?: boolean;
}) => (
  <div
    className={`flex items-start gap-4 p-5 rounded-2xl bg-gradient-card border transition-smooth hover-lift ${
      highlight ? "border-gold/50 hover:shadow-gold" : "border-border"
    }`}
  >
    <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-gold flex items-center justify-center text-gold-foreground shadow-gold">
      {icon}
    </div>
    <div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{title}</div>
      <div className="font-semibold text-foreground">{lines[0]}</div>
      <div className="text-sm text-muted-foreground">{lines[1]}</div>
    </div>
  </div>
);
