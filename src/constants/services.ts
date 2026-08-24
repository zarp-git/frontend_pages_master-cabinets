import type { ServiceData, ServiceFeature } from "@/types/service.type";
import { COMPANY_NAME } from "@/constants/business-info";

// ---------------------------------------------------------------------------
// Shared — reused across all services
// ---------------------------------------------------------------------------

export const SERVICE_FEATURES: ServiceFeature[] = [
  {
    title: "[Differentiator 1 — e.g. Simple Process]",
    subtitle: "[Differentiator 1 subtitle]",
    description: "[Brief description — e.g. streamlined process, easy for the customer]",
  },
  {
    title: "[Differentiator 2 — e.g. Affordable Plans]",
    subtitle: "[Differentiator 2 subtitle]",
    description: "[Brief description — e.g. competitive pricing, accessible plans]",
  },
  {
    title: "[Differentiator 3 — e.g. Custom Work]",
    subtitle: "[Differentiator 3 subtitle]",
    description: "[Brief description — e.g. personalized work, tailored solutions]",
  },
  {
    title: "[Differentiator 4 — e.g. Expert Design]",
    subtitle: "[Differentiator 4 subtitle]",
    description: "[Brief description — e.g. innovative design, creative ideas]",
  },
];

export const SERVICE_SIDEBAR_INFO = {
  title: "[Sidebar title — e.g. Who Are We?]",
  description:
    "[Short description about the company in the sidebar — mission, service area, and specialty.]",
} as const;

// ---------------------------------------------------------------------------
// Individual service content — SSOT
// ---------------------------------------------------------------------------

export const SERVICES_DATA: ServiceData[] = [
  {
    slug: "service-1",
    title: "[Service 1]",
    breadcrumbLabel: "[Service 1]",
    heroSubtitle: "[Hero subtitle — e.g. Quality Services]",
    heroImage: "/images/hero/zarp-logomark-black.png",
    content: {
      heading: "[Service 1 main heading — describe the value proposition]",
      paragraphs: [
        "[Paragraph 1: Introduction to the service, what it offers and who it's for.]",
        "[Paragraph 2: Details about materials, process, or specialties.]",
        "[Paragraph 3: Scale of projects handled and commitment to quality.]",
        "[Paragraph 4: Call-to-action — invitation to get in touch.]",
      ],
    },
    galleryImages: [
      "/images/hero/image1.jpg",
      "/images/hero/image4.jpg",
      "/images/hero/image7.jpg",
    ],
    faqs: [
      {
        question: "[Frequently asked question 1 about the service]",
        answer: "[Detailed answer to question 1]",
      },
      {
        question: "[Frequently asked question 2 about the service]",
        answer: "[Detailed answer to question 2]",
      },
      {
        question: "[Frequently asked question 3 about the service]",
        answer: "[Detailed answer to question 3]",
      },
    ],
    features: SERVICE_FEATURES,
    stats: [
      { value: "100%", label: "[Metric 1 — e.g. Satisfaction]" },
      { value: "100%", label: "[Metric 2 — e.g. Quality]" },
    ],
    seo: {
      metaTitle: `[Service 1] | ${COMPANY_NAME}`,
      metaDescription:
        "[SEO meta description for service 1 — up to 160 characters describing the service and service area.]",
    },
  },
  {
    slug: "service-2",
    title: "[Service 2]",
    breadcrumbLabel: "[Service 2]",
    heroSubtitle: "[Hero subtitle]",
    heroImage: "/images/hero/zarp-logomark-black.png",
    content: {
      heading: "[Service 2 main heading]",
      paragraphs: [
        "[Paragraph 1: Introduction to the service.]",
        "[Paragraph 2: Details and differentiators.]",
        "[Paragraph 3: Professional approach and guarantees.]",
        "[Paragraph 4: Call-to-action.]",
      ],
    },
    galleryImages: [
      "/images/hero/image2.jpg",
      "/images/hero/image5.jpg",
      "/images/hero/image6.jpg",
    ],
    faqs: [
      {
        question: "[Frequently asked question 1]",
        answer: "[Detailed answer]",
      },
      {
        question: "[Frequently asked question 2]",
        answer: "[Detailed answer]",
      },
      {
        question: "[Frequently asked question 3]",
        answer: "[Detailed answer]",
      },
    ],
    features: SERVICE_FEATURES,
    stats: [
      { value: "100%", label: "[Metric 1]" },
      { value: "100%", label: "[Metric 2]" },
    ],
    seo: {
      metaTitle: `[Service 2] | ${COMPANY_NAME}`,
      metaDescription: "[SEO meta description for service 2.]",
    },
  },
  {
    slug: "service-3",
    title: "[Service 3]",
    breadcrumbLabel: "[Service 3]",
    heroSubtitle: "[Hero subtitle]",
    heroImage: "/images/hero/zarp-logomark-black.png",
    content: {
      heading: "[Service 3 main heading]",
      paragraphs: [
        "[Paragraph 1: Introduction to the service.]",
        "[Paragraph 2: Details and differentiators.]",
        "[Paragraph 3: Professional approach.]",
        "[Paragraph 4: Call-to-action.]",
      ],
    },
    galleryImages: [
      "/images/hero/image3.jpg",
      "/images/hero/image6.jpg",
      "/images/hero/image1.jpg",
    ],
    faqs: [
      {
        question: "[Frequently asked question 1]",
        answer: "[Detailed answer]",
      },
      {
        question: "[Frequently asked question 2]",
        answer: "[Detailed answer]",
      },
      {
        question: "[Frequently asked question 3]",
        answer: "[Detailed answer]",
      },
    ],
    features: SERVICE_FEATURES,
    stats: [
      { value: "100%", label: "[Metric 1]" },
      { value: "100%", label: "[Metric 2]" },
    ],
    seo: {
      metaTitle: `[Service 3] | ${COMPANY_NAME}`,
      metaDescription: "[SEO meta description for service 3.]",
    },
  },
  {
    slug: "service-4",
    title: "[Service 4]",
    breadcrumbLabel: "[Service 4]",
    heroSubtitle: "[Hero subtitle]",
    heroImage: "/images/hero/zarp-logomark-black.png",
    content: {
      heading: "[Service 4 main heading]",
      paragraphs: [
        "[Paragraph 1: Introduction to the service.]",
        "[Paragraph 2: Details and differentiators.]",
        "[Paragraph 3: Professional approach.]",
        "[Paragraph 4: Call-to-action.]",
      ],
    },
    galleryImages: [
      "/images/hero/image4.jpg",
      "/images/hero/image2.jpg",
      "/images/hero/image5.jpg",
    ],
    faqs: [
      {
        question: "[Frequently asked question 1]",
        answer: "[Detailed answer]",
      },
      {
        question: "[Frequently asked question 2]",
        answer: "[Detailed answer]",
      },
      {
        question: "[Frequently asked question 3]",
        answer: "[Detailed answer]",
      },
    ],
    features: SERVICE_FEATURES,
    stats: [
      { value: "100%", label: "[Metric 1]" },
      { value: "100%", label: "[Metric 2]" },
    ],
    seo: {
      metaTitle: `[Service 4] | ${COMPANY_NAME}`,
      metaDescription: "[SEO meta description for service 4.]",
    },
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Retrieves service data by slug. Returns undefined when the slug has no match. */
export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}

/** Returns all service slugs — useful for `generateStaticParams`. */
export function getAllServiceSlugs(): string[] {
  return SERVICES_DATA.map((s) => s.slug);
}
