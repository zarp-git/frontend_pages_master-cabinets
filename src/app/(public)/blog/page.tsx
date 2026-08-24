import type { Metadata } from "next";
import Image from "next/image";
import { SITE_URL, COMPANY_NAME } from "@/constants/business-info";

export const metadata: Metadata = {
  title: `Blog | ${COMPANY_NAME}`,
  description:
    "[Blog meta description — describe the type of content published: tips, guides, inspiration, etc.]",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: `Blog | ${COMPANY_NAME}`,
    description:
      "[Blog meta description — describe the type of content published: tips, guides, inspiration, etc.]",
    url: `${SITE_URL}/blog`,
    siteName: COMPANY_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${COMPANY_NAME}`,
    description:
      "[Blog meta description — describe the type of content published: tips, guides, inspiration, etc.]",
  },
};

// ---------------------------------------------------------------------------
// Placeholder blog posts — replace with real data from your CMS/API
// ---------------------------------------------------------------------------
const PLACEHOLDER_POSTS = Array.from({ length: 3 }, (_, i) => ({
  id: i + 1,
  slug: `post-${i + 1}`,
  title: `[Blog Post Title ${i + 1} — e.g. "Top 5 Things to Know Before Hiring a Professional"]`,
  excerpt: "[Post excerpt — 1-2 sentences summarizing the article content and why the reader should care.]",
  date: "[Date — e.g. March 2025]",
  readingTime: "[X min read]",
  category: "[Category — e.g. Tips & Guides]",
  image: "/images/projects/gray-custom-kitchen-cabinetry.jpg",
}));

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function BlogPage() {
  return (
    <main className="pt-28 pb-16 bg-gray-50 min-h-screen">
      <div className="section-container max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-sm font-rubik uppercase tracking-[3px] text-primary font-medium mb-2">
            Our Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold font-hanken text-gray-900 uppercase mb-4">
            Latest Articles
          </h1>
          <p className="text-gray-600 font-rubik max-w-2xl mx-auto">
            [Blog sub-heading — e.g. "Discover tips, guides, and inspiration from our team of experts."]
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLACEHOLDER_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-48 w-full bg-gray-700 flex items-center justify-center">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={120}
                  height={40}
                  className="object-contain opacity-30"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-2">
                <span className="text-xs font-rubik text-primary font-semibold uppercase tracking-wide">
                  {post.category}
                </span>
                <h2 className="text-base font-bold font-hanken text-gray-900 leading-snug line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 font-rubik text-sm line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400 font-rubik mt-1">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readingTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
