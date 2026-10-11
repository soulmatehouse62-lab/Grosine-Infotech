export type NavLink = {
  label: string;
  href: string;
};

/** Top-level header links. "Services" also opens the mega menu. */
export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Our Work", href: "/portfolio/" },
  { label: "Contact", href: "/contact/" },
];

export const companyNav: NavLink[] = [
  { label: "About Us", href: "/about/" },
  { label: "Our Work", href: "/portfolio/" },
  { label: "Contact", href: "/contact/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Service", href: "/terms/" },
];

/** Call-to-action labels used across the site. */
export const cta = {
  quote: "Get a Free Quote",
  quoteShort: "Get a Quote",
  call: "Book a Free Consultation",
  callShort: "Book a Free Call",
} as const;
