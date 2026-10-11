import type { Metadata } from "next";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { Process } from "@/components/sections/Process";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { StatsBand } from "@/components/sections/StatsBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { JsonLd } from "@/components/ui/JsonLd";
import { benefits } from "@/data/benefits";
import { generalFaqs } from "@/data/faqs";
import { localBusinessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Digital Marketing Agency in Jaipur | Grosine Infotech",
  description:
    "Grosine Infotech is a Jaipur digital marketing and web development agency. SEO, social media, branding, websites and ads that bring enquiries. Get a free quote.",
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <Hero />
      <StatsBand />
      <ServicesGrid
        eyebrow="What we do"
        title="Everything you need to be found, trusted and chosen"
        description="Six services that work on their own and work better together. Pick one to start, or let us build the full plan."
        showAllLink
      />
      <AboutTeaser />
      <FeatureCards
        id="why-heading"
        eyebrow="Why choose us"
        title="An agency that measures itself by your enquiries"
        description="Plenty of agencies can post, rank and design. Here is what working with us is like."
        items={benefits}
      />
      <Process />
      <Industries />
      <PortfolioPreview />
      <Testimonials />
      <FaqSection faqs={generalFaqs} />
      <CtaBand />
    </>
  );
}
