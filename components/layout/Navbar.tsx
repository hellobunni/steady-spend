"use client";

import { BookOpen, Calculator, ChevronDown, Mail, Menu, Wrench, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { startTransition, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/blog", label: "Blog", icon: BookOpen },
  { href: "/contact", label: "Contact", icon: Mail },
];

const toolsLinks = [
  { href: "/tools", label: "All Tools", icon: Wrench },
  { href: "/tools/monthly-budget", label: "Monthly Budget Calculator", icon: Calculator },
  { href: "/tools/50-30-20", label: "50/30/20 Calculator", icon: Calculator },
  { href: "/tools/take-home-pay-calculator", label: "Take-Home Pay Calculator", icon: Calculator },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    startTransition(() => {
      setIsOpen(false);
    });
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "backdrop-blur-xl border-b  border-b-slate-200 bg-shadow-soft"
          : "bg-transparent"
      )}
    >
      <nav className="container-2xl mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-display font-bold text-xl sm:text-2xl text-foreground hover:text-primary transition-colors px-4 lg:px-0"
          >
            <Image src="/logo-icon.png" alt="SteadySpend" width={38} height={38} />
            <span className="mb-0">SteadySpend</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Tools Dropdown */}
            {/* biome-ignore lint/a11y/noStaticElementInteractions: Dropdown container with hover interactions */}
            <div
              className="relative"
              onMouseEnter={() => setIsToolsOpen(true)}
              onMouseLeave={() => setIsToolsOpen(false)}
            >
              <Link
                href="/tools"
                className={cn(
                  "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-1 relative z-10",
                  pathname.startsWith("/tools")
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <Wrench className="w-4 h-4" />
                Tools
                <ChevronDown
                  className={cn("w-4 h-4 transition-transform", isToolsOpen && "rotate-180")}
                />
              </Link>

              {/* Dropdown Menu */}
              {isToolsOpen && (
                <div className="absolute top-full left-0 pt-1 w-56">
                  <div className="bg-white rounded-lg border border-slate-200 shadow-lg py-2">
                    {toolsLinks.map((link) => {
                      const Icon = link.icon;
                      const isActive =
                        pathname === link.href ||
                        (link.href !== "/" && pathname.startsWith(link.href));
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          className={cn(
                            "flex items-center gap-3 px-4 py-2 text-sm transition-colors",
                            isActive
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          )}
                          onClick={() => setIsToolsOpen(false)}
                        >
                          <Icon className="w-4 h-4" />
                          {link.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Other Nav Links */}
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white px-4",
            isOpen ? "max-h-[600px] pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-4">
            {/* Tools Section */}
            <div>
              <Link
                href="/tools"
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200",
                  pathname.startsWith("/tools")
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <Wrench className="w-5 h-5" />
                Tools
              </Link>
              <div className="ml-4 mt-1 flex flex-col gap-1">
                {toolsLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive =
                    pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all duration-200",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Other Nav Links */}
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive =
                pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
