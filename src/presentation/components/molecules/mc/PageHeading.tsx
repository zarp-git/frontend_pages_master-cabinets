import { cn } from "@/lib/utils";

interface PageHeadingProps {
  /** Small uppercase kicker line — Clash Display Medium 32. */
  kicker: string;
  /** Display line — Times New Roman Italic 77. */
  display: string;
  className?: string;
  as?: "h1" | "h2";
}

/**
 * PageHeading — the page-level lockup used by Gallery (60:12187) and
 * Blog (48:11240).
 *
 * Line 1: Clash Display Medium 32/32, uppercase, #2C1F14, centered.
 * Line 2: Times New Roman Italic 77/74, letter-spacing -1.5, #000000.
 */
export default function PageHeading({
  kicker,
  display,
  className,
  as: Tag = "h1",
}: PageHeadingProps) {
  return (
    <Tag
      className={cn("flex flex-col items-center gap-3.5 text-center", className)}
    >
      <span className="font-clash text-[clamp(20px,2.4vw,32px)] font-medium leading-none text-[#2C1F14]">
        {kicker}
      </span>
      <span className="font-serif text-[clamp(38px,5.4vw,77px)] italic leading-[0.96] tracking-[-1.5px] text-black">
        {display}
      </span>
    </Tag>
  );
}
