import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** First line, rendered entirely in Clash Display. */
  line1: string;
  /** Second line - the part before the italic accent. */
  line2?: string;
  /** The trailing words rendered in Times New Roman italic (Figma accent run). */
  accent?: string;
  /** Keep the accent on the same visual line as line1 (e.g. "Featured Work *Gallery*"). */
  accentInline?: boolean;
  /** Optional supporting paragraph below the heading. */
  subtitle?: React.ReactNode;
  align?: "left" | "center";
  /** Figma sizes: 48 (default), 60 (Materials/FAQ), 64 (Features). */
  size?: 48 | 60 | 64;
  /** Colour of the heading text. Figma uses #403023 on the homepage, #000000
   *  on the About/Reviews pages, and #FFFFFF on taupe panels. */
  tone?: "espresso" | "black" | "white";
  as?: "h1" | "h2" | "h3";
  className?: string;
  subtitleClassName?: string;
}

const SIZE_CLASS: Record<48 | 60 | 64, string> = {
  48: "text-[clamp(30px,3.5vw,48px)] leading-[1.29]",
  60: "text-[clamp(32px,4.2vw,60px)] leading-[1.03]",
  64: "text-[clamp(34px,4.5vw,64px)] leading-[1.1]",
};

/**
 * SectionHeading - the Master Cabinets heading lockup.
 *
 * Figma pattern (verified against every section of node 17:1781, 48:8801,
 * 60:12187, 60:18380, 48:11240, 48:10112): Clash Display Medium with a trailing
 * run switched to Times New Roman Italic at the same font size.
 */
export default function SectionHeading({
  line1,
  line2,
  accent,
  accentInline = false,
  subtitle,
  align = "left",
  size = 48,
  tone = "espresso",
  as: Tag = "h2",
  className,
  subtitleClassName,
}: SectionHeadingProps) {
  const toneClass =
    tone === "white"
      ? "text-white"
      : tone === "black"
        ? "text-black"
        : "text-[#403023]";

  return (
    <div
      className={cn(
        "flex flex-col",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <Tag
        className={cn(
          "font-clash font-medium tracking-[-0.025em]",
          SIZE_CLASS[size],
          toneClass,
        )}
      >
        <span className="block">
          {line1}
          {accentInline && accent && (
            <>
              {" "}
              <span className="font-serif italic font-normal tracking-normal">
                {accent}
              </span>
            </>
          )}
        </span>
        {!accentInline && (line2 || accent) && (
          <span className="block">
            {line2}
            {line2 && accent ? " " : null}
            {accent && (
              <span className="font-serif italic font-normal tracking-normal">
                {accent}
              </span>
            )}
          </span>
        )}
      </Tag>

      {subtitle && (
        <p
          className={cn(
            "mt-6 font-sans text-[clamp(16px,1.4vw,20px)] leading-[1.62] text-[#666666]",
            align === "center" ? "max-w-[672px]" : "max-w-[725px]",
            subtitleClassName,
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
