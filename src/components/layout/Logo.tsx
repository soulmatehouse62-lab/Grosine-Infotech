import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";

// Checked once at build time. Drop a file at public/logo.svg and rebuild to
// replace the text wordmark. An optional public/logo-light.svg is used on the
// dark footer; without it the footer falls back to logo.svg.
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
  const src = tone === "light" && hasLightLogo ? "/logo-light.svg" : "/logo.svg";

  return (
    <Link
      href="/"
      aria-label={`${site.name} home`}
      className={cn("inline-flex shrink-0 items-center gap-2.5", className)}
    >
      {hasLogo ? (
        <Image
          src={src}
          alt={site.name}
          width={180}
          height={40}
          priority
          className="h-9 w-auto sm:h-10"
        />
      ) : (
        <>
          <span
            aria-hidden="true"
            className="relative flex size-9 items-center justify-center rounded-xl bg-primary-700 font-display text-xl leading-none font-extrabold text-white"
          >
            {site.wordmark.primary.charAt(0)}
            <span
              className={cn(
                "absolute -top-1 -right-1 size-3 rounded-full border-2 bg-accent-500",
                tone === "light" ? "border-primary-950" : "border-surface",
              )}
            />
          </span>
          <span
            className={cn(
              "font-display text-xl leading-none tracking-tight",
              tone === "light" ? "text-white" : "text-ink",
            )}
          >
            <span className="font-extrabold">{site.wordmark.primary}</span>{" "}
            <span
              className={cn(
                "font-medium",
                tone === "light" ? "text-primary-200" : "text-primary-700",
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
