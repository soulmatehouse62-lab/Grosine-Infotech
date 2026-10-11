import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Lift and deepen the shadow on hover. */
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
          "transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lift",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
