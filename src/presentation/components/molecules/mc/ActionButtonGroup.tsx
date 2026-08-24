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
  /** Additional className for the wrapper */
  className?: string;
}

/**
 * ActionButtonGroup — Figma `BUTTONS` component (48:8504 and every instance).
 *
 * Primary: #403023 espresso pill · pad 7/7/7/19 · gap 14 · Segoe 13/20 ls 2.1
 * uppercase white · trailing 34px rgba(255,255,255,.15) chip.
 * Secondary: #F3F4F6 pill · same metrics · #403023 label · trailing 34px
 * #E5E7EB chip.
 *
 * Mobile: the pair stacks into a full-width column and each pill keeps its
 * label and chip pushed to opposite edges. From `sm` up it becomes the
 * side-by-side, content-hugging row the design kit specifies.
 */
export default function ActionButtonGroup({
  ctaLabel = "Get Our Free Quote",
  ctaHref = "#quote",
  phoneDisplay = PHONE_SECONDARY.display.replace("+1 ", ""),
  phoneHref = PHONE_SECONDARY.href,
  className,
}: ActionButtonGroupProps) {
  const pill = cn(
    "flex w-full items-center justify-between gap-3 rounded-full",
    "min-h-[48px] py-[7px] pl-5 pr-[7px] transition-colors duration-200",
    "sm:inline-flex sm:w-auto sm:max-w-full sm:gap-3.5",
  );
  const label =
    "min-w-0 truncate font-sans text-[12px] uppercase leading-5 tracking-[1.6px] sm:text-[13px] sm:tracking-[2.1px]";

  return (
    <div
      className={cn(
        "flex w-full flex-col items-stretch gap-3",
        "sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-5",
        className,
      )}
    >
      {/* Primary — espresso pill */}
      <Link
        href={ctaHref}
        className={cn(pill, "bg-[#403023] text-white hover:bg-[#2C1F14]")}
      >
        <span className={cn(label, "text-white")}>{ctaLabel}</span>
        <span
          className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-white/15"
          aria-hidden="true"
        >
          <RiArrowRightUpLine className="h-4 w-4 text-white" />
        </span>
      </Link>

      {/* Secondary — phone pill */}
      <Link
        href={phoneHref}
        className={cn(pill, "bg-[#F3F4F6] hover:bg-[#E5E7EB]")}
      >
        <span className={cn(label, "text-[#403023]")}>{phoneDisplay}</span>
        <span
          className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#E5E7EB]"
          aria-hidden="true"
        >
          <RiPhoneLine className="h-4 w-4 text-[#403023]" />
        </span>
      </Link>
    </div>
  );
}
