import ActionButtonGroup from "@/presentation/components/molecules/mc/ActionButtonGroup";
import EyebrowPill from "@/presentation/components/atoms/ui/EyebrowPill";
import SectionHeading from "@/presentation/components/molecules/mc/SectionHeading";

const SCOPE_PILLARS = [
  {
    number: "01",
    title: "Scope",
    body: "A single vanity and a full-home remodel are different projects. We price by what the space actually needs, not by a per-cabinet formula that inflates the simple work to cover the complex.",
  },
  {
    number: "02",
    title: "Materials",
    body: "Wood species, veneers, hardware, stone, and finishes account for most of the variation. We show you the options at each level so you decide where the budget goes rather than paying for a default spec.",
  },
  {
    number: "03",
    title: "Coordination",
    body: "Running flooring, painting, electrical, and cabinetry through one team removes the markup, downtime, and rework that come from stitching separate contractors together.",
  },
] as const;

interface PricingCTASectionProps {
  /**
   * Render the three scope pillars. The homepage and About page show them;
   * Gallery, Reviews, Blog and Blog Article go straight to the quote panel.
   */
  showPillars?: boolean;
}

/**
 * PricingCTASection — Figma node 48:9791 (CTA).
 *
 * Two-column header (eyebrow + heading on the left, supporting copy on the
 * right), optional trio of bezelled pillar cards, and a taupe #968272 quote
 * panel wrapped in a raised bezel with the copy left and the CTA pair right.
 */
export default function PricingCTASection({
  showPillars = true,
}: PricingCTASectionProps) {
  return (
    <section
      className="w-full bg-white px-4 py-8 sm:px-8 lg:px-16"
      aria-label="Pricing and free quote"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col">
        {/* Header — 2 columns */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-8">
            <EyebrowPill>Good to know</EyebrowPill>
            <SectionHeading
              line1="We Handle Everything"
              line2="Related To Your"
              accent="Remodel"
            />
          </div>
          <div className="flex items-end">
            <p className="max-w-[576px] font-sans text-[clamp(16px,1.4vw,20px)] leading-[1.62] text-[#666666]">
              Custom work carries a real cost, and vague answers help nobody.
              Here is what actually moves the number — and what you get for it,
              before you ever commit to anything.
            </p>
          </div>
        </div>

        {/* Scope pillars */}
        {showPillars && (
          <div className="mt-16 grid grid-cols-1 gap-3 md:grid-cols-3">
            {SCOPE_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-[32px] bg-black/[0.04] p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
              >
                <div className="flex h-full flex-col gap-4 rounded-[26px] bg-white p-10 shadow-[0_1px_1px_rgba(255,255,255,0.60)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-clash text-[20px] font-medium text-[#403023]">
                      {pillar.title}
                    </span>
                    <span
                      className="font-serif italic text-[18px] text-[#958272]"
                      aria-hidden="true"
                    >
                      {pillar.number}
                    </span>
                  </div>
                  <p className="font-sans text-[16px] leading-[1.6] text-[#666666]">
                    {pillar.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quote panel */}
        <div
          id="quote"
          className="mt-10 rounded-[32px] bg-white/[0.06] p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
        >
          <div className="overflow-hidden rounded-[26px] shadow-[0_1px_1px_rgba(255,255,255,0.15)]">
            <div className="flex flex-col gap-8 bg-[#968272] p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex max-w-[576px] flex-col gap-3">
                <h3 className="font-clash text-[clamp(24px,2.5vw,36px)] font-medium leading-[1.15] tracking-[-0.02em] text-white">
                  Quotes are{" "}
                  <span className="font-serif italic font-normal tracking-normal">
                    free
                  </span>
                  .
                </h3>
                <p className="font-sans text-[16px] leading-[1.6] text-white/85 sm:text-[18px]">
                  We walk the space, scope the work, and give you a real number
                  in writing. No fee, no obligation, and no pressure to move
                  forward.
                </p>
              </div>

              <ActionButtonGroup className="shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
