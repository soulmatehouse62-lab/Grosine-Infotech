"use client";

import { X } from "lucide-react";
import { useEffect, useId, useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  /** "center" is a dialog box, "drawer" slides in from the right edge. */
  variant?: "center" | "drawer";
  /** Hide the title visually but keep it for screen readers. */
  hideTitle?: boolean;
};

/**
 * Wraps the native <dialog> element, which provides the focus trap, Escape
 * to close, an inert page behind it and focus restoration on close.
 */
export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  variant = "center",
  hideTitle = false,
}: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      aria-describedby={description ? descriptionId : undefined}
      onClose={onClose}
      // A click that lands on the dialog element itself is on the backdrop.
      onClick={(event) => {
        if (event.target === ref.current) onClose();
      }}
      className={cn(
        "bg-white p-0 shadow-lift outline-none",
        variant === "center" &&
          "m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-xl overflow-y-auto rounded-3xl open:animate-scale-in",
        variant === "drawer" &&
          "mr-0 ml-auto h-dvh max-h-none w-[min(22rem,90vw)] max-w-none overflow-y-auto open:animate-slide-in",
      )}
    >
      {open && (
        <div className={cn("relative", variant === "center" ? "p-6 sm:p-8" : "p-5")}>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-full text-muted transition hover:bg-surface-alt hover:text-ink"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
          <h2
            id={titleId}
            className={cn("pr-12 text-2xl font-bold", hideTitle && "sr-only")}
          >
            {title}
          </h2>
          {description && (
            <p id={descriptionId} className="mt-2 pr-8 text-muted">
              {description}
            </p>
          )}
          <div className={hideTitle ? undefined : "mt-6"}>{children}</div>
        </div>
      )}
    </dialog>
  );
}
