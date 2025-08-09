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
    "Streamlit",
    "Docker Compose",
  ];

  const features = [
    {
      icon: <Workflow className="w-5 h-5 text-blue-400" />,
      title: "Airflow Orchestration",
      desc: "Schedules and manages pipeline tasks for data ingestion and transformations.",
    },
    {
      icon: <GitBranch className="w-5 h-5 text-blue-400" />,
      title: "dbt Modeling",
      desc: "Transforms raw data into staging and core models with tests and lineage tracking.",
    },
    {
      icon: <Database className="w-5 h-5 text-blue-400" />,
      title: "BigQuery Warehouse",
      desc: "Stores and processes large-scale usage and billing data for analytics.",
    },
    {
      icon: <Server className="w-5 h-5 text-blue-400" />,
      title: "FastAPI Layer",
      desc: "Exposes REST endpoints for revenue leakage insights.",
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-blue-400" />,
      title: "Streamlit Dashboard",
      desc: "Visualizes leakage trends for finance and engineering teams.",
    },
  ];

  const actionShots = [
    {
      src: "/images/revmatch/airflow-DAG.png",
      alt: "Airflow DAG",
      caption: "Airflow DAG – Pipeline Orchestration",
    },
    {
      src: "/images/revmatch/dbt-lineage-graph.png",
      alt: "dbt Lineage Graph",
      caption: "dbt Lineage – Raw to Core",
    },
    {
      src: "/images/revmatch/dashboard1.png",
      alt: "Dashboard 1",
      caption: "Leakage Overview Dashboard",
    },
    {
      src: "/images/revmatch/dashboard2.png",
      alt: "Dashboard 2",
      caption: "Tenant Metrics & Trends",
    },
    {
      src: "/images/revmatch/bq-revenue-leaks.png",
      alt: "BigQuery revenue_leaks",
      caption: "BigQuery – revenue_leaks",
    },
    {
      src: "/images/revmatch/bq-tenant-metrics.png",
      alt: "BigQuery tenant_metrics",
      caption: "BigQuery – tenant_metrics",
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
        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <Link href="/#projects" className="text-blue-400 hover:text-blue-300 transition font-inter text-sm">
            ← Back to Projects
          </Link>
        </motion.div>

        {/* Title & Summary */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl md:text-5xl font-poppins font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-md leading-[1.15]">
            RevMatch – Revenue Leak Detector for SaaS
          </h1>
          <p className="text-lg text-gray-300 mb-8 font-inter">
            RevMatch helps SaaS platforms detect and fix underbilling before it impacts revenue.
            This production-grade pipeline syncs product usage with billing data so finance, engineering,
            and ops teams can catch silent revenue loss using modern data tools.
          </p>
        </motion.div>

        {/* Tech Stack (chip row with stagger) */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="relative rounded-xl backdrop-blur-md shadow-inner flex flex-wrap gap-3 font-inter"
        >
          {techStack.map((tech, i) => (
            <motion.span
              key={tech + i}
              variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
              className="bg-blue-600/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/20"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-2xl font-poppins font-semibold mb-4">Core Components</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={f.title + i}
                className="bg-[#111827] border border-white/10 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <div className="mb-3">{f.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-400 text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Architecture – full-screen zoom on click */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-2xl font-poppins font-semibold mb-4">Architecture Overview</h2>
          <Zoom>
            <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-4 md:p-8">
              <div className="relative w-full h-[320px] sm:h-[420px] md:h-[520px]">
                <Image
                  src="/images/revmatch/RevMatch — System Architecture Diagram.png"
                  alt="RevMatch Architecture"
                  fill
                  unoptimized
                  className="object-contain rounded-lg"
                  sizes="(max-width: 768px) 90vw, 80vw"
                />
              </div>
            </div>
          </Zoom>
        </motion.div>

        {/* Pipeline in Action – matches Syncro behavior */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="space-y-8">
          <h2 className="text-2xl font-poppins font-semibold text-white">Pipeline in Action</h2>
          <p className="text-sm text-gray-400 font-inter">Scroll → to view more</p>

          <div className="overflow-x-auto">
            <div className="flex gap-6 w-max pb-2">
              {actionShots.map((img, i) => (
                <motion.div
                  key={img.src + i}
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
