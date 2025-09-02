import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import AboutSection from "@/components/AboutSection";
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
      <SustainabilityFacts />
      <AboutSection />
      <HowItWorksSection />
      <ProcessFlow />
      <CollectionMap />
      <DonationForm />
      <StoriesBoard />
      <ImpactDashboard />
      <CampaignVideos />
      <IncentivesSection />
      <PartnersSection />
      {/* <GrandEventSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
