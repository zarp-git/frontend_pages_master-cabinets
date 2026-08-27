import type { Metadata } from "next";
import { getArticles } from "@/lib/blog-api";
import { BlogList } from "@/presentation/components/organisms/blog/blog-list";
import PricingCTASection from "@/presentation/components/organisms/home-page-sections/mc/PricingCTASection";
import { SITE_URL, COMPANY_NAME } from "@/constants/business-info";

const DESCRIPTION =
  "Remodeling guides, material notes, and process explainers from the Master Cabinets studio - written for South Florida homeowners planning a renovation.";

export const metadata: Metadata = {
  title: `Blog | ${COMPANY_NAME}`,
  description: DESCRIPTION,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `Blog | ${COMPANY_NAME}`,
    description: DESCRIPTION,
    url: `${SITE_URL}/blog`,
    siteName: COMPANY_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${COMPANY_NAME}`,
    description: DESCRIPTION,
  },
};

/**
 * Blog index - Figma node 48:11240.
 * Page lockup → featured post bezel → 3-column card grid → Load More → CTA.
 */
export default async function BlogPage() {
  const { data: articles } = await getArticles(1, 30);

  return (
    <main className="min-h-screen w-full bg-white pb-10">
      <BlogList articles={articles} />
      <PricingCTASection showPillars={false} />
    </main>
  );
}
