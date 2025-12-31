"use client";
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, Database, Phone, ExternalLink, Server, ShieldCheck, Zap, TrendingUp, ChevronRight } from 'lucide-react';

export default function NeerajPortfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const experiences = [
    { 
      year: "2023 - Present", 
      role: "Senior Database Administrator", 
      company: "Tech Solutions Corp", 
      color: "border-l-blue-500",
      desc: "Managing enterprise-scale PostgreSQL clusters with 99.9% uptime."
    },
    { 
      year: "2021 - 2023", 
      role: "Database Engineer", 
      company: "DataSystems Ltd", 
      color: "border-l-orange-500",
      desc: "Architected replication strategies and automated backup protocols."
    },
    { 
      year: "2020 - 2021", 
      role: "Associate DBA", 
      company: "CloudWare Inc", 
      color: "border-l-emerald-500",
      desc: "Specialized in performance tuning and query optimization."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      
      {/* Top Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-[60] origin-left" style={{ scaleX }} />

      {/* Modern Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">
          <span className="font-black text-2xl tracking-tighter text-blue-600">DNK<span className="text-orange-500">.</span></span>
          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <a href="tel:+917077600849" className="bg-blue-600 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              Let's Talk
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8">
        
        {/* Hero Section */}
        <section className="py-24 md:py-32 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for New Projects
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 leading-[0.9] mb-8">
              D Neeraj <br /><span className="text-blue-600">Kumar</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
              Experienced <span className="text-slate-900 font-semibold underline decoration-orange-400 decoration-4">Database Administrator</span> with 3.5+ years of expertise in optimizing high-traffic data ecosystems.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</span>
                <a href="mailto:d.neerajkumar480@gmail.com" className="font-semibold text-slate-900 hover:text-blue-600">d.neerajkumar480@gmail.com</a>
              </div>
              <div className="w-[1px] bg-slate-200 h-10 mx-4" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Call</span>
                <a href="tel:+917077600849" className="font-semibold text-slate-900 hover:text-blue-600">+91 7077600849</a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="relative hidden md:block"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-3xl rotate-3 opacity-10" />
            <div className="relative bg-white p-8 rounded-3xl border border-slate-200 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Performance", val: "94%", color: "text-emerald-500", icon: <Zap size={16}/> },
                  { label: "Security", val: "100%", color: "text-blue-500", icon: <ShieldCheck size={16}/> },
                  { label: "Latency", val: "-40ms", color: "text-orange-500", icon: <TrendingUp size={16}/> },
                  { label: "Uptime", val: "99.9%", color: "text-blue-600", icon: <Server size={16}/> },
                ].map((stat, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className={`${stat.color} mb-2`}>{stat.icon}</div>
                    <div className="text-2xl font-bold text-slate-900">{stat.val}</div>
                    <div className="text-[10px] font-bold uppercase text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Experience - Smooth Scroll Path */}
        <section id="experience" className="py-24">
          <div className="mb-16">
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-orange-500 mb-4">The Journey</h2>
            <h3 className="text-4xl font-bold text-slate-900">3.5+ Years of Growth</h3>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className={`p-10 bg-white border border-slate-200 rounded-3xl border-l-8 ${exp.color} shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row md:items-center justify-between gap-6`}
              >
                <div className="max-w-xl">
                  <span className="text-xs font-bold text-slate-400 mb-2 block">{exp.year}</span>
                  <h4 className="text-2xl font-bold text-slate-900 mb-1">{exp.role}</h4>
                  <p className="text-blue-600 font-bold text-sm mb-4">{exp.company}</p>
                  <p className="text-slate-600 leading-relaxed">{exp.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-blue-600 font-bold text-sm cursor-pointer group">
                  View Case Study <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Professional CTA */}
        <section id="contact" className="py-24">
          <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-200">
            <div className="absolute top-0 right-0 p-10 opacity-10 text-white">
              <Database size={200} />
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Let's optimize your <br />data infrastructure.</h2>
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <a href="mailto:d.neerajkumar480@gmail.com" className="bg-orange-500 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-900/20">
                  Email Me Now
                </a>
                <a href="https://linkedin.com" className="bg-white/10 text-white border border-white/20 px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <Linkedin size={20} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      <footer className="max-w-6xl mx-auto px-8 py-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
        <p>© {new Date().getFullYear()} — D Neeraj Kumar</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-blue-600">PostgreSQL</a>
          <a href="#" className="hover:text-blue-600">AWS Cloud</a>
          <a href="#" className="hover:text-blue-600">MongoDB</a>
        </div>
      </footer>
    </div>
  );
}