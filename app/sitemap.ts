import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://spotiflac.app'
  const pages = ['', '/download', '/features', '/about', '/contact', '/faq', '/privacy-policy', '/disclaimer']
  return pages.map(path => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === '/download' ? 0.9 : 0.7,
  }))
}
