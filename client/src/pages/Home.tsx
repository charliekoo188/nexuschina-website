/* NEXUS CHINA Design System V2
 * Page: Home - Landing page with video hero
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { ArrowRight, Building2, GraduationCap, Heart, Landmark, Users, Globe } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useRef } from "react";

export default function Home() {
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

  return (
    <div className="min-h-screen flex flex-col">
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

          {/* Strong Overlay for Better Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/85 to-charcoal/90"></div>

          {/* Hero Content */}
          <div className="relative z-10 container text-center text-ivory px-4">
            {/* Enhanced Text Background Mask */}
            <div className="absolute inset-0 bg-charcoal/60 backdrop-blur-md rounded-2xl -z-10 mx-auto shadow-2xl" style={{ maxWidth: '1100px', left: '50%', transform: 'translateX(-50%)', padding: '3rem' }}></div>
            <p className="text-sm font-medium tracking-[0.3em] uppercase mb-6 text-champagne fade-in-up">
              WHERE FUTURE LEADERS MEET MODERN CHINA
            </p>
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-medium mb-8 fade-in-up"
              style={{ fontFamily: "'Cormorant Garamond', serif", animationDelay: "0.2s" }}
            >
              Experience the<br />
              <span className="text-champagne">Future of Innovation</span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-12 opacity-90 fade-in-up" style={{ animationDelay: "0.4s" }}>
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
              Join the next generation of global leaders who understand China. Our programs are limited to ensure exclusivity and deep engagement.
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
