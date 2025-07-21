"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Database,
    Workflow,
    BarChart2,
    GitBranch,
    Server,
    Github,
} from "lucide-react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";

export default function RevMatchPage() {
    const techStack = [
        "Python (Faker)",
        "Apache Airflow",
        "dbt",
        "Google BigQuery",
        "FastAPI",
        "Looker Studio",
        "Docker Compose",
    ];

    const features = [
        {
            icon: <Workflow className="w-6 h-6 text-blue-400" />,
            title: "Airflow Orchestration",
            desc: "Schedules and manages pipeline tasks for data ingestion and transformations.",
        },
        {
            icon: <GitBranch className="w-6 h-6 text-blue-400" />,
            title: "dbt Modeling",
            desc: "Transforms raw data into staging and core models with tests and lineage tracking.",
        },
        {
            icon: <Database className="w-6 h-6 text-blue-400" />,
            title: "BigQuery Warehouse",
            desc: "Stores and processes large-scale usage and billing data for analytics.",
        },
        {
            icon: <Server className="w-6 h-6 text-blue-400" />,
            title: "FastAPI Layer",
            desc: "Exposes REST endpoints for revenue leakage insights.",
        },
        {
            icon: <BarChart2 className="w-6 h-6 text-blue-400" />,
            title: "Looker Dashboards",
            desc: "Visualizes leakage trends for finance and engineering teams.",
        },
    ];

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-[#0a0f1a] text-white px-6 py-24"
        >
            <div className="max-w-6xl mx-auto space-y-16">
                {/* Back Button */}
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                    <Link href="/#projects" className="text-blue-400 hover:text-blue-300 transition font-inter text-sm">
                        ← Back to Projects
                    </Link>
                </motion.div>


                {/* Title & Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-poppins font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                        RevMatch – Revenue Leak Detector for SaaS
                    </h1>
                    <p className="text-lg text-gray-300 mb-8 font-inter">
                        RevMatch helps SaaS platforms detect and fix underbilling before it impacts revenue. This production-grade data pipeline syncs product usage with billing data — enabling finance, engineering, and ops teams to catch silent revenue loss using modern data tools.
                    </p>
                </motion.div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3">
                    {techStack.map((tech, i) => (
                        <span
                            key={i}
                            className="bg-blue-600/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/20"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Features */}
                <div>
                    <h2 className="text-2xl font-poppins font-semibold mb-6">
                        Core Components
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((f, i) => (
                            <div
                                key={i}
                                className="bg-[#111827] border border-white/10 p-6 rounded-xl shadow hover:shadow-lg transition"
                            >
                                <div className="mb-3">{f.icon}</div>
                                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                                <p className="text-gray-400 text-sm">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Architecture */}
                <div>
                    <h2 className="text-2xl font-poppins font-semibold mb-4">
                        Architecture Overview
                    </h2>
                    <Zoom>
                        <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-8">
                            <Image
                                src="/images/revmatch/RevMatch — System Architecture Diagram.png"
                                alt="RevMatch Architecture"
                                width={1200}
                                height={800}
                                unoptimized
                                className="rounded-lg"
                            />
                        </div>
                    </Zoom>
                </div>


                {/* Screenshots */}
                <div>
                    <h2 className="text-2xl font-poppins font-semibold mb-4">
                        Pipeline in Action
                    </h2>
                    <div className="overflow-x-auto">
                        <div className="flex gap-6 w-max pb-2">
                            {[
                                {
                                    src: "/images/revmatch/airflow-dag.png",
                                    caption: "Airflow DAG – Pipeline Orchestration",
                                },
                                {
                                    src: "/images/revmatch/dbt-lineage.png",
                                    caption: "dbt Lineage – Raw to Core",
                                },
                                {
                                    src: "/images/revmatch/lookerstudio-dashboard.png",
                                    caption: "Looker Studio Dashboard",
                                },
                            ].map((img, i) => (
                                <div
                                    key={i}
                                    className="min-w-[280px] md:min-w-[360px] rounded-lg overflow-hidden shadow-xl bg-[#111827] border border-white/10"
                                >
                                    <Zoom>
                                        <Image
                                            src={img.src}
                                            alt={img.caption}
                                            width={360}
                                            height={200}
                                            className="object-cover"
                                        />
                                    </Zoom>
                                    <div className="p-3 text-sm text-gray-300">{img.caption}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* GitHub Link */}
                <motion.a
                    href="https://github.com/adey1998/revmatch"
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
