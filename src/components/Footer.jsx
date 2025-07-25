import React from 'react'

const Footer = () => {
  return (
    <div className='min-h-[30vh] md:min-h-[50vh] bg-[#0b0b0c] text-white'>
      <hr className='w-full h-[2px] bg-[#39393d] border-none' />
      <div className='w-full max-w-7xl mx-auto px-4 py-10 md:py-20'>
        <hr className='w-full h-[2px] bg-[#39393d] border-none my-5' />
        <ul className='flex items-center justify-center gap-6 md:gap-10 text-[16px] sm:text-[20px] lg:text-[25px] font-[600] text-[#a8abae]'>
          <li><a href="#" className='hover:underline hover:text-[#ffc107]'>Facebook</a></li>
          <li><a href="#" className='hover:underline hover:text-[#ffc107]'>Gmail</a></li>
          <li><a href="#" className='hover:underline hover:text-[#ffc107]'>Telegram</a></li>
          <li><a href="#" className='hover:underline hover:text-[#ffc107]'>Github</a></li>
        </ul>
        <hr className='w-full h-[2px] bg-[#39393d] border-none my-5' />
        <p className='text-[16px] lg:text-[20px] text-center text-[#a8abae]'>Copyright © 2025 <span className='text-[#ffc107] hover:underline hover:text-[#ffc107] font-[600]'>Tenghuy</span>. All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer