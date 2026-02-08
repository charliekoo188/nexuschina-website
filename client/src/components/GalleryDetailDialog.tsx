/**
 * Component: Gallery Detail Dialog
 * Displays detailed information about program gallery items
 */

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Calendar, MapPin, Users } from "lucide-react";

export interface GalleryDetail {
  image: string;
  caption: string;
  fullDescription?: string;
  location?: string;
  date?: string;
  participants?: string;
  highlights?: string[];
}

interface GalleryDetailDialogProps {
  item: GalleryDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function GalleryDetailDialog({ item, open, onOpenChange }: GalleryDetailDialogProps) {
  if (!item) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[95vh] overflow-y-auto bg-ivory p-0">
        {/* Close Button */}
        <button
          onClick={() => onOpenChange(false)}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-charcoal/80 hover:bg-charcoal flex items-center justify-center transition-colors"
        >
          <X className="h-5 w-5 text-ivory" />
        </button>

        {/* Hero Image */}
        <div className="w-full h-[50vh] relative overflow-hidden">
          <img 
            src={item.image} 
            alt={item.caption}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent flex items-end p-8">
            <h2 
              className="text-4xl font-medium text-ivory"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {item.caption}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Quick Info */}
          {(item.location || item.date || item.participants) && (
            <div className="flex flex-wrap gap-6 pb-6 border-b border-warm-gray/20">
              {item.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-champagne" />
                  <div>
                    <p className="text-xs text-warm-gray uppercase tracking-wider">Location</p>
                    <p className="text-sm font-medium text-charcoal">{item.location}</p>
                  </div>
                </div>
              )}
              {item.date && (
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-champagne" />
                  <div>
                    <p className="text-xs text-warm-gray uppercase tracking-wider">Date</p>
                    <p className="text-sm font-medium text-charcoal">{item.date}</p>
                  </div>
                </div>
              )}
              {item.participants && (
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-champagne" />
                  <div>
                    <p className="text-xs text-warm-gray uppercase tracking-wider">Participants</p>
                    <p className="text-sm font-medium text-charcoal">{item.participants}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Full Description */}
          {item.fullDescription && (
            <div>
              <h3 className="text-2xl font-medium mb-4 text-charcoal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                About This Experience
              </h3>
              <p className="text-warm-gray leading-relaxed text-lg">
                {item.fullDescription}
              </p>
            </div>
          )}

          {/* Highlights */}
          {item.highlights && item.highlights.length > 0 && (
            <div>
              <h3 className="text-2xl font-medium mb-4 text-charcoal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Program Highlights
              </h3>
              <ul className="space-y-3">
                {item.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-champagne mt-1 text-xl">•</span>
                    <span className="text-warm-gray text-lg">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <div className="bg-champagne/10 p-6 rounded-lg border border-champagne/20 mt-8">
            <p className="text-charcoal text-center text-lg mb-4">
              Interested in experiencing this yourself?
            </p>
            <div className="flex justify-center gap-4">
              <button 
                className="btn-luxury btn-luxury-primary"
                onClick={() => window.location.href = '/programs'}
              >
                EXPLORE PROGRAMS
              </button>
              <button 
                className="btn-luxury btn-luxury-secondary"
                onClick={() => window.location.href = '/contact'}
              >
                BOOK CONSULTATION
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
