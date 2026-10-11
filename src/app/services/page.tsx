import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { PageHero } from "@/components/sections/PageHero";
import { Process } from "@/components/sections/Process";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Button } from "@/components/ui/Button";
import { QuoteButton } from "@/components/ui/QuoteButton";
import { benefits } from "@/data/benefits";
import { cta } from "@/data/navigation";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Digital Marketing Services in Jaipur",
  description:
    "Grosine Infotech's services: SEO, social media marketing, branding, website development, Google and Meta Ads, and content marketing for growing businesses.",
  path: "/services/",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: "/services/" }]}
        eyebrow="Our services"
        title="Digital marketing and web services that bring in business"
        description="From being found on Google to closing the enquiry, we cover every step of your customer's journey online."
        actions={
          <>
            <QuoteButton size="lg">{cta.quote}</QuoteButton>
            <Button href="/contact/" variant="light" size="lg">
              {cta.call}
            </Button>
          </>
        }
      />

      <ServicesGrid
        eyebrow="What we offer"
        title="Choose a service, or combine them into one plan"
        description="Each service is delivered by specialists and reported on clearly. Together, they reinforce each other."
      />

      <FeatureCards
        id="why-heading"
        eyebrow="Why choose us"
        title="What makes working with us different"
        items={benefits}
      />

      <Process />
      <CtaBand />
    </>
  );
}
