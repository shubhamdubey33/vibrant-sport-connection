
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onSearch: (query: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled ? "py-3 backdrop-blur-lg bg-white/80 shadow-sm" : "py-6 bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div 
            className={cn(
              "w-10 h-10 grid place-items-center rounded-lg font-bold text-primary-foreground bg-gradient-to-br from-primary to-primary/80",
              "transition-all duration-300",
              scrolled ? "scale-90" : "scale-100"
            )}
          >
            T
          </div>
          <div className={cn(
            "font-medium transition-all duration-300",
            scrolled ? "text-base" : "text-xl"
          )}>
            Techinterio <span className="text-primary">Sports Day</span>
          </div>
        </div>

        <div className="relative max-w-md w-full hidden md:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
          <input
            type="text"
            placeholder="Search participants, teams or categories..."
            className="w-full pl-10 py-2 pr-4 rounded-full bg-muted/50 border-0 focus:ring-2 ring-primary/20 focus:bg-white transition-all duration-300"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#teams" className="text-sm font-medium hover:text-primary transition-colors">Teams</a>
          <a href="#cricket" className="text-sm font-medium hover:text-primary transition-colors">Cricket</a>
          <a href="#tugofwar" className="text-sm font-medium hover:text-primary transition-colors">Tug of War</a>
          <a href="#volunteers" className="text-sm font-medium hover:text-primary transition-colors">Volunteers</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
