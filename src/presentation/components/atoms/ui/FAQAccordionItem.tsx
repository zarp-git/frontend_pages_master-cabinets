"use client";

import { useState } from "react";
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
 * FAQAccordionItem — Figma node 48:5492 / 17:3154
 * #3F2F22 dark toggle button, Times New Roman index, Clash Display question.
 * Full-width collapsible with smooth height transition.
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
      className={cn("w-full overflow-hidden rounded-[32px] bg-black/[0.04]", className)}
    >
      {/* Trigger row */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left transition-colors py-1.5 pr-4 pl-6 min-h-[108px]"
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        {/* Left: index + question */}
        <div className="flex flex-col gap-1 pr-4">
          <span
            className="text-[#958272] text-[16px] font-normal font-serif"
          >
            {displayIndex}
          </span>
          <span
            className="text-[#111827] font-medium text-[18px] sm:text-[24px] leading-[32px] font-clash"
          >
            {question}
          </span>
        </div>

        {/* Right: circular toggle button */}
        <span
          className="flex items-center justify-center shrink-0 w-10 h-10 rounded-full transition-transform duration-300 bg-[#3F2F22]"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn("w-4 h-4 transition-transform duration-300", open ? "rotate-45" : "rotate-0")}
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>

      {/* Answer body — animated height */}
      <div
        id={`faq-answer-${index}`}
        className={cn("overflow-hidden transition-all duration-300", open ? "max-h-[500px]" : "max-h-0")}
        aria-hidden={!open}
      >
        <div
          className="px-6 pb-6 text-[#4B5563] text-base leading-relaxed font-sans"
        >
          {answer}
        </div>
      </div>
    </div>
  );
}
