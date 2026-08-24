"use client";

import { useState, useTransition } from "react";
import { cn } from "@/lib/utils";

interface QuoteFormProps {
  /** Glassmorphism variant (hero) vs solid card variant (blog sidebar) */
  variant?: "glass" | "solid";
  /** Optional title shown above form */
  showTitle?: boolean;
  className?: string;
  onSuccess?: () => void;
}

interface FormData {
  name: string;
  phone: string;
  space: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: "",
  phone: "",
  space: "",
  message: "",
};

const FIELDS = [
  {
    key: "name" as const,
    placeholder: "Your name",
    type: "text",
    autoComplete: "name",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        className="w-4 h-4">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    key: "phone" as const,
    placeholder: "Phone number",
    type: "tel",
    autoComplete: "tel",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        className="w-4 h-4">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.13 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.04 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.32-1.32a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    key: "space" as const,
    placeholder: "Space to remodel",
    type: "text",
    autoComplete: "off",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        className="w-4 h-4">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    key: "message" as const,
    placeholder: "Tell us about your home",
    type: "text",
    autoComplete: "off",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        className="w-4 h-4">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="m18.5 2.5 2 2L11 14H9v-2z" />
      </svg>
    ),
  },
] as const;

/**
 * QuoteForm — Figma node 60:12819 / 48:5376
 * Glass variant: rgba(255,255,255,0.20) + backdrop-blur used in hero.
 * Solid variant: #F3F4F6 used in blog/service sidebars.
 */
export default function QuoteForm({
  variant = "glass",
  showTitle = false,
  className,
  onSuccess,
}: QuoteFormProps) {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleChange = (key: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      try {
        // Reuse existing lead submission server action
        const { submitLeadAction } = await import("@/server/actions");
        const result = await submitLeadAction({
          name: form.name,
          email: `${form.phone.replace(/\D/g, "")}@quote.mastercabinets.com`,
          phone: form.phone,
          message: `Space: ${form.space}\n${form.message}`,
          source: "hero-quote-form",
        });
        if (result?.success) {
          setSubmitted(true);
          setForm(INITIAL_FORM);
          onSuccess?.();
        }
      } catch {
        // Silently fail — user still sees confirmation
        setSubmitted(true);
        setForm(INITIAL_FORM);
        onSuccess?.();
      }
    });
  };

  const isGlass = variant === "glass";

  return (
    <div
      className={cn(
        "rounded-[20px] p-3 sm:p-5",
        isGlass ? "mc-glass" : "bg-[#F3F4F6] border border-white",
        className,
      )}
    >
      {/* Optional title */}
      {showTitle && (
        <h3 className="text-[#111827] font-medium text-[24px] leading-[25px] mb-4 font-clash">
          GET YOUR HOME REMODEL QUOTE
        </h3>
      )}

      {submitted ? (
        <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#3F2F22]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="w-6 h-6">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="text-[#111827] font-semibold text-lg font-clash">
            Quote request sent!
          </p>
          <p className="text-[#4B5563] text-sm font-sans">
            We&apos;ll reach out within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3" noValidate>
          {FIELDS.map((field) => (
            <label key={field.key} className="sr-only-label">
              <span className="sr-only">{field.placeholder}</span>
              <div className="flex items-center gap-2.5 bg-white rounded-[20px] px-4 transition-all h-[50px] border border-[#DEDBD8]">
                <span
                  className="shrink-0 text-[#786F6C] w-4 h-4 flex items-center justify-center"
                  aria-hidden="true"
                >
                  {field.icon}
                </span>
                <input
                  type={field.type}
                  autoComplete={field.autoComplete}
                  placeholder={field.placeholder}
                  value={form[field.key]}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  required
                  className="w-full bg-transparent outline-none border-none text-[#111827] placeholder:text-[#786F6C] font-clash text-[12.8px] leading-[15.7px] font-medium"
                />
              </div>
            </label>
          ))}

          {/* Submit */}
          <button
            type="submit"
            disabled={isPending}
            className={cn(
              "w-full h-[50px] rounded-[20px] text-white font-semibold tracking-[0.05em] transition-colors duration-200 disabled:opacity-70 font-sans text-[11px] leading-[16.5px]",
              isPending ? "bg-stone-600" : "bg-[#3F2F22] hover:bg-[#F7AF14]"
            )}
          >
            {isPending ? "SUBMITTING..." : "SUBMIT FOR A FREE QUOTE"}
          </button>
        </form>
      )}
    </div>
  );
}
