import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Lift, deepen the shadow and show the brand-gradient edge on hover. */
  interactive?: boolean;
};

export function Card({
  children,
  className,
  as: Tag = "div",
  interactive = false,
}: CardProps) {
  return (
    <Tag
      className={cn(
        "relative rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-7",
        interactive &&
          "transition duration-300 before:absolute before:inset-x-8 before:top-0 before:h-[3px] before:rounded-b-full before:bg-brand before:opacity-0 before:transition before:duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lift hover:before:opacity-100",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
