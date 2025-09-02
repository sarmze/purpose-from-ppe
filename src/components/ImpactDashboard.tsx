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
      title: "CO₂ Emissions Saved",
      value: `${counters.carbonSaved.toFixed(1)} tons`,
      icon: Leaf,
      gradient: "bg-gradient-corporate",
      description: "Equivalent to planting 80 trees"
    },
    {
      title: "Plants Growing",
      value: counters.plantsGrown.toLocaleString(),
      icon: TrendingUp,
      gradient: "bg-gradient-sustainability",
      description: "In recycled helmet planters across KOC"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Live Impact Dashboard
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Track our collective environmental impact in real-time
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

            {/* Progress Meters */}
            <Card className="shadow-elevated animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Collection Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Helmets</span>
                      <span className="text-sm text-muted-foreground">{Math.round((counters.helmets / 1500) * 100)}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-3">
                      <div 
                        className="bg-gradient-corporate h-3 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min((counters.helmets / 1500) * 100, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">Coveralls</span>
                      <span className="text-sm text-muted-foreground">{Math.round((counters.coveralls / 1000) * 100)}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-3">
                      <div 
                        className="bg-gradient-sustainability h-3 rounded-full transition-all duration-500"
                        style={{ width: `${Math.min((counters.coveralls / 1000) * 100, 100)}%` }}
                      ></div>
                    </div>
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