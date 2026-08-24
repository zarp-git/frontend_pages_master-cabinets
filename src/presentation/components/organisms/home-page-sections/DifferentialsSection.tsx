"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RiCloseLine, RiCheckLine } from "@remixicon/react";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface Feature {
  title: string;
  description: string;
}

interface TabData {
  label: string;
  subtitle: string;
  others: {
    title: string;
    image: string;
    features: Feature[];
  };
  ours: {
    title: string;
    image: string;
    features: Feature[];
  };
}

// ---------------------------------------------------------------------------
// Data — replace with your own service categories and comparison features
// ---------------------------------------------------------------------------
const TABS: TabData[] = [
  {
    label: "[Service Category 1]",
    subtitle:
      "[Subtitle for category 1 — describe the value proposition for this service type.]",
    others: {
      title: "[Competitors / Others label — e.g. 'Other Providers']",
      image: "/images/projects/luxury-kitchen-remodel-custom-cabinets.jpg",
      features: [
        {
          title: "[Competitor drawback 1 — e.g. 'Cracks Easily']",
          description: "[Brief description of this drawback.]",
        },
        {
          title: "[Competitor drawback 2 — e.g. 'No Variety']",
          description: "[Brief description of this drawback.]",
        },
        {
          title: "[Competitor drawback 3 — e.g. 'Poor Craftsmanship']",
          description: "[Brief description of this drawback.]",
        },
        {
          title: "[Competitor drawback 4 — e.g. 'No Warranty']",
          description: "[Brief description of this drawback.]",
        },
      ],
    },
    ours: {
      title: "[Your company label — e.g. 'Our Work']",
      image: "/images/projects/custom-kitchen-cabinetry-remodel.jpg",
      features: [
        {
          title: "[Your advantage 1 — e.g. 'No Cracking']",
          description: "[Brief description of this advantage.]",
        },
        {
          title: "[Your advantage 2 — e.g. 'Full Customization']",
          description: "[Brief description of this advantage.]",
        },
        {
          title: "[Your advantage 3 — e.g. 'Expert Craftsmanship']",
          description: "[Brief description of this advantage.]",
        },
        {
          title: "[Your advantage 4 — e.g. 'Built to Last']",
          description: "[Brief description of this advantage.]",
        },
      ],
    },
  },
  {
    label: "[Service Category 2]",
    subtitle:
      "[Subtitle for category 2 — describe the value proposition for this service type.]",
    others: {
      title: "[Competitors / Others label]",
      image: "/images/projects/full-kitchen-remodel-custom-cabinetry.jpg",
      features: [
        {
          title: "[Competitor drawback 1]",
          description: "[Brief description.]",
        },
        {
          title: "[Competitor drawback 2]",
          description: "[Brief description.]",
        },
        {
          title: "[Competitor drawback 3]",
          description: "[Brief description.]",
        },
        {
          title: "[Competitor drawback 4]",
          description: "[Brief description.]",
        },
      ],
    },
    ours: {
      title: "[Your company label]",
      image: "/images/projects/custom-white-kitchen-cabinetry.jpg",
      features: [
        {
          title: "[Your advantage 1]",
          description: "[Brief description.]",
        },
        {
          title: "[Your advantage 2]",
          description: "[Brief description.]",
        },
        {
          title: "[Your advantage 3]",
          description: "[Brief description.]",
        },
        {
          title: "[Your advantage 4]",
          description: "[Brief description.]",
        },
      ],
    },
  },
  {
    label: "[Service Category 3]",
    subtitle:
      "[Subtitle for category 3.]",
    others: {
      title: "[Competitors / Others label]",
      image: "/images/projects/modern-custom-kitchen-cabinetry.jpg",
      features: [
        { title: "[Drawback 1]", description: "[Brief description.]" },
        { title: "[Drawback 2]", description: "[Brief description.]" },
        { title: "[Drawback 3]", description: "[Brief description.]" },
        { title: "[Drawback 4]", description: "[Brief description.]" },
      ],
    },
    ours: {
      title: "[Your company label]",
      image: "/images/projects/bathroom_remodel_finished_01.jpg",
      features: [
        { title: "[Advantage 1]", description: "[Brief description.]" },
        { title: "[Advantage 2]", description: "[Brief description.]" },
        { title: "[Advantage 3]", description: "[Brief description.]" },
        { title: "[Advantage 4]", description: "[Brief description.]" },
      ],
    },
  },
  {
    label: "[Service Category 4]",
    subtitle:
      "[Subtitle for category 4.]",
    others: {
      title: "[Competitors / Others label]",
      image: "/images/projects/dark-wood-flooring-installation.jpg",
      features: [
        { title: "[Drawback 1]", description: "[Brief description.]" },
        { title: "[Drawback 2]", description: "[Brief description.]" },
        { title: "[Drawback 3]", description: "[Brief description.]" },
        { title: "[Drawback 4]", description: "[Brief description.]" },
      ],
    },
    ours: {
      title: "[Your company label]",
      image: "/images/projects/luxury-kitchen-remodel-custom-cabinets.jpg",
      features: [
        { title: "[Advantage 1]", description: "[Brief description.]" },
        { title: "[Advantage 2]", description: "[Brief description.]" },
        { title: "[Advantage 3]", description: "[Brief description.]" },
        { title: "[Advantage 4]", description: "[Brief description.]" },
      ],
    },
  },
  {
    label: "[Service Category 5 — e.g. Walkways]",
    subtitle:
      "[Subtitle for category 5.]",
    others: {
      title: "[Competitors / Others label]",
      image: "/images/projects/custom-kitchen-cabinetry-remodel.jpg",
      features: [
        { title: "[Drawback 1]", description: "[Brief description.]" },
        { title: "[Drawback 2]", description: "[Brief description.]" },
        { title: "[Drawback 3]", description: "[Brief description.]" },
        { title: "[Drawback 4]", description: "[Brief description.]" },
      ],
    },
    ours: {
      title: "[Your company label]",
      image: "/images/projects/full-kitchen-remodel-custom-cabinetry.jpg",
      features: [
        { title: "[Advantage 1]", description: "[Brief description.]" },
        { title: "[Advantage 2]", description: "[Brief description.]" },
        { title: "[Advantage 3]", description: "[Brief description.]" },
        { title: "[Advantage 4]", description: "[Brief description.]" },
      ],
    },
  },
];

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function DifferentialsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = TABS[activeTab];

  return (
    <section
      id="differentials"
      className="py-10 lg:py-16 bg-white overflow-hidden"
    >
      {/* ── Tabs ── */}
      <div className="section-container flex justify-center mb-6">
        <div className="flex gap-1 p-1 rounded-xl border border-primary overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {TABS.map((tab, index) => (
            <button
              key={tab.label}
              type="button"
              onClick={() => setActiveTab(index)}
              className={cn(
                "px-2.5 py-1.5 rounded-lg text-xs md:text-sm font-normal font-rubik leading-tight whitespace-nowrap transition-all",
                activeTab === index
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Heading ── */}
      <div className="section-container text-center mb-6 lg:mb-8">
        <h2 className="text-gray-800 text-2xl md:text-3xl font-black font-hanken uppercase leading-tight tracking-wide mb-4">
          {/* Section heading — highlight what makes your company different */}
          [DIFFERENTIALS SECTION HEADING — e.g. "The [Company Name] Difference"]
        </h2>
        <p className="text-gray-600 text-base font-normal font-rubik leading-6 max-w-2xl mx-auto">
          {currentTab.subtitle}
        </p>
      </div>

      {/* ── Comparison Cards ── */}
      <div className="section-container">
        <div className="flex flex-col md:flex-row gap-5">
          {/* Others Card */}
          <ComparisonCard
            title={currentTab.others.title}
            image={currentTab.others.image}
            features={currentTab.others.features}
            variant="negative"
          />

          {/* Our company card */}
          <ComparisonCard
            title={currentTab.ours.title}
            image={currentTab.ours.image}
            features={currentTab.ours.features}
            variant="positive"
          />
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// ComparisonCard
// ---------------------------------------------------------------------------
interface ComparisonCardProps {
  title: string;
  image: string;
  features: Feature[];
  variant: "positive" | "negative";
}

function ComparisonCard({
  title,
  image,
  features,
  variant,
}: ComparisonCardProps) {
  const isPositive = variant === "positive";

  return (
    <div className="flex-1 rounded-[10px] flex flex-col gap-5 overflow-hidden">
      {/* -- Hero Image -- */}
      <div className="relative h-48 md:h-52 lg:h-56 w-full rounded-[10px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent" />
        <h3 className="absolute top-5 left-5 text-white text-base lg:text-lg font-bold font-hanken leading-6 tracking-wide uppercase">
          {title}
        </h3>
      </div>

      {/* -- Features Grid (2x2) -- */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center gap-2 p-2 sm:p-3 rounded-lg"
          >
            <div
              className={cn(
                "size-10 rounded-full flex items-center justify-center shrink-0",
                isPositive ? "bg-green-50" : "bg-red-50",
              )}
            >
              {isPositive ? (
                <RiCheckLine className="size-5 text-green-600" />
              ) : (
                <RiCloseLine className="size-5 text-red-500" />
              )}
            </div>
            <h4 className="text-gray-900 text-xs sm:text-sm lg:text-base font-medium font-hanken leading-5 tracking-tight text-center">
              {feature.title}
            </h4>
            <p className="text-gray-600 text-[11px] sm:text-xs lg:text-sm font-normal font-rubik leading-4 sm:leading-5 text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
