import { MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/data/services";

export const WhatsAppFloat = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello RamosMAX, I'd like to book a service."
  )}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with RamosMAX on WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 md:h-16 md:w-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold animate-pulse-gold hover:scale-110 transition-bounce"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8 text-gold-foreground" fill="currentColor" />
    </a>
  );
};
