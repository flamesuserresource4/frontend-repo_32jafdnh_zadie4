import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'DevPortfolio – Starter Kit',
    description:
      'A polished developer portfolio template with dark mode, project filtering, and MDX content. Built with React, Vite, and Tailwind.',
    tags: ['React', 'Vite', 'Tailwind'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'TaskFlow – Team Task Manager',
    description:
      'Collaborative task management with real‑time updates, Kanban boards, and role‑based permissions using FastAPI and MongoDB.',
    tags: ['FastAPI', 'MongoDB', 'WebSockets'],
    demo: '#',
    repo: '#',
  },
  {
    title: 'ShopLite – Headless Commerce',
    description:
      'Lightweight headless ecommerce front with Stripe integration and serverless functions. Optimized for performance and SEO.',
    tags: ['Next.js', 'Stripe', 'Serverless'],
    demo: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <p className="mt-2 text-neutral-400">A selection of things I’ve built recently.</p>
        </div>
        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition"
        >
          Let’s work together
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group rounded-2xl border border-neutral-800 bg-neutral-950/60 hover:bg-neutral-900/40 transition overflow-hidden"
          >
            <div className="aspect-video bg-gradient-to-tr from-neutral-900 to-neutral-950" />
            <div className="p-5">
              <h3 className="text-lg font-semibold group-hover:text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-neutral-800 bg-neutral-900/60 px-2 py-0.5 text-xs text-neutral-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={project.demo}
                  className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-3 py-1.5 text-sm font-semibold hover:shadow transition shadow-white/10"
                >
                  Live Demo
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={project.repo}
                  className="inline-flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-neutral-800 transition"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
