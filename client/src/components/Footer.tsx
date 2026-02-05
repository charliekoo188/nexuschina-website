/* NEXUS CHINA Design System
 * Component: Footer - Multi-column layout with contact information
 * Style: Modern Luxury - Restrained elegance
 */

import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[rgb(var(--color-teal))] text-[rgb(var(--color-ivory))]">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[rgb(var(--color-gold))]" style={{ fontFamily: "'Playfair Display', serif" }}>
              About NEXUS CHINA
            </h3>
            <p className="text-sm leading-relaxed opacity-90">
              Connecting global future leaders with the heart of 21st-century innovation through exclusive, transformative China immersion experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[rgb(var(--color-gold))]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <a className="hover:text-[rgb(var(--color-gold))] transition-luxury">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/programs">
                  <a className="hover:text-[rgb(var(--color-gold))] transition-luxury">Programs</a>
                </Link>
              </li>
              <li>
                <Link href="/experience">
                  <a className="hover:text-[rgb(var(--color-gold))] transition-luxury">Experience</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:text-[rgb(var(--color-gold))] transition-luxury">Contact</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[rgb(var(--color-gold))]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 flex-shrink-0 text-[rgb(var(--color-gold))]" />
                <a href="mailto:info@nexuschina.com" className="hover:text-[rgb(var(--color-gold))] transition-luxury">
                  info@nexuschina.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 flex-shrink-0 text-[rgb(var(--color-gold))]" />
                <span>+44 20 1234 5678</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-[rgb(var(--color-gold))]" />
                <span>London | Beijing | Shanghai</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[rgb(var(--color-gold))]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[rgb(var(--color-gold))] transition-luxury"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[rgb(var(--color-gold))] transition-luxury"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[rgb(var(--color-gold))] transition-luxury"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-xs opacity-75 mb-2">WeChat ID: NexusChina</p>
              <button className="text-xs uppercase tracking-wide border border-[rgb(var(--color-gold))] text-[rgb(var(--color-gold))] px-4 py-2 hover:bg-[rgb(var(--color-gold))] hover:text-[rgb(var(--color-teal))] transition-luxury">
                View QR Code
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[rgb(var(--color-gold))]/20 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} NEXUS CHINA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
