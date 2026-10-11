import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { PageHero } from "@/components/sections/PageHero";
import { Process } from "@/components/sections/Process";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { QuoteButton } from "@/components/ui/QuoteButton";
import { Section } from "@/components/ui/Section";
import { cta } from "@/data/navigation";
import { getRelatedServices, getService, services } from "@/data/services";
import { serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

// Only the slugs in src/data/services.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}/`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const name = service.shortTitle;

  return (
    <>
      <JsonLd data={serviceSchema(service)} />

      <PageHero
        crumbs={[
          { name: "Services", path: "/services/" },
          { name, path: `/services/${service.slug}/` },
        ]}
        eyebrow={
          <>
            <service.icon className="size-4" aria-hidden="true" />
            Service
          </>
        }
        title={service.title}
        description={service.tagline}
        actions={
          <>
            <QuoteButton size="lg" service={name}>
              {cta.quote}
              <ArrowRight className="size-5" aria-hidden="true" />
            </QuoteButton>
            <Button href="/contact/" variant="light" size="lg">
              {cta.call}
            </Button>
          </>
        }
        aside={
          <div
            aria-hidden="true"
            className="relative mx-auto flex aspect-square w-full max-w-xs items-center justify-center"
          >
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-8 rounded-full border border-white/15" />
            <div className="absolute inset-16 rounded-full bg-white/10" />
            <div className="absolute top-6 right-10 size-5 rounded-full bg-accent-500" />
            <div className="absolute bottom-10 left-6 size-3 rounded-full bg-primary-300" />
            <service.icon className="relative size-24 text-accent-300" strokeWidth={1.25} />
          </div>
        }
      />

      <Section tone="white">
        <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-body sm:text-xl">
          {service.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <FeatureCards
        id="included-heading"
        eyebrow="What's included"
        title={`What our ${name} service covers`}
        description="Everything below is planned around your goals and scoped clearly in your proposal."
        items={service.features}
      />

      <Process
        eyebrow="How it works"
        title={`Our ${name} process`}
        description="Four clear stages, with you informed and in control at each one."
        steps={service.process}
      />

      <FeatureCards
        id="benefits-heading"
        eyebrow="Benefits"
        title="What this means for your business"
        items={service.benefits}
        tone="surface"
        columns={4}
      />

      <FaqSection
        faqs={service.faqs}
        title={`${name}: your questions answered`}
      />

      <ServicesGrid
        id="related-heading"
        eyebrow="Related services"
        title={`Services that work well with ${name}`}
        services={getRelatedServices(service.slug)}
        tone="alt"
        showAllLink
      />

      <CtaBand
        title={`Let's talk about ${name} for your business`}
        description="Share a few details and we'll come back with ideas, a realistic plan and a free quote."
        defaultService={name}
      />
    </>
  );
}
