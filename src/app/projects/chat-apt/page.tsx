"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Download } from "lucide-react";
import "react-medium-image-zoom/dist/styles.css";

export default function ChatAptProjectPage() {
  return (
    <main className="bg-[#0a0f1a] text-white min-h-screen py-20 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto space-y-16">

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#projects"
            className="text-blue-400 hover:text-blue-300 transition font-inter text-sm"
          >
            ← Back to Projects
          </Link>
        </motion.div>

        {/* Title & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-poppins font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-md">
            ChatAPT – AI-Powered Rentals for Gen Z
          </h1>
          <p className="text-lg text-gray-300 font-inter">
            Find your next apartment by just saying what matters. No filters. No forms. Just real results that match your lifestyle.
          </p>
          <p className="text-sm text-gray-500 font-inter mt-2">
            Powered by GPT-4. Designed for Gen Z.
          </p>
        </motion.div>

        {/* Video Pitch */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Quick Pitch</h2>
          <div className="aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden border border-white/10">
            <iframe
              src="https://www.loom.com/embed/YOUR_VIDEO_ID"
              title="ChatAPT Pitch Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          <p className="text-sm text-gray-400">
            A 90-second walkthrough of the product — what it solves, how it works, and why it’s built for Gen Z renters.
          </p>
        </section>

        {/* Audience Block */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Who It’s For</h2>
          <ul className="list-disc text-gray-300 text-base pl-5 space-y-2">
            <li>Gen Z renters tired of clunky filters and endless scroll</li>
            <li>Platforms looking to integrate AI-powered search</li>
            <li>Investors exploring tech-driven real estate UX</li>
          </ul>
        </section>

        {/* Why It Works – Chat Simulation */}
        <section className="space-y-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-white">Why It Works</h2>
            <p className="text-gray-400 text-base">
              It feels less like a product — and more like texting a friend who just gets it.
            </p>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="flex flex-col space-y-6"
          >
            {[
              {
                from: "user",
                text: "Looking for a 1BR near a gym and grocery store. Walkable preferred.",
              },
              {
                from: "bot",
                text: "Got it. Here are listings near local gyms, with a grocery store within 5 minutes.",
              },
              {
                from: "user",
                text: "Dog-friendly. Close to the Red Line. Not too loud.",
              },
              {
                from: "bot",
                text: "Filtered for dog-friendly spots within 10 minutes of the Red Line — all in quieter blocks.",
              },
              {
                from: "user",
                text: "Remote work vibes. Natural light. Budget under $2,500.",
              },
              {
                from: "bot",
                text: "Sorted by price, with big windows and quiet surroundings perfect for WFH.",
              },
            ].map((msg, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.015 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className={`${
                  msg.from === "user"
                    ? "self-start ml-2 bg-[#0f172a] border border-white/10 text-gray-200"
                    : "self-end mr-2 bg-[#2563eb] text-white shadow-md shadow-blue-800/20"
                } max-w-[90%] md:max-w-[65%] lg:max-w-[60%] px-4 py-3 text-sm rounded-2xl ${
                  msg.from === "user" ? "rounded-bl-sm" : "rounded-br-sm"
                }`}
              >
                {msg.text}
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Pitch Deck */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Explore the Pitch</h2>
          <p className="text-sm text-gray-400">
            Deck includes product vision, use cases, market opportunity, and rollout strategy.
          </p>
          <motion.a
            href="https://pitch.com/v/chatapt-pitch-deck-binsc3/a593c7a3-74b8-48c8-8288-ca7dfaff3720"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="group inline-flex items-center gap-2 text-sm sm:text-base text-indigo-400 font-medium px-5 py-2.5 border border-indigo-500 rounded-full hover:bg-indigo-500 hover:text-white transition-all duration-300"
          >
            <Download className="w-4 h-4 transition-transform group-hover:rotate-[-12deg]" />
            Open Pitch Deck
          </motion.a>
        </section>

        {/* Live Demo */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Try It Live</h2>
          <p className="text-sm text-gray-400">
            Experience the chat-first rental search — and see how Gen Z really wants to apartment hunt.
          </p>
          <motion.a
            href="https://www.chat-apt.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="group inline-flex items-center gap-2 text-sm sm:text-base text-blue-400 font-medium px-5 py-2.5 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            <ExternalLink className="w-4 h-4 transition-transform group-hover:rotate-[-12deg]" />
            Visit ChatAPT
          </motion.a>
        </section>

      </div>
    </main>
  );
}
