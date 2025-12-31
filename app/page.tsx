"use client";
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useInView } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Github, Linkedin, Mail, Database, Phone, Server, 
  ShieldCheck, Zap, TrendingUp, ChevronRight, 
  Cloud, Download, Cpu, CheckCircle2, 
  ArrowRight, ShieldAlert, Layers, Box, Globe, Lock
} from 'lucide-react';

// --- ANIMATED SECTION WRAPPER ---
const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

// --- CURVY PATH COMPONENT ---
const ScrollPath = () => {
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 30, damping: 20 });

  return (
    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-full max-w-6xl pointer-events-none z-0 overflow-hidden">
      <svg width="100%" height="100%" viewBox="0 0 400 2000" fill="none" className="opacity-10">
        <motion.path
          d="M200 0 Q 350 200 200 400 T 200 800 T 200 1200 T 200 1600"
          stroke="#2563eb"
          strokeWidth="4"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
};

export default function NeerajPortfolio() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const handleDownload = () => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#2563eb', '#f97316', '#10b981'] });
  };

  const experiences = [
    { 
      role: "Senior DBA", company: "Tech Solutions", date: "2023 - Present", 
      details: ["Managed 50TB+ AWS RDS instances", "99.99% Uptime achievement", "Terraform for DB automation"],
      tags: ["PostgreSQL", "AWS Aurora"]
    },
    { 
      role: "Database Engineer", company: "DataSystems Ltd", date: "2021 - 2023", 
      details: ["Query optimization reducing load by 40%", "MongoDB Sharding", "DR Strategy Implementation"],
      tags: ["MySQL", "MongoDB"]
    },
    { 
      role: "Associate DBA", company: "CloudWare Inc", date: "2020 - 2021", 
      details: ["Schema migrations", "Security hardening", "Backup automation"],
      tags: ["MySQL", "Linux"]
    }
  ];

  const projects = [
    { title: "Zero-Downtime Migration", desc: "Legacy to Cloud migration for fintech client.", icon: <Globe className="text-blue-500" />, stat: "12TB Sync" },
    { title: "Security Hardening", desc: "Enterprise-wide IAM and VPC redesign.", icon: <Lock className="text-orange-500" />, stat: "ISO Ready" },
    { title: "Performance Tuning", desc: "Automated indexing engine for SaaS app.", icon: <Zap className="text-emerald-500" />, stat: "-60% Latency" },
    { title: "K8s DB Operator", desc: "Cloud-native database orchestration.", icon: <Box className="text-purple-500" />, stat: "K8s Native" }
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfe] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden relative">
      <ScrollPath />
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-[100] origin-left" style={{ scaleX }} />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100 px-8 py-5 flex justify-between items-center">
        <span className="font-black text-2xl tracking-tighter text-blue-600 uppercase">DNK<span className="text-orange-500">.</span></span>
        <button onClick={handleDownload} className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:shadow-lg transition-all">
          <Download size={14} /> Resume
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-8 relative z-10">
        {/* HERO */}
        <section className="py-24 md:py-48 text-center flex flex-col items-center">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter text-slate-900 leading-none mb-10">
              D NEERAJ <br /><span className="text-blue-600">KUMAR</span>
            </h1>
            <p className="text-2xl text-slate-500 max-w-2xl mx-auto font-medium italic">
              Empowering data systems with 3.5+ years of DBA & DevOps excellence.
            </p>
          </motion.div>
        </section>

        {/* EXPERIENCE WITH CURVY PATH LOGIC */}
        <section className="py-20">
          <FadeInSection>
            <h2 className="text-5xl font-black mb-20 tracking-tight text-center">Work Experience</h2>
          </FadeInSection>
          
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <FadeInSection key={idx} delay={idx * 0.1}>
                <div 
                  className={`bg-white border rounded-[3rem] transition-all duration-500 ${expandedIdx === idx ? 'border-blue-500 shadow-2xl p-10' : 'border-slate-200 p-8 shadow-sm hover:border-blue-300'}`}
                  onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                >
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6 cursor-pointer">
                    <div className="flex gap-6 items-center">
                      <div className={`p-4 rounded-3xl ${expandedIdx === idx ? 'bg-blue-600 text-white' : 'bg-slate-100 text-blue-600'}`}>
                        <Server size={30} />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{exp.date}</span>
                        <h4 className="text-3xl font-bold">{exp.role}</h4>
                        <p className="text-blue-600 font-bold text-sm uppercase">{exp.company}</p>
                      </div>
                    </div>
                    <ChevronRight className={`transition-transform duration-500 ${expandedIdx === idx ? 'rotate-90 text-blue-600' : 'text-slate-300'}`} size={32} />
                  </div>

                  <AnimatePresence>
                    {expandedIdx === idx && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pt-8 mt-8 border-t border-slate-100">
                        <div className="grid md:grid-cols-2 gap-8">
                          <ul className="space-y-4">
                            {exp.details.map((d, i) => (
                              <li key={i} className="flex gap-3 text-slate-600 items-start">
                                <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" />
                                {d}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 content-start">
                            {exp.tags.map(t => <span key={t} className="px-4 py-1.5 bg-slate-50 text-slate-500 text-[10px] font-black rounded-xl border border-slate-200 uppercase">{t}</span>)}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* PROJECTS / ACHIEVEMENTS BENTO GRID */}
        <section className="py-32">
          <FadeInSection>
            <h2 className="text-5xl font-black mb-20 tracking-tight">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {projects.map((proj, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-sm flex flex-col justify-between group hover:border-blue-500 transition-all"
                >
                  <div className="p-4 bg-slate-50 rounded-2xl w-fit mb-6 group-hover:bg-blue-50 transition-colors">{proj.icon}</div>
                  <div>
                    <h5 className="font-black text-blue-600 text-xs uppercase mb-2 tracking-widest">{proj.stat}</h5>
                    <h4 className="text-xl font-bold mb-3">{proj.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{proj.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeInSection>
        </section>

        {/* FINAL CONTACT */}
        <FadeInSection>
          <section id="contact" className="py-24 mb-20">
            <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
              <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter uppercase leading-none">Let's talk <br />Data.</h2>
              <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
                <a href="mailto:d.neerajkumar480@gmail.com" className="bg-blue-600 text-white px-12 py-5 rounded-3xl font-black uppercase text-sm hover:scale-105 transition-transform">Email Neeraj</a>
                <a href="tel:+917077600849" className="bg-white text-black px-12 py-5 rounded-3xl font-black uppercase text-sm hover:bg-orange-500 hover:text-white transition-all">+91 7077600849</a>
              </div>
              <Database className="absolute -bottom-10 -right-10 w-96 h-96 text-white/[0.03] rotate-12" />
            </div>
          </section>
        </FadeInSection>
      </main>

      <footer className="max-w-6xl mx-auto px-8 py-12 border-t border-slate-100 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
        <p>D Neeraj Kumar © {new Date().getFullYear()}</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-blue-600">LinkedIn</a>
          <a href="#" className="hover:text-blue-600">GitHub</a>
        </div>
      </footer>
    </div>
  );
}