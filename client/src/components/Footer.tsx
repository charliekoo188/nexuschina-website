/* NEXUS CHINA Design System V2
 * Component: Footer - Luxury minimalist footer
 */

import { Link } from "wouter";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    programs: [
      { label: "Tech Innovation", href: "/programs" },
      { label: "Business & Culture", href: "/programs" },
      { label: "Sustainability", href: "/programs" },
      { label: "Custom Programs", href: "/programs" }
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Resources", href: "/resources" },
      { label: "Experience", href: "/experience" },
      { label: "Contact", href: "/contact" }
    ],
    resources: [
      { label: "Technology Partners", href: "/resources" },
      { label: "Academic Institutions", href: "/resources" },
      { label: "Healthcare Access", href: "/resources" },
      { label: "Cultural Heritage", href: "/resources" }
    ]
  };

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <h2 
              className="text-3xl font-medium mb-4 text-champagne"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              NEXUS CHINA
            </h2>
            <p className="text-sm leading-relaxed opacity-80 mb-6">
              Where Future Leaders Meet Modern China. Exclusive immersion programs connecting global elites with China's innovation ecosystem.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm opacity-80 hover:opacity-100 transition-opacity">
                <Mail size={16} className="text-champagne" />
                <a href="mailto:info@nexuschina.com">info@nexuschina.com</a>
              </div>
              <div className="flex items-center space-x-3 text-sm opacity-80 hover:opacity-100 transition-opacity">
                <Phone size={16} className="text-champagne" />
                <a href="tel:+442012345678">+44 20 1234 5678</a>
              </div>
              <div className="flex items-center space-x-3 text-sm opacity-80">
                <MapPin size={16} className="text-champagne" />
                <span>London | Beijing | Shanghai</span>
              </div>
            </div>
          </div>
          {/* Programs Column */}
          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase mb-4 text-champagne">
              Programs
            </h3>
            <ul className="space-y-2">
              {footerLinks.programs.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <a className="text-sm opacity-80 hover:opacity-100 hover:text-champagne transition-all">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase mb-4 text-champagne">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <a className="text-sm opacity-80 hover:opacity-100 hover:text-champagne transition-all">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-sm font-medium tracking-wider uppercase mb-4 text-champagne">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <a className="text-sm opacity-80 hover:opacity-100 hover:text-champagne transition-all">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-ivory/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-xs opacity-60">
              © {currentYear} NEXUS CHINA. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100 hover:text-champagne transition-all"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100 hover:text-champagne transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="opacity-60 hover:opacity-100 hover:text-champagne transition-all"
              >
                <Twitter size={18} />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-xs opacity-60">
              <a href="#" className="hover:opacity-100 hover:text-champagne transition-all">
                Privacy Policy
              </a>
              <a href="#" className="hover:opacity-100 hover:text-champagne transition-all">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
