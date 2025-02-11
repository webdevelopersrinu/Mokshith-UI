import FeatureSection from "../components/LandingPage/FeatureSection";
import HeroSection from "../components/LandingPage/HeroSection";
import HowItWorks from "../components/LandingPage/HowItWorks";
import PrebuiltComponents from "../components/LandingPage/PrebuiltComponents";
import Testimonials from "../components/LandingPage/Testimonials";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <PrebuiltComponents />
      <HowItWorks />
      <Testimonials />
    </div>
  );
}

export default Home;
