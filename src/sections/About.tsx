"use client";
import { motion } from "framer-motion";
import Image from 'next/image';

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
            I&apos;m <span className="text-white font-semibold">Arvil</span> — a full-stack engineer with a solid backend base (Spring Boot, Node.js) and a love for building smooth frontends with React, Next.js, and Vue. I enjoy designing clean, scalable systems — but just as much, I enjoy working directly with people.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6 font-inter">
            Alongside engineering, I&apos;ve also worked in technical pre-sales, where I&apos;ve run live demos, scoped out solutions, and helped customers understand how the tech actually solves their problems. I love the mix of deep tech and clear communication — turning features into something real and valuable for clients.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6 font-inter">
            I&apos;ve shipped containerized apps with Docker, built out CI/CD pipelines, and deployed to platforms like Render, AWS, and Azure. Whether I&apos;m coding, storytelling, or mapping out solutions with a sales team — that&apos;s where I&apos;m in my zone.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed font-inter">
            Outside of work, I&apos;m building a cancer screening platform that uses AI and NLP to help clinics catch disease earlier. It&apos;s meaningful, mission-driven work — and it&apos;s what keeps me excited about tech.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed font-inter mt-6">
            Feel free to check out my <a href="#projects" className="text-blue-500 hover:underline">projects</a> or reach out — I&apos;m always up for solving hard problems and building meaningful things.
          </p>
        </div>



        {/* Right Column - Placeholder for Image / Illustration / Icon */}
        <div className="flex justify-center md:justify-end items-center">
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-lg border border-gray-700 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
            <Image
              src="/images/about/portfolio-pic.jpg"
              alt="Profile photo"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>

      </motion.div>
    </section>
  );
}
