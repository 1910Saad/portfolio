
"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Code2, Laptop, Rocket, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Development",
    description:
      "Building maintainable, responsive websites with modern development tools.",
  },
  {
    icon: Laptop,
    title: "User-Focused Design",
    description:
      "Creating intuitive interfaces that look great across desktop and mobile.",
  },
  {
    icon: Rocket,
    title: "Performance First",
    description:
      "Focusing on fast loading, accessibility, and a smooth user experience.",
  },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="section-padding border-t border-white/[0.06]">
      <div className="container-width">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            About Me
          </p>

          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Turning ideas into{" "}
            <span className="gradient-text">digital experiences.</span>
          </h2>

          <div className="mt-8 grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
            <div className="space-y-5 text-base leading-8 text-zinc-400">
              <p>
                I&apos;m Saad Khan, a Computer Engineering graduate and web
                developer interested in building useful, modern digital
                products.
              </p>

              <p>
                I work with technologies like React, Next.js, TypeScript, and
                Tailwind CSS to create responsive websites and web
                applications. I enjoy turning ideas into practical products
                with thoughtful design and reliable functionality.
              </p>

              <p>
                I&apos;m currently looking to collaborate with businesses that
                need a professional online presence, while also exploring
                opportunities to grow as a developer.
              </p>
            </div>

            <div className="grid gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={
                      shouldReduceMotion
                        ? false
                        : { opacity: 0, x: 15 }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.45, delay: index * 0.1 }}
                    className="glass rounded-2xl p-5 transition hover:border-violet-400/30"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                      <Icon size={20} />
                    </div>

                    <h3 className="mb-2 font-medium text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-6 text-zinc-400">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
