import { useEffect } from 'react';

// Microsoft Clarity Project ID
// Replace with your actual Clarity Project ID after creating a project at https://clarity.microsoft.com
const CLARITY_PROJECT_ID = import.meta.env.VITE_CLARITY_PROJECT_ID || '';

export function MicrosoftClarity() {
  useEffect(() => {
    // Only initialize if project ID is provided
    if (!CLARITY_PROJECT_ID) {
      return;
    }

    // Microsoft Clarity tracking script
    (function(c: any, l: Document, a: string, r: string, i: string, t?: HTMLScriptElement, y?: Element) {
      c[a] = c[a] || function() {
        (c[a].q = c[a].q || []).push(arguments);
      };
      t = l.createElement(r) as HTMLScriptElement;
      t.async = true;
      t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0];
      y?.parentNode?.insertBefore(t, y);
    })(window, document, 'clarity', 'script', CLARITY_PROJECT_ID);

  }, []);

  return null; // This component doesn't render anything
}

// Custom event tracking for Microsoft Clarity
export const clarityEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (CLARITY_PROJECT_ID && (window as any).clarity) {
    (window as any).clarity('event', eventName, eventData);
  }
};

// Track form submissions
export const clarityTrackFormSubmit = (formName: string, formData?: Record<string, any>) => {
  clarityEvent('form_submit', { form_name: formName, ...formData });
};

// Track button clicks
export const clarityTrackButtonClick = (buttonName: string, buttonLocation?: string) => {
  clarityEvent('button_click', { button_name: buttonName, location: buttonLocation });
};

// Track page sections viewed
export const clarityTrackSectionView = (sectionName: string) => {
  clarityEvent('section_view', { section_name: sectionName });
};

// Set custom user tags (useful for segmentation)
export const claritySetTag = (key: string, value: string) => {
  if (CLARITY_PROJECT_ID && (window as any).clarity) {
    (window as any).clarity('set', key, value);
  }
};

// Identify user (for authenticated users)
export const clarityIdentifyUser = (userId: string, userProperties?: Record<string, any>) => {
  if (CLARITY_PROJECT_ID && (window as any).clarity) {
    (window as any).clarity('identify', userId, userProperties);
  }
};
