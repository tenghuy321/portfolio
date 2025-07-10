import { useState } from 'react'

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

import image1 from '../assets/images/Project1/image-1.png'
import image2 from '../assets/images/Project1/image-2.png'
import image3 from '../assets/images/Project1/image-3.png'

const Projects = () => {

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
  ]

  const repeatedLogos = [...logos, ...logos]



  const projects = [
    {
      id: 1,
      category: 'Development',
      title: 'Shalom Solutions',
      image: image1,
      link: 'https://example.com/project1',
    },
    {
      id: 2,
      category: 'Design',
      title: 'UI Dashboard',
      image: 'image1',
      link: 'https://example.com/project2',
    },
    {
      id: 3,
      category: 'Development',
      title: 'E-Commerce Backend',
      image: image2,
      link: 'https://example.com/project5',
    },
    {
      id: 4,
      category: 'Development',
      title: 'E-Commerce Backend',
      image: image3,
      link: 'https://example.com/project5',
    },
    {
      id: 5,
      category: 'Development',
      title: 'E-Commerce Backend',
      image: image2,
      link: 'https://example.com/project5',
    },
  ]

  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  const categories = ['All', 'Design', 'Development']

  return (
    <section id='projects' className="min-h-screen bg-[#0b0b0c] text-white">
      <div className='w-full max-w-7xl mx-auto px-4 py-10 md:py-20'>
        <div className='flex flex-col items-center justify-center text-center'>
          <p className='text-[14px] md:text-[16px] font-[600] text-[#ffc107]'>My Work</p>
          <h1 className='text-[24px] sm:text-[30px] xl:text-[35px] font-[700] uppercase'>Projects</h1>
          <hr className='w-[1px] h-[3rem] bg-[#39393d] border-none my-5' />
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-lg font-medium my-10">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#ffc107] bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                <p className="text-sm mb-3 text-[#39393d]">{project.category}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#fff] text-black rounded-md hover:bg-yellow-600 transition"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

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