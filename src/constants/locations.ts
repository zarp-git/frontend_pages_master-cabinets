import type { LocationData, LocationServiceBlock } from "@/types/location.type";
import { COMPANY_NAME } from "@/constants/business-info";

// ---------------------------------------------------------------------------
// Shared — reused across all locations
// ---------------------------------------------------------------------------

const HERO_IMGS = [
  "/images/projects/luxury-kitchen-remodel-custom-cabinets.jpg",
  "/images/projects/custom-kitchen-cabinetry-remodel.jpg",
  "/images/projects/full-kitchen-remodel-custom-cabinetry.jpg",
  "/images/projects/custom-white-kitchen-cabinetry.jpg",
  "/images/projects/modern-custom-kitchen-cabinetry.jpg",
  "/images/projects/bathroom_remodel_finished_01.jpg",
  "/images/projects/dark-wood-flooring-installation.jpg",
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
    heading: "Custom Cabinetry",
    description:
      "We design and install fully custom cabinets for kitchens, bathrooms, and every room in your home. Built to your exact measurements, finished in your choice of color and style — no stock units, no compromises.",
    images: HERO_IMGS,
    ctaLabel: "View Cabinetry Services",
    ctaHref: "/services/custom-cabinetry",
  },
  {
    heading: "Bathroom & Kitchen Remodeling",
    description:
      "From a complete gut renovation to a targeted vanity or countertop upgrade, our team handles the full scope — tile, fixtures, custom cabinetry, lighting, and more. Licensed, insured, and no subcontractors.",
    images: HERO_IMGS,
    ctaLabel: "View Remodeling Services",
    ctaHref: "/services/home-remodeling",
  },
  {
    heading: "Walk-In Closets & Storage",
    description:
      "Custom closet systems designed around the way you live. We maximize every inch with built-in drawers, hanging sections, shoe racks, and integrated lighting — all fabricated to your space.",
    images: HERO_IMGS,
    ctaLabel: "View Closet Services",
    ctaHref: "/services/walk-in-closets",
  },
  {
    heading: "Flooring & Interior Painting",
    description:
      "Premium flooring installation across all materials — hardwood, luxury vinyl plank, porcelain tile, and laminate. Paired with professional interior and exterior painting for a complete transformation.",
    images: HERO_IMGS,
    ctaLabel: "View Flooring & Painting",
    ctaHref: "/services/flooring",
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
    slug: "naples",
    title: "Naples",
    breadcrumbLabel: "Naples",
    heroHeading: "Cabinet & Remodeling Services in Naples, FL",
    heroSubtitle: "South Florida's Trusted Remodeling Team",
    heroImage: "/images/projects/luxury-kitchen-remodel-custom-cabinets.jpg",
    serviceBlocks: personalizeBlocks("Naples", 0),
    about: {
      heading: "Serving Naples Homeowners With Pride",
      description:
        "Naples is one of Florida's most sought-after communities, known for its beautiful homes, waterfront properties, and high standards of living. Master Cabinets LLC has served Naples homeowners for over 25 years, delivering custom cabinetry, full remodels, and premium finishes that match the quality this community expects. From luxury kitchen renovations in Port Royal to custom closets in Pelican Bay, we bring craftsmanship and professionalism to every project.",
      image: "/images/projects/custom-kitchen-cabinetry-remodel.jpg",
    },
    faqs: [
      {
        question: "Do you serve all areas of Naples, FL?",
        answer:
          "Yes. We serve all Naples neighborhoods including North Naples, East Naples, Port Royal, Pelican Bay, Olde Naples, Bayshore, and surrounding communities. We also serve Marco Island and Estero from our Naples base.",
      },
      {
        question: "How far out do you book in Naples?",
        answer:
          "We typically schedule new projects 2–4 weeks out depending on project type. Contact us today to discuss your timeline — we'll do our best to accommodate your schedule.",
      },
      {
        question: "Do you offer free in-home consultations in Naples?",
        answer:
          "Yes. All consultations and estimates are completely free. We'll visit your home, take measurements, and provide a detailed written quote with no obligation.",
      },
    ],
    servedAreas: [
      {
        title: "Naples Neighborhoods",
        cities: [
          "North Naples",
          "East Naples",
          "Port Royal",
          "Pelican Bay",
          "Olde Naples",
          "Bayshore",
          "Golden Gate",
          "Lely",
        ],
      },
      {
        title: "Nearby Areas We Serve",
        cities: [
          "Bonita Springs",
          "Estero",
          "Marco Island",
          "Everglades City",
          "Immokalee",
        ],
      },
    ],
    seo: {
      metaTitle: `Cabinet & Remodeling Services in Naples, FL | ${COMPANY_NAME}`,
      metaDescription:
        "Custom cabinets, kitchen & bathroom remodeling, closets, and flooring in Naples, FL. Licensed and insured — Master Cabinets LLC. Free in-home quotes.",
    },
  },
  {
    slug: "bonita-springs",
    title: "Bonita Springs",
    breadcrumbLabel: "Bonita Springs",
    heroHeading: "Cabinet & Remodeling Services in Bonita Springs, FL",
    heroSubtitle: "Trusted Local Remodeling Experts",
    heroImage: "/images/projects/custom-kitchen-cabinetry-remodel.jpg",
    serviceBlocks: personalizeBlocks("Bonita Springs", 1),
    about: {
      heading: "Serving Bonita Springs With Quality Craftsmanship",
      description:
        "Bonita Springs blends coastal charm with upscale residential living, and Master Cabinets LLC is proud to serve its homeowners with top-tier remodeling and cabinetry services. From Bonita Bay to Spanish Wells and Pelican Landing, we've helped hundreds of families transform their kitchens, bathrooms, and closets with precision craftsmanship and personal service. Our team is locally based and committed to the community.",
      image: "/images/projects/full-kitchen-remodel-custom-cabinetry.jpg",
    },
    faqs: [
      {
        question: "Do you serve all areas of Bonita Springs?",
        answer:
          "Yes. We work throughout Bonita Springs including Bonita Bay, Spanish Wells, Pelican Landing, Palmira, Hunters Ridge, and surrounding communities.",
      },
      {
        question: "Can you work on condo remodeling projects in Bonita Springs?",
        answer:
          "Yes. We have extensive experience working in condos and HOA communities in Bonita Springs and follow all building regulations and HOA requirements during the project.",
      },
      {
        question: "Do you offer free quotes in Bonita Springs?",
        answer:
          "Absolutely. We provide free, no-obligation in-home consultations and detailed written quotes for every project in Bonita Springs and the surrounding area.",
      },
    ],
    servedAreas: [
      {
        title: "Bonita Springs Communities",
        cities: [
          "Bonita Bay",
          "Spanish Wells",
          "Pelican Landing",
          "Palmira",
          "Hunters Ridge",
          "Imperial Shores",
          "San Carlos Park",
        ],
      },
      {
        title: "Nearby Areas We Serve",
        cities: ["Naples", "Estero", "Fort Myers", "Cape Coral", "Marco Island"],
      },
    ],
    seo: {
      metaTitle: `Cabinet & Remodeling Services in Bonita Springs, FL | ${COMPANY_NAME}`,
      metaDescription:
        "Custom cabinets, kitchen & bathroom remodeling, closets, and flooring in Bonita Springs, FL. Master Cabinets LLC — licensed, insured, free quotes.",
    },
  },
  {
    slug: "fort-myers",
    title: "Fort Myers",
    breadcrumbLabel: "Fort Myers",
    heroHeading: "Cabinet & Remodeling Services in Fort Myers, FL",
    heroSubtitle: "Quality Remodeling for Fort Myers Homes",
    heroImage: "/images/projects/full-kitchen-remodel-custom-cabinetry.jpg",
    serviceBlocks: personalizeBlocks("Fort Myers", 2),
    about: {
      heading: "Fort Myers Remodeling You Can Count On",
      description:
        "Fort Myers is one of Southwest Florida's fastest-growing communities, and Master Cabinets LLC has been part of that growth for over 25 years. We work with homeowners across Fort Myers to deliver custom cabinetry, kitchen and bathroom remodels, walk-in closets, flooring, and painting — all under one roof with no subcontractors. From Sanibel Island commuters to Cape Coral residents, we bring quality craftsmanship to every project.",
      image: "/images/projects/custom-white-kitchen-cabinetry.jpg",
    },
    faqs: [
      {
        question: "Do you serve all of Fort Myers?",
        answer:
          "Yes. We serve all Fort Myers neighborhoods including Fort Myers Beach, Gateway, Lehigh Acres, Cape Coral, and surrounding Lee County communities.",
      },
      {
        question: "How soon can you start a project in Fort Myers?",
        answer:
          "We typically schedule new Fort Myers projects 2–3 weeks after the consultation and quote approval. For urgent projects, contact us and we'll do our best to accommodate.",
      },
      {
        question: "Are you licensed to work in Lee County?",
        answer:
          "Yes. Master Cabinets LLC is fully licensed and insured to work in Lee County, including Fort Myers, Cape Coral, Bonita Springs, and all surrounding municipalities.",
      },
    ],
    servedAreas: [
      {
        title: "Fort Myers Areas",
        cities: [
          "Fort Myers Beach",
          "Cape Coral",
          "Gateway",
          "Lehigh Acres",
          "Iona",
          "McGregor",
          "San Carlos Park",
        ],
      },
      {
        title: "Nearby Areas We Serve",
        cities: [
          "Bonita Springs",
          "Naples",
          "Estero",
          "Sanibel",
          "Captiva",
          "Pine Island",
        ],
      },
    ],
    seo: {
      metaTitle: `Cabinet & Remodeling Services in Fort Myers, FL | ${COMPANY_NAME}`,
      metaDescription:
        "Custom cabinets, kitchen remodeling, bathroom renovations, closets, and flooring in Fort Myers, FL. Master Cabinets LLC — licensed, insured, free quotes.",
    },
  },
  {
    slug: "estero",
    title: "Estero",
    breadcrumbLabel: "Estero",
    heroHeading: "Cabinet & Remodeling Services in Estero, FL",
    heroSubtitle: "Precision Remodeling for Estero Residents",
    heroImage: "/images/projects/custom-white-kitchen-cabinetry.jpg",
    serviceBlocks: personalizeBlocks("Estero", 3),
    about: {
      heading: "Trusted Remodeling Services in Estero, FL",
      description:
        "Estero's beautiful planned communities and newer construction homes deserve remodeling partners who match the quality of the architecture. Master Cabinets LLC works with Estero homeowners in communities like Miromar Lakes, Grandezza, West Bay Club, and Coconut Point to deliver exceptional custom cabinetry, remodeling, and finishes. Our team is thorough, professional, and treats every home with the same care we'd give our own.",
      image: "/images/projects/modern-custom-kitchen-cabinetry.jpg",
    },
    faqs: [
      {
        question: "Do you work in gated communities in Estero?",
        answer:
          "Yes. We regularly work in Estero's gated communities including Miromar Lakes, Grandezza, West Bay Club, and others. We follow all HOA regulations and coordinate with community management as needed.",
      },
      {
        question: "Do you handle partial remodels in Estero?",
        answer:
          "Absolutely. Whether you need a kitchen cabinet refresh, new countertops, or just flooring in a few rooms, we handle projects of any size with the same quality and attention to detail.",
      },
      {
        question: "Is there a travel fee for Estero?",
        answer:
          "No. Estero is part of our standard service area. Free consultations and project travel are included at no extra charge.",
      },
    ],
    servedAreas: [
      {
        title: "Estero Communities",
        cities: [
          "Miromar Lakes",
          "Grandezza",
          "West Bay Club",
          "Bella Terra",
          "The Reserve at Estero",
          "Coconut Point area",
        ],
      },
      {
        title: "Nearby Areas We Serve",
        cities: ["Bonita Springs", "Naples", "Fort Myers", "Cape Coral"],
      },
    ],
    seo: {
      metaTitle: `Cabinet & Remodeling Services in Estero, FL | ${COMPANY_NAME}`,
      metaDescription:
        "Custom cabinets, kitchen remodeling, bathrooms, closets & flooring in Estero, FL. Master Cabinets LLC — licensed, insured, free consultations.",
    },
  },
  {
    slug: "marco-island",
    title: "Marco Island",
    breadcrumbLabel: "Marco Island",
    heroHeading: "Cabinet & Remodeling Services in Marco Island, FL",
    heroSubtitle: "Island-Quality Craftsmanship",
    heroImage: "/images/projects/modern-custom-kitchen-cabinetry.jpg",
    serviceBlocks: personalizeBlocks("Marco Island", 4),
    about: {
      heading: "Premium Remodeling for Marco Island Homes",
      description:
        "Marco Island is one of Florida's most exclusive residential destinations, with waterfront properties, luxury condos, and high-end single-family homes that demand premium workmanship. Master Cabinets LLC delivers exactly that — custom cabinetry, full kitchen and bathroom remodels, walk-in closets, flooring, and architectural millwork crafted to the highest standard. We understand what Marco Island homeowners expect, and we deliver it.",
      image: "/images/projects/bathroom_remodel_finished_01.jpg",
    },
    faqs: [
      {
        question: "Do you travel to Marco Island for jobs?",
        answer:
          "Yes. Marco Island is part of our regular service area. We make frequent visits and schedule projects efficiently to minimize travel costs passed to clients.",
      },
      {
        question: "Can you work on condo renovations on Marco Island?",
        answer:
          "Yes. We have extensive experience with condo renovations on Marco Island, including high-rise units. We work within building rules and HOA guidelines and coordinate with building management.",
      },
      {
        question: "Do you bring material samples to Marco Island for selection?",
        answer:
          "Absolutely. We bring cabinet door samples, countertop samples, flooring samples, and paint swatches to your home so you can make decisions in your own space without unnecessary trips to a showroom.",
      },
    ],
    servedAreas: [
      {
        title: "Marco Island Areas",
        cities: [
          "Marco Island North",
          "Marco Island South",
          "Cape Marco",
          "Hideaway Beach",
          "Tigertail Beach area",
        ],
      },
      {
        title: "Nearby Areas We Serve",
        cities: ["Naples", "Goodland", "Everglades City", "Bonita Springs"],
      },
    ],
    seo: {
      metaTitle: `Cabinet & Remodeling Services in Marco Island, FL | ${COMPANY_NAME}`,
      metaDescription:
        "Premium custom cabinets, kitchen remodeling, bathroom renovations & closets on Marco Island, FL. Master Cabinets LLC — licensed, insured, free consultations.",
    },
  },
  {
    slug: "miami",
    title: "Miami",
    breadcrumbLabel: "Miami",
    heroHeading: "Cabinet & Remodeling Services in Miami, FL",
    heroSubtitle: "Modern Remodeling for Miami Homes",
    heroImage: "/images/projects/bathroom_remodel_finished_01.jpg",
    serviceBlocks: personalizeBlocks("Miami", 5),
    about: {
      heading: "Quality Remodeling and Cabinetry in Miami, FL",
      description:
        "Miami's diverse architectural styles — from Art Deco South Beach homes to modern Brickell condos and Coral Gables estates — call for a remodeling partner who adapts to each project's unique character. Master Cabinets LLC brings the same 25+ years of craftsmanship we've delivered across South Florida to Miami and surrounding communities including Parkland, Coral Gables, Coconut Grove, and Doral. We handle kitchens, bathrooms, closets, flooring, and full home remodels.",
      image: "/images/projects/dark-wood-flooring-installation.jpg",
    },
    faqs: [
      {
        question: "Do you serve all Miami neighborhoods?",
        answer:
          "Yes. We serve Miami-Dade County including Miami Beach, Coral Gables, Coconut Grove, Brickell, Doral, Kendall, Parkland, and surrounding areas.",
      },
      {
        question: "Do you work on commercial kitchen renovations in Miami?",
        answer:
          "Our focus is primarily residential remodeling, but we do handle select commercial projects. Contact us to discuss your specific commercial needs.",
      },
      {
        question: "Can you design modern, minimalist kitchen remodels in Miami?",
        answer:
          "Absolutely. We specialize in both modern and traditional design aesthetics. Our design team will work with you to create a kitchen that matches your style — whether that's a sleek European handleless look or a warm, transitional design.",
      },
    ],
    servedAreas: [
      {
        title: "Miami Areas",
        cities: [
          "Coral Gables",
          "Coconut Grove",
          "Brickell",
          "Miami Beach",
          "Doral",
          "Kendall",
          "Pinecrest",
          "South Miami",
        ],
      },
      {
        title: "Nearby Areas We Serve",
        cities: [
          "Parkland",
          "Pembroke Pines",
          "Miramar",
          "Hialeah",
          "Aventura",
          "Homestead",
        ],
      },
    ],
    seo: {
      metaTitle: `Cabinet & Remodeling Services in Miami, FL | ${COMPANY_NAME}`,
      metaDescription:
        "Custom cabinets, kitchen & bathroom remodeling, closets, and flooring in Miami, FL. Master Cabinets LLC — licensed, insured, 25+ years experience. Free quotes.",
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
