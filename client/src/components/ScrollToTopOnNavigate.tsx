import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * ScrollToTopOnNavigate Component
 * Automatically scrolls to top when navigating to a new page
 */
export default function ScrollToTopOnNavigate() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top immediately when location changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, [location]);

  return null;
}
