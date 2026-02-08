/* NEXUS CHINA Design System
 * Page: Experience - Testimonials and gallery
 */

import { useState } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryDetailDialog, { GalleryDetail } from "@/components/GalleryDetailDialog";
import { Quote } from "lucide-react";
import { Link } from "wouter";

// Extended gallery data with full details
const galleryDetailsData: Record<string, GalleryDetail> = {
  "Innovation Lab Visit": {
    image: "https://private-us-east-1.manuscdn.com/sessionFile/T0FKfLVl6xm6qptnhvYDPe/sandbox/mDBVNQzQ0g3EuLqlvpEZEQ-img-2_1770288257000_na1fn_dGVjaC1pbm5vdmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVDBGS2ZMVmw2eG02cXB0bmh2WURQZS9zYW5kYm94L21EQlZOUXpRMGczRXVMcWx2cEVaRVEtaW1nLTJfMTc3MDI4ODI1NzAwMF9uYTFmbl9kR1ZqYUMxcGJtNXZkbUYwYVc5dS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WDb6hittQQbTNQ5CH7YukOJFynyXisVSIYq3CqXh5REn0~-Puh4Fjipks8XBP0tyuTISc-F5Pd3NO8EMIL4ciYUGbG2AsgZH3unWSqF9bUAz8A4bDo1Od7YWwc5OFiufM9K9iW76ogqLZcn99ElJjoTb0PYwm-FZx144~7d7vFbS0bG5wcEVhMMKbvLDUuPwtIJQQBuTqL2qXAvOYJZe069~-A~rO~XpnXEb0PPQ-MPugHtjXBaPMpsUIwhqLUulKLnHuAjC1cATcde4oIBkHXQKk06jtmYC6DzymsFrRNKv0yTDRxJvJu5dhQRxeX~i0N1zc2IE~q86AUq7ZJZV-Q__",
    caption: "Innovation Lab Visit",
    fullDescription: "Our participants gained exclusive access to one of China's leading AI research laboratories, where they witnessed cutting-edge developments in machine learning, computer vision, and natural language processing. This hands-on experience included demonstrations of proprietary algorithms, discussions with lead researchers, and insights into how Chinese tech giants are pushing the boundaries of artificial intelligence.",
    location: "Beijing, China",
    date: "July 2025",
    participants: "15 students from Oxford, Cambridge, and Imperial",
    highlights: [
      "Private tour of AI research facilities with access to live demonstrations",
      "Q&A session with lead AI researchers and product managers",
      "Hands-on workshop on China's approach to AI development and ethics",
      "Networking dinner with startup founders in the AI ecosystem",
      "Insights into China's national AI strategy and its global implications"
    ]
  },
  "Networking Dinner": {
    image: "https://private-us-east-1.manuscdn.com/sessionFile/T0FKfLVl6xm6qptnhvYDPe/sandbox/mDBVNQzQ0g3EuLqlvpEZEQ-img-4_1770288259000_na1fn_ZWxpdGUtZXhwZXJpZW5jZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVDBGS2ZMVmw2eG02cXB0bmh2WURQZS9zYW5kYm94L21EQlZOUXpRMGczRXVMcWx2cEVaRVEtaW1nLTRfMTc3MDI4ODI1OTAwMF9uYTFmbl9aV3hwZEdVdFpYaHdaWEpwWlc1alpRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZkwblgVWMoS1yqiiqErRMMbbtJBBUKHGwMDbSok-vQ2Hj7KdqySJKsb7e5bp~kGi1PV7wuty0ICE3inywOmXaRS4gS~50hD2fmIpg~wtyJQ87LYS-TvYd1kcGzvHBr1e56awLkEAYrzTrdEiwE8XRkHu2KtsdTWZOi6EZHfxkcWWZGLL1Bab1RIEAMY6udIGwC2Gw5NjvOG57lXXmWaxjUyXfUlRUaql9npRy2ATofLxGdWu85H5qr2IF1Rhz4jwbdsgWijqzSCO7AFj70dw-UMNFs-0lwA-0Hg6SOnd-DkUQuiGFScFcUhXWQNaPvOLp~vUBjz2ot0GPDzwWN8wKw__",
    caption: "Networking Dinner",
    fullDescription: "An elegant networking dinner brought together NEXUS CHINA participants with Chinese entrepreneurs, investors, and industry leaders. Set in a private dining room overlooking Shanghai's iconic skyline, this intimate gathering facilitated meaningful conversations about China's business landscape, investment opportunities, and cross-cultural collaboration. Participants forged lasting connections that extend far beyond the program.",
    location: "Shanghai, China",
    date: "August 2025",
    participants: "20 participants + 15 Chinese business leaders",
    highlights: [
      "Intimate dinner with successful Chinese entrepreneurs and VCs",
      "Roundtable discussions on UK-China business opportunities",
      "Insights into Chinese business culture and negotiation strategies",
      "Exchange of contact information and follow-up mentorship opportunities",
      "Traditional Chinese cuisine experience with cultural context"
    ]
  },
  "The Forbidden City": {
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663326825618/oWDsqYgpejVmiIEs.jpg",
    caption: "The Forbidden City",
    fullDescription: "NEXUS CHINA participants enjoyed a private, after-hours tour of the Forbidden City, China's most iconic cultural landmark. Led by expert historians and conservation specialists, this exclusive experience provided unparalleled access to restricted areas and rare artifacts. Participants gained deep insights into Chinese imperial history, architectural philosophy, and the ongoing efforts to preserve this UNESCO World Heritage Site for future generations.",
    location: "Beijing, China",
    date: "June 2025",
    participants: "12 students from UK elite institutions",
    highlights: [
      "Private after-hours access to normally restricted palace halls",
      "Expert-led tour by Forbidden City Museum curators",
      "Close-up viewing of rare imperial artifacts and artworks",
      "Insights into Chinese dynastic history and cultural heritage preservation",
      "Photography opportunities in iconic locations without crowds"
    ]
  }
};

export default function Experience() {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryDetail | null>(null);
  const [galleryDialogOpen, setGalleryDialogOpen] = useState(false);

  const handleGalleryClick = (caption: string, image: string) => {
    const fullDetails = galleryDetailsData[caption];
    if (fullDetails) {
      setSelectedGalleryItem(fullDetails);
    } else {
      // Fallback for gallery items without full details
      setSelectedGalleryItem({
        image,
        caption,
        fullDescription: `This memorable moment from our ${caption} showcases the unique experiences that NEXUS CHINA provides to participants. Through carefully curated visits and exclusive access, we create transformative opportunities for UK students to engage with China's innovation ecosystem and cultural heritage.`,
        highlights: [
          "Exclusive access to premier institutions and cultural sites",
          "Expert-led tours and discussions with industry leaders",
          "Networking opportunities with Chinese innovators and entrepreneurs",
          "Hands-on experiences and interactive workshops",
          "Cultural immersion and cross-cultural dialogue"
        ]
      });
    }
    setGalleryDialogOpen(true);
  };
  const testimonials = [
    {
      name: "Emily Chen",
      university: "University of Oxford",
      program: "Tech Innovation Immersion 2025",
      quote: "The access we had to ByteDance and Huawei was extraordinary. Speaking directly with their innovation teams gave me insights I couldn't have gained anywhere else. This experience fundamentally changed how I think about global technology leadership.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80"
    },
    {
      name: "James Morrison",
      university: "Imperial College London",
      program: "Business & Culture Experience 2024",
      quote: "NEXUS CHINA provided the perfect balance of business insight and cultural immersion. The networking opportunities were invaluable—I'm still in touch with several Chinese entrepreneurs I met during the program.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
    },
    {
      name: "Sophia Williams",
      university: "University of Cambridge",
      program: "Sustainability & Green Tech 2025",
      quote: "As someone passionate about environmental innovation, seeing China's green tech ecosystem firsthand was transformative. The scale and speed of innovation in renewable energy is unlike anything in the West.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80"
    },
    {
      name: "Alexander Hunt",
      university: "Harrow School",
      program: "Custom Program 2024",
      quote: "The bespoke program designed for our group exceeded all expectations. Every visit was carefully curated, and the insights we gained will influence my university choices and career path.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
    }
  ];

  const gallery = [
    {
      image: "https://private-us-east-1.manuscdn.com/sessionFile/T0FKfLVl6xm6qptnhvYDPe/sandbox/mDBVNQzQ0g3EuLqlvpEZEQ-img-2_1770288257000_na1fn_dGVjaC1pbm5vdmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVDBGS2ZMVmw2eG02cXB0bmh2WURQZS9zYW5kYm94L21EQlZOUXpRMGczRXVMcWx2cEVaRVEtaW1nLTJfMTc3MDI4ODI1NzAwMF9uYTFmbl9kR1ZqYUMxcGJtNXZkbUYwYVc5dS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WDb6hittQQbTNQ5CH7YukOJFynyXisVSIYq3CqXh5REn0~-Puh4Fjipks8XBP0tyuTISc-F5Pd3NO8EMIL4ciYUGbG2AsgZH3unWSqF9bUAz8A4bDo1Od7YWwc5OFiufM9K9iW76ogqLZcn99ElJjoTb0PYwm-FZx144~7d7vFbS0bG5wcEVhMMKbvLDUuPwtIJQQBuTqL2qXAvOYJZe069~-A~rO~XpnXEb0PPQ-MPugHtjXBaPMpsUIwhqLUulKLnHuAjC1cATcde4oIBkHXQKk06jtmYC6DzymsFrRNKv0yTDRxJvJu5dhQRxeX~i0N1zc2IE~q86AUq7ZJZV-Q__",
      caption: "Innovation Lab Visit"
    },
    {
      image: "https://private-us-east-1.manuscdn.com/sessionFile/T0FKfLVl6xm6qptnhvYDPe/sandbox/mDBVNQzQ0g3EuLqlvpEZEQ-img-4_1770288259000_na1fn_ZWxpdGUtZXhwZXJpZW5jZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVDBGS2ZMVmw2eG02cXB0bmh2WURQZS9zYW5kYm94L21EQlZOUXpRMGczRXVMcWx2cEVaRVEtaW1nLTRfMTc3MDI4ODI1OTAwMF9uYTFmbl9aV3hwZEdVdFpYaHdaWEpwWlc1alpRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZkwblgVWMoS1yqiiqErRMMbbtJBBUKHGwMDbSok-vQ2Hj7KdqySJKsb7e5bp~kGi1PV7wuty0ICE3inywOmXaRS4gS~50hD2fmIpg~wtyJQ87LYS-TvYd1kcGzvHBr1e56awLkEAYrzTrdEiwE8XRkHu2KtsdTWZOi6EZHfxkcWWZGLL1Bab1RIEAMY6udIGwC2Gw5NjvOG57lXXmWaxjUyXfUlRUaql9npRy2ATofLxGdWu85H5qr2IF1Rhz4jwbdsgWijqzSCO7AFj70dw-UMNFs-0lwA-0Hg6SOnd-DkUQuiGFScFcUhXWQNaPvOLp~vUBjz2ot0GPDzwWN8wKw__",
      caption: "Networking Dinner"
    },
    {
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663326825618/oWDsqYgpejVmiIEs.jpg",
      caption: "The Forbidden City"
    },
    {
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      caption: "Enterprise Visit"
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      caption: "Group Discussion"
    },
    {
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663326825618/GcVJrkQqCkCwySWG.jpg",
      caption: "Lujiazui Night View"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Student Testimonials & Success Stories - NEXUS CHINA"
        description="Discover what past participants say about NEXUS CHINA programs. View testimonials and success stories from Oxford, Cambridge, and Imperial students."
        keywords="NEXUS CHINA reviews, student testimonials China, program experience"
        ogImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663326825618/yxftWjYNrtQqRgSe.png"
        canonical="https://nexuschina.com/experience"
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
              The <span className="text-champagne">Experience</span>
            </h1>
            <div className="luxury-divider"></div>
            <p className="text-xl leading-relaxed opacity-90">
              Hear from our alumni about their transformative journeys. See what makes NEXUS CHINA programs truly exceptional through their eyes.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 
                className="text-4xl md:text-5xl font-medium mb-4 text-charcoal"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What Our Alumni Say
              </h2>
              <div className="gold-divider"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-[rgb(var(--color-ivory))] p-8 rounded-sm hover:shadow-lg transition-luxury"
                >
                  <Quote size={32} className="text-champagne mb-4" />
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-charcoal">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.university}
                      </p>
                      <p className="text-xs text-champagne">
                        {testimonial.program}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section-padding bg-[rgb(var(--color-ivory))]">
          <div className="container">
            <div className="text-center mb-16">
              <h2 
                className="text-4xl md:text-5xl font-medium mb-4 text-charcoal"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Program Gallery
              </h2>
              <div className="gold-divider"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A glimpse into the exclusive experiences, meaningful connections, and transformative moments that define NEXUS CHINA programs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((item, index) => (
                <div 
                  key={index}
                  className="group relative overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-luxury cursor-pointer"
                  onClick={() => handleGalleryClick(item.caption, item.image)}
                >
                  <img 
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-luxury duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-0 group-hover:opacity-90 transition-luxury flex items-end p-6">
                    <p className="text-white text-lg font-medium">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-white">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 
                className="text-4xl font-medium mb-4 text-charcoal"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Alumni Outcomes
              </h2>
              <div className="gold-divider"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p 
                  className="text-5xl font-medium mb-2 text-champagne"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  92%
                </p>
                <p className="text-lg text-muted-foreground">
                  Pursue China-related careers or studies
                </p>
              </div>
              <div>
                <p 
                  className="text-5xl font-medium mb-2 text-champagne"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  85%
                </p>
                <p className="text-lg text-muted-foreground">
                  Maintain connections with Chinese peers
                </p>
              </div>
              <div>
                <p 
                  className="text-5xl font-medium mb-2 text-champagne"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  98%
                </p>
                <p className="text-lg text-muted-foreground">
                  Recommend NEXUS CHINA to peers
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories - New Section */}
        <section className="section-padding bg-ivory">
          <div className="container max-w-6xl">
            <div className="text-center mb-16">
              <h2 
                className="text-4xl md:text-5xl font-medium mb-4 text-charcoal"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Success <span className="text-rose-gold">Stories</span>
              </h2>
              <div className="luxury-divider"></div>
              <p className="text-lg text-warm-gray max-w-2xl mx-auto">
                Meet three alumni whose NEXUS CHINA experience catalyzed remarkable achievements
              </p>
            </div>

            <div className="space-y-16">
              {/* Success Story 1 */}
              <div className="luxury-card p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" 
                      alt="Omar Al-Rashid"
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-2xl font-medium text-charcoal mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      Omar Al-Rashid
                    </h3>
                    <p className="text-sm text-champagne font-medium mb-1">Imperial College London</p>
                    <p className="text-sm text-muted-foreground">MEng Computing, Class of 2024</p>
                    <p className="text-xs text-muted-foreground mt-2">Dubai, UAE → London, UK</p>
                  </div>
                  <div className="md:col-span-2">
                    <div className="mb-6">
                      <span className="inline-block px-4 py-1 bg-champagne text-charcoal text-xs font-medium uppercase tracking-wide rounded-full mb-4">
                        Tech Innovation Immersion 2023
                      </span>
                      <h4 className="text-xl font-medium text-charcoal mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        From Student to ByteDance AI Research Intern
                      </h4>
                    </div>
                    <div className="space-y-4 text-warm-gray leading-relaxed">
                      <p>
                        <strong className="text-charcoal">The Challenge:</strong> Omar was passionate about AI but felt limited by Western-centric perspectives on machine learning research. He wanted exposure to China's rapidly advancing AI ecosystem.
                      </p>
                      <p>
                        <strong className="text-charcoal">The NEXUS Experience:</strong> During the Tech Innovation Immersion program, Omar visited ByteDance's AI Lab in Beijing and engaged in a roundtable with their research team. He presented his own ML project and received direct feedback from senior engineers.
                      </p>
                      <p>
                        <strong className="text-charcoal">The Outcome:</strong> Impressed by Omar's insights and curiosity, ByteDance offered him a summer research internship. He spent 10 weeks in Beijing working on large language model optimization, co-authoring a paper that was accepted to NeurIPS 2024. He now has a full-time offer from ByteDance post-graduation.
                      </p>
                      <p className="text-charcoal italic pt-4 border-t border-champagne/30">
                        "NEXUS CHINA didn't just open doors—it opened my mind to what's possible when East meets West in AI research. The connections I made have shaped my entire career trajectory."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Story 2 */}
              <div className="luxury-card p-8 md:p-12 bg-charcoal text-ivory">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <img 
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" 
                      alt="Amira Hassan"
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-2xl font-medium text-ivory mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      Amira Hassan
                    </h3>
                    <p className="text-sm text-champagne font-medium mb-1">University of Oxford</p>
                    <p className="text-sm text-ivory/70">BA Philosophy, Politics & Economics, Class of 2025</p>
                    <p className="text-xs text-ivory/70 mt-2">Cairo, Egypt → Oxford, UK</p>
                  </div>
                  <div className="md:col-span-2">
                    <div className="mb-6">
                      <span className="inline-block px-4 py-1 bg-champagne text-charcoal text-xs font-medium uppercase tracking-wide rounded-full mb-4">
                        Business & Culture Experience 2024
                      </span>
                      <h4 className="text-xl font-medium text-ivory mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        Founding a UK-China Green Energy Investment Platform
                      </h4>
                    </div>
                    <div className="space-y-4 text-ivory/80 leading-relaxed">
                      <p>
                        <strong className="text-ivory">The Challenge:</strong> Amira wanted to bridge the gap between Middle Eastern capital and Chinese green tech innovation, but lacked the networks and firsthand knowledge of China's sustainability sector.
                      </p>
                      <p>
                        <strong className="text-ivory">The NEXUS Experience:</strong> Through the program, Amira visited BYD's Shenzhen headquarters, toured solar panel manufacturing facilities, and met with Chinese green energy VCs. She also attended a private dinner with founders of Chinese EV battery startups.
                      </p>
                      <p>
                        <strong className="text-ivory">The Outcome:</strong> Inspired by what she witnessed, Amira co-founded "Silk Energy Partners," a platform connecting UK and Middle Eastern investors with Chinese green tech companies. Within 6 months, she facilitated £2.3M in seed investments. She's now taking a gap year to scale the venture before completing her degree.
                      </p>
                      <p className="text-ivory italic pt-4 border-t border-champagne/30">
                        "NEXUS CHINA gave me the confidence and connections to turn an idea into reality. I saw firsthand that China isn't just the future of green energy—it's the present."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Story 3 */}
              <div className="luxury-card p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <img 
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" 
                      alt="Khalid Al-Mansoori"
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-2xl font-medium text-charcoal mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                      Khalid Al-Mansoori
                    </h3>
                    <p className="text-sm text-champagne font-medium mb-1">Eton College</p>
                    <p className="text-sm text-muted-foreground">A-Level Student, Class of 2025</p>
                    <p className="text-xs text-muted-foreground mt-2">Abu Dhabi, UAE → Eton, UK</p>
                  </div>
                  <div className="md:col-span-2">
                    <div className="mb-6">
                      <span className="inline-block px-4 py-1 bg-champagne text-charcoal text-xs font-medium uppercase tracking-wide rounded-full mb-4">
                        Custom Program 2024
                      </span>
                      <h4 className="text-xl font-medium text-charcoal mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        Accepted to Tsinghua University's Schwarzman Scholars Program
                      </h4>
                    </div>
                    <div className="space-y-4 text-warm-gray leading-relaxed">
                      <p>
                        <strong className="text-charcoal">The Challenge:</strong> Khalid was deciding between applying to US Ivy League schools or exploring opportunities in Asia. He wanted to understand whether China could offer the same caliber of education and career prospects.
                      </p>
                      <p>
                        <strong className="text-charcoal">The NEXUS Experience:</strong> We designed a bespoke program for Khalid focused on top-tier Chinese universities. He spent time at Tsinghua, Peking University, and Fudan, attending lectures, meeting professors, and shadowing current students. He also toured Alibaba's Hangzhou campus.
                      </p>
                      <p>
                        <strong className="text-charcoal">The Outcome:</strong> Khalid was so impressed that he applied to Tsinghua's prestigious Schwarzman Scholars Program (acceptance rate: 3%). He was accepted and will begin his Master's in Global Affairs in Beijing this fall, turning down offers from Yale and Stanford. His personal statement directly referenced his NEXUS CHINA experience.
                      </p>
                      <p className="text-charcoal italic pt-4 border-t border-champagne/30">
                        "Before NEXUS CHINA, I saw China as a mystery. After the program, I saw it as my future. Tsinghua is where I belong, and I wouldn't have known that without this experience."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <p className="text-lg text-warm-gray mb-6">Ready to write your own success story?</p>
              <Link href="/programs">
                <button className="btn-luxury btn-luxury-primary">
                  EXPLORE PROGRAMS
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Gallery Detail Dialog */}
      <GalleryDetailDialog 
        item={selectedGalleryItem}
        open={galleryDialogOpen}
        onOpenChange={setGalleryDialogOpen}
      />
    </div>
  );
}
