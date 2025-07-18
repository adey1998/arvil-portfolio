"use client";
import {
  Users,
  DollarSign,
  Stethoscope,
  ClipboardCheck,
  Clock3,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Download, PlayCircle, FileText } from "lucide-react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

export default function OnqiArchitectureClean() {
  const pipeline = [
    {
      title: "Patient Data Intake",
      description: "Accepts structured (FHIR API) and unstructured (CSV uploads) data — enabling rapid integration with diverse EHRs.",
    },
    {
      title: "NLP Risk Extraction",
      description: "Uses ScispaCy + MedSpaCy to identify lung cancer risk factors (pack-years, secondhand exposure, job risks) from clinical notes.",
    },
    {
      title: "Eligibility Rules Engine",
      description: "Applies USPSTF/NCCN guidelines through configurable logic to flag patients — even those not CMS-eligible — who may benefit from screening.",
    },
    {
      title: "Backend & Data Layer",
      description: "FastAPI services + PostgreSQL database deployed via Cloud Run and Cloud SQL for modular, autoscaling infrastructure.",
    },
    {
      title: "Referral Generator + CMS Docs",
      description: "Jinja2 templates + WeasyPrint to produce compliant referrals and documentation — instantly available to clinicians via a simple UI.",
    },
  ];

  const outcomes = [
    {
      icon: <Users className="w-5 h-5 text-blue-400" />,
      title: "2–3× More Patients Identified",
      description:
        "NLP flags at-risk patients CMS often misses — using unstructured notes, not just checkboxes.",
      badge: "+2–3×",
    },
    {
      icon: <Clock3 className="w-5 h-5 text-blue-400" />,
      title: "30% Faster Referrals",
      description:
        "Prefilled docs and one-click referrals reduce time-to-referral delays by 30%+.",
      badge: "-30%",
    },
    {
      icon: <DollarSign className="w-5 h-5 text-blue-400" />,
      title: "Boosted Reimbursement ROI",
      description:
        "Clinics unlock value-based bonuses through ACO REACH and UDS — while closing care gaps.",
      badge: "↑ ROI",
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

        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-poppins font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-md leading-[1.15]">
            Onqi Screening: Detect Early. Refer Fast.
          </h1>
          <p className="text-lg text-gray-300 font-inter max-w-3xl">
            An AI-powered screening engine designed to help clinics identify at-risk patients early — and generate revenue through value-based care programs.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://loom.com/embed/YOUR_VIDEO_ID"
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-2 text-sm border border-blue-500 text-blue-300 rounded-full hover:bg-blue-500 hover:text-white transition-all"
          >
            <PlayCircle className="w-4 h-4" />
            Watch 2-min Demo
          </a>

          <a
            href="/docs/Onqi_SE_Pitch.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-5 py-2 text-sm border border-blue-500 text-blue-300 rounded-full hover:bg-blue-500 hover:text-white transition-all"
          >
            <FileText className="w-4 h-4" />
            View SE Pitch Deck
          </a>
        </div>

        {/* Proven Outcomes for Clinics */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Proven Outcomes for Clinics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomes.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative bg-[#111827] border border-blue-500/10 p-6 rounded-2xl shadow-sm"
              >
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-[11px] font-semibold px-2 py-[2px] rounded-full shadow-md">
                  {item.badge}
                </div>

                {/* Icon */}
                <div className="mb-3">{item.icon}</div>

                {/* Title */}
                <h3 className="text-lg font-bold text-blue-400">{item.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-400 mt-1">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Designed for Every Team Member */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Designed for Every Team Member</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Stethoscope className="w-6 h-6 text-blue-400" />,
                title: "Clinicians",
                desc: "View risk flags directly in the chart — no digging, no surprises.",
              },
              {
                icon: <ClipboardCheck className="w-6 h-6 text-blue-400" />,
                title: "Care Managers",
                desc: "Auto-generate compliant referrals in seconds, fully documented.",
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
                title: "VBC Executives",
                desc: "Track performance, trends, and ROI across your screening program.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-[#111827] border border-blue-500/10 p-6 rounded-2xl shadow-sm"
              >
                <div className="mb-3">{card.icon}</div>
                <h3 className="text-lg font-semibold text-blue-400">{card.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Architecture Breakdown */}
        <section className="space-y-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold text-white">Architecture Walkthrough</h2>
            <p className="text-gray-400 text-base">
              Each module maps to a clinical workflow challenge — and is built for modular deployment across diverse EHR environments.
            </p>
          </div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {pipeline.map((stage, idx) => (
              <motion.div
                key={idx}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
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

        {/* System Overview Diagra */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">System Overview Diagram</h2>
          <Zoom>
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-white/10">
              <Image
                src="/images/onqi-screening-architecture/onqi-architecture-diagram.png"
                alt="System design diagram for Onqi Screening"
                width={1600} // Increased for better scaling
                height={0}
                sizes="100vw"
                unoptimized
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </Zoom>
        </section>

        {/* Sample Referral */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Referral Output Example</h3>
          <p className="text-sm text-gray-400">
            CMS-ready referrals generated in seconds — complete with risk factors, shared decision-making text, and compliance metadata.
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
