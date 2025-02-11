import { FaBolt, FaMagic, FaCode, FaPuzzlePiece } from "react-icons/fa";
import HeroSection from "../components/AboutPage/HeroSection";
import MissionSection from "../components/AboutPage/MissionSection";
import FourColGrid from "../components/common/FourColGrid";
import Testimonials from "../components/LandingPage/Testimonials";
const features = [
  {
    icon: <FaBolt className="text-blue-500 text-3xl" />,
    title: "Blazing Fast",
    description: "Optimized for performance with zero runtime overhead",
  },
  {
    icon: <FaMagic className="text-blue-500 text-3xl" />,
    title: "Customizable",
    description: "Easily modify components using Tailwind utility classes",
  },
  {
    icon: <FaCode className="text-blue-500 text-3xl" />,
    title: "No Installations",
    description: "Simple copy and paste implementation",
  },
  {
    icon: <FaPuzzlePiece className="text-blue-500 text-3xl" />,
    title: "Open Source",
    description: "Built by the community, for the community",
  },
];

function About() {
  return (
    <div>
      <HeroSection />
      <MissionSection />
      <FourColGrid title1={" Why Choose Mokshith UI?"} gridData={features} />
      <Testimonials />
    </div>
  );
}

export default About;
