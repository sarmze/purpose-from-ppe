import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import AboutSection from "@/components/AboutSection";
import ESGSection from "@/components/ESGSection";
import SustainabilityFacts from "@/components/SustainabilityFacts";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProcessFlow from "@/components/ProcessFlow";
import CollectionMap from "@/components/CollectionMap";
import DonationForm from "@/components/DonationForm";
import StoriesBoard from "@/components/StoriesBoard";
import CampaignVideos from "@/components/CampaignVideos";
import IncentivesSection from "@/components/IncentivesSection";
import ImpactDashboard from "@/components/ImpactDashboard";
import PartnersSection from "@/components/PartnersSection";
{/* import GrandEventSection from "@/components/GrandEventSection"; */}
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <CountdownSection />
      <AboutSection />
      <ESGSection />
      <SustainabilityFacts />
      <HowItWorksSection />
      <ProcessFlow />
      <CollectionMap />
      <DonationForm />
      <PartnersSection />
      <ImpactDashboard />
      <StoriesBoard />
      <CampaignVideos />
      <IncentivesSection />
      <Footer />
    </div>
  );
};

export default Index;
