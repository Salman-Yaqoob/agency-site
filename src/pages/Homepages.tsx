import FeatureHighlight from "../components/features/FeatureHighlight";
import FeaturesSection from "../components/features/FeaturesSection";
import Home from "../components/HeroSec";
import ModernWeb from "../components/ModernWeb";
import TeamSection from "../components/teamsec/TeamSection";
import Testimonials from "../components/Testimonials";

function Homepage() {
  return (
    <div className="">
      <Home />
      <ModernWeb />
      <FeaturesSection />
      <FeatureHighlight />
      <TeamSection />
      <Testimonials />
    </div>
  );
}

export default Homepage;
