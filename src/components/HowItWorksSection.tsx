import { Play, Package, MapPin, Smartphone, MessageSquare } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Play,
      title: "Learn & Engage",
      description: "Watch campaign videos, see posters, and read information on the KOC portal",
      bgColor: "bg-gradient-corporate"
    },
    {
      icon: Package,
      title: "Gather PPE",
      description: "Collect your used safety helmets and coveralls that need recycling",
      bgColor: "bg-gradient-sustainability"
    },
    {
      icon: MapPin,
      title: "Drop at Collection Points",
      description: "Use convenient collection bins located across all KOC areas",
      bgColor: "bg-gradient-corporate"
    },
    {
      icon: Smartphone,
      title: "Scan QR Code",
      description: "Scan the QR code on the collection bin to access the donation page",
      bgColor: "bg-gradient-sustainability"
    },
    {
      icon: MessageSquare,
      title: "Share Your Story",
      description: "Confirm donation and optionally share your KOC journey or PPE story",
      bgColor: "bg-gradient-corporate"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
              How It Works
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Follow these simple steps to participate in the KOC PPE Recycling Campaign
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="p-8 bg-accent rounded-2xl shadow-corporate">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-accent-foreground">
                Ready to Make an Impact?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6">
                Start your PPE recycling journey today and be part of KOC's sustainability mission
              </p>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row items-center gap-8 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center shadow-elevated`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-4 border-background">
                    <span className="text-sm font-bold text-accent-foreground">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block w-px h-16 bg-gradient-to-b from-primary to-sustainability opacity-30 ml-10"></div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;