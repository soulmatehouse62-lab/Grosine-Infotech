import type { Faq } from "@/data/faqs";
import type { Service } from "@/data/services";
import { site } from "@/data/site";
import { isPlaceholder } from "./contact";
import { absoluteUrl } from "./seo";

type JsonLdObject = Record<string, unknown>;

const businessId = `${site.siteUrl}/#business`;

export type Crumb = {
  name: string;
  path: string;
};

export function localBusinessSchema(): JsonLdObject {
  const sameAs = Object.values(site.social).filter(
    (url) => !isPlaceholder(url),
  );

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": businessId,
    name: site.name,
    description: site.description,
    url: absoluteUrl("/"),
    image: absoluteUrl("/og.png"),
    ...(isPlaceholder(site.phone) ? {} : { telephone: site.phone }),
    ...(isPlaceholder(site.email) ? {} : { email: site.email }),
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.street}, ${site.address.area}`,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.countryCode,
    },
    areaServed: [
      { "@type": "City", name: "Jaipur" },
      { "@type": "State", name: "Rajasthan" },
      { "@type": "Country", name: "India" },
    ],
    openingHoursSpecification: site.hours
      .filter((row) => row.opens && row.closes)
      .map((row) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: row.days,
        opens: row.opens,
        closes: row.closes,
      })),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function serviceSchema(service: Service): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.shortTitle,
    description: service.seo.description,
    url: absoluteUrl(`/services/${service.slug}/`),
    provider: { "@type": "ProfessionalService", "@id": businessId, name: site.name },
    areaServed: [
      { "@type": "City", name: "Jaipur" },
      { "@type": "Country", name: "India" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${service.shortTitle} services`,
      itemListElement: service.features.map((feature) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature.title,
          description: feature.description,
        },
      })),
    },
  };
}

export function faqSchema(faqs: Faq[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** Pass the trail after Home; Home is added automatically. */
export function breadcrumbSchema(crumbs: Crumb[]): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map(
      (crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.path),
      }),
    ),
  };
}
