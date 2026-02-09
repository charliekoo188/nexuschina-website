/* NEXUS CHINA Design System V2
 * Page: Home - Landing page with video hero
 */

import { useAuth } from "@/_core/hooks/useAuth";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import Testimonials from "@/components/Testimonials";
import { ArrowRight, Building2, GraduationCap, Heart, Landmark, Users, Globe } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useRef } from "react";

export default function Home() {
  // The userAuth hooks provides authentication state
  // To implement login/logout functionality, simply call logout() or redirect to getLoginUrl()
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked, user interaction required
      });
    }
  }, []);

  const features = [
    {
      icon: Building2,
      title: "Elite Enterprise Access",
      description: "Private tours and executive roundtables at ByteDance, Tencent, Alibaba, Huawei, and China's most innovative companies."
    },
    {
      icon: GraduationCap,
      title: "Premier Academic Institutions",
      description: "Exclusive engagement with Tsinghua, Peking University, and leading research centers shaping China's future."
    },
    {
      icon: Heart,
      title: "Healthcare & Biotech Innovation",
      description: "Insights into China's rapidly advancing medical technology and precision medicine ecosystem."
    },
    {
      icon: Landmark,
      title: "Cultural Immersion",
      description: "Privileged access to the Forbidden City, Temple of Heaven, and contemporary art institutions."
    },
    {
      icon: Users,
      title: "Elite Networking",
      description: "Connect with fellow Oxford, Cambridge, Imperial students and Chinese business leaders."
    },
    {
      icon: Globe,
      title: "Global Perspective",
      description: "Understand China's role in shaping the 21st century through firsthand experience."
    }
  ];

  const stats = [
    { number: "500+", label: "Elite Participants" },
    { number: "50+", label: "Partner Organizations" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "15+", label: "Cities Explored" }
  ];

  const rating = {
    value: 4.9,
    count: 237
  };

  const testimonials = [
    {
      name: "James Richardson",
      university: "University of Oxford",
      program: "Tech Innovation Immersion",
      year: "2024",
      rating: 5,
      quote: "The access NEXUS CHINA provided was extraordinary. Meeting with ByteDance executives and touring Tencent's AI labs gave me insights I couldn't have gained anywhere else. This program fundamentally changed how I think about China's role in global technology."
    },
    {
      name: "Sophie Chen",
      university: "University of Cambridge",
      program: "Business & Culture Experience",
      year: "2023",
      rating: 5,
      quote: "As someone studying international relations, understanding China from the inside was invaluable. The combination of enterprise visits, cultural immersion, and expert guidance made this the most impactful educational experience of my university career."
    },
    {
      name: "Alexander Thompson",
      university: "Imperial College London",
      program: "Sustainability & Green Tech",
      year: "2024",
      rating: 5,
      quote: "Witnessing China's EV revolution firsthand at BYD and exploring smart city infrastructure in Hangzhou was mind-blowing. NEXUS CHINA opened doors I didn't know existed and connected me with leaders shaping the future of sustainable technology."
    },
    {
      name: "Emily Watson",
      university: "Eton College",
      program: "Tech Innovation Immersion",
      year: "2023",
      rating: 5,
      quote: "At 17, I wasn't sure what to expect, but NEXUS CHINA exceeded every expectation. The program was perfectly tailored for young leaders, and the networking opportunities were incredible. I'm now considering a career in tech entrepreneurship thanks to this experience."
    },
    {
      name: "Oliver Davies",
      university: "University of Oxford",
      program: "Business & Culture Experience",
      year: "2024",
      rating: 5,
      quote: "The depth of access and quality of interactions were unparalleled. From Alibaba's innovation labs to private art viewings, every moment was curated to perfection. NEXUS CHINA doesn't just show you China—they help you understand it."
    },
    {
      name: "Charlotte Mills",
      university: "University of Cambridge",
      program: "Sustainability & Green Tech",
      year: "2023",
      rating: 4,
      quote: "As an engineering student focused on renewable energy, this program was transformative. The technical depth of our facility visits and conversations with policy experts gave me a comprehensive view of China's green tech ecosystem that I couldn't have gained from textbooks."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="NEXUS CHINA - Elite China Programs for UK Students"
        description="Exclusive China immersion for Oxford, Cambridge & Imperial students. Access top tech firms, universities & cultural institutions."
        keywords="China immersion program, UK students China, Oxford Cambridge China, elite education China, China study tour, enterprise visits China, cultural exchange, tech innovation China"
        ogImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663326825618/NnGLErfoixaHjfMX.png"
        canonical="https://nexuschina.com/"
      />
      <StructuredData 
        type="organization" 
        data={{
          sameAs: [
            "https://www.linkedin.com/company/nexuschina",
            "https://twitter.com/nexuschina",
            "https://www.facebook.com/nexuschina"
          ],
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            email: "info@nexuschina.com"
          },
          foundingDate: "2020",
          slogan: "Experience China's Future of Innovation",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            bestRating: "5",
            ratingCount: "237"
          }
        }} 
      />
      <StructuredData 
        type="website" 
        data={{
          potentialAction: {
            "@type": "SearchAction",
            target: "https://nexuschina.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }} 
      />
      <Navbar />
      
      <main>
        {/* Video Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663326825618/qWPziPqbPoNtmLTN.mp4" type="video/mp4" />
          </video>

          {/* Subtle Gradient Overlay - minimal to keep video visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>

          {/* Hero Content */}
          <div className="relative z-10 container text-center px-4">
            <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase mb-6 text-ivory fade-in-up" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              WHERE FUTURE LEADERS MEET MODERN CHINA
            </p>
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-medium mb-8 text-ivory fade-in-up leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", animationDelay: "0.2s", textShadow: '3px 3px 12px rgba(0,0,0,0.9)' }}
            >
              Experience<br />
              <span className="text-champagne">China's Future</span><br />
              of Innovation
            </h1>
            <p className="text-base md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 text-ivory fade-in-up" style={{ animationDelay: "0.4s", textShadow: '2px 2px 8px rgba(0,0,0,0.8)' }}>
              Exclusive China immersion programs for elite students from Oxford, Cambridge, Imperial, and top UK private schools. Discover cutting-edge technology, world-class enterprises, premier academic institutions, and contemporary culture.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up" style={{ animationDelay: "0.6s" }}>
              <Link href="/programs">
                <button className="btn-luxury btn-luxury-primary">
                  EXPLORE PROGRAMS <ArrowRight className="inline ml-2" size={18} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn-luxury btn-luxury-secondary bg-transparent border-champagne text-champagne hover:bg-champagne hover:text-charcoal">
                  BOOK CONSULTATION
                </button>
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-champagne rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-champagne rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-ivory">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
              {stats.map((stat, index) => (
                <ScrollAnimation key={index} animation="fade-up" delay={index * 0.1}>
                  <div>
                    <p 
                      className="text-5xl md:text-6xl font-medium mb-2 text-rose-gold"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {stat.number}
                    </p>
                    <p className="text-sm font-medium tracking-wider uppercase text-warm-gray">
                      {stat.label}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
            
            {/* Rating Display */}
            <ScrollAnimation animation="fade-up" delay={0.4}>
              <div className="flex items-center justify-center gap-3 pt-8 border-t border-warm-gray/20">
                <div className="flex items-center gap-1">
                  <span className="text-3xl font-medium text-charcoal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {rating.value}
                  </span>
                  <span className="text-2xl text-warm-gray">/5</span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className={`w-6 h-6 ${
                        star <= Math.floor(rating.value)
                          ? 'text-rose-gold fill-rose-gold'
                          : star - 0.5 <= rating.value
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
                <span className="text-sm text-warm-gray font-medium">({rating.count} reviews)</span>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section-padding bg-white">
          <div className="container max-w-6xl">
            <ScrollAnimation animation="fade-up">
              <div className="text-center mb-16">
                <h2 
                  className="text-4xl md:text-5xl font-medium mb-4 text-charcoal"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Unparalleled Access
                </h2>
                <div className="luxury-divider"></div>
                <p className="text-lg text-warm-gray max-w-2xl mx-auto">
                  NEXUS CHINA opens doors to China's most prestigious institutions and innovative enterprises, providing experiences unavailable through conventional channels.
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollAnimation key={index} animation="fade-up" delay={index * 0.1}>
                  <div className="luxury-card p-8 text-center group">
                    <div className="w-16 h-16 bg-champagne mx-auto mb-6 flex items-center justify-center group-hover:bg-rose-gold transition-colors duration-500">
                      <feature.icon size={28} className="text-charcoal" />
                    </div>
                    <h3 
                    className="text-xl font-medium mb-3 text-charcoal"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {feature.title}
                  </h3>
                    <p className="text-sm leading-relaxed text-warm-gray">
                      {feature.description}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section-padding bg-white">
          <div className="container max-w-6xl">
            <ScrollAnimation animation="fade-up">
              <div className="text-center mb-16">
                <h2 
                  className="text-4xl md:text-5xl font-medium mb-4 text-charcoal"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  What Our Participants Say
                </h2>
                <div className="luxury-divider"></div>
                <p className="text-lg text-warm-gray max-w-2xl mx-auto">
                  Hear from Oxford, Cambridge, and Imperial students who experienced China through NEXUS CHINA programs.
                </p>
              </div>
            </ScrollAnimation>
            <Testimonials testimonials={testimonials} autoPlayInterval={6000} />
          </div>
        </section>

        {/* Why China Section */}
        <section className="section-padding bg-charcoal text-ivory luxury-overlay">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 
                className="text-4xl md:text-5xl font-medium mb-4 text-champagne"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Why China Matters
              </h2>
              <div className="luxury-divider"></div>
            </div>

            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg leading-relaxed opacity-90 mb-6">
                For the global elite seeking to understand the 21st century, deep engagement with contemporary China is no longer optional—it is essential. As this Eastern powerhouse advances with unprecedented velocity in technology, innovation, and global influence, those who fail to comprehend its trajectory risk being left behind.
              </p>
              <p className="text-lg leading-relaxed opacity-90 mb-6">
                China is not merely growing; it is redefining the future. From artificial intelligence and quantum computing to electric vehicles and renewable energy, Chinese enterprises and institutions are at the forefront of global innovation. The nation's commitment to technological advancement, coupled with massive investment in research and development, has created an ecosystem unlike any other.
              </p>
              <p className="text-lg leading-relaxed opacity-90">
                Moreover, China welcomes the world with open arms. This is a nation eager to share its achievements, exchange ideas, and build bridges across cultures. For Western elites—particularly those at Oxford, Cambridge, Imperial, and top private schools—experiencing China firsthand is an investment in your future leadership. The insights gained here will shape your understanding of global dynamics for decades to come.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-champagne">
          <div className="container max-w-3xl text-center">
            <h2 
              className="text-4xl md:text-5xl font-medium mb-6 text-charcoal"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Begin Your Journey
            </h2>
            <div className="luxury-line mb-6"></div>
            <p className="text-lg leading-relaxed text-warm-gray mb-8">
              Join the next generation of global leaders who understand China. Our programs are limited to ensure exclusivity and deep engagement. <Link href="/about" className="text-champagne hover:underline">Learn more about our mission</Link> or <Link href="/insights" className="text-champagne hover:underline">read our latest insights</Link>.
            </p>
            <Link href="/contact">
              <button className="btn-luxury btn-luxury-primary">
                APPLY NOW <ArrowRight className="inline ml-2" size={18} />
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
