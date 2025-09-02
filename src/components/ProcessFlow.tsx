import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  HardHat, 
  Truck, 
  Factory, 
  Recycle, 
  Flower,
  ArrowRight,
  ArrowDown
} from "lucide-react";
import recycledPotImage from "@/assets/recycled-helmet-pot.jpg";

const ProcessFlow = () => {
  const processSteps = [
    {
      id: 1,
      title: "Collection",
      description: "Safety helmets and PPE are collected from donation points across KOC facilities",
      icon: HardHat,
      color: "bg-blue-500",
      details: ["PPE collection bins", "Quality sorting", "Initial inspection"]
    },
    {
      id: 2,
      title: "Transportation",
      description: "Collected materials are transported to certified recycling facilities",
      icon: Truck,
      color: "bg-green-500",
      details: ["Secure logistics", "Partner facilities", "Tracking system"]
    },
    {
      id: 3,
      title: "Processing",
      description: "PPE materials undergo cleaning, crushing, shredding, and molding processes",
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
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how your donated PPE undergoes a complete transformation journey, 
            turning yesterday's safety equipment into tomorrow's office essentials.
          </p>
        </div>

        {/* Process Flow */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Flow - Horizontal */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between mb-12">
              {processSteps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center group">
                    <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="text-center max-w-48">
                      <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="w-8 h-8 text-primary mx-6 animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Flow - Vertical */}
          <div className="lg:hidden space-y-6 mb-12">
            {processSteps.map((step, index) => (
              <div key={step.id}>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                        <p className="text-muted-foreground mb-3">{step.description}</p>
                        <div className="flex flex-wrap gap-2">
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
                  <div className="flex justify-center my-4">
                    <ArrowDown className="w-6 h-6 text-primary animate-bounce" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Showcase Example */}
          <div className="bg-card rounded-2xl p-8 shadow-xl border">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4">Success Story</Badge>
                <h3 className="text-2xl font-bold mb-4">
                  From Safety Helmet to Office Plant Pot
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  This yellow plant pot was once a safety helmet protecting a KOC worker. 
                  Through our recycling process, it has been transformed into a beautiful 
                  office accessory that brings life to workspaces while telling the story 
                  of sustainable innovation.
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
                    alt="Recycled safety helmet transformed into office plant pot"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Recycled PPE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;