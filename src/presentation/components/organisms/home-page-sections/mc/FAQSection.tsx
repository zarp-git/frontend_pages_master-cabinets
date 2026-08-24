import ActionButtonGroup from "@/presentation/components/molecules/mc/ActionButtonGroup";
import FAQAccordionItem from "@/presentation/components/atoms/ui/FAQAccordionItem";
import WarrantyBadge from "@/presentation/components/atoms/ui/WarrantyBadge";
import EyebrowPill from "@/presentation/components/atoms/ui/EyebrowPill";
import SectionHeading from "@/presentation/components/molecules/mc/SectionHeading";
import { FAQ_ITEMS } from "@/constants/faq";

/**
 * FAQSection — Figma node 48:9426.
 *
 * Left column (554px): eyebrow pill, the taupe warranty crest, supporting copy
 * and the CTA pair. Right column (726px): 60px heading lockup with a Times
 * italic accent over five bezelled accordion rows.
 */
export default function FAQSection() {
  return (
    <section
      className="w-full bg-white px-4 py-8 sm:px-8 lg:px-16"
      aria-label="Frequently asked questions"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 xl:flex-row xl:gap-8">
        {/* Left: warranty trust column */}
        <div className="flex w-full min-w-0 flex-col items-start gap-8 xl:w-[554px] xl:shrink-0">
          <EyebrowPill>Frequently Asked Questions</EyebrowPill>

          <WarrantyBadge />

          <p className="max-w-[480px] font-sans text-[clamp(16px,1.4vw,20px)] leading-[1.62] text-[#666666]">
            When you choose Master Cabinets, you&apos;re protected. Our 1-year
            warranty covers workmanship and installation defects on every remodel
            and custom cabinetry project, giving you real peace of mind.
          </p>

          <ActionButtonGroup />
        </div>

        {/* Right: accordion */}
        <div className="flex w-full min-w-0 flex-1 flex-col gap-8">
          <SectionHeading
            line1="What Homeowners"
            accent="Usually Ask Us"
            size={60}
          />

          <div className="flex flex-col gap-3">
            {FAQ_ITEMS.map((item, i) => (
              <FAQAccordionItem
                key={item.question}
                index={i}
                question={item.question}
                answer={item.answer}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
