"use client";

import { ChevronDown, Phone } from "lucide-react";
import Link from "next/link";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { QuoteButton } from "@/components/ui/QuoteButton";
import { cta, mainNav } from "@/data/navigation";
import { site } from "@/data/site";
import { telHref, whatsappUrl } from "@/lib/contact";
import type { MegaMenuItem } from "./HeaderNav";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
  pathname: string;
  megaItems: MegaMenuItem[];
  isActive: (pathname: string, href: string) => boolean;
};

const linkClasses =
  "flex min-h-12 items-center rounded-xl px-3 text-lg font-semibold text-ink transition hover:bg-primary-50 aria-[current=page]:bg-primary-50 aria-[current=page]:text-primary-800";

/** Slide-in navigation for small screens. */
export function MobileDrawer({
  open,
  onClose,
  pathname,
  megaItems,
  isActive,
}: MobileDrawerProps) {
  return (
    <Modal open={open} onClose={onClose} title="Menu" variant="drawer">
      <nav aria-label="Mobile">
        <ul className="space-y-1">
          {mainNav.map((link) => {
            const current = isActive(pathname, link.href) ? "page" : undefined;

            if (link.href !== "/services/") {
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={current}
                    onClick={onClose}
                    className={linkClasses}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            }

            return (
              <li key={link.href}>
                <details className="group" open={current === "page"}>
                  <summary className={`${linkClasses} justify-between`}>
                    {link.label}
                    <ChevronDown
                      className="size-5 text-muted transition-transform group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <ul className="mt-1 mb-2 ml-3 space-y-0.5 border-l border-line pl-3">
                    <li>
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="flex min-h-11 items-center rounded-lg px-2 font-semibold text-primary-700"
                      >
                        All services
                      </Link>
                    </li>
                    {megaItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          aria-current={pathname.startsWith(item.href.replace(/\/$/, "")) ? "page" : undefined}
                          className="flex min-h-11 items-center rounded-lg px-2 text-body hover:bg-primary-50 aria-[current=page]:font-semibold aria-[current=page]:text-primary-800"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-6 space-y-3 border-t border-line pt-6">
        <QuoteButton size="lg" className="w-full" onBeforeOpen={onClose}>
          {cta.quote}
        </QuoteButton>
        <Button
          href="/contact/"
          variant="secondary"
          size="lg"
          className="w-full"
          onClick={onClose}
        >
          {cta.callShort}
        </Button>
      </div>

      <div className="mt-6 space-y-1 text-sm">
        <a
          href={telHref}
          className="flex min-h-11 items-center gap-3 rounded-lg px-2 font-medium text-ink hover:bg-primary-50"
        >
          <Phone className="size-4 text-primary-700" aria-hidden="true" />
          {site.phone}
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-11 items-center gap-3 rounded-lg px-2 font-medium text-ink hover:bg-primary-50"
        >
          <WhatsAppIcon className="size-4 text-primary-700" />
          Chat on WhatsApp
        </a>
      </div>
    </Modal>
  );
}
