import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import AboutUs from './components/sections/AboutUs'
import Features from './components/sections/Features'
import Benefits from './components/sections/Benefits'
import Partners from './components/sections/Partners'
import Testimonials from './components/sections/Testimonials'
import FooterCTA from './components/sections/FooterCTA'

const App = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <AboutUs />
      <Features />
      <Benefits />
      <Partners />
      <Testimonials />
      <FooterCTA />
    </main>
    <Footer />
  </>
)

export default App
