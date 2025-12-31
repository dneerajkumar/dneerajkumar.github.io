"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Github, Linkedin, Mail, Database, Phone, Server, 
  ShieldCheck, Zap, TrendingUp, ChevronRight, 
  Cloud, Download, Cpu, ExternalLink, CheckCircle2
} from 'lucide-react';

export default function NeerajPortfolio() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const schemaOpacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 0.05]);

  // Handle Resume Download with Confetti
  const handleDownload = () => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    // Mock download trigger
    console.log("Downloading Resume...");
    // window.open('/path-to-your-resume.pdf', '_blank');
  };

  const skillGroups = [
    {
      title: "Database Administration",
      icon: <Database className="text-blue-600" />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Performance Tuning", "Replication"]
    },
    {
      title: "DevOps & AWS Cloud",
      icon: <Cloud className="text-orange-500" />,
      skills: ["AWS RDS/EC2", "Docker", "Kubernetes", "Terraform", "CI/CD"]
    },
    {
      title: "Security & Monitoring",
      icon: <ShieldCheck className="text-emerald-500" />,
      skills: ["Grafana", "Prometheus", "IAM", "VPC Design", "DR Planning"]
    }
  ];

  const experiences = [
    { 
      role: "Senior DBA", 
      company: "Tech Solutions", 
      date: "2023 - Present", 
      details: [
        "Architected AWS RDS Multi-AZ deployments ensuring 99.99% availability.",
        "Optimized PostgreSQL query performance, reducing average latency by 45%.",
        "Automated database scaling and backup validation using Terraform and Python."
      ],
      tags: ["AWS Aurora", "High Availability", "IaC"]
    },
    { 
      role: "Database Engineer", 
      company: "DataSystems Ltd", 
      date: "2021 - 2023", 
      details: [
        "Managed large-scale MongoDB clusters and migration from on-prem to AWS.",
        "Implemented sharding strategies to handle 10x traffic growth.",
        "Configured Grafana dashboards for proactive monitoring and alerting."
      ],
      tags: ["NoSQL", "Migration", "Monitoring"]
    },
    { 
      role: "Associate DBA", 
      company: "CloudWare Inc", 
      date: "2020 - 2021", 
      details: [
        "Routine performance tuning of MySQL instances and index optimization.",
        "Resolved 100+ critical production database issues with zero data loss.",
        "Ensured data security compliance through AWS IAM and VPC hardening."
      ],
      tags: ["MySQL", "Security", "Backup"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfe] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-[100] origin-left" style={{ scaleX }} />

      {/* BACKGROUND SCHEMA DECORATION */}
      <motion.div style={{ opacity: schemaOpacity }} className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-[0.03]">
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect x="150" y="100" width="120" height="80" rx="8" fill="none" stroke="#2563eb" strokeWidth="2" />
          <line x1="270" y1="140" x2="400" y2="250" stroke="#2563eb" strokeWidth="1" strokeDasharray="4" />
          <rect x="400" y="250" width="120" height="80" rx="8" fill="none" stroke="#f97316" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100 px-8 py-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-black text-2xl tracking-tighter text-blue-600 uppercase">DNK<span className="text-orange-500">.</span></span>
          <div className="flex items-center gap-6">
            <button 
              onClick={handleDownload}
              className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              <Download size={14} /> Download CV
            </button>
            <a href="tel:+917077600849" className="text-xs font-bold text-slate-900">+91 7077600849</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8 relative z-10">
        
        {/* HERO */}
        <section className="py-24 md:py-40">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-slate-900 leading-[0.8] mb-10">
              D NEERAJ <br /><span className="text-blue-600">KUMAR</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
              <p className="text-2xl text-slate-500 max-w-xl leading-snug font-medium italic">
                "Scaling infrastructure through precise database engineering and automated AWS DevOps workflows."
              </p>
              <button 
                onClick={handleDownload}
                className="md:hidden flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold"
              >
                <Download size={18} /> Resume
              </button>
            </div>
          </motion.div>
        </section>

        {/* SKILL CLOUD */}
        <section id="skills" className="py-20 border-t border-slate-100">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 mb-16">Technical Mastery</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillGroups.map((group, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm">
                <div className="mb-6 p-4 bg-slate-50 w-fit rounded-2xl">{group.icon}</div>
                <h3 className="text-xl font-bold mb-6">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <span key={si} className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-lg border border-slate-200 uppercase tracking-tighter">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXPANDABLE EXPERIENCE */}
        <section id="experience" className="py-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-4xl font-black tracking-tight text-slate-900">Experience Journey</h2>
            <div className="text-emerald-600 font-bold flex items-center gap-2 text-sm uppercase">
              <TrendingUp size={18} /> 3.5+ Years Field Exp
            </div>
          </div>

          <div className="space-y-6">
            {experiences.map((item, idx) => (
              <motion.div 
                key={idx}
                layout
                className={`bg-white border transition-all duration-300 rounded-[2.5rem] overflow-hidden ${
                  expandedIdx === idx ? 'border-blue-500 shadow-2xl' : 'border-slate-200 hover:border-blue-200 shadow-sm'
                }`}
              >
                <button 
                  onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                  className="w-full text-left p-8 md:p-10 flex flex-col md:flex-row justify-between items-center gap-6"
                >
                  <div className="flex gap-6 items-center">
                    <div className={`p-4 rounded-2xl ${expandedIdx === idx ? 'bg-blue-600 text-white' : 'bg-slate-50 text-blue-600'}`}>
                      <Server size={24} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.date}</span>
                      <h4 className="text-2xl font-bold text-slate-900">{item.role}</h4>
                      <p className="font-bold text-blue-600/70 text-sm uppercase tracking-tighter">{item.company}</p>
                    </div>
                  </div>
                  <motion.div animate={{ rotate: expandedIdx === idx ? 90 : 0 }} className="p-3 bg-slate-50 rounded-full text-slate-400">
                    <ChevronRight size={20} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expandedIdx === idx && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-8 md:px-24 pb-10">
                      <div className="pt-6 border-t border-slate-100">
                        <ul className="space-y-4">
                          {item.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex gap-4 text-slate-600 leading-relaxed text-sm">
                              <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-1" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="relative z-10 text-white">
              <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase leading-none">Let's build <br />reliable data.</h2>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <a href="mailto:d.neerajkumar480@gmail.com" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black uppercase text-sm hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-xl shadow-blue-900/20">
                  <Mail size={18} /> d.neerajkumar480@gmail.com
                </a>
                <a href="tel:+917077600849" className="bg-blue-700 text-white border border-blue-400 px-10 py-5 rounded-2xl font-black uppercase text-sm hover:bg-blue-800 transition-all flex items-center justify-center gap-3">
                  <Phone size={18} /> +91 7077600849
                </a>
              </div>
            </div>
            <Database className="absolute -bottom-10 -right-10 w-80 h-80 text-white/10 rotate-12" />
          </div>
        </section>

      </main>

      <footer className="max-w-6xl mx-auto px-8 py-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 gap-6">
        <p>D Neeraj Kumar © {new Date().getFullYear()}</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-2"><Linkedin size={14}/> LinkedIn</a>
          <a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-2"><Github size={14}/> GitHub</a>
        </div>
      </footer>
    </div>
  );
}