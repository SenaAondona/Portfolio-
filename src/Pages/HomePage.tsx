import About from '../Components/About'
import Experience from '../Components/Experience'
import Footer from '../Components/Footer'
import { Hero } from '../Components/Hero'
import { NavComponent } from '../Components/NavComponent'
import Portfolio from '../Components/Portfolio'
import Prices from '../Components/Prices'
import Service from '../Components/Service'
import Social from '../Components/Social'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Testimonial from '../Components/Testimonial'
const HomePage = () => {
    useEffect(() => {
        AOS.init();
    }, []);
  return (
    <>
      <NavComponent />
      <Hero />
      <About />
      <Service />
      <Experience />
      <Prices />
      <Portfolio />
      <Testimonial />
      <Social />
      <Footer />
    </>
  )
}

export default HomePage