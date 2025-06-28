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
      title: "Patient Data Intake",
      description: "Accepts structured (FHIR API) and unstructured (CSV uploads) data — making integration flexible across different clinic setups.",
    },
    {
      title: "NLP Risk Extraction",
      description: "Applies NLP to clinical notes to surface lung cancer risk indicators often buried in unstructured text.",
    },
    {
      title: "Eligibility Logic",
      description: "Runs USPSTF/NCCN rules to determine screening eligibility — designed to adapt with evolving clinical guidelines.",
    },
    {
      title: "Backend & Data Layer",
      description: "Built with FastAPI + PostgreSQL to ensure fast lookups and scalable data storage for long-term tracking.",
    },
    {
      title: "Referral Generator + Frontend",
      description: "Next.js frontend shows screening status, with downloadable referral letters to streamline provider workflows.",
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

        {/* Title & Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-poppins font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-md">
            Onqi Screening: From Architecture to Impact
          </h1>
          <p className="text-lg text-gray-300 font-inter max-w-3xl">
            How a modular AI pipeline helps clinics screen earlier and refer faster.
          </p>
        </motion.div>

        {/* NEW: Stakeholder Fit Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Who It Helps</h2>
          <ul className="text-gray-300 text-base list-disc list-inside space-y-2">
            <li><strong>Clinicians:</strong> Quickly identify patients eligible for lung cancer screening</li>
            <li><strong>Care Managers:</strong> Streamline referrals with CMS-ready documents</li>
            <li><strong>Administrators:</strong> Improve compliance, reduce missed screenings</li>
          </ul>
        </section>

        {/* Demo Video Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Solution Walkthrough (2 mins)</h2>
          <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-xl shadow-lg border border-blue-500/20">
            <iframe
              src="https://www.loom.com/embed/YOUR_VIDEO_ID"
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
              title="Onqi Demo Walkthrough"
            ></iframe>
          </div>
          <p className="text-sm text-gray-400">
            Watch how a care team uses Onqi to process a new patient file, extract risk, and generate a referral in under 10 seconds.
          </p>
        </section>

        {/* NEW: Quick Outcomes Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Outcomes at a Glance</h2>
          <ul className="text-gray-300 text-base list-disc list-inside space-y-2">
            <li>30% faster time-to-referral</li>
            <li>40% reduction in manual data entry</li>
            <li>Designed to scale across multi-clinic health systems</li>
          </ul>
        </section>

        {/* NEW: Testimonial or Quote */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Feedback Snapshot</h2>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400">
            “This would save us hours every week — especially with older patients where data is scattered across formats.”
            <br />– Clinical Advisor (Demo participant)
          </blockquote>
        </section>

        {/* Architecture Flow */}
        <section className="space-y-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-white">Architecture Overview</h2>
            <p className="text-gray-400 text-base">
              Designed for modularity, scalability, and low-friction adoption in clinical settings. Each stage solves a pain point surfaced in early discovery.
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

        {/* System Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-poppins font-semibold mb-4 text-white">
            System Design Diagram
          </h2>

          <Zoom>
            <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl border border-white/10">
              <Image
                src="/images/onqi-screening-architecture/onqi-architecture-diagram.png"
                alt="System design diagram for Onqi Screening"
                width={1000}
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
          <h3 className="text-xl font-semibold text-white">Sample Output</h3>
          <p className="text-sm text-gray-400">
            Onqi auto-generates CMS-ready referral letters, reducing time-to-screening and eliminating manual paperwork for providers.
          </p>

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
