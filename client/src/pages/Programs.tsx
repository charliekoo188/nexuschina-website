/* NEXUS CHINA Design System
 * Page: Programs - Showcase different program offerings
 */

import ScrollAnimation from "@/components/ScrollAnimation";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, Users, MapPin, Check } from "lucide-react";
import { Link } from "wouter";
import { useEffect } from "react";

export default function Programs() {
  useEffect(() => {
    // Add JSON-LD structured data for multiple Course schemas
    const programs = [
      {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Tech Innovation Immersion",
        "description": "10-day program visiting ByteDance, Huawei, Tencent, and AI startups in Beijing, Shenzhen, Hangzhou",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "NEXUS CHINA",
          "url": "https://nexuschina.com"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "duration": "P10D",
          "location": {
            "@type": "Place",
            "name": "Beijing, Shenzhen, Hangzhou",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "CN"
            }
          }
        },
        "audience": {
          "@type": "EducationalAudience",
          "educationalRole": "student",
          "audienceType": "University students from Oxford, Cambridge, Imperial College"
        },
        "educationalLevel": "University",
        "inLanguage": ["en", "zh"],
        "coursePrerequisites": "Enrollment at Oxford, Cambridge, Imperial College or top UK private school",
        "teaches": ["Technology Innovation", "AI and Machine Learning", "Chinese Business Culture", "Tech Entrepreneurship"],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "ratingCount": "89"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Business & Culture Experience",
        "description": "7-day program exploring business innovation and cultural heritage in Beijing and Shanghai",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "NEXUS CHINA",
          "url": "https://nexuschina.com"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "duration": "P7D",
          "location": {
            "@type": "Place",
            "name": "Beijing, Shanghai",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "CN"
            }
          }
        },
        "audience": {
          "@type": "EducationalAudience",
          "educationalRole": "student",
          "audienceType": "University students from Oxford, Cambridge, Imperial College"
        },
        "educationalLevel": "University",
        "inLanguage": ["en", "zh"],
        "coursePrerequisites": "Enrollment at Oxford, Cambridge, Imperial College or top UK private school",
        "teaches": ["Business Innovation", "Cultural Heritage", "Contemporary Art", "Cross-Cultural Communication"],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "bestRating": "5",
          "ratingCount": "76"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Sustainability & Green Tech",
        "description": "8-day program focused on renewable energy, electric vehicles, and sustainable development",
        "provider": {
          "@type": "EducationalOrganization",
          "name": "NEXUS CHINA",
          "url": "https://nexuschina.com"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "duration": "P8D",
          "location": {
            "@type": "Place",
            "name": "Shanghai, Hangzhou, Suzhou",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "CN"
            }
          }
        },
        "audience": {
          "@type": "EducationalAudience",
          "educationalRole": "student",
          "audienceType": "University students from Oxford, Cambridge, Imperial College"
        },
        "educationalLevel": "University",
        "inLanguage": ["en", "zh"],
        "coursePrerequisites": "Enrollment at Oxford, Cambridge, Imperial College or top UK private school",
        "teaches": ["Renewable Energy", "Electric Vehicles", "Sustainable Development", "Green Technology", "Urban Planning"],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "bestRating": "5",
          "ratingCount": "72"
        }
      }
    ];

    // Add FAQPage Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who can apply for NEXUS CHINA programs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our programs are designed for students from Oxford, Cambridge, Imperial College London, and other top UK universities, as well as students from leading UK private schools (ages 16+). We seek intellectually curious individuals with a genuine interest in understanding contemporary China."
          }
        },
        {
          "@type": "Question",
          "name": "What is the typical group size?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We maintain small group sizes of 10-16 participants to ensure personalized attention, meaningful interactions, and exclusive access. This intimate setting allows for deeper engagement with hosts and fellow participants."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to speak Mandarin?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No Mandarin language skills are required. All programs include expert English-speaking guides and translators. However, basic Mandarin phrases are encouraged and we provide a language primer before departure."
          }
        },
        {
          "@type": "Question",
          "name": "What is the application process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The application process includes: (1) Submit online application form, (2) Video interview with our team, (3) Review of academic background and interests, (4) Final acceptance notification. We recommend applying 3-4 months before your preferred program date."
          }
        },
        {
          "@type": "Question",
          "name": "What is included in the program fee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The program fee covers all accommodation in 5-star hotels, private transportation, all meals, exclusive enterprise visits, expert guides, networking events, cultural activities, and program materials. International flights and personal expenses are not included."
          }
        },
        {
          "@type": "Question",
          "name": "Can programs be customized?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Absolutely. We specialize in creating bespoke programs tailored to your specific interests, academic focus, or organizational needs. Whether you're interested in fintech, AI, sustainability, or cultural heritage, we'll design an exclusive experience for your group."
          }
        },
        {
          "@type": "Question",
          "name": "What safety measures are in place?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Participant safety is our top priority. We provide 24/7 on-ground support, comprehensive travel insurance, secure accommodations, vetted transportation, and emergency protocols. Our team has extensive experience managing international programs in China."
          }
        },
        {
          "@type": "Question",
          "name": "When are programs offered?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer programs year-round, with peak seasons during university breaks (summer, winter, and spring). Custom programs can be scheduled at your convenience with at least 2 months advance notice."
          }
        }
      ]
    };

    const scripts = programs.map((program, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = `course-schema-${index}`;
      script.text = JSON.stringify(program);
      document.head.appendChild(script);
      return script;
    });

    // Add FAQ schema
    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.id = 'faq-schema';
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);
    scripts.push(faqScript);

    return () => {
      scripts.forEach(script => {
        if (script.parentNode) {
          document.head.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="China Immersion Programs for UK Elite Students"
        description="Exclusive tech, business and cultural programs in China. Visit ByteDance, Tencent, top universities. For Oxford, Cambridge, Imperial students."
        keywords="China tech program, China academic program, China cultural program, UK student programs China, enterprise visits China, university exchange China"
        ogImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663326825618/iBeVYFnpVshraLUw.png"
        canonical="https://nexuschina.com/programs"
      />
      <Navbar />
      <ProgramsContent />
      <Footer />
    </div>
  );
}

function ProgramsContent() {
  const programs = [
    {
      title: "Tech Innovation Immersion",
      duration: "10 Days",
      participants: "12-16 Students",
      locations: "Beijing, Shenzhen, Hangzhou",

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
    <>
      
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

                    {/* CTA */}
                    <div className="pt-4 border-t border-border">
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

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container max-w-4xl">
            <h2 
              className="text-4xl font-medium mb-12 text-charcoal text-center"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Frequently Asked Questions
            </h2>
            <div className="luxury-divider mb-12"></div>
            <div className="space-y-6">
              {[
                {
                  question: "Who can apply for NEXUS CHINA programs?",
                  answer: "Our programs are designed for students from Oxford, Cambridge, Imperial College London, and other top UK universities, as well as students from leading UK private schools (ages 16+). We seek intellectually curious individuals with a genuine interest in understanding contemporary China."
                },
                {
                  question: "What is the typical group size?",
                  answer: "We maintain small group sizes of 10-16 participants to ensure personalized attention, meaningful interactions, and exclusive access. This intimate setting allows for deeper engagement with hosts and fellow participants."
                },
                {
                  question: "Do I need to speak Mandarin?",
                  answer: "No Mandarin language skills are required. All programs include expert English-speaking guides and translators. However, basic Mandarin phrases are encouraged and we provide a language primer before departure."
                },
                {
                  question: "What is the application process?",
                  answer: "The application process includes: (1) Submit online application form, (2) Video interview with our team, (3) Review of academic background and interests, (4) Final acceptance notification. We recommend applying 3-4 months before your preferred program date."
                },
                {
                  question: "What is included in the program fee?",
                  answer: "The program fee covers all accommodation in 5-star hotels, private transportation, all meals, exclusive enterprise visits, expert guides, networking events, cultural activities, and program materials. International flights and personal expenses are not included."
                },
                {
                  question: "Can programs be customized?",
                  answer: "Absolutely. We specialize in creating bespoke programs tailored to your specific interests, academic focus, or organizational needs. Whether you're interested in fintech, AI, sustainability, or cultural heritage, we'll design an exclusive experience for your group."
                },
                {
                  question: "What safety measures are in place?",
                  answer: "Participant safety is our top priority. We provide 24/7 on-ground support, comprehensive travel insurance, secure accommodations, vetted transportation, and emergency protocols. Our team has extensive experience managing international programs in China."
                },
                {
                  question: "When are programs offered?",
                  answer: "We offer programs year-round, with peak seasons during university breaks (summer, winter, and spring). Custom programs can be scheduled at your convenience with at least 2 months advance notice."
                }
              ].map((faq, index) => (
                <div key={index} className="luxury-card p-6">
                  <h3 className="text-xl font-medium mb-3 text-charcoal" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {faq.question}
                  </h3>
                  <p className="text-warm-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-lg text-warm-gray mb-6">Still have questions?</p>
              <Link href="/contact">
                <button className="btn-luxury btn-luxury-primary">
                  CONTACT US <ArrowRight className="inline ml-2" size={18} />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

