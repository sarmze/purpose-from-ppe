import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HardHat, Shirt, Leaf, TrendingUp, Users, ShoppingBag, MessageSquare } from "lucide-react";

/**
 * Environmental Impact Conversion Factors (Research-Backed)
 * 
 * HELMET CALCULATIONS:
 * - Average safety helmet weight: 0.46 kg (460g with suspension)
 *   Source: Industry standard HDPE/ABS safety helmets
 * - CO₂ savings from recycling HDPE: 0.231 kg CO₂e per kg recycled
 *   Source: EPA Emission Factors (2022) - HDPE recycling vs landfill
 * - Additional CO₂ from avoided virgin production: 1.8 kg CO₂e per kg
 *   Source: Plastics Europe eco-profiles
 * - Total CO₂ factor: ~2.03 kg CO₂e per kg (recycling + avoided virgin)
 * 
 * COVERALL CALCULATIONS:
 * - Average coverall weight: 0.85 kg (7 oz FR coverall = ~850g)
 *   Source: Industry standard oilfield FR coveralls (7 oz fabric weight)
 * - CO₂ savings from textile reuse/recycling: 70% reduction vs virgin
 *   Source: Sustainable Apparel Coalition's Higg MSI
 * - Virgin polyester production: 5.5 kg CO₂e per kg
 *   Source: Higg Materials Sustainability Index
 * - Savings factor: 5.5 × 0.70 = 3.85 kg CO₂e per kg repurposed
 */

// Conversion constants based on industry research
const HELMET_WEIGHT_KG = 0.46; // Average safety helmet with suspension (460g)
const COVERALL_WEIGHT_KG = 0.85; // Average 7oz FR coverall (~850g)
const HELMET_CO2_FACTOR = 2.03; // kg CO₂e saved per kg HDPE recycled (recycling + avoided virgin)
const COVERALL_CO2_FACTOR = 3.85; // kg CO₂e saved per kg textile repurposed (70% of 5.5 virgin)

const ImpactDashboard = () => {
  // Raw collection numbers
  const helmetsCollected = 1247;
  const coverallsCollected = 892;
  const storiesSharedCount = 6;

  // Calculate derived environmental metrics
  const plasticDiverted = helmetsCollected * HELMET_WEIGHT_KG; // kg of plastic
  const textileRepurposed = coverallsCollected * COVERALL_WEIGHT_KG; // kg of textile
  const helmetCO2Saved = plasticDiverted * HELMET_CO2_FACTOR; // kg CO₂e from helmets
  const coverallCO2Saved = textileRepurposed * COVERALL_CO2_FACTOR; // kg CO₂e from coveralls
  const totalCO2Saved = (helmetCO2Saved + coverallCO2Saved) / 1000; // Convert to tons

  const [counters, setCounters] = useState({
    helmets: 0,
    coveralls: 0,
    carbonSaved: 0,
    plantsGrown: 0,
    bagsMade: 0,
    storiesShared: 0,
    plasticKg: 0,
    textileKg: 0
  });

  const finalValues = {
    helmets: helmetsCollected,
    coveralls: coverallsCollected,
    carbonSaved: totalCO2Saved,
    plantsGrown: 456,
    bagsMade: 312,
    storiesShared: storiesSharedCount,
    plasticKg: plasticDiverted,
    textileKg: textileRepurposed
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
        plantsGrown: Math.min(prev.plantsGrown + Math.ceil(finalValues.plantsGrown / steps), finalValues.plantsGrown),
        bagsMade: Math.min(prev.bagsMade + Math.ceil(finalValues.bagsMade / steps), finalValues.bagsMade),
        storiesShared: Math.min(prev.storiesShared + Math.ceil(finalValues.storiesShared / steps), finalValues.storiesShared),
        plasticKg: Math.min(prev.plasticKg + (finalValues.plasticKg / steps), finalValues.plasticKg),
        textileKg: Math.min(prev.textileKg + (finalValues.textileKg / steps), finalValues.textileKg)
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
      title: "Employees Participated",
      value: Math.round(counters.helmets * 0.6).toLocaleString(),
      icon: Users,
      gradient: "bg-gradient-corporate",
      description: "KOC team members contributing to sustainability"
    },
    {
      title: "Estimated Plant Pots",
      value: counters.plantsGrown.toLocaleString(),
      icon: TrendingUp,
      gradient: "bg-gradient-sustainability",
      description: "Potential plant pots from collected helmets"
    },
    {
      title: "Estimated Bags Made",
      value: counters.bagsMade.toLocaleString(),
      icon: ShoppingBag,
      gradient: "bg-gradient-corporate",
      description: "Tote, duffle, pouch, and laptop bags from coveralls"
    },
    {
      title: "Stories Shared",
      value: counters.storiesShared.toLocaleString(),
      icon: MessageSquare,
      gradient: "bg-gradient-sustainability",
      description: "Employee experiences inspiring the community"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                  <p className="text-3xl font-bold text-blue-600 mb-1">{Math.round(counters.plasticKg)} kg</p>
                  <p className="text-sm text-muted-foreground">Plastic diverted from landfill</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">({HELMET_WEIGHT_KG} kg/helmet × {helmetsCollected} helmets)</p>
                </div>
                
                <div className="text-center p-6 bg-emerald-50 rounded-xl">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shirt className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-emerald-600 mb-1">{Math.round(counters.textileKg)} kg</p>
                  <p className="text-sm text-muted-foreground">Textile waste repurposed</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">({COVERALL_WEIGHT_KG} kg/coverall × {coverallsCollected} coveralls)</p>
                </div>
                
                <div className="text-center p-6 bg-amber-50 rounded-xl">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-amber-600 mb-1">{counters.carbonSaved.toFixed(2)} tons</p>
                  <p className="text-sm text-muted-foreground">CO₂ emissions prevented</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">(HDPE: {HELMET_CO2_FACTOR} + Textile: {COVERALL_CO2_FACTOR} kg CO₂e/kg)</p>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-muted-foreground text-center mb-3">
                  Impact metrics calculated using industry-standard conversion factors
                </p>
                <div className="text-xs text-muted-foreground/70 space-y-1 max-w-2xl mx-auto">
                  <p><strong>Sources:</strong> EPA Emission Factors (2022), Sustainable Apparel Coalition Higg MSI, Plastics Europe eco-profiles</p>
                  <p><strong>Formulas:</strong> Plastic = helmets × 0.46kg | Textile = coveralls × 0.85kg | CO₂ = (plastic × 2.03 + textile × 3.85) kg</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;