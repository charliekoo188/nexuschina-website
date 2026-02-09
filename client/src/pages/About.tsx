/* NEXUS CHINA Design System
 * Page: About - Mission, vision, and team
 */

import ScrollAnimation from "@/components/ScrollAnimation";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, Eye, Heart, Award } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We curate only the highest quality experiences, partnering with China's most innovative enterprises and cultural institutions."
    },
    {
      icon: Eye,
      title: "Insight",
      description: "We provide deep, nuanced understanding of China's business landscape, technology ecosystem, and cultural evolution."
    },
    {
      icon: Heart,
      title: "Connection",
      description: "We foster meaningful relationships between global future leaders and Chinese innovators, creating lasting networks."
    },
    {
      icon: Award,
      title: "Impact",
      description: "We transform perspectives and empower participants to become informed global leaders in an interconnected world."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="About NEXUS CHINA - Elite UK-China Exchange"
        description="NEXUS CHINA connects elite UK students with China's innovation ecosystem. Learn why understanding contemporary China is essential for future global leaders."
        keywords="about NEXUS CHINA, China education program, UK China exchange"
        ogImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663326825618/EprelgUyDAbZeZtN.png"
        canonical="https://nexuschina.com/about"
      />
      <StructuredData 
        type="educationalOrganization" 
        data={{
          alternateName: "NEXUS CHINA",
          foundingDate: "2020",
          numberOfEmployees: {
            "@type": "QuantitativeValue",
            value: "10-50"
          },
          areaServed: {
            "@type": "Country",
            name: "United Kingdom"
          },
          audience: {
            "@type": "EducationalAudience",
            educationalRole: "student",
            audienceType: "University students from Oxford, Cambridge, Imperial College and top UK private schools"
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "China Immersion Programs",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Course",
                  name: "Tech Innovation Immersion",
                  description: "10-day program visiting ByteDance, Huawei, Tencent"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Course",
                  name: "Business & Culture Experience",
                  description: "7-day program exploring business and culture"
                }
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Course",
                  name: "Sustainability & Green Tech",
                  description: "8-day program on renewable energy and EVs"
                }
              }
            ]
          }
        }} 
      />
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-charcoal text-ivory">
          <div className="container max-w-4xl text-center">
            <h1 
              className="text-5xl md:text-6xl font-medium mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              About <span className="text-champagne">NEXUS CHINA</span>
            </h1>
            <div className="luxury-divider"></div>
            <p className="text-xl leading-relaxed opacity-90">
              We are the bridge between global future leaders and the heart of 21st-century innovation. Our mission is to provide transformative China immersion experiences that expand worldviews and forge lasting connections.
            </p>
          </div>
        </section>

        {/* Why China Now - New Section */}
        <section className="section-padding bg-ivory">
          <div className="container max-w-5xl">
            <h2 
              className="text-4xl md:text-5xl font-medium mb-8 text-charcoal text-center"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Why Understanding China is <span className="text-rose-gold">Essential</span>
            </h2>
            <div className="luxury-divider mb-12"></div>
            
            <div className="space-y-8 text-lg leading-relaxed text-warm-gray">
              <p className="text-xl font-medium text-charcoal">
                For Western elites—particularly those from Oxford, Cambridge, Imperial, and leading UK institutions—deep engagement with contemporary China is no longer optional. It is a strategic imperative.
              </p>
              
              {/* Global Leaders on China */}
              <div className="space-y-6">
                <h3 className="text-2xl font-medium mb-6 text-charcoal text-center" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  What Global Leaders Say About China
                </h3>
                
                {/* Keir Starmer Quote */}
                <div className="luxury-card p-8 border-l-4 border-champagne">
                  <p className="text-lg italic text-charcoal mb-4">
                    "We want a serious and pragmatic relationship with China... one that allows us to engage frankly on areas where we disagree, but also to find common ground. China's success matters to the UK, and the UK's success matters to China."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-champagne/20 flex items-center justify-center">
                      <span className="text-2xl font-medium text-charcoal">KS</span>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Keir Starmer</p>
                      <p className="text-sm text-warm-gray">UK Prime Minister</p>
                      <p className="text-xs text-muted-foreground">Beijing Visit, January 2026</p>
                    </div>
                  </div>
                </div>

                {/* Ray Dalio Quote */}
                <div className="luxury-card p-8 border-l-4 border-rose-gold">
                  <p className="text-lg italic text-charcoal mb-4">
                    "Not understanding China and how it works is like an investor in 1950 not understanding the United States. It would be crazy. China is the second-largest economy in the world, and it's going to be the largest economy in the world. To not understand it is to be economically illiterate."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-rose-gold/20 flex items-center justify-center">
                      <span className="text-2xl font-medium text-charcoal">RD</span>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Ray Dalio</p>
                      <p className="text-sm text-warm-gray">Founder, Bridgewater Associates</p>
                      <p className="text-xs text-muted-foreground">Author of "Principles for Dealing with the Changing World Order"</p>
                    </div>
                  </div>
                </div>

                {/* Henry Kissinger Quote */}
                <div className="luxury-card p-8 border-l-4 border-champagne">
                  <p className="text-lg italic text-charcoal mb-4">
                    "The relationship between China and the United States will shape the 21st century. Understanding China is not an academic exercise—it is a geopolitical necessity. Those who master this understanding will lead the next era of global affairs."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-champagne/20 flex items-center justify-center">
                      <span className="text-2xl font-medium text-charcoal">HK</span>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Henry Kissinger</p>
                      <p className="text-sm text-warm-gray">Former US Secretary of State</p>
                      <p className="text-xs text-muted-foreground">Author of "On China" (1923-2023)</p>
                    </div>
                  </div>
                </div>

                {/* Rishi Sunak Quote */}
                <div className="luxury-card p-8 border-l-4 border-rose-gold">
                  <p className="text-lg italic text-charcoal mb-4">
                    "China is the world's second-largest economy, a permanent member of the UN Security Council, and an increasingly assertive power. We cannot simply ignore China's significance in world affairs. We need to engage robustly and pragmatically."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-rose-gold/20 flex items-center justify-center">
                      <span className="text-2xl font-medium text-charcoal">RS</span>
                    </div>
                    <div>
                      <p className="font-medium text-charcoal">Rishi Sunak</p>
                      <p className="text-sm text-warm-gray">Former UK Prime Minister</p>
                      <p className="text-xs text-muted-foreground">Lord Mayor's Banquet Speech, November 2023</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="luxury-card p-6 text-center">
                  <p className="text-4xl font-medium text-rose-gold mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>$18.1T</p>
                  <p className="text-sm uppercase tracking-wide text-charcoal font-medium">China's GDP (2024)</p>
                  <p className="text-xs text-muted-foreground mt-2">World's 2nd largest economy</p>
                </div>
                <div className="luxury-card p-6 text-center">
                  <p className="text-4xl font-medium text-rose-gold mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>40%</p>
                  <p className="text-sm uppercase tracking-wide text-charcoal font-medium">Global EV Market Share</p>
                  <p className="text-xs text-muted-foreground mt-2">Leading green tech innovation</p>
                </div>
                <div className="luxury-card p-6 text-center">
                  <p className="text-4xl font-medium text-rose-gold mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>1st</p>
                  <p className="text-sm uppercase tracking-wide text-charcoal font-medium">AI Patent Applications</p>
                  <p className="text-xs text-muted-foreground mt-2">Surpassing US since 2021</p>
                </div>
              </div>

              <div className="luxury-card p-8 bg-charcoal text-ivory">
                <h3 className="text-2xl font-medium mb-4 text-champagne" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  The Innovation Imperative
                </h3>
                <p className="mb-4">
                  China is no longer the "world's factory"—it is the world's innovation laboratory. From ByteDance's AI-driven content algorithms to BYD's vertical integration in electric vehicles, from Huawei's 5G infrastructure to Tencent's super-app ecosystem, Chinese companies are redefining global technology standards.
                </p>
                <p>
                  Future business leaders, policymakers, and investors who lack firsthand experience of China's innovation culture will find themselves at a profound disadvantage. Understanding China is understanding the future.
                </p>
              </div>

              <div className="luxury-card p-8">
                <h3 className="text-2xl font-medium mb-4 text-charcoal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Beyond Stereotypes: The Lived Reality
                </h3>
                <p className="mb-4">
                  Western media narratives often reduce China to simplistic binaries. But the reality is far more nuanced, dynamic, and inspiring. China's urban centers pulse with entrepreneurial energy. Its universities produce world-class research. Its cultural renaissance blends 5,000 years of heritage with cutting-edge contemporary art.
                </p>
                <p>
                  To truly understand China, you must experience it. Walk through Shenzhen's hardware markets. Debate with Tsinghua professors. Dine with tech founders in Hangzhou. Witness the Forbidden City at dawn. This is what NEXUS CHINA offers: not tourism, but transformation.
                </p>
              </div>

              <div className="text-center mt-12">
                <p className="text-2xl font-medium text-charcoal mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  "The future belongs to those who understand China—not from headlines, but from experience."
                </p>
                <p className="text-sm uppercase tracking-wide text-muted-foreground">— NEXUS CHINA</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding bg-white">
          <div className="container max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h2 
                  className="text-4xl font-medium mb-6 text-charcoal"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Our Mission
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  To connect the world's brightest young minds with China's innovation ecosystem through exclusive, immersive experiences that foster deep understanding, meaningful relationships, and global perspectives.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  We believe that understanding China is essential for any future global leader. Through carefully curated programs, we provide unparalleled access to the enterprises, innovators, and cultural forces shaping the 21st century.
                </p>
              </div>
              <div>
                <h2 
                  className="text-4xl font-medium mb-6 text-charcoal"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Our Vision
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  A world where future leaders from all backgrounds possess nuanced, firsthand understanding of China's role in global innovation, enabling informed decision-making and cross-cultural collaboration.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  We envision NEXUS CHINA as the premier platform for elite students and young professionals to gain transformative insights into modern China, building a global community of informed leaders who can navigate an increasingly interconnected world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-[rgb(var(--color-ivory))]">
          <div className="container">
            <div className="text-center mb-16">
              <h2 
                className="text-4xl md:text-5xl font-medium mb-4 text-charcoal"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Values
              </h2>
              <div className="gold-divider"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do, from program design to partner selection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="text-center p-8 bg-white rounded-sm hover:shadow-lg transition-luxury"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-charcoal text-champagne rounded-full">
                    <value.icon size={28} />
                  </div>
                  <h3 
                    className="text-2xl font-medium mb-4 text-charcoal"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-white">
          <div className="container max-w-4xl">
            <h2 
              className="text-4xl md:text-5xl font-medium mb-8 text-charcoal text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Our Story
            </h2>
            <div className="gold-divider"></div>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                NEXUS CHINA was founded by a group of Oxford and Cambridge alumni who recognized a critical gap in global education: while China has become a central force in technology, business, and culture, most Western students lack meaningful exposure to its innovation ecosystem.
              </p>
              <p>
                Drawing on our deep networks in both the UK and China, we set out to create something unprecedented: a program that provides elite students with the same level of access typically reserved for senior executives and policymakers. Through years of relationship-building, we've secured partnerships with China's most innovative companies and cultural institutions.
              </p>
              <p>
                Today, NEXUS CHINA serves students from Oxford, Cambridge, Imperial College, and top UK private schools, offering them transformative experiences that shape their understanding of global innovation. Our alumni network spans continents and industries, united by a shared commitment to informed, cross-cultural leadership.
              </p>
              <p>
                We're not just a travel program—we're a community of future leaders who understand that the 21st century demands nuanced, firsthand knowledge of China's role in shaping our shared future.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
