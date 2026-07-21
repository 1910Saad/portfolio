import { BookOpenText } from "lucide-react";

import { profile } from "@/data/profile";

export function ResearchSection() {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <BookOpenText className="text-sky-600 dark:text-sky-300" />
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">Research & Achievements</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/60">
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{profile.research.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{profile.research.description}</p>
        </article>
        <article className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/60">
          <h3 className="text-lg font-semibold text-slate-950 dark:text-white">Achievements</h3>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
            {profile.achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
