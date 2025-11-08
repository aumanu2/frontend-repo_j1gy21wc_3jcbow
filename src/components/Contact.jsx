import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // Since no backend is specified for email, simulate success
    setTimeout(() => setStatus('Thanks! I will get back to you soon.'), 800);
  };

  return (
    <section id="contact" className="bg-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Let’s work together</h2>
          <p className="mt-2 text-slate-400">
            Have a project in mind? I build production-grade apps with Laravel and Next.js.
          </p>
        </div>

        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-4 max-w-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your name"
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="Email address"
              className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
              required
            />
          </div>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            required
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-6 py-3 transition"
          >
            <Send size={18} /> Send message
          </button>
          {status && (
            <p className="text-sm text-emerald-300 inline-flex items-center gap-2"><Mail size={16} /> {status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
