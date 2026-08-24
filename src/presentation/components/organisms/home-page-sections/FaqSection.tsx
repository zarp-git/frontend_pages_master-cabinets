"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/presentation/components/atoms/ui/button";
import { RiPhoneLine } from "@remixicon/react";
import AccordionItem from "@/presentation/components/atoms/ui/accordion-item";
import { FOOTER_COMPANY_INFO } from "@/constants/footer";
import { FAQJsonLd } from "@/presentation/components/templates/seo/json-ld";

// ---------------------------------------------------------------------------
// FAQ data — replace with questions and answers relevant to your business.
// Exported so service/location pages can import and pass their own FAQ arrays.
// ---------------------------------------------------------------------------
export const FAQS = [
  {
    question: "[FAQ 1 — e.g. What payment options do you accept?]",
    answer:
      "[Answer 1 — describe accepted payment methods, financing options, etc.]",
  },
  {
    question: "[FAQ 2 — e.g. How long does a typical project take?]",
    answer:
      "[Answer 2 — describe typical project duration based on size and complexity.]",
  },
  {
    question: "[FAQ 3 — e.g. Do you offer a warranty on your work?]",
    answer:
      "[Answer 3 — describe the warranty terms and what it covers.]",
  },
  {
    question: "[FAQ 4 — e.g. How long does your service/product last?]",
    answer:
      "[Answer 4 — describe the expected lifespan with proper maintenance.]",
  },
  {
    question: "[FAQ 5 — e.g. What makes your service different from competitors?]",
    answer:
      "[Answer 5 — highlight key differentiators: quality, materials, process, etc.]",
  },
  {
    question: "[FAQ 6 — e.g. Is the process disruptive or messy?]",
    answer:
      "[Answer 6 — describe how you minimize disruption and keep the site clean.]",
  },
  {
    question: "[FAQ 7 — e.g. What areas do you serve?]",
    answer:
      "[Answer 7 — list the cities, regions, or service area you cover.]",
  },
  {
    question: "[FAQ 8 — e.g. What if I'm not sure what I want?]",
    answer:
      "[Answer 8 — describe your consultation process, samples, or design support.]",
  },
];

interface FaqSectionProps {
  faqs?: ReadonlyArray<{ question: string; answer: string }>;
}

export default function FaqSection({ faqs = FAQS }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full bg-gray-50 py-10 sm:py-14 lg:py-20">
      {/* FAQJsonLd co-located here so schema always matches the visible accordion */}
      <FAQJsonLd faq={faqs} />
      <div className="section-container flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-10 md:gap-12 lg:gap-16">
        {/* Left Column - Warranty Badge + CTA */}
        <div className="w-full md:w-80 lg:w-138.5 flex flex-col items-center md:items-start gap-6 sm:gap-8 md:shrink-0">
            {/* Warranty/trust badge — replace with your own badge image or remove */}
            <div className="w-48 h-48 md:w-52 md:h-52 lg:w-64 lg:h-64 relative shrink-0 mx-auto md:mx-0">
              <Image
                src="/images/3-years-warranty-badge.svg"
                alt="[Warranty or trust badge alt text]"
                width={256}
                height={256}
                className="w-full h-full object-contain"
              />
            </div>

          {/* Text Content */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-[28px] lg:text-4xl font-semibold font-hanken text-primary">
              {/* Heading for the warranty/trust section — e.g. "Your Work Is Secured" */}
              [WARRANTY / TRUST SECTION HEADING]
            </h2>
            <p className="text-gray-600 text-base font-normal font-rubik leading-6 max-w-md">
              {/* Description of the warranty or guarantee offered — what it covers and for how long */}
              [Description of the warranty or guarantee: what it covers, duration, and what it means for the customer.]
            </p>
          </div>

          {/* CTA Button */}
          <Button
            variant="brick"
            size="lg"
            className="h-12 px-8 py-4 rounded-lg flex items-center gap-4"
            asChild
          >
            <Link href={`tel:${FOOTER_COMPANY_INFO.contact.phone}`}>
              <span className="uppercase">CONTACT US NOW</span>
              <RiPhoneLine className="w-5 h-5" />
            </Link>
          </Button>
        </div>

        {/* Right Column - FAQ Accordion */}
        <div className="w-full md:flex-1 lg:max-w-xl flex flex-col gap-6">
          <h2 className="text-[24px] sm:text-[28px] lg:text-4xl font-semibold font-hanken text-gray-800 uppercase leading-tight sm:leading-10">
            {/* FAQ section heading */}
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
