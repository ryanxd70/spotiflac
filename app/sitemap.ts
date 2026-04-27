import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://spotiflac.app'
  const lastMod = new Date()

  return [
    {
      url: base,
      lastModified: lastMod,
      changeFrequency: 'weekly',
      priority: 1.0,
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
    // /features and /faq are homepage anchor sections (/#features, /#faq) — not standalone pages.
    // /download and /disclaimer are noindex — excluded per Google guidelines.
  ]
}
