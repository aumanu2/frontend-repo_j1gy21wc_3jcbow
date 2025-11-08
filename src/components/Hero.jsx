import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left: Intro */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-slate-200">Available for freelance</span>
            </div>

            <h1 className="font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight">
              Hi, I’m <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">a Web Developer</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-xl">
              I craft high-performance web apps with Laravel and Next.js — clean code, modern UX, and scalable architectures.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-5 py-3 transition"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 hover:border-white/30 text-white font-semibold px-5 py-3 transition"
              >
                Get in touch <Download size={18} />
              </a>
            </div>

            <div className="pt-4 flex items-center gap-4 text-sm text-slate-300">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Laravel</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Next.js</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">TypeScript</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">Tailwind</span>
            </div>
          </div>

          {/* Right: 3D Spline scene */}
          <div className="relative h-[420px] md:h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-slate-950/40">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Subtle gradient overlays that don't block interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
