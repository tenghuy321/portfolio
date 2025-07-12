import React from 'react'

const Footer = () => {
  return (
    <div className='min-h-[50vh] bg-[#0b0b0c] text-white'>
      <div className='w-full max-w-7xl mx-auto px-4 py-10 md:py-20'>
        <hr className='w-full h-[2px] bg-[#39393d] border-none my-5' data-aos="fade-up" />
        <ul className='flex items-center justify-center gap-10 text-[16px] sm:text-[20px] lg:text-[25px] font-[600] text-[#a8abae]' data-aos="fade-up">
          <li><a href="#" className='hover:underline hover:text-[#ffc107]'>Facebook</a></li>
          <li><a href="#" className='hover:underline hover:text-[#ffc107]'>Gmail</a></li>
          <li><a href="#" className='hover:underline hover:text-[#ffc107]'>Telegram</a></li>
          <li><a href="#" className='hover:underline hover:text-[#ffc107]'>Github</a></li>
        </ul>
        <hr className='w-full h-[2px] bg-[#39393d] border-none my-5' data-aos="fade-up" />
        <p className='text-[16px] lg:text-[20px] text-center text-[#a8abae]' data-aos="fade-up">Copyright © 2025 <span className='text-[#ffc107] hover:underline hover:text-[#ffc107] font-[600]'>Tenghuy</span>. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer