import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { StudHubLogo } from "./StudHubLogo";
import { 
  Home, 
  BookOpen, 
  Trophy, 
  User,
  Menu,
  X,
  Flame // Importing Flame for the streak icon
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuth(); // Removed signOut from here

  // Don't show navigation on auth page or index page for non-authenticated users
  if (location.pathname === '/auth' || (location.pathname === '/' && !isAuthenticated)) {
    return null;
  }

  // Modified Menu: Removed Profile (moving to right) and Sign Out (moving to Profile page)
  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/personal-dashboard", label: "My Dashboard", icon: Trophy },
    { path: "/courses", label: "Explore Courses", icon: BookOpen },
  ];

  // Mock streak data - in a real app, this would come from your user context or database
  const currentStreak = 12;

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <StudHubLogo size="md" />
          </Link>

          {/* Desktop Navigation (Center) */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? "text-primary bg-accent"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions (Right Side: Streak + Profile) */}
          <div className="hidden md:flex items-center space-x-6">
            
            {/* Streak Indicator */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20" title="Current Streak">
              <Flame size={18} className="text-orange-500 fill-orange-500 animate-pulse" />
              <span className="text-sm font-bold text-orange-600 dark:text-orange-400">{currentStreak} Days</span>
            </div>

            {/* Profile Button */}
            <Link to="/profile">
              <Button 
                variant={isActive("/profile") ? "default" : "outline"} 
                size="icon" 
                className="rounded-full"
              >
                <User size={20} />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             {/* Show Streak on Mobile Header too */}
             <div className="flex items-center gap-1">
              <Flame size={16} className="text-orange-500 fill-orange-500" />
              <span className="text-sm font-bold text-orange-500">{currentStreak}</span>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? "text-primary bg-accent"
                        : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon size={20} />
                    {item.label}
                  </Link>
                );
              })}
              
              {/* Profile Link in Mobile Menu */}
              <Link
                to="/profile"
                className={`flex items-center gap-3 px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive("/profile")
                    ? "text-primary bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={20} />
                Profile
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};