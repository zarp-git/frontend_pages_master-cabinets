// ---------------------------------------------------------------------------
// Testimonials / Reviews - Single Source of Truth
// ---------------------------------------------------------------------------

export interface Review {
  id: number;
  name: string;
  daysAgo: string;
  rating: number;
  serviceTag: string;
  images: string[];
  text: string;
}

const IMG = "/images/testimonials-reviews/review-photos";

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Emily R.",
    daysAgo: "1 month ago",
    rating: 5,
    serviceTag: "Kitchen Remodeling",
    images: [],
    text: "Master Cabinets transformed our kitchen completely. The craftsmanship is outstanding - every cabinet fits perfectly and the finish is flawless. Highly recommend!",
  },
  {
    id: 2,
    name: "Daniel M.",
    daysAgo: "3 months ago",
    rating: 5,
    serviceTag: "Bathroom Remodeling",
    images: [],
    text: "Excellent work on our master bathroom. The team was professional, clean, and finished ahead of schedule. The custom cabinetry exceeded our expectations.",
  },
  {
    id: 3,
    name: "Michael A.",
    daysAgo: "2 months ago",
    rating: 5,
    serviceTag: "Custom Cabinetry",
    images: [],
    text: "We had our walk-in closet completely redesigned. The attention to detail is remarkable. Every inch of space is now perfectly utilized.",
  },
  {
    id: 4,
    name: "Sarah T.",
    daysAgo: "6 weeks ago",
    rating: 5,
    serviceTag: "Bathroom Remodeling",
    images: [],
    text: "From the initial consultation to the final installation, everything was handled with care. Our bathroom looks like it belongs in a magazine.",
  },
  {
    id: 5,
    name: "James L.",
    daysAgo: "4 months ago",
    rating: 5,
    serviceTag: "Home Remodeling",
    images: [],
    text: "We hired Master Cabinets for a full kitchen and living room remodel. The team was organized, communicated clearly throughout, and delivered results that wowed us. The whole project ran smoothly from start to finish.",
  },
  {
    id: 6,
    name: "Maria G.",
    daysAgo: "5 months ago",
    rating: 5,
    serviceTag: "Flooring",
    images: [],
    text: "The new flooring looks incredible. Master Cabinets helped us choose the right material and the installation was clean and fast. I'm amazed at how much it changed the feel of our home.",
  },
  {
    id: 7,
    name: "Robert K.",
    daysAgo: "7 months ago",
    rating: 5,
    serviceTag: "Walk-In Closets & Storage",
    images: [],
    text: "Our new walk-in closet is a dream. The custom storage solutions they designed make use of every square foot. The team was respectful, punctual, and truly skilled.",
  },
];

// ---------------------------------------------------------------------------
// Master Cabinets review cards - Figma nodes 17:2789 (home) / 60:18380 (reviews)
// ---------------------------------------------------------------------------

/** Filter chips shared by the Reviews and Gallery pages (Figma 60:18380 / 60:12187). */
export const MC_FILTER_CATEGORIES = [
  "All",
  "Home remodel",
  "Kitchens",
  "Bathrooms",
  "Carpentry",
  "Living spaces",
  "Tiling",
  "Other",
] as const;

export type McFilterCategory = (typeof MC_FILTER_CATEGORIES)[number];

export interface McReview {
  authorName: string;
  rating: number;
  quote: string;
  serviceTag: string;
  locationTag: string;
  category: Exclude<McFilterCategory, "All">;
}

export const MC_REVIEWS: McReview[] = [
  {
    authorName: "Emily R.",
    rating: 5,
    quote:
      "Master Cabinets completely transformed our kitchen. The new cabinetry is beautiful, functional, and perfectly designed for our space. The team communicated clearly throughout the project and paid attention to every detail.",
    serviceTag: "Kitchen Remodeling",
    locationTag: "Bonita, FL",
    category: "Kitchens",
  },
  {
    authorName: "Daniel M.",
    rating: 5,
    quote:
      "Our bathroom renovation turned out better than we imagined. Master Cabinets helped us create a modern, comfortable space with excellent storage and high quality finishes. The entire process felt organized and professional.",
    serviceTag: "Bathroom Remodeling",
    locationTag: "Bonita, FL",
    category: "Bathrooms",
  },
  {
    authorName: "Michael A.",
    rating: 5,
    quote:
      "The custom cabinets made a huge difference in both the appearance and functionality of our home. Master Cabinets listened to what we needed and delivered a solution that feels elegant, practical, and completely tailored to us.",
    serviceTag: "Cabinetry",
    locationTag: "Bonita, FL",
    category: "Home remodel",
  },
  {
    authorName: "Sarah T.",
    rating: 5,
    quote:
      "We hired Master Cabinets for several areas of our home, including the kitchen, bathrooms, and custom storage. Everything feels cohesive, thoughtfully designed, and built to last. We are extremely happy with the final result.",
    serviceTag: "Bathroom Remodeling",
    locationTag: "Fort Myers, FL",
    category: "Bathrooms",
  },
  {
    authorName: "Chris H.",
    rating: 5,
    quote:
      "Great craftsmanship on our custom deck framing. The crew was punctual and cleaned up after themselves every day. Only minor hiccup was a small delay in materials, but the end result was worth the wait.",
    serviceTag: "Carpentry",
    locationTag: "Miami, FL",
    category: "Carpentry",
  },
  {
    authorName: "Sofia R.",
    rating: 5,
    quote:
      "We had our closets redone and it completely changed how we use the space. Everything is organized, custom fit, and beautifully built. You can tell these guys take real pride in their work.",
    serviceTag: "Custom Closets",
    locationTag: "Bonita, FL",
    category: "Living spaces",
  },
  {
    authorName: "Robert C.",
    rating: 5,
    quote:
      "From the first consultation to the final walkthrough, the team was professional and easy to work with. They remodeled our master bathroom and the craftsmanship on the vanity is next level. Highly recommend.",
    serviceTag: "Bathroom Remodeling",
    locationTag: "Fort Myers, FL",
    category: "Bathrooms",
  },
  {
    authorName: "Amanda P.",
    rating: 5,
    quote:
      "Master Cabinets completely transformed our kitchen. The new cabinetry is beautiful, functional, and perfectly designed for our space. The team communicated clearly throughout the project and paid attention to every detail.",
    serviceTag: "Cabinetry",
    locationTag: "Bonita, FL",
    category: "Kitchens",
  },
  {
    authorName: "Iana M.",
    rating: 5,
    quote:
      "Our bathroom renovation turned out better than we imagined. Master Cabinets helped us create a modern, comfortable space with excellent storage and high quality finishes. The entire process felt organized and professional.",
    serviceTag: "Bathroom Remodeling",
    locationTag: "Bonita, FL",
    category: "Bathrooms",
  },
  {
    authorName: "Peter K.",
    rating: 5,
    quote:
      "They handled flooring, painting, and the built-ins for our living room in one go. One contact for everything meant no finger-pointing and no wasted weeks between trades.",
    serviceTag: "Home Remodeling",
    locationTag: "Naples, FL",
    category: "Home remodel",
  },
  {
    authorName: "Laura B.",
    rating: 5,
    quote:
      "The tile work in our guest bath is immaculate - perfectly level, tight joints, and they matched the pattern around every corner. Small details, big difference.",
    serviceTag: "Tiling",
    locationTag: "Estero, FL",
    category: "Tiling",
  },
  {
    authorName: "Marcus D.",
    rating: 5,
    quote:
      "Our outdoor kitchen came out exactly as it was drawn. Materials hold up to the sun and salt air, and the install crew left the site spotless every evening.",
    serviceTag: "Outdoor Living",
    locationTag: "Marco Island, FL",
    category: "Other",
  },
];

/** First four cards shown on the homepage rail. */
export const HOME_REVIEWS = MC_REVIEWS.slice(0, 4);
