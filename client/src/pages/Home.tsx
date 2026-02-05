/* NEXUS CHINA Design System
 * Page: Home - Landing page with hero, stats, and CTA sections
 * Philosophy: Modern Luxury - Restrained elegance, generous whitespace, visual hierarchy
 */

import { ArrowRight, Users, Building2, Globe2, Award } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Elite Participants",
      description: "From Oxford, Cambridge, Imperial, and top UK private schools"
    },
    {
      icon: Building2,
      number: "50+",
      label: "Partner Enterprises",
      description: "Exclusive access to China's leading tech and business giants"
    },
    {
      icon: Globe2,
      number: "15+",
      label: "Cities Explored",
      description: "Beijing, Shanghai, Shenzhen, Hangzhou, and emerging tech hubs"
    },
    {
      icon: Award,
      number: "98%",
      label: "Satisfaction Rate",
      description: "Participants report transformative experiences and lasting connections"
    }
  ];

  const features = [
    {
      title: "Exclusive Enterprise Access",
      description: "Visit the headquarters of ByteDance, Huawei, Tencent, Alibaba, and other industry leaders. Engage in private discussions with C-suite executives and innovation teams.",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/T0FKfLVl6xm6qptnhvYDPe/sandbox/mDBVNQzQ0g3EuLqlvpEZEQ-img-2_1770288257000_na1fn_dGVjaC1pbm5vdmF0aW9u.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVDBGS2ZMVmw2eG02cXB0bmh2WURQZS9zYW5kYm94L21EQlZOUXpRMGczRXVMcWx2cEVaRVEtaW1nLTJfMTc3MDI4ODI1NzAwMF9uYTFmbl9kR1ZqYUMxcGJtNXZkbUYwYVc5dS5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WDb6hittQQbTNQ5CH7YukOJFynyXisVSIYq3CqXh5REn0~-Puh4Fjipks8XBP0tyuTISc-F5Pd3NO8EMIL4ciYUGbG2AsgZH3unWSqF9bUAz8A4bDo1Od7YWwc5OFiufM9K9iW76ogqLZcn99ElJjoTb0PYwm-FZx144~7d7vFbS0bG5wcEVhMMKbvLDUuPwtIJQQBuTqL2qXAvOYJZe069~-A~rO~XpnXEb0PPQ-MPugHtjXBaPMpsUIwhqLUulKLnHuAjC1cATcde4oIBkHXQKk06jtmYC6DzymsFrRNKv0yTDRxJvJu5dhQRxeX~i0N1zc2IE~q86AUq7ZJZV-Q__"
    },
    {
      title: "Cultural Immersion",
      description: "Experience contemporary Chinese culture through curated visits to art districts, design studios, and cultural landmarks. Understand the fusion of tradition and modernity.",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/T0FKfLVl6xm6qptnhvYDPe/sandbox/mDBVNQzQ0g3EuLqlvpEZEQ-img-3_1770288237000_na1fn_Y3VsdHVyYWwtYnJpZGdl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVDBGS2ZMVmw2eG02cXB0bmh2WURQZS9zYW5kYm94L21EQlZOUXpRMGczRXVMcWx2cEVaRVEtaW1nLTNfMTc3MDI4ODIzNzAwMF9uYTFmbl9ZM1ZzZEhWeVlXd3RZbkpwWkdkbC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=lr47E9WVJAIoj~g5MQ4At1tj0Z9UutmFZaGcUy7T~el38jXBtZ6FfPGeqeTvpIGIJ-lxm2HhFkROIfz7Tk8wRoAec2GrmpV9ZYhbNxIEuQwP6mTN6ODL-BdW3yqRk1tG3glEfaTKsrOKvx5VTOnSeVifimQ3e4l6a-MT03Rv00wqVtZyzgDj3Z6wCdG3qZMAcuQ6Ax-X3CffojaQqTjRdyhRMTeJMK4CVEzbgegHbKA3~cNs0FVn-BcL~7Dg838kACVDte8z40aWeQqIC8tAW3kQRl8blSROk7mg-7a4~V5GONlrn88orBt7XETS1kOVlIbCjvquQxxpoP-QsJOkXg__"
    },
    {
      title: "Elite Networking",
      description: "Connect with fellow participants from Oxford, Cambridge, Imperial, and top private schools. Build lasting relationships with future global leaders and Chinese innovators.",
      image: "https://private-us-east-1.manuscdn.com/sessionFile/T0FKfLVl6xm6qptnhvYDPe/sandbox/mDBVNQzQ0g3EuLqlvpEZEQ-img-4_1770288259000_na1fn_ZWxpdGUtZXhwZXJpZW5jZQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVDBGS2ZMVmw2eG02cXB0bmh2WURQZS9zYW5kYm94L21EQlZOUXpRMGczRXVMcWx2cEVaRVEtaW1nLTRfMTc3MDI4ODI1OTAwMF9uYTFmbl9aV3hwZEdVdFpYaHdaWEpwWlc1alpRLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZkwblgVWMoS1yqiiqErRMMbbtJBBUKHGwMDbSok-vQ2Hj7KdqySJKsb7e5bp~kGi1PV7wuty0ICE3inywOmXaRS4gS~50hD2fmIpg~wtyJQ87LYS-TvYd1kcGzvHBr1e56awLkEAYrzTrdEiwE8XRkHu2KtsdTWZOi6EZHfxkcWWZGLL1Bab1RIEAMY6udIGwC2Gw5NjvOG57lXXmWaxjUyXfUlRUaql9npRy2ATofLxGdWu85H5qr2IF1Rhz4jwbdsgWijqzSCO7AFj70dw-UMNFs-0lwA-0Hg6SOnd-DkUQuiGFScFcUhXWQNaPvOLp~vUBjz2ot0GPDzwWN8wKw__"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section 
          className="relative h-screen flex items-center justify-center text-white"
          style={{
            backgroundImage: `linear-gradient(rgba(10, 47, 47, 0.7), rgba(10, 47, 47, 0.7)), url('https://private-us-east-1.manuscdn.com/sessionFile/T0FKfLVl6xm6qptnhvYDPe/sandbox/mDBVNQzQ0g3EuLqlvpEZEQ-img-1_1770288247000_na1fn_aGVyby1iYWNrZ3JvdW5k.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvVDBGS2ZMVmw2eG02cXB0bmh2WURQZS9zYW5kYm94L21EQlZOUXpRMGczRXVMcWx2cEVaRVEtaW1nLTFfMTc3MDI4ODI0NzAwMF9uYTFmbl9hR1Z5YnkxaVlXTnJaM0p2ZFc1ay5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UFURTIEtFxLa1oWfQaV~3jHtOny~GDXKdyUTEGZXMWHyNS4zArxIi7fduGHAO6UyflYptCXfFM1zxy7HHrHg05EsVL1fmiVCwDh4yZcHVpQKAxr5AcwCt-WUVFdYnJ57-~TvOrXeJBf8zRgCainvR9KnyZa1YHYArUzioeLjZyzZ-~em-m53ei66U1lUXWXvp96J9EXLrpzio1kZlnjIxC23Ntcq9U6w1wNVFXrbsZfRcJufAbhq6H45C4HSgsl4pyzl5b1RJVdnX6PnThHJwUolpR1LwWuk49HMrz7SBVO5cHcxqCu34WgfyiqESepP3MviAnBbMqyQxwYSC6uD4g__')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="container text-center z-10">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-6 text-[rgb(var(--color-gold))]">
              Where Future Leaders Meet Modern China
            </p>
            <h1 
              className="text-5xl md:text-7xl lg:text-8xl font-medium mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Experience the<br />
              <span className="text-[rgb(var(--color-gold))]">Future of Innovation</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed opacity-90">
              Exclusive China immersion programs for elite students from Oxford, Cambridge, Imperial, and top UK private schools. Discover cutting-edge technology, world-class enterprises, and contemporary culture.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/programs">
                <button className="btn-luxury btn-luxury-primary">
                  Explore Programs <ArrowRight className="inline ml-2" size={18} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn-luxury btn-luxury-secondary">
                  Book Consultation
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 
                className="text-4xl md:text-5xl font-medium mb-4 text-[rgb(var(--color-teal))]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Impact by Numbers
              </h2>
              <div className="gold-divider"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our track record speaks for itself. Join a community of future leaders who have transformed their understanding of global innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="text-center p-8 bg-[rgb(var(--color-ivory))] rounded-sm hover:shadow-lg transition-luxury group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-[rgb(var(--color-teal))] text-[rgb(var(--color-gold))] rounded-full group-hover:scale-110 transition-luxury">
                    <stat.icon size={28} />
                  </div>
                  <div 
                    className="text-5xl font-medium mb-2 text-[rgb(var(--color-teal))]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold mb-2 text-[rgb(var(--color-gold))]">
                    {stat.label}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-[rgb(var(--color-ivory))]">
          <div className="container">
            <div className="text-center mb-16">
              <h2 
                className="text-4xl md:text-5xl font-medium mb-4 text-[rgb(var(--color-teal))]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                What Makes Us Different
              </h2>
              <div className="gold-divider"></div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide unparalleled access to China's innovation ecosystem, combining exclusive enterprise visits, cultural immersion, and elite networking opportunities.
              </p>
            </div>

            <div className="space-y-24">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <img 
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-[400px] object-cover rounded-sm shadow-lg"
                    />
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <h3 
                      className="text-3xl md:text-4xl font-medium mb-6 text-[rgb(var(--color-teal))]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                      {feature.description}
                    </p>
                    <Link href="/programs">
                      <button className="btn-luxury btn-luxury-secondary">
                        Learn More <ArrowRight className="inline ml-2" size={18} />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="section-padding text-white text-center"
          style={{
            background: 'linear-gradient(135deg, rgb(var(--color-teal)) 0%, rgb(10, 60, 60) 100%)'
          }}
        >
          <div className="container max-w-4xl">
            <h2 
              className="text-4xl md:text-5xl font-medium mb-6 text-[rgb(var(--color-gold))]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Ready to Transform Your Understanding of China?
            </h2>
            <p className="text-lg md:text-xl mb-12 leading-relaxed opacity-90">
              Join an exclusive cohort of future leaders. Limited spaces available for our next program.
            </p>
            <Link href="/contact">
              <button className="btn-luxury btn-luxury-primary">
                Apply Now <ArrowRight className="inline ml-2" size={18} />
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
