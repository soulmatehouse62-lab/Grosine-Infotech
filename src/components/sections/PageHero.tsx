import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import type { Crumb } from "@/lib/schema";

type PageHeroProps = {
  title: string;
  description?: ReactNode;
  /** Trail after Home; the last item is this page. */
  crumbs: Crumb[];
  /** Small label above the title. */
  eyebrow?: ReactNode;
  /** Buttons shown under the description. */
  actions?: ReactNode;
  /** Optional artwork on the right at large sizes. */
  aside?: ReactNode;
};

/** Hero for inner pages: breadcrumbs, the page's single h1, intro and CTAs. */
export function PageHero({
  title,
  description,
  crumbs,
  eyebrow,
  actions,
  aside,
}: PageHeroProps) {
  return (
    <section className="on-dark relative overflow-hidden bg-primary-900 text-primary-100">
      <div aria-hidden="true" className="bg-dots absolute inset-0 text-white/[0.06]" />
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-24 size-[30rem] rounded-full bg-primary-600/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 left-1/3 size-72 rounded-full bg-accent-500/15 blur-3xl"
      />

      <Container className="relative py-12 sm:py-16 lg:py-20">
        <Breadcrumbs crumbs={crumbs} />
        <div
          className={
            aside
              ? "mt-8 grid items-center gap-10 lg:grid-cols-[1.3fr_0.7fr]"
              : "mt-8 max-w-3xl"
          }
        >
          <div>
            {eyebrow && (
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold text-accent-300">
                {eyebrow}
              </p>
            )}
            <h1 className="text-4xl leading-[1.1] font-extrabold sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            {description && (
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-100/85 sm:text-xl">
                {description}
              </p>
            )}
            {actions && (
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>
            )}
          </div>
          {aside && <div className="hidden lg:block">{aside}</div>}
        </div>
      </Container>
    </section>
  );
}
