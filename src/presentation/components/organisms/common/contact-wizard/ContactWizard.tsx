"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  RiPhoneLine,
  RiArrowRightUpLine,
  RiArrowLeftLine,
  RiArrowDownSLine,
  RiLoader4Line,
  RiCheckLine,
  RiUserLine,
  RiMailLine,
  RiMapPinLine,
  RiChat3Line,
} from "@remixicon/react";
import { PHONE, SERVICE_CITIES } from "@/constants/business-info";
import { SERVICE_CHOICE_LABELS } from "@/constants/services-offered";
import { formatPhoneNumber } from "@/utils/phone-formatter";
import { submitLeadAction } from "@/server/actions";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// ContactWizard — the 3-step lead form.
//
// Ported from the JB of Southwest Florida build (the sibling remodeling site)
// and restyled onto the Master Cabinets kit: Clash Display headings, espresso
// #403023 actions, #E5DECD hairlines and the bezel surface treatment.
//
// It lives here rather than inside the Contact page so the page and any modal
// entry point render the exact same flow. `source` tags where the lead came
// from; `prefill` seeds the fields from an inline form that handed off.
// ---------------------------------------------------------------------------

const PREFERENCES = [
  { value: "phone", label: "Phone call" },
  { value: "text", label: "Text message" },
  { value: "email", label: "Email" },
] as const;

const TIMELINES = [
  { value: "asap", label: "As soon as possible" },
  { value: "soon", label: "1–3 months" },
  { value: "planning", label: "Just planning" },
] as const;

const BUDGETS = [
  { value: "unsure", label: "Not sure yet" },
  { value: "u10", label: "Under $10k" },
  { value: "10-30", label: "$10k – $30k" },
  { value: "30-75", label: "$30k – $75k" },
  { value: "75+", label: "$75k +" },
] as const;

const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name")
    .max(100, "Name must be less than 100 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  preference: z.enum(["phone", "text", "email"]),
  // Remodels often span trades, so more than one service can be picked.
  service: z.array(z.string()).min(1, "Please choose at least one service"),
  city: z.string().min(2, "Please enter your city"),
  timeline: z.enum(["asap", "soon", "planning"]),
  description: z.string().min(10, "Tell us a little more about the project"),
  budget: z.string().optional(),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const STEPS = [
  { id: 1, label: "About you" },
  { id: 2, label: "Your project" },
  { id: 3, label: "Details" },
] as const;

const STEP_FIELDS: Record<number, (keyof ContactFormValues)[]> = {
  1: ["fullName", "phone", "email", "preference"],
  2: ["service", "city", "timeline"],
  3: ["description"],
};

/** Values an inline form can hand off when it opens the wizard. */
export interface ContactWizardPrefill {
  fullName?: string;
  phone?: string;
  email?: string;
  service?: string[];
  description?: string;
}

interface ContactWizardProps {
  source: string;
  prefill?: ContactWizardPrefill;
  /** Called when a link inside the wizard navigates away (modal use). */
  onNavigate?: () => void;
}

export function ContactWizard({
  source,
  prefill,
  onNavigate,
}: ContactWizardProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    trigger,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onTouched",
    defaultValues: {
      fullName: prefill?.fullName ?? "",
      phone: prefill?.phone ?? "",
      email: prefill?.email ?? "",
      preference: "phone",
      service: prefill?.service ?? [],
      city: "",
      timeline: undefined,
      description: prefill?.description ?? "",
      budget: "unsure",
    },
  });

  const values = watch();

  const isStepValid = (s: number): boolean => {
    if (s === 1) {
      return (
        values.fullName.trim().length >= 2 &&
        values.phone.replace(/\D/g, "").length >= 10 &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) &&
        !!values.preference
      );
    }
    if (s === 2) {
      return (
        values.service.length > 0 &&
        values.city.trim().length >= 2 &&
        !!values.timeline
      );
    }
    return values.description.trim().length >= 10;
  };

  const toggleService = (label: string) => {
    const current = values.service;
    setValue(
      "service",
      current.includes(label)
        ? current.filter((s) => s !== label)
        : [...current, label],
      { shouldValidate: true },
    );
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("phone", formatPhoneNumber(e.target.value), {
      shouldValidate: true,
    });
  };

  const goNext = async () => {
    const valid = await trigger(STEP_FIELDS[step]);
    if (valid) setStep((s) => Math.min(3, s + 1));
  };

  const goBack = () => {
    setSubmitError(null);
    setStep((s) => Math.max(1, s - 1));
  };

  const onSubmit = handleSubmit(async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const preferenceLabel =
      PREFERENCES.find((p) => p.value === data.preference)?.label ?? "";
    const timelineLabel =
      TIMELINES.find((t) => t.value === data.timeline)?.label ?? "";
    const budgetLabel =
      BUDGETS.find((b) => b.value === data.budget)?.label ?? "Not specified";

    const message = [
      `Preferred contact: ${preferenceLabel}`,
      `Services: ${data.service.join(", ")}`,
      `City: ${data.city}`,
      `Timeline: ${timelineLabel}`,
      `Budget: ${budgetLabel}`,
      "---",
      data.description,
    ].join("\n");

    try {
      const result = await submitLeadAction({
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        message,
        source,
        data: {
          preference: data.preference,
          service: data.service,
          city: data.city,
          timeline: data.timeline,
          budget: data.budget ?? "unsure",
          description: data.description,
        },
      });

      if (result.success) {
        setIsSuccess(true);
      } else {
        setSubmitError(
          result.status === 404
            ? "Service temporarily unavailable. Please try again later or call us directly."
            : "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitError(
        "Service temporarily unavailable. Please try again later or call us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  });

  if (isSuccess) return <SuccessState />;

  return (
    <>
      <Stepper currentStep={step} />

      <form onSubmit={onSubmit} className="pt-7" noValidate>
        {/* -------------------- Step 1 -------------------- */}
        {step === 1 && (
          <div className="flex flex-col gap-4">
            <h2 className="font-clash text-[24px] font-medium leading-8 tracking-[-0.5px] text-[#403023]">
              A little about you
            </h2>

            <Field label="Full name" error={errors.fullName?.message}>
              <span className={cn(fieldShell(!!errors.fullName), "h-12 items-center")}>
                <RiUserLine className={ICON} aria-hidden="true" />
                <input
                  {...register("fullName")}
                  type="text"
                  placeholder="Jane Doe"
                  disabled={isSubmitting}
                  className={CONTROL}
                />
              </span>
            </Field>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Field label="Phone" error={errors.phone?.message}>
                <span className={cn(fieldShell(!!errors.phone), "h-12 items-center")}>
                  <RiPhoneLine className={ICON} aria-hidden="true" />
                  <input
                    {...register("phone")}
                    type="tel"
                    inputMode="tel"
                    placeholder="(239) 000-0000"
                    maxLength={14}
                    disabled={isSubmitting}
                    onChange={handlePhoneChange}
                    className={CONTROL}
                  />
                </span>
              </Field>

              <Field label="Email" error={errors.email?.message}>
                <span className={cn(fieldShell(!!errors.email), "h-12 items-center")}>
                  <RiMailLine className={ICON} aria-hidden="true" />
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="you@email.com"
                    disabled={isSubmitting}
                    className={CONTROL}
                  />
                </span>
              </Field>
            </div>

            <div className="flex flex-col gap-1.5">
              <FieldLabel>Preferred contact method</FieldLabel>
              <div className="-mx-1 flex snap-x gap-2 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
                {PREFERENCES.map((p) => (
                  <ChoiceChip
                    key={p.value}
                    selected={values.preference === p.value}
                    onClick={() =>
                      setValue("preference", p.value, { shouldValidate: true })
                    }
                  >
                    {p.label}
                  </ChoiceChip>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* -------------------- Step 2 -------------------- */}
        {step === 2 && (
          <div className="flex flex-col gap-4">
            <h2 className="font-clash text-[24px] font-medium leading-8 tracking-[-0.5px] text-[#403023]">
              Your project
            </h2>

            <div className="flex flex-col gap-1.5">
              <FieldLabel>
                What do you need help with?{" "}
                <span className="font-normal text-[#8A7D6F]">
                  (pick as many as apply)
                </span>
              </FieldLabel>
              <div className="-mx-1 flex snap-x gap-2 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
                {SERVICE_CHOICE_LABELS.map((label) => (
                  <ChoiceChip
                    key={label}
                    selected={values.service.includes(label)}
                    onClick={() => toggleService(label)}
                  >
                    {label}
                  </ChoiceChip>
                ))}
              </div>
              {errors.service && (
                <FieldError>{errors.service.message}</FieldError>
              )}
            </div>

            <Field label="Project city" error={errors.city?.message}>
              <span className={cn(fieldShell(!!errors.city), "h-12 items-center")}>
                <RiMapPinLine className={ICON} aria-hidden="true" />
                <select
                  {...register("city")}
                  disabled={isSubmitting}
                  required
                  className={cn(CONTROL, "appearance-none invalid:text-[#786F6C]")}
                >
                  <option value="" disabled>
                    Select your city
                  </option>
                  {SERVICE_CITIES.map((city) => (
                    <option key={city} value={city} className="text-[#403023]">
                      {city}
                    </option>
                  ))}
                  <option value="Other" className="text-[#403023]">
                    Other
                  </option>
                </select>
                <RiArrowDownSLine className={ICON} aria-hidden="true" />
              </span>
            </Field>

            <div className="flex flex-col gap-1.5">
              <FieldLabel>When would you like to start?</FieldLabel>
              <div className="-mx-1 flex snap-x gap-2 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
                {TIMELINES.map((t) => (
                  <ChoiceChip
                    key={t.value}
                    selected={values.timeline === t.value}
                    onClick={() =>
                      setValue("timeline", t.value, { shouldValidate: true })
                    }
                  >
                    {t.label}
                  </ChoiceChip>
                ))}
              </div>
              {errors.timeline && (
                <FieldError>{errors.timeline.message}</FieldError>
              )}
            </div>
          </div>
        )}

        {/* -------------------- Step 3 -------------------- */}
        {step === 3 && (
          <div className="flex flex-col gap-4">
            <h2 className="font-clash text-[24px] font-medium leading-8 tracking-[-0.5px] text-[#403023]">
              A few more details
            </h2>

            <Field
              label="Tell us about the project"
              error={errors.description?.message}
            >
              <span
                className={cn(fieldShell(!!errors.description), "items-start py-3.5")}
              >
                <RiChat3Line className={ICON} aria-hidden="true" />
                <textarea
                  {...register("description")}
                  rows={5}
                  placeholder="The space, the condition you're dealing with and the result you want."
                  disabled={isSubmitting}
                  className={cn(CONTROL, "resize-none leading-6")}
                />
              </span>
            </Field>

            <div className="flex flex-col gap-1.5">
              <FieldLabel>
                Estimated budget{" "}
                <span className="font-normal text-[#8A7D6F]">(optional)</span>
              </FieldLabel>
              <div className="-mx-1 flex snap-x gap-2 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
                {BUDGETS.map((b) => (
                  <ChoiceChip
                    key={b.value}
                    selected={values.budget === b.value}
                    onClick={() =>
                      setValue("budget", b.value, { shouldValidate: true })
                    }
                  >
                    {b.label}
                  </ChoiceChip>
                ))}
              </div>
            </div>

            {submitError && (
              <div className="rounded-[16px] border border-red-200 bg-red-50 p-3">
                <p className="font-sans text-sm text-red-600">{submitError}</p>
              </div>
            )}
          </div>
        )}

        {/* -------------------- Footer nav -------------------- */}
        <div className="flex items-center justify-between pt-7">
          {step > 1 ? (
            <button
              type="button"
              onClick={goBack}
              disabled={isSubmitting}
              className="inline-flex items-center gap-1.5 font-sans text-[13px] uppercase leading-5 tracking-[2.1px] text-[#666666] transition-colors hover:text-[#403023] disabled:opacity-40"
            >
              <RiArrowLeftLine className="h-4 w-4" />
              Back
            </button>
          ) : (
            <span />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={goNext}
              disabled={!isStepValid(step)}
              className={actionClass(!isStepValid(step))}
            >
              <span className="font-sans text-[13px] uppercase leading-5 tracking-[2.1px] text-white">
                Continue
              </span>
              <ActionChip />
            </button>
          ) : (
            <button
              type="submit"
              disabled={!isStepValid(3) || isSubmitting}
              className={actionClass(!isStepValid(3) || isSubmitting)}
            >
              <span className="font-sans text-[13px] uppercase leading-5 tracking-[2.1px] text-white">
                {isSubmitting ? "Sending" : "Send request"}
              </span>
              {isSubmitting ? (
                <span
                  className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-white/15"
                  aria-hidden="true"
                >
                  <RiLoader4Line className="h-4 w-4 animate-spin text-white" />
                </span>
              ) : (
                <ActionChip />
              )}
            </button>
          )}
        </div>

        <p className="pt-5 font-sans text-xs leading-4 text-[#8A7D6F]">
          By submitting this form, you agree to our{" "}
          <Link
            href="/privacy-policy"
            onClick={onNavigate}
            className="underline transition-colors hover:text-[#403023]"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </>
  );
}

// ---------------------------------------------------------------------------
// Sub-components & style helpers
// ---------------------------------------------------------------------------
function Stepper({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center gap-2">
      {STEPS.map((s, i) => {
        const isActive = currentStep === s.id;
        const isDone = currentStep > s.id;
        return (
          <React.Fragment key={s.id}>
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-clash text-[15px] font-medium",
                  isActive || isDone
                    ? "bg-[#403023] text-white"
                    : "border border-[#E5DECD] bg-white text-[#8A7D6F]",
                )}
              >
                {isDone ? <RiCheckLine className="h-4 w-4" /> : s.id}
              </span>
              <span
                className={cn(
                  "hidden font-sans text-[10px] uppercase leading-4 tracking-[2px] sm:block",
                  isActive || isDone ? "text-[#403023]" : "text-[#8A7D6F]",
                )}
              >
                {s.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <span
                className={cn(
                  "h-0.5 flex-1 rounded-sm",
                  isDone ? "bg-[#968272]" : "bg-[#E5DECD]",
                )}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function SuccessState() {
  return (
    <div className="flex flex-col items-start gap-5 py-4">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#403023]">
        <RiCheckLine className="h-6 w-6 text-white" />
      </span>
      <h2 className="font-clash text-[clamp(24px,2.5vw,32px)] font-medium leading-tight tracking-[-0.5px] text-[#403023]">
        Thanks — your request is in.
      </h2>
      <p className="font-sans text-[16px] leading-[1.62] text-[#666666]">
        We&apos;ll review the details and reach out with the next useful step —
        usually within 1–2 days. Prefer to talk now? Call us directly.
      </p>
      <Link
        href={PHONE.href}
        className="inline-flex min-h-[48px] items-center gap-3.5 rounded-full bg-[#403023] py-[7px] pl-5 pr-[7px] transition-colors hover:bg-[#2C1F14]"
      >
        <span className="font-sans text-[13px] uppercase leading-5 tracking-[2.1px] text-white">
          Call {PHONE.display.replace("+1 ", "")}
        </span>
        <span
          className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-white/15"
          aria-hidden="true"
        >
          <RiPhoneLine className="h-4 w-4 text-white" />
        </span>
      </Link>
    </div>
  );
}

function ActionChip() {
  return (
    <span
      className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-white/15"
      aria-hidden="true"
    >
      <RiArrowRightUpLine className="h-4 w-4 text-white" />
    </span>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-sans text-[10px] uppercase leading-4 tracking-[2px] text-[#666666]">
      {children}
    </span>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-1 flex-col gap-1.5">
      <FieldLabel>{label}</FieldLabel>
      {children}
      {error && <FieldError>{error}</FieldError>}
    </label>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return <span className="font-sans text-xs text-red-600">{children}</span>;
}

function ChoiceChip({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 snap-start whitespace-nowrap rounded-full border px-4 py-2 font-clash text-[13px] font-medium leading-5 transition-colors",
        selected
          ? "border-[#403023] bg-[#403023] text-white"
          : "border-[#E5DECD] bg-white text-[#5B4F45] hover:border-[#958272]",
      )}
    >
      {children}
    </button>
  );
}

/** Icon-led pill shell shared with QuoteForm (the JB of SWFL capture pattern). */
const fieldShell = (hasError: boolean) =>
  cn(
    "flex w-full gap-2.5 rounded-[20px] border bg-white px-4 transition-colors",
    hasError
      ? "border-red-400 focus-within:border-red-400"
      : "border-[#DEDBD8] focus-within:border-[#958272]",
  );

const CONTROL =
  "h-full w-full min-w-0 border-none bg-transparent font-clash text-[13px] font-medium text-[#403023] outline-none placeholder:text-[#786F6C] disabled:opacity-60";

const ICON = "h-4 w-4 shrink-0 text-[#786F6C]";

const actionClass = (disabled: boolean) =>
  cn(
    "inline-flex min-h-[48px] items-center gap-3.5 rounded-full bg-[#403023] py-[7px] pl-5 pr-[7px] transition-all",
    disabled ? "opacity-40" : "hover:bg-[#2C1F14]",
  );

export default ContactWizard;
