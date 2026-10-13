import { Section } from "@/components/ui/Section";
import { PageHero } from "./PageHero";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
};

type LegalPageProps = {
  title: string;
  path: string;
  intro: string;
  sections: LegalSection[];
};

/** Shared layout for the Privacy Policy and Terms pages. */
export function LegalPage({ title, path, intro, sections }: LegalPageProps) {
  return (
    <>
      <PageHero crumbs={[{ name: title, path }]} title={title} description={intro} />

      <Section tone="white">
        <div className="mx-auto max-w-3xl">
          <p className="rounded-2xl border border-primary-200 bg-primary-50 px-5 py-4 text-sm leading-relaxed text-ink">
            <strong>Placeholder text.</strong> This page is a starting template
            and is not legal advice. Have it reviewed and completed by a
            qualified professional before the site goes live.
          </p>

          {sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="text-2xl font-bold">{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-lg leading-relaxed text-body">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
