import FeatureHighlight from "../components/features/FeatureHighlight";
import FeaturesSection from "../components/features/FeaturesSection";
import Home from "../components/HeroSec";
import ModernWeb from "../components/ModernWeb";
import TeamSection from "../components/teamsec/TeamSection";

function Homepage() {
  return (
    <div className="">
      <Home />
      <ModernWeb />
      <FeaturesSection />
      <FeatureHighlight />
      <TeamSection />
    </div>
  );
}

export default Homepage;
