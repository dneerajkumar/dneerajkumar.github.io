"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Github, Linkedin, Mail, Database, Phone, Server, 
  ShieldCheck, Zap, TrendingUp, ChevronRight, 
  Cloud, Download, Cpu, CheckCircle2, 
  ArrowRight, ShieldAlert, RefreshCcw, Layers, HardDrive 
} from 'lucide-react';

// --- HELPER COMPONENTS (Defined outside the main export) ---

const TechMarquee = () => {
  const techs = ["PostgreSQL", "AWS RDS", "Docker", "Kubernetes", "MongoDB", "Terraform", "Prometheus", "Redis", "MySQL"];
  return (
    <div className="py-10 border-y border-slate-100 bg-white overflow-hidden flex">
      <motion.div animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 20, ease: "linear" }} className="flex whitespace-nowrap gap-20">
        {[...techs, ...techs].map((t, i) => (
          <span key={i} className="text-sm font-black text-slate-300 uppercase tracking-[0.3em]">{t}</span>
        ))}
      </motion.div>
    </div>
  );
};

const CaseStudy = () => (
  <section className="py-24">
    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-orange-500 mb-12 text-center">Featured Migration</h2>
    <div className="grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2 bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm hover:shadow-xl transition-shadow">
        <div className="flex gap-4 mb-6">
          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-[10px] font-bold uppercase">Zero Downtime</span>
          <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-[10px] font-bold uppercase">AWS Migration</span>
        </div>
        <h3 className="text-3xl font-bold mb-4 italic text-slate-900 leading-tight">Legacy SQL to AWS Aurora</h3>
        <p className="text-slate-500 mb-8 leading-relaxed">Successfully migrated a 12TB production database from on-premise hardware to AWS Aurora with only 3 minutes of downtime.</p>
        <div className="flex items-center gap-6">
          <div className="flex flex-col"><span className="text-2xl font-black text-blue-600">30%</span><span className="text-[10px] font-bold text-slate-400 uppercase">Cost Saving</span></div>
          <div className="w-[1px] h-10 bg-slate-100" />
          <div className="flex flex-col"><span className="text-2xl font-black text-emerald-500">2.5x</span><span className="text-[10px] font-bold text-slate-400 uppercase">Read Speed</span></div>
        </div>
      </div>
      <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden">
        <ShieldAlert className="absolute -top-10 -right-10 w-40 h-40 text-white/5" />
        <h4 className="text-xl font-bold relative z-10">Critical Disaster Recovery</h4>
        <p className="text-sm text-slate-400 relative z-10">Implemented Automated PITR across 3 regions for mission-critical data.</p>
        <button className="mt-8 bg-white text-black py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-orange-500 hover:text-white transition-colors">Read More <ArrowRight size={14} /></button>
      </div>
    </div>
  </section>
);

// --- MAIN PAGE EXPORT ---
export default function NeerajPortfolio() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const handleDownload = () => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    console.log("Download Started");
  };

  return (
    <div className="min-h-screen bg-[#fcfdfe] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-[100] origin-left" style={{ scaleX }} />

      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100 px-8 py-5 flex justify-between items-center">
        <span className="font-black text-2xl tracking-tighter text-blue-600 uppercase">DNK<span className="text-orange-500">.</span></span>
        <button onClick={handleDownload} className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:shadow-lg transition-all">Download CV</button>
      </nav>

      <main className="max-w-6xl mx-auto px-8 relative z-10">
        <section className="py-24 md:py-40">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-7xl md:text-9xl font-black tracking-tighter text-slate-900 leading-[0.8] mb-10">
            D NEERAJ <br /><span className="text-blue-600">KUMAR</span>
          </motion.h1>
          <p className="text-2xl text-slate-500 max-w-xl leading-snug font-medium italic">"Scaling infrastructure through precise database engineering and automated AWS DevOps workflows."</p>
        </section>

        <TechMarquee />
        <CaseStudy />

        {/* --- EXPERIENCE SECTION --- */}
        <section className="py-20">
          <h2 className="text-4xl font-black mb-12">Experience Journey</h2>
          <div className="space-y-6">
            {[
              { role: "Senior DBA", company: "Tech Solutions", date: "2023-Pres" },
              { role: "Database Engineer", company: "DataSystems Ltd", date: "2021-23" }
            ].map((exp, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-[2.5rem] p-8 flex justify-between items-center cursor-pointer hover:border-blue-500 transition-colors" onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}>
                <div>
                  <h4 className="text-2xl font-bold">{exp.role}</h4>
                  <p className="text-blue-600 font-bold uppercase text-[10px] tracking-widest">{exp.company} • {exp.date}</p>
                </div>
                <ChevronRight className={`transition-transform ${expandedIdx === idx ? 'rotate-90' : ''}`} />
              </div>
            ))}
          </div>
        </section>

        {/* --- CONTACT --- */}
        <section id="contact" className="py-24">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase">Let's build reliable data.</h2>
            <div className="flex flex-col md:flex-row justify-center gap-4 relative z-10">
              <a href="mailto:d.neerajkumar480@gmail.com" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black uppercase text-sm">Email Me</a>
              <a href="tel:+917077600849" className="bg-blue-700 text-white border border-blue-400 px-10 py-5 rounded-2xl font-black uppercase text-sm">+91 7077600849</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}