import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug, getArticles } from "@/lib/blog-api";
import { ArticleDetail } from "@/presentation/components/organisms/blog/article-detail";
import { BlogReadingProgress } from "@/presentation/components/organisms/blog/blog-reading-progress";
import { getBlogExcerpt, getPrimaryBlogImage } from "@/lib/blog-content";
import { COMPANY_NAME, SITE_URL } from "@/constants/business-info";
import QuoteForm from "@/presentation/components/molecules/mc/QuoteForm";
import PricingCTASection from "@/presentation/components/organisms/home-page-sections/mc/PricingCTASection";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: `Article Not Found | ${COMPANY_NAME}`,
    };
  }

  const primaryImage = getPrimaryBlogImage(article.images);
  const excerpt = getBlogExcerpt(article.content);

  return {
    title: `${article.title} | ${COMPANY_NAME} Studio Journal`,
    description: excerpt,
    alternates: {
      canonical: `/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: excerpt,
      type: "article",
      publishedTime: article.published_at,
      authors: article.author ? [article.author.full_name] : undefined,
      images: primaryImage ? [{ url: primaryImage.url }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: excerpt,
      images: primaryImage ? [primaryImage.url] : undefined,
    },
  };
}

/**
 * ArticlePage — Figma node 48:10112 (Page 3: BLOG ARTICLE / SERVICE DETAIL)
 * 2-column layout: Left editorial content (720px) + Right sticky QuoteForm solid card (437px).
 * ZERO inline styles.
 */
export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const primaryImage = getPrimaryBlogImage(article.images);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    datePublished: article.published_at,
    dateModified: article.updated_at ?? article.published_at,
    author: article.author
      ? {
          "@type": "Person",
          name: article.author.full_name,
        }
      : undefined,
    image: primaryImage ? primaryImage.url : undefined,
    publisher: {
      "@type": "Organization",
      name: COMPANY_NAME,
      url: SITE_URL,
    },
  };

  return (
    <>
      <BlogReadingProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="w-full bg-white pt-24 md:pt-28">
        {/* ── Section 2: Main Article Body & Floating CTA (Node 48:10203) ── */}
        <section className="w-full px-4 sm:px-6 md:px-8 xl:px-16 max-w-[1364px] mx-auto py-10 md:py-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-16 items-start">
            {/* Left Column: Editorial Article Content (Node 60:12812) */}
            <div className="flex-1 min-w-0 max-w-full lg:max-w-[736px]">
              <ArticleDetail article={article} />
            </div>

            {/* Right Column: Sticky Quote Sidebar Card (Node 60:12820) */}
            <div className="w-full lg:w-[437px] shrink-0 sticky top-28">
              <QuoteForm
                variant="solid"
                showTitle
                className="shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* ── Section 3: Divider Line (Node 48:10414) ── */}
        <div className="max-w-[1364px] mx-auto px-4 sm:px-6 md:px-8 xl:px-16">
          <div className="w-full h-px bg-stone-200" />
        </div>

        {/* ── Section 4: Bottom Consultation CTA (Node 48:10896) ── */}
        <PricingCTASection />
      </main>
    </>
  );
}

export async function generateStaticParams() {
  try {
    const { data: articles } = await getArticles(1, 100);
    return articles.map((article) => ({
      slug: article.slug,
    }));
  } catch {
    return [];
  }
}
