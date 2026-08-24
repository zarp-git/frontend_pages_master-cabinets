import type {
  GalleryItem,
  GalleryCategoryTab,
} from "@/types/gallery.type";
import { COMPANY_NAME } from "@/constants/business-info";

// ---------------------------------------------------------------------------
// Category filter tabs
// ---------------------------------------------------------------------------

export const GALLERY_CATEGORIES: GalleryCategoryTab[] = [
  { label: "All Projects",         value: "all" },
  { label: "Kitchen Cabinetry",    value: "category-1" },
  { label: "Bathroom Remodeling",  value: "category-2" },
  { label: "Flooring & Closets",   value: "category-3" },
  { label: "Outdoor Living",       value: "category-4" },
];

const CITIES = ["Naples, FL", "Fort Myers, FL", "Marco Island, FL"];

// ---------------------------------------------------------------------------
// Gallery items — all use real Master Cabinets project photos
// ---------------------------------------------------------------------------

export const GALLERY_ITEMS: GalleryItem[] = [
  // category-1: Kitchen Cabinetry — 6 items
  { id: "category-1-01", title: "Luxury Kitchen Remodel with Custom Cabinetry",     src: "/images/projects/luxury-kitchen-remodel-custom-cabinets.jpg",  category: "category-1", location: CITIES[0], featured: true },
  { id: "category-1-02", title: "Custom Kitchen Cabinetry Remodel",                 src: "/images/projects/custom-kitchen-cabinetry-remodel.jpg",         category: "category-1", location: CITIES[1] },
  { id: "category-1-03", title: "Full Kitchen Remodel with Custom Cabinetry",       src: "/images/projects/full-kitchen-remodel-custom-cabinetry.jpg",    category: "category-1", location: CITIES[2] },
  { id: "category-1-04", title: "Modern Custom Kitchen Cabinetry",                  src: "/images/projects/modern-custom-kitchen-cabinetry.jpg",          category: "category-1", location: CITIES[0] },
  { id: "category-1-05", title: "Custom White Kitchen Cabinetry",                   src: "/images/projects/custom-white-kitchen-cabinetry.jpg",           category: "category-1", location: CITIES[1] },
  { id: "category-1-06", title: "Gray Custom Kitchen Cabinetry",                    src: "/images/projects/gray-custom-kitchen-cabinetry.jpg",            category: "category-1", location: CITIES[2] },

  // category-2: Bathroom Remodeling — 6 items
  { id: "category-2-01", title: "Bathroom Remodel — Finished Results",              src: "/images/projects/bathroom_remodel_finished_01.jpg",            category: "category-2", location: CITIES[0], featured: true },
  { id: "category-2-02", title: "Bathroom Remodel — Custom Tile and Fixtures",      src: "/images/projects/bathroom_remodel_finished_02.jpg",            category: "category-2", location: CITIES[1] },
  { id: "category-2-03", title: "Bathroom Remodel — Spa-Style Shower",              src: "/images/projects/bathroom_remodel_finished_03.jpg",            category: "category-2", location: CITIES[2] },
  { id: "category-2-04", title: "Bathroom Remodel — Full Gut and Renovation",       src: "/images/projects/bathroom_remodel_finished_04.jpg",            category: "category-2", location: CITIES[0] },
  { id: "category-2-05", title: "Bathroom Demolition and Complete Renovation",      src: "/images/projects/bathroom_demolition_01.jpg",                  category: "category-2", location: CITIES[1] },
  { id: "category-2-06", title: "Custom Bathroom Cabinetry and Vanity",             src: "/images/projects/cabinetry_kitchen_finished_02.jpg",           category: "category-2", location: CITIES[2] },

  // category-3: Flooring & Closets — 5 items
  { id: "category-3-01", title: "Dark Wood Flooring Installation",                  src: "/images/projects/dark-wood-flooring-installation.jpg",          category: "category-3", location: CITIES[0], featured: true },
  { id: "category-3-02", title: "Flooring and Staircase Remodeling",                src: "/images/projects/flooring-and-staircase-remodeling.jpg",        category: "category-3", location: CITIES[1] },
  { id: "category-3-03", title: "Residential Flooring Installation",                src: "/images/projects/residential-flooring-installation.jpg",        category: "category-3", location: CITIES[2] },
  { id: "category-3-04", title: "Custom Walk-In Closet Installation",               src: "/images/projects/custom-walk-in-closet-installation.jpg",       category: "category-3", location: CITIES[0] },
  { id: "category-3-05", title: "Bedroom Closet Remodel",                           src: "/images/projects/bedroom_closet_remodel_01.jpg",                category: "category-3", location: CITIES[1] },

  // category-4: Outdoor Living — 5 items
  { id: "category-4-01", title: "Custom Outdoor Kitchen Cabinetry",                 src: "/images/projects/custom-outdoor-kitchen-cabinetry.jpg",         category: "category-4", location: CITIES[0], featured: true },
  { id: "category-4-02", title: "Custom Outdoor Living Remodel",                    src: "/images/projects/custom-outdoor-living-remodel.jpg",            category: "category-4", location: CITIES[1] },
  { id: "category-4-03", title: "Custom Built-In Entertainment Center",             src: "/images/projects/custom-built-in-entertainment-center.jpg",     category: "category-4", location: CITIES[2] },
  { id: "category-4-04", title: "Custom Laundry Room Cabinetry",                    src: "/images/projects/custom-laundry-room-cabinetry.jpg",            category: "category-4", location: CITIES[0] },
  { id: "category-4-05", title: "Custom Storage and Wine Cabinetry",                src: "/images/projects/custom-storage-and-wine-cabinetry.jpg",        category: "category-4", location: CITIES[1] },
];

// ---------------------------------------------------------------------------
// SEO metadata
// ---------------------------------------------------------------------------

export const GALLERY_SEO = {
  metaTitle: `Project Gallery | ${COMPANY_NAME} — Naples, FL`,
  metaDescription: `Browse our portfolio of custom cabinetry, kitchen remodels, bathroom renovations, flooring installations, and outdoor living projects across Southwest Florida.`,
};
