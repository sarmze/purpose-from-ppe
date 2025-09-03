
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface HeaderProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const Header = ({ activeTab, onTabChange }: HeaderProps) => {
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
              <h1 className="text-xl font-bold text-primary-foreground">
                KOC PPE Recycling Initiative
              </h1>
              <p className="text-sm text-primary-foreground/80">
                From Protection to Purpose
              </p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <Tabs value={activeTab} onValueChange={onTabChange} className="w-auto">
              <TabsList className="bg-primary-foreground/10 border border-primary-foreground/20">
                <TabsTrigger 
                  value="overview" 
                  className="text-primary-foreground data-[state=active]:bg-primary-foreground data-[state=active]:text-primary"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="how-it-works" 
                  className="text-primary-foreground data-[state=active]:bg-primary-foreground data-[state=active]:text-primary"
                >
                  How It Works
                </TabsTrigger>
                <TabsTrigger 
                  value="collection" 
                  className="text-primary-foreground data-[state=active]:bg-primary-foreground data-[state=active]:text-primary"
                >
                  Collection
                </TabsTrigger>
                <TabsTrigger 
                  value="impact" 
                  className="text-primary-foreground data-[state=active]:bg-primary-foreground data-[state=active]:text-primary"
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