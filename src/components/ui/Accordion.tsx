import { Plus } from "lucide-react";
import type { Faq } from "@/data/faqs";

type AccordionProps = {
  items: Faq[];
  /** Items sharing a name behave as a group: opening one closes the others. */
  name: string;
};

/**
 * Built on native <details>/<summary>, so it is keyboard and screen-reader
 * accessible, works without JavaScript, and adds nothing to the client bundle.
 */
export function Accordion({ items, name }: AccordionProps) {
  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <details
          key={item.question}
          name={name}
          open={index === 0}
          className="group rounded-2xl border border-line bg-white shadow-soft transition-colors open:border-primary-200"
        >
          <summary className="flex min-h-14 items-center justify-between gap-4 rounded-2xl px-5 py-4 sm:px-6">
            <h3 className="font-sans text-base font-semibold tracking-normal text-ink sm:text-lg">
              {item.question}
            </h3>
            <span
              aria-hidden="true"
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-700 transition duration-300 group-open:rotate-45 group-open:bg-primary-700 group-open:text-white"
            >
              <Plus className="size-4" />
            </span>
          </summary>
          <p className="px-5 pb-5 leading-relaxed text-body sm:px-6 sm:pb-6">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
