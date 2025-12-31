import React from 'react';
import { Github, Linkedin, Mail, Database, Zap, Activity, Shield, Server, ArrowUpRight, BarChart3 } from 'lucide-react';

export default function AdvancedPortfolio() {
  const stats = [
    { label: "Uptime Managed", value: "99.99%", desc: "High availability clusters" },
    { label: "Data Migrated", value: "50TB+", desc: "Zero-downtime migrations" },
    { label: "Query Speedup", value: "40%", desc: "Avg. latency reduction" },
    { label: "Experience", value: "3.5y+", desc: "Full-cycle DBA" }
  ];

  const caseStudies = [
    {
      title: "Query Optimization Strategy",
      problem: "Slow checkout process due to unoptimized JOINs.",
      result: "Redesigned indexing strategy, reducing query time from 1.2s to 45ms.",
      tags: ["PostgreSQL", "Explain Analyze"]
    },
    {
      title: "Disaster Recovery Automation",
      problem: "Manual backup processes were prone to human error.",
      result: "Implemented automated WAL archiving and point-in-time recovery.",
      tags: ["AWS S3", "Python", "Bash"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-100 font-sans selection:bg-blue-500/30">
      {/* Background Glow */}
      <div className="fixed top-0 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-8 py-8 flex justify-between items-center relative z-10">
        <span className="font-black text-xl tracking-tighter italic">DBA<span className="text-blue-500">PRO</span></span>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-zinc-500">
          <a href="#metrics" className="hover:text-white">Metrics</a>
          <a href="#work" className="hover:text-white">Experience</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8 py-20 relative z-10">
        {/* Hero Section */}
        <header className="mb-40">
          <div className="flex items-center gap-2 mb-6">
            <span className="h-[1px] w-8 bg-blue-500"></span>
            <span className="text-blue-500 text-xs font-black uppercase tracking-widest">Senior Database Administrator</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-10 leading-[0.85]">
            Scale without <br /><span className="text-zinc-500">compromise.</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <p className="max-w-lg text-zinc-400 text-lg leading-relaxed">
              Managing complex data architectures with a focus on stability, security, and extreme performance tuning.
            </p>
            <div className="flex gap-4">
              <a href="mailto:your@email.com" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all">Get in Touch</a>
            </div>
          </div>
        </header>

        {/* Metrics Section */}
        <section id="metrics" className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-40">
          {stats.map((s, i) => (
            <div key={i} className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl hover:border-blue-500/50 transition-colors">
              <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-xs font-bold uppercase text-blue-500 tracking-wider mb-2">{s.label}</div>
              <div className="text-sm text-zinc-500">{s.desc}</div>
            </div>
          ))}
        </section>

        {/* Case Studies / Work Section */}
        <section id="work" className="mb-40">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-4xl font-bold tracking-tight">Case Studies</h2>
            <span className="text-zinc-500 text-sm font-mono tracking-tighter pb-2">/ SELECTED_LOGS</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <div key={i} className="group p-10 bg-zinc-900/30 border border-zinc-800 rounded-[2.5rem] hover:bg-zinc-900/50 transition-all">
                <div className="flex justify-between items-start mb-8">
                  <div className="p-3 bg-blue-500/10 rounded-2xl text-blue-500"><Activity size={24} /></div>
                  <ArrowUpRight className="text-zinc-700 group-hover:text-blue-500 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{cs.title}</h3>
                <div className="space-y-4 mb-8">
                  <p className="text-sm text-zinc-500 font-medium"><span className="text-zinc-300">Problem:</span> {cs.problem}</p>
                  <p className="text-sm text-zinc-500 font-medium"><span className="text-blue-400 text-white/90">Result:</span> {cs.result}</p>
                </div>
                <div className="flex gap-2">
                  {cs.tags.map(t => <span key={t} className="text-[10px] font-bold px-3 py-1 bg-zinc-800 rounded-full text-zinc-400">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section id="contact" className="relative p-12 md:p-24 bg-blue-600 rounded-[3rem] overflow-hidden text-center">
            <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Ready to optimize your data?</h2>
                <p className="text-blue-100 text-lg mb-10 max-w-md mx-auto opacity-80 font-medium">Currently open to freelance DBA roles and full-time engineering positions.</p>
                <div className="flex justify-center gap-4">
                    <a href="mailto:your@email.com" className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold shadow-xl">Contact Me</a>
                    <a href="https://linkedin.com" className="bg-blue-700 text-white px-10 py-4 rounded-full font-bold border border-blue-400 hover:bg-blue-800">LinkedIn</a>
                </div>
            </div>
            {/* Visual background icon */}
            <Database className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] text-white/5 pointer-events-none" />
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-8 py-20 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-500 text-xs font-bold uppercase tracking-[0.2em]">
        <p>© {new Date().getFullYear()} — Your Name</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white">GitHub</a>
          <a href="#" className="hover:text-white">Resume</a>
        </div>
      </footer>
    </div>
  );
}