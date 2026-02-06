/* NEXUS CHINA Design System V2
 * Component: Navbar - Luxury minimalist navigation
 */

import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/programs", label: "PROGRAMS" },
    { path: "/experience", label: "EXPERIENCE" },
    { path: "/resources", label: "RESOURCES" },
    { path: "/insights", label: "INSIGHTS" },
    { path: "/contact", label: "CONTACT" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-ivory/95 backdrop-blur-md shadow-sm"
          : "bg-charcoal/30 backdrop-blur-sm"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="cursor-pointer">
              <h1
                className={`text-2xl font-medium tracking-wider transition-colors duration-300 ${
                  isScrolled ? "text-charcoal" : "text-champagne"
                }`}
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                NEXUS CHINA
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <button
                  className={`text-xs font-medium tracking-widest transition-all duration-300 relative group ${
                    location === item.path
                      ? isScrolled
                        ? "text-charcoal"
                        : "text-champagne"
                      : isScrolled
                      ? "text-warm-gray hover:text-charcoal"
                      : "text-ivory/80 hover:text-champagne"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-px transition-transform duration-300 ${
                      location === item.path
                        ? "scale-x-100 bg-champagne"
                        : "scale-x-0 group-hover:scale-x-100 bg-champagne"
                    }`}
                  ></span>
                </button>
              </Link>
            ))}
            <button
              className={`text-xs font-medium tracking-widest transition-colors duration-300 ${
                isScrolled
                  ? "text-warm-gray hover:text-charcoal"
                  : "text-ivory/80 hover:text-champagne"
              }`}
            >
              EN / 中文
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                size={24}
                className={isScrolled ? "text-charcoal" : "text-champagne"}
              />
            ) : (
              <Menu
                size={24}
                className={isScrolled ? "text-charcoal" : "text-champagne"}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-ivory border-t border-border">
          <div className="container py-6 space-y-4">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block w-full text-left text-sm font-medium tracking-wider transition-colors ${
                    location === item.path
                      ? "text-charcoal"
                      : "text-warm-gray hover:text-charcoal"
                  }`}
                >
                  {item.label}
                </button>
              </Link>
            ))}
            <button className="block w-full text-left text-sm font-medium tracking-wider text-warm-gray hover:text-charcoal transition-colors">
              EN / 中文
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
