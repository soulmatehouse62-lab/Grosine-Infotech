import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services as allServices, type Service } from "@/data/services";

type ServicesGridProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Defaults to every service. */
  services?: Service[];
  /** Show a "View all services" button under the grid. */
  showAllLink?: boolean;
  tone?: "surface" | "alt" | "white";
  id?: string;
};

/** Service cards. Used for the home overview, the services page and "related services". */
export function ServicesGrid({
  eyebrow,
  title,
  description,
  services = allServices,
  showAllLink = false,
  tone = "surface",
  id = "services-heading",
}: ServicesGridProps) {
  return (
    <Section tone={tone} labelledBy={id}>
      <SectionHeading id={id} eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.slug} delay={(index % 3) * 0.08} className="h-full">
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </div>

      {showAllLink && (
        <div className="mt-10 text-center">
          <Button href="/services/" variant="dark" size="lg">
            View all services
            <ArrowRight className="size-5" aria-hidden="true" />
          </Button>
        </div>
      )}
    </Section>
  );
}
