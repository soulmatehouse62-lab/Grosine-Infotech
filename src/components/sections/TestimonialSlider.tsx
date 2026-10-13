"use client";

import { AnimatePresence, m } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { useState } from "react";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/cn";

type TestimonialSliderProps = {
  items: Testimonial[];
};

const arrowClasses =
  "flex size-12 items-center justify-center rounded-full border border-line bg-white text-ink shadow-soft transition hover:border-primary-700 hover:bg-primary-700 hover:text-white";

/**
 * One testimonial at a time with previous/next buttons and dots. It does not
 * auto-advance, so nothing moves unless the visitor asks it to.
 */
export function TestimonialSlider({ items }: TestimonialSliderProps) {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 1]);
  const item = items[index];

  const go = (step: number) =>
    setSlide(([current]) => [
      (current + step + items.length) % items.length,
      step,
    ]);

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      className="mx-auto mt-12 max-w-3xl"
    >
      <div
        aria-live="polite"
        aria-atomic="true"
        className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-7 shadow-soft sm:p-12"
      >
        <Quote
          className="size-10 text-accent-500"
          fill="currentColor"
          strokeWidth={0}
          aria-hidden="true"
        />
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <m.figure
            key={index}
            custom={direction}
            variants={{
              enter: (dir: number) => ({ opacity: 0, x: dir * 32 }),
              center: { opacity: 1, x: 0 },
              exit: (dir: number) => ({ opacity: 0, x: dir * -32 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mt-5"
          >
            <blockquote className="font-display text-xl leading-relaxed font-medium text-ink sm:text-2xl">
              <p>{item.quote}</p>
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-4">
              <span
                aria-hidden="true"
                className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-white"
              >
                {item.name.charAt(0)}
              </span>
              <span>
                <span className="block font-semibold text-ink">{item.name}</span>
                <span className="block text-sm text-muted">
                  {item.role}, {item.company}
                </span>
              </span>
            </figcaption>
          </m.figure>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className={arrowClasses}
        >
          <ArrowLeft className="size-5" aria-hidden="true" />
        </button>

        <div className="flex items-center">
          {items.map((entry, dot) => (
            <button
              key={`${entry.name}-${dot}`}
              type="button"
              aria-label={`Show testimonial ${dot + 1} of ${items.length}`}
              aria-current={dot === index ? "true" : undefined}
              onClick={() => setSlide([dot, dot >= index ? 1 : -1])}
              className="group flex size-8 items-center justify-center"
            >
              <span
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  dot === index
                    ? "w-7 bg-primary-700"
                    : "w-2.5 bg-primary-700/30 group-hover:bg-primary-700/60",
                )}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className={arrowClasses}
        >
          <ArrowRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
