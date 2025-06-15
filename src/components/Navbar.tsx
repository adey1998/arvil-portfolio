"use client";
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth',
  //   });
  // };

  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
        {/* Logo */}
        {/* <button onClick={scrollToTop} className="text-2xl font-poppins font-semibold text-blue-500 hover:text-blue-400 transition-all">
          Portfolio
        </button> */}

        {/* Desktop Menu */}
        <div className="ml-auto space-x-8 hidden md:flex">
          <Link href="#about" className="text-m hover:text-blue-400 transition-all font-inter relative group">
            About
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link href="#projects" className="text-m hover:text-blue-400 transition-all font-inter relative group">
            Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link href="#contact" className="text-m hover:text-blue-400 transition-all font-inter relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-400 scale-x-0 transition-all duration-300 group-hover:scale-x-100"></span>
          </Link>
        </div>

        {/* Mobile Menu Toggle (Positioned on the right) */}
        <div className="md:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="text-3xl text-white transition-all transform duration-300"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              // More recognizable close (X) icon
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full right-0 w-full z-50 md:hidden bg-black/80 backdrop-blur-sm"
          >
            <div className="flex flex-col px-6 py-6 divide-y divide-white/10 items-center text-center">
              <Link href="#about" onClick={() => setIsOpen(false)} className="text-white text-m hover:text-blue-400 transition-all font-inter py-2">
                About
              </Link>
              <Link href="#projects" onClick={() => setIsOpen(false)} className="text-white text-m hover:text-blue-400 transition-all font-inter py-2">
                Projects
              </Link>
              <Link href="#contact" onClick={() => setIsOpen(false)} className="text-white text-m hover:text-blue-400 transition-all font-inter py-2">
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
