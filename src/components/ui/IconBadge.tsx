import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type IconBadgeProps = {
  icon: LucideIcon;
  tone?: "primary" | "accent" | "brand";
  size?: "md" | "lg";
  className?: string;
};

const tones = {
  primary: "bg-primary-50 text-primary-700 ring-1 ring-primary-100 ring-inset",
  accent: "bg-accent-50 text-accent-600 ring-1 ring-accent-100 ring-inset",
  // Solid logo gradient with a white icon.
  brand: "bg-brand text-white shadow-glow",
};

export function IconBadge({
  icon: Icon,
  tone = "primary",
  size = "md",
  className,
}: IconBadgeProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-2xl",
        size === "md" ? "size-12" : "size-14",
        tones[tone],
        className,
      )}
    >
      <Icon className={size === "md" ? "size-6" : "size-7"} strokeWidth={1.75} />
    </span>
  );
}
