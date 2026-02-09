import { useEffect } from "react";

interface OrganizationSchema {
  "@context": "https://schema.org";
  "@type": "Organization";
  name: string;
  url: string;
  logo: string;
  description: string;
  address?: {
    "@type": "PostalAddress";
    addressCountry: string;
  };
  sameAs?: string[];
}

interface WebsiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  potentialAction?: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}

interface StructuredDataProps {
  type: "organization" | "website" | "course" | "article" | "educationalOrganization";
  data: any;
}

/**
 * StructuredData Component
 * Adds JSON-LD structured data to pages for better SEO
 */
export default function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    let schema: any = {};

    switch (type) {
      case "organization":
        schema = {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "NEXUS CHINA",
          url: "https://nexuschina.com",
          logo: "https://nexuschina.com/logo.png",
          description: "Elite China immersion programs for UK students from Oxford, Cambridge, Imperial, and top private schools",
          address: {
            "@type": "PostalAddress",
            addressCountry: "CN",
          },
          ...data,
        };
        break;

      case "website":
        schema = {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "NEXUS CHINA",
          url: "https://nexuschina.com",
          description: "Experience China's Future of Innovation through exclusive immersion programs",
          ...data,
        };
        break;

      case "course":
        schema = {
          "@context": "https://schema.org",
          "@type": "Course",
          provider: {
            "@type": "Organization",
            name: "NEXUS CHINA",
            url: "https://nexuschina.com",
          },
          ...data,
        };
        break;

      case "article":
        schema = {
          "@context": "https://schema.org",
          "@type": "Article",
          publisher: {
            "@type": "Organization",
            name: "NEXUS CHINA",
            url: "https://nexuschina.com",
          },
          ...data,
        };
        break;

      case "educationalOrganization":
        schema = {
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          name: "NEXUS CHINA",
          url: "https://nexuschina.com",
          logo: "https://nexuschina.com/logo.png",
          description: "Elite China immersion programs for UK students from Oxford, Cambridge, Imperial, and top private schools",
          address: {
            "@type": "PostalAddress",
            addressCountry: "CN",
          },
          ...data,
        };
        break;
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    script.id = `structured-data-${type}`;
    
    // Remove existing script if present
    const existing = document.getElementById(`structured-data-${type}`);
    if (existing) {
      existing.remove();
    }
    
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById(`structured-data-${type}`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  return null;
}
