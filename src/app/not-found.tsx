import { ArrowRight, Home } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for could not be found.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-mesh absolute inset-0 -z-10"
      />
      <Container className="py-20 text-center sm:py-28">
        <p
          aria-hidden="true"
          className="text-brand mx-auto w-fit font-display text-[7rem] leading-none font-extrabold sm:text-[10rem]"
        >
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold sm:text-5xl">
          This page has gone missing
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-lg text-muted">
          The link may be out of date, or the page may have moved. Let&apos;s
          get you back to something useful.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" size="lg">
            <Home className="size-5" aria-hidden="true" />
            Back to home
          </Button>
          <Button href="/contact/" variant="secondary" size="lg">
            Contact us
          </Button>
        </div>

        <nav aria-label="Popular pages" className="mx-auto mt-14 max-w-3xl">
          <h2 className="font-sans text-sm font-semibold tracking-wider text-muted uppercase">
            Or explore our services
          </h2>
          <ul className="mt-5 flex flex-wrap justify-center gap-2.5">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}/`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-white px-4 text-sm font-semibold text-ink transition hover:border-primary-300 hover:text-primary-800"
                >
                  {service.shortTitle}
                  <ArrowRight className="size-4 text-primary-600" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
