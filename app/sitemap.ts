import { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/blog/getBlogPosts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.steadyspend.com'

  const blogPosts = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified ? new Date(post.lastModified) : new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const routes = [
    '',
    '/tools',
    '/tools/monthly-budget',
    '/tools/take-home-pay-calculator',
    '/guides',
    '/blog',
    '/contact',
    '/privacy-policy',
    '/cookie-policy',
    '/disclaimer',
  ].map((route) => {
    let priority = 0.7

    if (route === '/tools/monthly-budget' || route === '/tools/take-home-pay-calculator') {
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

  return [...routes, ...blogPosts]
}