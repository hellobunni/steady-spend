'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
]

const tools = [
  {
    name: 'Monthly Budget Calculator',
    path: '/tools/monthly-budget',
  },
  {
    name: 'Take Home Pay Calculator',
    path: '/tools/take-home-pay',
  },
  // Add more tools here as they're created
]

export default function Header() {
  const pathname = usePathname()
  const [isToolsOpen, setIsToolsOpen] = useState(false)
  const toolsRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setIsToolsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Check if current path is a tool
  const isToolsActive = pathname.startsWith('/tools')

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              alt="Steady Spend"
              src="/logo-vertical.png"
              className="object-cover h-12 w-auto"
              width={180}
              height={20}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path))
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}

            {/* Tools Dropdown */}
            <div
              ref={toolsRef}
              className="relative"
              onMouseEnter={() => setIsToolsOpen(true)}
              onMouseLeave={() => setIsToolsOpen(false)}
            >
              <button
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 ${
                  isToolsActive
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setIsToolsOpen(!isToolsOpen)}
              >
                Tools
                <ChevronDown className={`w-4 h-4 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isToolsOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                  {tools.map((tool) => {
                    const isToolActive = pathname === tool.path
                    return (
                      <Link
                        key={tool.path}
                        href={tool.path}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          isToolActive
                            ? 'bg-emerald-100 text-emerald-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                        onClick={() => setIsToolsOpen(false)}
                      >
                        {tool.name}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu - Simple version */}
          <div className="md:hidden">
            <select
              value={pathname}
              onChange={(e) => {
                window.location.href = e.target.value
              }}
              className="px-3 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 bg-white"
            >
              {navItems.map((item) => (
                <option key={item.path} value={item.path}>
                  {item.name}
                </option>
              ))}
              <optgroup label="Tools">
                {tools.map((tool) => (
                  <option key={tool.path} value={tool.path}>
                    {tool.name}
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>
      </div>
    </header>
  )
}
