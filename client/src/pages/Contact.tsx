/* NEXUS CHINA Design System V2
 * Page: Contact - Contact form with consultation booking
 */

import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";
import ScrollAnimation from "@/components/ScrollAnimation";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Mail, Phone, MapPin, Clock, Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { format } from "date-fns";

export default function Contact() {
  const { user, isAuthenticated } = useAuth();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    preferredTime: "",
    message: ""
  });

  const createConsultation = trpc.consultations.create.useMutation({
    onSuccess: () => {
      toast.success("Consultation booked successfully! We'll confirm your appointment within 24 hours.");
      setFormData({ name: "", email: "", phone: "", preferredTime: "", message: "" });
      setDate(undefined);
    },
    onError: (error) => {
      toast.error(error.message || "Failed to book consultation. Please try again.");
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      toast.error("Please login to book a consultation");
      window.location.href = getLoginUrl();
      return;
    }

    if (!date) {
      toast.error("Please select a preferred date");
      return;
    }

    if (!formData.preferredTime) {
      toast.error("Please select a preferred time");
      return;
    }

    createConsultation.mutate({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      preferredDate: date,
      preferredTime: formData.preferredTime,
      message: formData.message,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@nexuschina.co.uk",
      link: "mailto:info@nexuschina.co.uk"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+44 20 1234 5678",
      link: "tel:+442012345678"
    },
    {
      icon: () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>,
      title: "WeChat",
      content: "aplanetUK",
      link: null
    },
    {
      icon: MapPin,
      title: "Locations",
      content: "London | Beijing | Shanghai",
      link: null
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon-Fri: 9:00 - 18:00 GMT",
      link: null
    }
  ];

  const timeSlots = [
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Contact NEXUS CHINA - Book Your Consultation"
        description="Get in touch with NEXUS CHINA to book a consultation or learn more about our exclusive China immersion programs for elite students."
        keywords="contact NEXUS CHINA, book consultation, China program inquiry, elite education contact"
        ogImage="https://files.manuscdn.com/user_upload_by_module/session_file/310519663326825618/UzpQgveSACqkMemh.png"
        canonical="https://nexuschina.com/contact"
      />
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-charcoal text-ivory">
          <div className="container max-w-4xl text-center">
            <h1 
              className="text-5xl md:text-6xl font-medium mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Get in <span className="text-champagne">Touch</span>
            </h1>
            <div className="luxury-divider"></div>
            <p className="text-xl leading-relaxed opacity-90">
              Book a complimentary consultation to discuss how NEXUS CHINA can shape your understanding of modern China.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding bg-white">
          <div className="container max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ScrollAnimation>
                <div className="luxury-card p-8">
                  <h2 
                    className="text-3xl font-medium mb-6 text-charcoal"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Book a Consultation
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-charcoal font-medium mb-2 block">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-ivory border-champagne/30 focus:border-champagne"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-charcoal font-medium mb-2 block">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-ivory border-champagne/30 focus:border-champagne"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-charcoal font-medium mb-2 block">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="bg-ivory border-champagne/30 focus:border-champagne"
                      />
                    </div>
                    <div>
                      <Label className="text-charcoal font-medium mb-2 block">Preferred Date *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal bg-ivory border-champagne/30"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            disabled={(date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div>
                      <Label htmlFor="time" className="text-charcoal font-medium mb-2 block">Preferred Time (GMT) *</Label>
                      <select
                        id="time"
                        required
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-2 bg-ivory border border-champagne/30 rounded-md focus:outline-none focus:border-champagne"
                      >
                        <option value="">Select a time slot</option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-charcoal font-medium mb-2 block">Message</Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your interests and what you'd like to discuss..."
                        className="bg-ivory border-champagne/30 focus:border-champagne"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full btn-luxury btn-luxury-primary"
                      disabled={createConsultation.isPending}
                    >
                      {createConsultation.isPending ? "Booking..." : "BOOK CONSULTATION"}
                    </Button>
                    {!isAuthenticated && (
                      <p className="text-sm text-warm-gray text-center">
                        You'll need to <a href={getLoginUrl()} className="text-rose-gold hover:underline">login</a> to book a consultation
                      </p>
                    )}
                  </form>
                </div>
              </ScrollAnimation>

              {/* Contact Information */}
              <div className="space-y-8">
                <ScrollAnimation>
                  <div>
                    <h2 
                      className="text-3xl font-medium mb-6 text-charcoal"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Contact Information
                    </h2>
                    <div className="space-y-6">
                      {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-champagne flex items-center justify-center flex-shrink-0">
                            <info.icon size={20} className="text-charcoal" />
                          </div>
                          <div>
                            <h3 className="font-medium text-charcoal mb-1">{info.title}</h3>
                            {info.link ? (
                              <a 
                                href={info.link} 
                                className="text-warm-gray hover:text-rose-gold transition-colors"
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-warm-gray">{info.content}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation delay={0.2}>
                  <div className="luxury-card p-8 bg-charcoal text-ivory">
                    <h3 
                      className="text-2xl font-medium mb-4 text-champagne"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Why Book a Consultation?
                    </h3>
                    <ul className="space-y-3 text-sm leading-relaxed opacity-90">
                      <li className="flex items-start gap-2">
                        <span className="text-champagne mt-1">•</span>
                        <span>Personalized program recommendations based on your academic interests and career goals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-champagne mt-1">•</span>
                        <span>Detailed insights into our exclusive enterprise visits and academic partnerships</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-champagne mt-1">•</span>
                        <span>Answers to all your questions about logistics, safety, and program structure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-champagne mt-1">•</span>
                        <span>Opportunity to speak with alumni who have experienced our programs</span>
                      </li>
                    </ul>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
