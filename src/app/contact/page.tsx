import { Clock, ExternalLink, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHero } from "@/components/sections/PageHero";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { IconBadge } from "@/components/ui/IconBadge";
import { JsonLd } from "@/components/ui/JsonLd";
import { Section } from "@/components/ui/Section";
import { serviceOptions } from "@/data/services";
import { site } from "@/data/site";
import { emailHref, formatTime, telHref, whatsappUrl } from "@/lib/contact";
import { localBusinessSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us | Get a Free Quote",
  description:
    "Contact Grosine Infotech in Pratap Nagar, Jaipur. Call, WhatsApp, email or send the form for a free consultation and quote on digital marketing or a website.",
  path: "/contact/",
});

type DetailProps = {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
};

function Detail({ icon, title, children }: DetailProps) {
  return (
    <li className="flex gap-4">
      <IconBadge icon={icon} />
      <div className="min-w-0">
        <h3 className="font-sans text-base font-semibold tracking-normal">{title}</h3>
        <div className="mt-1 leading-relaxed text-body">{children}</div>
      </div>
    </li>
  );
}

const detailLink =
  "font-medium text-primary-700 underline-offset-4 hover:underline break-words";

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />

      <PageHero
        crumbs={[{ name: "Contact", path: "/contact/" }]}
        eyebrow="Contact us"
        title="Let's talk about growing your business"
        description="Book a free consultation or ask for a quote. Tell us a little about what you need and we'll take it from there."
      />

      <Section tone="surface" labelledBy="contact-form-heading">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Reach us directly</h2>
            <p className="mt-3 text-lg text-muted">
              Prefer to talk? Call, message or visit us at our Jaipur office.
            </p>

            <ul className="mt-8 space-y-7">
              <Detail icon={MapPin} title="Office address">
                <address className="not-italic">
                  {site.address.street},
                  <br />
                  {site.address.area},
                  <br />
                  {site.address.city}, {site.address.region}{" "}
                  {site.address.postalCode}
                </address>
                <a
                  href={site.mapLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${detailLink} mt-2 inline-flex items-center gap-1.5`}
                >
                  Get directions
                  <ExternalLink className="size-4" aria-hidden="true" />
                  <span className="sr-only">(opens Google Maps in a new tab)</span>
                </a>
              </Detail>
              <Detail icon={Phone} title="Phone">
                <a href={telHref} className={detailLink}>
                  {site.phone}
                </a>
              </Detail>
              <Detail icon={Mail} title="Email">
                <a href={emailHref} className={detailLink}>
                  {site.email}
                </a>
              </Detail>
              <Detail icon={Clock} title="Business hours">
                <ul>
                  {site.hours.map((row) => (
                    <li key={row.label}>
                      {row.label}:{" "}
                      {row.opens
                        ? `${formatTime(row.opens)} to ${formatTime(row.closes)}`
                        : "Closed"}
                    </li>
                  ))}
                </ul>
              </Detail>
            </ul>

            <Button
              href={whatsappUrl()}
              variant="whatsapp"
              size="lg"
              className="mt-9 w-full sm:w-auto"
            >
              <WhatsAppIcon className="size-5" />
              Chat on WhatsApp
            </Button>
          </div>

          <Card className="sm:p-9">
            <h2 id="contact-form-heading" className="text-2xl font-bold sm:text-3xl">
              Send us an enquiry
            </h2>
            <p className="mt-2 mb-7 text-muted">
              Fill in the form for a free, no-obligation quote.
            </p>
            <EnquiryForm serviceOptions={serviceOptions} submitLabel="Send Enquiry" />
          </Card>
        </div>
      </Section>

      <section aria-labelledby="map-heading" className="bg-surface pb-16 sm:pb-20 lg:pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="map-heading" className="text-2xl font-bold sm:text-3xl">
            Find us in Pratap Nagar, Jaipur
          </h2>
          <div className="mt-6 overflow-hidden rounded-3xl border border-line bg-surface-alt shadow-soft">
            <iframe
              src={site.mapEmbedUrl}
              title={`Map showing the ${site.name} office in ${site.address.city}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block h-80 w-full border-0 sm:h-[26rem]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
