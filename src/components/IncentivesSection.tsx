import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileCheck, Users, Trophy } from "lucide-react";

interface IncentivesSectionProps {
  onTabChange?: (tab: string) => void;
}

const IncentivesSection = ({ onTabChange }: IncentivesSectionProps) => {
  const handleContributeClick = () => {
    if (onTabChange) {
      onTabChange("donate-now");
    }
  };
  const incentives = [
    {
      title: "CEO Recognition",
      description: "10 outstanding employees will be personally honored by the CEO at our grand campaign event",
      icon: Trophy,
      highlight: "Executive Level",
      gradient: "bg-gradient-corporate",
      benefits: ["Personal recognition by CEO", "Special ceremony appearance", "Company-wide announcement"]
    },
    {
      title: "Green Champion Certificates",
      description: "All participants receive beautiful digital certificates recognizing their sustainability contribution",
      icon: FileCheck,
      highlight: "For Everyone",
      gradient: "bg-gradient-sustainability",
      benefits: ["Digital certificate", "LinkedIn shareable", "Permanent recognition record"]
    },
    {
      title: "Department Shoutouts",
      description: "Leading departments get featured in company newsletters and internal communications",
      icon: Users,
      highlight: "Team Recognition",
      gradient: "bg-gradient-corporate",
      benefits: ["Newsletter features", "Team photos", "Leadership acknowledgment"]
    }
  ];


  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Recognition & Incentives
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your participation doesn't go unnoticed. Join the initiative and be recognized for your contribution to sustainability
            </p>
          </div>

          {/* Main Incentives */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {incentives.map((incentive, index) => (
              <Card 
                key={index} 
                className="shadow-corporate hover:shadow-elevated transition-smooth animate-fade-in group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 left-0 right-0 h-2 ${incentive.gradient}`}></div>
                
                <CardHeader className="text-center pt-8">
                  <div className={`w-16 h-16 ${incentive.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth`}>
                    <incentive.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="mb-3">
                    {incentive.highlight}
                  </Badge>
                  <CardTitle className="text-xl text-foreground">
                    {incentive.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {incentive.description}
                  </p>
                  
                  {/* Benefits List */}
                  <div className="space-y-2">
                    {incentive.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>


          {/* Call to Action */}
          <div className="text-center mt-16 animate-slide-up">
            <div className="p-8 bg-gradient-corporate rounded-2xl shadow-elevated">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Be Recognized?
              </h3>
              <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
                Join the KOC PPE Recycling Campaign today and become part of our sustainability mission. 
                Your contribution matters and will be celebrated.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={handleContributeClick}
                  className="inline-block bg-white text-primary font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-smooth cursor-pointer"
                >
                  Start Contributing Now
                </button>
                <span className="text-white/80 self-center">Limited time campaign - Act now!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncentivesSection;