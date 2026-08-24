import { cn } from "@/lib/utils";

interface WarrantyBadgeProps {
  className?: string;
}

/**
 * WarrantyBadge - Figma node `5-years-warranty-badge` inside FAQ (48:9426).
 *
 * 256×256 taupe (#968272) shield: corner radii 13/13/128/128 so the bottom
 * reads as a half-round crest. "WORKMANSHIP" sits at the top in Clash
 * Semibold 29, the 1 / Yr lockup in the middle, and "WARRANTY" curves along
 * the bottom arc via an SVG textPath.
 */
export default function WarrantyBadge({ className }: WarrantyBadgeProps) {
  return (
    <div
      className={cn(
        "relative flex h-[256px] w-[256px] flex-col items-center bg-[#968272]",
        "rounded-tl-[13px] rounded-tr-[13px] rounded-bl-[128px] rounded-br-[128px]",
        className,
      )}
      role="img"
      aria-label="One year workmanship warranty"
    >
      <span
        className="mt-[38px] font-clash text-[26px] font-semibold leading-none tracking-[0.01em] text-white"
        aria-hidden="true"
      >
        WORKMANSHIP
      </span>

      <span className="mt-3 flex items-end" aria-hidden="true">
        <span className="font-clash text-[96px] font-semibold leading-[0.85] text-white">
          1
        </span>
        <span className="font-clash text-[48px] font-medium leading-[1.2] text-white">
          Yr
        </span>
      </span>

      <svg
        viewBox="0 0 256 256"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <path id="warranty-arc" d="M 52 143 A 76 76 0 0 0 204 143" fill="none" />
        </defs>
        <text
          fill="#FFFFFF"
          className="font-clash"
          fontSize="24"
          fontWeight="600"
          letterSpacing="2"
        >
          <textPath href="#warranty-arc" startOffset="50%" textAnchor="middle">
            WARRANTY
          </textPath>
        </text>
      </svg>
    </div>
  );
}
