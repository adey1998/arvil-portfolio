"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#0b0f19] to-black text-white overflow-hidden px-6">
      {/* Glowing Blurs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-indigo-900 opacity-30 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-700 opacity-20 rounded-full blur-2xl z-0" />

      {/* Content */}
      <motion.div
        className="z-10 text-center max-w-3xl"
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h1 className="text-6xl md:text-7xl font-poppins font-extrabold mb-4 leading-[1.1] tracking-tight drop-shadow-xl">
          Engineering outcomes, not just code.
        </h1>

        <p className="text-lg md:text-2xl font-inter text-gray-400 mb-10 max-w-2xl mx-auto">
          Fullstack software engineer + sales engineer helping teams launch faster and sell smarter.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mb-10">
          <a
            href="#about"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-poppins font-semibold px-8 py-3 rounded-full shadow-xl ring-1 ring-white/10 backdrop-blur transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          >
            About Me
          </a>
          <a
            href="#projects"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-poppins font-semibold px-8 py-3 rounded-full shadow-xl ring-1 ring-white/10 backdrop-blur transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
          >
            Projects
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 text-gray-500 animate-bounce z-10">
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
