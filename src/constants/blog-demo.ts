import type { BlogArticle } from "@/types/blog.type";

// ---------------------------------------------------------------------------
// Demo blog content - Figma nodes 48:11240 (BLOG) and 48:10112 (BLOG ARTICLE)
//
// The live CMS is reached through BLOG_API_BASE_URL. When that variable is not
// configured (local dev, previews) the blog falls back to this set so the page
// still renders the designed layout instead of an error state.
// ---------------------------------------------------------------------------

const AUTHOR = {
  id: "master-cabinets",
  first_name: "Master",
  last_name: "Cabinets",
  full_name: "Master Cabinets",
  biography: "Studio Journal",
  avatar: null,
};

interface DemoSeed {
  slug: string;
  title: string;
  category: string;
  readingMinutes: number;
  excerpt: string;
  image: string;
  content: string;
}

const SEEDS: DemoSeed[] = [
  {
    slug: "choosing-materials-that-age-beautifully",
    title: "Choosing Materials That Age Beautifully",
    category: "Design Philosophy",
    readingMinutes: 6,
    excerpt:
      "Why the best kitchens start with routines, not renderings - and how a single point of contact changes the entire remodel.",
    image: "/images/projects/dark-wood-flooring-installation.jpg",
    content: `The character of a space is shaped by the materials you see, the details you touch, and the decisions most people never notice. A finish that looks identical in a showroom can diverge dramatically after five years of sunlight, humidity, and daily use.

## Grain, tone, and movement

White oak reads calm and architectural; walnut brings warmth and depth. Rift-cut veneers keep lines quiet and linear, while plain-sawn faces show more expressive figure. We match the cut to the room - busier grain for accent pieces, restrained grain for large expanses.

## Finishes built for Florida

In South Florida, humidity and light are the real test. We specify finishes and construction that tolerate coastal conditions, and we coordinate countertops, hardware, and lighting so the palette resolves as one considered whole rather than a collection of separate choices.

## Hardware you feel every day

Soft-close runners, solid-brass pulls, and integrated lighting are the details you interact with hundreds of times a week. They cost little relative to the whole project and carry most of the perceived quality.`,
  },
  {
    slug: "living-room-refresh-open-floor-plan",
    title: "A living room refresh that works with an open floor plan",
    category: "Whole-home",
    readingMinutes: 7,
    excerpt:
      "Open concept homes need remodeling decisions that carry across rooms. Here's how we keep finishes, lighting, and flow consistent.",
    image: "/images/projects/remodeling_living-room_finished_01.jpg",
    content: `Open plans reward restraint. When the kitchen, dining, and living areas share sightlines, every finish decision is really three decisions at once.

## Start with the flooring

A single continuous floor is the cheapest way to make an open plan read as one room. Changing material at a threshold that has no wall above it almost always looks like an accident.

## Let the cabinetry set the palette

Cabinet colour usually carries the most visual weight, so we resolve it first and pull the paint, upholstery, and stone toward it rather than the other way around.

## Light the zones, not the room

Layered lighting - task over the counters, ambient in the living zone, accent on the millwork - lets one space do several jobs without feeling like a showroom.`,
  },
  {
    slug: "hiring-a-remodeler-in-southwest-florida",
    title: "Hiring a remodeler in Southwest Florida: 8 questions worth asking",
    category: "How it works",
    readingMinutes: 6,
    excerpt:
      "Across our years remodeling homes from Naples to Port St. Lucie, these are the questions that separate a real contractor from a risk.",
    image: "/images/projects/full-kitchen-remodel-custom-cabinetry.jpg",
    content: `Most remodeling problems are scheduling and communication problems long before they are craftsmanship problems. These questions surface both.

## Who is my single point of contact?

If the answer involves more than one name, expect to become the project manager yourself.

## Is the crew employed or subcontracted?

Neither answer is disqualifying, but it changes how scheduling conflicts get resolved and who is accountable for a callback.

## What does the written proposal actually cover?

A real proposal names materials, hardware, and finish levels. A number on a single line is a placeholder, not a price.

## What happens when something is found behind the wall?

Every older home has a surprise. Ask how change orders are priced before you need one.`,
  },
  {
    slug: "durable-materials-coastal-florida-remodel",
    title: "Choosing durable materials for a coastal Florida remodel",
    category: "Materials",
    readingMinutes: 5,
    excerpt:
      "Salt air and sun are hard on cabinets, counters, and hardware. Here are the materials we trust to hold up year after year.",
    image: "/images/projects/bathroom_remodel_finished_02.jpg",
    content: `Coastal conditions are unforgiving. Salt carries inland further than most homeowners expect, and afternoon sun through impact glass fades finishes quickly.

## Cabinet boxes

Plywood boxes with a moisture-resistant core outlast particleboard by years in humid rooms. It is the least visible upgrade with the largest return.

## Hardware

Solid brass and marine-grade stainless resist pitting. Plated zinc looks identical on day one and rarely survives three seasons near the water.

## Countertops

Quartz is stable indoors but discolours in direct sun. For outdoor kitchens and sun-flooded rooms we specify porcelain or a dense natural stone instead.`,
  },
  {
    slug: "planning-a-kitchen-around-how-you-cook",
    title: "Planning a kitchen around how you actually cook",
    category: "Design Philosophy",
    readingMinutes: 6,
    excerpt:
      "Work triangles, landing zones, and the storage decisions that matter more than any appliance you can buy.",
    image: "/images/projects/luxury-kitchen-remodel-custom-cabinets.jpg",
    content: `A kitchen plan should start with a conversation about routines, not a catalogue of appliances.

## Landing zones

Every appliance needs a surface beside it. Missing landing space is the single most common complaint we hear about kitchens designed on paper.

## Storage where the task happens

Spices beside the range, sheet pans beside the oven, glassware beside the sink. Storage that follows the task removes dozens of steps a day.

## Leave room for the way you entertain

If the island is where people gather, it should not also be the only prep surface.`,
  },
  {
    slug: "what-a-walk-in-closet-should-actually-do",
    title: "What a walk-in closet should actually do",
    category: "Living spaces",
    readingMinutes: 5,
    excerpt:
      "Custom storage is not about more shelving - it is about matching the build to what you own and how you get dressed.",
    image: "/images/projects/custom-walk-in-closet-installation.jpg",
    content: `Closets fail when they are designed as generic shelving rather than around a real inventory.

## Measure what you own

We count hanging lengths, shoe pairs, and folded stacks before drawing anything. The layout follows the count.

## Mix hanging heights

Double-hang doubles capacity for shirts and folded trousers; long-hang is reserved for the small number of garments that genuinely need it.

## Light the interior

Integrated LED strips inside the closet change how usable it feels far more than another drawer bank would.`,
  },
];

function toArticle(seed: DemoSeed, index: number): BlogArticle {
  const published = new Date(Date.UTC(2026, 6, 28 - index * 9)).toISOString();
  return {
    id: seed.slug,
    title: seed.title,
    language: "en_us",
    slug: seed.slug,
    content: seed.content,
    meta_description: seed.excerpt,
    published_at: published,
    display_order: index,
    images: [{ url: seed.image, alt: seed.title, alt_text: seed.title }],
    status: "published",
    created_at: published,
    updated_at: published,
    author: AUTHOR,
  };
}

export const DEMO_ARTICLES: BlogArticle[] = SEEDS.map(toArticle);

/** Category label + reading time used by the card chips (Figma 48:11240). */
export const DEMO_ARTICLE_META: Record<
  string,
  { category: string; readingMinutes: number }
> = Object.fromEntries(
  SEEDS.map((s) => [
    s.slug,
    { category: s.category, readingMinutes: s.readingMinutes },
  ]),
);
