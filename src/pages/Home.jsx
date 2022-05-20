import React, { useState, useEffect } from "react";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <div>
      {loading && <PreLoader />}
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
