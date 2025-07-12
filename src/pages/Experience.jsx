import React from 'react'
import cvPDF from '../assets/cv.pdf';
const Experience = () => {
  return (
    <section id="experience" className="min-h-screen bg-[#0b0b0c] text-white">
      <div className='w-full max-w-7xl mx-auto px-4 py-10 md:py-20'>
        <div className='flex flex-col items-center justify-center text-center'>
          <p className='text-[14px] md:text-[16px] font-[600] text-[#ffc107]' data-aos="fade-up">My Career</p>
          <h1 className='text-[24px] sm:text-[30px] xl:text-[35px] font-[700] uppercase' data-aos="fade-up">Experience</h1>
          <hr className='w-[1px] h-[3rem] bg-[#39393d] border-none my-5' data-aos="fade-up" />
        </div>

        <div className='py-10'>
          <h1 className='text-[16px] sm:text-[24px] font-[600]' data-aos="fade-up">Web Developer</h1>
          <div className='flex items-center justify-between text-[16px] sm:text-[24px] font-[600] text-[#585b5c]' data-aos="fade-up">
            <h1>Seed Media</h1>
            <h2>(2023 – Present)</h2>
          </div>

          <ul className='mt-4 space-y-4 text-[14px] md:text-[18px] font-[400] text-[#fff] pt-4' data-aos="fade-up">
            <li className="before:content-['»'] before:mr-2">Build and maintain responsive websites using Laravel, JavaScript, and Tailwind CSS.</li>
            <li className="before:content-['»'] before:mr-2">Built interactive front-end components using React.js.</li>
            <li className="before:content-['»'] before:mr-2">Managed data using MySQL or MongoDB databases.</li>
            <li className="before:content-['»'] before:mr-2">Used Git and GitHub for version control and collaboration.</li>
            <li className="before:content-['»'] before:mr-2">Designed wireframes, user flows, and interactive prototypes using Figma and Adobe XD for web and mobile projects.</li>
            <li className="before:content-['»'] before:mr-2">REST APIs integration</li>
          </ul>
        </div>

        <hr className="my-8 border-t-2 border-[#585b5c] w-full" data-aos="fade-up" />
        <div data-aos="fade-up">
          <a
            href={cvPDF}
            download="cv.pdf"
            className="bg-[#ffc107] hover:bg-yellow-500 text-black px-8 py-2 rounded-md font-semibold transition text-[14px] sm:text-[16px] lg:text-[20px]"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default Experience