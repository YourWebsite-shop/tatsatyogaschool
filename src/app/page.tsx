import AboutUs from '@/components/home/AboutUs'
import Contact from '@/components/home/Contact'
import Hero from '@/components/home/Hero'
import Programs from '@/components/home/Programs'
import Schedule from '@/components/home/Schedule'
import Testimonials from '@/components/home/Testimonials'
import MarqCarousel from '@/components/home/MarqCarousel'
import Faq from '@/components/home/FAQ'

import React from 'react'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <MarqCarousel />
      <AboutUs />
      {/* <Courses /> */}
      {/* <Gallery /> */}
      <Programs />
      <Schedule />
      <Testimonials />
      <Faq />
      <Contact />
    </div>
  )
}

export default Home
