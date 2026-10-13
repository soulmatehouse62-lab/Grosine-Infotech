import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/process";
import { cn } from "@/lib/cn";

type Step = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

type ProcessProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  /** Defaults to the agency-wide framework from src/data/process.ts. */
  steps?: Step[];
};

/** Numbered steps on a dark band. Also used for each service's own process. */
export function Process({
  id = "process-heading",
  eyebrow = "Our process",
  title = "A clear path from first call to measurable results",
  description = "Six steps, repeated and refined. You always know what stage we are at and what happens next.",
  steps = processSteps,
}: ProcessProps) {
  return (
    <Section tone="dark" labelledBy={id} className="overflow-hidden">
      <div aria-hidden="true" className="bg-mesh-dark absolute inset-0 opacity-70" />
      <SectionHeading
        id={id}
        onDark
        eyebrow={eyebrow}
        title={title}
        description={description}
        className="relative"
      />

      <ol
        className={cn(
          "relative mt-12 grid gap-5 sm:grid-cols-2",
          steps.length % 3 === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4",
        )}
      >
        {steps.map((step, index) => (
          <li key={step.title}>
            <Reveal delay={(index % 3) * 0.08} className="h-full">
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition duration-300 backdrop-blur-sm hover:border-white/30 hover:bg-white/[0.08] sm:p-7">
                <div className="flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="text-brand-light font-display text-5xl leading-none font-extrabold"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step.icon && (
                    <step.icon
                      className="size-7 text-primary-200"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <h3 className="mt-5 text-xl font-bold">
                  <span className="sr-only">Step {index + 1}: </span>
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-primary-100/80">
                  {step.description}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
