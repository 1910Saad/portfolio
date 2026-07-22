"use client";

import { ArrowRight, BriefcaseBusiness, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

import { HeroScene } from "@/components/hero-scene";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-950 text-white shadow-2xl shadow-slate-900/40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.25),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(236,72,153,0.2),_transparent_30%)]" />
      <div className="relative grid gap-10 px-6 py-12 md:grid-cols-[1.2fr_0.8fr] md:px-10 md:py-16">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-slate-200 backdrop-blur">
            <Sparkles size={14} />
            Available for full-time opportunities
          </div>

          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm uppercase tracking-[0.32em] text-sky-300"
            >
              {profile.title}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="max-w-2xl text-4xl font-semibold tracking-tight text-white md:text-6xl"
            >
              I build backend systems and AI-powered software that ship.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="max-w-xl text-base leading-7 text-slate-300 md:text-lg"
            >
              {profile.summary}
            </motion.p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="#contact">Let&apos;s connect</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/resume" target="_blank" rel="noreferrer">
                Download resume
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href={profile.socials.linkedin} target="_blank" rel="noreferrer">
                LinkedIn profile
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-sky-300" />
              {profile.location}
            </div>
            <div className="flex items-center gap-2">
              <BriefcaseBusiness size={16} className="text-sky-300" />
              {profile.experience[0]?.company}
            </div>
          </div>
        </div>

        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
          <HeroScene />
          <div className="rounded-2xl bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Core strengths</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.expertise.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl bg-sky-400/10 p-4 text-slate-50">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-200">Focus</p>
              <p className="mt-2 text-lg font-semibold">Backend architecture, API design, and applied AI</p>
            </div>
            <div className="rounded-2xl bg-pink-400/10 p-4 text-slate-50">
              <p className="text-xs uppercase tracking-[0.3em] text-pink-200">Stack</p>
              <p className="mt-2 text-lg font-semibold">ReactJS, Node.js, MongoDB, PostgreSQL, Next.js, LLMs API</p>
            </div>
          </div>
          <div className="rounded-2xl border border-dashed border-white/15 p-4 text-sm text-slate-300">
            <div className="flex items-center justify-between">
              <span>Resume-ready portfolio</span>
              <ArrowRight size={16} className="text-sky-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
