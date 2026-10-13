import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  title: ReactNode;
  eyebrow?: string;
  description?: ReactNode;
  align?: "left" | "center";
  /** Use on dark backgrounds. */
  onDark?: boolean;
  id?: string;
  className?: string;
};

export function SectionHeading({
  title,
  eyebrow,
  description,
  align = "center",
  onDark = false,
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-4 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase",
            onDark
              ? "border-white/15 bg-white/[0.07] text-primary-100"
              : "border-primary-200/80 bg-white text-primary-800 shadow-soft",
          )}
        >
          <span aria-hidden="true" className="size-1.5 rounded-full bg-accent-500" />
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-3xl leading-[1.12] font-bold sm:text-4xl lg:text-[2.85rem]"
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            onDark ? "text-primary-100/80" : "text-muted",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
