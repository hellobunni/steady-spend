import Link from 'next/link'
import { getBlogPosts } from '@/lib/blog/getBlogPosts'

export default function Footer() {
  const blogPosts = getBlogPosts()
  const popularPosts = blogPosts.slice(0, 3)

  return (
    <footer className="bg-white border-t border-gray-200 mt-0">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Tools</h3>
            <nav aria-label="Footer tools navigation" className="flex flex-col gap-2">
              <Link href="/tools" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                All Tools
              </Link>
              <Link href="/tools/monthly-budget" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                Monthly Budget Calculator
              </Link>
              <Link href="/tools/take-home-pay" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                Take Home Pay Calculator
              </Link>
            </nav>
          </div>

          {/* Blog */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Blog</h3>
            <nav aria-label="Footer blog navigation" className="flex flex-col gap-2">
              <Link href="/blog" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                All Posts
              </Link>
              {popularPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="text-sm text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  {post.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Legal</h3>
            <nav aria-label="Footer legal navigation" className="flex flex-col gap-2">
              <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                Cookie Policy
              </Link>
              <Link href="/disclaimer" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
                Disclaimer
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500 text-center">© 2025 SteadySpend.com · Understand your money, spend with confidence</p>
        </div>
      </div>
    </footer>
  )
}


