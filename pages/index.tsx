import Navbar from '@/Components/Navbar'
import MobileNav from '@/Components/MobileNav'
import Hero from '@/Components/Hero'
import React, { useState } from 'react'
import About from '@/Components/About'

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
      </div>
    </div>
  )
}

export default Home