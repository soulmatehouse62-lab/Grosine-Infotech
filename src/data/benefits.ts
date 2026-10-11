import {
  FileText,
  Handshake,
  Layers,
  MapPin,
  MessagesSquare,
  Target,
  type LucideIcon,
} from "lucide-react";

export type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/** "Why choose us" cards. */
export const benefits: Benefit[] = [
  {
    title: "Built around enquiries",
    description:
      "Rankings, followers and clicks only matter if the phone rings. We plan and measure every campaign against the leads it brings you.",
    icon: Target,
  },
  {
    title: "Local knowledge",
    description:
      "We are based in Jaipur and understand how customers in Rajasthan search, compare and buy, in English and in Hindi.",
    icon: MapPin,
  },
  {
    title: "One team for everything",
    description:
      "SEO, social media, ads, design and development sit under one roof, so your brand and your message stay consistent everywhere.",
    icon: Layers,
  },
  {
    title: "Reporting you can read",
    description:
      "You see what was done and what it produced in clear language. If something isn't working, we tell you and change course.",
    icon: FileText,
  },
  {
    title: "Plans that fit your budget",
    description:
      "We recommend the work that will make the biggest difference first, and scale up only when the results justify it.",
    icon: Handshake,
  },
  {
    title: "People who answer",
    description:
      "You get a named point of contact who knows your account and replies to calls, emails and WhatsApp messages.",
    icon: MessagesSquare,
  },
];

/** Values shown on the About page. */
export const values: Benefit[] = [
  {
    title: "Honesty first",
    description:
      "We tell you what we think will work, what won't, and how long it is likely to take, even when that is not the easy answer.",
    icon: Handshake,
  },
  {
    title: "Results over activity",
    description:
      "A busy report means nothing if your business has not grown. We judge our work by the enquiries and sales it supports.",
    icon: Target,
  },
  {
    title: "Clarity always",
    description:
      "Plain language, clear pricing and visible work. You should never have to wonder what your agency is doing.",
    icon: FileText,
  },
  {
    title: "Craft in the details",
    description:
      "Fast pages, careful copy and consistent design add up. We care about the small things because your customers notice them.",
    icon: Layers,
  },
];
