import type {
  GalleryItem,
  GalleryCategoryTab,
  GalleryCategory,
} from "@/types/gallery.type";
import { COMPANY_NAME } from "@/constants/business-info";

// ---------------------------------------------------------------------------
// Category filter tabs
// ---------------------------------------------------------------------------

export const GALLERY_CATEGORIES: GalleryCategoryTab[] = [
  { label: "All Projects", value: "all" },
  { label: "[Category 1]", value: "category-1" },
  { label: "[Category 2]", value: "category-2" },
  { label: "[Category 3]", value: "category-3" },
  { label: "[Category 4]", value: "category-4" },
];

const CITIES = ["[City 1]", "[City 2]", "[City 3]"];

// ---------------------------------------------------------------------------
// Gallery items — each src is unique, no repetition within "all" view
// image1-7 used once each; remaining cards use zarp-logomark-black as placeholder
// ---------------------------------------------------------------------------

export const GALLERY_ITEMS: GalleryItem[] = [
  // category-1 — 6 items
  { id: "category-1-01", title: "[Project Title 1]", src: "/images/hero/image1.jpg",              category: "category-1", location: CITIES[0], featured: true },
  { id: "category-1-02", title: "[Project Title 2]", src: "/images/hero/image2.jpg",              category: "category-1", location: CITIES[1] },
  { id: "category-1-03", title: "[Project Title 3]", src: "/images/hero/image3.jpg",              category: "category-1", location: CITIES[2] },
  { id: "category-1-04", title: "[Project Title 4]", src: "/images/hero/zarp-logomark-black.png", category: "category-1", location: CITIES[0] },
  { id: "category-1-05", title: "[Project Title 5]", src: "/images/hero/zarp-logomark-black.png", category: "category-1", location: CITIES[1] },
  { id: "category-1-06", title: "[Project Title 6]", src: "/images/hero/zarp-logomark-black.png", category: "category-1", location: CITIES[2] },

  // category-2 — 6 items
  { id: "category-2-01", title: "[Project Title 1]", src: "/images/hero/image4.jpg",              category: "category-2", location: CITIES[0], featured: true },
  { id: "category-2-02", title: "[Project Title 2]", src: "/images/hero/image5.jpg",              category: "category-2", location: CITIES[1] },
  { id: "category-2-03", title: "[Project Title 3]", src: "/images/hero/image6.jpg",              category: "category-2", location: CITIES[2] },
  { id: "category-2-04", title: "[Project Title 4]", src: "/images/hero/zarp-logomark-black.png", category: "category-2", location: CITIES[0] },
  { id: "category-2-05", title: "[Project Title 5]", src: "/images/hero/zarp-logomark-black.png", category: "category-2", location: CITIES[1] },
  { id: "category-2-06", title: "[Project Title 6]", src: "/images/hero/zarp-logomark-black.png", category: "category-2", location: CITIES[2] },

  // category-3 — 5 items
  { id: "category-3-01", title: "[Project Title 1]", src: "/images/hero/image7.jpg",              category: "category-3", location: CITIES[0], featured: true },
  { id: "category-3-02", title: "[Project Title 2]", src: "/images/hero/zarp-logomark-black.png", category: "category-3", location: CITIES[1] },
  { id: "category-3-03", title: "[Project Title 3]", src: "/images/hero/zarp-logomark-black.png", category: "category-3", location: CITIES[2] },
  { id: "category-3-04", title: "[Project Title 4]", src: "/images/hero/zarp-logomark-black.png", category: "category-3", location: CITIES[0] },
  { id: "category-3-05", title: "[Project Title 5]", src: "/images/hero/zarp-logomark-black.png", category: "category-3", location: CITIES[1] },

  // category-4 — 5 items
  { id: "category-4-01", title: "[Project Title 1]", src: "/images/hero/zarp-logomark-black.png", category: "category-4", location: CITIES[0], featured: true },
  { id: "category-4-02", title: "[Project Title 2]", src: "/images/hero/zarp-logomark-black.png", category: "category-4", location: CITIES[1] },
  { id: "category-4-03", title: "[Project Title 3]", src: "/images/hero/zarp-logomark-black.png", category: "category-4", location: CITIES[2] },
  { id: "category-4-04", title: "[Project Title 4]", src: "/images/hero/zarp-logomark-black.png", category: "category-4", location: CITIES[0] },
  { id: "category-4-05", title: "[Project Title 5]", src: "/images/hero/zarp-logomark-black.png", category: "category-4", location: CITIES[1] },
];

// ---------------------------------------------------------------------------
// SEO metadata
// ---------------------------------------------------------------------------

export const GALLERY_SEO = {
  metaTitle: `Project Gallery | ${COMPANY_NAME}`,
  metaDescription:
    "[Gallery SEO description — present the completed projects and available categories for viewing.]",
} as const;
