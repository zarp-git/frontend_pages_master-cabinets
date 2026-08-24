import Link from "next/link";
import { RiArrowRightUpLine, RiPhoneLine } from "@remixicon/react";
import { cn } from "@/lib/utils";
import { PHONE_SECONDARY } from "@/constants/business-info";

interface ActionButtonGroupProps {
  /** CTA label. Defaults to "Get Our Free Quote" */
  ctaLabel?: string;
  /** href for CTA. Defaults to "#quote" */
  ctaHref?: string;
  /** Phone to display in secondary pill. Defaults to PHONE_SECONDARY.display */
  phoneDisplay?: string;
  /** href for phone pill */
  phoneHref?: string;
  /** Stack buttons vertically on mobile (default: true) */
  stackOnMobile?: boolean;
  /** Additional className for the wrapper */
  className?: string;
}

/**
 * ActionButtonGroup — Figma node 48:8504 (BUTTONS)
 * Primary #FF4C00 pill CTA + secondary grey phone pill.
 * ZERO inline styles.
 */
export default function ActionButtonGroup({
  ctaLabel = "Get Our Free Quote",
  ctaHref = "#quote",
  phoneDisplay = PHONE_SECONDARY.display.replace("+1 ", ""),
  phoneHref = PHONE_SECONDARY.href,
  stackOnMobile = true,
  className,
}: ActionButtonGroupProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-4",
        stackOnMobile ? "flex-col sm:flex-row w-full sm:w-auto" : "flex-row",
        className,
      )}
    >
      {/* Primary CTA — orange pill */}
      <Link
        href={ctaHref}
        className={cn(
          "group inline-flex items-center justify-between gap-3 rounded-[999px] transition-all duration-200",
          "bg-[#FF4C00] border border-black text-white",
          "pl-5 pr-2 py-2 min-w-[160px] min-h-[48px] font-sans",
          "hover:bg-[#E04300] hover:scale-[1.02]",
          "[transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
          stackOnMobile ? "w-full sm:w-auto" : "",
        )}
      >
        <span className="text-white font-normal text-[13.2px] leading-[19.8px] whitespace-nowrap font-sans">
          {ctaLabel}
        </span>
        {/* Trailing arrow badge */}
        <span
          className="flex items-center justify-center w-8 h-8 rounded-full bg-black shrink-0"
          aria-hidden="true"
        >
          <RiArrowRightUpLine className="w-4 h-4 text-white" />
        </span>
      </Link>

      {/* Secondary phone pill */}
      <Link
        href={phoneHref}
        className={cn(
          "inline-flex items-center gap-3 rounded-[999px] transition-all duration-200",
          "bg-[#F3F4F6] border border-[#E5DECD] font-sans",
          "pl-5 pr-2 py-2 min-w-[160px] min-h-[48px]",
          "hover:bg-[#E5E7EB] hover:border-[#DEDBD8]",
          stackOnMobile ? "w-full sm:w-auto justify-center sm:justify-start" : "",
        )}
      >
        {/* Leading icon badge */}
        <span
          className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3F2F22] shrink-0"
          aria-hidden="true"
        >
          <RiPhoneLine className="w-4 h-4 text-white" />
        </span>
        <span className="text-[#111827] font-normal text-[13.2px] leading-[19.8px] whitespace-nowrap font-sans">
          {phoneDisplay}
        </span>
      </Link>
    </div>
  );
}
