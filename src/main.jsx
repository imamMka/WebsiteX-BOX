import { StrictMode } from 'react'
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
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
    <Footer />
  </StrictMode>,
)
