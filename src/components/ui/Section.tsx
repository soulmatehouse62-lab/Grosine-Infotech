import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  children: ReactNode;
  id?: string;
  tone?: "surface" | "alt" | "white" | "dark";
  className?: string;
  /** id of the heading that labels this section. */
  labelledBy?: string;
};

const tones = {
  surface: "bg-surface",
  alt: "bg-surface-alt",
  white: "bg-white",
  dark: "on-dark bg-primary-950 text-primary-100",
};

/** Standard page section: vertical rhythm, background tone and container. */
export function Section({
  children,
  id,
  tone = "surface",
  className,
  labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn("relative py-16 sm:py-20 lg:py-24", tones[tone], className)}
    >
      <Container>{children}</Container>
    </section>
  );
}
