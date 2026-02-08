/**
 * Component: Partner Detail Dialog
 * Displays detailed information about partner institutions
 */

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Building2, MapPin, Users, Link as LinkIcon, ExternalLink } from "lucide-react";

export interface PartnerDetail {
  name: string;
  detail: string;
  fullDescription?: string;
  location?: string;
  founded?: string;
  employees?: string;
  website?: string;
  nexusConnection?: string;
  highlights?: string[];
  imageUrl?: string;
}

interface PartnerDetailDialogProps {
  partner: PartnerDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function PartnerDetailDialog({ partner, open, onOpenChange }: PartnerDetailDialogProps) {
  if (!partner) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-ivory">
        <DialogHeader>
          <DialogTitle 
            className="text-3xl font-medium text-charcoal mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {partner.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Hero Image */}
          {partner.imageUrl && (
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <img 
                src={partner.imageUrl} 
                alt={partner.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partner.location && (
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-champagne mt-0.5" />
                <div>
                  <p className="text-xs text-warm-gray uppercase tracking-wider mb-1">Location</p>
                  <p className="text-sm font-medium text-charcoal">{partner.location}</p>
                </div>
              </div>
            )}
            {partner.founded && (
              <div className="flex items-start gap-2">
                <Building2 className="h-5 w-5 text-champagne mt-0.5" />
                <div>
                  <p className="text-xs text-warm-gray uppercase tracking-wider mb-1">Founded</p>
                  <p className="text-sm font-medium text-charcoal">{partner.founded}</p>
                </div>
              </div>
            )}
            {partner.employees && (
              <div className="flex items-start gap-2">
                <Users className="h-5 w-5 text-champagne mt-0.5" />
                <div>
                  <p className="text-xs text-warm-gray uppercase tracking-wider mb-1">Employees</p>
                  <p className="text-sm font-medium text-charcoal">{partner.employees}</p>
                </div>
              </div>
            )}
            {partner.website && (
              <div className="flex items-start gap-2">
                <LinkIcon className="h-5 w-5 text-champagne mt-0.5" />
                <div>
                  <p className="text-xs text-warm-gray uppercase tracking-wider mb-1">Website</p>
                  <a 
                    href={partner.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-champagne hover:text-rose-gold transition-colors flex items-center gap-1"
                  >
                    Visit <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Full Description */}
          {partner.fullDescription && (
            <div>
              <h3 className="text-xl font-medium mb-3 text-charcoal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                About
              </h3>
              <p className="text-warm-gray leading-relaxed">
                {partner.fullDescription}
              </p>
            </div>
          )}

          {/* Highlights */}
          {partner.highlights && partner.highlights.length > 0 && (
            <div>
              <h3 className="text-xl font-medium mb-3 text-charcoal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Key Highlights
              </h3>
              <ul className="space-y-2">
                {partner.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-champagne mt-1">•</span>
                    <span className="text-warm-gray">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* NEXUS Connection */}
          {partner.nexusConnection && (
            <div className="bg-champagne/10 p-6 rounded-lg border border-champagne/20">
              <h3 className="text-xl font-medium mb-3 text-charcoal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                NEXUS CHINA Connection
              </h3>
              <p className="text-warm-gray leading-relaxed">
                {partner.nexusConnection}
              </p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
