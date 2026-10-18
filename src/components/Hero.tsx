
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.12] blur-[130px]"
      />

      <div className="container-width relative z-10 py-20">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-4 py-2 text-sm text-violet-300">
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            Web Developer &amp; Freelancer
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-zinc-400">
            Hello, welcome to my portfolio
          </p>

          <h1 className="text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-8xl">
            I build websites
            <br />
            that make an{" "}
            <span className="gradient-text">impact.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I&apos;m Saad Khan, a developer passionate about building modern
            websites and web applications that help businesses grow and
            deliver better digital experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-violet-400"
            >
              Explore My Work <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition hover:border-violet-400/50 hover:bg-white/[0.04]"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-12 flex items-center gap-5">
            <span className="text-sm text-zinc-500">Find me on</span>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-zinc-400 transition hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M12 .297a12 12 0 0 0-3.793 23.385c.6.111.82-.261.82-.577v-2.234c-3.338.726-4.043-1.416-4.043-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.468-2.381 1.236-3.221-.124-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.007 0c2.291-1.552 3.297-1.23 3.297-1.23.655 1.652.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.805 5.624-5.475 5.921.43.372.814 1.103.814 2.222v3.293c0 .319.216.694.825.576A12.001 12.001 0 0 0 12 .297Z"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-400 transition hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
              </svg>
            </a>
          </div>
        </motion.div>

        <a
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-8 right-0 hidden items-center gap-2 text-xs uppercase tracking-widest text-zinc-500 transition hover:text-violet-300 md:flex"
        >
          Scroll to explore <ArrowDown size={15} />
        </a>
      </div>
    </section>
  );
}
