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
            "mb-3 inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase",
            onDark ? "text-accent-300" : "text-primary-700",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "h-px w-6",
              onDark ? "bg-accent-300" : "bg-primary-700",
            )}
          />
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className="text-3xl leading-tight font-bold sm:text-4xl lg:text-[2.75rem]"
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
