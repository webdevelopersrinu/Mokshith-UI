import FeatureSection from "../components/LandingPage/FeatureSection";
import HeroSection from "../components/LandingPage/HeroSection";
import HowItWorks from "../components/LandingPage/HowItWorks";
import PrebuiltComponents from "../components/LandingPage/PrebuiltComponents";
import Testimonials from "../components/LandingPage/Testimonials";

import StartBuilding from "../components/Layout/StartBuilding";

function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <PrebuiltComponents />
      <HowItWorks />
      <Testimonials />
      <StartBuilding />
    </div>
  );
}

export default Home;
