/* NEXUS CHINA Design System V2
 * Page: Insights - Blog and content marketing
 */

import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function Insights() {
  const featuredPost = {
    title: "China's AI Revolution: What Western Leaders Need to Know",
    excerpt: "As China surpasses the US in AI patent applications for the third consecutive year, understanding the nuances of Chinese AI development is no longer optional for global business leaders.",
    author: "Dr. Sarah Chen",
    date: "February 1, 2026",
    readTime: "8 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    slug: "china-ai-revolution"
  };

  const posts = [
    {
      title: "BYD's Global Expansion: Lessons for International Investors",
      excerpt: "How BYD's vertical integration strategy is reshaping the global EV market and what it means for Western automakers.",
      author: "James Morrison",
      date: "January 28, 2026",
      readTime: "6 min read",
      category: "Business",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
      slug: "byd-global-expansion"
    },
    {
      title: "Alumni Spotlight: From NEXUS CHINA to Tsinghua's Schwarzman Scholars",
      excerpt: "Meet Khalid Al-Mansoori, who turned down Yale and Stanford after experiencing China firsthand through our program.",
      author: "NEXUS CHINA Team",
      date: "January 25, 2026",
      readTime: "5 min read",
      category: "Success Stories",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
      slug: "khalid-schwarzman-scholars"
    },
    {
      title: "Understanding China's Green Tech Ecosystem",
      excerpt: "A deep dive into China's renewable energy infrastructure, from solar manufacturing dominance to EV battery innovation.",
      author: "Dr. Emily Zhang",
      date: "January 20, 2026",
      readTime: "10 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
      slug: "china-green-tech-ecosystem"
    },
    {
      title: "Why UK-China Relations Matter for Your Career",
      excerpt: "Following PM Starmer's Beijing visit, we analyze what the UK-China relationship reset means for young professionals.",
      author: "Prof. Michael Roberts",
      date: "January 15, 2026",
      readTime: "7 min read",
      category: "Policy",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80",
      slug: "uk-china-relations-career"
    },
    {
      title: "Inside ByteDance: A Day at China's Most Innovative Tech Giant",
      excerpt: "Our participants share their exclusive behind-the-scenes experience at ByteDance's Beijing headquarters.",
      author: "Omar Al-Rashid",
      date: "January 10, 2026",
      readTime: "6 min read",
      category: "Program Insights",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
      slug: "inside-bytedance"
    },
    {
      title: "The Future of Sino-Middle Eastern Partnerships",
      excerpt: "How Middle Eastern capital and Chinese innovation are creating new opportunities in green energy and fintech.",
      author: "Amira Hassan",
      date: "January 5, 2026",
      readTime: "8 min read",
      category: "Global Trends",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      slug: "sino-middle-eastern-partnerships"
    },
    {
      title: "China's Quantum Computing Breakthrough: What UK Students Need to Know",
      excerpt: "In December 2023, China achieved quantum supremacy with a 66-qubit programmable superconducting quantum computer, marking a pivotal moment in the global technology race.",
      author: "Prof. David Thompson",
      date: "December 15, 2023",
      readTime: "9 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      slug: "quantum-computing-china-breakthrough"
    },
    {
      title: "How China Became the World's EV Battery Powerhouse",
      excerpt: "By mid-2024, China controlled 80% of global EV battery production capacity, a dominance that has profound implications for the global energy transition.",
      author: "Dr. Rachel Foster",
      date: "June 20, 2024",
      readTime: "11 min read",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
      slug: "china-ev-battery-dominance-2024"
    },
    {
      title: "China's Cultural Soft Power: From TikTok to Global Influence",
      excerpt: "By 2025, China's cultural influence has expanded far beyond traditional diplomacy. From TikTok's global dominance to Chinese dramas captivating international audiences, China is reshaping global culture.",
      author: "Dr. Sophie Williams",
      date: "March 10, 2025",
      readTime: "10 min read",
      category: "Global Trends",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
      slug: "chinese-cultural-soft-power-2025"
    },
    {
      title: "China's Belt and Road Initiative: Reshaping Global Infrastructure",
      excerpt: "By 2025, China's Belt and Road Initiative has invested over $1 trillion in infrastructure projects across 150 countries, fundamentally reshaping global trade, development, and geopolitics.",
      author: "Prof. Jonathan Clarke",
      date: "September 5, 2025",
      readTime: "12 min read",
      category: "Global Trends",
      image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=800&q=80",
      slug: "china-global-infrastructure-belt-road-2025"
    }
  ];

  const categories = [
    "All",
    "Technology",
    "Business",
    "Success Stories",
    "Sustainability",
    "Policy",
    "Program Insights",
    "Global Trends"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="China Business Insights & Innovation Analysis"
        description="Explore in-depth analysis of China's innovation ecosystem, alumni success stories, and global business trends from NEXUS CHINA's expert contributors."
        keywords="China business insights, China tech analysis, UK China relations, student success stories, China innovation trends"
        ogImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663326825618/SWrcQLyIzdumlzyb.png"
        canonical="https://nexuschina.com/insights"
      />
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-charcoal text-ivory">
          <div className="container max-w-4xl text-center">
            <h1 
              className="text-5xl md:text-6xl font-medium mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Insights & <span className="text-champagne">Perspectives</span>
            </h1>
            <div className="luxury-divider"></div>
            <p className="text-xl leading-relaxed opacity-90">
              Deep analysis, success stories, and expert perspectives on China's innovation ecosystem and its global impact.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="section-padding bg-ivory">
          <div className="container max-w-6xl">
            <div className="flex items-center gap-2 mb-8">
              <TrendingUp className="text-rose-gold" size={24} />
              <h2 className="text-2xl font-medium text-charcoal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Featured Article
              </h2>
            </div>
            
            <ScrollAnimation>
              <Link href={`/insights/${featuredPost.slug}`}>
                <div className="luxury-card overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 group">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto overflow-hidden">
                      <img 
                        src={featuredPost.image} 
                        alt={featuredPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-4 py-1 bg-rose-gold text-charcoal text-xs font-medium uppercase tracking-wide rounded-full">
                          {featuredPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <h3 
                        className="text-3xl md:text-4xl font-medium mb-4 text-charcoal group-hover:text-rose-gold transition-colors"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {featuredPost.title}
                      </h3>
                      <p className="text-lg text-warm-gray leading-relaxed mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-charcoal">By {featuredPost.author}</p>
                        <ArrowRight className="text-rose-gold group-hover:translate-x-2 transition-transform" size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
          </div>
        </section>

        {/* Category Filter */}
        <section className="section-padding bg-white pt-12">
          <div className="container max-w-6xl">
            <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wide transition-all ${
                    index === 0
                      ? 'bg-charcoal text-ivory'
                      : 'bg-ivory text-charcoal hover:bg-champagne hover:text-charcoal border border-champagne'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section-padding bg-white pt-0">
          <div className="container max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <ScrollAnimation key={index} delay={index * 0.1}>
                  <Link href={`/insights/${post.slug}`}>
                    <div className="luxury-card overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 group h-full flex flex-col">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 bg-champagne text-charcoal text-xs font-medium uppercase tracking-wide rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <h3 
                          className="text-2xl font-medium mb-3 text-charcoal group-hover:text-rose-gold transition-colors"
                          style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                          {post.title}
                        </h3>
                        <p className="text-warm-gray leading-relaxed mb-4 flex-grow">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock size={14} />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-champagne/30">
                          <p className="text-xs font-medium text-charcoal">By {post.author}</p>
                          <ArrowRight className="text-rose-gold group-hover:translate-x-2 transition-transform" size={16} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollAnimation>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-16">
              <button className="btn-luxury btn-luxury-secondary">
                LOAD MORE ARTICLES
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="section-padding bg-charcoal text-ivory">
          <div className="container max-w-4xl text-center">
            <h2 
              className="text-4xl md:text-5xl font-medium mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Stay <span className="text-champagne">Informed</span>
            </h2>
            <div className="luxury-divider mb-8"></div>
            <p className="text-lg leading-relaxed opacity-90 mb-12">
              Subscribe to receive our latest insights, program updates, and exclusive analysis on China's innovation ecosystem.
            </p>
            <form className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-ivory text-charcoal rounded-lg focus:outline-none focus:ring-2 focus:ring-champagne"
              />
              <button type="submit" className="btn-luxury btn-luxury-primary whitespace-nowrap">
                SUBSCRIBE
              </button>
            </form>
            <p className="text-xs text-ivory/60 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
