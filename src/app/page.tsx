import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofTicker from "@/components/SocialProofTicker";
import TrustStrip from "@/components/TrustStrip";
import HowItWorks from "@/components/HowItWorks";
import LinkDemo from "@/components/LinkDemo";
import CashbackCalculator from "@/components/CashbackCalculator";
import FeatureStory from "@/components/FeatureStory";
import ReferralSection from "@/components/ReferralSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProofTicker />
      <TrustStrip />
      <HowItWorks />
      <LinkDemo />
      <CashbackCalculator />
      <FeatureStory />
      <ReferralSection />
      <TrustSection />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
