'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const navItems = [
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const tools = [
  {
    name: 'Monthly Budget Calculator',
    path: '/tools/monthly-budget',
  },
  {
    name: 'Take Home Pay Calculator',
    path: '/tools/take-home-pay-calculator',
  },
  // Add more tools here as they're created
]

export default function Header() {
  const pathname = usePathname()
  const [isToolsOpen, setIsToolsOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const toolsRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuItemRefs = useRef<(HTMLAnchorElement | null)[]>([])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setIsToolsOpen(false)
        setFocusedIndex(-1)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Keyboard navigation for dropdown
  useEffect(() => {
    if (!isToolsOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (!isToolsOpen) return

      const toolsCount = tools.length

      switch (event.key) {
        case 'Escape':
          event.preventDefault()
          setIsToolsOpen(false)
          setFocusedIndex(-1)
          buttonRef.current?.focus()
          break

        case 'ArrowDown':
          event.preventDefault()
          setFocusedIndex((prev) => {
            const next = prev < toolsCount - 1 ? prev + 1 : 0
            menuItemRefs.current[next]?.focus()
            return next
          })
          break

        case 'ArrowUp':
          event.preventDefault()
          setFocusedIndex((prev) => {
            const next = prev > 0 ? prev - 1 : toolsCount - 1
            menuItemRefs.current[next]?.focus()
            return next
          })
          break

        case 'Home':
          event.preventDefault()
          setFocusedIndex(0)
          menuItemRefs.current[0]?.focus()
          break

        case 'End':
          event.preventDefault()
          const lastIndex = toolsCount - 1
          setFocusedIndex(lastIndex)
          menuItemRefs.current[lastIndex]?.focus()
          break

        case 'Tab':
          // Allow Tab to work normally, but close dropdown
          setIsToolsOpen(false)
          setFocusedIndex(-1)
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isToolsOpen])

  // Focus first item when menu opens
  useEffect(() => {
    if (isToolsOpen && menuItemRefs.current[0]) {
      // Small delay to ensure menu is rendered
      setTimeout(() => {
        menuItemRefs.current[0]?.focus()
        setFocusedIndex(0)
      }, 0)
    }
  }, [isToolsOpen])

  // Check if current path is a tool
  const isToolsActive = pathname.startsWith('/tools')

  const menuId = 'tools-menu'

  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
            aria-label="SteadySpend Home"
          >
            <Image
              alt="SteadySpend Logo"
              src="/logo-vertical.png"
              className="object-cover h-12 w-auto"
              width={180}
              height={20}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
            {/* Tools Dropdown */}
            <div
              ref={toolsRef}
              className="relative"
              onMouseEnter={() => setIsToolsOpen(true)}
              onMouseLeave={() => setIsToolsOpen(false)}
            >
              <button
                ref={buttonRef}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                  isToolsActive
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => {
                  setIsToolsOpen(!isToolsOpen)
                  setFocusedIndex(-1)
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setIsToolsOpen(!isToolsOpen)
                  } else if (e.key === 'ArrowDown' && !isToolsOpen) {
                    e.preventDefault()
                    setIsToolsOpen(true)
                  }
                }}
                aria-expanded={isToolsOpen}
                aria-haspopup="true"
                aria-controls={menuId}
                aria-label="Tools menu"
              >
                Tools
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {isToolsOpen && (
                <div 
                  ref={menuRef}
                  id={menuId}
                  className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50"
                  role="menu"
                  aria-label="Tools submenu"
                  aria-activedescendant={focusedIndex >= 0 ? `tool-${focusedIndex}` : undefined}
                >
                  {tools.map((tool, index) => {
                    const isToolActive = pathname === tool.path
                    return (
                      <Link
                        key={tool.path}
                        id={`tool-${index}`}
                        ref={(el) => {
                          menuItemRefs.current[index] = el
                        }}
                        href={tool.path}
                        className={`block px-4 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset ${
                          isToolActive
                            ? 'bg-emerald-100 text-emerald-700 font-medium'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                        onClick={() => {
                          setIsToolsOpen(false)
                          setFocusedIndex(-1)
                        }}
                        onFocus={() => setFocusedIndex(index)}
                        role="menuitem"
                        aria-current={isToolActive ? 'page' : undefined}
                        tabIndex={-1}
                      >
                        {tool.name}
                      </Link>
                    )
                  })}
                </div>
              )}
            </div>

            {navItems.map((item) => {
              const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path))
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                    isActive
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Mobile Menu - Simple version */}
          <nav className="md:hidden" aria-label="Mobile navigation">
            <label htmlFor="mobile-nav-select" className="sr-only">
              Navigate to page
            </label>
            <select
              id="mobile-nav-select"
              value={pathname}
              onChange={(e) => {
                window.location.href = e.target.value
              }}
              className="px-3 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              aria-label="Mobile navigation menu"
            >
              {navItems.map((item) => (
                <option key={item.path} value={item.path}>
                  {item.name}
                </option>
              ))}
              <optgroup label="Tools">
                <option value="/tools">Tools Home</option>
                {tools.map((tool) => (
                  <option key={tool.path} value={tool.path}>
                    {tool.name}
                  </option>
                ))}
              </optgroup>
            </select>
          </nav>
        </div>
      </div>
    </header>
  )
}
