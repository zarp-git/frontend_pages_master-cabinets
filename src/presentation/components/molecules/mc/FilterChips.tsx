"use client";

import { cn } from "@/lib/utils";

interface FilterChipsProps<T extends string> {
  options: readonly { label: string; value: T }[];
  active: T;
  onChange: (value: T) => void;
  className?: string;
  ariaLabel?: string;
}

/**
 * FilterChips — Figma filter row on Gallery (60:12187) and Reviews (60:18380).
 *
 * pad 8/20 · radius full · Clash Display Medium 13/20 · centred.
 * Active: #042619 fill + matching border + white text.
 * Idle:   white fill + #E5DECD border + #5B4F45 text.
 */
export default function FilterChips<T extends string>({
  options,
  active,
  onChange,
  className,
  ariaLabel = "Filter",
}: FilterChipsProps<T>) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={cn("flex flex-wrap items-center justify-center gap-2", className)}
    >
      {options.map((option) => {
        const isActive = option.value === active;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            aria-pressed={isActive}
            className={cn(
              "rounded-full border px-5 py-2 font-clash text-[13px] font-medium leading-5 transition-colors",
              isActive
                ? "border-[#042619] bg-[#042619] text-white"
                : "border-[#E5DECD] bg-white text-[#5B4F45] hover:border-[#958272]",
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
