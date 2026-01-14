import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Recycle, 
  Globe, 
  Factory,
  TrendingDown
} from "lucide-react";

const SustainabilityFacts = () => {
  const facts = [
    {
      icon: Factory,
      stat: "1 kg",
      description: "Each kilogram of unrecycled plastic represents ~1 kg of CO₂ emissions",
      color: "bg-red-500",
      category: "Plastic Waste"
    },
    {
      icon: Recycle,
      stat: "500+ years",
      description: "Time for plastic safety helmets to decompose naturally in landfills",
      color: "bg-orange-500",
      category: "Environmental Impact"
    },
    {
      icon: Globe,
      stat: "92 million tons",
      description: "Global textile waste generated annually, much from industrial uniforms",
      color: "bg-blue-500",
      category: "Textile Waste"
    },
    {
      icon: TrendingDown,
      stat: "95%",
      description: "Target reduction in landfill waste through our PPE recycling initiative",
      color: "bg-green-500",
      category: "KOC Goal"
    },
    {
      icon: Leaf,
      stat: "75%",
      description: "Less energy required to recycle plastic than produce new materials",
      color: "bg-emerald-500",
      category: "Energy Savings"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            Sustainability Facts
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why 
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> Every PPE Matters</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            At KOC, we're committed to environmental stewardship. Here's why our PPE recycling initiative makes a real difference.
          </p>
        </div>

        {/* Facts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {facts.map((fact, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-transparent hover:border-l-primary animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${fact.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <fact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2 text-xs">
                      {fact.category}
                    </Badge>
                    <div className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {fact.stat}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {fact.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Leaf className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">KOC's Commitment to Sustainability</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Through our comprehensive PPE recycling program, we aim to create a circular economy 
              that will benefit our environment, communities, and future generations.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">Zero</div>
                <div className="text-sm text-muted-foreground">Landfill Goal</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Recyclable Materials</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Sustainable Future</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityFacts;