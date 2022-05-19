import React from "react";

import {
  HeroSection,
  PricingSection,
  ServicesSection,
  FeaturesSection,
  Faqs1,
  // FeaturesSection2,
  FeaturesSection3,
  PreLoader,
} from "../components";

const Home = () => {
  return (
    <div>
      <PreLoader />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection3 />
      <FeaturesSection />
      <PricingSection />
      <Faqs1 />
    </div>
  );
};

export default Home;
