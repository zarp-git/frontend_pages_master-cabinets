"use client";

import { cn } from "@/lib/utils";

interface ScrollCueProps {
  /** Label beside the mouse. Figma copy is "Scroll Over". */
  label?: string;
  className?: string;
}

/**
 * ScrollCue - Figma node 45:4930 (`relative-animated-scroll-over`).
 *
 * 130x33 row, 10px gap, centred: a 24px mouse outline beside "Scroll Over" in
 * Segoe 20/32, both in #F3F4F6. The layer name promises animation, so the
 * scroll wheel travels down the body on a loop.
 *
 * It is a real button rather than decoration - clicking it advances to the
 * section below, which is what the affordance implies. Reduced-motion stops
 * the wheel and swaps the smooth scroll for an instant jump.
 */
export default function ScrollCue({
  label = "Scroll Over",
  className,
}: ScrollCueProps) {
  const handleClick = () => {
    const hero = document.querySelector("section[aria-label]");
    const next = hero?.nextElementSibling;
    if (!next) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    next.scrollIntoView({
      behavior: reduced ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "group inline-flex items-center gap-2.5 rounded-full px-2 py-1",
        "transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60",
        className,
      )}
    >
      <span className="sr-only">Scroll to the next section</span>

      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* 14x20 rounded body, 2px stroke - the Figma vector */}
        <rect
          x="5"
          y="2"
          width="14"
          height="20"
          rx="7"
          stroke="#F3F4F6"
          strokeWidth="2"
        />
        {/* Wheel: rides down the body and fades out, then restarts */}
        <circle
          cx="12"
          cy="7.5"
          r="1.6"
          fill="#F3F4F6"
          className="animate-scroll-wheel motion-reduce:animate-none"
        />
      </svg>

      <span className="whitespace-nowrap font-sans text-[16px] leading-[1.6] text-[#F3F4F6] sm:text-[20px] sm:leading-8">
        {label}
      </span>
    </button>
  );
}
