import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";
import { JsonLd } from "./JsonLd";

type BreadcrumbsProps = {
  /** Trail after Home. The last item is the current page. */
  crumbs: Crumb[];
};

/** Visible breadcrumb trail plus matching BreadcrumbList structured data. */
export function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  const trail = [{ name: "Home", path: "/" }, ...crumbs];

  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-sm text-primary-100/80">
          {trail.map((crumb, index) => {
            const isLast = index === trail.length - 1;
            return (
              <li key={crumb.path} className="flex items-center gap-1.5">
                {index > 0 && (
                  <ChevronRight className="size-3.5 opacity-60" aria-hidden="true" />
                )}
                {isLast ? (
                  <span aria-current="page" className="font-medium text-white">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.path}
                    className="underline-offset-4 hover:text-white hover:underline"
                  >
                    {crumb.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
