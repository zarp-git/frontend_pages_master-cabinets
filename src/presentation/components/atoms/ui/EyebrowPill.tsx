import { cn } from "@/lib/utils";

interface EyebrowPillProps {
  children: React.ReactNode;
  /** Optional Times-italic index shown before a hairline divider, e.g. "02". */
  index?: string;
  /** Render for a taupe/dark surface (white text and hairlines). */
  tone?: "light" | "dark";
  className?: string;
}

/**
 * EyebrowPill — Figma `Eyebrow` component.
 *
 * pad 4/12 · bg rgba(0,0,0,.04) · fully rounded · Segoe UI 10/15 · ls 2 ·
 * #666666 · uppercase. The numbered variant prefixes a Times-italic index and
 * a 1px divider (About page, node 48:8801).
 */
export default function EyebrowPill({
  children,
  index,
  tone = "light",
  className,
}: EyebrowPillProps) {
  const isDark = tone === "dark";

  return (
    <span
      className={cn(
        "inline-flex w-fit shrink-0 items-center gap-3 self-start rounded-full px-3 py-1",
        isDark
          ? "bg-white/[0.06] shadow-[0_0_0_rgba(255,255,255,0.10)]"
          : "bg-black/[0.04] shadow-[0_0_0_rgba(0,0,0,0.05)]",
        className,
      )}
    >
      {index && (
        <>
          <span
            className={cn(
              "font-serif italic text-[11px] leading-4",
              isDark ? "text-white/50" : "text-black/40",
            )}
            aria-hidden="true"
          >
            {index}
          </span>
          <span
            className={cn(
              "h-3 w-px",
              isDark ? "bg-white/20" : "bg-black/10",
            )}
            aria-hidden="true"
          />
        </>
      )}
      <span
        className={cn(
          "font-sans text-[10px] uppercase leading-[15px] tracking-[2px]",
          isDark ? "text-white/70" : "text-[#666666]",
        )}
      >
        {children}
      </span>
    </span>
  );
}
