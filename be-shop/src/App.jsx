import './App.css'
import Features from './components/Features'
import Hero from './components/Hero'
import NewCollection from './components/NewCollection'
import PromoBanner from './components/PromoBanner'
import ShowcaseCard from './components/ShowcaseCard'
import TopCategories from './components/TopCategories'
import TrendingProducts from './components/TrendingProducts'

function App() {
  return (
    <>
      <Hero />
      <TrendingProducts />
      <ShowcaseCard/>
      <PromoBanner />
      <Features/>
      <TopCategories/>
      <NewCollection/>
    </>
  )
}

export default App
