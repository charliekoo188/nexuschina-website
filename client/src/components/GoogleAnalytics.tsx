import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'wouter';

// Google Analytics Measurement ID
// Replace with your actual GA4 Measurement ID (format: G-XXXXXXXXXX)
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

export function GoogleAnalytics() {
  const [location] = useLocation();

  useEffect(() => {
    // Initialize GA4 only if measurement ID is provided
    if (GA_MEASUREMENT_ID) {
      ReactGA.initialize(GA_MEASUREMENT_ID, {
        gaOptions: {
          siteSpeedSampleRate: 100, // Track 100% of page load times
        },
      });
    }
  }, []);

  useEffect(() => {
    // Track page views on route change
    if (GA_MEASUREMENT_ID) {
      ReactGA.send({ hitType: 'pageview', page: location, title: document.title });
    }
  }, [location]);

  return null; // This component doesn't render anything
}

// Custom event tracking helper functions
export const trackEvent = (category: string, action: string, label?: string, value?: number) => {
  if (GA_MEASUREMENT_ID) {
    ReactGA.event({
      category,
      action,
      label,
      value,
    });
  }
};

// Track consultation form submissions
export const trackConsultationSubmit = (programType: string) => {
  trackEvent('Consultation', 'Submit', programType);
};

// Track program applications
export const trackProgramApplication = (programName: string) => {
  trackEvent('Program', 'Apply', programName);
};

// Track article reads
export const trackArticleRead = (articleTitle: string) => {
  trackEvent('Content', 'Read Article', articleTitle);
};

// Track outbound links
export const trackOutboundLink = (url: string, label?: string) => {
  trackEvent('Outbound Link', 'Click', label || url);
};

// Track social media clicks
export const trackSocialClick = (platform: string) => {
  trackEvent('Social', 'Click', platform);
};
