import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Update this with your actual domain when you have it
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://steadyspend.com'

  // Static pages
  const routes = [
    '',
    '/tools',
    '/tools/monthly-budget',
    '/guides',
    '/blog',
    '/privacy-policy',
    '/cookie-policy',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : route === '/tools/monthly-budget' ? 0.9 : 0.7,
  }))

  return routes
}
