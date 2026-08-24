import Image from "next/image";
import { cn } from "@/lib/utils";
import InitialsAvatar from "@/presentation/components/atoms/ui/InitialsAvatar";

interface ReviewCardProps {
  /** Full name of the reviewer */
  authorName: string;
  /** Star rating 1–5 */
  rating?: number;
  /** The review quote body */
  quote: string;
  /** Service type tag e.g. "KITCHEN REMODELING" */
  serviceTag: string;
  /** Location tag e.g. "BONITA, FL" */
  locationTag: string;
  className?: string;
}

function StarRating({ rating = 5 }: { rating?: number }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={i < rating ? "#F7AF14" : "#E5E7EB"}
          className="h-[21px] w-[21px]"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/**
 * ReviewCard - Figma node 45:4982 (ReviewCard instance).
 *
 * White card · radius 24 · border #EFEFEF · shadow 0 9 22 rgba(40,31,19,.06)
 * pad 24 · gap 12. Header is space-between: avatar + name on the left, a
 * floating white Google badge on the right. Stars sit on their own row, the
 * quote uses Segoe 15/22 #39302A, and the footer holds two #EFEFEF pills.
 */
export default function ReviewCard({
  authorName,
  rating = 5,
  quote,
  serviceTag,
  locationTag,
  className,
}: ReviewCardProps) {
  return (
    <article
      className={cn(
        "flex w-full max-w-[385px] flex-col gap-3 rounded-[24px] border border-[#EFEFEF] bg-white p-6",
        "shadow-[0_9px_22px_rgba(40,31,19,0.06)]",
        className,
      )}
    >
      {/* Header: avatar + name (left) · Google badge (right) */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <InitialsAvatar name={authorName} />
          <span className="font-sans text-[20px] font-bold leading-[1.1] text-[#111827]">
            {authorName}
          </span>
        </div>

        <span
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_13px_rgba(30,24,18,0.12)]"
          aria-hidden="true"
        >
          <Image
            src="/images/svg/google-icon.svg"
            alt=""
            width={24}
            height={24}
            className="h-6 w-6"
          />
        </span>
      </div>

      <StarRating rating={rating} />

      <p className="flex-1 font-sans text-[15px] font-normal leading-[22px] text-[#39302A]">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Footer tag pills */}
      <div className="flex flex-wrap items-center gap-4">
        <span className="inline-flex items-center rounded-full bg-[#EFEFEF] px-3 py-1 font-sans text-[13px] font-bold uppercase leading-[20px] text-[#958272]">
          {serviceTag}
        </span>
        <span className="inline-flex items-center rounded-full bg-[#EFEFEF] px-3 py-1 font-sans text-[13px] font-bold uppercase leading-[20px] text-[#958272]">
          {locationTag}
        </span>
      </div>
    </article>
  );
}
