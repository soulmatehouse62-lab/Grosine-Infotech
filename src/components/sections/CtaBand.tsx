import { Check, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { Container } from "@/components/ui/Container";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { serviceOptions } from "@/data/services";
import { site } from "@/data/site";
import { telHref, whatsappUrl } from "@/lib/contact";

type CtaBandProps = {
  title?: ReactNode;
  description?: ReactNode;
  /** Pre-select a service in the form (service detail pages). */
  defaultService?: string;
};

const promises = [
  "A reply from a real person, not an auto-responder",
  "An honest view of what will and won't work for you",
  "A clear, itemised quote with no obligation",
];

/** Closing call to action with the enquiry form. Used at the foot of most pages. */
export function CtaBand({
  title = "Ready for more enquiries? Let's talk.",
  description = "Tell us about your business and what you want to achieve. We'll come back with ideas and a free quote.",
  defaultService,
}: CtaBandProps) {
  return (
    <section
      id="enquiry"
      aria-labelledby="cta-heading"
      className="on-dark relative overflow-hidden bg-primary-900 py-16 text-primary-100 sm:py-20 lg:py-24"
    >
      <div aria-hidden="true" className="bg-dots absolute inset-0 text-white/[0.06]" />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-24 size-[28rem] rounded-full bg-primary-600/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 right-0 size-72 rounded-full bg-accent-500/20 blur-3xl"
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-3 text-sm font-semibold tracking-wide text-accent-300 uppercase">
            Free consultation
          </p>
          <h2
            id="cta-heading"
            className="text-3xl leading-tight font-bold sm:text-4xl lg:text-5xl"
          >
            {title}
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-primary-100/85">
            {description}
          </p>

          <ul className="mt-8 space-y-3">
            {promises.map((promise) => (
              <li key={promise} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-500 text-ink"
                >
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {promise}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={telHref}
              className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/25 px-5 font-semibold text-white transition hover:bg-white/10"
            >
              <Phone className="size-5 text-accent-300" aria-hidden="true" />
              {site.phone}
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/25 px-5 font-semibold text-white transition hover:bg-white/10"
            >
              <WhatsAppIcon className="size-5 text-accent-300" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="on-light rounded-3xl bg-white p-6 text-body shadow-lift sm:p-8">
          <h3 className="text-2xl font-bold">Get a free quote</h3>
          <p className="mt-1.5 mb-6 text-muted">
            Fill in the form and we&apos;ll be in touch.
          </p>
          <EnquiryForm
            serviceOptions={serviceOptions}
            defaultService={defaultService}
          />
        </div>
      </Container>
    </section>
  );
}
