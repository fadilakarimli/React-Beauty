import AboutUs from '../../components/client/AboutUs';
import BeautyGallery from '../../components/client/BeautyGallery';
import BlogSection from '../../components/client/BlogSection';
import Features from '../../components/client/Features';
import Hero from '../../components/client/Hero';
import NewArrivals from '../../components/client/NewArrivals';
import NewCollection from '../../components/client/NewCollection';
import NewsletterSection from '../../components/client/NewsletterSection';
import PromoBanner from '../../components/client/PromoBanner';
import ShowcaseCard from '../../components/client/ShowcaseCard';
import TopCategories from '../../components/client/TopCategories';
import TrendingProducts from '../../components/client/TrendingProducts';

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
