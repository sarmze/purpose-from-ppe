import { Card, CardContent } from "@/components/ui/card";

const DCEOSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-sustainability/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Leadership Initiative
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              This initiative was founded upon the vision and request of our Deputy CEO for Gas & Environment
            </p>
          </div>

          {/* DCEO Card */}
          <Card className="shadow-corporate hover:shadow-elevated transition-smooth animate-fade-in overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* DCEO Photo and Info */}
                <div className="bg-gradient-corporate p-8 text-white flex flex-col justify-center">
                  <div className="text-center">
                    <img 
                      src="/lovable-uploads/961b8a46-5d76-4ab4-b5b2-9b2f63ffc9d4.png" 
                      alt="Ameena Rajab Saleh - Deputy CEO" 
                      className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-white/20 object-cover"
                    />
                    <h3 className="text-2xl font-bold mb-2">Ameena Rajab Saleh</h3>
                    <p className="text-white/90 text-lg">Deputy CEO (Gas & Environment)</p>
                  </div>
                </div>

                {/* DCEO Message */}
                <div className="p-8 bg-white">
                  <div className="mb-6">
                    <h4 className="text-2xl font-bold text-primary mb-4">DCEO Message</h4>
                    <blockquote className="text-foreground leading-relaxed text-lg italic border-l-4 border-primary pl-6">
                      "I'm very proud to be part of this directorate with many leading initiatives and projects adding a great value to oil and gas sector while maintaining a sustainable environment. Our integral staff and young talents are one of the strengths that I have been always believing in when it comes to elevating the achievements. Therefore, staying connected is crucial. The establishment of the Engage to Success (E2S) system is the venue where all employees can express their suggestions, initiatives and concerns in all levels freely and directly with the DCEO. I encourage you all to take advantage of it and use it wisely and effectively to flag any possible obstacles which were disregarded."
                    </blockquote>
                  </div>
                  
                  <div className="bg-sustainability/5 p-4 rounded-lg">
                    <p className="text-foreground leading-relaxed">
                      Through the <strong>Engage to Success (E2S) system</strong>, our integral staff and young talents can express their suggestions, initiatives, and concerns at all levels 
                      <span className="text-primary font-semibold"> freely and directly with the DCEO</span>. This PPE Recycling Initiative exemplifies how employee-driven sustainability ideas become reality.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Initiative Origin */}
          <div className="text-center mt-12 animate-slide-up">
            <div className="bg-white p-8 rounded-xl shadow-soft border border-primary/10">
              <h3 className="text-2xl font-bold text-primary mb-4">
                From Vision to Action
              </h3>
              <p className="text-lg text-foreground leading-relaxed max-w-4xl mx-auto">
                The KOC PPE Recycling Initiative was born from Deputy CEO Ameena Rajab Saleh's commitment to environmental sustainability 
                and her vision of transforming everyday operations into meaningful environmental impact. Her leadership in the Gas & Environment 
                sector drives innovation that benefits both our company and the planet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DCEOSection;