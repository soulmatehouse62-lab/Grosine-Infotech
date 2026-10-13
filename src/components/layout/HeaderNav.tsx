"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { QuoteButton } from "@/components/ui/QuoteButton";
import { cta, mainNav } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { MegaMenu } from "./MegaMenu";
import { MobileDrawer } from "./MobileDrawer";

export type MegaMenuItem = {
  href: string;
  title: string;
  summary: string;
  icon: ReactNode;
};

type HeaderNavProps = {
  logo: ReactNode;
  megaItems: MegaMenuItem[];
};

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href.replace(/\/$/, ""));
}

const linkClasses =
  "relative inline-flex min-h-11 items-center rounded-full px-3.5 text-[0.95rem] font-medium text-ink/80 transition hover:bg-primary-50 hover:text-primary-800 aria-[current=page]:text-primary-800 aria-[current=page]:font-semibold";

export function HeaderNav({ logo, megaItems }: HeaderNavProps) {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="relative flex h-16 items-center justify-between gap-3 px-3.5 sm:px-5 lg:h-[4.5rem]">
      {logo}

      <nav aria-label="Main" className="hidden lg:block">
        <ul className="flex items-center gap-0.5">
          {mainNav.map((link) => {
            const current = isActive(pathname, link.href) ? "page" : undefined;
            return link.href === "/services/" ? (
              <MegaMenu
                key={link.href}
                label={link.label}
                href={link.href}
                items={megaItems}
                current={current}
                linkClasses={linkClasses}
              />
            ) : (
              <li key={link.href}>
                <Link href={link.href} aria-current={current} className={linkClasses}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex items-center gap-2">
        <Button
          href="/contact/"
          variant="secondary"
          className="max-xl:hidden"
        >
          {cta.callShort}
        </Button>
        <QuoteButton size="sm" className="max-[380px]:hidden sm:min-h-11 sm:px-5">
          {cta.quoteShort}
        </QuoteButton>
        <button
          type="button"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open menu"
          aria-haspopup="dialog"
          className={cn(
            "flex size-11 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:border-primary-300 lg:hidden",
          )}
        >
          <Menu className="size-5" aria-hidden="true" />
        </button>
      </div>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        pathname={pathname}
        megaItems={megaItems}
        isActive={isActive}
      />
    </div>
  );
}
