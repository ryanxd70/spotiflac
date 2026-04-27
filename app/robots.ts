import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // noindex pages + orphaned standalone pages that duplicate homepage sections
        disallow: ['/disclaimer', '/download', '/features', '/faq'],
      },
    ],
    sitemap: 'https://spotiflac.app/sitemap.xml',
  }
}
