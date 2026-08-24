"use client";

import { useState } from "react";
import { RiArrowRightUpLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

interface FAQAccordionItemProps {
  /** Zero-based index for display (shows as "01", "02", ...) */
  index: number;
  question: string;
  answer: string;
  /** Whether this item starts open */
  defaultOpen?: boolean;
  className?: string;
}

/**
 * FAQAccordionItem - Figma node 48:5492 (faq-item).
 *
 * Bezel: pad 6 · bg rgba(0,0,0,.04) · radius 32.
 * Surface: white · radius 26 · row pad 28/32 · space-between · gap 24.
 * Left: Times-italic numeral + Clash question. Right: 40px rgba(0,0,0,.04)
 * circle holding an arrow-up-right that rotates when the panel opens.
 */
export default function FAQAccordionItem({
  index,
  question,
  answer,
  defaultOpen = false,
  className,
}: FAQAccordionItemProps) {
  const [open, setOpen] = useState(defaultOpen);
  const displayIndex = String(index + 1).padStart(2, "0");

  return (
    <div
      className={cn(
        "w-full rounded-[32px] bg-black/[0.04] p-1.5 shadow-[0_0_0_rgba(0,0,0,0.05)]",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[26px] bg-white shadow-[0_1px_1px_rgba(255,255,255,0.60)]">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-6 px-6 py-7 text-left sm:px-8"
          aria-expanded={open}
          aria-controls={`faq-answer-${index}`}
        >
          <span className="flex items-center gap-4">
            <span
              className="font-serif italic text-[16px] text-[#958272]"
              aria-hidden="true"
            >
              {displayIndex}
            </span>
            <span className="font-clash text-[17px] font-medium leading-[1.33] text-[#403023] sm:text-[24px]">
              {question}
            </span>
          </span>

          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/[0.04] shadow-[0_0_0_rgba(0,0,0,0.05)]"
            aria-hidden="true"
          >
            <RiArrowRightUpLine
              className={cn(
                "h-5 w-5 text-[#403023] transition-transform duration-300",
                open ? "rotate-90" : "rotate-0",
              )}
            />
          </span>
        </button>

        <div
          id={`faq-answer-${index}`}
          className={cn(
            "grid transition-all duration-300 ease-out",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
          aria-hidden={!open}
        >
          <div className="overflow-hidden">
            <p className="px-6 pb-7 font-sans text-[16px] leading-[1.6] text-[#666666] sm:px-8">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
