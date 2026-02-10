import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Client imports
import ClientLayout from './components/client/ClientLayout'
import HomePage from './pages/client/HomePage'
import AboutPage from './pages/client/AboutPage'

// Admin imports
import AdminLayout from './components/admin/AdminLayout'
import AdminDashboard from './pages/admin/AdminDashboard'
import HeroBannersList from './pages/admin/hero-banners/HeroBannersList'
import HeroBannerCreate from './pages/admin/hero-banners/HeroBannerCreate'
import HeroBannerEdit from './pages/admin/hero-banners/HeroBannerEdit'
import ShowcaseLogosList from './pages/admin/showcase-logos/ShowcaseLogosList'
import ShowcaseLogosCreate from './pages/admin/showcase-logos/ShowcaseLogosCreate'
import ShowcaseLogosEdit from './pages/admin/showcase-logos/ShowcaseLogosEdit'
import PromoBannersList from './pages/admin/promo-banners/PromoBannersList'
import PromoBannerCreate from './pages/admin/promo-banners/PromoBannerCreate'
import PromoBannerEdit from './pages/admin/promo-banners/PromoBannerEdit'

function AppContent() {
  return (
    <Routes>
      {/* Client Routes */}
      <Route path="/" element={<ClientLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>

      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="hero-banners" element={<HeroBannersList />} />
        <Route path="hero-banners/create" element={<HeroBannerCreate />} />
        <Route path="hero-banners/edit/:id" element={<HeroBannerEdit />} />
        <Route path="showcase-logos" element={<ShowcaseLogosList />} />
        <Route path="showcase-logos/create" element={<ShowcaseLogosCreate />} />
        <Route path="showcase-logos/edit/:id" element={<ShowcaseLogosEdit />} />
        <Route path="promo-banners" element={<PromoBannersList />} />
        <Route path="promo-banners/create" element={<PromoBannerCreate />} />
        <Route path="promo-banners/edit/:id" element={<PromoBannerEdit />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
