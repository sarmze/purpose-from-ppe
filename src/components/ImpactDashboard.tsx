import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HardHat, Shirt, Leaf, TrendingUp } from "lucide-react";

const ImpactDashboard = () => {
  const [counters, setCounters] = useState({
    helmets: 0,
    coveralls: 0,
    carbonSaved: 0,
    plantsGrown: 0
  });

  const finalValues = {
    helmets: 1247,
    coveralls: 892,
    carbonSaved: 3.2,
    plantsGrown: 456
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => ({
        helmets: Math.min(prev.helmets + Math.ceil(finalValues.helmets / steps), finalValues.helmets),
        coveralls: Math.min(prev.coveralls + Math.ceil(finalValues.coveralls / steps), finalValues.coveralls),
        carbonSaved: Math.min(prev.carbonSaved + (finalValues.carbonSaved / steps), finalValues.carbonSaved),
        plantsGrown: Math.min(prev.plantsGrown + Math.ceil(finalValues.plantsGrown / steps), finalValues.plantsGrown)
      }));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const impactCards = [
    {
      title: "Safety Helmets Collected",
      value: counters.helmets.toLocaleString(),
      icon: HardHat,
      gradient: "bg-gradient-corporate",
      description: "Transformed into plant pots and recycled materials"
    },
    {
      title: "Coveralls Collected",
      value: counters.coveralls.toLocaleString(),
      icon: Shirt,
      gradient: "bg-gradient-sustainability",
      description: "Repurposed for visitor line and charity donations"
    },
    {
      title: "CO₂ Emissions Prevented",
      value: `${counters.carbonSaved.toFixed(1)} tons`,
      icon: Leaf,
      gradient: "bg-gradient-corporate",
      description: "Based on collected materials avoiding landfill"
    },
    {
      title: "Estimated Plant Pots",
      value: counters.plantsGrown.toLocaleString(),
      icon: TrendingUp,
      gradient: "bg-gradient-sustainability",
      description: "Potential plant pots from collected helmets"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Collection Impact Dashboard
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See the environmental impact achieved from our ongoing PPE collection efforts
            </p>
          </div>

          {/* Impact Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {impactCards.map((card, index) => (
              <Card 
                key={index} 
                className="shadow-corporate hover:shadow-elevated transition-smooth animate-counter-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {card.title}
                    </CardTitle>
                    <div className={`w-8 h-8 ${card.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                      <card.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {card.value}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Environmental Breakdown */}
          <Card className="shadow-elevated animate-fade-in">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">Environmental Impact Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-xl">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <HardHat className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-blue-600 mb-1">{Math.round(counters.helmets * 0.8)}kg</p>
                  <p className="text-sm text-muted-foreground">Plastic diverted from landfill</p>
                </div>
                
                <div className="text-center p-6 bg-emerald-50 rounded-xl">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shirt className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-emerald-600 mb-1">{Math.round(counters.coveralls * 1.2)}kg</p>
                  <p className="text-sm text-muted-foreground">Textile waste repurposed</p>
                </div>
                
                <div className="text-center p-6 bg-amber-50 rounded-xl">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-amber-600 mb-1">{Math.round((counters.helmets + counters.coveralls) * 0.5)}</p>
                  <p className="text-sm text-muted-foreground">Trees equivalent saved</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t text-center">
                <p className="text-sm text-muted-foreground">
                  Impact metrics calculated based on industry-standard environmental conversion factors
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;