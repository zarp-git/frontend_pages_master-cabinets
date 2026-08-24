import ActionButtonGroup from "@/presentation/components/molecules/mc/ActionButtonGroup";
import FAQAccordionItem from "@/presentation/components/atoms/ui/FAQAccordionItem";

const FAQ_ITEMS = [
  {
    question: "How long will my project take?",
    answer:
      "Project timelines depend on scope. A kitchen remodel typically runs 3–6 weeks, while a full home renovation can take 8–16 weeks. We provide a clear timeline estimate at the proposal stage so you know what to expect before we start.",
  },
  {
    question: "How long have you been in business?",
    answer:
      "Master Cabinets has been serving South Florida homeowners for over 25 years. In that time we've completed thousands of kitchen, bathroom, and whole-home remodels across Collier, Broward, and Miami-Dade counties.",
  },
  {
    question: "Do you handle full home renovations?",
    answer:
      "Yes. We coordinate cabinetry, flooring, painting, electrical, and outdoor work through one dedicated team. This eliminates the scheduling conflicts and communication gaps that come from managing multiple contractors.",
  },
  {
    question: "Do you offer free quotes?",
    answer:
      "Absolutely. We walk the space, scope the work, and give you a real number in writing — no fee, no obligation, and no pressure to move forward. Use the form on this page or call us directly to get started.",
  },
  {
    question: "Do you provide a warranty?",
    answer:
      "We stand behind our workmanship with a 1-year warranty covering installation defects on every remodel and custom cabinetry project. This gives you real peace of mind long after the project is complete.",
  },
] as const;

/**
 * FAQSection — Figma node 48:9426
 * 2-col: left warranty trust card + CTA, right 5-item accordion.
 */
export default function FAQSection() {
  return (
    <section
      className="w-full bg-white px-8 md:px-16 py-8"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8">
        {/* Left: Warranty trust card */}
        <div className="flex flex-col gap-6 lg:shrink-0 max-w-[500px]">
          {/* Eyebrow */}
          <span className="uppercase tracking-wider font-sans text-[10px] text-[#4B5563]">
            Frequently Asked Questions
          </span>

          {/* Warranty stat block */}
          <div className="flex items-end gap-2">
            <span
              className="font-clash text-[clamp(64px,10vw,144px)] leading-none font-semibold text-[#403023]"
              aria-label="1 year workmanship warranty"
            >
              1
            </span>
            <div className="flex flex-col leading-none pb-2">
              <span className="font-clash text-[clamp(32px,5vw,72px)] font-medium text-[#111827]">
                Yr
              </span>
              <span className="font-clash text-[clamp(14px,2vw,28.6px)] font-semibold text-[#111827] tracking-[0.02em]">
                WORKMANSHIP
              </span>
            </div>
          </div>

          {/* Warranty description */}
          <p className="font-sans text-[20px] leading-[32.5px] font-normal text-[#4B5563]">
            When you choose Master Cabinets, you&apos;re protected. Our 1-year warranty
            covers workmanship and installation defects on every remodel and custom
            cabinetry project, giving you real peace of mind.
          </p>

          {/* CTA */}
          <ActionButtonGroup />
        </div>

        {/* Right: Accordion */}
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="font-clash text-[clamp(28px,4.2vw,60px)] leading-[61.8px] font-medium text-[#111827]">
            What Homeowners Usually Ask Us
          </h2>

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
