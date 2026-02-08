/* NEXUS CHINA Design System V2
 * Page: Resources - Showcase our exclusive access to China's top institutions
 */

import { useState } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PartnerDetailDialog, { PartnerDetail } from "@/components/PartnerDetailDialog";
import { Building2, GraduationCap, Heart, Landmark, ArrowRight } from "lucide-react";

// Extended partner data with full details
const partnerDetailsData: Record<string, PartnerDetail> = {
  "ByteDance": {
    name: "ByteDance",
    detail: "TikTok/Douyin headquarters, AI research labs",
    fullDescription: "ByteDance is one of the world's leading technology companies, operating a range of content platforms that inform, educate, entertain and inspire people across languages, cultures and geographies. Founded in 2012, ByteDance's mission is to inspire creativity and enrich life. With a suite of more than a dozen products, including TikTok, Helo, and Resso, as well as platforms specific to the China market, including Toutiao, Douyin, and Xigua, ByteDance has made it easier and more fun for people to connect with, consume, and create content.",
    location: "Beijing, China",
    founded: "2012",
    employees: "150,000+",
    website: "https://www.bytedance.com",
    nexusConnection: "NEXUS CHINA participants gain exclusive access to ByteDance's Beijing headquarters, including tours of their AI research labs, meetings with product teams, and insights into their content recommendation algorithms. Our program includes workshops on China's digital ecosystem and the future of short-form video.",
    highlights: [
      "TikTok has over 1 billion monthly active users globally",
      "Douyin (Chinese version of TikTok) dominates China's short-video market",
      "Advanced AI-powered content recommendation engine",
      "Leading innovator in machine learning and computer vision",
      "Expanding into education, gaming, and enterprise software"
    ]
  },
  "Tsinghua University": {
    name: "Tsinghua University",
    detail: "Engineering, AI research, entrepreneurship",
    fullDescription: "Tsinghua University, founded in 1911, is one of China's most prestigious institutions and consistently ranks among the top universities globally. Known as the 'MIT of China,' Tsinghua excels in engineering, computer science, and technology innovation. The university has produced numerous Chinese leaders in politics, business, and academia, and maintains strong international partnerships with leading universities worldwide.",
    location: "Beijing, China",
    founded: "1911",
    employees: "15,000+ faculty and staff",
    website: "https://www.tsinghua.edu.cn",
    nexusConnection: "NEXUS CHINA has established a strategic partnership with Tsinghua University, providing our participants with access to lectures by renowned professors, lab visits to cutting-edge research facilities, and networking opportunities with Schwarzman Scholars and MBA students. Participants can attend seminars on China's innovation ecosystem and entrepreneurship landscape.",
    highlights: [
      "Ranked #1 in Asia and #16 globally (QS World University Rankings 2024)",
      "Home to the Schwarzman Scholars program",
      "Leading research in AI, quantum computing, and clean energy",
      "Strong industry partnerships with tech giants like Alibaba and Tencent",
      "Alumni include Chinese President Xi Jinping and numerous Fortune 500 CEOs"
    ]
  },
  "BYD": {
    name: "BYD",
    detail: "Electric vehicles, battery technology",
    fullDescription: "BYD (Build Your Dreams) is a leading Chinese manufacturer of electric vehicles and batteries. Founded in 1995 as a battery company, BYD has grown into one of the world's largest EV manufacturers, surpassing Tesla in global EV sales in 2023. The company's vertical integration strategy—controlling everything from battery production to vehicle assembly—has given it a significant competitive advantage in the rapidly growing EV market.",
    location: "Shenzhen, China",
    founded: "1995",
    employees: "290,000+",
    website: "https://www.byd.com",
    nexusConnection: "NEXUS CHINA participants visit BYD's state-of-the-art manufacturing facilities in Shenzhen, witnessing firsthand the company's revolutionary Blade Battery technology and vertical integration strategy. Our program includes meetings with BYD executives, test drives of the latest EV models, and discussions on the future of sustainable transportation.",
    highlights: [
      "World's largest EV manufacturer by sales volume (2023)",
      "Pioneered Blade Battery technology for enhanced safety and range",
      "Expanding globally with factories in Europe, Southeast Asia, and South America",
      "Diversified business including EVs, batteries, and renewable energy solutions",
      "Backed by Warren Buffett's Berkshire Hathaway"
    ]
  },
  // Add more partner details as needed
};

export default function Resources() {
  const [selectedPartner, setSelectedPartner] = useState<PartnerDetail | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handlePartnerClick = (partnerName: string, partnerDetail: string) => {
    const fullDetails = partnerDetailsData[partnerName];
    if (fullDetails) {
      setSelectedPartner(fullDetails);
    } else {
      // Fallback for partners without full details
      setSelectedPartner({
        name: partnerName,
        detail: partnerDetail,
        fullDescription: `${partnerName} is one of our valued partners. Through NEXUS CHINA, participants gain exclusive access to ${partnerName}'s facilities and leadership team, providing unique insights into China's innovation ecosystem.`,
        nexusConnection: `NEXUS CHINA provides participants with exclusive access to ${partnerName}, including facility tours, meetings with key personnel, and insights into their operations and strategy in the Chinese market.`
      });
    }
    setDialogOpen(true);
  };

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
                          onClick={() => handlePartnerClick(partner.name, partner.detail)}
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
      
      {/* Partner Detail Dialog */}
      <PartnerDetailDialog 
        partner={selectedPartner}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
