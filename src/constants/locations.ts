import type { LocationData, LocationServiceBlock } from "@/types/location.type";
import { COMPANY_NAME } from "@/constants/business-info";

// ---------------------------------------------------------------------------
// Shared — reused across all locations
// ---------------------------------------------------------------------------

const HERO_IMGS = [
  "/images/hero/image1.jpg",
  "/images/hero/image2.jpg",
  "/images/hero/image3.jpg",
  "/images/hero/image4.jpg",
  "/images/hero/image5.jpg",
  "/images/hero/image6.jpg",
  "/images/hero/image7.jpg",
] as const;

/** Block templates — image offset is applied per-location for variety. */
const SERVICE_BLOCK_TEMPLATES: {
  heading: string;
  description: string;
  images: readonly string[];
  ctaLabel: string;
  ctaHref: string;
}[] = [
  {
    heading: "[Service block 1 — e.g. Outdoor Living]",
    description:
      "[Service block 1 description: what it includes, benefits, and who it's for.]",
    images: HERO_IMGS,
    ctaLabel: "[CTA — e.g. View Services]",
    ctaHref: "/services/service-1",
  },
  {
    heading: "[Service block 2]",
    description:
      "[Service block 2 description: details about the service offered in this location.]",
    images: HERO_IMGS,
    ctaLabel: "[CTA]",
    ctaHref: "/services/service-2",
  },
  {
    heading: "[Service block 3]",
    description: "[Service block 3 description.]",
    images: HERO_IMGS,
    ctaLabel: "[CTA]",
    ctaHref: "/services/service-3",
  },
  {
    heading: "[Service block 4]",
    description: "[Service block 4 description.]",
    images: HERO_IMGS,
    ctaLabel: "[CTA]",
    ctaHref: "/services/service-4",
  },
];

/**
 * Build personalized service blocks for a location.
 * `locationIndex` offsets which image from each category is picked,
 * so every city page looks visually different.
 */
function personalizeBlocks(
  cityName: string,
  locationIndex: number,
): LocationServiceBlock[] {
  return SERVICE_BLOCK_TEMPLATES.map((tpl) => ({
    heading: `${tpl.heading} in ${cityName}`,
    description: tpl.description,
    image: tpl.images[locationIndex % tpl.images.length],
    ctaLabel: tpl.ctaLabel,
    ctaHref: tpl.ctaHref,
  }));
}

// ---------------------------------------------------------------------------
// Individual location content — SSOT
// ---------------------------------------------------------------------------

export const LOCATIONS_DATA: LocationData[] = [
  {
    slug: "city-1",
    title: "[City 1]",
    breadcrumbLabel: "[City 1]",
    heroHeading: "[Location 1 hero heading — e.g. Services in [City 1]]",
    heroSubtitle: "[Hero subtitle — e.g. Local Experts in Your Area]",
    heroImage: "/images/hero/zarp-logomark-black.png",
    serviceBlocks: personalizeBlocks("[City 1]", 0),
    about: {
      heading: "[About City 1]",
      description:
        "[City description: characteristics, community, and why residents invest in the services offered.]",
      image: "/images/hero/zarp-logomark-black.png",
    },
    faqs: [
      {
        question: "[FAQ 1 about services in City 1]",
        answer: "[Detailed answer about timelines, process, or materials.]",
      },
      {
        question: "[FAQ 2]",
        answer: "[Detailed answer.]",
      },
      {
        question: "[FAQ 3]",
        answer: "[Detailed answer.]",
      },
    ],
    servedAreas: [
      {
        title: "[Served area 1]",
        cities: ["[City A]", "[City B]", "[City C]"],
      },
      {
        title: "[Served area 2]",
        cities: ["[City D]", "[City E]"],
      },
    ],
    seo: {
      metaTitle: `[Services in City 1] | ${COMPANY_NAME}`,
      metaDescription: "[SEO meta description for location 1.]",
    },
  },
  {
    slug: "city-2",
    title: "[City 2]",
    breadcrumbLabel: "[City 2]",
    heroHeading: "[Location 2 hero heading]",
    heroSubtitle: "[Hero subtitle]",
    heroImage: "/images/hero/zarp-logomark-black.png",
    serviceBlocks: personalizeBlocks("[City 2]", 1),
    about: {
      heading: "[About City 2]",
      description: "[City 2 description.]",
      image: "/images/hero/zarp-logomark-black.png",
    },
    faqs: [
      {
        question: "[FAQ 1]",
        answer: "[Detailed answer.]",
      },
      {
        question: "[FAQ 2]",
        answer: "[Detailed answer.]",
      },
    ],
    servedAreas: [
      {
        title: "[Served area]",
        cities: ["[City A]", "[City B]", "[City C]"],
      },
    ],
    seo: {
      metaTitle: `[Services in City 2] | ${COMPANY_NAME}`,
      metaDescription: "[SEO meta description for location 2.]",
    },
  },
  {
    slug: "city-3",
    title: "[City 3]",
    breadcrumbLabel: "[City 3]",
    heroHeading: "[Location 3 hero heading]",
    heroSubtitle: "[Hero subtitle]",
    heroImage: "/images/hero/zarp-logomark-black.png",
    serviceBlocks: personalizeBlocks("[City 3]", 2),
    about: {
      heading: "[About City 3]",
      description: "[City 3 description.]",
      image: "/images/hero/zarp-logomark-black.png",
    },
    faqs: [
      {
        question: "[FAQ 1]",
        answer: "[Detailed answer.]",
      },
      {
        question: "[FAQ 2]",
        answer: "[Detailed answer.]",
      },
    ],
    servedAreas: [
      {
        title: "[Served area]",
        cities: ["[City A]", "[City B]", "[City C]"],
      },
    ],
    seo: {
      metaTitle: `[Services in City 3] | ${COMPANY_NAME}`,
      metaDescription: "[SEO meta description for location 3.]",
    },
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Retrieves location data by slug. Returns undefined when the slug has no match. */
export function getLocationBySlug(slug: string): LocationData | undefined {
  return LOCATIONS_DATA.find((l) => l.slug === slug);
}

/** Returns all location slugs — useful for `generateStaticParams`. */
export function getAllLocationSlugs(): string[] {
  return LOCATIONS_DATA.map((l) => l.slug);
}
