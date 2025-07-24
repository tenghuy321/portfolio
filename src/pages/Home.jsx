import Form from '../components/Form';
import profile from '../assets/images/profile.jpg'
import About from './About';
import Experience from './Experience';
import Skill from './Skill';
import Projects from './Projects';

const Home = () => {
  return (
    <div className='mt-[5rem]'>
      {/* Home */}
      <section id="home" className="min-h-screen bg-[#0b0b0c] text-white">
        <div className='w-full max-w-7xl mx-auto px-4 py-14'>
          <h1 className='text-[24px] sm:text-[30px] xl:text-[35px] font-[500] text-center'>Hello, I'm</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-8 py-10 lg:py-20">
            <div className='flex flex-col text-center lg:text-left text-[20px] font-[600]'>
              <div className="text-[24px] sm:text-[30px] xl:text-[35px] font-[500] leading-11">
                Web Designer & <br />
                Front-end Developer
              </div>
              <p className='text-gray-500 pt-2'>with 2 years of experience, I ask the necessary to create brands.</p>
            </div>

            {/* Center image */}
            <div className="flex justify-center">
              <div className="p-2 rounded-full border-1 border-[#ffc107]/50">
                <div className="p-2 rounded-full border-1 border-[#fcc51f]/70">
                  <div className="p-2 rounded-full border-1 border-[#ffc107]">
                    <img
                      src={profile}
                      alt="Profile"
                      className="w-64 xl:w-72 h-64 xl:h-72 rounded-full object-cover object-top shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>


            <div className='flex flex-col text-center lg:text-left text-[20px] font-[600]'>
              <h1 className='text-[60px] md:text-[100px] lg:text-[120px] font-[700] text-center text-[#ffc107] uppercase lg:hidden'>Teng huy</h1>

              <div className="text-[24px] sm:text-[30px] xl:text-[35px] font-[500] leading-11">
                Based in <br />
                Pre veng, CAMBODIA.
              </div>
              <p className='text-gray-500 pt-2'>and Working Worldwide Available for work.</p>
            </div>
          </div>

          <h1 className='text-[120px] font-[700] text-center text-[#ffc107] uppercase hidden lg:block'>Teng huy</h1>

        </div>
      </section>

      <div className="w-full h-[1px] bg-[#0b0b0c] flex items-center justify-center text-[#fff]">
        <a href='#about' className="mt-4 animate-bounce text-[#39393d]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      {/* about */}
      <About />

      {/* experince */}
      <Experience />

      {/* skill */}
      <Skill />

      {/* projects */}
      <Projects />

      {/* contact */}
      <section id="contact" className="min-h-screen bg-[#0b0b0c] text-white">
        <div className='w-full max-w-7xl mx-auto px-4 py-10 md:py-20'>
          <div className='flex flex-col items-center justify-center text-center'>
            <p className='text-[14px] md:text-[16px] font-[600] text-[#ffc107]' data-aos="fade-up">Get in Touch</p>
            <h1 className='text-[24px] sm:text-[30px] xl:text-[35px] font-[700] uppercase' data-aos="fade-up">Contact</h1>
            <hr className='w-[1px] h-[3rem] bg-[#39393d] border-none my-5' data-aos="fade-up" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start py-5">
            {/* Left Side */}
            <div className='px-4'>
              <article className="relative bg-[#39393d] text-white text-left p-6 sm:p-8 rounded-xl max-w-4xl mx-auto mt-10" data-aos="fade-up">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-14 h-14 rounded-full object-cover object-top border-2 border-black absolute -top-6 -left-6"
                />
                <p className="text-[20px] sm:text-[24px] text-[#ffc107] font-[600] leading-relaxed">
                  I enjoy discussing new projects challenges. 
                  <span className="pl-2 font-medium text-[#fff]">
                    Please share as much info, as possible so I can get the most out of our first catch-up.
                  </span>
                </p>
              </article>
              <div className="my-6" data-aos="fade-up">
                <h3 className="font-bold text-[20px] sm:text-[24px]">Living In:</h3>
                <p className="text-gray-300">371 Street, Phnom Penh, CAMBODIA.</p>
              </div>

              <div data-aos="fade-up">
                <h3 className="font-bold text-[20px] sm:text-[24px]">Call:</h3>
                <p className="text-gray-300">(+855) 10 800 994</p>
              </div>
            </div>

            {/* Right Side */}
            <Form />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home