"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import {
  portfolioCategories,
  projects,
  type PortfolioCategory,
} from "@/data/portfolio";
import { cn } from "@/lib/cn";

type Filter = "All" | PortfolioCategory;

const filters: Filter[] = ["All", ...portfolioCategories];

/** Full project grid with a category filter. */
export function PortfolioGrid() {
  const [active, setActive] = useState<Filter>("All");

  const visible =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
      >
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={active === filter}
            onClick={() => setActive(filter)}
            className={cn(
              "min-h-11 shrink-0 rounded-full border px-5 text-sm font-semibold transition",
              active === filter
                ? "border-primary-700 bg-primary-700 text-white"
                : "border-line bg-white text-body hover:border-primary-300 hover:text-primary-800",
            )}
          >
            {filter}
          </button>
        ))}
      </div>

      <p role="status" className="sr-only">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        {active === "All" ? "" : ` in ${active}`}
      </p>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} headingLevel="h2" />
          </li>
        ))}
      </ul>
    </div>
  );
}
