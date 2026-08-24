import type {
  GalleryItem,
  GalleryCategoryTab,
} from "@/types/gallery.type";
import { COMPANY_NAME } from "@/constants/business-info";

<<<<<<< Updated upstream
export const GALLERY_CATEGORIES: GalleryCategoryTab[] = [
  { label: "All Projects", value: "all" },
  { label: "Kitchen Cabinetry", value: "category-1" },
  { label: "Bathroom Remodeling", value: "category-2" },
  { label: "Flooring & Closets", value: "category-3" },
  { label: "Outdoor Living", value: "category-4" },
];

const CITIES = ["Naples, FL", "Fort Myers, FL", "Marco Island, FL"];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "kitchen-01", title: "Luxury Kitchen Remodel with Custom Cabinetry", src: "/images/projects/luxury-kitchen-remodel-custom-cabinets.jpg", category: "category-1", location: CITIES[0], featured: true },
  { id: "kitchen-02", title: "Custom Kitchen Cabinetry Remodel", src: "/images/projects/custom-kitchen-cabinetry-remodel.jpg", category: "category-1", location: CITIES[1] },
  { id: "kitchen-03", title: "Full Kitchen Remodel with Custom Cabinetry", src: "/images/projects/full-kitchen-remodel-custom-cabinetry.jpg", category: "category-1", location: CITIES[2] },
  { id: "kitchen-04", title: "Custom White Kitchen Cabinetry", src: "/images/projects/custom-white-kitchen-cabinetry.jpg", category: "category-1", location: CITIES[0] },
  { id: "kitchen-05", title: "Modern Custom Kitchen Cabinetry", src: "/images/projects/modern-custom-kitchen-cabinetry.jpg", category: "category-1", location: CITIES[1] },
  { id: "kitchen-06", title: "Gray Custom Kitchen Cabinetry", src: "/images/projects/gray-custom-kitchen-cabinetry.jpg", category: "category-1", location: CITIES[2] },
  { id: "kitchen-07", title: "Custom Black Kitchen Cabinetry", src: "/images/projects/custom-black-kitchen-cabinetry.jpg", category: "category-1", location: CITIES[0] },
  { id: "kitchen-08", title: "Custom Black Kitchen Cabinets", src: "/images/projects/custom-black-kitchen-cabinets.jpg", category: "category-1", location: CITIES[1] },
  { id: "kitchen-09", title: "Kitchen Remodeling with Custom Cabinets", src: "/images/projects/kitchen-remodeling-custom-cabinets.jpg", category: "category-1", location: CITIES[2] },
  { id: "kitchen-10", title: "White Kitchen Cabinetry Remodel", src: "/images/projects/white-kitchen-cabinetry-remodel.jpg", category: "category-1", location: CITIES[0] },
  { id: "kitchen-11", title: "White Kitchen Remodeling Project", src: "/images/projects/white-kitchen-remodeling-project.jpg", category: "category-1", location: CITIES[1] },
  { id: "kitchen-12", title: "Custom Kitchen Remodel and Storage", src: "/images/projects/custom-kitchen-remodel-and-storage.jpg", category: "category-1", location: CITIES[2] },
  { id: "bathroom-01", title: "Bathroom Remodel Finished Results", src: "/images/projects/bathroom_remodel_finished_01.jpg", category: "category-2", location: CITIES[0], featured: true },
  { id: "bathroom-02", title: "Bathroom Remodel Finished Results II", src: "/images/projects/bathroom_remodel_finished_02.jpg", category: "category-2", location: CITIES[1] },
  { id: "bathroom-03", title: "Bathroom Remodel Finished Results III", src: "/images/projects/bathroom_remodel_finished_03.jpg", category: "category-2", location: CITIES[2] },
  { id: "bathroom-04", title: "Bathroom Remodel Finished Results IV", src: "/images/projects/bathroom_remodel_finished_04.jpg", category: "category-2", location: CITIES[0] },
  { id: "bathroom-05", title: "Bathroom Demolition and Renovation", src: "/images/projects/bathroom_demolition_01.jpg", category: "category-2", location: CITIES[1] },
  { id: "bathroom-06", title: "Custom Cabinetry for Bathroom Vanity", src: "/images/projects/cabinetry_kitchen_finished_02.jpg", category: "category-2", location: CITIES[2] },
  { id: "flooring-01", title: "Dark Wood Flooring Installation", src: "/images/projects/dark-wood-flooring-installation.jpg", category: "category-3", location: CITIES[0], featured: true },
  { id: "flooring-02", title: "Flooring and Staircase Remodeling", src: "/images/projects/flooring-and-staircase-remodeling.jpg", category: "category-3", location: CITIES[1] },
  { id: "flooring-03", title: "Residential Flooring Installation", src: "/images/projects/residential-flooring-installation.jpg", category: "category-3", location: CITIES[2] },
  { id: "flooring-04", title: "Flooring Closets and Hallway Renovation", src: "/images/projects/flooring_closets_hallway_01.jpg", category: "category-3", location: CITIES[0] },
  { id: "flooring-05", title: "Custom Walk-In Closet Installation", src: "/images/projects/custom-walk-in-closet-installation.jpg", category: "category-3", location: CITIES[1] },
  { id: "flooring-06", title: "Bedroom Closet Remodel", src: "/images/projects/bedroom_closet_remodel_01.jpg", category: "category-3", location: CITIES[2] },
  { id: "outdoor-01", title: "Custom Outdoor Kitchen Cabinetry", src: "/images/projects/custom-outdoor-kitchen-cabinetry.jpg", category: "category-4", location: CITIES[0], featured: true },
  { id: "outdoor-02", title: "Custom Outdoor Living Remodel", src: "/images/projects/custom-outdoor-living-remodel.jpg", category: "category-4", location: CITIES[1] },
  { id: "outdoor-03", title: "Custom Built-In Entertainment Center", src: "/images/projects/custom-built-in-entertainment-center.jpg", category: "category-4", location: CITIES[2] },
  { id: "outdoor-04", title: "Custom Laundry Room Cabinetry", src: "/images/projects/custom-laundry-room-cabinetry.jpg", category: "category-4", location: CITIES[0] },
  { id: "outdoor-05", title: "Custom Storage and Wine Cabinetry", src: "/images/projects/custom-storage-and-wine-cabinetry.jpg", category: "category-4", location: CITIES[1] },
=======
// ---------------------------------------------------------------------------
// Category filter tabs — Figma node 60:12582
// ---------------------------------------------------------------------------

export const GALLERY_CATEGORIES: GalleryCategoryTab[] = [
  { label: "All", value: "all" },
  { label: "Home remodel", value: "home-remodel" },
  { label: "Kitchens", value: "kitchens" },
  { label: "Bathrooms", value: "bathrooms" },
  { label: "Carpentry", value: "carpentry" },
  { label: "Living spaces", value: "living-spaces" },
  { label: "Tiling", value: "tiling" },
  { label: "Other", value: "other" },
];

// ---------------------------------------------------------------------------
// Gallery items — Figma node 60:12606, 60:12620, 60:12634 etc.
// ---------------------------------------------------------------------------

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gallery-01",
    title: "BATHROOM REMODELING",
    tag: "REMODELING",
    src: "/images/hero/image1.webp",
    category: "bathrooms",
    location: "Bonita Springs, FL",
    featured: true,
  },
  {
    id: "gallery-02",
    title: "FLOORING RENOVATION",
    tag: "FLOORING",
    src: "/images/hero/image2.webp",
    category: "home-remodel",
    location: "Estero, FL",
  },
  {
    id: "gallery-03",
    title: "CUSTOM WHITE OAK CABINETRY",
    tag: "KITCHEN",
    src: "/images/hero/image3.webp",
    category: "kitchens",
    location: "Naples, FL",
    featured: true,
  },
  {
    id: "gallery-04",
    title: "LUXURY MASTER SUITE VANITY",
    tag: "BATHROOMS",
    src: "/images/hero/image4.webp",
    category: "bathrooms",
    location: "Naples, FL",
  },
  {
    id: "gallery-05",
    title: "MODERN WALK-IN CLOSET",
    tag: "CARPENTRY",
    src: "/images/hero/image5.webp",
    category: "carpentry",
    location: "Marco Island, FL",
  },
  {
    id: "gallery-06",
    title: "OUTDOOR KITCHEN & LIVING",
    tag: "LIVING SPACES",
    src: "/images/hero/image6.webp",
    category: "living-spaces",
    location: "Fort Myers, FL",
  },
  {
    id: "gallery-07",
    title: "OPEN CONCEPT WHOLE HOME",
    tag: "HOME REMODEL",
    src: "/images/hero/image7.webp",
    category: "home-remodel",
    location: "Parkland, FL",
    featured: true,
  },
  {
    id: "gallery-08",
    title: "PORCELAIN TILE LIVING AREA",
    tag: "TILING",
    src: "/images/hero/image1.webp",
    category: "tiling",
    location: "Miami, FL",
  },
  {
    id: "gallery-09",
    title: "ARCHITECTURAL MILLWORK & PANELLING",
    tag: "CARPENTRY",
    src: "/images/hero/image2.webp",
    category: "carpentry",
    location: "Bonita Springs, FL",
  },
  {
    id: "gallery-10",
    title: "CUSTOM FLOATING MEDIA UNIT",
    tag: "OTHER",
    src: "/images/hero/image3.webp",
    category: "other",
    location: "Southwest Ranches, FL",
  },
>>>>>>> Stashed changes
];

export const GALLERY_SEO = {
<<<<<<< Updated upstream
  metaTitle: `Project Gallery | ${COMPANY_NAME} - Naples, FL`,
  metaDescription: "Browse our portfolio of custom cabinetry, kitchen remodels, bathroom renovations, flooring installations, and outdoor living projects across Southwest Florida.",
};
=======
  metaTitle: `Project Gallery | Custom Cabinetry & Remodeling Portfolio | ${COMPANY_NAME}`,
  metaDescription:
    "Explore Master Cabinets' portfolio of custom kitchens, luxury bathrooms, architectural cabinetry, walk-in closets, and whole-home remodeling across South Florida.",
} as const;
>>>>>>> Stashed changes
