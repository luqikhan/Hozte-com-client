import React from "react";

import {
  HeroSection,
  PricingSection,
  ServicesSection,
  FeaturesSection,
  FaqsSection,
  FeaturesSection2,
  FeaturesSection3,
} from "../components";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <FeaturesSection3 />
      {/* <FeaturesSection2 /> */}
      <FeaturesSection />
      <PricingSection />
      <FaqsSection />
    </div>
  );
};

export default Home;
