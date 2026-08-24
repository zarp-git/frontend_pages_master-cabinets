// ---------------------------------------------------------------------------
// Gallery Page Types
// ---------------------------------------------------------------------------

/** The project categories available for filtering. */
export type GalleryCategory =
  | "all"
  | "category-1"
  | "category-2"
  | "category-3"
  | "category-4"
  | "category-5";

/** A single gallery image item. */
export interface GalleryItem {
  /** Unique identifier */
  id: string;
  /** Display title, e.g. "[Project Type] in [City]" */
  title: string;
  /** Image path */
  src: string;
  /** Category tag */
  category: Exclude<GalleryCategory, "all">;
  /** Location name, e.g. "[City], [State]" */
  location?: string;
  /** Featured images render larger in the masonry layout. */
  featured?: boolean;
}

/** Label/value pair used for filter tabs. */
export interface GalleryCategoryTab {
  label: string;
  value: GalleryCategory;
}
