import { Facebook, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import { ImPinterest2 } from "react-icons/im";
import { RiTwitterXFill } from "react-icons/ri";

const footerLinks = {
  tools: [
    { label: "Budget Calculator", href: "/tools/monthly-budget" },
    { label: "50/30/20 Calculator", href: "/tools/50-30-20" },
    { label: "Take-Home Pay Calculator", href: "/tools/take-home-pay-calculator" },
  ],
  blog: [{ label: "Blog", href: "/blog" }],
  connect: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy-policy" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/steadyspend", label: "Instagram" },
  { icon: ImPinterest2, href: "https://pinterest.com/steadyspend", label: "Pinterest" },
  { icon: Facebook, href: "https://facebook.com/steadyspend", label: "Facebook" },
  { icon: RiTwitterXFill, href: "https://x.com/SteadySpend", label: "X (Twitter)" },
  { icon: Mail, href: "/contact", label: "Email" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span>SteadySpend</span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Take control of your finances with modern budgeting tools and insights that help you
              spend smarter.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    aria-label={social.label}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}

          <div className="hidden md:block"></div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Tools</h4>
            <ul className="space-y-3">
              {footerLinks.tools.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} SteadySpend. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
