import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Hero from './Hero.jsx'
import About from './About.jsx'
import PaddingRight from './components/padding-right.jsx'
import PaddingLeft from './components/padding-left.jsx'
import Services from './Sevices.jsx'
import Gallery from './Gallery.jsx'
import FindUs from './FindUs.jsx'
import Testimonials from './Testimonials.jsx'
import Booking from './Booking.jsx'
import Footer from './components/Footer.jsx'
import Gradient from './components/gradient.jsx'
import Team from './Team.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />
      
      <Routes>
        {/* Route untuk Halaman Utama (Isinya semua section) */}
        <Route path="/" element={
          <>
            <Hero />
            <PaddingRight />
            <About />
            <PaddingLeft />
            <Services />
            <PaddingRight />
            <Gallery />
            <PaddingLeft />
            <FindUs />
            <PaddingRight />
            <Testimonials />
            <PaddingLeft />
            <Booking />
            <Gradient />
          </>
        } />

        {/* Route untuk Halaman Team */}
        <Route path="/team" element={<Team />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </StrictMode>,
)