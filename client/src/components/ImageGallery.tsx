/* NEXUS CHINA Design System
 * Component: ImageGallery - Click-to-enlarge image gallery with loading animations
 */

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface ImageGalleryProps {
  images: string[];
  className?: string;
  columns?: number;
}

export default function ImageGallery({ images, className = "", columns = 3 }: ImageGalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (idx: number) => {
    setLoadedImages(prev => new Set(prev).add(idx));
  };

  const slides = images.map(src => ({ src }));

  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  }[columns] || "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      <div className={`grid ${gridCols} gap-6 ${className}`}>
        {images.map((src, idx) => (
          <div 
            key={idx}
            className="relative overflow-hidden rounded-sm cursor-pointer group aspect-[4/3]"
            onClick={() => {
              setIndex(idx);
              setOpen(true);
            }}
          >
            {/* Loading Skeleton */}
            {!loadedImages.has(idx) && (
              <div className="absolute inset-0 bg-warm-gray/20 animate-pulse"></div>
            )}
            
            {/* Image */}
            <img
              src={src}
              alt={`Gallery image ${idx + 1}`}
              className={`w-full h-full object-cover transition-all duration-700 ${
                loadedImages.has(idx) 
                  ? 'opacity-100 scale-100 group-hover:scale-110' 
                  : 'opacity-0 scale-95'
              }`}
              onLoad={() => handleImageLoad(idx)}
              loading="lazy"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-500 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg 
                  className="w-12 h-12 text-ivory" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" 
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        }}
      />
    </>
  );
}
