import { ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { PageHero } from "@/components/sections/PageHero";
import { Process } from "@/components/sections/Process";
import { StatsBand } from "@/components/sections/StatsBand";
import { Button } from "@/components/ui/Button";
import { QuoteButton } from "@/components/ui/QuoteButton";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { values } from "@/data/benefits";
import { cta } from "@/data/navigation";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About Our Jaipur Digital Marketing Agency",
  description:
    "Meet Grosine Infotech, a Jaipur agency helping small and mid-sized businesses grow through honest, results-focused digital marketing and web development.",
  path: "/about/",
});

const commitments = [
  "We recommend only what we believe will help your business.",
  "You approve the plan and the price before any work begins.",
  "Your website, ad accounts and data stay in your name.",
  "You hear from us regularly, with or without good news.",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", path: "/about/" }]}
        eyebrow="About Grosine Infotech"
        title="We help good businesses get the attention they deserve"
        description="A digital marketing and website development agency in Jaipur, built for small and mid-sized businesses that want real growth, clearly explained."
        actions={
          <>
            <QuoteButton size="lg">{cta.quote}</QuoteButton>
            <Button href="/services/" variant="light" size="lg">
              Explore our services
            </Button>
          </>
        }
      />

      <Section tone="white" labelledBy="story-heading">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading
              id="story-heading"
              align="left"
              eyebrow="Who we are"
              title="A local team with a simple idea of good marketing"
            />
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-body">
              <p>
                {site.name} works from {site.address.area}, {site.address.city}.
                We exist for the business owner who knows they should be doing
                more online, but has little time for jargon, vague promises or
                reports that say a lot and mean very little.
              </p>
              <p>
                Our view is that marketing should be judged by what it brings
                in. A beautiful website that produces no enquiries has not done
                its job. Neither has a top ranking for a phrase nobody searches.
                So we begin with your goal and work backwards to the channels,
                content and design that will get you there.
              </p>
              <p>
                Because SEO, social media, advertising, design and development
                all sit in one team, the pieces fit together. Your ads lead to
                pages built to convert, your content supports your rankings,
                and your brand looks the same wherever a customer meets it.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-line bg-surface p-7 sm:p-8">
              <h3 className="text-xl font-bold">What you can count on</h3>
              <ul className="mt-5 space-y-4">
                {commitments.map((commitment) => (
                  <li key={commitment} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary-700 text-white"
                    >
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    <span className="leading-relaxed text-body">{commitment}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="on-dark rounded-3xl bg-primary-800 p-7 text-primary-100 sm:p-8">
              <h3 className="text-xl font-bold">What we do</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Button
                      href={`/services/${service.slug}/`}
                      variant="light"
                      size="sm"
                    >
                      {service.shortTitle}
                    </Button>
                  </li>
                ))}
              </ul>
              <Button href="/services/" size="sm" className="mt-6">
                All services
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <div className="bg-surface-alt pt-16 sm:pt-20">
        <StatsBand />
      </div>

      <FeatureCards
        id="values-heading"
        eyebrow="Our values"
        title="The principles behind every project"
        description="These shape how we plan, how we work and how we talk to you."
        items={values}
        columns={4}
      />

      <Process />
      <CtaBand />
    </>
  );
}
