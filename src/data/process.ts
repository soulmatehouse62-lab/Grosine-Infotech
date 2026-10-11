import {
  BarChart3,
  ClipboardList,
  Compass,
  Rocket,
  SlidersHorizontal,
  Telescope,
  type LucideIcon,
} from "lucide-react";

export type ProcessStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/** The agency-wide framework shown on the home and about pages. */
export const processSteps: ProcessStep[] = [
  {
    title: "Discover",
    description:
      "We start by listening. You tell us about your business, your customers and what a good month looks like, and we agree on the goal.",
    icon: Compass,
  },
  {
    title: "Audit",
    description:
      "We review your website, search visibility, social presence and competitors to see where enquiries are being lost today.",
    icon: Telescope,
  },
  {
    title: "Plan",
    description:
      "You get a written plan: which channels, what work, in what order, and what it costs. Nothing begins until you are happy with it.",
    icon: ClipboardList,
  },
  {
    title: "Launch",
    description:
      "Our team builds, writes, designs and publishes. You approve the important pieces before anything goes live.",
    icon: Rocket,
  },
  {
    title: "Optimise",
    description:
      "We watch what real visitors do, keep what works and fix what doesn't, so your budget moves towards the best-performing activity.",
    icon: SlidersHorizontal,
  },
  {
    title: "Report",
    description:
      "Regular reports in plain language show what we did, what it produced and what comes next. No jargon and no hidden numbers.",
    icon: BarChart3,
  },
];
