import { ArrowRight, Eye, MapPin, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

const points = [
  {
    icon: Users,
    title: "A partner, not a vendor",
    text: "We take the time to understand your business before recommending anything.",
  },
  {
    icon: Eye,
    title: "Nothing hidden",
    text: "Clear scope, clear pricing and reports that show exactly what was done.",
  },
  {
    icon: Sparkles,
    title: "Strategy and craft together",
    text: "Marketers, designers and developers working on the same goal: your growth.",
  },
];

/** Short introduction on the home page that links to the About page. */
export function AboutTeaser() {
  return (
    <Section tone="white" labelledBy="about-heading">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            id="about-heading"
            align="left"
            eyebrow="About us"
            title="A Jaipur agency that treats your growth as its own"
          />
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-body">
            <p>
              {site.name} is a digital marketing and website development agency
              based in Pratap Nagar, Jaipur. We work with small and mid-sized
              businesses that want a stronger presence online and a steady flow
              of enquiries from it.
            </p>
            <p>
              We keep things simple: understand the business, choose the
              channels that will make a real difference, do the work properly,
              and show you the results in plain language.
            </p>
          </div>
          <Button href="/about/" variant="dark" size="lg" className="mt-8">
            More about us
            <ArrowRight className="size-5" aria-hidden="true" />
          </Button>
        </div>

        <Reveal>
          <div className="relative rounded-[2rem] bg-gradient-to-br from-primary-50 to-accent-50 p-5 sm:p-8">
            <div
              aria-hidden="true"
              className="bg-dots absolute inset-0 rounded-[2rem] text-primary-700/10"
            />
            <ul className="relative space-y-4">
              {points.map((point) => (
                <li
                  key={point.title}
                  className="flex gap-4 rounded-2xl border border-white bg-white/90 p-5 shadow-soft"
                >
                  <span
                    aria-hidden="true"
                    className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-700 text-white"
                  >
                    <point.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{point.title}</h3>
                    <p className="mt-1 leading-relaxed text-muted">{point.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="relative mt-5 flex items-center gap-2 px-1 text-sm font-semibold text-primary-800">
              <MapPin className="size-4 text-accent-600" aria-hidden="true" />
              {site.address.area}, {site.address.city}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
