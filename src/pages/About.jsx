import React from 'react'
import CountUp from 'react-countup';
const About = () => {

  const stats = [
    { value: 20, suffix: '+', label1: 'Projects', label2: 'Delivered' },
    { value: 20, suffix: '+', label1: 'Happy', label2: 'Clients' },
    { value: 1, suffix: '+', label1: 'Years of', label2: 'Experience' },
    { value: 95, suffix: '%', label1: 'Client', label2: 'Retention' },
  ];

  return (
    <section id="about" className="min-h-screen bg-[#0b0b0c] text-white">
      <div className='w-full max-w-7xl mx-auto px-4 py-20'>
        <div className='flex flex-col items-center justify-center text-center'>
          <p className='text-[14px] md:text-[16px] font-[600] text-[#ffc107]'>Know Me More</p>
          <h1 className='text-[24px] sm:text-[30px] xl:text-[35px] font-[700] uppercase'>About Me</h1>
          <hr className='w-[1px] h-[3rem] bg-[#585b5c] border-none my-5' />
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 px-4'>
          <div className='flex flex-col items-center text-center lg:text-left'>
            <h2 className='text-[24px] sm:text-[30px] xl:text-[35px] font-[600] leading-11'>Hi, <span className='text-[#ffc107]'>I'm Tenghuy</span> — A Web Designer <span className='text-[#585b5c]'>with Creative Expertise & Years of Experience.</span></h2>
            <p className='text-[16px] sm:text-[24px] text-[#585b5c] font-[500] pt-2 md:pt-8'>“Delivering work within time and budget which meets client’s requirements is my moto.”</p>
          </div>
          <div className='text-[16px] sm:text-[24px] font-[400] md:leading-11 text-center lg:text-left'>
            <h2>I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto pt-10 lg:pt-20 px-4">
          {stats.map((stat, i) => (
            <div key={i} className='flex items-center gap-4'>
              <div className="text-[#ffc107] text-[40px] sm:text-[50px] lg:text-[60px] fonr-[600] sm:font-[700]">
                <CountUp
                  end={stat.value}
                  duration={2}
                  enableScrollSpy
                  scrollSpyDelay={100}
                />
                {stat.suffix}
              </div>
              <p className="text-[14px] md:text-[16px] font-[600] text-[#585b5c]">
                {stat.label1} <br /> {stat.label2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About