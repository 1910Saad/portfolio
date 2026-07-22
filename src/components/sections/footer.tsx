import { Globe, Mail, ArrowUpRight } from "lucide-react";

import { profile } from "@/data/profile";

export function FooterSection() {
  return (
    <footer className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 md:p-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-sky-600 dark:text-sky-300">Connect</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-950 dark:text-white">{profile.name}</h2>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">Open to software engineering roles and collaboration opportunities.</p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <Mail size={16} className="text-sky-600 dark:text-sky-300" />
            Email
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <Globe size={16} className="text-sky-600 dark:text-sky-300" />
            LinkedIn
          </a>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            <ArrowUpRight size={16} className="text-sky-600 dark:text-sky-300" />
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
