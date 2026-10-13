import { ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";
import type { Service } from "@/data/services";
import { Card } from "./Card";
import { IconBadge } from "./IconBadge";

type ServiceCardProps = {
  service: Service;
  /** Heading level, so the card fits the outline of the page it is on. */
  headingLevel?: "h2" | "h3";
};

/** The whole card is clickable through the stretched title link. */
export function ServiceCard({ service, headingLevel: Heading = "h3" }: ServiceCardProps) {
  return (
    <Card as="article" interactive className="group flex h-full flex-col">
      <div className="flex items-start justify-between">
        <IconBadge
          icon={service.icon}
          className="transition duration-300 group-hover:bg-brand group-hover:text-white"
        />
        <ArrowUpRight
          className="size-5 text-muted transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary-700"
          aria-hidden="true"
        />
      </div>

      <Heading className="mt-5 text-xl font-bold">
        <Link
          href={`/services/${service.slug}/`}
          className="after:absolute after:inset-0 after:rounded-3xl"
        >
          {service.shortTitle}
        </Link>
      </Heading>
      <p className="mt-2 leading-relaxed text-muted">{service.summary}</p>

      <ul className="mt-5 space-y-2 border-t border-line pt-5 text-sm font-medium text-body">
        {service.highlights.map((highlight) => (
          <li key={highlight} className="flex items-center gap-2">
            <Check className="size-4 shrink-0 text-primary-600" aria-hidden="true" />
            {highlight}
          </li>
        ))}
      </ul>
    </Card>
  );
}
