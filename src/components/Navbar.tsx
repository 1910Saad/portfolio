
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#09090d]/85 backdrop-blur-xl">
      <nav
        className="container-width flex h-[76px] items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="#home"
          className="text-xl font-bold tracking-tight"
          onClick={() => setMenuOpen(false)}
        >
          SK<span className="text-violet-400">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-400"
          >
            Let&apos;s Talk <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          type="button"
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-white/10 bg-[#09090d] px-5 py-5 md:hidden"
        >
          <div className="container-width flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-zinc-300 transition hover:text-violet-300"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-sm font-medium text-white"
            >
              Let&apos;s Talk <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
