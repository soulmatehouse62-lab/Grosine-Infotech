import { Check, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { IconBadge } from "@/components/ui/IconBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

type FeatureCardItem = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

type FeatureCardsProps = {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  items: FeatureCardItem[];
  tone?: "surface" | "alt" | "white";
  columns?: 2 | 3 | 4;
};

const columnClasses = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

/**
 * Generic icon-card grid. Used for "Why choose us", company values, and the
 * features and benefits on service pages. Items without an icon get a tick.
 */
export function FeatureCards({
  id,
  eyebrow,
  title,
  description,
  items,
  tone = "alt",
  columns = 3,
}: FeatureCardsProps) {
  return (
    <Section tone={tone} labelledBy={id}>
      <SectionHeading id={id} eyebrow={eyebrow} title={title} description={description} />

      <ul className={cn("mt-12 grid gap-6", columnClasses[columns])}>
        {items.map((item, index) => (
          <li key={item.title}>
            <Reveal delay={(index % columns) * 0.08} className="h-full">
              <Card interactive className="h-full">
                <IconBadge icon={item.icon ?? Check} tone={item.icon ? "primary" : "accent"} />
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.description}</p>
              </Card>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
