import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const DCEOSection = () => {
  const [isDCEOMessageExpanded, setIsDCEOMessageExpanded] = useState(false);
  const [isHSEMessageExpanded, setIsHSEMessageExpanded] = useState(false);
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-sustainability/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-foreground">
              Leadership Initiative
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              This initiative was founded upon the vision and request of our Deputy CEO for Gas & Environment
            </p>
          </div>

          {/* Initiative Origin */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="bg-white p-8 rounded-xl shadow-soft border border-primary/10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-4">
                From Vision to Action
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-foreground leading-relaxed max-w-4xl mx-auto">
                The KOC PPE Recycling Initiative was born from Deputy CEO Ameena Rajab Saleh's commitment to environmental sustainability 
                and her vision of transforming everyday operations into meaningful environmental impact. Her leadership in the Gas & Environment 
                sector drives innovation that benefits our company.
              </p>
            </div>
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
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Ameena Rajab Saleh</h3>
                    <p className="text-white/90 text-sm sm:text-base md:text-lg">Deputy CEO (Gas & Environment)</p>
                  </div>
                </div>

                {/* DCEO Message */}
                <div className="p-8 bg-white">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">DCEO Message</h4>
                      {/* Mobile toggle button */}
                      <button
                        onClick={() => setIsDCEOMessageExpanded(!isDCEOMessageExpanded)}
                        className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Toggle DCEO message"
                      >
                        {isDCEOMessageExpanded ? (
                          <ChevronUp className="w-5 h-5 text-primary" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-primary" />
                        )}
                      </button>
                    </div>
                    {/* Message content - always visible on desktop, collapsible on mobile */}
                    <div className={`${isDCEOMessageExpanded ? 'block' : 'hidden'} md:block`}>
                      <blockquote className="text-foreground leading-relaxed text-sm sm:text-base md:text-lg italic border-l-4 border-primary pl-6 mb-4">
                        "I'm very proud to be part of this directorate with many leading initiatives and projects adding a great value to oil and gas sector while maintaining a sustainable environment. Our integral staff and young talents are one of the strengths that I have been always believing in when it comes to elevating the achievements. Therefore, staying connected is crucial. The establishment of the Engage to Success (E2S) system is the venue where all employees can express their suggestions, initiatives and concerns in all levels freely and directly with the DCEO. I encourage you all to take advantage of it and use it wisely and effectively to flag any possible obstacles which were disregarded."
                      </blockquote>
                      
                      {/* E2S system info - visible on mobile inside collapsible */}
                      <div className="bg-sustainability/10 p-4 rounded-lg border border-sustainability/20 sm:hidden mt-4">
                        <p className="text-foreground leading-relaxed text-sm">
                          Through the <strong>Engage to Success (E2S) system</strong>, our integral staff and young talents can express their suggestions, initiatives, and concerns at all levels 
                          <span className="text-primary font-semibold"> freely and directly with the DCEO</span>. This PPE Recycling Initiative exemplifies how employee-driven sustainability ideas become reality.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* E2S system info - always visible on desktop */}
                  <div className="bg-sustainability/5 p-4 rounded-lg hidden sm:block">
                    <p className="text-foreground leading-relaxed">
                      Through the <strong>Engage to Success (E2S) system</strong>, our integral staff and young talents can express their suggestions, initiatives, and concerns at all levels 
                      <span className="text-primary font-semibold"> freely and directly with the DCEO</span>. This PPE Recycling Initiative exemplifies how employee-driven sustainability ideas become reality.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* HSE Manager Card */}
          <Card className="shadow-corporate hover:shadow-elevated transition-smooth animate-fade-in overflow-hidden mt-8">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* HSE Manager Photo and Info - First on mobile, second on desktop */}
                <div className="bg-gradient-corporate p-8 text-white flex flex-col justify-center order-1 md:order-2">
                  <div className="text-center">
                    <img 
                      src="/lovable-uploads/cd623154-d4db-4f0a-a1ee-740f7f614a4f.png" 
                      alt="Naser Bader Al-Buhairi - Manager HSE" 
                      className="w-48 h-48 rounded-full mx-auto mb-4 border-4 border-white/20 object-cover"
                    />
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Naser Bader Al-Buhairi</h3>
                    <p className="text-white/90 text-sm sm:text-base md:text-lg">Manager Health, Safety & Environment</p>
                  </div>
                </div>

                {/* HSE Manager Message - Second on mobile, first on desktop */}
                <div className="p-8 bg-white order-2 md:order-1">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-primary">HSE Manager Message</h4>
                      {/* Mobile toggle button */}
                      <button
                        onClick={() => setIsHSEMessageExpanded(!isHSEMessageExpanded)}
                        className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Toggle HSE Manager message"
                      >
                        {isHSEMessageExpanded ? (
                          <ChevronUp className="w-5 h-5 text-primary" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-primary" />
                        )}
                      </button>
                    </div>
                    {/* Message content - always visible on desktop, collapsible on mobile */}
                    <div className={`${isHSEMessageExpanded ? 'block' : 'hidden'} md:block`}>
                      <blockquote className="text-foreground leading-relaxed text-sm sm:text-base md:text-lg italic border-l-4 border-primary pl-6 mb-4">
                        "As Manager of Health, Safety & Environment, I was entrusted with the responsibility to guide this transformative initiative and ensure seamless coordination across all HSE teams and company directorates. This PPE Recycling Initiative represents more than just waste management—it embodies our commitment to creating a sustainable future while maintaining the highest safety standards. Through collaborative efforts and innovative thinking, we are setting new benchmarks for environmental stewardship in the oil and gas sector. I am proud to lead this initiative that demonstrates how environmental responsibility and operational excellence can work hand in hand."
                      </blockquote>
                      
                      {/* HSE coordination info - visible on mobile inside collapsible */}
                      <div className="bg-sustainability/10 p-4 rounded-lg border border-sustainability/20 sm:hidden mt-4">
                        <p className="text-foreground leading-relaxed text-sm">
                          Under his leadership, the initiative ensures smooth coordination and navigation across all HSE Teams and company directorates, maintaining the highest standards of safety and environmental compliance throughout the recycling process.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* HSE coordination info - always visible on desktop */}
                  <div className="bg-sustainability/5 p-4 rounded-lg hidden sm:block">
                    <p className="text-foreground leading-relaxed">
                      Under his leadership, the initiative ensures smooth coordination and navigation across all HSE Teams and company directorates, maintaining the highest standards of safety and environmental compliance throughout the recycling process.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
};

export default DCEOSection;