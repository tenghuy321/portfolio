import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'


import { motion, AnimatePresence } from 'framer-motion'

import html from '../assets/images/logos/html.png'
import css from '../assets/images/logos/css.png'
import javascript from '../assets/images/logos/javascript.png'
import bootstrap from '../assets/images/logos/bootstrap.png'
import tailwind from '../assets/images/logos/tailwind.png'
import reactjs from '../assets/images/logos/reactjs.png'
import angular from '../assets/images/logos/angular.png'
import nodejs from '../assets/images/logos/nodejs.png'
import php from '../assets/images/logos/php.png'
import laravel from '../assets/images/logos/laravel.png'
import mysql from '../assets/images/logos/mysql.png'
import mongodb from '../assets/images/logos/mongodb.png'
import adobexd from '../assets/images/logos/adobexd.png'
import figma from '../assets/images/logos/figma.png'

import Pro1_image1 from '../assets/images/Project1/image-1.png'
import Pro1_image2 from '../assets/images/Project1/image-2.png'
import Pro1_image3 from '../assets/images/Project1/image-3.png'
import Pro1_image4 from '../assets/images/Project1/image-4.png'

import Pro2_image1 from '../assets/images/Project2/image-1.png'
import Pro2_image2 from '../assets/images/Project2/image-2.png'
import Pro2_image3 from '../assets/images/Project2/image-3.png'
import Pro2_image4 from '../assets/images/Project2/image-4.png'

import Pro3_image1 from '../assets/images/Project3/image-1.png'
import Pro3_image2 from '../assets/images/Project3/image-2.png'
import Pro3_image3 from '../assets/images/Project3/image-3.png'
import Pro3_image4 from '../assets/images/Project3/image-4.png'

import Pro4_image1 from '../assets/images/Project4/image-1.png'
import Pro4_image2 from '../assets/images/Project4/image-2.png'
import Pro4_image3 from '../assets/images/Project4/image-3.png'
import Pro4_image4 from '../assets/images/Project4/image-4.png'

import Pro5_image1 from '../assets/images/Project5/image-1.png'
import Pro5_image2 from '../assets/images/Project5/image-2.png'
import Pro5_image3 from '../assets/images/Project5/image-3.png'
import Pro5_image4 from '../assets/images/Project5/image-4.png'

import Pro6_image1 from '../assets/images/Project6/image-1.png'
import Pro6_image2 from '../assets/images/Project6/image-2.png'
import Pro6_image3 from '../assets/images/Project6/image-3.png'
import Pro6_image4 from '../assets/images/Project6/image-4.png'

import Pro7_image1 from '../assets/images/Project7/image-1.png'
import Pro7_image2 from '../assets/images/Project7/image-2.png'
import Pro7_image3 from '../assets/images/Project7/image-3.png'
import Pro7_image4 from '../assets/images/Project7/image-4.png'

import Pro8_image1 from '../assets/images/Project8/image-1.png'
import Pro8_image2 from '../assets/images/Project8/image-2.png'
import Pro8_image3 from '../assets/images/Project8/image-3.png'
import Pro8_image4 from '../assets/images/Project8/image-4.png'

import Pro9_image1 from '../assets/images/Project9/image-1.png'
import Pro9_image2 from '../assets/images/Project9/image-2.png'
import Pro9_image3 from '../assets/images/Project9/image-3.png'
import Pro9_image4 from '../assets/images/Project9/image-4.png'

import Pro10_image1 from '../assets/images/Project10/image-1.png'
import Pro10_image2 from '../assets/images/Project10/image-2.png'
import Pro10_image3 from '../assets/images/Project10/image-3.png'
import Pro10_image4 from '../assets/images/Project10/image-4.png'

import Pro11_image1 from '../assets/images/Project11/image-1.png'
import Pro11_image2 from '../assets/images/Project11/image-2.png'
import Pro11_image3 from '../assets/images/Project11/image-3.png'
import Pro11_image4 from '../assets/images/Project11/image-4.png'

import Pro12_image1 from '../assets/images/Project12/image-1.png'
import Pro12_image2 from '../assets/images/Project12/image-2.png'
import Pro12_image3 from '../assets/images/Project12/image-3.png'
import Pro12_image4 from '../assets/images/Project12/image-4.png'


import Des1_image1 from '../assets/images/Design1/image-1.png'
import Des1_image2 from '../assets/images/Design1/image-2.png'
import Des1_image3 from '../assets/images/Design1/image-3.png'

import Des2_image1 from '../assets/images/Design2/image-1.png'
import Des2_image2 from '../assets/images/Design2/image-2.png'
import Des2_image3 from '../assets/images/Design2/image-3.png'
import Des2_image4 from '../assets/images/Design2/image-4.png'

import Des3_image1 from '../assets/images/Design3/image-1.png'
import Des3_image2 from '../assets/images/Design3/image-2.png'
import Des3_image3 from '../assets/images/Design3/image-3.png'
import Des3_image4 from '../assets/images/Design3/image-4.png'

import Des4_image1 from '../assets/images/Design4/image-1.png'
import Des4_image2 from '../assets/images/Design4/image-2.png'
import Des4_image3 from '../assets/images/Design4/image-3.png'
import Des4_image4 from '../assets/images/Design4/image-4.png'

import Des5_image1 from '../assets/images/Design5/image-1.png'
import Des5_image2 from '../assets/images/Design5/image-2.png'
import Des5_image3 from '../assets/images/Design5/image-3.png'
import Des5_image4 from '../assets/images/Design5/image-4.png'

import Des6_image1 from '../assets/images/Design6/image-1.png'
import Des6_image2 from '../assets/images/Design6/image-2.png'
import Des6_image3 from '../assets/images/Design6/image-3.png'

import Land1_image1 from '../assets/images/LandingPage1/image-1.png'
import Land1_image2 from '../assets/images/LandingPage1/image-2.png'
import Land1_image3 from '../assets/images/LandingPage1/image-3.png'
import Land1_image4 from '../assets/images/LandingPage1/image-4.png'

import Land2_image1 from '../assets/images/LandingPage2/image-1.png'
import Land2_image2 from '../assets/images/LandingPage2/image-2.png'
import Land2_image3 from '../assets/images/LandingPage2/image-3.png'

import Land3_image1 from '../assets/images/LandingPage3/image-1.png'
import Land3_image2 from '../assets/images/LandingPage3/image-2.png'
import Land3_image3 from '../assets/images/LandingPage3/image-3.png'


const Projects = () => {


  const [selectedProject, setSelectedProject] = useState(null)

  const logos = [
    html,
    css,
    javascript,
    bootstrap,
    tailwind,
    reactjs,
    angular,
    nodejs,
    php,
    laravel,
    mysql,
    mongodb,
    adobexd,
    figma
  ]

  const repeatedLogos = [...logos, ...logos]

  const projects = [
    {
      id: 1,
      category: 'Development',
      title: 'Web Design & Development',
      client: 'Exerex Express',
      date: '2025-01-03',
      description: "A clean and responsive website built for Exerex Express, focusing on intuitive UX, modern UI, and fast performance. The project covers full design and development, ensuring smooth navigation, mobile optimization, and a user-friendly experience.",
      link: 'https://everex.app/',
      tags: ['UX/UI Design', 'Web Development'],
      images: [Pro1_image1, Pro1_image2, Pro1_image3, Pro1_image4],
    },
    {
      id: 2,
      category: 'Landing Page Design',
      title: 'Pratice Design',
      images: [Des1_image1, Des1_image2, Des1_image3],
      link: 'https://www.figma.com/design/nK8lr46fMSWy9AYAjewws4/Hosting?node-id=2-3&t=lRrNmF39xvbqE1yw-1',
      client: 'Pratice Design',
      date: '2025-01-03',
      description: "A clean and responsive website built for Exerex Express, focusing on intuitive UX, modern UI, and fast performance. The project covers full design and development, ensuring smooth navigation, mobile optimization, and a user-friendly experience.",
      tags: ['UX/UI Design'],
    },
    {
      id: 3,
      category: 'Development',
      title: 'Development',
      images: [Pro2_image1, Pro2_image2, Pro2_image3, Pro2_image4],
      link: 'https://www.xinyuanli.biz/',
      client: 'Xinyuan Li',
      date: '2025-01-03',
      description: "A clean and responsive website built for Xinyuan Li, focusing on intuitive UX, modern UI, and fast performance. The project covers full design and development, ensuring smooth navigation, mobile optimization, and a user-friendly experience.",
      tags: ['UX/UI Design', 'Web Development'],
    },
    {
      id: 4,
      category: 'Development',
      title: 'Web Design & Development',
      images: [Pro3_image1, Pro3_image2, Pro3_image3, Pro3_image4],
      link: 'https://www.dsdlconsulting.com.kh/',
      client: 'DSDL Consulting',
      date: '2025-01-03',
      description: "A clean and responsive website built for DSDL Consulting, focusing on intuitive UX, modern UI, and fast performance. The project covers full design and development, ensuring smooth navigation, mobile optimization, and a user-friendly experience.",
      tags: ['UX/UI Design', 'Web Development'],
    },
    {
      id: 5,
      category: 'Development',
      title: 'Development',
      images: [Pro4_image1, Pro4_image2, Pro4_image3, Pro4_image4],
      link: 'https://www.yoceecambodia.com/',
      client: 'Yocee Cambodia',
      date: '2025-01-03',
      description: "A clean and responsive website built for Yocee Cambodia, focusing on intuitive UX, modern UI, and fast performance. The project covers full design and development, ensuring smooth navigation, mobile optimization, and a user-friendly experience.",
      tags: ['UX/UI Design', 'Web Development'],
    },
    {
      id: 6,
      category: 'Development',
      title: 'Web Design & Development',
      images: [Pro5_image1, Pro5_image2, Pro5_image3, Pro5_image4],
      link: 'https://www.antipest.com.kh/',
      client: 'Anti Pest',
      date: '2025-01-03',
      description: "A clean and responsive website built for Anti Pest, focusing on intuitive UX, modern UI, and fast performance. The project covers full design and development, ensuring smooth navigation, mobile optimization, and a user-friendly experience.",
      tags: ['UX/UI Design', 'Web Development'],
    },
    {
      id: 7,
      category: 'Development',
      title: 'Web Design & Development',
      images: [Pro6_image1, Pro6_image2, Pro6_image3, Pro6_image4],
      link: 'https://palevioletred-gazelle-629277.hostingersite.com/',
      client: 'Shalom Solution',
      date: '2025-01-03',
      description: "A clean and responsive website built for Shalom Solution, focusing on intuitive UX, modern UI, and fast performance. The project covers full design and development, ensuring smooth navigation, mobile optimization, and a user-friendly experience.",
      tags: ['UX/UI Design', 'Web Development', 'SEO', 'Social Media Marketing'],
    },
    {
      id: 8,
      category: 'Development',
      title: 'Web Design & Development',
      images: [Pro7_image1, Pro7_image2, Pro7_image3, Pro7_image4],
      link: 'https://wattanahomeservices.com/',
      client: 'Wattana Home Services',
      date: '2025-01-03',
      description: "A clean and responsive website built for Wattana Home Services, focusing on intuitive UX, modern UI, and fast performance. The project covers full design and development, ensuring smooth navigation, mobile optimization, and a user-friendly experience.",
      tags: ['UX/UI Design', 'Web Development'],
    },
    {
      id: 9,
      category: 'Development',
      title: 'Development',
      images: [Pro8_image1, Pro8_image2, Pro8_image3, Pro8_image4],
      link: 'https://a2zmep.com/',
      client: 'A2Z MEP',
      date: '2025-01-03',
      description: "A clean and responsive website built for A2Z MEP, focusing on intuitive UX, modern UI, and fast performance. The project covers full design and development, ensuring smooth navigation, mobile optimization, and a user-friendly experience.",
      tags: ['UX/UI Design', 'Web Development'],
    },

    {
      id: 10,
      category: 'Development',
      title: 'Development',
      images: [Pro9_image1, Pro9_image2, Pro9_image3, Pro9_image4],
      link: 'https://chhunxinggroup.com/',
      client: 'Chun Xing Group',
      date: '2025-01-03',
      description: "A clean and responsive website built for Chun Xing Group, focusing on intuitive UX, modern UI, and fast performance. The project covers full design and development, ensuring smooth navigation, mobile optimization, and a user-friendly experience.",
      tags: ['UX/UI Design', 'Web Development'],
    },

    {
      id: 11,
      category: 'Development',
      title: 'Development',
      images: [Pro10_image1, Pro10_image2, Pro10_image3, Pro10_image4],
      link: 'https://bpp-houlpamoung.com/',
      client: 'BPP Houl Pa Moung',
      date: '2025-01-03',
      description: "A clean and responsive website built for BPP Houl Pa Moung, focusing on intuitive UX, modern UI, and fast performance. The project covers full design and development, ensuring smooth navigation, mobile optimization, and a user-friendly experience.",
      tags: ['UX/UI Design', 'Web Development'],
    },
    {
      id: 12,
      category: 'Development',
      title: 'Development',
      images: [Pro11_image1, Pro11_image2, Pro11_image3, Pro11_image4],
      link: 'https://ege-energysolutions.com.kh/',
      client: 'EGE Energy Solutions',
      date: '2025-01-03',
      description: "A clean and responsive website built for EGE Energy Solutions, focusing on intuitive UX, modern UI, and fast performance. The project covers full design and development, ensuring smooth navigation, mobile optimization, and a user-friendly experience.",
      tags: ['UX/UI Design', 'Web Development'],
    },
    {
      id: 13,
      category: 'Development',
      title: 'Development',
      images: [Pro12_image1, Pro12_image2, Pro12_image3, Pro12_image4],
      link: 'https://reflexdecor-construction.com/',
      client: 'Reflex Decor Construction',
      date: '2025-01-03',
      description: "A clean and responsive website built for Reflex Decor Construction, focusing on intuitive UX, modern UI, and fast performance. The project covers full design and development, ensuring smooth navigation, mobile optimization, and a user-friendly experience.",
      tags: ['UX/UI Design', 'Web Development'],
    },
    {
      id: 14,
      category: 'Design',
      title: 'Web Design',
      images: [Des2_image1, Des2_image2, Des2_image3, Des2_image4],
      link: 'https://www.figma.com/design/7mvvD7Hnq7C3m5u2qcD837/Real-Estate-Mobile?node-id=0-1&t=8xQfM6TwGKYU8Ld5-1',
      client: 'Real Estate',
      date: '2025-01-03',
      description: "A modern real estate mobile web design focused on clean layout, bold typography, and intuitive user flow. Designed to simplify property browsing with a sleek UI, strong visual hierarchy, and mobile-first UX approach.",
      tags: ['UX/UI Design'],
    },
    {
      id: 15,
      category: 'Design',
      title: 'UI Dashboard',
      images: [Des3_image1, Des3_image2, Des3_image3, Des3_image4],
      link: 'https://www.figma.com/design/wEcJipfuIIlg5ePHBxnwZs/RealEstateAdminDashboard?node-id=0-1&t=SxPgvJDL8fRBg6uc-1',
      client: 'UI Dashboard',
      date: '2025-01-03',
      description: "A clean and functional admin dashboard UI for real estate management. Focused on data clarity, responsive layout, and intuitive navigation to enhance the user experience for property administrators and agents.",
      tags: ['UX/UI Design'],
    },
    {
      id: 16,
      category: 'Design',
      title: 'Pratice Design',
      images: [Des4_image1, Des4_image2, Des4_image3, Des4_image4],
      link: 'https://www.figma.com/design/aJZAmVnURp2wW3dgfdOyd8/01_Home?node-id=408-29&t=sQp3ELY1qU0UyZo1-1',
      client: 'Pratice Design',
      date: '2025-01-03',
      description: "This landing page design explores a modern, clean aesthetic with a focus on typography contrast and visual hierarchy. The goal was to strike a balance between delicate, minimalist sans-serif fonts and strong, bold headers to create a sense of both elegance and impact. The layout emphasizes clarity and user flow, using generous white space, strategic color accents, and high-quality imagery to guide the viewer's attention. Designed as a personal practice project, it demonstrates attention to detail in UX/UI design principles, particularly around accessibility, readability, and visual storytelling..",
      tags: ['UX/UI Design'],
    },
    {
      id: 17,
      category: 'Landing Page Design',
      title: 'Landing Page Design',
      images: [Land1_image1, Land1_image2, Land1_image3, Land1_image4],
      link: 'https://www.figma.com/design/BJ9DG5Hdvm8UtYWnIG73un/Elern?node-id=3-58&t=btXvH7PD8RytgqET-1',
      client: 'Landing Page Design',
      date: '2025-01-03',
      description: "This landing page design explores a modern, clean aesthetic with a focus on typography contrast and visual hierarchy. The goal was to strike a balance between delicate, minimalist sans-serif fonts and strong, bold headers to create a sense of both elegance and impact. The layout emphasizes clarity and user flow, using generous white space, strategic color accents, and high-quality imagery to guide the viewer's attention. Designed as a personal practice project, it demonstrates attention to detail in UX/UI design principles, particularly around accessibility, readability, and visual storytelling.",
      tags: ['UX/UI Design'],
    },
    {
      id: 18,
      category: 'Design',
      title: 'Plant Shop Design',
      images: [Des5_image1, Des5_image2, Des5_image3, Des5_image4],
      link: 'https://www.figma.com/design/gileypsi4BDvnjDEArEY5V/Planti?node-id=0-1&t=pOcL6qGY0KgFv7Jd-1',
      client: 'Plant Shop Design',
      date: '2025-01-03',
      description: "A fresh and minimal plant shop UI design combining elegant typography, earthy color tones, and smooth layout to create a calming, user-friendly shopping experience. Built with a focus on aesthetics and usability.",
      tags: ['UX/UI Design'],
    },
    {
      id: 19,
      category: 'Landing Page Design',
      title: 'Some Practice Design',
      images: [Land2_image1, Land2_image2, Land2_image3],
      link: 'https://www.figma.com/design/gileypsi4BDvnjDEArEY5V/Planti?node-id=0-1&t=pOcL6qGY0KgFv7Jd-1',
      client: 'Some Practice Design',
      date: '2025-01-03',
      description: "This landing page design explores a modern, clean aesthetic with a focus on typography contrast and visual hierarchy. The goal was to strike a balance between delicate, minimalist sans-serif fonts and strong, bold headers to create a sense of both elegance and impact. The layout emphasizes clarity and user flow, using generous white space, strategic color accents, and high-quality imagery to guide the viewer's attention. Designed as a personal practice project, it demonstrates attention to detail in UX/UI design principles, particularly around accessibility, readability, and visual storytelling.",
      tags: ['UX/UI Design'],
    },
    {
      id: 20,
      category: 'Landing Page Design',
      title: 'Some Practice Design',
      images: [Land3_image1, Land3_image2, Land3_image3],
      link: 'https://www.figma.com/design/gileypsi4BDvnjDEArEY5V/Planti?node-id=0-1&t=pOcL6qGY0KgFv7Jd-1',
      client: 'Some Practice Design',
      date: '2025-01-03',
      description: "This landing page design explores a modern, clean aesthetic with a focus on typography contrast and visual hierarchy. The goal was to strike a balance between delicate, minimalist sans-serif fonts and strong, bold headers to create a sense of both elegance and impact. The layout emphasizes clarity and user flow, using generous white space, strategic color accents, and high-quality imagery to guide the viewer's attention. Designed as a personal practice project, it demonstrates attention to detail in UX/UI design principles, particularly around accessibility, readability, and visual storytelling.",
      tags: ['UX/UI Design'],
    },
    {
      id: 21,
      category: 'Design',
      title: 'UX/UI Design',
      images: [Des6_image1, Des6_image2, Des6_image3],
      link: 'https://www.figma.com/design/ybuQNC1mtZL9oCBeVgAgtq/car-sale?node-id=0-1&t=lLMeaY2t951XWyeH-1',
      client: 'UX/UI Design',
      date: '2025-01-03',
      description: "This UX/UI design project focuses on creating an intuitive and visually engaging interface for a car sale platform. The objective was to craft a modern, user-friendly experience that simplifies vehicle browsing and comparison while maintaining a sleek, professional look. The design combines clean layouts, bold typography, and a well-structured hierarchy to enhance usability and readability. Emphasis was placed on smooth navigation, filter clarity, and responsive interaction elements—ensuring a seamless journey for users across devices. This project demonstrates a strong understanding of UX thinking paired with contemporary UI aesthetics.",
      tags: ['UX/UI Design'],
    },
  ]



  const openModal = (project) => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }


  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  const categories = ['All', 'Design', 'Development', 'Landing Page Design']

  return (
    <section id='projects' className="min-h-screen bg-[#0b0b0c] text-white">
      <div className='w-full max-w-7xl mx-auto px-4 py-10 md:py-20'>
        <div className='flex flex-col items-center justify-center text-center'>
          <p className='text-[14px] md:text-[16px] font-[600] text-[#ffc107]' data-aos="fade-up">My Work</p>
          <h1 className='text-[24px] sm:text-[30px] xl:text-[35px] font-[700] uppercase' data-aos="fade-up">Projects</h1>
          <hr className='w-[1px] h-[3rem] bg-[#39393d] border-none my-5' data-aos="fade-up" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-lg font-medium my-10" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 transition-all border-b-2 ${activeCategory === cat
                ? 'text-[#ffc107] border-[#ffc107]'
                : 'text-white border-transparent hover:border-[#ffc107]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8" data-aos="fade-up">
          <AnimatePresence mode="wait" > 
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#ffc107]/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                  <p className="text-[14px] md:text-[16px] font-[600] mb-3 text-[#39393d]">{project.category}</p>
                  <div className='flex items-center gap-4'>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-[#fff] text-black rounded-md hover:bg-[#ffc107] transition"
                    >
                      View Project
                    </a>
                    <button
                      onClick={() => openModal(project)}
                      className="px-4 py-2 bg-black text-white rounded-md hover:bg-[#ffc107] hover:text-black transition"
                    >
                      More Detail
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center px-4">
          <div className="relative max-w-5xl w-full bg-[#0b0b0c] text-white rounded-xl shadow-lg overflow-y-auto max-h-[90vh] p-6 md:p-10 gap-6 no-scroll">

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white hover:text-[#ffc107] text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Left: Text Content */}
            <div>
              <div className='flex flex-col items-center justify-center text-center'>
                <p className='text-[14px] md:text-[16px] font-[600] text-[#ffc107]'>{selectedProject.title}</p>
                <h1 className='text-[24px] sm:text-[30px] xl:text-[35px] font-[700] uppercase'>Project Title</h1>
                <hr className='w-[1px] h-[3rem] bg-[#39393d] border-none my-5' />
              </div>

              <p className="text-sm leading-relaxed text-gray-300 mb-6">
                {selectedProject.description}
              </p>


              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-[20px] text-[#fff] font-[600]">
                <p><span className="text-[#39393d] text-[16px]">Client:</span> <br /> {selectedProject.client}</p>
                <p><span className="text-[#39393d] text-[16px]">Industry:</span> <br /> Art & Design</p>
                <p><span className="text-[#39393d] text-[16px]">Date:</span> <br /> {selectedProject.date}</p>
                <p>
                  <span className="text-[#39393d] text-[16px]">URL:</span> <br />
                  <a href={selectedProject.link} target="_blank" className="text-[#ffc107] underline hover:text-[#e7c970]">Live Preview</a>
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 items-center justify-center py-10">
                {selectedProject.tags?.map((tag, i) => (
                  <span key={i} className="border border-gray-400 text-[16px] md:text-[20px] px-6 py-2 rounded-full">{tag}</span>
                ))}
              </div>
            </div>

            <div className="w-full pb-10 relative">
              <Swiper
                modules={[Pagination, Autoplay]}
                autoplay={true}
                loop={true}
                pagination={{ clickable: true }}
                spaceBetween={20}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                }}
                className="w-full custom-swiper"
              >
                {selectedProject.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Slide ${index}`}
                      className="rounded-lg h-[300px] w-full object-cover" loading='lazy'
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>


          </div>
        </div>
      )}


      <div className="w-full overflow-hidden space-y-6 pb-10">
        <div className="slider-left flex items-center gap-8 py-4">
          {repeatedLogos.map((logo, index) => (
            <div
              key={`left-${index}`}
              className="min-w-[250px] h-[150px] flex items-center justify-center border border-gray-700 rounded-xl p-4 hover:scale-105 transition-transform bg-[#0e0d0e]"
            >
              <img
                src={logo}
                alt="logo"
                className="max-h-28 grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

        <div className="slider-right flex items-center gap-8 py-4">
          {repeatedLogos.map((logo, index) => (
            <div
              key={`right-${index}`}
              className="min-w-[250px] h-[150px] flex items-center justify-center border border-gray-700 rounded-xl p-4 hover:scale-105 transition-transform bg-[#0e0d0e]"
            >
              <img
                src={logo}
                alt="logo"
                className="max-h-28 grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects