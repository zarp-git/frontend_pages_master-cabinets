import type { Metadata } from "next";
import { GALLERY_SEO } from "@/constants/gallery";
import { GalleryPageView } from "@/presentation/pages/(public)/gallery/gallery.view";
import { SITE_URL, COMPANY_NAME } from "@/constants/business-info";

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: GALLERY_SEO.metaTitle,
  description: GALLERY_SEO.metaDescription,
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: GALLERY_SEO.metaTitle,
    description: GALLERY_SEO.metaDescription,
    url: `${SITE_URL}/gallery`,
    siteName: COMPANY_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: GALLERY_SEO.metaTitle,
    description: GALLERY_SEO.metaDescription,
  },
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function GalleryPage() {
  return <GalleryPageView />;
}
