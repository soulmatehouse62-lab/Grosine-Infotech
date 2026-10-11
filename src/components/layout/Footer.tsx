import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { socialIcons } from "@/components/ui/BrandIcons";
import { Container } from "@/components/ui/Container";
import { companyNav } from "@/data/navigation";
import { services } from "@/data/services";
import { site, type SocialPlatform } from "@/data/site";
import { emailHref, formatTime, telHref } from "@/lib/contact";
import { Logo } from "./Logo";

const headingClasses =
  "font-sans text-sm font-semibold tracking-wider text-white uppercase";
const linkClasses =
  "inline-flex min-h-9 items-center text-primary-100/80 underline-offset-4 transition hover:text-white hover:underline";

export function Footer() {
  const socials = (Object.keys(site.social) as SocialPlatform[]).filter(
    (platform) => site.social[platform],
  );

  return (
    <footer className="bg-primary-950 text-primary-100/80">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.8fr_1.3fr] lg:gap-10">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-sm leading-relaxed">
            A Jaipur-based digital marketing and website development agency
            helping small and mid-sized businesses get found, look credible
            and win more enquiries online.
          </p>
          {socials.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {socials.map((platform) => {
                const { label, Icon } = socialIcons[platform];
                return (
                  <li key={platform}>
                    <a
                      href={site.social[platform]}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${site.name} on ${label}`}
                      className="flex size-11 items-center justify-center rounded-full border border-white/15 text-primary-100 transition hover:border-accent-400 hover:bg-accent-500 hover:text-ink"
                    >
                      <Icon className="size-5" />
                    </a>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <nav aria-label="Services">
          <h2 className={headingClasses}>Services</h2>
          <ul className="mt-4 space-y-1">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}/`} className={linkClasses}>
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h2 className={headingClasses}>Company</h2>
          <ul className="mt-4 space-y-1">
            {companyNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClasses}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={headingClasses}>Contact</h2>
          <ul className="mt-5 space-y-4">
            <li className="flex gap-3">
              <MapPin className="mt-1 size-5 shrink-0 text-accent-400" aria-hidden="true" />
              <address className="leading-relaxed not-italic">
                {site.address.street},
                <br />
                {site.address.area},
                <br />
                {site.address.city}, {site.address.region}{" "}
                {site.address.postalCode}
              </address>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-5 shrink-0 text-accent-400" aria-hidden="true" />
              <a href={telHref} className={linkClasses}>
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="size-5 shrink-0 text-accent-400" aria-hidden="true" />
              <a href={emailHref} className={`${linkClasses} break-all`}>
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-accent-400" aria-hidden="true" />
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
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 pb-24 text-sm sm:flex-row md:pb-6">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy-policy/" className={linkClasses}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms/" className={linkClasses}>
                Terms
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
}
