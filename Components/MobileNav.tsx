import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";

interface Props {
    navbar: boolean;
    closeNavbar: () => void
}

const MobileNav = ({navbar, closeNavbar}: Props) => {

    const navAnimate = navbar?'translate-x-0':'translate-y-[-100%]'

  return (
    <div className={`fixed ${navAnimate} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100] bg-[#09101a]`}>
      <div className='w-full h-full flex flex-col items-center justify-center'>
        <div className='nav-link-mobile text-bold text-white hover:text-[#0ef]'>Home</div>
        <div className='nav-link-mobile text-bold text-white hover:text-[#0ef]'>About</div>
        <div className='nav-link-mobile text-bold text-white hover:text-[#0ef]'>Services</div>
        <div className='nav-link-mobile text-bold text-white hover:text-[#0ef]'>Projects</div>
        <div className='nav-link-mobile text-bold text-white hover:text-[#0ef]'>Testimonial</div>
        <div className='nav-link-mobile text-bold text-white hover:text-[#0ef]'>Contact</div>
      </div>
      <div onClick={closeNavbar} className='absolute cursor-pointer top-8 right-8 text-5xl text-[#0ef]'>
      <IoIosCloseCircle />
      </div>
    </div>
  )
}

export default MobileNav