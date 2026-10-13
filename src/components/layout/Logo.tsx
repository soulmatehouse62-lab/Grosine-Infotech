import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

// Checked once at build time. By default the logo is the mark
// (public/logo-mark.png) beside the company name set as text.
//
// To use a single vector lockup instead, add public/logo.svg and rebuild.
// An optional public/logo-light.svg is used on the dark footer; without it
// the footer falls back to logo.svg.
const publicFile = (name: string) =>
  fs.existsSync(path.join(process.cwd(), "public", name));

const hasLogo = publicFile("logo.svg");
const hasLightLogo = publicFile("logo-light.svg");

type LogoProps = {
  /** "light" is for dark backgrounds such as the footer. */
  tone?: "dark" | "light";
  className?: string;
};

export function Logo({ tone = "dark", className }: LogoProps) {
  const light = tone === "light";

  return (
    <Link
      href="/"
      className={cn("inline-flex shrink-0 items-center gap-2.5", className)}
    >
      {hasLogo ? (
        <Image
          src={light && hasLightLogo ? "/logo-light.svg" : "/logo.svg"}
          alt={site.name}
          width={180}
          height={40}
          priority
          className="h-9 w-auto sm:h-10"
        />
      ) : (
        <>
          {/* The mark is navy, so it sits on a white tile on dark backgrounds. */}
          <span className={cn("shrink-0", light && "rounded-xl bg-white p-1.5")}>
            <Image
              src="/logo-mark.png"
              alt=""
              width={203}
              height={192}
              priority
              className={cn("w-auto", light ? "h-8" : "h-9 sm:h-10")}
            />
          </span>
          <span className="flex flex-col leading-none">
            <span
              className={cn(
                "font-display text-[1.3rem] font-bold tracking-[0.14em] uppercase",
                light ? "text-white" : "text-primary-950",
              )}
            >
              {site.wordmark.primary}
            </span>{" "}
            <span
              className={cn(
                "mt-1 text-[0.62rem] font-semibold tracking-[0.46em] uppercase",
                light ? "text-primary-200" : "text-primary-700",
              )}
            >
              {site.wordmark.secondary}
            </span>
          </span>
        </>
      )}
    </Link>
  );
}
