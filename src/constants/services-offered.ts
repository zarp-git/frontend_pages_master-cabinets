// ---------------------------------------------------------------------------
// Services offered - single source of truth for the homepage interactive list
// and the contact wizard's service chips (Figma node 17:2200).
// ---------------------------------------------------------------------------

export interface ServiceOffered {
  /** Two-digit index shown beside the label */
  index: string;
  label: string;
  /** Photo used by the homepage panel */
  image: string;
}

const P = "/images/projects";

export const SERVICES_OFFERED: ServiceOffered[] = [
  { index: "01", label: "Home Remodeling",             image: `${P}/full-kitchen-remodel-custom-cabinetry.jpg` },
  { index: "02", label: "Custom Cabinetry",            image: `${P}/cabinetry_kitchen_finished_02.jpg` },
  { index: "03", label: "Walk-In Closets & Storage",   image: `${P}/custom-walk-in-closet-installation.jpg` },
  { index: "04", label: "Bathrooms & Vanities",        image: `${P}/bathroom_remodel_finished_02.jpg` },
  { index: "05", label: "Flooring",                    image: `${P}/dark-wood-flooring-installation.jpg` },
  { index: "06", label: "Interior & Exterior Painting", image: `${P}/painting_hallway_finished_01.jpg` },
  { index: "07", label: "Custom Outdoor Living",       image: `${P}/custom-outdoor-living-remodel.jpg` },
  { index: "08", label: "Electrical & Structural Work", image: `${P}/remodeling_living-room_construction_02.jpg` },
  { index: "09", label: "Architectural Millwork",      image: `${P}/custom-built-in-entertainment-center.jpg` },
];

/** Labels only - used by the contact wizard chips, plus an "Other" escape hatch. */
export const SERVICE_CHOICE_LABELS: string[] = [
  ...SERVICES_OFFERED.map((s) => s.label),
  "Other",
];
