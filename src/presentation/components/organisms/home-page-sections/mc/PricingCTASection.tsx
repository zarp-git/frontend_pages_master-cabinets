import ActionButtonGroup from "@/presentation/components/molecules/mc/ActionButtonGroup";

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

/**
 * PricingCTASection — Figma node 48:9791 (CTA / Final Scope)
 * Eyebrow + heading + subtitle, 3 scope pillars, bottom quote box.
 */
export default function PricingCTASection() {
  return (
    <section
      className="w-full bg-white px-8 md:px-16 py-8"
      aria-label="Pricing and free quote"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center text-center">
          <span
            className="font-serif text-[11px] text-[#111827]"
          >
            GOOD TO KNOW
          </span>
          <h2
            className="max-w-4xl font-clash text-[clamp(28px,3.3vw,48px)] leading-[61.8px] font-medium text-[#111827]"
          >
            We Handle Everything Related To Your Remodel
          </h2>
          <p
            className="max-w-[800px] font-sans text-[20px] leading-[32.5px] font-normal text-[#4B5563]"
          >
            Custom work carries a real cost, and vague answers help nobody. Here is
            what actually moves the number — and what you get for it, before you ever
            commit to anything.
          </p>
        </div>

        {/* 3 Scope pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SCOPE_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="flex flex-col gap-4 p-6 rounded-[20px] bg-[#F9FAFB] border border-[#EFEFEF]"
            >
              <div className="flex items-center gap-3">
                <span
                  className="font-serif text-[14px] text-[#958272]"
                >
                  {pillar.number}
                </span>
                <span
                  className="font-clash text-[20px] font-medium text-[#111827]"
                >
                  {pillar.title}
                </span>
              </div>
              <p
                className="font-sans text-[16px] leading-[26px] font-normal text-[#4B5563]"
              >
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom quote box */}
        <div
          className="flex flex-col gap-6 p-8 rounded-[24px] items-center text-center bg-[#F9FAFB] border border-[#EFEFEF]"
        >
          <h3
            className="font-clash text-[clamp(24px,2.5vw,36px)] leading-[40px] font-medium text-[#111827]"
          >
            Quotes are free.
          </h3>
          <p
            className="max-w-xl font-sans text-[18px] leading-[29.2px] font-normal text-[#4B5563]"
          >
            We walk the space, scope the work, and give you a real number in writing.
            No fee, no obligation, and no pressure to move forward.
          </p>
          <ActionButtonGroup stackOnMobile={false} />
        </div>
      </div>
    </section>
  );
}
