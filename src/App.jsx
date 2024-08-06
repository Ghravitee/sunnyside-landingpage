import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Features from "./components/Features"
import Testimonial from "./components/Testimonial"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"

function App() {
  
  return (
    <>
    <div className="bg-hero-background-mobile lg:bg-hero-background-desktop bg-cover bg-no-repeat bg-[50%_100%]">
      <Navbar />
      <Hero />
    </div>
    <Features />
    <Testimonial />
    <Gallery />
    <Footer />
    </>
  )
}

export default App
