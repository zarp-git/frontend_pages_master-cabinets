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
// FAQ data — Master Cabinets real FAQ content
// ---------------------------------------------------------------------------
export const FAQS = [
  {
    question: "How long will my project take?",
    answer:
      "Project timelines vary based on scope. A vanity replacement or cabinet installation typically takes 1–3 days. A kitchen or bathroom remodel can take 2–4 weeks. A full home renovation may take 6–12 weeks. We provide a detailed project timeline in your written quote before any work begins — and we stick to it.",
  },
  {
    question: "How long have you been in business?",
    answer:
      "Master Cabinets LLC has been serving South Florida homeowners for over 25 years. Our team brings decades of hands-on experience to every project — from small bathroom updates to complete home transformations. We're locally owned and deeply rooted in the communities we serve.",
  },
  {
    question: "Do you handle full home renovations?",
    answer:
      "Yes. We handle complete home renovations from start to finish — kitchens, bathrooms, closets, flooring, painting, electrical, structural work, and outdoor living spaces. One team, one point of contact, no subcontractors. We manage the entire project so you don't have to coordinate between multiple trades.",
  },
  {
    question: "Do you offer free quotes?",
    answer:
      "Yes, absolutely. All consultations and estimates are 100% free with no obligation. We'll visit your home, take measurements, discuss your goals, and provide a detailed written quote covering all materials and labor. There are no hidden costs — the price in the quote is the price you pay.",
  },
  {
    question: "Do you provide a warranty?",
    answer:
      "Yes. We back every project with a 1-year workmanship warranty that covers installation defects and workmanship issues. If something isn't right after we finish, we'll come back and make it right at no charge. Material warranties vary by product and manufacturer and will be disclosed during the project.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Naples, Bonita Springs, Estero, Marco Island, Fort Myers, Lehigh Acres, Miami, Parkland, and surrounding South Florida communities. If you're unsure whether we cover your area, give us a call — we likely do.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. Master Cabinets LLC is fully licensed and insured in the state of Florida. All permits required for your project are managed by our team. We handle the full compliance process so you have complete peace of mind.",
  },
  {
    question: "What if I'm not sure what I want?",
    answer:
      "That's perfectly fine — it's what our free design consultation is for. We'll bring samples of cabinet doors, countertop materials, flooring, and paint colors to your home. Our team will help you explore your options, understand the cost implications of each, and arrive at a design that fits your style and budget.",
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
            {/* Warranty/trust badge */}
            <div className="w-48 h-48 md:w-52 md:h-52 lg:w-64 lg:h-64 relative shrink-0 mx-auto md:mx-0">
              <Image
                src="/images/3-years-warranty-badge.svg"
                alt="1-Year Workmanship Warranty — Master Cabinets LLC"
                width={256}
                height={256}
                className="w-full h-full object-contain"
              />
            </div>

          {/* Text Content */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-[28px] lg:text-4xl font-semibold font-hanken text-primary">
              1-Year Workmanship Warranty
            </h2>
            <p className="text-gray-600 text-base font-normal font-rubik leading-6 max-w-md">
              Every remodel we complete is covered by our 1-year workmanship warranty — protecting against installation defects on every project we touch. If something isn&apos;t right, we make it right.
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
