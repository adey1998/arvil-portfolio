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
    title: "Onqi Screening – Solution Architecture",
    description:
      "Technical solution design for an AI-powered cancer screening platform. Built to show how clinics can identify high-risk patients earlier using EHR data and NLP models.",
    link: "/projects/onqi-screening-architecture",
    type: "Sales Engineering",
  },
  {
    title: "ChatAPT – AI-Powered Rentals for Gen Z",
    description:
      "Shaped the pitch and product story for an AI-driven rental tool that helps Gen Z find apartments based on lifestyle and intent — not filters.",
    link: "/projects/chat-apt",
    type: "Sales Engineering",
  },
  {
    title: "Onqi Screening – Research & Insights",
    description:
      "An ongoing blog exploring how AI and NLP can improve early cancer detection in clinical settings. Posts focus on screening workflows, gaps in current practices, and tech-driven opportunities.",
    link: "/blog",
    type: "Research",
  },
];

export default function Projects() {
  const engineeringProjects = projects.filter((p) => p.type === "Software Engineering");
  const salesEngineeringProjects = projects.filter((p) => p.type === "Sales Engineering");
  const researchProjects = projects.filter((p) => p.type === "Research");

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-20 px-6 scroll-mt-24"
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
      className="text-center mb-10"
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
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto justify-items-center">
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
      className="bg-[#111827] rounded-xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 border border-gray-800 group hover:bg-[#1F2937]"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-poppins font-semibold mb-2 text-white">{project.title}</h3>
      <p className="text-gray-400 mb-4 font-inter">{project.description}</p>
      <a
        href={project.link}
        className="inline-block text-blue-500 font-poppins font-semibold px-8 py-3 rounded-full border-blue-500 text-blue-500 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white group-hover:scale-105 group-hover:shadow-2xl backdrop-blur transition-all duration-300 ease-in-out"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project →
      </a>
    </motion.div>
  );
}
