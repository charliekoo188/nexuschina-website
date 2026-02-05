/* NEXUS CHINA Design System
 * Page: Contact - Contact form and information
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    toast.success("Thank you for your inquiry! We'll be in touch within 24 hours.");
    setFormData({ name: "", email: "", phone: "", university: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@nexuschina.com",
      link: "mailto:info@nexuschina.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+44 20 1234 5678",
      link: "tel:+442012345678"
    },
    {
      icon: MapPin,
      title: "Locations",
      content: "London | Beijing | Shanghai",
      link: null
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 24 hours",
      link: null
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-[rgb(var(--color-teal))] text-white">
          <div className="container max-w-4xl text-center">
            <h1 
              className="text-5xl md:text-6xl font-medium mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Get in <span className="text-[rgb(var(--color-gold))]">Touch</span>
            </h1>
            <div className="gold-divider"></div>
            <p className="text-xl leading-relaxed opacity-90">
              Ready to embark on a transformative journey? We'd love to hear from you. Our team is here to answer your questions and help you find the perfect program.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding bg-white">
          <div className="container max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 
                  className="text-3xl font-medium mb-6 text-[rgb(var(--color-teal))]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                      placeholder="john.smith@university.ac.uk"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full"
                      placeholder="+44 7700 900000"
                    />
                  </div>
                  <div>
                    <label htmlFor="university" className="block text-sm font-medium mb-2">
                      University / School
                    </label>
                    <Input
                      id="university"
                      type="text"
                      value={formData.university}
                      onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                      className="w-full"
                      placeholder="University of Oxford"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full min-h-[150px]"
                      placeholder="Tell us about your interests and what you'd like to learn more about..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full btn-luxury btn-luxury-primary"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 
                  className="text-3xl font-medium mb-6 text-[rgb(var(--color-teal))]"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Contact Information
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We're here to answer your questions and provide personalized guidance. Reach out through any of the channels below.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-[rgb(var(--color-ivory))] rounded-sm">
                      <div className="flex-shrink-0 w-12 h-12 bg-[rgb(var(--color-teal))] text-[rgb(var(--color-gold))] rounded-full flex items-center justify-center">
                        <info.icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[rgb(var(--color-teal))] mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-muted-foreground hover:text-[rgb(var(--color-gold))] transition-luxury"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-[rgb(var(--color-teal))] text-white rounded-sm">
                  <h3 
                    className="text-xl font-medium mb-3 text-[rgb(var(--color-gold))]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Connect on WeChat
                  </h3>
                  <p className="text-sm mb-3 opacity-90">
                    Scan our QR code or add us: <strong>NexusChina</strong>
                  </p>
                  <button className="text-sm uppercase tracking-wide border border-[rgb(var(--color-gold))] text-[rgb(var(--color-gold))] px-6 py-2 hover:bg-[rgb(var(--color-gold))] hover:text-[rgb(var(--color-teal))] transition-luxury">
                    View QR Code
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Preview */}
        <section className="section-padding bg-[rgb(var(--color-ivory))]">
          <div className="container max-w-4xl text-center">
            <h2 
              className="text-4xl font-medium mb-6 text-[rgb(var(--color-teal))]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Check out our frequently asked questions or schedule a consultation call to learn more about our programs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-luxury btn-luxury-secondary">
                View FAQ
              </button>
              <button className="btn-luxury btn-luxury-primary">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
