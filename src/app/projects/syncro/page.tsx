"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    ShieldCheck,
    Dock,
    Github,
    Database,
    Layers,
} from "lucide-react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function SyncroPage() {
    const techStack = [
        "Spring Boot",
        "Spring Security",
        "JWT",
        "BCrypt",
        "Docker",
        "PostgreSQL",
        "JPA / Hibernate",
        "Java 17",
        "GitHub Actions (CI)",
        "Render (CD)",
        "Postman / JUnit",
    ];

    const features = [
        {
            icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
            text: "Secure auth with JWT and Spring Security — role-based access baked in from the start",
        },
        {
            icon: <Dock className="w-5 h-5 text-blue-400" />,
            text: "Dockerized from top to bottom — run it anywhere, every time",
        },
        {
            icon: <Github className="w-5 h-5 text-blue-400" />,
            text: "CI/CD powered by GitHub Actions and Render — deploy on push, no drama",
        },
        {
            icon: <Database className="w-5 h-5 text-blue-400" />,
            text: "PostgreSQL with JPA/Hibernate — clean queries, no boilerplate",
        },
        {
            icon: <Layers className="w-5 h-5 text-blue-400" />,
            text: "Modular codebase that’s ready to break into microservices when you are",
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
                {/* Sticky Back Button */}
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
                        Syncro – Remote Productivity API
                    </h1>
                    <p className="text-lg text-gray-300 font-inter">
                        This ain’t your average CRUD app. 
                        Syncro is a full-on Spring Boot backend built for real-world teams — secure auth, role-based access, Dockerized deployment, and CI/CD from the jump. You could drop this into a startup tomorrow.
                    </p>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl font-poppins font-semibold mb-4">
                        Key Features
                    </h2>
                    <ul className="space-y-4 font-inter text-gray-300">
                        {features.map(({ icon, text }, i) => (
                            <li key={i} className="flex items-start gap-3">
                                {icon}
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* In Action Screenshots */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <h2 className="text-2xl font-poppins font-semibold text-white">In Action</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                src: "/images/syncro/login-token (admin).png",
                                alt: "Login request (ADMIN) returning JWT",
                                caption: "Secure login (ADMIN) returning a JWT token via /api/auth/login",
                            },
                            {
                                src: "/images/syncro/get-users (admin).png",
                                alt: "Get all users as ADMIN",
                                caption: "Get users ONLY when logged in as ADMIN via /api/users",
                            },
                            {
                                src: "/images/syncro/login-token (user).png",
                                alt: "Login request (USER) returning JWT",
                                caption: "Secure login (USER) returning a JWT token via /api/auth/login",
                            },
                            {
                                src: "/images/syncro/RBAC - access denied (user).png",
                                alt: "Get all users as USER",
                                caption: "RBAC — Denied access to GET all users because role='USER'"
                            },
                            {
                                src: "/images/syncro/create-task.png",
                                alt: "Create a task",
                                caption: "Create a new task"
                            },
                            {
                                src: "/images/syncro/get-tasks.png",
                                alt: "Get all tasks",
                                caption: "Get all tasks"
                            },
                            {
                                src: "/images/syncro/docker-logs-backend.png",
                                alt: "Docker Compose terminal logs",
                                caption: "Spring Boot containers starting via Docker Compose",
                            },
                            {
                                src: "/images/syncro/docker-logs-postgres.png",
                                alt: "Docker Compose terminal logs",
                                caption: "PostgreSQL containers starting via Docker Compose",
                            },
                            {
                                src: "/images/syncro/ci-pipeline.png",
                                alt: "CI pipeline in GitHub",
                                caption: "Automated CI pipeline running on GitHub Actions",
                            },
                            {
                                src: "/images/syncro/cd-pipeline.png",
                                alt: "CD pipeline in Render",
                                caption: "Automated CD pipeline running on Render",
                            },
                        ].map((img, i) => (

                            <div key={i} className="rounded-lg overflow-hidden shadow-xl bg-[#111827] border border-white/10 hover:bg-[#1f2937] transition">
                                <Zoom>
                                    <img src={img.src} alt={img.alt} className="w-full object-cover" />
                                </Zoom>
                                <div className="p-4 text-sm text-gray-300 font-inter">{img.caption}</div>
                            </div>


                        ))}
                    </div>
                </motion.div>



                {/* GitHub Link */}
                <motion.a
                    href="https://github.com/adey1998/syncro"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-block text-blue-500 font-poppins font-semibold px-8 py-3 rounded-full border border-blue-500 group hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 hover:text-white hover:shadow-2xl backdrop-blur transition-all duration-300 ease-in-out"
                >
                    View Code on GitHub →
                </motion.a>

            </div>
        </motion.main>
    );
}
