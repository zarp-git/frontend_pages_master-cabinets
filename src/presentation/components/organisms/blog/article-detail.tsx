"use client";

import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import QuoteForm from "@/presentation/components/molecules/mc/QuoteForm";
import type { BlogArticleSummary } from "@/types/blog.type";
import { getPrimaryBlogImage, cleanMarkdownContent } from "@/lib/blog-content";

interface ArticleDetailProps {
  article: BlogArticleSummary;
}

/**
 * ArticleDetail - Figma node 48:10112 (BLOG ARTICLE).
 *
 * Two columns with a 48px gutter: a 720px article rail (radius-26 hero image,
 * Clash 60 title, bezelled author chip, Segoe 20/32 body, Clash 30 headings)
 * and a 437px sticky quote card in #F3F4F6.
 */
export function ArticleDetail({ article }: ArticleDetailProps) {
  const primaryImage = getPrimaryBlogImage(article.images);
  const authorName = article.author?.full_name ?? "Master Cabinets";
  const authorRole = article.author?.biography ?? "Studio Journal";

  return (
    <div className="mx-auto flex w-full max-w-[1236px] flex-col gap-12 xl:flex-row">
      {/* Article rail */}
      <article className="flex w-full min-w-0 flex-col gap-12 xl:max-w-[720px]">
        {primaryImage && (
          <div className="relative h-[240px] w-full overflow-hidden rounded-[26px] bg-[#F0F0F0] shadow-[0_1px_1px_rgba(255,255,255,0.60)] sm:h-[392px]">
            <Image
              src={primaryImage.url}
              alt={primaryImage.alt || article.title}
              fill
              sizes="(min-width: 1280px) 720px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="flex flex-col">
          <h1 className="font-clash text-[clamp(32px,4.2vw,60px)] font-medium leading-[1.03] tracking-[-1.2px] text-black">
            {article.title}
          </h1>

          {/* Author chip */}
          <div className="mt-8 w-fit rounded-[32px] bg-black/[0.04] p-1.5 shadow-[0_0_0_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-4 rounded-[26px] bg-white px-5 py-4 shadow-[0_1px_1px_rgba(255,255,255,0.60)]">
              {article.author?.avatar ? (
                <Image
                  src={article.author.avatar.url}
                  alt={authorName}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black/[0.04] font-serif italic text-[16px] text-[#403023]"
                  aria-hidden="true"
                >
                  {authorName.charAt(0)}
                </span>
              )}
              <span className="flex flex-col leading-tight">
                <span className="font-sans text-[15px] text-[#111827]">
                  {authorName}
                </span>
                <span className="font-sans text-[13px] text-[#8A7D6F]">
                  {authorRole}
                </span>
              </span>
            </div>
          </div>

          {/* Body */}
          <div
            className={[
              "mt-10 max-w-none font-sans text-[clamp(16px,1.4vw,20px)] leading-[1.62] text-[#666666]",
              "[&_p]:mt-6",
              "[&_h2]:mt-16 [&_h2]:font-clash [&_h2]:text-[clamp(22px,2.2vw,30px)] [&_h2]:font-medium [&_h2]:leading-[1.37] [&_h2]:tracking-[-0.6px] [&_h2]:text-black",
              "[&_h3]:mt-10 [&_h3]:font-clash [&_h3]:text-[22px] [&_h3]:font-medium [&_h3]:text-black",
              "[&_h2+p]:mt-6",
              "[&_ul]:mt-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mt-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mt-2",
              "[&_a]:text-[#403023] [&_a]:underline",
              "[&_img]:mt-8 [&_img]:rounded-[26px]",
              "[&_blockquote]:mt-8 [&_blockquote]:border-l-2 [&_blockquote]:border-[#958272] [&_blockquote]:pl-6 [&_blockquote]:italic",
            ].join(" ")}
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {cleanMarkdownContent(article.content)}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      {/* Quote card */}
      <aside className="w-full min-w-0 xl:w-[437px] xl:shrink-0">
        <div className="xl:sticky xl:top-[120px]">
          <QuoteForm
            variant="solid"
            showTitle
            title="Get your home remodel quote"
          />
        </div>
      </aside>
    </div>
  );
}

export default ArticleDetail;
