/* NEXUS CHINA Design System
 * Page: About - Mission, vision, and team
 */

import ScrollAnimation from "@/components/ScrollAnimation";
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
