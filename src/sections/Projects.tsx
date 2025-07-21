"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "RevMatch – Revenue Leak Detector for SaaS",
    description:
      "A production-grade data engineering pipeline for usage-based SaaS. Detects hidden revenue leaks using Apache Airflow, dbt, BigQuery, and FastAPI.",
    link: "/projects/revmatch",
    type: "Data Engineering",
  },
  {
    title: "Syncro – Remote Productivity API",
    description:
      "Enterprise-grade Spring Boot backend with JWT auth, Docker, and CI/CD deployment. Demonstrates full-stack capabilities and backend architecture.",
    link: "/projects/syncro",
    type: "Software Engineering",
  },
  {
    title: "ParseMD – Async Medical Referral Processing API",
    description:
      "A real-world backend for async medical referral processing — parses PDFs into structured clinical data using Node.js, BullMQ, and MongoDB.",
    link: "/projects/parsemd",
    type: "Software Engineering",
  },
  {
    title: "Onqi Screening: Demo & Architecture",
    description:
      "AI-powered screening workflow to help clinics catch high-risk patients earlier — using EHR data, NLP, and automated referral tools.",
    link: "/projects/onqi-screening",
    type: "Sales Engineering",
  },
  {
    title: "Onqi Screening – Research & Insights",
    description:
      "An ongoing blog exploring how AI and NLP can improve early cancer detection in clinical settings with tech-driven workflows.",
    link: "https://www.onqilabs.com/blogs",
    type: "Research",
  },
];

export default function Projects() {
  const technicalProjects = projects.filter(
    (p) => p.type === "Software Engineering" || p.type === "Data Engineering"
  );
  const salesProjects = projects.filter((p) => p.type === "Sales Engineering");
  const researchProjects = projects.filter((p) => p.type === "Research");

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 scroll-mt-24"
    >
      {/* Technical Projects */}
      <SectionHeader
        title="Technical Projects"
        subtitle="Full-stack systems and data pipelines designed for real-world scale."
      />
      <ProjectGrid projects={technicalProjects} />

      <SectionSeparator />

      {/* Sales Engineering */}
      <SectionHeader
        title="Bridging Tech & Clients"
        subtitle="Architecture, demos, and strategy to solve business problems."
      />
      <ProjectGrid projects={salesProjects} />

      <SectionSeparator />

      {/* Research */}
      <SectionHeader
        title="Writing & Research"
        subtitle="Insights and ideas shaping the future of healthcare tech."
      />
      <ProjectGrid projects={researchProjects} />
    </section>
  );
}

// ---------- Subcomponents ----------

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <motion.div
      className="text-center mb-10 px-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-poppins font-extrabold mb-2 text-blue-400">
        {title}
      </h2>
      <p className="text-gray-400 text-base md:text-lg font-inter">{subtitle}</p>
    </motion.div>
  );
}

function SectionSeparator() {
  return (
    <div className="h-px my-12 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 opacity-30" />
  );
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-2">
      {projects.map((project, index) => (
        <ProjectCard project={project} index={index} key={index} />
      ))}
    </div>
  );
}


type Project = {
  title: string;
  description: string;
  link: string;
  type: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
  const typeColors: Record<string, string> = {
    "Software Engineering": "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
    "Data Engineering": "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    "Sales Engineering": "bg-green-500/10 text-green-400 border border-green-500/20",
    "Research": "bg-pink-500/10 text-pink-400 border border-pink-500/20",
  };

  return (
    <motion.div
      className="bg-[#111827] rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105 border border-gray-800 group hover:bg-[#1F2937] w-full max-w-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Category Badge */}
      <span
        className={`inline-block mb-4 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide ${typeColors[project.type]}`}
      >
        {project.type}
      </span>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-poppins font-semibold mb-3 text-white">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 mb-6 text-sm sm:text-base font-inter leading-relaxed">
        {project.description}
      </p>

      {/* Button */}
      <a
        href={project.link}
        aria-label={`View details for ${project.title}`}
        className="inline-block text-sm sm:text-base text-blue-500 font-poppins font-semibold px-6 py-2 rounded-full border border-blue-500 hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white transition-all duration-300 ease-in-out"
      >
        View Project →
      </a>
    </motion.div>
  );
}
