import { useState } from "react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import DCEOSection from "@/components/DCEOSection";
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

import Footer from "@/components/Footer";

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsContent value="overview" className="mt-0">
          <HeroSection onTabChange={setActiveTab} />
          <CountdownSection />
          <DCEOSection />
          <AboutSection />
          <SustainabilityFacts />
          <CampaignVideos />
          <IncentivesSection onTabChange={setActiveTab} />
          <ESGSection />
        </TabsContent>

        <TabsContent value="donate-now" className="mt-0">
          <div className="pt-24 sm:pt-20">
            <ProcessFlow />
            <HowItWorksSection />
            <CollectionMap />
            <div id="donation-form">
              <DonationForm />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="impact" className="mt-0">
          <div className="pt-24 sm:pt-20">
            <ImpactDashboard />
            <StoriesBoard />
          </div>
        </TabsContent>
      </Tabs>
      
      <Footer />
    </div>
  );
};

export default Index;
