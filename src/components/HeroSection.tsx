import { Button } from "@/components/ui/button";
import heroImage from "@/assets/ppe-recycling-hero-clean.jpg";

interface HeroSectionProps {
  onTabChange?: (tab: string) => void;
}

const HeroSection = ({ onTabChange }: HeroSectionProps) => {
  const handleDonateClick = () => {
    if (onTabChange) {
      onTabChange("donate-now");
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-sustainability/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="animate-fade-in">
          {/* KOC Logo */}
          <div className="mb-6 sm:mb-8">
            <img 
              src="/lovable-uploads/7104d558-8d12-4a6a-a1f6-20e7316d2530.png" 
              alt="Kuwait Oil Company Logo" 
              className="h-32 sm:h-48 md:h-60 w-auto mx-auto"
            />
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-2 sm:mb-4 leading-tight tracking-tight">
            KOC PPE Recycling
            <span className="block text-sustainability-light">Initiative</span>
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4 text-white/95">
            Give Your PPE a Second Life
          </p>
          <p className="text-xs sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto opacity-90 px-4">
            Join our sustainability mission to transform expired safety equipment into meaningful environmental impact
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            className="text-xl px-12 py-6 h-auto cursor-pointer"
            onClick={handleDonateClick}
          >
            Participate Now
          </Button>
        </div>
      </div>
      
    </section>
  );
};

export default HeroSection;