"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0e1015] text-gray-300 py-12 px-6">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col items-center gap-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex gap-6 text-2xl">
          <a
            href="mailto:your-email@example.com"
            className="hover:text-blue-500 transition duration-300"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>

        <hr className="w-full border-t border-gray-700 mt-8" />

        <p className="text-sm text-gray-500 font-inter">
          © 2025 Arvil. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
