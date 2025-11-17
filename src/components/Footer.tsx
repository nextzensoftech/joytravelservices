import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  const quickLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact Us" },
    { to: "/terms", label: "Terms & Conditions" },
    { to: "/privacy", label: "Privacy Policy" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img src={logo} alt="Joy Travel Services" className="h-10 sm:h-12 w-auto mb-3 sm:mb-4" />
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
              Empowering travel agencies with digital growth solutions.
            </p>
            <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 sm:p-4 mb-3 sm:mb-4">
              <p className="text-xs text-foreground font-medium">
                <strong>Important:</strong> Joy Travel Services does NOT book any flight tickets. 
                We only provide digital & marketing services for travel companies.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h3>
            <ul className="">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Us</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span>Showroom No. 305, Green Lotus Saksham Commercial, ZIRAKPUR, Punjab 140603.</span>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 text-primary" />
                <a href="mailto:info@joytravelservices.com" className="hover:text-primary transition-colors break-all">
                  info@joytravelservices.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 text-primary" />
                <a href="tel:+919056662515" className="hover:text-primary transition-colors">+91 90566 62515</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Follow Us</h3>
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}>
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Joy Travel Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
