"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Syncro – Remote Productivity API",
    description:
      "Enterprise-grade Spring Boot backend with JWT auth, Docker, and CI/CD deployment. This project demonstrates full-stack capabilities and backend architecture.",
    link: "/projects/syncro",
    type: "Software Engineering",
  },
  {
    title: "Onqi Screening: Demo & Architecture",
    description:
      "AI-powered screening workflow designed to help clinics catch high-risk patients earlier — using EHR data, NLP, and automated referral tools.",
    link: "/projects/onqi-screening",
    type: "Sales Engineering",
  },
  {
    title: "Onqi Screening – Research & Insights",
    description:
      "An ongoing blog exploring how AI and NLP can improve early cancer detection in clinical settings. Posts focus on screening workflows, gaps in current practices, and tech-driven opportunities.",
    link: "https://www.onqilabs.com/blogs",
    type: "Research",
  },
  {
    title: "ParseMD – Async Medical Referral Processing API",
    description:
      "A real-world backend for async medical referral processing — parses PDFs into structured clinical data using Node.js, BullMQ, and MongoDB.",
    link: "/projects/parsemd",
    type: "Software Engineering",
  },
];

export default function Projects() {
  const engineeringProjects = projects.filter((p) => p.type === "Software Engineering");
  const salesEngineeringProjects = projects.filter((p) => p.type === "Sales Engineering");
  const researchProjects = projects.filter((p) => p.type === "Research");

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 scroll-mt-24"
    >
      <SectionHeader
        title="Technical Projects"
        subtitle="Full-stack systems designed for real-world scale and clarity."
      />
      <ProjectGrid projects={engineeringProjects} />

      <SectionSeparator />

      <SectionHeader
        title="Bridging Tech & Clients"
        subtitle="Where architecture, demos, and strategy meet to solve real problems."
      />
      <ProjectGrid projects={salesEngineeringProjects} />

      <SectionSeparator />

      <SectionHeader
        title="Writing & Research"
        subtitle="Insights, research, and early ideas from building in the healthcare space."
      />
      <ProjectGrid projects={researchProjects} />
    </section>
  );
}

// Subcomponents

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
  return <div className="h-px my-12 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 opacity-30" />;
}

function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto justify-items-center px-2">
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
  return (
    <motion.div
      className="bg-[#111827] rounded-xl p-5 sm:p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 border border-gray-800 group hover:bg-[#1F2937] w-full max-w-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h3 className="text-lg sm:text-xl font-poppins font-semibold mb-2 text-white">
        {project.title}
      </h3>
      <p className="text-gray-400 mb-4 text-sm sm:text-base font-inter">
        {project.description}
      </p>
      <a
        href={project.link}
        className="inline-block text-sm sm:text-base text-blue-500 font-poppins font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-full border border-blue-500 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:scale-105 group-hover:shadow-2xl backdrop-blur transition-all duration-300 ease-in-out"
        rel="noopener noreferrer"
      >
        View Project →
      </a>
    </motion.div>
  );
}
