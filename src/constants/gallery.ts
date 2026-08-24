import type { GalleryItem, GalleryCategoryTab } from "@/types/gallery.type";
import { COMPANY_NAME } from "@/constants/business-info";

// ---------------------------------------------------------------------------
// Category filter chips - Figma node 60:12187
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

const P = "/images/projects";

// ---------------------------------------------------------------------------
// Gallery items - real Master Cabinets project photography
// ---------------------------------------------------------------------------

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g-01", title: "Bathroom Remodeling",              src: `${P}/bathroom_remodel_finished_01.jpg`,          category: "bathrooms",     badge: "Remodeling",      location: "Bonita Springs, FL", featured: true },
  { id: "g-02", title: "Flooring Renovation",              src: `${P}/dark-wood-flooring-installation.jpg`,       category: "home-remodel",  badge: "Flooring",        location: "Estero, FL" },
  { id: "g-03", title: "Interior Hallway Renovation",      src: `${P}/painting_flooring_hallway_finished_01.jpg`, category: "home-remodel",  badge: "Home Remodeling", location: "Miami, FL" },
  { id: "g-04", title: "Custom Walk-In Closet",            src: `${P}/custom-walk-in-closet-installation.jpg`,    category: "living-spaces", badge: "Living Spaces",   location: "Sarasota, FL" },
  { id: "g-05", title: "Spa-Style Bathroom Suite",         src: `${P}/bathroom_remodel_finished_03.jpg`,         category: "bathrooms",     badge: "Bathrooms",       location: "Naples, FL" },
  { id: "g-06", title: "Luxury Kitchen Remodel",           src: `${P}/luxury-kitchen-remodel-custom-cabinets.jpg`,category: "kitchens",      badge: "Kitchens",        location: "Naples, FL", featured: true },
  { id: "g-07", title: "Custom Outdoor Kitchen",           src: `${P}/custom-outdoor-kitchen-cabinetry.jpg`,      category: "other",         badge: "Outdoor Living",  location: "Naples, FL" },
  { id: "g-08", title: "Modern Custom Kitchen Cabinetry",  src: `${P}/modern-custom-kitchen-cabinetry.jpg`,       category: "kitchens",      badge: "Kitchens",        location: "Fort Myers, FL" },
  { id: "g-09", title: "Custom Built-In Entertainment Center", src: `${P}/custom-built-in-entertainment-center.jpg`, category: "carpentry", badge: "Carpentry",       location: "Naples, FL" },
  { id: "g-10", title: "Master Bathroom Vanity",           src: `${P}/bathroom_remodel_finished_02.jpg`,          category: "bathrooms",     badge: "Bathrooms",       location: "Naples, FL" },
  { id: "g-11", title: "Tiled Shower & Tub Surround",      src: `${P}/bathroom_remodel_finished_04.jpg`,          category: "tiling",        badge: "Tiling",          location: "Naples, FL" },
  { id: "g-12", title: "Living Room Remodel",              src: `${P}/remodeling_living-room_finished_01.jpg`,    category: "living-spaces", badge: "Living Spaces",   location: "Naples, FL" },
  { id: "g-13", title: "Custom Kitchen Cabinetry Remodel", src: `${P}/custom-kitchen-cabinetry-remodel.jpg`,      category: "kitchens",      badge: "Kitchens",        location: "Fort Myers, FL" },
  { id: "g-14", title: "Full Kitchen Remodel",             src: `${P}/full-kitchen-remodel-custom-cabinetry.jpg`, category: "kitchens",      badge: "Kitchens",        location: "Marco Island, FL" },
  { id: "g-15", title: "Custom White Kitchen Cabinetry",   src: `${P}/custom-white-kitchen-cabinetry.jpg`,        category: "kitchens",      badge: "Kitchens",        location: "Naples, FL" },
  { id: "g-16", title: "Gray Custom Kitchen Cabinetry",    src: `${P}/gray-custom-kitchen-cabinetry.jpg`,         category: "kitchens",      badge: "Kitchens",        location: "Bonita Springs, FL" },
  { id: "g-17", title: "Flooring & Staircase Remodeling",  src: `${P}/flooring-and-staircase-remodeling.jpg`,     category: "home-remodel",  badge: "Flooring",        location: "Fort Myers, FL" },
  { id: "g-18", title: "Residential Flooring Installation",src: `${P}/residential-flooring-installation.jpg`,     category: "home-remodel",  badge: "Flooring",        location: "Marco Island, FL" },
  { id: "g-19", title: "Bedroom Closet Remodel",           src: `${P}/bedroom_closet_remodel_01.jpg`,            category: "living-spaces", badge: "Living Spaces",   location: "Naples, FL" },
  { id: "g-20", title: "Custom Outdoor Living Remodel",    src: `${P}/custom-outdoor-living-remodel.jpg`,         category: "other",         badge: "Outdoor Living",  location: "Fort Myers, FL" },
  { id: "g-21", title: "Custom Laundry Room Cabinetry",    src: `${P}/custom-laundry-room-cabinetry.jpg`,         category: "carpentry",     badge: "Carpentry",       location: "Naples, FL" },
  { id: "g-22", title: "Custom Storage & Wine Cabinetry",  src: `${P}/custom-storage-and-wine-cabinetry.jpg`,     category: "carpentry",     badge: "Carpentry",       location: "Fort Myers, FL" },
];

// ---------------------------------------------------------------------------
// SEO metadata
// ---------------------------------------------------------------------------

export const GALLERY_SEO = {
  metaTitle: `Project Gallery | ${COMPANY_NAME} - Naples, FL`,
  metaDescription:
    "Browse our portfolio of custom cabinetry, kitchen remodels, bathroom renovations, flooring installations, and outdoor living projects across Southwest Florida.",
};
