import Link from "next/link";
import { RiPhoneLine, RiMailLine } from "@remixicon/react";
import EyebrowPill from "@/presentation/components/atoms/ui/EyebrowPill";
import { ContactWizard } from "@/presentation/components/organisms/common/contact-wizard/ContactWizard";
import FAQSection from "@/presentation/components/organisms/home-page-sections/mc/FAQSection";
import PricingCTASection from "@/presentation/components/organisms/home-page-sections/mc/PricingCTASection";
import { PHONE, PHONE_SECONDARY, EMAIL } from "@/constants/business-info";

/**
 * ContactPageView — intro copy and contact details beside the shared 3-step
 * wizard, following the JB of Southwest Florida contact pattern.
 *
 * The wizard lives in contact-wizard/ so the page and any modal entry point
 * render the same flow. Surfaces use the Master Cabinets kit: bezel frame,
 * Clash Display headings with the Times-italic accent, espresso actions.
 */
export function ContactPageView() {
  return (
    <main className="w-full bg-white pt-[92px] sm:pt-[104px] lg:pt-[120px]">
      <section
        className="mx-auto w-full max-w-[1364px] px-4 py-14 sm:px-8 lg:px-16"
        aria-label="Contact Master Cabinets"
      >
        <div className="flex flex-col gap-12 xl:flex-row xl:items-start xl:justify-between">
          {/* Left — intro + contact details */}
          <div className="flex w-full min-w-0 flex-col gap-6 xl:max-w-[480px]">
            <EyebrowPill>Contact us</EyebrowPill>

            <h1 className="font-clash text-[clamp(32px,4.2vw,55px)] font-medium leading-[0.98] tracking-[-1.1px] text-black">
              Let&apos;s plan your remodel{" "}
              <span className="font-serif italic font-normal tracking-normal">
                together.
              </span>
            </h1>

            <p className="font-sans text-[clamp(16px,1.4vw,20px)] leading-[1.62] text-[#666666]">
              Tell us about the space, the condition you&apos;re dealing with
              and the result you want. We&apos;ll review it and help define the
              next useful step — usually within 1–2 days.
            </p>

            {/* Phone and email sit side by side, including on mobile — the
                icon chips and type shrink instead of the pair stacking. */}
            <div className="flex flex-nowrap items-center gap-3 sm:gap-6">
              <Link
                href={PHONE.href}
                className="inline-flex min-w-0 items-center gap-2 transition-opacity hover:opacity-80 sm:gap-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#403023] sm:h-10 sm:w-10">
                  <RiPhoneLine className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" />
                </span>
                <span className="truncate font-clash text-[13px] font-medium text-[#403023] sm:text-[16px]">
                  {PHONE.display.replace("+1 ", "")}
                </span>
              </Link>

              <Link
                href={`mailto:${EMAIL}`}
                className="inline-flex min-w-0 items-center gap-2 transition-opacity hover:opacity-80 sm:gap-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#403023] sm:h-10 sm:w-10">
                  <RiMailLine className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" />
                </span>
                <span className="truncate font-clash text-[13px] font-medium text-[#403023] sm:text-[16px]">
                  {EMAIL}
                </span>
              </Link>
            </div>

            {/* Trust note */}
            <div className="rounded-[20px] border border-[#E5DECD] bg-[#F3F4F6] p-4">
              <p className="font-sans text-[13px] leading-5 text-[#666666]">
                Free quotes · Licensed &amp; insured · One-year workmanship
                warranty · One coordinated team from first measurement to final
                install.
              </p>
            </div>

            <p className="font-sans text-[13px] leading-5 text-[#8A7D6F]">
              Prefer to talk to the shop directly? Call{" "}
              <Link
                href={PHONE_SECONDARY.href}
                className="text-[#403023] underline transition-opacity hover:opacity-70"
              >
                {PHONE_SECONDARY.display.replace("+1 ", "")}
              </Link>
              .
            </p>
          </div>

          {/* Right — wizard card in a bezel */}
          <div className="w-full min-w-0 rounded-[32px] bg-black/[0.04] p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.18)] xl:w-[559px] xl:shrink-0">
            <div className="rounded-[26px] bg-white p-6 shadow-[0_1px_1px_rgba(255,255,255,0.60)] sm:p-8">
              <ContactWizard source="contact-page" />
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <PricingCTASection showPillars={false} />
    </main>
  );
}

export default ContactPageView;
