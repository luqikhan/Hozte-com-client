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
  ContactCard,
} from "../components";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <>
      {loading && <PreLoader />}
      <HeroSection />
      <ServicesSection />
      <FeaturesSection3 />
      <FeaturesSection />
      <PricingSection />
      <Faqs1 />

      <ContactCard />
      <div style={{ height: 100, background: "#eef1f6" }} />
    </>
  );
};

export default Home;
