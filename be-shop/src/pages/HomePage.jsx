import AboutUs from '../components/AboutUs';
import BeautyGallery from '../components/BeautyGallery';
import BlogSection from '../components/BlogSection';
import Features from '../components/Features';
import Hero from '../components/Hero';
import NewArrivals from '../components/NewArrivals';
import NewCollection from '../components/NewCollection';
import NewsletterSection from '../components/NewsletterSection';
import PromoBanner from '../components/PromoBanner';
import ShowcaseCard from '../components/ShowcaseCard';
import TopCategories from '../components/TopCategories';
import TrendingProducts from '../components/TrendingProducts';

const HomePage = () => {
  return (
    <>
      <Hero />
      <TrendingProducts />
      <ShowcaseCard />
      <PromoBanner />
      <Features />
      <TopCategories />
      <NewCollection />
      <AboutUs />
      <NewArrivals />
      <BlogSection />
      <NewsletterSection />
      <BeautyGallery />
    </>
  );
};

export default HomePage;
