import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

const NoticePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Clear the session storage to ensure popup shows
    sessionStorage.removeItem("hasSeenNotice");
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenNotice", "true");
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-accent" />
            </div>
            <AlertDialogTitle className="text-xl">Important Notice</AlertDialogTitle>
          </div>
          <AlertDialogDescription className="text-base text-foreground">
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
        <AlertDialogFooter>
          <Button onClick={handleClose} className="w-full">
            I Understand
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NoticePopup;
