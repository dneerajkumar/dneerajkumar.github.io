import React from 'react';
import { Github, Linkedin, Mail, Database, ShieldCheck, Zap, Server, Terminal, ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const skills = [
    { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"], icon: <Database className="text-blue-500" /> },
    { category: "Infrastructure", items: ["AWS RDS", "Docker", "Kubernetes", "Linux"], icon: <Server className="text-emerald-500" /> },
    { category: "Expertise", items: ["Query Tuning", "Replication", "Backups", "Sharding"], icon: <Zap className="text-yellow-500" /> }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 selection:bg-blue-500/30 font-sans">
      <nav className="flex justify-between items-center px-8 py-10 max-w-6xl mx-auto uppercase tracking-widest text-[10px] opacity-50">
        <span className="font-bold">DBA_PORTFOLIO_V1.0</span>
        <div className="flex gap-6">
          <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
          <a href="#work" className="hover:text-blue-400 transition-colors">Systems</a>
          <a href="mailto:your@email.com" className="hover:text-blue-400 transition-colors">Contact</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8 py-12">
        <section className="mb-32">
          <div className="inline-block px-3 py-1 border border-blue-500/30 rounded-full text-blue-400 text-xs mb-6 bg-blue-500/5">
            3.5+ Years of Data Engineering
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-[0.9]">
            Reliable <span className="text-blue-600">Data</span> <br /> Architect.
          </h1>
          <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
            Specializing in high-availability database administration, performance tuning, and scalable infrastructure.
          </p>
        </section>

        <section id="about" className="grid md:grid-cols-2 gap-16 mb-40 pt-20 border-t border-white/10">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 mb-8 font-bold">Background</h2>
            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
              I am a Senior Database Administrator with a track record of managing distributed clusters. I focus on ensuring that data remains the most reliable asset of an organization.
            </p>
            <div className="flex gap-4">
               <button className="p-3 rounded-xl bg-white text-black hover:bg-gray-200 transition-all"><Linkedin size={20}/></button>
               <button className="p-3 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-600 transition-all"><Github size={20}/></button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {skills.map((skill) => (
              <div key={skill.category} className="p-6 bg-[#0a0a0a] rounded-2xl border border-white/5 flex items-start gap-5 hover:border-blue-500/30 transition-colors">
                <div className="p-3 bg-white/5 rounded-lg">{skill.icon}</div>
                <div>
                  <h4 className="font-bold mb-2 text-white">{skill.category}</h4>
                  <p className="text-sm text-gray-500">{skill.items.join(" • ")}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-br from-blue-700 to-blue-900 rounded-[2rem] p-12 text-center text-white relative overflow-hidden">
          <h2 className="text-4xl font-bold mb-4 relative z-10">Scale your systems today.</h2>
          <p className="mb-8 opacity-80 relative z-10 font-medium">Currently accepting new consulting projects.</p>
          <a href="mailto:your@email.com" className="inline-flex items-center gap-2 bg-white text-blue-700 px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all relative z-10">
            Get in touch
          </a>
          <Database className="absolute -bottom-10 -right-10 text-white/10 w-64 h-64 rotate-12" />
        </section>
      </main>
    </div>
  );
}