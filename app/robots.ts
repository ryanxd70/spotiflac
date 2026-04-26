import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Block noindex pages from crawl budget wastage
        disallow: ['/disclaimer', '/download'],
      },
    ],
    sitemap: 'https://spotiflac.app/sitemap.xml',
    // 'host' directive is non-standard and ignored by Google — removed
  }
}
