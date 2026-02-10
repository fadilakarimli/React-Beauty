import AboutHero from "../../components/client/AboutHero";
import WelcomeSection from "../../components/client/WelcomeSection";
import SuccessStory from "../../components/client/SuccessStory";
import Features from "../../components/client/Features";
import Testimonials from "../../components/client/Testimonials";
import NewsletterSection from '../../components/client/NewsletterSection';
import BeautyGallery from '../../components/client/BeautyGallery';

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <WelcomeSection />
      <SuccessStory />
      <Testimonials />
      <Features />
      <NewsletterSection />
      <BeautyGallery />
    </>
  );
};

export default AboutPage;
