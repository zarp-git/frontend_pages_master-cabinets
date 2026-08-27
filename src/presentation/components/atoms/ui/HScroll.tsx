import { cn } from "@/lib/utils";

interface HScrollProps {
  children: React.ReactNode;
  /**
   * Layout applied once the list stops scrolling - e.g.
   * "sm:grid sm:grid-cols-2" or "lg:flex-wrap". Omit to scroll at every width.
   */
  expandedClassName?: string;
  /** Gap between items. Defaults to 12px (gap-3). */
  gapClassName?: string;
  /**
   * Horizontal bleed so the rail runs edge to edge on small screens while its
   * first and last items still clear the page gutter.
   */
  bleedClassName?: string;
  /** Vertical headroom so item shadows are not sliced by the scroll clip. */
  headroomClassName?: string;
  className?: string;
  ariaLabel?: string;
}

/**
 * HScroll - the shared horizontal rail used for every list in the kit:
 * service pills, filter chips, value cards, pricing pillars and material rows.
 *
 * Snap scrolling with the scrollbar hidden, edge bleed so items run to the
 * screen edge, and vertical padding pulled back with a negative margin so card
 * shadows are not clipped by the scroll container (the same fix the reviews
 * and gallery rails needed).
 *
 * Items should carry `snap-start` plus their own width - typically
 * `w-[78%] shrink-0` on mobile, released at the breakpoint used by
 * `expandedClassName`.
 */
export default function HScroll({
  children,
  expandedClassName,
  gapClassName = "gap-3",
  bleedClassName = "-mx-4 px-4 sm:-mx-8 sm:px-8",
  headroomClassName = "-my-3 py-3",
  className,
  ariaLabel,
}: HScrollProps) {
  return (
    <div
      role={ariaLabel ? "group" : undefined}
      aria-label={ariaLabel}
      className={cn(
        "flex w-full min-w-0 snap-x snap-mandatory overflow-x-auto scroll-smooth",
        "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        gapClassName,
        bleedClassName,
        headroomClassName,
        // Once the list expands it is no longer a rail. Pass the full set of
        // responsive resets here, e.g.
        // "lg:mx-0 lg:grid lg:grid-cols-2 lg:overflow-visible lg:px-0 lg:snap-none".
        expandedClassName,
        className,
      )}
    >
      {children}
    </div>
  );
}
