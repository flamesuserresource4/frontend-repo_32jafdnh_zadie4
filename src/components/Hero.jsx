import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative">
      {/* Gradient background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              Available for freelance work
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
              Hi, I’m <span className="bg-gradient-to-tr from-indigo-400 to-cyan-300 bg-clip-text text-transparent">Your Name</span>
            </h1>
            <p className="mt-4 text-lg text-neutral-300 leading-relaxed">
              Full‑stack web developer crafting clean, performant, and delightful digital experiences.
              I build robust backends and engaging frontends with modern tools.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-5 py-3 font-semibold shadow-sm hover:shadow transition shadow-white/10"
              >
                View Projects
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-5 py-3 font-semibold text-white hover:bg-neutral-800 transition"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm text-neutral-400">
              <span className="uppercase tracking-wider text-xs text-neutral-500">Tech:</span>
              <Badge label="React" />
              <Badge label="TypeScript" />
              <Badge label="Node.js" />
              <Badge label="FastAPI" />
              <Badge label="MongoDB" />
              <Badge label="Tailwind" />
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="aspect-square rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-950 shadow-inner overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <div className="mx-auto h-28 w-28 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 shadow-lg shadow-cyan-500/20 ring-8 ring-neutral-950" />
                <p className="mt-6 text-xl font-semibold">Web Developer</p>
                <p className="mt-1 text-neutral-400">JavaScript • Python • Cloud</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Badge({ label }) {
  return (
    <span className="rounded-md border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 text-xs text-neutral-300">
      {label}
    </span>
  );
}
