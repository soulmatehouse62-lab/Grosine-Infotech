"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { cta } from "@/data/navigation";
import { cn } from "@/lib/cn";
import type { MegaMenuItem } from "./HeaderNav";

type MegaMenuProps = {
  label: string;
  href: string;
  items: MegaMenuItem[];
  current: "page" | undefined;
  linkClasses: string;
};

/**
 * Desktop services menu using the disclosure pattern: the label is a normal
 * link to the services page and the chevron button toggles the panel. It
 * also opens on hover, and closes on Escape, outside click or focus leaving.
 */
export function MegaMenu({ label, href, items, current, linkClasses }: MegaMenuProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLLIElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      if (wrapperRef.current?.contains(document.activeElement)) {
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <li
      ref={wrapperRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={close}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) close();
      }}
    >
      <div className="flex items-center">
        <Link
          href={href}
          aria-current={current}
          onClick={close}
          className={cn(linkClasses, "pr-1.5")}
        >
          {label}
        </Link>
        <button
          ref={toggleRef}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${open ? "Hide" : "Show"} ${label.toLowerCase()} menu`}
          onClick={() => setOpen((value) => !value)}
          className="-ml-1 flex size-8 items-center justify-center rounded-full text-ink/70 transition hover:bg-primary-50 hover:text-primary-800"
        >
          <ChevronDown
            className={cn("size-4 transition-transform duration-200", open && "rotate-180")}
            aria-hidden="true"
          />
        </button>
      </div>

      {/* pt-3 bridges the gap so the pointer can travel from link to panel. */}
      <div
        id={panelId}
        className={cn(
          "absolute top-full left-1/2 w-full max-w-5xl -translate-x-1/2 px-4 pt-3 transition duration-200 sm:px-6 lg:px-8",
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0",
        )}
      >
        <div className="grid grid-cols-[1fr_17rem] gap-2 rounded-3xl border border-line bg-white p-3 shadow-lift">
          <ul className="grid grid-cols-2 gap-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="group flex h-full gap-3.5 rounded-2xl p-3.5 transition hover:bg-primary-50"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition group-hover:bg-primary-700 group-hover:text-white">
                    {item.icon}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">{item.title}</span>
                    <span className="mt-0.5 block text-sm leading-snug text-muted">
                      {item.summary}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="on-dark flex flex-col justify-between rounded-2xl bg-primary-800 p-6 text-primary-100">
            <div>
              <h3 className="text-lg font-bold">Not sure where to start?</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-100/85">
                Tell us about your business and we&apos;ll recommend the
                services that will bring you the most enquiries.
              </p>
            </div>
            <div className="mt-6 space-y-3">
              <Button href="/contact/" size="sm" className="w-full" onClick={close}>
                {cta.call}
              </Button>
              <Link
                href={href}
                onClick={close}
                className="flex items-center justify-center gap-1.5 text-sm font-semibold text-white underline-offset-4 hover:underline"
              >
                View all services
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
