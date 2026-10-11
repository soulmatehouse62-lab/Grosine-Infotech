import type { Metadata } from "next";
import { site } from "@/data/site";

/** Absolute URL for a site path such as "/services/seo/". */
export function absoluteUrl(path = "/"): string {
  return `${site.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${site.name}: digital marketing and website development agency in Jaipur`,
};

type PageMeta = {
  title: string;
  description: string;
  /** Path with leading and trailing slash, e.g. "/about/". */
  path: string;
  /** Skip the "| Grosine Infotech" suffix (used by the home page). */
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

/** Builds title, description, canonical, Open Graph and Twitter tags. */
export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  noIndex = false,
}: PageMeta): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    robots: noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: site.name,
      title: fullTitle,
      description,
      url: path,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}
