/* NEXUS CHINA Design System V2
 * Page: Resources - Showcase our exclusive access to China's top institutions
 */

import ScrollAnimation from "@/components/ScrollAnimation";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, GraduationCap, Heart, Landmark, ArrowRight } from "lucide-react";

export default function Resources() {
  const resourceCategories = [
    {
      icon: Building2,
      title: "Technology & Innovation",
      description: "Exclusive access to China's leading tech giants and innovation hubs, where the future is being built today.",
      partners: [
        { name: "ByteDance", detail: "TikTok/Douyin headquarters, AI research labs" },
        { name: "Tencent", detail: "WeChat ecosystem, gaming & social innovation" },
        { name: "Alibaba Cloud", detail: "Cloud computing, e-commerce infrastructure" },
        { name: "Huawei", detail: "5G technology, telecommunications leadership" },
        { name: "DJI", detail: "Drone technology, robotics innovation" },
        { name: "BYD", detail: "Electric vehicles, battery technology" }
      ]
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Direct engagement with China's most prestigious universities and research institutions.",
      partners: [
        { name: "Tsinghua University", detail: "Engineering, AI research, entrepreneurship" },
        { name: "Peking University", detail: "Liberal arts, business, international studies" },
        { name: "Fudan University", detail: "Economics, finance, social sciences" },
        { name: "Shanghai Jiao Tong University", detail: "Engineering, medicine, management" },
        { name: "Zhejiang University", detail: "Computer science, innovation ecosystem" },
        { name: "Chinese Academy of Sciences", detail: "Cutting-edge research facilities" }
      ]
    },
    {
      icon: Heart,
      title: "Healthcare & Biotech",
      description: "Insights into China's rapidly advancing medical technology and healthcare innovation sector.",
      partners: [
        { name: "Peking Union Medical College Hospital", detail: "Premier medical institution" },
        { name: "Shanghai Sixth People's Hospital", detail: "Advanced surgical techniques" },
        { name: "BGI Genomics", detail: "World-leading genomics research" },
        { name: "WuXi AppTec", detail: "Pharmaceutical R&D services" },
        { name: "Ping An Good Doctor", detail: "Digital health platform" },
        { name: "iCarbonX", detail: "AI-driven precision medicine" }
      ]
    },
    {
      icon: Landmark,
      title: "Cultural Heritage",
      description: "Privileged access to China's most significant cultural landmarks and contemporary art institutions.",
      partners: [
        { name: "The Forbidden City", detail: "Private tours, conservation insights" },
        { name: "Temple of Heaven", detail: "Architectural masterpiece, cultural significance" },
        { name: "798 Art District", detail: "Contemporary art, gallery access" },
        { name: "National Museum of China", detail: "Curated exhibitions, expert guides" },
        { name: "M50 Creative Park", detail: "Emerging artists, design studios" },
        { name: "UCCA Center for Contemporary Art", detail: "International exhibitions" }
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Partner Network: Top Chinese Tech & Universities"
        description="Explore NEXUS CHINA's extensive network of partners including top Chinese tech companies, premier universities, and cultural institutions."
        keywords="China tech companies, Chinese universities, NEXUS CHINA partners"
        ogImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663326825618/TCzZUYaCXMKrzOAd.png"
        canonical="https://nexuschina.com/resources"
      />
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-charcoal text-ivory luxury-overlay">
          <div className="container max-w-4xl text-center">
            <h1 
              className="text-5xl md:text-6xl font-medium mb-6 text-champagne fade-in-up"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Unparalleled <span className="text-rose-gold">Access</span>
            </h1>
            <div className="luxury-divider"></div>
            <p className="text-xl leading-relaxed opacity-90">
              NEXUS CHINA opens doors to China's most prestigious institutions, innovative enterprises, and cultural treasures. Our carefully cultivated relationships provide you with exclusive insights and experiences unavailable through conventional channels.
            </p>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="section-padding bg-ivory">
          <div className="container">
            <div className="space-y-24">
              {resourceCategories.map((category, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-5 gap-12 items-start ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Category Header */}
                  <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="sticky top-32">
                      <div className="w-16 h-16 bg-champagne flex items-center justify-center mb-6">
                        <category.icon size={32} className="text-charcoal" />
                      </div>
                      <h2 
                        className="text-4xl font-medium mb-4 text-charcoal"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {category.title}
                      </h2>
                      <p className="text-lg leading-relaxed text-warm-gray">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Partners List */}
                  <div className={`lg:col-span-3 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {category.partners.map((partner, idx) => (
                        <div 
                          key={idx}
                          className="luxury-card p-6 group cursor-pointer"
                        >
                          <h3 className="text-xl font-semibold mb-2 text-charcoal group-hover:text-rose-gold transition-colors duration-300">
                            {partner.name}
                          </h3>
                          <p className="text-sm text-warm-gray leading-relaxed">
                            {partner.detail}
                          </p>
                          <div className="mt-4 flex items-center text-xs font-medium tracking-wider text-champagne opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            LEARN MORE
                            <ArrowRight size={14} className="ml-2" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Logos Section */}
        <section className="section-padding bg-white">
          <div className="container max-w-5xl text-center">
            <h2 
              className="text-4xl font-medium mb-4 text-charcoal"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our Partners
            </h2>
            <div className="luxury-divider"></div>
            <p className="text-lg text-warm-gray mb-12 max-w-2xl mx-auto">
              We maintain close relationships with China's most influential organizations, ensuring our participants receive unprecedented access and insights.
            </p>
            
            {/* Logo Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 items-center justify-items-center">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663326825618/bSkBOWOTAjOlFswD.jpg"
                alt="Alibaba, Tencent, ByteDance"
                className="h-16 object-contain opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663326825618/tXwClAZSXemoUqld.jpg"
                alt="BYD & DJI"
                className="h-16 object-contain opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663326825618/vNbnqyaFgBReKele.png"
                alt="Tsinghua University"
                className="h-20 object-contain opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663326825618/exKTMzUpDyOMFRjo.png"
                alt="Peking University"
                className="h-20 object-contain opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663326825618/OmXyVnqJSfkqLCoq.jpg"
                alt="Shanghai Jiao Tong University"
                className="h-20 object-contain opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663326825618/ofZkmIMWlcHsQmiT.png"
                alt="Fudan University"
                className="h-20 object-contain opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663326825618/mhjfOLuLbzYonrPz.jpg"
                alt="WuXi AppTec"
                className="h-16 object-contain opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-charcoal text-ivory">
          <div className="container max-w-3xl text-center">
            <h2 
              className="text-4xl md:text-5xl font-medium mb-6 text-champagne"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Ready to Experience China's Innovation Ecosystem?
            </h2>
            <div className="luxury-divider"></div>
            <p className="text-lg leading-relaxed opacity-90 mb-8">
              Join our next immersion program and gain exclusive access to the institutions shaping China's future.
            </p>
            <button className="btn-luxury btn-luxury-primary">
              EXPLORE PROGRAMS <ArrowRight className="inline ml-2" size={18} />
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
