"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0a0f1a] text-white py-20 px-6 scroll-mt-24"
    >
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Column - Text */}
        <div>
          <h2 className="text-4xl font-extrabold mb-6 font-poppins text-blue-400">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6 font-inter">
            I&apos;m <span className="text-white font-semibold">Arvil</span>, a Fullstack Developer with a blend of technical expertise and a passion for impactful sales engineering. Specializing in backend APIs (Spring Boot) and frontend development (React, Tailwind), I bridge the gap between development and client-focused solutions.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6 font-inter">
            Currently, I&apos;m pursuing Fullstack roles while preparing for a Sales Engineer position — using my technical knowledge to deliver results through client-facing demos, storytelling, and tailored technical solutions.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed font-inter">
            Outside of work, I&apos;m building a women&apos;s health startup, blending AI with compassionate care to create innovative health solutions. My goal is to make technology more inclusive, accessible, and impactful.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed font-inter mt-6">
            Feel free to explore my <a href="#projects" className="text-blue-500 hover:underline">projects</a> or reach out if you&apos;d like to discuss how I can contribute to your team&apos;s growth!
          </p>
        </div>

        {/* Right Column - Placeholder for Image / Illustration / Icon */}
        <div className="flex justify-center md:justify-end">
          <div className="w-64 h-64 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg border border-gray-700 flex items-center justify-center text-gray-500 font-inter transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
            {/* Replace with image if available */}
            <div className="text-2xl text-white">Your Photo</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
