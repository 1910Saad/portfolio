
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";

const skillGroups = [
  {
    title: "Frontend",
    description: "Building responsive, interactive user interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
  },
  {
    title: "Styling & UI",
    description: "Creating polished and consistent visual experiences.",
    skills: [
      "Tailwind CSS", "Responsive Design", "Framer Motion", "Accessibility",],
  },
{
  title: "Backend & Database",
    description: "Developing application logic and data-driven features.",
      skills: ["Node.js", "Express.js", "Python", "PostgreSQL", "MongoDB", "Neon", "Drizzle ORM",],
  },
{
  title: "Tools & Platforms",
    description: "Building, managing, and deploying projects.",
      skills: ["Git", "GitHub", "Vercel", "REST APIs", "Clerk", "Gemini API",],
  },
];

export default function Skills() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="section-padding border-t border-white/[0.06]"
    >
      <div className="container-width">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            My Toolkit
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Skills &amp; <span className="gradient-text">technologies.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
            The technologies I use to design, develop, and deploy modern web
            experiences.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass rounded-2xl p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                    <Sparkles size={19} />
                  </div>

                  <h3 className="text-lg font-medium text-white">
                    {group.title}
                  </h3>
                </div>

                <p className="mb-5 text-sm leading-6 text-zinc-400">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-zinc-300 transition hover:border-violet-400/40 hover:text-violet-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
