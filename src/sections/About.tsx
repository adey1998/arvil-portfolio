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
            I&apos;m <span className="text-white font-semibold">Arvil</span>, a fullstack engineer with a strong foundation in backend APIs (Spring Boot, Node.js) and modern frontend frameworks (React, Next.js, Vue). I love building clean, scalable systems — but just as much, I love working with people.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6 font-inter">
            I'm currently pivoting into Sales Engineering — bringing my technical skills into client-facing roles where I can run demos, solve problems, and communicate solutions that actually land. I’ve worked across both engineering and pre-sales, and I get a kick out of helping customers connect the dots.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6 font-inter">
            I've deployed containerized apps with Docker and CI/CD pipelines, and launched on platforms like Render, AWS, and Azure. Whether it's coding, storytelling, or translating features into value — I’m in my zone.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed font-inter">
            On the side, I’m building a cancer screening platform that uses AI and NLP to help clinics catch disease earlier and save lives. It's mission-driven work, and it’s what keeps me fired up about tech.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed font-inter mt-6">
            Feel free to check out my <a href="#projects" className="text-blue-500 hover:underline">projects</a> or reach out — I’m always up for solving hard problems and building meaningful things.
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
