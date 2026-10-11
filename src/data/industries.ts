import {
  Building2,
  Factory,
  Gem,
  GraduationCap,
  Hotel,
  Scale,
  ShoppingBag,
  Stethoscope,
  Store,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  name: string;
  icon: LucideIcon;
};

// TODO: confirm this list matches the industries the client actually serves.
export const industries: Industry[] = [
  { name: "Real Estate", icon: Building2 },
  { name: "Healthcare & Clinics", icon: Stethoscope },
  { name: "Education & Coaching", icon: GraduationCap },
  { name: "Hotels & Travel", icon: Hotel },
  { name: "E-commerce", icon: ShoppingBag },
  { name: "Jewellery & Handicrafts", icon: Gem },
  { name: "Restaurants & Cafes", icon: UtensilsCrossed },
  { name: "Manufacturing & Export", icon: Factory },
  { name: "Retail & Showrooms", icon: Store },
  { name: "Professional Services", icon: Scale },
];
