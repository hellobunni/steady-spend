import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://steadyspend.com'

  const routes = [
    '',
    '/tools',
    '/tools/monthly-budget',
    '/guides',
    '/blog',
    '/privacy-policy',
    '/cookie-policy',
    '/disclaimer',
  ].map((route) => {
    let priority = 0.7

    if (route === '/tools/monthly-budget') {
      priority = 1.0
    } else if (route === '') {
      priority = 0.8
    } else if (
      route === '/privacy-policy' ||
      route === '/cookie-policy' ||
      route === '/disclaimer'
    ) {
      priority = 0.3
    }

    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority,
    }
  })

  return routes
}