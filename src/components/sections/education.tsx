import { GraduationCap } from "lucide-react";

import { profile } from "@/data/profile";

export function EducationSection() {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <GraduationCap className="text-sky-600 dark:text-sky-300" />
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">Education</h2>
      </div>

      <div className="space-y-5">
        {profile.education.map((item) => (
          <article key={item.title} className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900/60">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{item.institution}</p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400">{item.period}</span>
            </div>
            {item.note ? <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.note}</p> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
