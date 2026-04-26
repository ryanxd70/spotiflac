import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/disclaimer', '/download'],
      },
    ],
    sitemap: 'https://spotiflac.app/sitemap.xml',
    host: 'https://spotiflac.app',
  }
}
