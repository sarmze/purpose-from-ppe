import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Handshake, Globe, Recycle, Award, Building2, Users } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    {
      name: "Kuwait Environmental Protection Agency",
      type: "Government Partner",
      description: "Providing regulatory guidance and environmental impact certification for the recycling initiative.",
      icon: Building2,
      category: "government"
    },
    {
      name: "Green Kuwait Foundation",
      type: "Environmental NGO",
      description: "Supporting community outreach and sustainability education programs throughout Kuwait.",
      icon: Globe,
      category: "ngo"
    },
    {
      name: "Advanced Polymer Recycling Co.",
      type: "Technology Partner",
      description: "State-of-the-art recycling facilities and innovative polymer processing technologies.",
      icon: Recycle,
      category: "technology"
    },
    {
      name: "Kuwait University - Environmental Sciences",
      type: "Research Partner",
      description: "Conducting research on PPE material lifecycle and sustainable disposal methods.",
      icon: Award,
      category: "academic"
    },
    {
      name: "Regional Safety Equipment Suppliers",
      type: "Industry Partner",
      description: "Collaborative network of safety equipment manufacturers supporting circular economy principles.",
      icon: Users,
      category: "industry"
    },
    {
      name: "Middle East Sustainability Consortium",
      type: "Regional Partner",
      description: "Regional coordination and best practices sharing for industrial sustainability initiatives.",
      icon: Handshake,
      category: "consortium"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "government": return "bg-blue-500";
      case "ngo": return "bg-green-500";
      case "technology": return "bg-purple-500";
      case "academic": return "bg-orange-500";
      case "industry": return "bg-red-500";
      case "consortium": return "bg-teal-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
              Collaborative Network
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Strategic Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Working together with leading organizations to maximize the environmental impact of our PPE recycling initiative
            </p>
          </div>

          {/* Partners Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partners.map((partner, index) => (
              <Card 
                key={index}
                className="shadow-corporate hover:shadow-elevated transition-smooth animate-fade-in group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category indicator */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${getCategoryColor(partner.category)}`}></div>
                
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${getCategoryColor(partner.category)} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth`}>
                    <partner.icon className="w-8 h-8 text-white" />
                  </div>
                  <Badge variant="outline" className="mb-3 text-xs">
                    {partner.type}
                  </Badge>
                  <CardTitle className="text-lg text-foreground leading-tight">
                    {partner.name}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {partner.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partnership Statistics */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center p-6 bg-accent rounded-xl">
              <div className="text-3xl font-bold text-foreground mb-2">6+</div>
              <div className="text-muted-foreground">Strategic Partners</div>
            </div>
            <div className="text-center p-6 bg-accent rounded-xl">
              <div className="text-3xl font-bold text-foreground mb-2">100%</div>
              <div className="text-muted-foreground">Local Processing</div>
            </div>
            <div className="text-center p-6 bg-accent rounded-xl">
              <div className="text-3xl font-bold text-foreground mb-2">3</div>
              <div className="text-muted-foreground">Research Studies</div>
            </div>
            <div className="text-center p-6 bg-accent rounded-xl">
              <div className="text-3xl font-bold text-foreground mb-2">15+</div>
              <div className="text-muted-foreground">Years Combined Experience</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center animate-slide-up">
            <Card className="shadow-elevated bg-gradient-corporate text-white p-8">
              <h3 className="text-2xl font-bold mb-4">
                Interested in Partnering with KOC?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Join our growing network of sustainability partners and help expand the impact of our environmental initiatives across the region.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:partnerships@koc.com.kw"
                  className="inline-block bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-smooth"
                >
                  Partnership Inquiries
                </a>
                <span className="text-white/80 self-center text-sm">partnerships@koc.com.kw</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;