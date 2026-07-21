import { UserRound } from "lucide-react";

import { profile } from "@/data/profile";

export function AboutSection() {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 md:p-8">
      <div className="mb-4 flex items-center gap-3">
        <UserRound className="text-sky-600 dark:text-sky-300" />
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">About</h2>
      </div>
      <p className="max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">{profile.summary}</p>
    </section>
  );
}
