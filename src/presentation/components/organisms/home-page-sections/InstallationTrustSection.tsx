import React from "react";
import Image from "next/image";
import { CtaButton } from "@/presentation/components/molecules/common/CtaButton";

export const InstallationTrustSection = () => {
  return (
    <section id="installation-trust" className="py-10 sm:py-14 md:py-20 bg-white">
      <div className="section-container flex flex-col items-center gap-8 sm:gap-10 md:gap-12">
        <h2 className="text-foreground text-2xl sm:text-3xl font-black font-hanken uppercase leading-tight tracking-wide text-center">
          {/* Section heading — trust/quality statement about the installation or service process */}
          [INSTALLATION / PROCESS TRUST HEADING — e.g. "Installation You Can Trust"]
        </h2>

        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 sm:gap-10 md:gap-12">
          {/* Image — replace src with a relevant process/installation image */}
          <div className="relative w-full md:w-1/2 lg:w-[600px] h-48 sm:h-56 md:h-72 lg:h-80 rounded-xl overflow-hidden">
            <Image
              src="/images/hero/image3.jpg"
              alt="[Describe the image — e.g. your service/installation process]"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-start items-start gap-7">
            <div className="flex flex-col justify-start items-start gap-4">
              <h3 className="text-foreground text-xl font-bold font-hanken uppercase leading-tight tracking-tight">
                {/* Sub-heading — key technical or quality claim */}
                [Sub-heading — e.g. "Built to Handle the Pressure" or "Engineered for Durability"]
              </h3>
              <div className="text-muted-foreground text-base font-normal font-rubik leading-6">
                <p>
                  {/* Paragraph 1 — describe the technical advantage or quality of your process */}
                  [Paragraph 1 — describe the technical advantage or quality of your installation/service process.]
                </p>
                <br />
                <p>
                  {/* Paragraph 2 — add a specific stat, comparison, or proof point */}
                  [Paragraph 2 — add a specific stat, comparison, or proof point that builds trust.]
                </p>
              </div>
            </div>

            <CtaButton />
          </div>
        </div>
      </div>
    </section>
  );
};
