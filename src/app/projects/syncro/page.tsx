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
import Image from 'next/image'

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
                    <h1 className="text-4xl md:text-5xl font-poppins font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-md leading-[1.15]">
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
                    <h2 className="text-2xl font-poppins font-semibold text-white mb-4">In Action</h2>

                    <p className="text-sm text-gray-400 mb-3">Scroll → to view more</p>

                    <div className="overflow-x-auto">
                        <div className="flex gap-6 w-max pb-2">
                            {[
                                {
                                    src: "/images/syncro/login-token (admin).png",
                                    alt: "Login request (ADMIN) returning JWT",
                                    caption: "Login as ADMIN – returns JWT",
                                },
                                {
                                    src: "/images/syncro/get-users (admin).png",
                                    alt: "Get all users as ADMIN",
                                    caption: "Get users as ADMIN via /api/users",
                                },
                                {
                                    src: "/images/syncro/login-token (user).png",
                                    alt: "Login request (USER) returning JWT",
                                    caption: "Login as USER – returns JWT",
                                },
                                {
                                    src: "/images/syncro/RBAC - access denied (user).png",
                                    alt: "RBAC Denied",
                                    caption: "USER access denied for /users — RBAC in action",
                                },
                                {
                                    src: "/images/syncro/create-task.png",
                                    alt: "Create task",
                                    caption: "Create new task",
                                },
                                {
                                    src: "/images/syncro/get-tasks.png",
                                    alt: "Get tasks",
                                    caption: "View all tasks",
                                },
                                {
                                    src: "/images/syncro/docker-logs-backend.png",
                                    alt: "Docker backend logs",
                                    caption: "Docker Compose – Spring Boot startup",
                                },
                                {
                                    src: "/images/syncro/docker-logs-postgres.png",
                                    alt: "Docker Postgres logs",
                                    caption: "Docker Compose – PostgreSQL startup",
                                },
                                {
                                    src: "/images/syncro/ci-pipeline.png",
                                    alt: "CI pipeline",
                                    caption: "GitHub Actions – CI triggered on push",
                                },
                                {
                                    src: "/images/syncro/cd-pipeline.png",
                                    alt: "CD pipeline",
                                    caption: "Render – CD pipeline for auto-deploy",
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
                    href="https://github.com/adey1998/syncro"
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
