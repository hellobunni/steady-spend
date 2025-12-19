import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-emerald-50/30">
      {/* Header Navigation */}
      <Header />


      {/* Main Content Area with Side Ads */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Left Sidebar Ad - Desktop Only */}
  

          {/* Main Content */}
          <main className="flex-1 min-w-0">{children}</main>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

