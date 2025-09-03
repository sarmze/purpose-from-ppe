
import { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface HeaderProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const Header = ({ activeTab, onTabChange }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only apply scroll-based color changing for overview tab
      if (activeTab === "overview") {
        const scrollPosition = window.scrollY;
        const heroHeight = window.innerHeight;
        setIsScrolled(scrollPosition > heroHeight * 0.8);
      } else {
        // For all other tabs, always use blue text (scrolled state)
        setIsScrolled(true);
      }
    };

    // Initial check when tab changes
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]); // Add activeTab to dependency array

  const textColorClass = isScrolled ? "text-primary" : "text-primary-foreground";
  const tabTextColorClass = isScrolled ? "text-primary" : "text-primary-foreground";
  const tabActiveColorClass = isScrolled 
    ? "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground" 
    : "data-[state=active]:bg-primary-foreground data-[state=active]:text-primary";
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/lovable-uploads/7104d558-8d12-4a6a-a1f6-20e7316d2530.png" 
              alt="Kuwait Oil Company Logo" 
              className="h-14 w-auto"
            />
            <div>
              <h1 className={`text-xl font-bold transition-colors duration-300 ${textColorClass}`}>
                KOC PPE Recycling Initiative
              </h1>
              <p className={`text-sm transition-colors duration-300 ${isScrolled ? "text-primary/80" : "text-primary-foreground/80"}`}>
                From Protection to Purpose
              </p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Tabs value={activeTab} onValueChange={onTabChange} className="w-auto">
              <TabsList className={`transition-colors duration-300 ${isScrolled ? "bg-primary/10 border border-primary/20" : "bg-primary-foreground/10 border border-primary-foreground/20"}`}>
                <TabsTrigger 
                  value="overview" 
                  className={`transition-colors duration-300 ${tabTextColorClass} ${tabActiveColorClass}`}
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="how-it-works" 
                  className={`transition-colors duration-300 ${tabTextColorClass} ${tabActiveColorClass}`}
                >
                  How It Works
                </TabsTrigger>
                <TabsTrigger 
                  value="collection" 
                  className={`transition-colors duration-300 ${tabTextColorClass} ${tabActiveColorClass}`}
                >
                  Collection
                </TabsTrigger>
                <TabsTrigger 
                  value="impact" 
                  className={`transition-colors duration-300 ${tabTextColorClass} ${tabActiveColorClass}`}
                >
                  Impact
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;