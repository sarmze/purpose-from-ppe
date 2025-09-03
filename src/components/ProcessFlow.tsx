import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { 
  HardHat, 
  Truck, 
  Factory, 
  Recycle, 
  Flower,
  ArrowRight,
  ArrowDown,
  Shirt,
  UserMinus,
  Heart,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import recycledPotImage from "@/assets/recycled-helmet-pot-final.jpg";

const ProcessFlow = () => {
  const [selectedProcess, setSelectedProcess] = useState<'helmets' | 'coveralls' | null>(null);

  const toggleProcess = (type: 'helmets' | 'coveralls') => {
    setSelectedProcess(selectedProcess === type ? null : type);
  };

  const helmetProcess = [
    {
      id: 1,
      title: "Collection",
      description: "Safety helmets are collected from donation points across KOC facilities",
      icon: HardHat,
      color: "bg-blue-500",
      details: ["PPE collection bins", "Quality sorting", "Initial inspection"]
    },
    {
      id: 2,
      title: "Transportation",
      description: "Collected helmets are transported to certified plastic recycling facilities",
      icon: Truck,
      color: "bg-green-500",
      details: ["Secure logistics", "Partner facilities", "Tracking system"]
    },
    {
      id: 3,
      title: "Processing",
      description: "Helmets undergo cleaning, crushing, shredding, and molding processes",
      icon: Factory,
      color: "bg-orange-500",
      details: ["Material cleaning", "Mechanical breakdown", "Quality control"]
    },
    {
      id: 4,
      title: "Raw Materials",
      description: "Processed plastic is converted into high-quality raw materials ready for manufacturing",
      icon: Recycle,
      color: "bg-purple-500",
      details: ["Plastic pellets", "Color sorting", "Material testing"]
    },
    {
      id: 5,
      title: "New Products",
      description: "Raw materials are transformed into useful office items like plant pots and furniture",
      icon: Flower,
      color: "bg-emerald-500",
      details: ["Office plant pots", "Desk accessories", "Furniture components"]
    }
  ];

  const coverallProcess = [
    {
      id: 1,
      title: "Collection",
      description: "Coveralls are collected from donation points across KOC facilities",
      icon: Shirt,
      color: "bg-blue-500",
      details: ["PPE collection bins", "Quality sorting", "Initial inspection"]
    },
    {
      id: 2,
      title: "Transportation",
      description: "Collected coveralls are transported to uniform manufacturers",
      icon: Truck,
      color: "bg-green-500",
      details: ["Secure logistics", "Partner manufacturers", "Tracking system"]
    },
    {
      id: 3,
      title: "De-identification",
      description: "Coveralls undergo identity stripping to remove company branding and logos",
      icon: UserMinus,
      color: "bg-orange-500",
      details: ["Logo removal", "Brand stripping", "Quality inspection"]
    },
    {
      id: 4,
      title: "Preparation",
      description: "De-identified coveralls are cleaned, sorted, and prepared for donation",
      icon: Factory,
      color: "bg-purple-500",
      details: ["Professional cleaning", "Size sorting", "Quality control"]
    },
    {
      id: 5,
      title: "Charitable Donation",
      description: "Prepared coveralls are distributed to charitable organizations for community benefit",
      icon: Heart,
      color: "bg-emerald-500",
      details: ["Community outreach", "Charitable distribution", "Impact tracking"]
    }
  ];

  const ProcessFlowComponent = ({ processSteps, title, description }: { 
    processSteps: any[], 
    title: string, 
    description: string 
  }) => (
    <div>
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      {/* Desktop Flow - Horizontal */}
      <div className="hidden lg:block">
        <div className="flex items-center justify-between mb-8">
          {processSteps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center group">
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-center max-w-40">
                  <h4 className="font-semibold text-sm mb-1">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < processSteps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-primary mx-4 animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Flow - Vertical */}
      <div className="lg:hidden space-y-4">
        {processSteps.map((step, index) => (
          <div key={step.id}>
            <Card className="p-4 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-start space-x-3">
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {step.details.map((detail, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {detail}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            {index < processSteps.length - 1 && (
              <div className="flex justify-center my-2">
                <ArrowDown className="w-5 h-5 text-primary animate-bounce" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="process-flow" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            Transformation Process
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            From Safety Gear to
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> Sustainable Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Click on each PPE type to discover their unique transformation journeys.
          </p>
        </div>

        {/* Clickable PPE Cards */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {/* Safety Helmets Card */}
            <Card 
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
                selectedProcess === 'helmets' 
                  ? 'border-blue-500 bg-blue-50/50 shadow-lg' 
                  : 'border-blue-200 bg-blue-50/30 hover:border-blue-300'
              }`}
              onClick={() => toggleProcess('helmets')}
            >
              <CardContent className="p-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                      <HardHat className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold mb-1">Safety Helmets</h3>
                      <p className="text-muted-foreground text-sm">
                        Recycled into office items like plant pots
                      </p>
                    </div>
                  </div>
                  {selectedProcess === 'helmets' ? (
                    <ChevronUp className="w-5 h-5 text-blue-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-500" />
                  )}
                </div>
              </CardContent>
            </Card>
            
            {/* Coveralls Card */}
            <Card 
              className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-lg border-2 ${
                selectedProcess === 'coveralls' 
                  ? 'border-emerald-500 bg-emerald-50/50 shadow-lg' 
                  : 'border-emerald-200 bg-emerald-50/30 hover:border-emerald-300'
              }`}
              onClick={() => toggleProcess('coveralls')}
            >
              <CardContent className="p-0">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center">
                      <Shirt className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-bold mb-1">Coveralls</h3>
                      <p className="text-muted-foreground text-sm">
                        De-identified and donated to charities
                      </p>
                    </div>
                  </div>
                  {selectedProcess === 'coveralls' ? (
                    <ChevronUp className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-emerald-500" />
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Process Flow Dropdown */}
          {selectedProcess && (
            <div className="bg-card rounded-2xl p-8 shadow-xl border mb-8 animate-in slide-in-from-top-5 duration-300">
              {selectedProcess === 'helmets' ? (
                <ProcessFlowComponent 
                  processSteps={helmetProcess}
                  title="Safety Helmet Recycling Journey"
                  description="From protective gear to sustainable office products"
                />
              ) : (
                <ProcessFlowComponent 
                  processSteps={coverallProcess}
                  title="Coverall Donation Journey"
                  description="From workplace protection to community support"
                />
              )}
            </div>
          )}

          {/* Showcase Example - Only show when helmets is selected */}
          {selectedProcess === 'helmets' && (
            <div className="bg-card rounded-2xl p-8 shadow-xl border animate-in slide-in-from-bottom-5 duration-300">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4">Our Vision</Badge>
                  <h3 className="text-2xl font-bold mb-4">
                    From Safety Helmet to Office Plant Pot
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Through our innovative recycling initiative, we aim to transform expired safety helmets 
                    into beautiful plant pots for office spaces. Each pot will carry the message 
                    "I USED TO BE A SAFETY HELMET," telling the story of sustainable innovation 
                    and giving new life to protective equipment.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">100% recycled safety helmet material</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Certified food-safe plastic for plants</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Reduces landfill waste by 95%</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-xl shadow-2xl">
                    <img 
                      src={recycledPotImage} 
                      alt="Vision: Safety helmet to be transformed into plant pot"
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Recycled PPE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;