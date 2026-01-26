import './App.css'
import Features from './components/Features'
import Hero from './components/Hero'
import PromoBanner from './components/PromoBanner'
import ShowcaseCard from './components/ShowcaseCard'
import TrendingProducts from './components/TrendingProducts'

function App() {
  return (
    <>
      <Hero />
      <TrendingProducts />
      <ShowcaseCard/>
      <PromoBanner />
      <Features/>
    </>
  )
}

export default App
