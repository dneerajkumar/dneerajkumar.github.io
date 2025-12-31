"use client";
import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { 
  Github, Linkedin, Mail, Database, Phone, Server, 
  ShieldCheck, Zap, TrendingUp, ChevronRight, 
  Container, Cloud, Terminal, Workflow 
} from 'lucide-react';

export default function NeerajPortfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const schemaOpacity = useTransform(scrollYProgress, [0, 0.2], [0.5, 0.1]);

  const skillGroups = [
    {
      title: "Database Administration",
      icon: <Database className="text-blue-600" />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Query Optimization", "Replication", "Sharding"]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="text-orange-500" />,
      skills: ["AWS (RDS/EC2)", "Docker", "Kubernetes", "CI/CD Pipelines", "Terraform", "Linux Admin"]
    },
    {
      title: "Monitoring & Security",
      icon: <ShieldCheck className="text-emerald-500" />,
      skills: ["Prometheus", "Grafana", "Data Encryption", "IAM", "VPC Security", "Backup Recovery"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfe] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      
      {/* Scroll Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-[70] origin-left" style={{ scaleX }} />

      {/* BACKGROUND SCHEMA DECORATION */}
      <motion.div 
        style={{ opacity: schemaOpacity }}
        className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      >
        <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-[0.03]">
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {/* Visualizing Database Tables */}
          <rect x="150" y="100" width="120" height="80" rx="8" fill="none" stroke="#2563eb" strokeWidth="2" />
          <line x1="270" y1="140" x2="400" y2="250" stroke="#2563eb" strokeWidth="1" strokeDasharray="4" />
          <rect x="400" y="250" width="120" height="80" rx="8" fill="none" stroke="#f97316" strokeWidth="2" />
        </svg>
      </motion.div>

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">
          <motion.span whileHover={{ scale: 1.05 }} className="font-black text-2xl tracking-tighter text-blue-600 cursor-default">
            DNK<span className="text-orange-500">.</span>
          </motion.span>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">
              <a href="#skills" className="hover:text-blue-600 transition-colors">Stack</a>
              <a href="#experience" className="hover:text-blue-600 transition-colors">Journey</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <a href="tel:+917077600849" className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">
              +91 7077600849
            </a>
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
                "Scaling infrastructure through precise database engineering and automated DevOps workflows."
              </p>
              <div className="bg-orange-50 border border-orange-100 p-6 rounded-3xl">
                <p className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-1">Current Focus</p>
                <p className="text-slate-800 font-bold">Cloud Infrastructure & High-Availability Systems</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SKILLS SECTION (DBA + DEVOPS) */}
        <section id="skills" className="py-20 border-t border-slate-100">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 mb-16">Technical Stack</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillGroups.map((group, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 bg-white border border-slate-200 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="mb-6 p-4 bg-slate-50 w-fit rounded-2xl">{group.icon}</div>
                <h3 className="text-xl font-bold mb-6">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <span key={si} className="px-3 py-1 bg-slate-100 text-slate-600 text-[11px] font-bold rounded-lg border border-slate-200 uppercase">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* DATA FLOW ANIMATION SECTION */}
        <section className="py-20 hidden md:block">
           <div className="h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent w-full relative">
              <motion.div 
                animate={{ x: ["0%", "100%"] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute -top-1 w-2 h-2 bg-blue-600 rounded-full shadow-[0_0_15px_blue]"
              />
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-blue-400 uppercase tracking-widest">Continuous Data Sync</span>
           </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-4xl font-black tracking-tight text-slate-900">Experience Journey</h2>
            <div className="text-emerald-600 font-bold flex items-center gap-2">
              <TrendingUp size={20} /> Total Experience: 3.5+ Years
            </div>
          </div>

          <div className="space-y-4">
            {[
              { role: "Senior DBA", company: "Tech Solutions", date: "2023 - Pres", color: "blue" },
              { role: "Database Engineer", company: "DataSystems Ltd", date: "2021 - 23", color: "orange" },
              { role: "Associate DBA", company: "CloudWare Inc", date: "2020 - 21", color: "emerald" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group p-8 md:p-12 bg-white border border-slate-200 rounded-[2.5rem] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-blue-200 transition-all cursor-default"
              >
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.date}</span>
                  <h4 className="text-3xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.role}</h4>
                  <p className="font-bold text-slate-500 uppercase tracking-tighter">{item.company}</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <ChevronRight size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-24">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">Let's build <br />tomorrow's core.</h2>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <a href="mailto:d.neerajkumar480@gmail.com" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black uppercase text-sm hover:scale-105 transition-transform flex items-center justify-center gap-3">
                  <Mail size={18} /> d.neerajkumar480@gmail.com
                </a>
                <a href="tel:+917077600849" className="bg-blue-700 text-white border border-blue-400 px-10 py-5 rounded-2xl font-black uppercase text-sm hover:bg-blue-800 transition-all flex items-center justify-center gap-3">
                  <Phone size={18} /> Schedule Call
                </a>
              </div>
            </div>
            {/* SCHEMA SVG REPEATED IN BACKGROUND OF CTA */}
            <Database className="absolute -bottom-10 -right-10 w-80 h-80 text-white/10 rotate-12" />
          </div>
        </section>

      </main>

      <footer className="max-w-6xl mx-auto px-8 py-12 border-t border-slate-100 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
        <p>D Neeraj Kumar © {new Date().getFullYear()}</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-600 transition-colors underline decoration-blue-200 underline-offset-4">LinkedIn</a>
          <a href="#" className="hover:text-blue-600 transition-colors underline decoration-blue-200 underline-offset-4">GitHub</a>
        </div>
      </footer>
    </div>
  );
}