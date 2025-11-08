import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'SaaS Dashboard',
    stack: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],
    desc: 'Analytics dashboard with role-based access, charts, and subscriptions.',
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'E-commerce API',
    stack: ['Laravel', 'MySQL', 'Redis', 'Stripe'],
    desc: 'Modular API with payments, inventory, and webhooks.',
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Portfolio Engine',
    stack: ['Next.js', 'MDX', 'Framer Motion'],
    desc: 'Blazing-fast, content-driven personal site generator.',
    repo: 'https://github.com/',
    demo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Work</h2>
            <p className="mt-2 text-slate-400">A few recent projects I’ve built or contributed to.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex text-emerald-400 hover:text-emerald-300">Let’s build yours →</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
            >
              <div className="aspect-video rounded-lg bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 ring-1 ring-inset ring-white/10" />
              <h3 className="mt-4 font-semibold text-white tracking-tight">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
                {p.stack.map((s) => (
                  <span key={s} className="px-2 py-1 rounded-full bg-white/5 border border-white/10">{s}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <a href={p.repo} className="inline-flex items-center gap-1 text-slate-200 hover:text-white">
                  <Github size={16} /> Code
                </a>
                <a href={p.demo} className="inline-flex items-center gap-1 text-slate-200 hover:text-white">
                  <ExternalLink size={16} /> Live
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
