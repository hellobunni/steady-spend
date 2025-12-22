'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect, startTransition } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const [mobileFocusedIndex, setMobileFocusedIndex] = useState(-1)
  const toolsRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuItemRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null)
  const mobileMenuItemRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const mobileMenuRef = useRef<HTMLElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setIsToolsOpen(false)
        setFocusedIndex(-1)
      }
      // Close mobile menu when clicking outside
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        mobileMenuButtonRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !mobileMenuButtonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false)
        setMobileFocusedIndex(-1)
        mobileMenuButtonRef.current?.focus()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Close mobile menu when pathname changes and return focus to button
  useEffect(() => {
    if (isMobileMenuOpen) {
      startTransition(() => {
        setIsMobileMenuOpen(false)
        setMobileFocusedIndex(-1)
        // Return focus to button after navigation
        setTimeout(() => {
          mobileMenuButtonRef.current?.focus()
        }, 100)
      })
    }
  }, [pathname, isMobileMenuOpen])

  // Close mobile menu on escape key and return focus to button
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
        setMobileFocusedIndex(-1)
        mobileMenuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMobileMenuOpen])

  // Keyboard navigation for mobile menu
  useEffect(() => {
    if (!isMobileMenuOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (!isMobileMenuOpen) return

      const allMobileItems = [
        ...navItems,
        { name: 'Tools', path: '/tools' },
        ...tools,
      ]
      const totalItems = allMobileItems.length

      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault()
          setMobileFocusedIndex((prev) => {
            const next = prev < totalItems - 1 ? prev + 1 : 0
            mobileMenuItemRefs.current[next]?.focus()
            return next
          })
          break

        case 'ArrowUp':
          event.preventDefault()
          setMobileFocusedIndex((prev) => {
            const next = prev > 0 ? prev - 1 : totalItems - 1
            mobileMenuItemRefs.current[next]?.focus()
            return next
          })
          break

        case 'Home':
          event.preventDefault()
          setMobileFocusedIndex(0)
          mobileMenuItemRefs.current[0]?.focus()
          break

        case 'End':
          event.preventDefault()
          const lastIndex = totalItems - 1
          setMobileFocusedIndex(lastIndex)
          mobileMenuItemRefs.current[lastIndex]?.focus()
          break

        case 'Tab':
          // Allow Tab to work normally, but close menu if tabbing away
          if (!mobileMenuRef.current?.contains(event.target as Node)) {
            setIsMobileMenuOpen(false)
            setMobileFocusedIndex(-1)
          }
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMobileMenuOpen])

  // Focus first item when mobile menu opens
  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuItemRefs.current[0]) {
      // Small delay to ensure menu is rendered
      setTimeout(() => {
        mobileMenuItemRefs.current[0]?.focus()
        setMobileFocusedIndex(0)
      }, 100)
    }
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

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
              <Link
                ref={buttonRef}
                href="/tools"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                  isToolsActive
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowDown' && !isToolsOpen) {
                    e.preventDefault()
                    setIsToolsOpen(true)
                  }
                }}
                aria-expanded={isToolsOpen}
                aria-haspopup="true"
                aria-controls={menuId}
              >
                Tools
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </Link>

              {isToolsOpen && (
                <div 
                  ref={menuRef}
                  id={menuId}
                  className="absolute top-full left-0 pt-1 w-56 z-50"
                  role="menu"
                  aria-label="Tools submenu"
                  aria-activedescendant={focusedIndex >= 0 ? `tool-${focusedIndex}` : undefined}
                >
                  <div className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
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
                        className={`block px-4 py-2 text-sm transition-colors focus:outline-none ${
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

          {/* Mobile Menu Button */}
          <button
            ref={mobileMenuButtonRef}
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen)
              if (isMobileMenuOpen) {
                setMobileFocusedIndex(-1)
              }
            }}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors"
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1]
              }}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </motion.div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              ref={mobileMenuRef}
              id="mobile-menu"
              className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4 overflow-hidden"
              aria-label="Mobile navigation"
              role="menu"
              aria-activedescendant={mobileFocusedIndex >= 0 ? `mobile-menu-item-${mobileFocusedIndex}` : undefined}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1],
                opacity: { duration: 0.3 },
                height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
              }}
            >
              <motion.div
                className="flex flex-col gap-1"
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                exit={{ y: -10 }}
                transition={{
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1]
                }}
              >
                {navItems.map((item, index) => {
                  const isActive = pathname === item.path || (item.path !== '/' && pathname.startsWith(item.path))
                  return (
                    <Link
                      key={item.path}
                      id={`mobile-menu-item-${index}`}
                      ref={(el) => {
                        mobileMenuItemRefs.current[index] = el
                      }}
                      href={item.path}
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        setMobileFocusedIndex(-1)
                      }}
                      onFocus={() => setMobileFocusedIndex(index)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                        isActive
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                      role="menuitem"
                    >
                      {item.name}
                    </Link>
                  )
                })}
                
                <Link
                  id={`mobile-menu-item-${navItems.length}`}
                  ref={(el) => {
                    mobileMenuItemRefs.current[navItems.length] = el
                  }}
                  href="/tools"
                  onClick={() => {
                    setIsMobileMenuOpen(false)
                    setMobileFocusedIndex(-1)
                  }}
                  onFocus={() => setMobileFocusedIndex(navItems.length)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                    isToolsActive
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  aria-current={isToolsActive ? 'page' : undefined}
                  role="menuitem"
                >
                  Tools
                </Link>

                {tools.map((tool, toolIndex) => {
                  const isToolActive = pathname === tool.path
                  const itemIndex = navItems.length + 1 + toolIndex
                  return (
                    <Link
                      key={tool.path}
                      id={`mobile-menu-item-${itemIndex}`}
                      ref={(el) => {
                        mobileMenuItemRefs.current[itemIndex] = el
                      }}
                      href={tool.path}
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        setMobileFocusedIndex(-1)
                      }}
                      onFocus={() => setMobileFocusedIndex(itemIndex)}
                      className={`px-6 py-2 rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
                        isToolActive
                          ? 'bg-emerald-100 text-emerald-700 font-medium'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                      aria-current={isToolActive ? 'page' : undefined}
                      role="menuitem"
                    >
                      {tool.name}
                    </Link>
                  )
                })}
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
