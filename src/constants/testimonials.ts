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
    name: "[Client Name 1]",
    daysAgo: "[Time ago — e.g. 1 month ago]",
    rating: 5,
    serviceTag: "[Service hired]",
    images: [],
    text: "[Client testimonial about the service experience. Should highlight quality, professionalism, and the final result.]",
  },
  {
    id: 2,
    name: "[Client Name 2]",
    daysAgo: "[Time ago — e.g. 3 months ago]",
    rating: 5,
    serviceTag: "[Service hired]",
    images: [],
    text: "[Client testimonial about the service experience. May mention customer service, timeline, and value for money.]",
  },
  {
    id: 3,
    name: "[Client Name 3]",
    daysAgo: "[Time ago — e.g. 6 months ago]",
    rating: 5,
    serviceTag: "[Service hired]",
    images: [],
    text: "[Client testimonial about the service experience. Ideal to mention recommendation and overall satisfaction.]",
  },
  {
    id: 4,
    name: "[Client Name 4]",
    daysAgo: "[Time ago — e.g. 2 months ago]",
    rating: 5,
    serviceTag: "[Service hired]",
    images: [],
    text: "[Client testimonial about the service experience. Can highlight how the project transformed their outdoor space.]",
  },
  {
    id: 5,
    name: "[Client Name 5]",
    daysAgo: "[Time ago — e.g. 4 months ago]",
    rating: 5,
    serviceTag: "[Service hired]",
    images: [],
    text: "[Client testimonial about the service experience. Mention the team's professionalism and attention to detail.]",
  },
  {
    id: 6,
    name: "[Client Name 6]",
    daysAgo: "[Time ago — e.g. 5 months ago]",
    rating: 5,
    serviceTag: "[Service hired]",
    images: [],
    text: "[Client testimonial about the service experience. Highlight the speed of completion and cleanliness of the job site.]",
  },
  {
    id: 7,
    name: "[Client Name 7]",
    daysAgo: "[Time ago — e.g. 7 months ago]",
    rating: 5,
    serviceTag: "[Service hired]",
    images: [],
    text: "[Client testimonial about the service experience. Mention how the team exceeded expectations and delivered on time.]",
  },
];
