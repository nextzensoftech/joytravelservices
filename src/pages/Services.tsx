import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Globe,
  TrendingUp,
  Database,
  Share2,
  Zap,
  PenTool,
  Search,
  Smartphone,
  BarChart,
  Mail,
  MessageSquare,
  Palette,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Travel Website Development",
    description: "We create stunning, user-friendly websites specifically designed for travel agencies. Our websites are:",
    features: [
      "Fully responsive and mobile-optimized",
      "Integrated with booking systems",
      "Fast-loading and SEO-friendly",
      "Custom-designed to match your brand",
      "Easy to manage and update",
    ],
  },
  {
    icon: TrendingUp,
    title: "SEO & Google Ranking Services",
    description: "Dominate search engine results and attract more customers with our comprehensive SEO services:",
    features: [
      "Keyword research and optimization",
      "On-page and off-page SEO",
      "Local SEO for travel agencies",
      "Content optimization strategies",
      "Monthly performance reports",
    ],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Build a strong social media presence across all major platforms:",
    features: [
      "Content creation and scheduling",
      "Facebook, Instagram, LinkedIn management",
      "YouTube channel optimization",
      "Engagement and community building",
      "Social media advertising campaigns",
    ],
  },
  {
    icon: Database,
    title: "CRM Setup & Management",
    description: "Streamline your operations with powerful CRM solutions:",
    features: [
      "Zoho CRM implementation",
      "HubSpot setup and customization",
      "Custom CRM development",
      "Lead tracking and management",
      "Sales pipeline optimization",
    ],
  },
  {
    icon: Zap,
    title: "WhatsApp & Email Automation",
    description: "Save time and enhance customer engagement with intelligent automation:",
    features: [
      "WhatsApp Business API integration",
      "Automated email campaigns",
      "Customer journey automation",
      "Follow-up sequences",
      "Template design and setup",
    ],
  },
  {
    icon: PenTool,
    title: "Travel Branding & Graphic Design",
    description: "Stand out with professional branding and design services:",
    features: [
      "Logo and brand identity design",
      "Marketing materials creation",
      "Social media graphics",
      "Brochures and flyers",
      "Brand guidelines development",
    ],
  },
  {
    icon: BarChart,
    title: "Digital Marketing Campaigns",
    description: "Reach your target audience with data-driven marketing strategies:",
    features: [
      "Google Ads management",
      "Facebook and Instagram ads",
      "Retargeting campaigns",
      "Analytics and reporting",
      "ROI optimization",
    ],
  },
  {
    icon: Search,
    title: "Content Creation & Copywriting",
    description: "Engage your audience with compelling, travel-focused content:",
    features: [
      "Website content writing",
      "Blog posts and articles",
      "Destination guides",
      "Email newsletters",
      "SEO-optimized content",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored for travel agencies
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-2 hover:border-primary transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                        <p className="text-muted-foreground mb-4">{service.description}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-2 border-primary/20">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Elevate Your Travel Business?
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss how our services can help you achieve your business goals. 
                  Get in touch with us today for a free consultation.
                </p>
                <Button asChild size="lg">
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
