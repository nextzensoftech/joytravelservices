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
import serviceWebsite from "@/assets/service-website.jpg";
import serviceSeo from "@/assets/service-seo.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import serviceCrm from "@/assets/service-crm.jpg";
import serviceAutomation from "@/assets/service-automation.jpg";
import serviceBranding from "@/assets/service-branding.jpg";
import serviceMarketing from "@/assets/service-marketing.jpg";
import serviceContent from "@/assets/service-content.jpg";

const services = [
  {
    icon: Globe,
    image: serviceWebsite,
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
    image: serviceSeo,
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
    image: serviceSocial,
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
    image: serviceCrm,
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
    image: serviceAutomation,
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
    image: serviceBranding,
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
    image: serviceMarketing,
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
    image: serviceContent,
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

      <main className="pt-[112px] sm:pt-[120px]">
        {/* Page Header */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Our Services</h1>
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
                <Card key={index} className="border-2 hover:border-primary transition-colors overflow-hidden group">
                  <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/90 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                          <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">{service.title}</h3>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-5 sm:p-6 md:p-8">
                    <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{service.description}</p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 sm:mt-2 flex-shrink-0" />
                          <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
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
        <section className="py-12 sm:py-16 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-2 border-primary/20">
              <CardContent className="p-6 sm:p-8 md:p-12 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-2">
                  Ready to Elevate Your Travel Business?
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
                  Let's discuss how our services can help you achieve your business goals. 
                  Get in touch with us today for a free consultation.
                </p>
                <Button asChild size="lg" className="w-full sm:w-auto">
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
