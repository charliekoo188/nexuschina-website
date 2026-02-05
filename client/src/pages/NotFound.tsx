/* NEXUS CHINA Design System
 * Page: 404 Not Found
 */

import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center pt-20 pb-20">
        <div className="container max-w-2xl text-center px-4">
          <h1 
            className="text-9xl font-medium mb-6 text-[rgb(var(--color-gold))]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            404
          </h1>
          <h2 
            className="text-4xl md:text-5xl font-medium mb-6 text-[rgb(var(--color-teal))]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <button className="btn-luxury btn-luxury-primary">
                <Home className="inline mr-2" size={18} />
                Go Home
              </button>
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="btn-luxury btn-luxury-secondary"
            >
              <ArrowLeft className="inline mr-2" size={18} />
              Go Back
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
