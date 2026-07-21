import { Mail, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { profile } from "@/data/profile";

export function ContactSection() {
  return (
    <section id="contact" className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950 md:p-8">
      <div className="grid gap-6 md:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-sky-600 dark:text-sky-300">Contact</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">
            Let&apos;s build something meaningful.
          </h2>
          <p className="mt-3 max-w-xl text-slate-600 dark:text-slate-300">
            Reach out for opportunities, collaborations, or product conversations. I&apos;m happy to discuss your next challenge.
          </p>

          <div className="mt-5 space-y-3">
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
              <Mail size={18} className="text-sky-600 dark:text-sky-300" />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
              <Phone size={18} className="text-sky-600 dark:text-sky-300" />
              <span>{profile.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
              <MapPin size={18} className="text-sky-600 dark:text-sky-300" />
              <span>{profile.location}</span>
            </div>
            <div className="pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-700"
              >
                Email for opportunities
              </a>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
