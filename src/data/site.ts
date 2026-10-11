/**
 * Single source of truth for company details.
 * Everything marked TODO is a placeholder: replace it with real client data.
 */

export type BusinessHours = {
  /** Human-readable label, e.g. "Monday to Saturday". */
  label: string;
  /** schema.org day names covered by this row. */
  days: string[];
  /** 24h "HH:MM". Leave both empty for a closed day. */
  opens: string;
  closes: string;
};

const address = {
  street: "34/CS-03/B-04, Haldighati Marg E, near Indian Bank",
  area: "Sanganer, Sector 5, Pratap Nagar",
  city: "Jaipur",
  region: "Rajasthan",
  postalCode: "302033",
  country: "India",
  countryCode: "IN",
};

const fullAddress = `${address.street}, ${address.area}, ${address.city}, ${address.region} ${address.postalCode}`;

export const site = {
  name: "Grosine Infotech",
  /** Used by the text wordmark: first word bold, second word light. */
  wordmark: { primary: "Grosine", secondary: "Infotech" },
  tagline: "Digital marketing and web development that brings you enquiries",
  description:
    "Grosine Infotech is a digital marketing and website development agency in Jaipur, helping small and mid-sized businesses win more leads through SEO, social media marketing, branding and high-performing websites.",

  // TODO: replace with the live domain (no trailing slash). Canonical URLs,
  // the sitemap, robots.txt and JSON-LD are all built from this value.
  siteUrl: "https://www.grosineinfotech.com",

  address,
  fullAddress,

  // TODO: replace with the real phone number, in international format.
  phone: "+91 00000 00000",

  // TODO: replace with the real enquiry email address.
  email: "hello@example.com",

  // TODO: replace with the real WhatsApp number: country code + number,
  // digits only, no "+" or spaces (e.g. 919876543210).
  whatsapp: "910000000000",

  /** Default message used by WhatsApp buttons. */
  whatsappGreeting:
    "Hi Grosine Infotech, I'd like to know more about your services.",

  // TODO: replace each with the real profile URL. Set a value to "" to hide
  // that icon. Bare platform URLs like these are treated as placeholders and
  // left out of the structured data.
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
    x: "https://x.com/",
    youtube: "https://www.youtube.com/",
  },

  /** Keyless Google Maps embed built from the address above. */
  mapEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(fullAddress)}&output=embed`,
  mapLinkUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Grosine Infotech, ${fullAddress}`)}`,

  // TODO: replace with the real business hours.
  hours: [
    {
      label: "Monday to Saturday",
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "19:00",
    },
    { label: "Sunday", days: ["Sunday"], opens: "", closes: "" },
  ] satisfies BusinessHours[] as BusinessHours[],
} as const;

export type SocialPlatform = keyof typeof site.social;
