"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle2, ShieldAlert, 
  RefreshCcw, HardDrive, BarChart, Layers
} from 'lucide-react';

// --- NEW COMPONENT 1: Tech Marquee ---
const TechMarquee = () => {
  const techs = ["PostgreSQL", "AWS RDS", "Docker", "Kubernetes", "MongoDB", "Terraform", "Prometheus", "Redis", "MySQL"];
  return (
    <div className="py-10 border-y border-slate-100 bg-white overflow-hidden flex">
      <motion.div 
        animate={{ x: [0, -1000] }} 
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex whitespace-nowrap gap-20"
      >
        {[...techs, ...techs].map((t, i) => (
          <span key={i} className="text-sm font-black text-slate-300 uppercase tracking-[0.3em]">{t}</span>
        ))}
      </motion.div>
    </div>
  );
};

// --- NEW COMPONENT 2: Case Study Bento Grid ---
const CaseStudy = () => {
  return (
    <section className="py-24">
      <h2 className="text-xs font-black uppercase tracking-[0.4em] text-orange-500 mb-12 text-center">Featured Migration</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm">
          <div className="flex gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-[10px] font-bold">ZERO DOWNTIME</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-[10px] font-bold">AWS MIGRATION</span>
          </div>
          <h3 className="text-3xl font-bold mb-4 italic text-slate-900">Legacy SQL to AWS Aurora</h3>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Successfully migrated a 12TB production database from on-premise hardware to AWS Aurora with only **3 minutes** of planned maintenance window.
          </p>
          <div className="flex items-center gap-6">
             <div className="flex flex-col">
                <span className="text-2xl font-black text-blue-600">30%</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Cost Saving</span>
             </div>
             <div className="w-[1px] h-10 bg-slate-100" />
             <div className="flex flex-col">
                <span className="text-2xl font-black text-emerald-500">2.5x</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Read Speed</span>
             </div>
          </div>
        </div>
        
        <div className="bg-slate-900 text-white rounded-[2.5rem] p-10 flex flex-col justify-between overflow-hidden relative">
          <ShieldAlert className="absolute -top-10 -right-10 w-40 h-40 text-white/5" />
          <h4 className="text-xl font-bold relative z-10">Critical Disaster Recovery</h4>
          <p className="text-sm text-slate-400 relative z-10">Implemented Automated Point-in-Time Recovery (PITR) across 3 regions.</p>
          <button className="mt-8 bg-white text-black py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-2">
            Read Case Study <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

// --- NEW COMPONENT 3: DBA Philosophy Cards ---
const Philosophy = () => {
  const principles = [
    { title: "Reliability", desc: "Redundancy at every layer to ensure zero data loss.", icon: <RefreshCcw size={20} /> },
    { title: "Scalability", desc: "Architecting for 10x growth without performance dips.", icon: <Layers size={20} /> },
    { title: "Integrity", desc: "Rigorous ACID compliance and security hardening.", icon: <HardDrive size={20} /> },
  ];

  return (
    <section className="py-20 grid md:grid-cols-3 gap-12">
      {principles.map((p, i) => (
        <div key={i} className="flex flex-col gap-4">
          <div className="text-blue-600">{p.icon}</div>
          <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tighter">{p.title}</h4>
          <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
        </div>
      ))}
    </section>
  );
};