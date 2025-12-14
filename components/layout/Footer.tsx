import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-0">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link href="/tools" className="text-gray-600 hover:text-emerald-600 transition-colors">
              Tools
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
          <p className="text-sm text-gray-500">© 2025 SteadySpend.com · Understand your money, spend with confidence</p>
        </div>
      </div>
    </footer>
  )
}


