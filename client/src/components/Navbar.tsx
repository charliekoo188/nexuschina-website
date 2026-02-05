/* NEXUS CHINA Design System
 * Component: Navbar - Fixed navigation with transparent backdrop blur
 * Style: Modern Luxury - Restrained elegance
 */

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center space-x-3 transition-luxury hover:opacity-80">
              <div className="text-2xl font-bold tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                <span className="text-[rgb(var(--color-teal))]">NEXUS</span>
                <span className="text-[rgb(var(--color-gold))]"> CHINA</span>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`text-sm font-medium tracking-wide uppercase transition-luxury ${
                    location === link.href
                      ? "text-[rgb(var(--color-gold))]"
                      : "text-foreground hover:text-[rgb(var(--color-gold))]"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button className="text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-[rgb(var(--color-gold))] transition-luxury">
              EN / 中文
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-[rgb(var(--color-gold))] transition-luxury"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-border">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-medium tracking-wide uppercase transition-luxury ${
                    location === link.href
                      ? "text-[rgb(var(--color-gold))]"
                      : "text-foreground hover:text-[rgb(var(--color-gold))]"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
            <button className="block text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-[rgb(var(--color-gold))] transition-luxury">
              EN / 中文
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
