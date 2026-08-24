import Image from "next/image";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  /** Full name of the reviewer */
  authorName: string;
  /** Path or URL to the avatar image. Falls back to initials if not provided. */
  avatarSrc?: string;
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
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={i < rating ? "#FF4C00" : "#E5E7EB"}
          className="w-4 h-4"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function AuthorInitials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 text-white font-semibold text-sm"
      style={{ background: "#403023", fontFamily: "'Segoe UI', system-ui, sans-serif" }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

/**
 * ReviewCard — Figma node 45:4982
 * White card, 24px radius, shadow, avatar, star rating, quote, service/location tags.
 */
export default function ReviewCard({
  authorName,
  avatarSrc,
  rating = 5,
  quote,
  serviceTag,
  locationTag,
  className,
}: ReviewCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col gap-3 bg-white rounded-[24px] p-6",
        className,
      )}
      style={{
        border: "1px solid #EFEFEF",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.04)",
        width: "100%",
        maxWidth: "385px",
      }}
    >
      {/* Header: avatar + name + stars */}
      <div className="flex items-center gap-3">
        {avatarSrc ? (
          <Image
            src={avatarSrc}
            alt={`${authorName} avatar`}
            width={96}
            height={96}
            className="w-12 h-12 rounded-full object-cover shrink-0"
          />
        ) : (
          <AuthorInitials name={authorName} />
        )}
        <div className="flex flex-col gap-1">
          <span
            className="text-[#111827] font-bold text-[20px] leading-[17px]"
            style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 700 }}
          >
            {authorName}
          </span>
          <StarRating rating={rating} />
        </div>
      </div>

      {/* Quote body */}
      <p
        className="text-[#4B5563] text-[15px] leading-[22.5px] font-normal flex-1"
        style={{ fontFamily: "'Segoe UI', system-ui, sans-serif" }}
      >
        &ldquo;{quote}&rdquo;
      </p>

      {/* Footer tag row */}
      <div
        className="flex items-center justify-between pt-3"
        style={{ borderTop: "1px solid #F3F4F6" }}
      >
        <span
          className="text-[#968272] font-bold text-[13px] uppercase"
          style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 700 }}
        >
          {serviceTag}
        </span>
        <span
          className="text-[#968272] font-bold text-[13px] uppercase"
          style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", fontWeight: 700 }}
        >
          {locationTag}
        </span>
      </div>
    </article>
  );
}
