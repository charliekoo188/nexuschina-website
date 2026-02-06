/* NEXUS CHINA Design System
 * Page: Programs - Showcase different program offerings
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, Users, MapPin, Check } from "lucide-react";
import { Link } from "wouter";

export default function Programs() {
  const programs = [
    {
      title: "Tech Innovation Immersion",
      duration: "10 Days",
      participants: "12-16 Students",
      locations: "Beijing, Shenzhen, Hangzhou",
      price: "£6,500",
      description: "Dive deep into China's tech ecosystem with exclusive visits to ByteDance, Huawei, Tencent, and emerging AI startups. Engage with C-suite executives and innovation teams.",
      highlights: [
        "Private tours of ByteDance and Tencent headquarters",
        "Roundtable discussions with tech founders and VCs",
        "Visit to Shenzhen's hardware innovation district",
        "Exclusive access to AI research labs",
        "Networking dinner with Chinese tech leaders"
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    },
    {
      title: "Business & Culture Experience",
      duration: "7 Days",
      participants: "10-14 Students",
      locations: "Beijing, Shanghai",
      price: "£5,200",
      description: "Explore the intersection of business innovation and cultural heritage. Visit global enterprises, contemporary art districts, and historic cultural landmarks.",
      highlights: [
        "Alibaba and JD.com headquarters tours",
        "Private viewing at 798 Art District",
        "Traditional tea ceremony with cultural experts",
        "Visit to Forbidden City and modern architecture",
        "Business etiquette and negotiation workshop"
      ],
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80"
    },
    {
      title: "Sustainability & Green Tech",
      duration: "8 Days",
      participants: "12-15 Students",
      locations: "Shanghai, Hangzhou, Suzhou",
      price: "£5,800",
      description: "Discover China's leadership in renewable energy, electric vehicles, and sustainable urban development. Meet pioneers in green technology.",
      highlights: [
        "BYD electric vehicle factory tour",
        "Smart city infrastructure in Hangzhou",
        "Solar and wind energy facilities visit",
        "Sustainable architecture and urban planning",
        "Dialogue with environmental policy experts"
      ],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80"
    }
  ];

  const customProgram = {
    title: "Bespoke Program Design",
    description: "We create fully customized programs tailored to your specific interests, academic focus, and learning objectives. Whether you're interested in fintech, biotech, fashion, or any other sector, we'll design an exclusive experience just for you."
  };

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
              Our <span className="text-champagne">Programs</span>
            </h1>
            <div className="luxury-divider"></div>
            <p className="text-xl leading-relaxed opacity-90">
              Carefully curated immersion experiences designed for elite students seeking deep understanding of China's innovation ecosystem. Each program offers exclusive access, expert insights, and transformative experiences.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="space-y-24">
              {programs.map((program, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <img 
                      src={program.image}
                      alt={program.title}
                      className="w-full h-[500px] object-cover rounded-sm shadow-lg"
                    />
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} space-y-6`}>
                    <h2 
                      className="text-4xl font-medium text-charcoal"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {program.title}
                    </h2>
                    
                    {/* Program Meta */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar size={18} className="text-champagne" />
                        <span className="text-muted-foreground">{program.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Users size={18} className="text-champagne" />
                        <span className="text-muted-foreground">{program.participants}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm col-span-2">
                        <MapPin size={18} className="text-champagne" />
                        <span className="text-muted-foreground">{program.locations}</span>
                      </div>
                    </div>

                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {program.description}
                    </p>

                    {/* Highlights */}
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-charcoal">
                        Program Highlights
                      </h3>
                      <ul className="space-y-2">
                        {program.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Check size={18} className="text-champagne mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                        <p 
                          className="text-3xl font-medium text-champagne"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {program.price}
                        </p>
                      </div>
                      <Link href="/contact">
                        <button className="btn-luxury btn-luxury-primary">
                          Apply Now <ArrowRight className="inline ml-2" size={18} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Program */}
        <section className="section-padding bg-[rgb(var(--color-ivory))]">
          <div className="container max-w-4xl text-center">
            <h2 
              className="text-4xl md:text-5xl font-medium mb-6 text-charcoal"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {customProgram.title}
            </h2>
            <div className="gold-divider"></div>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              {customProgram.description}
            </p>
            <Link href="/contact">
              <button className="btn-luxury btn-luxury-primary">
                Discuss Custom Program <ArrowRight className="inline ml-2" size={18} />
              </button>
            </Link>
          </div>
        </section>

        {/* What's Included */}
        <section className="section-padding bg-white">
          <div className="container max-w-4xl">
            <h2 
              className="text-4xl font-medium mb-12 text-charcoal text-center"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "All accommodation in 5-star hotels",
                "Private transportation throughout",
                "All meals and refreshments",
                "Exclusive enterprise visits and tours",
                "Expert guides and translators",
                "Networking events and dinners",
                "Cultural activities and experiences",
                "Program materials and resources"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check size={20} className="text-champagne mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
