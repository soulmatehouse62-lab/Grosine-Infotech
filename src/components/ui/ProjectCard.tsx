import {
  Megaphone,
  MonitorSmartphone,
  Palette,
  Search,
  Share2,
  type LucideIcon,
} from "lucide-react";
import type { PortfolioCategory, Project } from "@/data/portfolio";
import { cn } from "@/lib/cn";

// Generated cover art per category, so no project images are required.
const art: Record<PortfolioCategory, { icon: LucideIcon; gradient: string }> = {
  SEO: { icon: Search, gradient: "from-primary-700 to-primary-500" },
  "Web Development": {
    icon: MonitorSmartphone,
    gradient: "from-primary-950 to-primary-700",
  },
  Branding: { icon: Palette, gradient: "from-accent-600 to-accent-400" },
  "Social Media": { icon: Share2, gradient: "from-primary-600 to-primary-300" },
  "Performance Marketing": {
    icon: Megaphone,
    gradient: "from-primary-900 to-accent-600",
  },
};

type ProjectCardProps = {
  project: Project;
  headingLevel?: "h2" | "h3";
};

export function ProjectCard({ project, headingLevel: Heading = "h3" }: ProjectCardProps) {
  const { icon: Icon, gradient } = art[project.category];

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div
        aria-hidden="true"
        className={cn(
          "relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br",
          gradient,
        )}
      >
        <div className="bg-dots absolute inset-0 text-white/15" />
        <div className="absolute -right-10 -bottom-14 size-44 rounded-full border-[18px] border-white/10 transition duration-500 group-hover:scale-110" />
        <div className="absolute -top-8 -left-8 size-28 rounded-full bg-white/10" />
        <span className="relative flex size-16 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/30 backdrop-blur-sm">
          <Icon className="size-8" strokeWidth={1.5} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-semibold text-primary-700">{project.category}</p>
        <Heading className="mt-1.5 text-xl font-bold">{project.title}</Heading>
        <p className="mt-1 text-sm text-muted">{project.client}</p>
        <p className="mt-3 leading-relaxed text-body">{project.summary}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-surface-alt px-3 py-1 text-xs font-medium text-body"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
