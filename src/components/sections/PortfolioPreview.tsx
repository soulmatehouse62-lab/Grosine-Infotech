import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProjects } from "@/data/portfolio";

/** Featured projects on the home page. */
export function PortfolioPreview() {
  return (
    <Section tone="alt" labelledBy="portfolio-heading">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <SectionHeading
          id="portfolio-heading"
          align="left"
          eyebrow="Our work"
          title="Recent projects"
          description="A selection of the websites, brands and campaigns we have delivered."
        />
        <Button href="/portfolio/" variant="secondary" className="shrink-0">
          View all work
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 3) * 0.08} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
