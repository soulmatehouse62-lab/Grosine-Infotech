import { MessageCircleQuestion } from "lucide-react";
import type { ReactNode } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Faq } from "@/data/faqs";
import { faqSchema } from "@/lib/schema";

type FaqSectionProps = {
  faqs: Faq[];
  title?: ReactNode;
  description?: ReactNode;
  tone?: "surface" | "alt" | "white";
};

/** FAQ accordion with matching FAQPage structured data. */
export function FaqSection({
  faqs,
  title = "Questions we hear most often",
  description = "Straight answers before you get in touch. If yours isn't here, just ask.",
  tone = "white",
}: FaqSectionProps) {
  return (
    <Section tone={tone} labelledBy="faq-heading">
      <JsonLd data={faqSchema(faqs)} />
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="faq-heading"
            align="left"
            eyebrow="FAQ"
            title={title}
            description={description}
          />
          <div className="mt-8 flex items-start gap-4 rounded-2xl border border-line bg-surface p-5">
            <MessageCircleQuestion
              className="mt-0.5 size-6 shrink-0 text-primary-700"
              aria-hidden="true"
            />
            <div>
              <p className="font-semibold text-ink">Still have a question?</p>
              <p className="mt-1 text-sm text-muted">
                Talk to us. The first consultation is free.
              </p>
              <Button href="/contact/" variant="dark" size="sm" className="mt-4">
                Contact us
              </Button>
            </div>
          </div>
        </div>

        <Accordion items={faqs} name="faq" />
      </div>
    </Section>
  );
}
