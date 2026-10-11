import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type IconBadgeProps = {
  icon: LucideIcon;
  tone?: "primary" | "accent" | "dark";
  size?: "md" | "lg";
  className?: string;
};

const tones = {
  primary: "bg-primary-50 text-primary-700 ring-primary-100",
  accent: "bg-accent-100 text-accent-700 ring-accent-200",
  dark: "bg-white/10 text-accent-300 ring-white/10",
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
        "inline-flex shrink-0 items-center justify-center rounded-2xl ring-1 ring-inset",
        size === "md" ? "size-12" : "size-14",
        tones[tone],
        className,
      )}
    >
      <Icon className={size === "md" ? "size-6" : "size-7"} strokeWidth={1.75} />
    </span>
  );
}
