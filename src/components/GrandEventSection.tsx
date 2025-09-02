import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Award, Camera, Leaf } from "lucide-react";
import helmetPotImage from "@/assets/helmet-pot.jpg";

const GrandEventSection = () => {
  const eventHighlights = [
    {
      icon: Award,
      title: "Leadership Recognition",
      description: "Honorary ceremony for campaign leaders, top contributing teams, and strategic partners"
    },
    {
      icon: Leaf,
      title: "Product Showcase",
      description: "Display of recycled products including the famous 'I USED TO BE A SAFETY HELMET' plant pots"
    },
    {
      icon: Users,
      title: "Employee Stories",
      description: "Live presentations of selected employee stories and experiences from the campaign"
    },
    {
      icon: Camera,
      title: "Media Coverage",
      description: "Professional documentation for KOC's sustainability communications and annual report"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
              Grand Finale Event
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Celebration of Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us for the culminating event celebrating KOC's collective sustainability achievement
            </p>
          </div>

          {/* Event Details */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Event Info */}
            <div className="animate-fade-in">
              <Card className="shadow-elevated h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Event Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Date & Time */}
                  <div className="flex items-center gap-4 p-4 bg-accent rounded-lg">
                    <Calendar className="w-6 h-6 text-accent-foreground" />
                    <div>
                      <p className="font-semibold text-accent-foreground">Date & Time</p>
                      <p className="text-muted-foreground">March 15, 2024 | 2:00 PM - 5:00 PM</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-4 p-4 bg-accent rounded-lg">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                    <div>
                      <p className="font-semibold text-accent-foreground">Location</p>
                      <p className="text-muted-foreground">KOC Main Auditorium, Ahmadi</p>
                    </div>
                  </div>

                  {/* Expected Attendees */}
                  <div className="flex items-center gap-4 p-4 bg-accent rounded-lg">
                    <Users className="w-6 h-6 text-accent-foreground" />
                    <div>
                      <p className="font-semibold text-accent-foreground">Expected Attendees</p>
                      <p className="text-muted-foreground">500+ KOC employees and partners</p>
                    </div>
                  </div>

                  {/* RSVP Button */}
                  <Button variant="hero" size="lg" className="w-full">
                    Reserve Your Spot
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Product Showcase Preview */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Card className="shadow-elevated h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Product Showcase Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative rounded-lg overflow-hidden mb-6">
                    <img 
                      src={helmetPotImage} 
                      alt="Safety helmet transformed into plant pot"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-bold text-lg mb-1">
                        "I USED TO BE A SAFETY HELMET"
                      </h4>
                      <p className="text-white/90 text-sm">
                        See the incredible transformation in person
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-sustainability-light rounded-lg">
                      <span className="font-medium text-sustainability-dark">Plant Pots Created</span>
                      <Badge variant="secondary">450+</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-sustainability-light rounded-lg">
                      <span className="font-medium text-sustainability-dark">Recycled Materials</span>
                      <Badge variant="secondary">2.3 tons</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-sustainability-light rounded-lg">
                      <span className="font-medium text-sustainability-dark">Community Impact</span>
                      <Badge variant="secondary">15 schools</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Event Highlights */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground animate-slide-up">
              Event Highlights
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eventHighlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="shadow-corporate hover:shadow-elevated transition-smooth animate-fade-in text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-4">
                      <highlight.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-3 text-foreground">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center animate-slide-up">
            <Card className="shadow-elevated bg-gradient-corporate text-white p-12">
              <h3 className="text-3xl font-bold mb-6">
                Be Part of This Historic Moment
              </h3>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                The Grand Event marks not just the end of our campaign, but the beginning of a new chapter 
                in KOC's sustainability journey. Your participation makes it possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Secure Your Invitation
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-primary"
                >
                  Learn More
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrandEventSection;