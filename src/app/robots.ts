import { MetadataRoute } from 'next'
import { SITE_URL } from '@/constants/business-info'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Keep private/non-indexable routes out of search results.
      // Note: AI crawlers (GPTBot, ClaudeBot, etc.) are intentionally NOT blocked.
      disallow: ['/maintenance', '/api/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
