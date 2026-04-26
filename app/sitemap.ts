import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://spotiflac.app'
  const lastMod = new Date()

  return [
    // Core pages — indexable
    {
      url: base,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${base}/features`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/faq`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/about`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/contact`,
      lastModified: lastMod,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${base}/privacy-policy`,
      lastModified: lastMod,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    // NOTE: /download and /disclaimer are noindex — excluded from sitemap intentionally.
    // Google's guidelines say noindex pages should not appear in sitemaps.
  ]
}
