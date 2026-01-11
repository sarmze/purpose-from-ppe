import { Separator } from "@/components/ui/separator";
import { Mail, Phone, Globe, FileText, Shield, HelpCircle } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "KOC Sustainability Policy", icon: FileText, href: "#" },
    { name: "HSSE Guidelines", icon: Shield, href: "#" },
    { name: "Campaign FAQs", icon: HelpCircle, href: "#" },
    { name: "KOC Website", icon: Globe, href: "#" }
  ];

  const contactInfo = [
    { icon: Mail, text: "ppe.recycling@koc.com.kw", type: "email" },
    { icon: Phone, text: "+965 2398-0000", type: "phone" },
    { icon: Globe, text: "www.koc.com.kw/sustainability", type: "website" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">KOC PPE Recycling Campaign</h3>
              <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                Leading Kuwait's energy sector towards a sustainable future through innovative 
                recycling programs and environmental stewardship.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center p-2">
                  <img 
                    src="/lovable-uploads/7104d558-8d12-4a6a-a1f6-20e7316d2530.png" 
                    alt="KOC Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <p className="font-semibold">Kuwait Oil Company</p>
                  <p className="text-sm text-primary-foreground/80">Sustainability Division</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    className="flex items-center gap-3 text-primary-foreground/90 hover:text-white hover:translate-x-1 transition-smooth group"
                  >
                    <link.icon className="w-4 h-4 group-hover:text-sustainability" />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Campaign Support</h4>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <contact.icon className="w-4 h-4 text-sustainability" />
                    <span className="text-primary-foreground/90">{contact.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Office Hours */}
              <div className="mt-6 p-4 bg-primary-dark rounded-lg">
                <h5 className="font-semibold mb-2">Support Hours</h5>
                <p className="text-sm text-primary-foreground/90">
                  Sunday - Thursday: 7:00 AM - 4:00 PM<br />
                  Campaign Hotline: Available 24/7
                </p>
              </div>
            </div>
          </div>

          <Separator className="bg-primary-foreground/20 my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-primary-foreground/80">
              <p>&copy; 2024 Kuwait Oil Company. All rights reserved.</p>
              <span className="hidden md:block">|</span>
              <p>Give Your PPE a Second Life Initiative</p>
            </div>
            
            <div className="flex items-center gap-4 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">
                Terms of Use
              </a>
              <span>|</span>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-smooth">
                Environmental Policy
              </a>
            </div>
          </div>

          {/* Campaign Slogan */}
          <div className="text-center mt-8 pt-8 border-t border-primary-foreground/20">
            <p className="text-lg font-semibold text-sustainability">
              "Your PPE Has a Second Life"
            </p>
            <p className="text-sm text-primary-foreground/80 mt-2">
              Together, we're building a more sustainable Kuwait
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;