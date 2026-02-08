/**
 * Component: Article Schema
 * Adds JSON-LD structured data for articles to improve SEO
 */

import { useEffect } from 'react';

interface ArticleSchemaProps {
  headline: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  url: string;
  keywords?: string[];
  category?: string;
}

export default function ArticleSchema({
  headline,
  description,
  author,
  datePublished,
  dateModified,
  image,
  url,
  keywords = [],
  category = "Technology"
}: ArticleSchemaProps) {
  useEffect(() => {
    // Create JSON-LD structured data
    const schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": headline,
      "description": description,
      "image": image,
      "author": {
        "@type": "Person",
        "name": author
      },
      "publisher": {
        "@type": "Organization",
        "name": "NEXUS CHINA",
        "logo": {
          "@type": "ImageObject",
          "url": "https://files.manuscdn.com/user_upload_by_module/session_file/310519663326825618/yxftWjYNrtQqRgSe.png"
        }
      },
      "datePublished": datePublished,
      "dateModified": dateModified || datePublished,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url
      },
      "keywords": keywords.join(", "),
      "articleSection": category,
      "inLanguage": "en-US"
    };

    // Check if script already exists
    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }
    
    scriptElement.textContent = JSON.stringify(schema);

    // Cleanup function
    return () => {
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, [headline, description, author, datePublished, dateModified, image, url, keywords, category]);

  return null;
}
