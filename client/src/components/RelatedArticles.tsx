/**
 * Component: Related Articles
 * Shows related articles at the bottom of article pages to improve internal linking and user engagement
 */

import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface Article {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  image: string;
  excerpt: string;
}

interface RelatedArticlesProps {
  currentSlug: string;
  currentCategory: string;
  allArticles: Article[];
}

export default function RelatedArticles({ currentSlug, currentCategory, allArticles }: RelatedArticlesProps) {
  // Filter and get related articles
  // Priority: 1) Same category, 2) Different category
  const relatedArticles = allArticles
    .filter(article => article.slug !== currentSlug)
    .sort((a, b) => {
      // Prioritize articles in the same category
      if (a.category === currentCategory && b.category !== currentCategory) return -1;
      if (a.category !== currentCategory && b.category === currentCategory) return 1;
      return 0;
    })
    .slice(0, 3);

  if (relatedArticles.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-navy-900">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-white">
            Continue Reading
          </h2>
          <p className="text-xl text-warm-gray max-w-2xl mx-auto">
            Explore more insights about China's innovation ecosystem and global influence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedArticles.map((article) => (
            <Link key={article.slug} href={`/insights/${article.slug}`}>
              <div className="group cursor-pointer">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-gold-500 text-navy-900 text-sm font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-light mb-3 text-white group-hover:text-gold-500 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-warm-gray mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-warm-gray">{article.readTime}</span>
                    <span className="flex items-center gap-2 text-gold-500 group-hover:gap-3 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link href="/insights">
            <button className="px-8 py-4 bg-transparent border-2 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 rounded-lg font-medium inline-flex items-center gap-3">
              View All Insights
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
