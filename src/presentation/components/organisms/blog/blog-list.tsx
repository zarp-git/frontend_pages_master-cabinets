"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLine, RiArrowRightLine } from "@remixicon/react";
import PageHeading from "@/presentation/components/molecules/mc/PageHeading";
import LoadMoreButton from "@/presentation/components/molecules/mc/LoadMoreButton";
import {
  getBlogExcerpt,
  getBlogReadingTime,
  getPrimaryBlogImage,
} from "@/lib/blog-content";
import { DEMO_ARTICLE_META } from "@/constants/blog-demo";
import type { BlogArticleSummary } from "@/types/blog.type";

const PAGE_SIZE = 6;

function articleMeta(article: BlogArticleSummary) {
  const demo = DEMO_ARTICLE_META[article.slug];
  return {
    category: demo?.category ?? "Journal",
    readingMinutes: demo?.readingMinutes ?? getBlogReadingTime(article.content),
  };
}

interface BlogListProps {
  articles: BlogArticleSummary[];
}

/**
 * BlogList — Figma node 48:11240 (BLOG).
 *
 * Page lockup → a raised bezel featuring the newest post (image left, copy
 * right) → a 3-column grid of #E5DECD-bordered cards → the Load More pill.
 */
export function BlogList({ articles }: BlogListProps) {
  const [visible, setVisible] = useState(PAGE_SIZE);

  const [featured, ...rest] = articles;
  const shown = rest.slice(0, visible);
  const hasMore = rest.length > visible;

  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-full px-4 pb-24 pt-[92px] sm:pt-[104px] lg:pt-[120px] sm:px-8">
        <PageHeading
          kicker="Want to perfect your home remodel?"
          display="Get The Best Ideas Here"
        />
      </div>

      {featured && <FeaturedArticle article={featured} />}

      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-6 px-4 pt-8 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>

      {hasMore && (
        <div className="pt-10">
          <LoadMoreButton onClick={() => setVisible((v) => v + PAGE_SIZE)} />
        </div>
      )}

      {articles.length === 0 && (
        <p className="py-20 text-center font-sans text-lg text-[#666666]">
          No articles published yet — check back soon.
        </p>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Featured card — Figma `Link` > `Bezel` 1300×495
// ---------------------------------------------------------------------------
function FeaturedArticle({ article }: { article: BlogArticleSummary }) {
  const image = getPrimaryBlogImage(article.images);
  const { category, readingMinutes } = articleMeta(article);

  return (
    <div className="w-full px-4 sm:px-8">
      <Link
        href={`/blog/${article.slug}`}
        className="mx-auto block w-full max-w-[1300px] rounded-[32px] bg-black/[0.04] p-1.5 shadow-[0_24px_80px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:-translate-y-0.5"
      >
        <div className="grid grid-cols-1 overflow-hidden rounded-[26px] bg-white shadow-[0_1px_1px_rgba(255,255,255,0.60)] lg:grid-cols-2">
          <div className="relative min-h-[280px] bg-[#F0F0F0] lg:min-h-[483px]">
            {image && (
              <Image
                src={image.url}
                alt={image.alt ?? article.title}
                fill
                sizes="(min-width: 1024px) 644px, 100vw"
                className="object-cover"
                priority
              />
            )}
            <span className="absolute left-6 top-6 rounded-full bg-white/85 px-3.5 py-1.5 font-sans text-[10px] uppercase leading-4 tracking-[2px] text-black">
              Featured
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 p-8 sm:p-14">
            <p className="font-sans text-[10px] uppercase leading-4 tracking-[2px] text-[#666666]">
              {category} · {readingMinutes} min read
            </p>

            <h2 className="font-clash text-[clamp(28px,3.4vw,48px)] font-medium leading-[1.06] tracking-[-1px] text-black">
              {article.title}
            </h2>

            <p className="font-sans text-[18px] leading-[1.62] text-[#666666]">
              {article.meta_description ?? getBlogExcerpt(article.content)}
            </p>

            <span className="inline-flex w-fit items-center gap-3.5 rounded-full bg-[#403023] py-2 pl-5 pr-2">
              <span className="font-sans text-[13px] uppercase leading-5 tracking-[2.1px] text-white">
                Open the blog article
              </span>
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15"
                aria-hidden="true"
              >
                <RiArrowRightUpLine className="h-4 w-4 text-white" />
              </span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Grid card — Figma `Link` 411×489
// ---------------------------------------------------------------------------
function ArticleCard({ article }: { article: BlogArticleSummary }) {
  const image = getPrimaryBlogImage(article.images);
  const { category, readingMinutes } = articleMeta(article);

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-[28px] border border-[#E5DECD] bg-white transition-shadow hover:shadow-[0_9px_22px_rgba(40,31,19,0.08)]"
    >
      <div className="relative h-[221px] w-full bg-[#E8DFC8]">
        {image && (
          <Image
            src={image.url}
            alt={image.alt ?? article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 408px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-2.5">
          <span className="rounded-full bg-black/[0.04] px-2.5 py-1 font-clash text-[11px] font-medium uppercase leading-4 tracking-[0.7px] text-[#403023]">
            {category}
          </span>
          <span className="font-clash text-[12px] font-medium leading-[18px] text-[#8A7D6F]">
            {readingMinutes} min read
          </span>
        </div>

        <h3 className="font-clash text-[22px] font-medium leading-[1.04] tracking-[-0.2px] text-[#2C1F14]">
          {article.title}
        </h3>

        <p className="line-clamp-3 font-clash text-[13px] font-medium leading-[21px] text-[#5B4F45]">
          {article.meta_description ?? getBlogExcerpt(article.content)}
        </p>

        <span className="mt-auto flex items-center gap-1.5 pt-1">
          <span className="font-clash text-[13px] font-medium leading-5 text-[#403023]">
            Read more
          </span>
          <RiArrowRightLine className="h-3.5 w-3.5 text-[#403023] transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

export default BlogList;
