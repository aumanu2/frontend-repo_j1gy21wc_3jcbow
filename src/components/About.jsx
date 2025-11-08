import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-slate-950 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
            <p className="mt-4 text-slate-400">
              I’m a full‑stack engineer specializing in Laravel and Next.js. I build robust APIs, modern frontends, and ship
              polished experiences with performance top‑of‑mind. I love designing clean architectures, automating deployments,
              and crafting delightful UI with Tailwind.
            </p>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Laravel', desc: 'RESTful APIs, Eloquent, Queues, Sanctum, Blade/Inertia, testing.' },
              { title: 'Next.js', desc: 'App Router, SSR/SSG, API routes, caching, edge functions.' },
              { title: 'Databases', desc: 'MySQL, PostgreSQL, MongoDB, Prisma/ORM best practices.' },
              { title: 'DevOps', desc: 'Docker, CI/CD, Nginx, Vercel, AWS, DigitalOcean.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
