import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToHowItWorks = () => {
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
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
          <div className="mb-8">
            <img 
              src="/lovable-uploads/7104d558-8d12-4a6a-a1f6-20e7316d2530.png" 
              alt="Kuwait Oil Company Logo" 
              className="h-48 md:h-60 w-auto mx-auto"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            KOC PPE Recycling
            <span className="block text-sustainability-light">Initiative</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            From Protection to Purpose – Giving PPE a Second Life
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto opacity-90">
            Join our sustainability mission to transform expired safety equipment into meaningful environmental impact
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            className="animate-float text-xl px-12 py-6 h-auto cursor-pointer"
            onClick={scrollToHowItWorks}
          >
            Donate Now
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;