"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    FileText,
    Cpu,
    ServerCog,
    Activity,
    DatabaseZap,
    MonitorDot,
    Github,
} from "lucide-react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

export default function ParseMDPage() {
    const techStack = [
        "Node.js",
        "Express",
        "Multer",
        "MongoDB",
        "Mongoose",
        "Redis",
        "ioredis",
        "BullMQ",
        "Bull Board",
        "pdf-parse",
        "Rate Limiting Middleware",
        "dotenv",
        "Nodemon (dev)"
    ];


    const features = [
        {
            icon: <FileText className="w-5 h-5 text-blue-400" />,
            text: "Upload medical referral PDFs via REST — returns job ID instantly",
        },
        {
            icon: <Cpu className="w-5 h-5 text-blue-400" />,
            text: "Background worker extracts clinical data asynchronously",
        },
        {
            icon: <ServerCog className="w-5 h-5 text-blue-400" />,
            text: "Redis + BullMQ for robust queueing, retries, and backoff",
        },
        {
            icon: <DatabaseZap className="w-5 h-5 text-blue-400" />,
            text: "MongoDB stores job state and results with 7-day TTL cleanup",
        },
        {
            icon: <MonitorDot className="w-5 h-5 text-blue-400" />,
            text: "Bull Board for real-time job status, failures, and retries",
        },
        {
            icon: <Activity className="w-5 h-5 text-blue-400" />,
            text: "Extensible architecture — plug in LLMs, NLP, or ICD-10 mapping",
        },
    ];

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-[#0a0f1a] text-white px-6 py-24"
        >
            <div className="max-w-5xl mx-auto space-y-16">
                {/* Back Button */}
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                    <Link href="/#projects" className="text-blue-400 hover:text-blue-300 transition font-inter text-sm">
                        ← Back to Projects
                    </Link>
                </motion.div>

                {/* Title + Description */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                    <h1 className="text-4xl md:text-5xl font-poppins font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-md">
                        ParseMD – Async Referral Processing API
                    </h1>
                    <p className="text-lg text-gray-300 font-inter">
                        A production-ready backend for asynchronous medical referral processing. Converts uploaded PDFs into structured clinical metadata using Node.js, BullMQ, and MongoDB — designed for real-world scalability in modern healthtech.
                    </p>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    className="relative rounded-xl backdrop-blur-md shadow-inner flex flex-wrap gap-3 font-inter"
                >
                    {techStack.map((tech, i) => (
                        <motion.span
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            className="bg-blue-600/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/20"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </motion.div>

                {/* Features */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h2 className="text-2xl font-poppins font-semibold mb-4">Key Features</h2>
                    <ul className="space-y-4 font-inter text-gray-300">
                        {features.map(({ icon, text }, i) => (
                            <li key={i} className="flex items-start gap-3">
                                {icon}
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* System Design Diagram */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h2 className="text-2xl font-poppins font-semibold mb-4">Architecture Diagram</h2>
                    <Zoom>
                        <div className="relative w-full max-w-4xl rounded-xl overflow-hidden shadow-xl border border-white/10 mx-0">
                            <Image
                                src="/images/parsemd/ParseMD — System Architecture.png"
                                alt="System design diagram for ParseMD"
                                width={1200}
                                height={800}
                                unoptimized
                                className="w-full h-auto"
                            />
                        </div>
                    </Zoom>
                    <p className="text-sm text-gray-400 mt-2">Architecture Pattern: Async Job Queue with Stateless API, Producer–Consumer Pattern, and Polling Client</p>
                </motion.div>

                {/* Screenshots */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h2 className="text-2xl font-poppins font-semibold text-white mb-4">In Action</h2>
                    <p className="text-sm text-gray-400 mb-3">Scroll → to view more</p>

                    <div className="overflow-x-auto">
                        <div className="flex gap-6 w-max pb-2">
                            {[
                                {
                                    src: "/images/parsemd/upload-pdf.png",
                                    alt: "PDF Upload API request",
                                    caption: "Upload PDF – returns job ID",
                                },
                                {
                                    src: "/images/parsemd/get-job-result.png",
                                    alt: "Final parsed result",
                                    caption: "Parsed result with patient data",
                                },
                                {
                                    src: "/images/parsemd/get-job-status.png",
                                    alt: "Polling job status",
                                    caption: "Check job status by ID",
                                },
                                {
                                    src: "/images/parsemd/bullMQ-dashboard.png",
                                    alt: "Bull Board dashboard",
                                    caption: "Live queue monitoring",
                                },
                                {
                                    src: "/images/parsemd/processed-job-details-1.png",
                                    alt: "Bull Board processed job details",
                                    caption: "Job data details",
                                },
                                {
                                    src: "/images/parsemd/processed-job-details-2.png",
                                    alt: "Bull Board processed job options",
                                    caption: "Job options panel",
                                },
                            ].map((img, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.03 }}
                                    className="min-w-[280px] md:min-w-[320px] lg:min-w-[360px] rounded-lg overflow-hidden shadow-xl bg-[#111827] border border-white/10 hover:bg-[#1f2937] transition"
                                >
                                    <Zoom>
                                        <div className="relative w-full h-56">
                                            <Image
                                                src={img.src}
                                                alt={img.alt}
                                                fill
                                                unoptimized
                                                className="object-cover rounded-t-lg"
                                                sizes="(max-width: 768px) 90vw, 33vw"
                                            />
                                        </div>
                                    </Zoom>
                                    <div className="p-3 text-sm text-gray-300 font-inter">{img.caption}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>


                {/* GitHub Link */}
                <motion.a
                    href="https://github.com/adey1998/parsemd"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className="group inline-flex items-center gap-2 text-sm sm:text-base text-blue-400 font-medium px-5 py-2 sm:px-6 sm:py-2.5 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300"
                >
                    <Github className="w-4 h-4 transition-transform group-hover:rotate-[-6deg]" />
                    View Code on GitHub
                </motion.a>
            </div>
        </motion.main>
    );
}
