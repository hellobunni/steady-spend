import Header from './Header'
import Footer from './Footer'
import AdSpace from './AdSpace'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-emerald-50/30">
      {/* Header Navigation */}
      <Header />

      {/* Top Ad Space - Banner */}
      {/* <div className="w-full bg-gray-100/50 border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <AdSpace size="banner" />
        </div>
      </div> */}

      {/* Main Content Area with Side Ads */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Left Sidebar Ad - Desktop Only */}
          <aside className="hidden xl:block w-40 flex-shrink-0">
            {/* <div className="sticky top-6">
              <AdSpace size="sidebar" />
            </div> */}
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">{children}</main>

          {/* Right Sidebar Ad - Desktop Only */}
          {/* <aside className="hidden xl:block w-40 flex-shrink-0">
            <div className="sticky top-6">
              <AdSpace size="sidebar" />
            </div>
          </aside> */}
        </div>
      </div>

      {/* Bottom Ad Space - Full Width */}
      {/* <div className="w-full bg-gray-100/50 border-t border-gray-200/50 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <AdSpace size="bottom" />
        </div>
      </div> */}

      {/* Footer */}
      <Footer />
    </div>
  )
}

