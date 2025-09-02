import { Leaf, Users, Shield, TrendingUp, Target, Lightbulb } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const ESGSection = () => {
  const esgPillars = [
    {
      title: "Environmental",
      icon: Leaf,
      color: "text-green-600",
      bgColor: "bg-green-50",
      items: [
        "Green Projects & renewable energy initiatives",
        "Net Zero Emissions Projects by 2030",
        "Climate Change & Water Conservation",
        "Waste Pollution reduction programs",
        "Natural Resources Protection",
        "Renewable Energy Clean Tech"
      ]
    },
    {
      title: "Social",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      items: [
        "Inclusive Economic Development",
        "Local Suppliers & community engagement",
        "Local Laws & Policies compliance",
        "Data protection & privacy",
        "Employee development programs",
        "Fair Work conditions"
      ]
    },
    {
      title: "Governance",
      icon: Shield,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      items: [
        "Transparency & corruption reduction",
        "Partnerships with international organizations",
        "Community Engagement programs",
        "Business Ethics & Anti-Corruption",
        "Organizational Performance optimization",
        "Regulatory compliance"
      ]
    }
  ];

  const focusAreas = [
    {
      title: "Driving Organizational Performance",
      description: "Maintaining competitive advantage and attracting external finance",
      icon: TrendingUp,
      benefits: [
        "New revenue opportunities",
        "Enhanced reputation",
        "Improved operational cost efficiencies",
        "Long term flexibility against energy transition"
      ]
    },
    {
      title: "Supporting External Ambitions",
      description: "Aligning with Government of Kuwait goals and meeting regulatory requirements",
      icon: Target,
      benefits: [
        "Supporting National ESG commitments",
        "Meeting external regulatory requirements",
        "Bringing positive social outcomes",
        "Contributing to sustainable development"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-background/80 to-sustainability-light/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Environmental, Social & Governance
            <span className="block text-primary mt-2">ESG at KOC</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            KOC recognizes the importance of achieving strategic goals while protecting the environment 
            and natural resources, as well as providing growth opportunities for individuals. Our ESG 
            strategy aligns with the UN's 17 Sustainable Development Goals.
          </p>
        </div>

        {/* ESG Definition */}
        <div className="mb-16">
          <Card className="bg-gradient-to-r from-primary/5 to-sustainability/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Lightbulb className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    What is Environmental, Social & Governance (ESG)?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    ESG are criteria used to measure a company's overall Sustainability Performance. 
                    The concept evolved from the 'PPP - People, Planet & Profits' framework, emphasizing 
                    that companies should focus not only on profit and financial gain but also on People 
                    & Planet sustainability factors.
                  </p>
                  <div className="bg-sustainability/10 p-4 rounded-lg">
                    <p className="font-medium text-sustainability-dark">
                      🎯 Aligned with United Nations 17 Sustainable Development Goals (SDGs) & 169 Targets
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* ESG Pillars */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            The Three Pillars of ESG
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {esgPillars.map((pillar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className={`${pillar.bgColor} p-4 rounded-full w-fit mx-auto mb-6`}>
                    <pillar.icon className={`h-8 w-8 ${pillar.color}`} />
                  </div>
                  <h4 className="text-2xl font-semibold text-center text-foreground mb-6">
                    {pillar.title}
                  </h4>
                  <ul className="space-y-3">
                    {pillar.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-2 h-2 rounded-full ${pillar.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`} />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why ESG is Important to KOC */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Why ESG is Important to KOC
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <Card key={index} className="bg-gradient-to-br from-background to-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <div className="bg-primary/10 p-4 rounded-full w-fit mb-6">
                    <area.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    {area.title}
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    {area.description}
                  </p>
                  <ul className="space-y-3">
                    {area.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-sustainability mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* ESG Strategy Commitment */}
        <div className="bg-gradient-to-r from-sustainability/10 to-primary/10 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Our ESG Strategy & Commitment
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-left">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">KPC's Energy Transition Strategy (2050):</strong> 
                  Approved by the Board of Directors, this comprehensive approach to achieve long-term 
                  sustainability goals while reducing environmental impact.
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Circular Economy Initiatives:</strong> 
                  Supporting the journey towards sustainability through waste reduction, recycling, 
                  and resource optimization programs.
                </p>
              </div>
              <div className="bg-white/50 p-6 rounded-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-sustainability mb-2">17</div>
                  <div className="text-sustainability-dark font-medium">UN SDGs</div>
                  <div className="text-sm text-muted-foreground mt-2">
                    Sustainable Development Goals Alignment
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

export default ESGSection;