import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
<<<<<<< HEAD
    { name: "RDC", href: "/rdc" },
    { name: "RSU Library", href: "/library" },
    { name: "Canteen", href: "/canteen" },
    { name: "Announcements", href: "/announcements" },
    { name: "Clubs", href: "/clubs" },
    { name: "Academic Calendar", href: "/calendar" },
=======
    { name: "RIC", href: "#rdc" },
    { name: "RSU Library", href: "#library" },
    { name: "Canteen", href: "#canteen" },
    { name: "Announcements", href: "#announcements" },
    { name: "Clubs", href: "#clubs" },
    { name: "Academic Calendar", href: "#calendar" },
>>>>>>> origin/main
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-elegant group-hover:shadow-glow transition-all duration-300">
              <GraduationCap className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="hidden md:block">
              <div className="font-playfair text-xl font-bold text-primary">
                Rangsit University
              </div>
              <div className="text-xs text-muted-foreground font-medium">
                Excellence in Education
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-muted"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button size="sm" className="shadow-card hover:shadow-elegant">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-md transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border bg-background">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <Button variant="ghost" className="w-full">
                  Login
                </Button>
                <Button className="w-full shadow-card">Apply Now</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
