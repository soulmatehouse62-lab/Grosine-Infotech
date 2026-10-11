"use client";

import type { ReactNode } from "react";
import { useQuoteModal } from "@/components/layout/QuoteModal";
import { Button, type ButtonSize, type ButtonVariant } from "./Button";

type QuoteButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** Pre-select this service in the form. */
  service?: string;
  /** Runs before the modal opens, e.g. to close the mobile drawer. */
  onBeforeOpen?: () => void;
};

/** Opens the site-wide "Get a Quote" modal. */
export function QuoteButton({
  children,
  service,
  onBeforeOpen,
  ...style
}: QuoteButtonProps) {
  const { openQuote } = useQuoteModal();

  return (
    <Button
      {...style}
      aria-haspopup="dialog"
      onClick={() => {
        onBeforeOpen?.();
        openQuote(service);
      }}
    >
      {children}
    </Button>
  );
}
