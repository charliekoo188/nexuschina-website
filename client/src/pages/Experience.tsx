/* NEXUS CHINA Design System
 * Page: Experience - Testimonials and gallery
 */

import ScrollAnimation from "@/components/ScrollAnimation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Quote } from "lucide-react";

export default function Experience() {
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
                  className="group relative overflow-hidden rounded-sm shadow-md hover:shadow-xl transition-luxury"
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
      </main>

      <Footer />
    </div>
  );
}
