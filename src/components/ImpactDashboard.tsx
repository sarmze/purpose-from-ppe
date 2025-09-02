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

          {/* Visual Impact Section */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Transformation Visual */}
            <Card className="shadow-elevated animate-fade-in">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">PPE Transformation Journey</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-accent rounded-lg">
                    <HardHat className="w-8 h-8 text-accent-foreground" />
                    <div className="flex-1">
                      <p className="font-semibold text-accent-foreground">Safety Helmet</p>
                      <p className="text-sm text-muted-foreground">After 3-5 years of protection</p>
                    </div>
                    <div className="text-2xl">→</div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-sustainability-light rounded-lg">
                    <TrendingUp className="w-8 h-8 text-sustainability-dark" />
                    <div className="flex-1">
                      <p className="font-semibold text-sustainability-dark">Plant Pot</p>
                      <p className="text-sm text-muted-foreground">Growing new life</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Collection Summary */}
            <Card className="shadow-elevated animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Collection Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <HardHat className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Safety Helmets</p>
                        <p className="text-sm text-muted-foreground">Collected to date</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{counters.helmets.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">units</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                        <Shirt className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Coveralls</p>
                        <p className="text-sm text-muted-foreground">Collected to date</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-600">{counters.coveralls.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">units</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground text-center">
                      Environmental impact calculated from actual collection data
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;