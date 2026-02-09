/**
 * Component: Breadcrumb - SEO-friendly breadcrumb navigation
 */

import { ChevronRight, Home } from "lucide-react";
import { Link } from "wouter";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground" itemScope itemType="https://schema.org/BreadcrumbList">
        {/* Home link */}
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link href="/" className="flex items-center hover:text-foreground transition-colors">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
          <link itemProp="item" href="https://nexuschina.com/" />
        </li>

        {/* Dynamic breadcrumb items */}
        {items.map((item, index) => (
          <li key={index} className="flex items-center" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <ChevronRight className="h-4 w-4 mx-2" />
            {item.href ? (
              <Link href={item.href} className="hover:text-foreground transition-colors" itemProp="item">
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className="text-foreground font-medium" itemProp="name">{item.label}</span>
            )}
            <meta itemProp="position" content={String(index + 2)} />
            {item.href && <link itemProp="item" href={`https://nexuschina.com${item.href}`} />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
