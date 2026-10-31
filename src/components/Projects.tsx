"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
    {
        number: "01",
        title: "VelFile",
        category: "File Conversion Platform",
        description:
            "A web-based file utility platform focused on making everyday file conversion and document workflows easy to access.",
        technologies: ["Next.js", "TypeScript", "Web Platform"],
        liveUrl: "https://velfile.in",
        codeUrl: "",
        visual: "from-cyan-900/40 via-sky-950/20 to-zinc-950",
        accent: "text-cyan-300",
        status: "Live Product",
    },
    {
        number: "02",
        title: "LaunchPilot AI",
        category: "SaaS Product",
        description:
            "A startup idea discovery and validation workspace designed to help makers explore opportunities and assess product concepts.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        liveUrl: "",
        codeUrl: "https://github.com/1910Saad/launchpilot-ai",
        visual: "from-violet-900/40 via-indigo-950/20 to-zinc-950",
        accent: "text-violet-300",
        status: "In Development",
    },
    {

        number: "03",
        title: "Brew & Bean",
        category: "Business Website",
        description:
            "A modern café website concept featuring an inviting landing page, menu presentation, and business information.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        liveUrl: "https://brew-and-bean-beige.vercel.app",
        codeUrl: "https://github.com/1910Saad/brew-and-bean",
        visual: "from-amber-900/40 via-orange-950/20 to-zinc-950",
        accent: "text-amber-300",
        status: "Live Demo",
    },
    {
        number: "04",
        title: "Haviva Salon & Spa",
        category: "Website Redesign Concept",
        description:
            "A premium salon website concept with service listings, illustrative pricing, a gallery, and appointment-focused design.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        liveUrl: "https://haviva-salon-spa2.vercel.app/",
        codeUrl: "https://github.com/1910Saad/haviva-salon-spa2",
        visual: "from-purple-900/40 via-fuchsia-950/20 to-zinc-950",
        accent: "text-purple-300",
        status: "Redesign Concept",
    },
    {
        number: "05",
        title: "CourseCraft",
        category: "AI-Powered E-Learning",
        description:
            "An e-learning platform concept combining course discovery, AI-assisted learning features, and a modern learning interface.",
        technologies: ["Next.js", "Node.js", "PostgreSQL", "Gemini API"],
        liveUrl: "https://course-craft-delta.vercel.app/",
        codeUrl: "https://github.com/1910Saad/course-craft",
        visual: "from-blue-900/40 via-indigo-950/20 to-zinc-950",
        accent: "text-blue-300",
        status: "Project",
    },
    {
        number: "06",
        title: "JobTrack AI",
        category: "Productivity Web App",
        description:
            "A job application tracker with a Kanban workflow for managing applications from wishlist through interviews and offers.",
        technologies: ["Next.js", "Drizzle ORM", "Neon PostgreSQL", "Clerk"],
        liveUrl: "https://jobtrack-ai-pi.vercel.app/",
        codeUrl: "https://github.com/1910Saad/jobtrack-ai",
        visual: "from-emerald-900/40 via-teal-950/20 to-zinc-950",
        accent: "text-emerald-300",
        status: "Project",
    },
    // {
    //     number: "07",
    //     title: "EVUA",
    //     category: "AI-Assisted Code Modernization",
    //     description:
    //         "A final-year project exploring AI-assisted legacy code upgrade workflows using language-aware tools and code analysis.",
    //     technologies: ["Python", "LibCST", "Babel", "Spoon"],
    //     liveUrl: "",
    //     codeUrl: "",
    //     visual: "from-rose-900/40 via-fuchsia-950/20 to-zinc-950",
    //     accent: "text-rose-300",
    //     status: "Final Year Project",
    // },
];

export default function Projects() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="projects"
            className="section-padding border-t border-white/[0.06]"
        >
            <div className="container-width">
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
                >
                    <div>
                        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
                            Selected Work
                        </p>

                        <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                            Projects that bring
                            <br />
                            ideas to <span className="gradient-text">life.</span>
                        </h2>
                    </div>

                    <p className="max-w-md leading-7 text-zinc-400">
                        A selection of web development projects and design concepts
                        demonstrating my skills and approach to building digital products.
                    </p>
                </motion.div>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.number}
                            initial={
                                shouldReduceMotion ? false : { opacity: 0, y: 24 }
                            }
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.12 }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                            className="group overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-violet-400/30"
                        >
                            <div
                                className={`relative flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br ${project.visual}`}
                            >
                                <div
                                    aria-hidden="true"
                                    className="absolute h-40 w-40 rounded-full bg-white/[0.04] blur-3xl transition duration-500 group-hover:scale-150"
                                />

                                <div className="relative px-4 text-center">
                                    <p className={`mb-3 text-xs uppercase tracking-[0.3em] ${project.accent}`}>
                                        {project.category}
                                    </p>

                                    <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                                        {project.title}
                                        <span className={project.accent}>.</span>
                                    </h3>

                                    <p className="mt-4 text-xs text-zinc-400">
                                        {project.number} / 06
                                    </p>
                                </div>

                                <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-xs text-zinc-300 backdrop-blur">
                                    {project.status}
                                </span>
                            </div>

                            <div className="p-6">
                                <p className="leading-7 text-zinc-400">
                                    {project.description}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-md border border-white/[0.08] px-2.5 py-1.5 text-xs text-zinc-300"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-white/[0.08] pt-5">
                                    {project.liveUrl ? (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-white transition hover:text-violet-300"
                                        >
                                            View Live Demo <ExternalLink size={16} />
                                        </a>
                                    ) : (
                                        <span className="text-sm text-zinc-500">
                                            Demo link coming soon
                                        </span>
                                    )}


                                    {project.codeUrl && (
                                        <a
                                            href={project.codeUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
                                        >
                                            Source Code
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                viewBox="0 0 24 24"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path d="M12 .297a12 12 0 0 0-3.793 23.385c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.007 0c2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.805 5.624-5.475 5.921.43.372.814 1.103.814 2.222v3.293c0 .319.216.694.825.576A12.001 12.001 0 0 0 12 .297Z" />
                                            </svg>
                                        </a>
                                    )}


                                    <span className="ml-auto text-violet-300 transition group-hover:translate-x-1">
                                        <ArrowUpRight size={20} />
                                    </span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
