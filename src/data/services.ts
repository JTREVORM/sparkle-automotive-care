export const WHATSAPP_NUMBER = "256748020649";
export const PHONE_DISPLAY = "0748 020 649";

export type CarSize = "small" | "big";

export interface Service {
  id: string;
  name: string;
  small: number;
  big: number;
}

export const SERVICES: Service[] = [
  { id: "ordinary-wash", name: "Ordinary Wash", small: 20000, big: 30000 },
  { id: "dry-vacuum", name: "Dry Vacuum Only", small: 10000, big: 15000 },
  { id: "full-interior", name: "Full Interior Package", small: 100000, big: 120000 },
  { id: "steam-cleaning", name: "Steam Cleaning", small: 20000, big: 20000 },
  { id: "external-wash", name: "External Wash Only", small: 10000, big: 15000 },
  { id: "engine-cleaning", name: "Engine Cleaning", small: 20000, big: 20000 },
  { id: "wet-vacuum", name: "Wet Vacuum & Extraction", small: 40000, big: 50000 },
  { id: "ac-deep-clean", name: "AC Deep Clean & Disinfection", small: 20000, big: 20000 },
  { id: "tcut-polish", name: "Full Body T-Cut & Polishing", small: 100000, big: 120000 },
  { id: "headlight", name: "Headlight Restoration", small: 40000, big: 40000 },
  { id: "anti-fog", name: "Anti-Fog & Rain Repellant", small: 20000, big: 20000 },
  { id: "clay-bar", name: "Clay Bar Treatment", small: 30000, big: 40000 },
  { id: "ceramic", name: "Ceramic Coating", small: 200000, big: 250000 },
];

export const formatUGX = (amount: number) =>
  new Intl.NumberFormat("en-UG").format(amount);
