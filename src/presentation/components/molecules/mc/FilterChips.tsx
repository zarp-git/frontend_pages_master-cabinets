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
 * FilterChips - Figma filter row on Gallery (60:12187) and Reviews (60:18380).
 *
 * pad 8/20 · radius full · Clash Display Medium 13/20 · centred.
 * Active: #403023 espresso fill + matching border + white text.
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
      className={cn(
        // A snap rail on phones so eight chips never stack into three rows,
        // then a centred wrapped row once there is space.
        "flex w-full min-w-0 snap-x items-center gap-2 overflow-x-auto scroll-smooth",
        "-mx-4 px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        "lg:mx-0 lg:w-auto lg:flex-wrap lg:justify-center lg:overflow-visible lg:px-0",
        className,
      )}
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
              "shrink-0 snap-start whitespace-nowrap rounded-full border px-5 py-2 font-clash text-[13px] font-medium leading-5 transition-colors",
              isActive
                ? "border-[#403023] bg-[#403023] text-white"
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
