import { useState } from 'react';
import { Code2, Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 bg-neutral-950/80 border-b border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-neutral-100 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-400">
            <Code2 className="h-5 w-5" />
          </span>
          <span>YourName.dev</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-neutral-300 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="h-6 w-px bg-neutral-800" />
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20 transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </a>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-md border border-neutral-800 p-2 text-neutral-300 hover:text-white hover:bg-neutral-900"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-neutral-800">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-neutral-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-neutral-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium text-white hover:bg-white/20 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Contact</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
