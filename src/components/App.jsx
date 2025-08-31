import { FaqSection } from "./FaqSection";
import { FeatureContainer } from "./FeatureContainer";
import { ReviewSection } from "./ReviewsSection";
import { ServiceContainer } from "./ServiceContainer";

function App() {
  return (
    <section className="main">
      <ServiceContainer/>
      <FeatureContainer/>
      <ReviewSection/>
      <FaqSection/>
    </section>
  );
}

export default App;
