import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { QuoteButton } from "@/components/ui/QuoteButton";
import { Section } from "@/components/ui/Section";
import { cta } from "@/data/navigation";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Our Work: Websites, Branding & Campaigns",
  description:
    "See websites, brand identities, SEO and marketing campaigns delivered by Grosine Infotech, Jaipur. Browse our work by category and start your own project.",
  path: "/portfolio/",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Our Work", path: "/portfolio/" }]}
        eyebrow="Portfolio"
        title="Work we are proud to put our name to"
        description="Websites, brands and campaigns built for businesses like yours. Filter by the kind of work you are interested in."
        actions={<QuoteButton size="lg">{cta.quote}</QuoteButton>}
      />

      <Section tone="surface">
        <PortfolioGrid />
      </Section>

      <CtaBand
        title="Want your business to be our next project?"
        description="Tell us what you have in mind. We'll share ideas, a realistic plan and a free quote."
      />
    </>
  );
}
