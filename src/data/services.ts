export const WHATSAPP_NUMBER = "256748020649";
export const PHONE_DISPLAY = "0748 020 649";

export type CarSize = "small" | "big";

export interface Service {
  id: string;
  name: string;
  small: number;
  big: number;
  description: string;
}

export const SERVICES: Service[] = [
  {
    id: "ordinary-wash",
    name: "Ordinary Wash",
    small: 20000,
    big: 30000,
    description:
      "A standard hand wash that cleans the exterior bodywork, wheels, and tyres — leaving your car fresh and spotless.",
  },
  {
    id: "dry-vacuum",
    name: "Dry Vacuum Only",
    small: 10000,
    big: 15000,
    description:
      "Quick interior vacuum to remove dust, dirt, crumbs, and debris from seats, mats, and floor carpets.",
  },
  {
    id: "full-interior",
    name: "Full Interior Package",
    small: 100000,
    big: 120000,
    description:
      "Deep interior detail: vacuum, dashboard polish, door panels, seat shampoo, and full odour treatment for a like-new cabin.",
  },
  {
    id: "steam-cleaning",
    name: "Steam Cleaning",
    small: 20000,
    big: 20000,
    description:
      "High-temperature steam removes stubborn stains, kills bacteria, and sanitises seats, carpets, and tight crevices.",
  },
  {
    id: "external-wash",
    name: "External Wash Only",
    small: 10000,
    big: 15000,
    description:
      "Exterior-only foam wash with rinse and hand-dry — perfect for a fast refresh between full details.",
  },
  {
    id: "engine-cleaning",
    name: "Engine Cleaning",
    small: 20000,
    big: 20000,
    description:
      "Safe degreasing and cleaning of the engine bay to remove oil, grime, and dust for a tidy, well-maintained look.",
  },
  {
    id: "wet-vacuum",
    name: "Wet Vacuum & Extraction",
    small: 40000,
    big: 50000,
    description:
      "Deep shampoo and water extraction from seats and carpets to lift embedded dirt, stains, and odours.",
  },
  {
    id: "ac-deep-clean",
    name: "AC Deep Clean & Disinfection",
    small: 20000,
    big: 20000,
    description:
      "Cleans and disinfects your air-conditioning system to eliminate bad smells, mould, and bacteria for fresh cool air.",
  },
  {
    id: "tcut-polish",
    name: "Full Body T-Cut & Polishing",
    small: 100000,
    big: 120000,
    description:
      "Restores faded paint by removing scratches and oxidation, then polishing to a deep, glossy showroom shine.",
  },
  {
    id: "headlight",
    name: "Headlight Restoration",
    small: 40000,
    big: 40000,
    description:
      "Sands and polishes cloudy, yellowed headlights back to crystal clarity for safer night driving and a sharper look.",
  },
  {
    id: "anti-fog",
    name: "Anti-Fog & Rain Repellant",
    small: 20000,
    big: 20000,
    description:
      "Treats your windscreen and windows so rain beads off and interior fogging is reduced for clearer visibility.",
  },
  {
    id: "clay-bar",
    name: "Clay Bar Treatment",
    small: 30000,
    big: 40000,
    description:
      "Removes embedded contaminants, tar, and industrial fallout from paintwork — leaving the surface glass-smooth.",
  },
  {
    id: "ceramic",
    name: "Ceramic Coating",
    small: 200000,
    big: 250000,
    description:
      "Premium long-lasting protective coating that bonds to your paint, repels water, resists scratches, and keeps the car cleaner for longer.",
  },
];

export const formatUGX = (amount: number) =>
  new Intl.NumberFormat("en-UG").format(amount);
