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
 * #403023 dark toggle button, Times New Roman index, Clash Display question.
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
      className={cn("w-full overflow-hidden", className)}
      style={{
        borderRadius: "32px",
        background: "rgba(0,0,0,0.04)",
      }}
    >
      {/* Trigger row */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left transition-colors"
        style={{
          padding: "6px 16px 6px 24px",
          minHeight: "108px",
        }}
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        {/* Left: index + question */}
        <div className="flex flex-col gap-1 pr-4">
          <span
            className="text-[#968272] text-[16px] font-normal"
            style={{ fontFamily: "Times New Roman, Times, serif" }}
          >
            {displayIndex}
          </span>
          <span
            className="text-[#111827] font-medium text-[18px] sm:text-[24px] leading-[32px]"
            style={{
              fontFamily: "var(--font-clash, sans-serif)",
              fontWeight: 500,
            }}
          >
            {question}
          </span>
        </div>

        {/* Right: circular toggle button */}
        <span
          className="flex items-center justify-center shrink-0 w-10 h-10 rounded-full transition-transform duration-300"
          style={{ background: "#403023" }}
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
            className="w-4 h-4 transition-transform duration-300"
            style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>

      {/* Answer body — animated height */}
      <div
        id={`faq-answer-${index}`}
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "500px" : "0px" }}
        aria-hidden={!open}
      >
        <div
          className="px-6 pb-6 text-[#4B5563] text-base leading-relaxed"
          style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
        >
          {answer}
        </div>
      </div>
    </div>
  );
}
