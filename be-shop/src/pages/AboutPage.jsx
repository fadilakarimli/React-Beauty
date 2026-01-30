import React from "react";
import Navbar from "../components/Navbar";
import AboutHero from "../components/AboutHero";
import WelcomeSection from "../components/WelcomeSection";
import SuccessStory from "../components/SuccessStory";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
  

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <WelcomeSection />
      <SuccessStory />
      <Testimonials />
      <Features />
    </>
  );
};

export default AboutPage;
