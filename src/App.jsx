import './App.css'
import Advantages from './components/Advantages'
import Carousel from './components/Carousel'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Services from './components/Services'

function App() {
  
  return (
    <div className='bg-radial-gradient'>

    
      <Navbar/>
      <HeroSection/>
      <Advantages/>
      <Services/>
      <Experience/>
      <Carousel/>
      <Contact/>
      <Footer/>
      
    </div>
      
  )
}

export default App
