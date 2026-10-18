
const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="container-width flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <a href="#home" className="text-lg font-bold tracking-tight">
          SK<span className="text-violet-400">.</span>
        </a>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-5 gap-y-3"
        >
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} Saad Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
