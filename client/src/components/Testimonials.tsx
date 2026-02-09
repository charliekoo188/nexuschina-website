/* NEXUS CHINA Design System
 * Component: Testimonials - User reviews carousel
 */

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  university: string;
  program: string;
  year: string;
  rating: number;
  quote: string;
  avatar?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
}

export default function Testimonials({ testimonials, autoPlayInterval = 5000 }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || testimonials.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, testimonials.length, autoPlayInterval]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Testimonial Card */}
      <div className="luxury-card p-12 relative">
        {/* Quote Icon */}
        <div className="absolute top-8 left-8 opacity-10">
          <Quote size={64} className="text-rose-gold" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Rating Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className={`w-5 h-5 ${
                  star <= currentTestimonial.rating
                    ? 'text-rose-gold fill-rose-gold'
                    : 'text-warm-gray/30 fill-warm-gray/30'
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-xl md:text-2xl leading-relaxed text-charcoal text-center mb-8 italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            "{currentTestimonial.quote}"
          </blockquote>

          {/* Author Info */}
          <div className="text-center">
            <p className="text-lg font-medium text-charcoal mb-1">
              {currentTestimonial.name}
            </p>
            <p className="text-sm text-warm-gray">
              {currentTestimonial.university} • {currentTestimonial.program} • {currentTestimonial.year}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      {testimonials.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-white shadow-lg hover:bg-champagne transition-colors duration-300 flex items-center justify-center group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-charcoal group-hover:text-white" size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-white shadow-lg hover:bg-champagne transition-colors duration-300 flex items-center justify-center group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-charcoal group-hover:text-white" size={24} />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {testimonials.length > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-rose-gold w-8'
                  : 'bg-warm-gray/30 hover:bg-warm-gray/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
