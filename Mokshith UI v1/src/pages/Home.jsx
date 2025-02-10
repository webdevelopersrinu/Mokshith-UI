import FeatureSection from "../components/LandingPage/FeatureSection";
import HeroSection from "../components/LandingPage/HeroSection";
import HowItWorks from "../components/LandingPage/HowItWorks";
import PrebuiltComponents from "../components/LandingPage/PrebuiltComponents";
import Testimonials from "../components/LandingPage/Testimonials";
import StartBuilding from "../components/LandingPage/StartBuilding";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <FeatureSection />
      <PrebuiltComponents />
      <HowItWorks />
      <Testimonials />
      <StartBuilding />
      <Footer />
    </div>
  );
}

export default Home;
