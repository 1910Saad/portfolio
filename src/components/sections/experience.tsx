import { BriefcaseBusiness } from "lucide-react";

import { profile } from "@/data/profile";

export function ExperienceSection() {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <BriefcaseBusiness className="text-sky-600 dark:text-sky-300" />
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">Experience</h2>
      </div>

      <div className="space-y-5">
        {profile.experience.map((item) => (
          <article key={`${item.role}-${item.company}`} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/60">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{item.role}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.company}</p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400">{item.period}</span>
            </div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
