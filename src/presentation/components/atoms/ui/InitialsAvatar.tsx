import { cn } from "@/lib/utils";

/**
 * Avatar palette. Eight hues spread evenly around the wheel (0, 19, 34, 87,
 * 160, 201, 268, 339) so a grid of nine cards never reads as one colour - an
 * earlier warm-only set left six of nine reviewers in near-identical browns.
 *
 * They share a narrow lightness band, 4.9:1 to 6.8:1 against white, which is
 * what gives the set its family resemblance and keeps every initial legible.
 */
const PALETTE = [
  "#7B4F4F", // brick
  "#845A47", // terracotta
  "#8C6A3F", // ochre
  "#59614F", // sage
  "#3F6B5C", // teal
  "#4F6B7A", // slate
  "#6A5B7B", // plum
  "#8A5A6B", // mauve
] as const;

/**
 * FNV-1a, unsigned. The point is that it is a pure function of the name, so the
 * server and the client pick the same colour and React reports no hydration
 * mismatch.
 *
 * `>>> 0` rather than Math.abs: Math.imul returns a signed 32-bit int, and
 * folding the negative half onto the positive one collapses the distribution -
 * over the current reviewer list that spent four of twelve names on a single
 * swatch. Unsigned spreads them across seven of the eight.
 */
function hash(value: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < value.length; i += 1) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** "Emily R." -> "ER", "Sofia" -> "S". */
function initialsOf(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] ?? "")
    .join("")
    .replace(/[^A-Za-z]/g, "")
    .toUpperCase();
}

interface InitialsAvatarProps {
  name: string;
  /** Tailwind size classes. Defaults to the 48px review-card avatar. */
  className?: string;
}

/**
 * InitialsAvatar - a Google Meet style monogram: the person's initials on a
 * flat colour picked deterministically from their name, so the same reviewer
 * always gets the same swatch.
 */
export default function InitialsAvatar({
  name,
  className,
}: InitialsAvatarProps) {
  const initials = initialsOf(name);
  const background = PALETTE[hash(name) % PALETTE.length];

  return (
    <span
      aria-hidden="true"
      style={{ backgroundColor: background }}
      className={cn(
        "flex h-12 w-12 shrink-0 select-none items-center justify-center rounded-full",
        "font-clash text-[16px] font-medium leading-none text-white",
        className,
      )}
    >
      {initials}
    </span>
  );
}
