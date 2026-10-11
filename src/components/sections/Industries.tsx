import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/data/industries";

export function Industries() {
  return (
    <Section tone="surface" labelledBy="industries-heading">
      <SectionHeading
        id="industries-heading"
        eyebrow="Industries we serve"
        title="Marketing shaped around how your customers buy"
        description="Every sector has its own search habits, buying cycle and competition. We adapt the plan to yours."
      />

      <Reveal>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {industries.map((industry) => (
            <li
              key={industry.name}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-line bg-white px-3 py-6 text-center shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lift"
            >
              <span
                aria-hidden="true"
                className="flex size-12 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition duration-300 group-hover:bg-accent-500 group-hover:text-ink"
              >
                <industry.icon className="size-6" strokeWidth={1.75} />
              </span>
              <span className="text-sm leading-snug font-semibold text-ink sm:text-base">
                {industry.name}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
