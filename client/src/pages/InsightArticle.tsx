/* NEXUS CHINA Design System
 * Page: Insight Article Detail
 */

import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Link, useParams } from "wouter";
import { useEffect } from "react";

export default function InsightArticle() {
  const params = useParams();
  const slug = params.slug;

  // Article data - in a real app, this would come from a CMS or API
  const articles: Record<string, any> = {
    "china-ai-revolution": {
      title: "China's AI Revolution: What Western Leaders Need to Know",
      author: "Dr. Sarah Chen",
      date: "February 1, 2026",
      readTime: "8 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      content: `
<p class="text-xl leading-relaxed text-warm-gray mb-8">As China surpasses the US in AI patent applications for the third consecutive year, understanding the nuances of Chinese AI development is no longer optional for global business leaders. This comprehensive analysis explores the key drivers, innovations, and implications of China's AI ascendancy.</p>

<h2 class="text-3xl font-medium mb-4 mt-12 text-charcoal" style="font-family: 'Cormorant Garamond', serif">The Scale of China's AI Investment</h2>
<p class="text-lg leading-relaxed text-warm-gray mb-6">China's commitment to artificial intelligence is unparalleled in scale and ambition. The Chinese government has invested over $150 billion in AI research and development since 2020, with projections suggesting this figure will double by 2030. This investment spans across academic institutions, state-owned enterprises, and private tech giants.</p>

<p class="text-lg leading-relaxed text-warm-gray mb-6">Key areas of focus include computer vision, natural language processing, autonomous systems, and AI-powered healthcare diagnostics. Chinese companies like ByteDance, Baidu, and SenseTime are pushing the boundaries of what's possible with machine learning algorithms, often achieving results that rival or surpass Western counterparts.</p>

<h2 class="text-3xl font-medium mb-4 mt-12 text-charcoal" style="font-family: 'Cormorant Garamond', serif">Data Advantage: China's Strategic Edge</h2>
<p class="text-lg leading-relaxed text-warm-gray mb-6">One of China's most significant advantages in AI development is access to vast amounts of data. With a population of 1.4 billion and widespread adoption of digital services, Chinese AI companies can train their models on datasets that dwarf those available in the West.</p>

<p class="text-lg leading-relaxed text-warm-gray mb-6">This data advantage is particularly evident in applications like facial recognition, where Chinese systems have achieved accuracy rates exceeding 99.8%, and in recommendation algorithms, where platforms like Douyin (TikTok's Chinese version) demonstrate unprecedented user engagement metrics.</p>

<h2 class="text-3xl font-medium mb-4 mt-12 text-charcoal" style="font-family: 'Cormorant Garamond', serif">Key Players and Innovations</h2>
<p class="text-lg leading-relaxed text-warm-gray mb-6"><strong>ByteDance</strong> has revolutionized content recommendation with its AI-driven algorithms, which power not only TikTok but also a suite of applications serving hundreds of millions of users. Their approach to personalization has set new industry standards.</p>

<p class="text-lg leading-relaxed text-warm-gray mb-6"><strong>Baidu</strong>, often called "China's Google," has made significant strides in autonomous driving through its Apollo platform, which is being tested in multiple Chinese cities. Their ERNIE language model rivals GPT-4 in Chinese language understanding.</p>

<p class="text-lg leading-relaxed text-warm-gray mb-6"><strong>SenseTime</strong> and <strong>Megvii</strong> have become global leaders in computer vision, with applications ranging from smart city infrastructure to retail analytics.</p>

<h2 class="text-3xl font-medium mb-4 mt-12 text-charcoal" style="font-family: 'Cormorant Garamond', serif">Implications for Western Leaders</h2>
<p class="text-lg leading-relaxed text-warm-gray mb-6">For business leaders, policymakers, and investors in the West, China's AI advancement presents both challenges and opportunities. Understanding the Chinese AI ecosystem is crucial for:</p>

<ul class="list-disc list-inside space-y-3 text-lg text-warm-gray mb-6 ml-4">
  <li><strong>Competitive Strategy:</strong> Western companies must understand Chinese AI capabilities to remain competitive in global markets.</li>
  <li><strong>Partnership Opportunities:</strong> Despite geopolitical tensions, there are areas where collaboration can drive innovation for both sides.</li>
  <li><strong>Regulatory Frameworks:</strong> China's approach to AI governance offers lessons for Western policymakers grappling with similar challenges.</li>
  <li><strong>Talent Development:</strong> The rapid growth of China's AI sector is creating a new generation of technical talent that global companies are eager to engage.</li>
</ul>

<h2 class="text-3xl font-medium mb-4 mt-12 text-charcoal" style="font-family: 'Cormorant Garamond', serif">The Path Forward</h2>
<p class="text-lg leading-relaxed text-warm-gray mb-6">The future of AI is not a zero-sum game between China and the West. However, those who fail to understand the Chinese AI ecosystem risk being left behind. For students and young professionals, gaining firsthand exposure to China's AI innovations—through programs like NEXUS CHINA—is becoming an essential component of career development in technology, business, and policy.</p>

<p class="text-lg leading-relaxed text-warm-gray mb-6">As we move deeper into the AI era, the ability to navigate both Western and Chinese AI ecosystems will be a defining characteristic of successful global leaders.</p>
      `
    },
    "byd-global-expansion": {
      title: "BYD's Global Expansion: Lessons for International Investors",
      author: "James Morrison",
      date: "January 28, 2026",
      readTime: "6 min read",
      category: "Business",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
      content: `
<p class="text-xl leading-relaxed text-warm-gray mb-8">BYD's meteoric rise from a battery manufacturer to the world's leading electric vehicle producer offers invaluable lessons for international investors seeking to understand China's industrial strategy and global ambitions.</p>

<h2 class="text-3xl font-medium mb-4 mt-12 text-charcoal" style="font-family: 'Cormorant Garamond', serif">The Vertical Integration Advantage</h2>
<p class="text-lg leading-relaxed text-warm-gray mb-6">Unlike Western automakers who rely on complex supply chains, BYD has pursued aggressive vertical integration. The company manufactures its own batteries, semiconductors, and even the machinery used in production. This strategy has given BYD unprecedented control over costs, quality, and innovation speed.</p>

<p class="text-lg leading-relaxed text-warm-gray mb-6">In 2025, BYD sold over 3.2 million electric vehicles globally, surpassing Tesla and traditional automakers. This success stems from their ability to offer high-quality EVs at price points 20-30% below Western competitors—a direct result of vertical integration.</p>

<h2 class="text-3xl font-medium mb-4 mt-12 text-charcoal" style="font-family: 'Cormorant Garamond', serif">Global Market Strategy</h2>
<p class="text-lg leading-relaxed text-warm-gray mb-6">BYD's international expansion follows a carefully orchestrated playbook:</p>

<ul class="list-disc list-inside space-y-3 text-lg text-warm-gray mb-6 ml-4">
  <li><strong>Southeast Asia First:</strong> Establishing manufacturing and sales presence in Thailand, Indonesia, and Vietnam before tackling more challenging Western markets.</li>
  <li><strong>Europe as Priority:</strong> Significant investments in European markets, with local manufacturing facilities planned in Hungary and Spain.</li>
  <li><strong>Middle East Partnerships:</strong> Strategic collaborations with Gulf states, leveraging their capital and BYD's technology.</li>
  <li><strong>Latin America Expansion:</strong> Building on China's Belt and Road relationships to establish presence in Brazil, Mexico, and Chile.</li>
</ul>

<h2 class="text-3xl font-medium mb-4 mt-12 text-charcoal" style="font-family: 'Cormorant Garamond', serif">Technology Leadership</h2>
<p class="text-lg leading-relaxed text-warm-gray mb-6">BYD's Blade Battery technology represents a breakthrough in EV safety and efficiency. The lithium iron phosphate (LFP) battery design eliminates the risk of thermal runaway while reducing costs by 40% compared to traditional lithium-ion batteries. This innovation alone has reshaped global EV battery strategies.</p>

<p class="text-lg leading-relaxed text-warm-gray mb-6">Furthermore, BYD's investments in autonomous driving technology and vehicle-to-grid (V2G) systems position the company at the forefront of the mobility revolution.</p>

<h2 class="text-3xl font-medium mb-4 mt-12 text-charcoal" style="font-family: 'Cormorant Garamond', serif">Lessons for Investors</h2>
<p class="text-lg leading-relaxed text-warm-gray mb-6">BYD's success offers several key insights for international investors:</p>

<ol class="list-decimal list-inside space-y-3 text-lg text-warm-gray mb-6 ml-4">
  <li><strong>Vertical Integration Matters:</strong> In capital-intensive industries, control over the supply chain can be a decisive competitive advantage.</li>
  <li><strong>Government Support is Real:</strong> China's industrial policy provides substantial support to strategic sectors, creating opportunities for aligned private enterprises.</li>
  <li><strong>Scale Drives Innovation:</strong> BYD's massive production volumes enable rapid iteration and cost reduction that smaller competitors cannot match.</li>
  <li><strong>Global Ambitions Require Local Presence:</strong> BYD's willingness to invest in local manufacturing demonstrates commitment to long-term market development.</li>
</ol>

<h2 class="text-3xl font-medium mb-4 mt-12 text-charcoal" style="font-family: 'Cormorant Garamond', serif">The Competitive Response</h2>
<p class="text-lg leading-relaxed text-warm-gray mb-6">Western automakers are scrambling to respond to BYD's challenge. Ford, GM, and Volkswagen have all announced major EV investments, but face structural disadvantages in battery costs and supply chain efficiency. The competitive dynamics of the global auto industry are being fundamentally reshaped by Chinese innovation.</p>

<p class="text-lg leading-relaxed text-warm-gray mb-6">For investors and business leaders, understanding BYD's strategy—and the broader Chinese approach to industrial development—is essential for navigating the future of mobility and clean energy.</p>
      `
    },
    "khalid-schwarzman-scholars": {
      title: "Alumni Spotlight: From NEXUS CHINA to Tsinghua's Schwarzman Scholars",
      author: "NEXUS CHINA Team",
      date: "January 25, 2026",
      readTime: "5 min read",
      category: "Success Stories",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
      content: `
<p class="text-xl leading-relaxed text-warm-gray mb-8">Meet Khalid Al-Mansoori, a Cambridge Economics graduate who turned down offers from Yale and Stanford after experiencing China firsthand through NEXUS CHINA's Tech Innovation Immersion program. His story exemplifies the transformative power of direct engagement with China's innovation ecosystem.</p>

<h2 class="text-3xl font-medium mb-4 mt-12 text-charcoal" style="font-family: 'Cormorant Garamond', serif">The Decision That Changed Everything</h2>
<p class="text-lg leading-relaxed text-warm-gray mb-6">"Before NEXUS CHINA, my understanding of China was shaped entirely by Western media," Khalid reflects. "I had accepted Yale's offer for a Master's in International Relations, assuming that was the logical next step. But after ten days in Beijing, Shenzhen, and Hangzhou, I realized I had been planning my career based on incomplete information."</p>

<p class="text-lg leading-relaxed text-warm-gray mb-6">During the program, Khalid had exclusive access to ByteDance's AI research labs, participated in roundtable discussions with Tencent executives, and witnessed firsthand the scale of China's technological ambitions. "It wasn't just about seeing impressive technology," he explains. "It was about understanding the mindset, the pace of innovation, and the sheer determination to lead in the 21st century."</p>

<h2 class="text-3xl font-medium mb-4 mt-12 text-charcoal" style="font-family: 'Cormorant Garamond', serif">Choosing Schwarzman Scholars</h2>
<p class="text-lg leading-relaxed text-warm-gray mb-6">The Schwarzman Scholars program at Tsinghua University is often called the "Rhodes Scholarship of China." It offers a fully-funded Master's degree in Global Affairs to 200 exceptional students from around the world each year. For Khalid, it was the perfect way to deepen his understanding of China while building a global network.</p>

<p class="text-lg leading-relaxed text-warm-gray mb-6">"After NEXUS CHINA, I knew that understanding China wasn't optional—it was essential for anyone who wants to shape global policy or business in the coming decades," Khalid says. "Schwarzman Scholars offered me the opportunity to learn Mandarin, study China's political economy from Chinese professors, and build relationships with future leaders from 40+ countries."</p>

<h2 class="text-3xl font-medium mb-4 mt-12 text-charcoal" style="font-family: 'Cormorant Garamond', serif">Life at Tsinghua</h2>
<p class="text-lg leading-relaxed text-warm-gray mb-6">Now in his second semester at Tsinghua, Khalid's days are a blend of rigorous academics, cultural immersion, and professional networking. He's taking courses on China's tech policy, Belt and Road economics, and comparative governance systems. His cohort includes former White House staffers, entrepreneurs, journalists, and military officers—all united by a desire to understand China deeply.</p>

<p class="text-lg leading-relaxed text-warm-gray mb-6">"The level of discourse here is extraordinary," Khalid notes. "We debate everything from AI governance to climate policy to the future of multilateralism. And we do it with Chinese classmates who bring perspectives you simply don't encounter in Western universities."</p>

<h2 class="text-3xl font-medium mb-4 mt-12 text-charcoal" style="font-family: 'Cormorant Garamond', serif">Career Prospects</h2>
<p class="text-lg leading-relaxed text-warm-gray mb-6">Khalid's long-term goal is to work at the intersection of Middle Eastern capital and Chinese technology. "The Gulf states are investing hundreds of billions in diversifying their economies, and China is the world's innovation powerhouse," he explains. "There's enormous potential for partnerships in green energy, fintech, and smart cities. But you need people who understand both worlds—and that's exactly what I'm positioning myself to become."</p>

<p class="text-lg leading-relaxed text-warm-gray mb-6">He's already fielding interest from sovereign wealth funds, consulting firms, and tech companies eager to hire someone with his unique combination of Cambridge economics training, China expertise, and regional knowledge.</p>

<h2 class="text-3xl font-medium mb-4 mt-12 text-charcoal" style="font-family: 'Cormorant Garamond', serif">Advice for Future Participants</h2>
<p class="text-lg leading-relaxed text-warm-gray mb-6">"Don't wait until graduate school to engage with China," Khalid advises. "The earlier you start building this understanding, the more options you'll have. NEXUS CHINA gave me a foundation that I'm now building on at Tsinghua. But even if you don't pursue further China studies, that initial exposure is invaluable."</p>

<p class="text-lg leading-relaxed text-warm-gray mb-6">He emphasizes the importance of approaching China with intellectual curiosity rather than preconceptions: "You don't have to agree with everything you see. But you do need to understand it on its own terms. That's what NEXUS CHINA taught me, and it's a lesson that will shape my career for decades to come."</p>

<div class="bg-ivory p-8 rounded-sm mt-12">
  <p class="text-lg font-medium text-charcoal mb-4" style="font-family: 'Cormorant Garamond', serif">Interested in following Khalid's path?</p>
  <p class="text-warm-gray mb-6">NEXUS CHINA's programs provide the foundation for understanding China's role in the 21st century. Whether you're considering graduate studies in China or simply want to expand your global perspective, our immersion experiences offer unparalleled access and insight.</p>
  <a href="/contact" class="inline-block px-6 py-3 bg-charcoal text-ivory text-sm font-medium uppercase tracking-wide hover:bg-rose-gold hover:text-charcoal transition-colors">
    Apply Now
  </a>
</div>
      `
    }
  };

  const article = articles[slug || ""] || null;

  useEffect(() => {
    if (!article) return;

    // Add JSON-LD structured data for Article schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "image": article.image,
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "NEXUS CHINA",
        "logo": {
          "@type": "ImageObject",
          "url": "https://nexuschina.com/logo.png"
        }
      },
      "datePublished": article.date,
      "dateModified": article.date,
      "description": article.title,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://nexuschina.com/insights/${slug}`
      },
      "articleSection": article.category,
      "keywords": "China business, innovation, technology, UK China relations",
      "inLanguage": "en"
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [article, slug]);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center pt-20">
          <div className="container max-w-2xl text-center px-4">
            <h1 className="text-4xl font-medium mb-6 text-charcoal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Article Not Found
            </h1>
            <p className="text-lg text-warm-gray mb-8">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/insights">
              <button className="btn-luxury btn-luxury-primary">
                <ArrowLeft className="inline mr-2" size={18} />
                Back to Insights
              </button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={article.title}
        description={article.title}
        keywords="China insights, business analysis, tech innovation"
        canonical={`https://nexuschina.com/insights/${slug}`}
      />
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Image */}
        <section className="relative h-[60vh] overflow-hidden">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container max-w-4xl">
              <span className="inline-block px-4 py-1 bg-rose-gold text-charcoal text-xs font-medium uppercase tracking-wide rounded-full mb-4">
                {article.category}
              </span>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-medium text-ivory mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {article.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Article Meta */}
        <section className="section-padding bg-ivory py-6">
          <div className="container max-w-4xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <p className="text-sm font-medium text-charcoal">By {article.author}</p>
                <div className="flex items-center gap-2 text-sm text-warm-gray">
                  <Calendar size={16} />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-warm-gray">
                  <Clock size={16} />
                  <span>{article.readTime}</span>
                </div>
              </div>
              <button className="flex items-center gap-2 text-sm font-medium text-charcoal hover:text-rose-gold transition-colors">
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="section-padding bg-white">
          <div className="container max-w-4xl">
            <article 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </section>

        {/* Back to Insights */}
        <section className="section-padding bg-ivory">
          <div className="container max-w-4xl text-center">
            <Link href="/insights">
              <button className="btn-luxury btn-luxury-secondary">
                <ArrowLeft className="inline mr-2" size={18} />
                Back to All Insights
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
