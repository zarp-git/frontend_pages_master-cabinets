import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { LOCATIONS_DATA } from "@/constants/locations";
import { SITE_URL, COMPANY_NAME } from "@/constants/business-info";
import { BreadcrumbJsonLd } from "@/presentation/components/templates/seo/json-ld";
import PricingCTASection from "@/presentation/components/organisms/home-page-sections/mc/PricingCTASection";

export const metadata: Metadata = {
  title: `Service Locations across South Florida | ${COMPANY_NAME}`,
  description:
    "Master Cabinets LLC serves Naples, Bonita Springs, Fort Myers, Estero, Marco Island, Miami, and surrounding South Florida communities. View our local remodeling and custom cabinetry services.",
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: `Service Locations across South Florida | ${COMPANY_NAME}`,
    description:
      "Find Master Cabinets custom cabinetry and remodeling services in your area.",
    url: `${SITE_URL}/locations`,
    siteName: COMPANY_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Service Locations | ${COMPANY_NAME}`,
    description:
      "Find Master Cabinets custom cabinetry and remodeling services in your area.",
  },
};

export default function LocationsPage() {
  return (
    <main className="w-full bg-white pt-24 md:pt-28">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Locations", url: `${SITE_URL}/locations` },
        ]}
      />

      <section className="w-full px-4 sm:px-6 md:px-8 xl:px-16 max-w-[1364px] mx-auto pt-10 md:pt-16 pb-12 text-center flex flex-col items-center">
        <span className="font-serif text-sm text-[#968272] uppercase tracking-wider mb-2">
          SOUTH FLORIDA SERVICE AREAS
        </span>
        <h1 className="font-clash font-medium text-4xl sm:text-5xl md:text-6xl text-[#111827] mb-4">
          Where We Build
        </h1>
        <p className="font-sans font-normal text-base sm:text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto">
          From Collier County to Broward and Miami-Dade, our licensed team coordinates
          custom cabinetry, flooring, painting, and full renovations through one dedicated point of contact.
        </p>
      </section>

      <section className="w-full px-4 sm:px-6 md:px-8 xl:px-16 max-w-[1364px] mx-auto pb-16 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {LOCATIONS_DATA.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="group flex flex-col gap-4 rounded-[24px] bg-white border border-[#EFEFEF] p-6 hover:border-[#DEDBD8] hover:shadow-md transition-all duration-300"
            >
              <div className="relative w-full h-[200px] rounded-[16px] overflow-hidden bg-stone-100">
                <Image
                  src={location.heroImage || "/images/hero/image1.webp"}
                  alt={`Master Cabinets in ${location.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <span className="font-serif text-xs text-[#968272] uppercase">
                  FLORIDA
                </span>
                <h2 className="font-clash font-medium text-2xl text-[#111827] group-hover:text-[#FF4C00] transition-colors">
                  {location.title}
                </h2>
                <p className="font-sans font-normal text-sm leading-relaxed text-[#4B5563] line-clamp-3 flex-1">
                  {location.seo.metaDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#403023] group-hover:text-[#FF4C00] transition-colors pt-2 font-sans">
                  Explore {location.title} Services →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <PricingCTASection />
    </main>
  );
}
