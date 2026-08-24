// ---------------------------------------------------------------------------
// Gallery Page Types — Figma spec 60:12187
// ---------------------------------------------------------------------------

/** The project categories available for filtering per Figma node 60:12582. */
export type GalleryCategory =
  | "all"
  | "home-remodel"
  | "kitchens"
  | "bathrooms"
  | "carpentry"
  | "living-spaces"
  | "tiling"
  | "other";

/** A single gallery showcase project item. */
export interface GalleryItem {
  id: string;
  title: string;
  tag: string;
  src: string;
  category: Exclude<GalleryCategory, "all">;
  location: string;
  featured?: boolean;
}

/** Label/value pair used for filter tabs. */
export interface GalleryCategoryTab {
  label: string;
  value: GalleryCategory;
}
