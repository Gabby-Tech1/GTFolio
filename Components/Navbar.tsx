import React from 'react'
import { CgMenuRightAlt } from 'react-icons/cg'

interface Props {
    openNavbar: () => void
}

const Navbar = ({openNavbar}:Props) => {
  return (
    <div className='w-[100vw] sticky top-0 h-[12vh] bg-[#141c27] shadow-md z-[10]'>
        <div className='flex items-center justify-between w-[89%] mx-auto h-[100%]'>
            <h1 className='flex-[0.6] cursor-pointer text-3xl text-white font-bold'>
                Gabby
                <span className='text-[#0ef]'>TECH</span>.
            </h1>
                <div className='nav-link text-bold text-white hover:text-[#0ef]'>Home</div>
                <div className='nav-link text-bold text-white hover:text-[#0ef]'>About</div>
                <div className='nav-link text-bold text-white hover:text-[#0ef]'>Services</div>
                <div className='nav-link text-bold text-white hover:text-[#0ef]'>Projects</div>
                <div className='nav-link text-bold text-white hover:text-[#0ef]'>Testimonials</div>
                <div className='nav-link text-bold text-white hover:text-[#0ef]'>Contact</div>
                <div onClick={openNavbar}>
                <CgMenuRightAlt className='md:hidden text-5xl cursor-pointer text-[#0ef]' />
                </div>
        </div>
    </div>
  )
}

export default Navbar