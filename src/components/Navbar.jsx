import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);

  // Detect scroll position for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const scrollY = window.scrollY + window.innerHeight / 2;
      for (const id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial run
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 py-6 transition-all duration-300 ${isScrolled ? 'bg-[#0b0b0c] border-b border-white/50' : 'bg-[#0b0b0c]'
          }`}
      >
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          <div className="text-white text-2xl font-bold tracking-widest">
            HUY<span className="text-white">.</span>
          </div>

          <div className="flex items-center space-x-4">
            {!isOpen && (
              <div className="flex items-center space-x-2 text-white">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-[16px]">Available for work</span>
              </div>
            )}

            {/* Hamburger/X icon */}
            <div
              onClick={toggleMenu}
              className="relative w-6 h-5 flex flex-col justify-between items-end cursor-pointer z-50 group"
            >
              <span
                className={`block h-[2px] bg-white transform transition-all duration-300 ease-in-out w-full ${isOpen ? 'rotate-45 translate-y-[9px]' : 'group-hover:w-1/2'
                  }`}
              ></span>
              <span
                className={`block h-[2px] bg-white transition-all duration-300 ease-in-out w-1/2 ${isOpen ? 'opacity-0' : 'group-hover:w-full'
                  }`}
              ></span>
              <span
                className={`block h-[2px] bg-white transform transition-all duration-300 ease-in-out w-full ${isOpen ? '-rotate-45 -translate-y-[9px]' : 'group-hover:w-1/2'
                  }`}
              ></span>
            </div>
          </div>
        </div>
      </nav>

      {/* Fullscreen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#0b0b0c] text-white flex flex-col items-center justify-center space-y-6 text-2xl z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {sections.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={toggleMenu}
                className={`transition duration-200 ${activeSection === id ? 'text-[#ffc107] underline' : 'hover:text-[#ffc107] hover:scale-105'
                  }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}

            <ul className='flex items-center justify-center gap-10 text-[16px] sm:text-[20px] font-[600] text-[#a8abae] pt-10'>
              <li><a href="https://www.facebook.com/ly.tenghuy.58" className='hover:underline hover:text-[#ffc107]'>Facebook</a></li>
              <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=tenghuyly2330@gmail.com" className='hover:underline hover:text-[#ffc107]'>Gmail</a></li>
              <li><a href="https://t.me/Teng_huy" className='hover:underline hover:text-[#ffc107]'>Telegram</a></li>
              <li><a href="#" className='hover:underline hover:text-[#ffc107]'>Github</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
