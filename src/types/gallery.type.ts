// ---------------------------------------------------------------------------
// Gallery Page Types - Figma node 60:12187
// ---------------------------------------------------------------------------

/** The project categories available for filtering (Figma filter chips). */
export type GalleryCategory =
  | "all"
  | "home-remodel"
  | "kitchens"
  | "bathrooms"
  | "carpentry"
  | "living-spaces"
  | "tiling"
  | "other";

/** A single gallery project card. */
export interface GalleryItem {
  /** Unique identifier */
  id: string;
  /** Display title - rendered uppercase on the card */
  title: string;
  /** Image path */
  src: string;
  /** Category used by the filter chips */
  category: Exclude<GalleryCategory, "all">;
  /** Green badge shown over the image, e.g. "REMODELING" */
  badge: string;
  /** Location line, e.g. "Naples, FL" */
  location: string;
  /** Featured images render larger in the masonry layout. */
  featured?: boolean;
}

/** Label/value pair used for filter chips. */
export interface GalleryCategoryTab {
  label: string;
  value: GalleryCategory;
}
