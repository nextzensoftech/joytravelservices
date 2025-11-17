import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import NoticePopup from "@/components/NoticePopup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Globe,
  TrendingUp,
  Database,
  Share2,
  Zap,
  PenTool,
  Star,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Travel Website Development",
    description: "Modern, responsive websites tailored for travel agencies with booking integration capabilities.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Digital Marketing",
    description: "Increase visibility and rankings with targeted SEO strategies and digital marketing campaigns.",
  },
  {
    icon: Database,
    title: "CRM & Lead Management",
    description: "Streamline operations with custom CRM solutions including Zoho, HubSpot, and bespoke systems.",
  },
  {
    icon: Share2,
    title: "Social Media Branding",
    description: "Build your brand presence across Facebook, Instagram, LinkedIn, and YouTube.",
  },
  {
    icon: Zap,
    title: "Automation Tools",
    description: "WhatsApp and email automation to enhance customer engagement and save time.",
  },
  {
    icon: PenTool,
    title: "Content Creation",
    description: "Professional copywriting and graphic design services for your travel business.",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Wanderlust Travel Agency",
    text: "Joy Travel Services transformed our online presence. Our website bookings increased by 200% in just 3 months!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "Global Adventures Tours",
    text: "The CRM system they implemented has streamlined our entire workflow. Exceptional service and support!",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    company: "Paradise Getaways",
    text: "Their SEO expertise brought us to the top of Google rankings. Highly professional team!",
    rating: 5,
  },
  {
    name: "David Kumar",
    company: "Elite Travel Solutions",
    text: "Outstanding digital marketing strategy that delivered real results. Worth every penny!",
    rating: 5,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <NoticePopup />

      <main className="pt-[120px]">
        {/* Hero Section */}
        <HeroSlider />

        {/* Services Overview */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital solutions designed specifically for travel agencies
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it - hear from travel agencies we've helped grow
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-sm mb-4 italic">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Travel Business?
            </h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Let's discuss how we can help you grow with our digital solutions
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
