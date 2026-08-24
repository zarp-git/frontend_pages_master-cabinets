import Image from "next/image";
import {
  RiUserStarLine,
  RiCompasses2Line,
  RiCheckboxCircleLine,
  RiHome4Line,
  RiShieldCheckLine,
  RiCustomerService2Line,
} from "@remixicon/react";
import EyebrowPill from "@/presentation/components/atoms/ui/EyebrowPill";
import SectionHeading from "@/presentation/components/molecules/mc/SectionHeading";
import ActionButtonGroup from "@/presentation/components/molecules/mc/ActionButtonGroup";
import GallerySection from "@/presentation/components/organisms/home-page-sections/mc/GallerySection";
import FAQSection from "@/presentation/components/organisms/home-page-sections/mc/FAQSection";
import PricingCTASection from "@/presentation/components/organisms/home-page-sections/mc/PricingCTASection";

const PRINCIPLES = [
  {
    index: "01",
    title: "One Point of Contact",
    body: "From the first measurement to the final hinge, one coordinated team is accountable for the entire project.",
    Icon: RiUserStarLine,
  },
  {
    index: "02",
    title: "Architectural Precision",
    body: "Materials are selected for beauty, then engineered for the exact dimensions and climate of your room.",
    Icon: RiCompasses2Line,
  },
  {
    index: "03",
    title: "Certainty Before Production",
    body: "We map out and review every key design decision with you before any fabrication begins.",
    Icon: RiCheckboxCircleLine,
  },
  {
    index: "04",
    title: "Designed Around You",
    body: "We start with how your household actually lives, not with a rendering, so the space works in daily life.",
    Icon: RiHome4Line,
  },
  {
    index: "05",
    title: "Materials That Last",
    body: "Finishes and construction chosen to age beautifully through South Florida sun and humidity.",
    Icon: RiShieldCheckLine,
  },
  {
    index: "06",
    title: "Support After Install",
    body: "A one-year installation warranty and dedicated post-sales support keep your space performing.",
    Icon: RiCustomerService2Line,
  },
] as const;

const PROCESS_STEPS = [
  {
    index: "01",
    title: "Consultation",
    body: "We listen to what is not working and how you imagine the finished space — no pressure, no generic sales pitch.",
  },
  {
    index: "02",
    title: "Design & Proposal",
    body: "We map layouts, materials, hardware, and lighting, then review a detailed proposal so nothing is left to chance.",
  },
  {
    index: "03",
    title: "Fabrication",
    body: "Your cabinetry is built to the exact dimensions of your room, coordinated with any structural or finish work.",
  },
  {
    index: "04",
    title: "Installation & Support",
    body: "One team installs everything, then stays available with a one-year warranty and post-sales support.",
  },
] as const;

/**
 * AboutPageView — Figma node 48:8801 (ABOUT US).
 *
 * Brand card → "A Single Team…" lockup → Principles grid (6 bezelled cards) →
 * the shared Featured Work gallery → the taupe process panel → FAQ → CTA.
 */
export function AboutPageView() {
  return (
    <main className="w-full bg-white">
      {/* 1 — Brand card + intro */}
      <section
        className="mx-auto w-full max-w-[1364px] px-4 pb-16 pt-[92px] sm:pt-[104px] lg:pt-[120px] sm:px-8"
        aria-label="About Master Cabinets"
      >
        <div className="rounded-[32px] bg-black/[0.04] p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
          <div className="flex h-[240px] w-full items-center justify-center rounded-[26px] bg-white px-8 shadow-[0_1px_1px_rgba(255,255,255,0.60)] sm:h-[340px] lg:h-[455px]">
            <Image
              src="/images/mc-logo.svg"
              alt="Master Cabinets"
              width={1180}
              height={100}
              className="h-auto w-full max-w-[1030px]"
              priority
            />
          </div>
        </div>

        <div className="pt-10">
          <EyebrowPill index="01">Who We Are</EyebrowPill>
        </div>

        <h1 className="max-w-[1160px] pt-5 font-clash text-[clamp(30px,3.9vw,55px)] font-medium leading-[0.96] tracking-[-1.1px] text-black">
          A Single Team for the Home You{" "}
          <span className="font-serif italic font-normal tracking-normal">
            Imagine
          </span>
        </h1>

        <div className="flex flex-col items-start justify-between gap-8 pt-10 lg:flex-row lg:items-end">
          <p className="max-w-[742px] font-sans text-[clamp(18px,1.7vw,24px)] font-light leading-[1.63] text-[#666666]">
            For more than 25 years, Master Cabinets has helped South Florida
            homeowners remodel their homes end to end — cabinetry, flooring,
            painting, electrical, and outdoor work, coordinated through one
            dedicated point of contact. Licensed &amp; Insured.
          </p>
          <ActionButtonGroup className="sm:shrink-0" />
        </div>
      </section>

      {/* 2 — Principles */}
      <section
        className="mx-auto w-full max-w-[1364px] px-4 py-16 sm:px-8"
        aria-label="How we work"
      >
        <div className="flex max-w-[768px] flex-col items-start gap-8">
          <EyebrowPill index="02">How We Work</EyebrowPill>
          <SectionHeading
            line1="Principles Behind"
            line2="Every"
            accent="Project"
            size={60}
            tone="black"
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map(({ index, title, body, Icon }) => (
            <div
              key={index}
              className="rounded-[32px] bg-black/[0.04] p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
            >
              <div className="flex h-full flex-col rounded-[26px] bg-white p-10 shadow-[0_1px_1px_rgba(255,255,255,0.60)]">
                <div className="flex items-center justify-between">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-black/[0.04] shadow-[0_0_0_rgba(0,0,0,0.05)]"
                    aria-hidden="true"
                  >
                    <Icon className="h-[19px] w-[19px] text-[#403023]" />
                  </span>
                  <span
                    className="font-serif italic text-[24px] leading-8 text-black/20"
                    aria-hidden="true"
                  >
                    {index}
                  </span>
                </div>

                <h3 className="pt-8 font-clash text-[24px] font-medium leading-8 tracking-[-0.5px] text-black">
                  {title}
                </h3>
                <p className="pt-4 font-sans text-[16px] leading-[1.62] text-[#666666]">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <ActionButtonGroup className="justify-center" />
        </div>
      </section>

      {/* 3 — Featured work (shared with the homepage) */}
      <GallerySection />

      {/* 4 — Process */}
      <section
        className="mx-auto w-full max-w-[1364px] px-4 py-12 sm:px-8"
        aria-label="Our process"
      >
        <div className="rounded-[32px] bg-white/[0.06] p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
          <div className="rounded-[26px] bg-[#968272] px-6 py-12 shadow-[0_1px_1px_rgba(255,255,255,0.15)] sm:px-10 lg:p-16">
            <EyebrowPill index="03" tone="dark">
              The Process
            </EyebrowPill>

            <SectionHeading
              line1="From First Call to"
              accent="Final Installation"
              size={60}
              tone="white"
              className="max-w-[896px] pt-8"
            />

            <ol className="flex flex-col gap-3 pt-12 lg:pt-24">
              {PROCESS_STEPS.map((step) => (
                <li
                  key={step.index}
                  className="grid grid-cols-1 items-start gap-4 rounded-[28px] py-6 lg:grid-cols-[120px_360px_1fr] lg:gap-8"
                >
                  <span
                    className="font-serif italic text-[48px] leading-none text-white/15 lg:text-[72px]"
                    aria-hidden="true"
                  >
                    {step.index}
                  </span>
                  <h3 className="font-clash text-[clamp(22px,2.2vw,30px)] font-medium leading-9 tracking-[-0.6px] text-white">
                    {step.title}
                  </h3>
                  <p className="max-w-[528px] font-sans text-[18px] leading-[1.62] text-white/65">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 5 — FAQ + CTA */}
      <FAQSection />
      <PricingCTASection />
    </main>
  );
}

export default AboutPageView;
