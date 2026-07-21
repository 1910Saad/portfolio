import { FolderKanban } from "lucide-react";

import { profile } from "@/data/profile";

export function ProjectsSection() {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <FolderKanban className="text-sky-600 dark:text-sky-300" />
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">Featured Projects</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {profile.projects.map((project) => (
          <article key={project.title} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/60">
            <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{project.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
