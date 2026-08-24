import { cn } from "@/lib/utils";

interface BezelProps {
  children: React.ReactNode;
  /** Outer bezel padding. Figma uses 6px on large surfaces, 4px on small pills. */
  size?: "sm" | "md";
  /** Elevation. "flat" = subtle 0/0/0 ring, "raised" = 0 24px 80px drop. */
  elevation?: "flat" | "raised";
  /** Background of the inner surface. Defaults to white. */
  innerClassName?: string;
  className?: string;
  as?: "div" | "li" | "article" | "section";
}

/**
 * Bezel — the recurring "framed surface" primitive from the Master Cabinets
 * design kit (Figma: every `Bezel` > `Container` pair).
 *
 * Outer:  padding 4/6px · bg rgba(0,0,0,.04) · radius 19/32 · soft drop shadow
 * Inner:  bg #FFFFFF · radius 16/26 · 0 1px 1px rgba(255,255,255,.6) inner highlight
 */
export default function Bezel({
  children,
  size = "md",
  elevation = "flat",
  innerClassName,
  className,
  as: Tag = "div",
}: BezelProps) {
  return (
    <Tag
      className={cn(
        "bg-black/[0.04]",
        size === "md" ? "p-1.5 rounded-[32px]" : "p-1 rounded-[19px]",
        elevation === "raised"
          ? "shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
          : "shadow-[0_0_0_rgba(0,0,0,0.05)]",
        className,
      )}
    >
      <div
        className={cn(
          "h-full w-full bg-white shadow-[0_1px_1px_rgba(255,255,255,0.60)]",
          size === "md" ? "rounded-[26px]" : "rounded-[16px]",
          innerClassName,
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
