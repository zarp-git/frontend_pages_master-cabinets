"use client";

import { RiLoader4Line } from "@remixicon/react";
import { cn } from "@/lib/utils";

interface LoadMoreButtonProps {
  onClick: () => void;
  label?: string;
  className?: string;
}

/**
 * LoadMoreButton - Figma "LOAD MORE" pill on Reviews (60:18380) and Blog (48:11240).
 * Espresso #403023 pill with a spinner chip on the right.
 */
export default function LoadMoreButton({
  onClick,
  label = "Load More",
  className,
}: LoadMoreButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-3.5 rounded-full bg-[#403023] py-2 pl-5 pr-2",
        "transition-opacity hover:opacity-90",
        className,
      )}
    >
      <span className="font-sans text-[13px] uppercase leading-5 tracking-[2.1px] text-white">
        {label}
      </span>
      <span
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15"
        aria-hidden="true"
      >
        <RiLoader4Line className="h-4 w-4 text-white" />
      </span>
    </button>
  );
}
