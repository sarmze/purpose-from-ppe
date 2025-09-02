import { Recycle, Shield, TreePine } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About the Initiative
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our mission is to revolutionize workplace sustainability by giving expired safety equipment a meaningful second life
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 rounded-2xl bg-card shadow-corporate hover:shadow-elevated transition-smooth animate-fade-in">
              <div className="w-16 h-16 bg-gradient-sustainability rounded-full flex items-center justify-center mx-auto mb-6">
                <Recycle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Recycling Impact</h3>
              <p className="text-muted-foreground">
                Transform expired safety helmets and coveralls into valuable recycled materials, reducing environmental waste
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card shadow-corporate hover:shadow-elevated transition-smooth animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-corporate rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Safety First</h3>
              <p className="text-muted-foreground">
                Promoting responsible disposal while maintaining our commitment to workplace safety and protection
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card shadow-corporate hover:shadow-elevated transition-smooth animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gradient-sustainability rounded-full flex items-center justify-center mx-auto mb-6">
                <TreePine className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Environmental Purpose</h3>
              <p className="text-muted-foreground">
                Every piece of donated PPE contributes to a greener future and demonstrates KOC's sustainability leadership
              </p>
            </div>
          </div>

          {/* Slogan */}
          <div className="text-center p-8 bg-gradient-corporate rounded-2xl shadow-elevated animate-slide-up">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              "Your PPE Has a Second Life"
            </h3>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join thousands of KOC employees in creating meaningful environmental impact through responsible PPE recycling
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;