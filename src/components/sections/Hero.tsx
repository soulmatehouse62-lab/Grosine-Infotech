import { ArrowRight, Check, MapPin } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { QuoteButton } from "@/components/ui/QuoteButton";
import { cta } from "@/data/navigation";
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
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-primary-50/80 to-surface"
      />
      <Container className="grid items-center gap-20 pt-12 pb-20 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pt-20 lg:pb-28">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-1.5 text-sm font-semibold text-primary-800 shadow-soft">
            <MapPin className="size-4 text-accent-600" aria-hidden="true" />
            Digital marketing agency in Jaipur
          </p>

          <h1 className="mt-6 text-[2.5rem] leading-[1.05] font-extrabold sm:text-6xl xl:text-7xl">
            {/* Fixed line breaks keep the layout stable while the web font loads. */}
            <span className="block whitespace-nowrap">Turn online</span>{" "}
            <span className="block whitespace-nowrap">attention into</span>{" "}
            <span className="relative inline-block whitespace-nowrap text-primary-700">
              real enquiries
              <svg
                aria-hidden="true"
                viewBox="0 0 300 14"
                preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-accent-500"
              >
                <path
                  d="M3 10 C70 2 150 2 297 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-body sm:text-xl">
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
                <span className="flex size-5 items-center justify-center rounded-full bg-primary-700 text-white">
                  <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <HeroVisual />
      </Container>
    </section>
  );
}
