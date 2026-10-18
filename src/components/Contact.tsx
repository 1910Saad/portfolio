
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
    ArrowUpRight,
    Mail,
    MessageCircle,
} from "lucide-react";

const EMAIL = "khansaad191004@example.com";
// const WHATSAPP_NUMBER = "91XXXXXXXXXX";
const LINKEDIN_URL = "https://www.linkedin.com/in/saad-khan-a74867293/";

const emailIsConfigured = !EMAIL.includes("YOUR_EMAIL");
// const whatsappIsConfigured = !WHATSAPP_NUMBER.includes("X");
const linkedinIsConfigured = !LINKEDIN_URL.includes("YOUR-PROFILE");

const contactOptions = [
    {
        label: "Email",
        detail: EMAIL,
        icon: Mail,
        href: emailIsConfigured ? `mailto:${EMAIL}` : "",
        available: emailIsConfigured,
    },
    // {
    //     label: "WhatsApp",
    //     detail: "Let's discuss your project",
    //     icon: MessageCircle,
    //     href: whatsappIsConfigured
    //         ? `https://wa.me/${WHATSAPP_NUMBER}`
    //         : "",
    //     available: whatsappIsConfigured,
    // },
    {
        label: "LinkedIn",
        detail: "Connect professionally",
        icon: null,
        href: linkedinIsConfigured ? LINKEDIN_URL : "",
        available: linkedinIsConfigured,
    },
];

export default function Contact() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section
            id="contact"
            className="section-padding border-t border-white/[0.06]"
        >
            <div className="container-width">
                <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-500/[0.12] via-[#111018] to-[#0b0b10] p-6 sm:p-10 md:p-14"
                >
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-violet-500/10 blur-[100px]"
                    />

                    <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                        <div>
                            <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-violet-300">
                                Get in Touch
                            </p>

                            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
                                Have a project
                                <br />
                                in <span className="gradient-text">mind?</span>
                            </h2>

                            <p className="mt-5 max-w-lg leading-7 text-zinc-400">
                                Whether you need a business website, want to improve an
                                existing site, or would like to discuss an opportunity, I'd
                                love to hear from you.
                            </p>

                            {emailIsConfigured && (
                                <a
                                    href={`mailto:${EMAIL}?subject=${encodeURIComponent("Website project inquiry")}`}
                                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-500 px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-violet-400"
                                >
                                    Start a Conversation
                                    <ArrowUpRight size={17} />
                                </a>
                            )}
                        </div>

                        <div className="space-y-3">
                            {contactOptions.map((option) => {
                                const Icon = option.icon;

                                return (
                                    <div
                                        key={option.label}
                                        className="flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-black/20 p-4 transition hover:border-violet-400/25"
                                    >

                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
                                            {option.label === "LinkedIn" ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                    aria-hidden="true"
                                                >
                                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM7.119 20.452H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z" />
                                                </svg>
                                            ) : option.icon ? (
                                                <option.icon size={20} />
                                            ) : null}
                                        </div>


                                        <div className="min-w-0 flex-1">
                                            <p className="font-medium text-white">
                                                {option.label}
                                            </p>
                                            <p className="mt-1 truncate text-sm text-zinc-400">
                                                {option.detail}
                                            </p>
                                        </div>

                                        {option.available ? (
                                            <a
                                                href={option.href}
                                                target={
                                                    option.label === "Email" ? undefined : "_blank"
                                                }
                                                rel={
                                                    option.label === "Email"
                                                        ? undefined
                                                        : "noreferrer"
                                                }
                                                aria-label={`Contact me via ${option.label}`}
                                                className="text-zinc-400 transition hover:text-violet-300"
                                            >
                                                <ArrowUpRight size={19} />
                                            </a>
                                        ) : (
                                            <span
                                                title={`Configure your ${option.label} details in Contact.tsx`}
                                                className="text-xs text-zinc-600"
                                            >
                                                Setup needed
                                            </span>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
