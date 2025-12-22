import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-0">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Home
            </Link>
            <Link href="/tools" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Tools
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Blog
            </Link>
            <Link href="/guides" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Guides
            </Link>
            <Link href="/privacy-policy" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Privacy
            </Link>
            <Link href="/disclaimer" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Disclaimer
            </Link>
            <Link href="/cookie-policy" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Cookie Policy
            </Link>
          </nav>
          
          {/* Social Media Links */}
          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://www.facebook.com/steadyspend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-600 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/steadyspend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-600 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/steadyspend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-600 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/steadyspend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@steadyspend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-600 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-sm text-gray-500">© 2025 SteadySpend.com · Understand your money, spend with confidence</p>
        </div>
      </div>
    </footer>
  )
}


