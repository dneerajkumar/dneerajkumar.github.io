"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Database, ShieldCheck, Zap, Server, Cloud, Cpu, 
  TrendingUp, Terminal, Code, CheckCircle2, 
  ArrowRight, Globe, Lock, Mail, Phone, 
  Layers, Search, AlertTriangle, PlayCircle
} from 'lucide-react';

export default function NeerajSeniorPortfolio() {
  const [activeTab, setActiveTab] = useState('process');
  const [isCliOpen, setIsCliOpen] = useState(false);

  // 1. IMPACT METRICS DATA
  const metrics = [
    { label: "Query Performance", value: "+35%", icon: <Zap className="text-orange-500" /> },
    { label: "System Uptime", value: "99.99%", icon: <TrendingUp className="text-emerald-500" /> },
    { label: "Data Managed", value: "50TB+", icon: <Database className="text-blue-500" /> },
    { label: "Prod Migrations", value: "20+", icon: <Server className="text-purple-500" /> },
  ];

  // 2. "HOW I WORK" CONTENT
  const workLogic = {
    performance: {
      title: "Query Optimization",
      steps: ["Explain Analyze", "Index Coverage Analysis", "Vacuum/Statistics Check", "Buffer Cache Tuning"],
      logic: "I prioritize identifying 'Expensive' queries that consume disproportionate I/O before scaling hardware."
    },
    security: {
      title: "Infrastructure Security",
      steps: ["Least Privilege IAM", "VPC Flow Log Monitoring", "Encryption at Rest/Transit", "Secret Rotation"],
      logic: "Data integrity is non-negotiable. I design with a 'Zero Trust' architecture at the database layer."
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfdfe] text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      
      {/* 8. AVAILABILITY & NAV */}
      <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="font-black text-xl tracking-tighter text-blue-600">DNK.</span>
          <span className="hidden md:block px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-bold border border-emerald-100 uppercase tracking-widest">
            Available: Remote / Full-time
          </span>
        </div>
        <div className="flex gap-4">
          <button onClick={() => setIsCliOpen(!isCliOpen)} className="p-2 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
            <Terminal size={18} />
          </button>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-bold shadow-lg shadow-blue-200">
            Hire Me
          </button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8 pt-32 pb-20">
        
        {/* HERO SECTION */}
        <section className="py-20 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 leading-none">
              D NEERAJ <span className="text-blue-600">KUMAR</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto italic font-medium">
              "Solving complex data availability and performance challenges at scale."
            </p>
          </motion.div>
        </section>

        {/* 1. IMPACT METRICS SECTION */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
          {metrics.map((m, i) => (
            <div key={i} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all">
              <div className="mb-4">{m.icon}</div>
              <div className="text-3xl font-black text-slate-900 mb-1">{m.value}</div>
              <div className="text-[10px] font-bold uppercase text-slate-400 tracking-[0.2em]">{m.label}</div>
            </div>
          ))}
        </section>

        {/* 3. "HOW I WORK" SECTION */}
        <section className="mb-32">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 mb-12">Problem Solving Framework</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-2">
              <button onClick={() => setActiveTab('process')} className={`w-full text-left p-6 rounded-2xl font-bold transition-all ${activeTab === 'process' ? 'bg-blue-600 text-white shadow-xl' : 'bg-white border border-slate-100'}`}>01. Optimization</button>
              <button onClick={() => setActiveTab('security')} className={`w-full text-left p-6 rounded-2xl font-bold transition-all ${activeTab === 'security' ? 'bg-blue-600 text-white shadow-xl' : 'bg-white border border-slate-100'}`}>02. Security First</button>
            </div>
            <div className="md:col-span-2 bg-slate-900 rounded-[3rem] p-10 text-white relative overflow-hidden">
               <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                   <Zap size={24} className="text-orange-500" /> {activeTab === 'process' ? workLogic.performance.title : workLogic.security.title}
                 </h3>
                 <p className="text-slate-400 mb-8 italic">"{activeTab === 'process' ? workLogic.performance.logic : workLogic.security.logic}"</p>
                 <div className="grid grid-cols-2 gap-4">
                    {(activeTab === 'process' ? workLogic.performance.steps : workLogic.security.steps).map((step, i) => (
                      <div key={i} className="flex gap-3 items-center text-sm font-medium">
                        <CheckCircle2 size={16} className="text-emerald-500" /> {step}
                      </div>
                    ))}
                 </div>
               </div>
               <div className="absolute -bottom-10 -right-10 opacity-10"><Cpu size={300} /></div>
            </div>
          </div>
        </section>

        {/* 2. ARCHITECTURE / PROJECTS (Interactive Case Studies) */}
        <section id="projects" className="mb-32">
           <div className="flex justify-between items-end mb-16">
              <h2 className="text-4xl font-black tracking-tighter">Case Studies</h2>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Selected Production Systems</span>
           </div>
           <div className="grid md:grid-cols-2 gap-8">
              <div className="group bg-white border border-slate-200 p-10 rounded-[3rem] hover:border-blue-500 transition-all">
                 <div className="flex justify-between mb-8">
                    <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl"><Globe size={24}/></div>
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold">AWS</span>
                      <span className="px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold">POSTGRES</span>
                    </div>
                 </div>
                 <h4 className="text-2xl font-bold mb-4 underline decoration-blue-100 decoration-4 underline-offset-4">HA Multi-AZ Infrastructure</h4>
                 <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                   **Problem:** Single point of failure in legacy DB. <br/>
                   **Solution:** Implemented AWS RDS Multi-AZ with cross-region read replicas. <br/>
                   **Outcome:** Achieved 99.99% uptime during regional outage.
                 </p>
                 <button className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                   View Diagram <ArrowRight size={14} />
                 </button>
              </div>
              <div className="group bg-slate-900 text-white p-10 rounded-[3rem] hover:shadow-2xl transition-all">
                 <div className="p-4 bg-white/10 rounded-2xl w-fit mb-8"><ShieldCheck size={24} className="text-emerald-500" /></div>
                 <h4 className="text-2xl font-bold mb-4 italic">Security Hardening & PITR</h4>
                 <p className="text-slate-400 text-sm mb-8 leading-relaxed font-mono text-[11px]">
                   &gt; Initializing audit... <br/>
                   &gt; Detected 4 security vulnerabilities in IAM <br/>
                   &gt; Solution: VPC Peering + Secret Rotation Implementation <br/>
                   &gt; Outcome: ISO 27001 Compliance Ready.
                 </p>
                 <button className="flex items-center gap-2 text-emerald-500 font-bold text-xs uppercase tracking-widest transition-all">
                   View Architecture <ArrowRight size={14} />
                 </button>
              </div>
           </div>
        </section>

        {/* 10. SMART CONTACT */}
        <section id="contact" className="py-24">
          <div className="bg-white border-2 border-slate-900 rounded-[4rem] p-12 md:p-24 shadow-[20px_20px_0px_#2563eb]">
             <h2 className="text-5xl font-black mb-12 tracking-tighter">Let's build reliable systems.</h2>
             <form className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                   <input type="text" placeholder="Name" className="w-full p-6 bg-slate-50 rounded-2xl outline-none focus:ring-2 ring-blue-500/20" />
                   <select className="w-full p-6 bg-slate-50 rounded-2xl outline-none text-slate-500 appearance-none">
                      <option>I'm looking for... Hiring</option>
                      <option>Consulting/Performance Tuning</option>
                      <option>Collaboration/Learning</option>
                   </select>
                </div>
                <div className="space-y-4">
                   <textarea placeholder="Tell me about your data challenge..." rows={4} className="w-full p-6 bg-slate-50 rounded-2xl outline-none focus:ring-2 ring-blue-500/20" />
                   <button className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-900 transition-colors shadow-xl">
                      Deploy Connection
                   </button>
                </div>
             </form>
          </div>
        </section>

      </main>

      {/* CLI OVERLAY */}
      <AnimatePresence>
        {isCliOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] bg-slate-900/95 p-8 flex items-center justify-center font-mono">
            <div className="max-w-2xl w-full text-emerald-500">
               <button onClick={() => setIsCliOpen(false)} className="text-white mb-4">[CLOSE_CLI]</button>
               <p className="mb-2">neeraj_kumar --status</p>
               <p className="text-white mb-4 italic">"Currently optimizing a 12TB PostgreSQL cluster... All systems operational."</p>
               <p className="mb-2">neeraj_kumar --skills</p>
               <div className="grid grid-cols-2 gap-2 text-sm text-slate-400 mb-8">
                  <span>- PostgreSQL (Master)</span>
                  <span>- AWS Cloud (Expert)</span>
                  <span>- Terraform (Advanced)</span>
                  <span>- Docker (Advanced)</span>
               </div>
               <p className="animate-pulse">_</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="text-center py-20 opacity-30 text-[10px] font-black uppercase tracking-widest">
        D Neeraj Kumar — Lead Data Engineering Portfolio — 2025
      </footer>
    </div>
  );
}