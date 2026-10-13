import { ArrowRight, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { QuoteButton } from "@/components/ui/QuoteButton";
import { cta } from "@/data/navigation";
import { site } from "@/data/site";
import { HeroVisual } from "./HeroVisual";

const reassurances = [
  "Free, no-obligation quote",
  "Clear monthly reporting",
  "One team for marketing and web",
];

/** Home page hero. Not scroll-animated, so the headline paints immediately. */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden="true" className="bg-mesh absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 -z-10 text-primary-900/[0.06]"
      />

      <Container className="grid items-center gap-20 pt-10 pb-20 sm:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pt-20 lg:pb-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-200/80 bg-white/80 px-4 py-1.5 text-sm font-semibold text-primary-900 shadow-soft backdrop-blur">
            <MapPin className="size-4 text-accent-600" aria-hidden="true" />
            Digital marketing agency in Jaipur
          </p>

          <h1 className="mt-6 text-[2.6rem] leading-[1.04] font-extrabold sm:text-6xl xl:text-7xl">
            {/* Fixed line breaks keep the layout stable while the web font loads. */}
            <span className="block whitespace-nowrap">Turn online</span>{" "}
            <span className="block whitespace-nowrap">attention into</span>{" "}
            <span className="text-brand inline-block pb-2 whitespace-nowrap">
              real enquiries
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-body sm:text-xl">
            Grosine Infotech helps small and mid-sized businesses grow with
            SEO, social media, branding and websites built to make the phone
            ring.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <QuoteButton size="lg">
              {cta.quote}
              <ArrowRight className="size-5" aria-hidden="true" />
            </QuoteButton>
            <Button href="/contact/" variant="secondary" size="lg">
              {cta.call}
            </Button>
          </div>

          <ul className="mt-9 flex flex-col gap-x-6 gap-y-2.5 text-sm font-medium text-body sm:flex-row sm:flex-wrap">
            {reassurances.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="bg-brand flex size-5 items-center justify-center rounded-full text-white">
                  <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold tracking-[0.28em] text-primary-900/70 uppercase">
            {site.motto.map((word, index) => (
              <span key={word} className="flex items-center gap-3">
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="size-1.5 rounded-full bg-accent-500"
                  />
                )}
                {word}
              </span>
            ))}
          </p>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}
