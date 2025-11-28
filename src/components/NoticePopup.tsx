import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle, X, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const NoticePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/joytravelservicesofficial", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/joytravelservicesofficial/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/joy-travel-services/", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  ];

  useEffect(() => {
    // Show popup on every page navigation
    setIsOpen(false); // Close first if already open
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="max-w-md w-[calc(100%-2rem)] sm:w-full mx-auto">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>
        <AlertDialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
            </div>
            <AlertDialogTitle className="text-lg sm:text-xl">Important Notice</AlertDialogTitle>
          </div>
          <AlertDialogDescription className="text-sm sm:text-base text-foreground">
            <strong>Joy Travel Services does NOT book any flight tickets.</strong>
            <br />
            <br />
            We only provide digital & marketing services for travel companies, including:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Website Development</li>
              <li>CRM Solutions</li>
              <li>SEO & Digital Marketing</li>
              <li>Social Media Management</li>
            </ul>
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        {/* Address Section */}
        <div className="border-t pt-4">
          <div className="flex items-start gap-2 text-sm text-muted-foreground mb-3">
            <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p>Showroom No. 305, Green Lotus Saksham Commercial, ZIRAKPUR, Punjab 140603.</p>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary transition-all flex items-center justify-center"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        
        <AlertDialogFooter className="sm:justify-end">
          <Button onClick={handleClose} className="w-full">
            I Understand
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NoticePopup;
