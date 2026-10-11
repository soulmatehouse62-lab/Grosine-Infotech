import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "dark" | "light" | "whatsapp";
export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition duration-200 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  // Main call to action: amber with dark text for strong contrast.
  primary:
    "bg-accent-500 text-ink shadow-[0_8px_20px_-8px_var(--color-accent-600)] hover:-translate-y-0.5 hover:bg-accent-400",
  secondary:
    "border border-primary-700/25 bg-white text-primary-800 hover:border-primary-700 hover:bg-primary-50",
  dark: "bg-primary-700 text-white hover:-translate-y-0.5 hover:bg-primary-800",
  // For dark backgrounds.
  light: "border border-white/30 text-white hover:bg-white/10",
  whatsapp: "bg-[#0f7a41] text-white hover:-translate-y-0.5 hover:bg-[#0c6636]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

type StyleProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: StyleProps = {}): string {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonProps = StyleProps & { children: ReactNode } & (
    | ({ href: string } & Omit<ComponentPropsWithoutRef<"a">, "href" | "className">)
    | ({ href?: undefined } & Omit<ComponentPropsWithoutRef<"button">, "className">)
  );

/**
 * Renders a Next.js link for internal hrefs, a plain anchor for external
 * ones (http, tel, mailto), and a <button> when no href is given.
 */
export function Button({ variant, size, className, children, ...props }: ButtonProps) {
  const classes = buttonClasses({ variant, size, className });

  if (props.href !== undefined) {
    const { href, ...rest } = props;
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes} {...rest}>
          {children}
        </Link>
      );
    }
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  const { type = "button", ...rest } = props;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
