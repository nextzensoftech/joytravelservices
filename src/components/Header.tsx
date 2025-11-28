import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Facebook, Instagram, Linkedin, Youtube, AlertCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About Us" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact Us" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/joytravelservicesofficial", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/joytravelservicesofficial/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/joy-travel-services/", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <>
      {/* Sticky Notice Bar */}
      <div className={`bg-accent text-accent-foreground py-2 px-4 fixed top-0 left-0 right-0 z-50 max-[1000px]:hidden ${isMobileMenuOpen ? 'hidden' : ''}`}>
        <div className="container mx-auto flex items-center justify-center gap-2 text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <p className="text-center">
            <strong>Notice:</strong> Joy Travel Services does NOT book any flight tickets. 
            We only provide digital & marketing services for travel companies.
          </p>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed left-0 right-0 transition-all duration-300 max-[1000px]:top-0 top-8 ${
          isMobileMenuOpen ? 'z-50 bg-background/95 backdrop-blur-md shadow-sm' : 'z-40'
        } ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex flex-col gap-1">
              <Link to="/" className="flex items-center gap-3">
                <img src={logo} alt="Joy Travel Services" className="h-12 w-auto" />
              </Link>
              {/* Address - Mobile Only */}
              <p className="lg:hidden text-xs text-muted-foreground max-w-[280px]">
                Showroom No. 305, Green Lotus Saksham Commercial, ZIRAKPUR, Punjab 140603.
              </p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === link.to ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Address & Social Icons - Desktop */}
            <div className="hidden lg:flex items-center gap-6">
              <p className="text-xs text-muted-foreground max-w-[300px]">
                Showroom No. 305, Green Lotus Saksham Commercial, ZIRAKPUR, Punjab 140603.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-all flex items-center justify-center group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 border-t animate-slide-in-right">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      location.pathname === link.to ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex items-center gap-3 pt-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
