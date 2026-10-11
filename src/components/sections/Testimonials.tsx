import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { TestimonialSlider } from "./TestimonialSlider";

export function Testimonials() {
  return (
    <Section tone="surface" labelledBy="testimonials-heading">
      <SectionHeading
        id="testimonials-heading"
        eyebrow="Testimonials"
        title="What our clients say"
        description="The best measure of our work is what the businesses we work with say about it."
      />
      <TestimonialSlider items={testimonials} />
    </Section>
  );
}
