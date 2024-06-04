import React from 'react'
import Whatsapp from '@/Assets/Whatsapp.png'
import Email from '@/Assets/Email.png'
import GitHub from '@/Assets/GitHub.png'
import LinkedIn from '@/Assets/LinkedIn.png'
import Image from 'next/image'


const Footer = () => {
  return (
    <footer className='bg-[#0ef] text-black text-center py-4'>
      <div className='container mx-auto px-4'>
        <div className='text-3xl font-bold'>GT Folio</div>
        <p className='text-center text-black/70 pb-2'>Made by Gabby Tech</p>
        <div className='flex justify-center space-x-4'>
          <a href='https://wa.me/+233591071237' target='_blank' rel='noopener noreferrer'>
            <Image src={Whatsapp} alt='WhatsApp' className='hover:scale-110 duration-300 ease-linear' width='60' height='60' />
          </a>
          <a href='https://github.com/Gabby-Tech1' target='_blank' rel='noopener noreferrer'>
            <Image src={GitHub} alt='GitHub' className='hover:scale-110 duration-300 ease-linear' width='60' height='60' />
          </a>
          <a href='mailto:gkaquainoo@gmail.com'>
            <Image src={Email} alt='Email' className='hover:scale-110 duration-300 ease-linear' width='60' height='60' />
          </a>
          <a href='https://www.linkedin.com/in/gabriel-kwame-addo-quainoo-3b0960297/' target='_blank' rel='noopener noreferrer'>
            <Image src={LinkedIn} alt='LinkedIn' className='hover:scale-110 duration-300 ease-linear' width='60' height='60' />
          </a>
        </div>
        <div className='text-sm pt-4'>Copyright © 2024. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer