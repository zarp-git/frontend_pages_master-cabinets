// ---------------------------------------------------------------------------
// Testimonials / Reviews — Single Source of Truth
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
    text: "Master Cabinets transformed our kitchen completely. The craftsmanship is outstanding — every cabinet fits perfectly and the finish is flawless. Highly recommend!",
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
