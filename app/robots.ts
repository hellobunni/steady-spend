import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Update this with your actual domain when you have it
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.steadyspend.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
