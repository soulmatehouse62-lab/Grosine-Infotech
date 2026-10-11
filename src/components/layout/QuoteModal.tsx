"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { EnquiryForm } from "@/components/ui/EnquiryForm";
import { Modal } from "@/components/ui/Modal";

type QuoteModalContextValue = {
  /** Opens the quote modal, optionally with a service pre-selected. */
  openQuote: (service?: string) => void;
};

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

export function useQuoteModal(): QuoteModalContextValue {
  const context = useContext(QuoteModalContext);
  if (!context) {
    throw new Error("useQuoteModal must be used inside QuoteModalProvider");
  }
  return context;
}

type QuoteModalProviderProps = {
  children: ReactNode;
  serviceOptions: string[];
};

/** Mounted once in the root layout so any page can open the quote modal. */
export function QuoteModalProvider({
  children,
  serviceOptions,
}: QuoteModalProviderProps) {
  const [open, setOpen] = useState(false);
  const [service, setService] = useState("");

  const openQuote = useCallback((preselected = "") => {
    setService(preselected);
    setOpen(true);
  }, []);

  const value = useMemo(() => ({ openQuote }), [openQuote]);

  return (
    <QuoteModalContext.Provider value={value}>
      {children}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="Get a free quote"
        description="Tell us what you need and we'll reply with a clear, itemised quote."
      >
        <EnquiryForm serviceOptions={serviceOptions} defaultService={service} />
      </Modal>
    </QuoteModalContext.Provider>
  );
}
