
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  LayoutTemplate,
  RefreshCw,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: LayoutTemplate,
    title: "Business Websites",
    description:
      "Professional, responsive websites that help businesses establish an online presence and showcase their services.",
    features: ["Responsive layouts", "Modern UI design", "Business information"],
  },
  {
    number: "02",
    icon: Code2,
    title: "Landing Pages",
    description:
      "Focused landing pages designed to present your offer clearly and encourage visitors to take action.",
    features: ["Clear calls to action", "Mobile-friendly design", "Fast-loading pages"],
  },
  {
    number: "03",
    icon: RefreshCw,
    title: "Website Redesign",
    description:
      "Give an outdated website a fresh, modern look with improved usability, structure, and responsive styling.",
    features: ["Visual improvements", "Better navigation", "Responsive redesign"],
  },
];

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="services"
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
            What I Offer
          </p>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            Services built around
            <br />
            <span className="gradient-text">your goals.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
            Practical web development services for businesses and individuals
            who want a stronger digital presence.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                initial={
                  shouldReduceMotion ? false : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                    <Icon size={22} />
                  </div>

                  <span className="text-sm text-zinc-600">
                    {service.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-24 text-sm leading-7 text-zinc-400">
                  {service.description}
                </p>

                <ul className="mt-5 space-y-3 border-t border-white/[0.08] pt-5">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-zinc-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-violet-300 transition hover:text-white"
                >
                  Discuss a Project
                  <ArrowUpRight
                    size={16}
                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
