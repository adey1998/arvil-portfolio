"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

export default function OnqiArchitectureClean() {
  const pipeline = [
    {
      title: "FHIR / CSV Input",
      description: "Takes in both structured (FHIR API) and unstructured (CSV uploads) patient data.",
    },
    {
      title: "NLP Extraction",
      description: "Processes clinical notes using NLP to extract risk indicators and screening-relevant features.",
    },
    {
      title: "Eligibility Rules Engine",
      description: "Determines patient eligibility using clinical criteria from USPSTF and NCCN guidelines.",
    },
    {
      title: "Backend API + Database",
      description: "FastAPI backend persists screening results to PostgreSQL and serves structured endpoints.",
    },
    {
      title: "Frontend + Referral Output",
      description: "Next.js frontend displays results, with downloadable referral letter generation for clinics.",
    },
  ];

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

        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-poppins font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-md">
            Onqi Screening – Solution Architecture
          </h1>
          <p className="text-lg text-gray-300 font-inter">
            A visual breakdown of how Onqi identifies high-risk patients using structured and unstructured clinical data, NLP pipelines, and eligibility logic.
          </p>
        </motion.div>

        {/* Architecture Flow */}
        <section className="space-y-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-white">Architecture Flow</h2>
            <p className="text-gray-400 text-base">
              A step-by-step breakdown of how Onqi processes patient data—from input to referral output using modular and scalable components.
            </p>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {pipeline.map((stage, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="relative bg-[#111827] border border-blue-500/10 rounded-2xl p-6 hover:shadow-blue-500/20 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="absolute -top-4 left-4 w-8 h-8 text-sm font-bold text-white bg-blue-500 rounded-full flex items-center justify-center shadow">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2 pt-2">
                  {stage.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-poppins font-semibold mb-4 text-white">
            Architecture Diagram
          </h2>

          <Zoom>
            <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl border border-white/10">
              <Image
                src="/images/onqi-screening-architecture/onqi-architecture-diagram.png"
                alt="System design diagram for Onqi Screening"
                width={1000} // reduce from 1200
                height={0}
                sizes="100vw"
                unoptimized
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </Zoom>
        </motion.div>

        {/* Referral Sample */}
        <section className="space-y-4">
          <div className="text-sm text-gray-400">
            Here&apos;s what Onqi generates for eligible patients — a CMS-ready referral letter.
          </div>

          <motion.a
            href="/docs/Sample Referral.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 250 }}
            className="group inline-flex items-center gap-2 text-sm sm:text-base text-blue-400 font-medium px-5 py-2.5 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            <Download className="w-4 h-4 transition-transform group-hover:rotate-[-12deg]" />
            View Sample Referral (PDF)
          </motion.a>
        </section>
      </div>
    </main>
  );
}
