"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/presentation/components/atoms/ui/button";
import NextImage from "next/image";
import { CtaButton } from "@/presentation/components/molecules/common/CtaButton";

export default function IntroSection() {
  return (
    <section data-layer="section" className="py-10 sm:py-14 md:py-20 bg-white">
      <div className="section-container flex flex-col justify-center items-center gap-6 sm:gap-8">
        <div
          data-layer="div flex-col md:flex-row"
          className="self-stretch flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12"
        >
          {/* Image */}
          <div className="flex-1 w-full md:w-auto h-56 sm:h-64 md:h-80 relative rounded-[20px] overflow-hidden">
            <NextImage
              data-layer="intro-image"
              className="object-cover"
              src="/images/hero/image7.jpg"
              alt="[Describe the image — e.g. a completed project example]"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          {/* Content */}
          <div
            data-layer="div"
            className="flex-1 inline-flex flex-col justify-start items-start gap-7"
          >
            <div
              data-layer="text"
              className="self-stretch flex flex-col justify-start items-start gap-8"
            >
              {/* Section heading — pain points or relatable problems your target customer faces */}
              <h2
                data-layer="section-heading"
                className="justify-center text-gray-800 text-2xl sm:text-3xl font-extrabold font-hanken uppercase leading-tight tracking-wide"
              >
                [Section heading — e.g. "Do Any of These Sound Familiar?"]
              </h2>
              <div
                data-layer="pain-points-copy"
                className="self-stretch justify-center text-gray-600 text-base font-normal font-rubik leading-6"
              >
                {/* List the main pain points or fears your customer has before hiring you */}
                <span>[Pain point 1 — e.g. fear of poor quality work] </span>
                <span className="font-semibold">[key phrase]</span>
                <span>
                  .<br />
                  [Pain point 2 — e.g. unexpected costs or hidden fees]{" "}
                </span>
                <span className="font-semibold">[key phrase]</span>
                <span>
                  .<br />
                  [Pain point 3 — e.g. unreliable contractors]{" "}
                </span>
                <span className="font-semibold">[key phrase]</span>
                <span>.</span>
              </div>
              <div
                data-layer="intro-cta-copy"
                className="self-stretch justify-center text-gray-600 text-base font-normal font-rubik leading-6"
              >
                {/* Short motivational line inviting the user to take action */}
                [Closing line — e.g. "Let us transform your space. Contact us and take the first step."]
              </div>
            </div>

            <div
              data-layer="Frame 2095585693"
              className="inline-flex flex-wrap justify-start items-start gap-4"
            >
              <CtaButton />

              <Link
                href="/gallery"
                className="h-12 px-8 py-4 rounded-lg flex justify-center items-center gap-4 text-base font-medium font-rubik uppercase bg-white border-2 border-primary text-primary hover:bg-primary/5 transition-colors"
              >
                [Secondary CTA — e.g. "View Gallery"]
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
