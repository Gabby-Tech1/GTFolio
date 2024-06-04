import Navbar from '@/Components/Navbar'
import MobileNav from '@/Components/MobileNav'
import Hero from '@/Components/Hero'
import React, { useState } from 'react'
import About from '@/Components/About'
import Services from '@/Components/Services'
import Skills from '@/Components/Skills'
import Projects from '@/Components/Projects'
import Testimonial from '@/Components/Testimonial'
import Contact from '@/Components/Contact'
import Footer from '@/Components/Footer'

const Home = () => {

  const [navbar, setNavbar] = useState(false)
  const openNavbar = () => setNavbar(true)
  const closeNavbar = () => setNavbar(false)

  return (
    <div className='overflow-x-hidden'>
      <div>
        <MobileNav navbar={navbar} closeNavbar={closeNavbar}/>
        <Navbar openNavbar={openNavbar}/>
        <Hero/>
        <About/>
        <Services/>
        <Skills/>
        <Projects/>
        <Testimonial/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default Home