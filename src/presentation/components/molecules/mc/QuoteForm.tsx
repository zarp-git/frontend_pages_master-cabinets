"use client";

import { useState, useTransition } from "react";
import {
  RiUserLine,
  RiPhoneLine,
  RiHome4Line,
  RiChat3Line,
  RiArrowDownSLine,
  RiArrowRightUpLine,
  RiLoader4Line,
  RiCheckLine,
} from "@remixicon/react";
import { cn } from "@/lib/utils";
import { formatPhoneNumber } from "@/utils/phone-formatter";

interface QuoteFormProps {
  /** Glassmorphism variant (hero) vs solid card variant (blog sidebar) */
  variant?: "glass" | "solid";
  /** Optional title shown above form */
  showTitle?: boolean;
  /** Heading text when showTitle is set. Defaults to the Figma copy. */
  title?: string;
  className?: string;
  onSuccess?: () => void;
  /** Tags where the lead came from. */
  source?: string;
}

interface FormData {
  name: string;
  phone: string;
  space: string;
  message: string;
}

const INITIAL_FORM: FormData = { name: "", phone: "", space: "", message: "" };

/** Dropdown options for "Space to remodel" — mirrors the JB of SWFL capture form. */
const SPACE_OPTIONS = [
  "Kitchen",
  "Bathroom",
  "Whole home",
  "Walk-in closet",
  "Living space",
  "Outdoor living",
  "Other",
] as const;

// The lead endpoint requires a syntactically valid email, but this form only
// asks for a phone. Send a reserved .invalid address derived from the number —
// unique per lead, and obviously not a real inbox.
const placeholderEmail = (phone: string) =>
  `${phone.replace(/\D/g, "") || "unknown"}@no-email.invalid`;

/**
 * QuoteForm — Figma node 60:12819 / 48:5376, following the JB of Southwest
 * Florida capture-form pattern: icon-led pill fields, a real `<select>` for the
 * space (custom chevron, `invalid:` styling so the placeholder option matches
 * the other placeholders) and a single espresso submit.
 *
 * Glass variant: rgba(255,255,255,0.20) + backdrop-blur, used in the hero.
 * Solid variant: #F3F4F6, used in the blog sidebar.
 */
export default function QuoteForm({
  variant = "glass",
  showTitle = false,
  title = "Get your home remodel quote",
  className,
  onSuccess,
  source = "quote-form",
}: QuoteFormProps) {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const setField = (key: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const isValid =
    form.name.trim().length >= 2 &&
    form.phone.replace(/\D/g, "").length >= 10 &&
    form.space !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;
    setError(null);

    startTransition(async () => {
      try {
        const { submitLeadAction } = await import("@/server/actions");
        const result = await submitLeadAction({
          name: form.name.trim(),
          email: placeholderEmail(form.phone),
          phone: form.phone,
          message: [
            `Space to remodel: ${form.space}`,
            "---",
            form.message.trim() || "(no message)",
          ].join("\n"),
          source,
          data: { space: form.space, description: form.message.trim() },
        });

        if (result?.success) {
          setSubmitted(true);
          setForm(INITIAL_FORM);
          onSuccess?.();
        } else {
          setError("Something went wrong. Please try again or call us.");
        }
      } catch {
        setError("Something went wrong. Please try again or call us.");
      }
    });
  };

  const isGlass = variant === "glass";

  const fieldShell =
    "flex h-[50px] items-center gap-2.5 rounded-[20px] border border-[#DEDBD8] bg-white px-4 transition-colors focus-within:border-[#958272]";
  const control =
    "h-full w-full min-w-0 border-none bg-transparent font-clash text-[13px] font-medium text-[#403023] outline-none placeholder:text-[#786F6C] disabled:opacity-60";
  const iconClass = "h-4 w-4 shrink-0 text-[#786F6C]";

  return (
    <div
      className={cn(
        "rounded-[20px] p-3 sm:p-5",
        isGlass ? "mc-glass" : "border border-white bg-[#F3F4F6]",
        className,
      )}
    >
      {showTitle && (
        <h3 className="mb-4 font-clash text-[24px] font-medium uppercase leading-[25px] tracking-[-0.5px] text-black">
          {title}
        </h3>
      )}

      {submitted ? (
        <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#403023]">
            <RiCheckLine className="h-6 w-6 text-white" />
          </span>
          <p className="font-clash text-lg font-medium text-[#403023]">
            Quote request sent!
          </p>
          <p className="font-sans text-sm text-[#666666]">
            We&apos;ll reach out within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
          {/* Name */}
          <label className={fieldShell}>
            <span className="sr-only">Your name</span>
            <RiUserLine className={iconClass} aria-hidden="true" />
            <input
              type="text"
              autoComplete="name"
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setField("name", e.target.value)}
              disabled={isPending}
              required
              className={control}
            />
          </label>

          {/* Phone */}
          <label className={fieldShell}>
            <span className="sr-only">Phone number</span>
            <RiPhoneLine className={iconClass} aria-hidden="true" />
            <input
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              maxLength={14}
              placeholder="Phone number"
              value={form.phone}
              onChange={(e) => setField("phone", formatPhoneNumber(e.target.value))}
              disabled={isPending}
              required
              className={control}
            />
          </label>

          {/* Space to remodel — a real dropdown at every breakpoint.
              `required` + `invalid:` keeps the empty placeholder option in the
              same muted tone as the other placeholders, and the chevron
              replaces the native arrow removed by `appearance-none`. */}
          <label className={fieldShell}>
            <span className="sr-only">Space to remodel</span>
            <RiHome4Line className={iconClass} aria-hidden="true" />
            <select
              value={form.space}
              onChange={(e) => setField("space", e.target.value)}
              disabled={isPending}
              required
              className={cn(control, "appearance-none invalid:text-[#786F6C]")}
            >
              <option value="" disabled>
                Space to remodel
              </option>
              {SPACE_OPTIONS.map((option) => (
                <option key={option} value={option} className="text-[#403023]">
                  {option}
                </option>
              ))}
            </select>
            <RiArrowDownSLine className={iconClass} aria-hidden="true" />
          </label>

          {/* Message */}
          <label className="flex h-[93px] items-start gap-2.5 rounded-[20px] border border-[#DEDBD8] bg-white px-4 py-4 transition-colors focus-within:border-[#958272]">
            <span className="sr-only">Tell us about your home</span>
            <RiChat3Line className={iconClass} aria-hidden="true" />
            <textarea
              placeholder="Tell us about your home"
              value={form.message}
              onChange={(e) => setField("message", e.target.value)}
              disabled={isPending}
              className={cn(control, "resize-none leading-5")}
            />
          </label>

          {error && (
            <div className="rounded-[16px] border border-red-200 bg-red-50 p-3">
              <p className="font-sans text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={!isValid || isPending}
            className={cn(
              "flex h-[50px] w-full items-center justify-between gap-3 rounded-[20px] bg-[#403023] pl-5 pr-[7px]",
              "transition-colors duration-200 hover:bg-[#2C1F14] disabled:opacity-60 disabled:hover:bg-[#403023]",
            )}
          >
            <span className="font-sans text-[11px] uppercase leading-4 tracking-[1.8px] text-white">
              {isPending ? "Submitting…" : "Submit for a free quote"}
            </span>
            <span
              className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-white/15"
              aria-hidden="true"
            >
              {isPending ? (
                <RiLoader4Line className="h-4 w-4 animate-spin text-white" />
              ) : (
                <RiArrowRightUpLine className="h-4 w-4 text-white" />
              )}
            </span>
          </button>
        </form>
      )}
    </div>
  );
}
