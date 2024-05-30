import Navbar from '@/Components/Navbar'
import MobileNav from '@/Components/MobileNav'
import Hero from '@/Components/Hero'
import React, { useState } from 'react'

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
      </div>
    </div>
  )
}

export default Home