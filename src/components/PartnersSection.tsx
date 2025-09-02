import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Handshake, Globe, Recycle, Award, Building2, Users } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    {
      name: "Wedplast",
      type: "Recycling Technology",
      description: "Advanced plastic recycling services including cleaning, crushing, shredding, and molding of PPE materials into new products.",
      icon: Recycle,
      category: "technology",
      logoText: "Wedplast",
      logoColor: "bg-blue-600"
    },
    {
      name: "Beatouna",
      type: "Comprehensive Recycling",
      description: "Full-service recycling company specializing in plastic to raw material conversion, logistics coordination, PPE handling, and secure uniform destruction services.",
      icon: Building2,
      category: "technology",
      logoText: "Beatouna",
      logoColor: "bg-teal-600"
    },
    {
      name: "Tadwire",
      type: "Waste Stream Management",
      description: "Recycling-focused company with expertise in plastics and expanding capabilities for diverse waste streams from industrial operations.",
      icon: Recycle,
      category: "technology",
      logoText: "TadwiRe",
      logoColor: "bg-green-600"
    },
    {
      name: "Omniya",
      type: "Collection & Logistics",
      description: "Primary logistics and plastic collection services, partnering with specialized recyclers to ensure efficient material flow and processing.",
      icon: Users,
      category: "logistics",
      logoText: "omniya",
      logoColor: "bg-teal-500"
    },
    {
      name: "Al Ansari & Bhasin Trading Co.",
      type: "Uniform Manufacturing",
      description: "Established uniform manufacturer and supplier providing identity stripping services and expertise in PPE lifecycle management.",
      icon: Award,
      category: "industry",
      logoText: "Al Ansari & Bhasin",
      logoColor: "bg-slate-600"
    },
    {
      name: "Fares Al-Dabbous & Sons Trading Co.",
      type: "Safety Equipment Supplier",
      description: "Major safety and industrial products supplier in Kuwait, specializing in uniforms, PPE, and technical gear with extensive market knowledge.",
      icon: Building2,
      category: "industry",
      logoText: "AIT ALDABBOUS",
      logoColor: "bg-cyan-600"
    },
    {
      name: "Kiswa (KISWA KWT)",
      type: "Social Enterprise",
      description: "Innovative social enterprise focused on clothing and textile collection and reuse through digital app and portal-based solutions.",
      icon: Globe,
      category: "social",
      logoText: "KISWA",
      logoColor: "bg-blue-500"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "technology": return "bg-blue-500";
      case "logistics": return "bg-green-500";
      case "industry": return "bg-purple-500";
      case "social": return "bg-orange-500";
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
                  <div className={`w-20 h-20 ${partner.logoColor} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-smooth shadow-lg`}>
                    <div className="text-center">
                      <div className="text-white font-bold text-xs leading-tight">
                        {partner.logoText}
                      </div>
                    </div>
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
              <div className="text-3xl font-bold text-foreground mb-2">7</div>
              <div className="text-muted-foreground">Strategic Partners</div>
            </div>
            <div className="text-center p-6 bg-accent rounded-xl">
              <div className="text-3xl font-bold text-foreground mb-2">100%</div>
              <div className="text-muted-foreground">Local Processing</div>
            </div>
            <div className="text-center p-6 bg-accent rounded-xl">
              <div className="text-3xl font-bold text-foreground mb-2">4</div>
              <div className="text-muted-foreground">Recycling Facilities</div>
            </div>
            <div className="text-center p-6 bg-accent rounded-xl">
              <div className="text-3xl font-bold text-foreground mb-2">50+</div>
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