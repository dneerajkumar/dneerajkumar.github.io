"use client";
import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Database, Server, Cpu, Cloud, Terminal, 
  Layers, ChevronRight, CheckCircle2, Mail, 
  Phone, Linkedin, Github, Download, Zap, ShieldCheck
} from 'lucide-react';

// --- BACKGROUND COMPONENT (DB & DEVOPS ELEMENTS) ---
const BackgroundElements = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.03]">
      {/* Floating DB Nodes */}
      <motion.div style={{ y: y1, rotate }} className="absolute top-20 left-[10%] text-blue-600">
        <Database size={300} strokeWidth={0.5} />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute bottom-40 right-[5%] text-orange-500">
        <Server size={400} strokeWidth={0.5} />
      </motion.div>
      {/* DevOps Pipeline Pattern */}
      <svg width="100%" height="100%" className="absolute inset-0">
        <pattern id="pipeline" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="1" fill="currentColor" />
          <path d="M 0 50 L 100 50" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#pipeline)" />
      </svg>
    </div>
  );
};

export default function NeerajFinalPortfolio() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const handleDownload = () => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#2563eb', '#f97316', '#10b981'] });
  };

  const experiences = [
    { 
      role: "Senior Database Administrator", company: "Tech Solutions", date: "2023 - Present", 
      details: ["Managed 50TB+ AWS RDS instances", "99.99% Uptime achievement", "Terraform for DB automation"],
      stack: ["PostgreSQL", "AWS Aurora", "Terraform"]
    },
    { 
      role: "Database Engineer", company: "DataSystems Ltd", date: "2021 - 2023", 
      details: ["Query optimization reducing load by 40%", "MongoDB Sharding", "DR Strategy Implementation"],
      stack: ["MySQL", "MongoDB", "Python"]
    },
    { 
      role: "Associate DBA", company: "CloudWare Inc", date: "2020 - 2021", 
      details: ["Schema migrations", "Security hardening", "Backup automation"],
      stack: ["MySQL", "Linux Admin", "IAM Security"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfe] text-slate-900 font-sans selection:bg-blue-100 relative">
      <BackgroundElements />
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-[100] origin-left" style={{ scaleX }} />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100 px-8 py-5 flex justify-between items-center">
        <span className="font-black text-2xl tracking-tighter text-blue-600">DNK.</span>
        <div className="flex gap-4">
          <button onClick={handleDownload} className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-bold hover:shadow-lg transition-all shadow-blue-200">
            <Download size={14} /> Resume
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8 relative z-10">
        {/* HERO SECTION */}
        <section className="py-24 md:py-48 flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <h2 className="text-xl md:text-3xl font-medium text-slate-400 mb-4 flex items-center gap-3 italic">
              <Terminal size={24} className="text-blue-600" /> I am
            </h2>
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter text-slate-900 leading-[0.8] mb-12">
              D NEERAJ <br /><span className="text-blue-600">KUMAR</span>
            </h1>
            <div className="flex flex-wrap gap-4">
               <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-xl font-bold text-xs border border-blue-100 uppercase tracking-widest">Senior DBA Specialist</span>
               <span className="px-4 py-2 bg-orange-50 text-orange-600 rounded-xl font-bold text-xs border border-orange-100 uppercase tracking-widest">DevOps Engineer</span>
            </div>
          </motion.div>
        </section>

        {/* SEMANTIC ANIMATED EXPERIENCE SECTION */}
        <section className="py-24">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-black tracking-tight">Professional Experience</h2>
            <div className="h-[2px] flex-1 bg-slate-100" />
          </div>

          <div className="grid gap-6">
            {experiences.map((exp, idx) => (
              <motion.article 
                key={idx}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`bg-white border rounded-[2.5rem] transition-all duration-500 overflow-hidden ${
                  expandedIdx === idx ? 'border-blue-500 shadow-2xl ring-4 ring-blue-500/5' : 'border-slate-200 shadow-sm hover:border-blue-300'
                }`}
              >
                <button 
                  onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                  className="w-full text-left p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 group"
                >
                  <div className="flex gap-8 items-center">
                    <div className={`p-5 rounded-[2rem] transition-colors ${expandedIdx === idx ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'bg-slate-50 text-blue-600'}`}>
                      <Server size={32} />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 block">{exp.date}</span>
                      <h3 className="text-3xl font-black text-slate-900">{exp.role}</h3>
                      <p className="text-blue-600 font-bold uppercase text-xs tracking-[0.2em]">{exp.company}</p>
                    </div>
                  </div>
                  <motion.div 
                    animate={{ rotate: expandedIdx === idx ? 90 : 0 }} 
                    className={`p-4 rounded-full transition-colors ${expandedIdx === idx ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-400'}`}
                  >
                    <ChevronRight size={24} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedIdx === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: 'auto', opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                      className="px-12 pb-12 pt-4"
                    >
                      <div className="border-t border-slate-100 pt-8 grid md:grid-cols-2 gap-12">
                        <div>
                          <h4 className="text-xs font-black uppercase text-blue-600 mb-6 tracking-widest">Core Accomplishments</h4>
                          <ul className="space-y-4">
                            {exp.details.map((detail, i) => (
                              <li key={i} className="flex gap-4 text-slate-600 leading-relaxed font-medium">
                                <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xs font-black uppercase text-blue-600 mb-6 tracking-widest">Stack Expertise</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.stack.map(s => (
                              <span key={s} className="px-4 py-2 bg-slate-50 text-slate-500 font-bold text-[10px] rounded-xl border border-slate-200 uppercase tracking-tighter">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            ))}
          </div>
        </section>

        {/* IMPACT METRICS */}
        <section className="py-24 grid md:grid-cols-4 gap-6">
           {[
             { label: "Query Optimization", value: "35%", icon: <Zap /> },
             { label: "High Availability", value: "99.9%", icon: <ShieldCheck /> },
             { label: "Managed Data", value: "50TB+", icon: <Database /> },
             { label: "AWS Deployments", value: "150+", icon: <Cloud /> }
           ].map((stat, i) => (
             <div key={i} className="bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-sm text-center group hover:bg-blue-600 transition-colors">
               <div className="mb-4 flex justify-center text-blue-600 group-hover:text-white transition-colors">{stat.icon}</div>
               <div className="text-3xl font-black mb-1 group-hover:text-white transition-colors">{stat.value}</div>
               <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-100 transition-colors">{stat.label}</div>
             </div>
           ))}
        </section>

        {/* FINAL CONTACT */}
        <section className="py-24 pb-48">
          <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none uppercase italic">Let's Connect.</h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="mailto:d.neerajkumar480@gmail.com" className="bg-blue-600 text-white px-10 py-5 rounded-3xl font-black uppercase text-xs flex items-center justify-center gap-3">
                <Mail size={18} /> d.neerajkumar480@gmail.com
              </a>
              <a href="tel:+917077600849" className="bg-white text-black px-10 py-5 rounded-3xl font-black uppercase text-xs flex items-center justify-center gap-3">
                <Phone size={18} /> +91 7077600849
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-8 py-12 border-t border-slate-100 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
        <p>D Neeraj Kumar © {new Date().getFullYear()}</p>
        <div className="flex gap-8">
           <a href="#" className="hover:text-blue-600 flex items-center gap-2"><Linkedin size={14}/> LinkedIn</a>
           <a href="#" className="hover:text-blue-600 flex items-center gap-2"><Github size={14}/> GitHub</a>
        </div>
      </footer>
    </div>
  );
}