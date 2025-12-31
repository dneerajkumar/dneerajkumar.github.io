"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, ShieldCheck, Zap, ChevronDown, 
  Cloud, Server, Terminal, Lock, Globe, 
  Mail, Phone, Linkedin, Github, ArrowRight, Cpu
} from 'lucide-react';

const experiences = [
  {
    company: "Tech Solutions Corp",
    role: "Senior Database Administrator",
    period: "2023 - Present",
    color: "blue",
    highlights: [
      "Orchestrated AWS RDS Multi-AZ deployments for 99.99% availability.",
      "Managed 50TB+ PostgreSQL clusters with automated cross-region replication.",
      "Integrated Terraform for IaC database provisioning."
    ],
    stack: ["AWS RDS", "Terraform", "PostgreSQL", "Prometheus"]
  },
  {
    company: "DataSystems Ltd",
    role: "Database Engineer",
    period: "2021 - 2023",
    color: "orange",
    highlights: [
      "Reduced query latency by 45% through advanced indexing and sharding.",
      "Automated backup validation using AWS Lambda and Python.",
      "Implemented VPC peering and security groups for cross-account data flow."
    ],
    stack: ["MySQL", "AWS Lambda", "Python", "VPC Security"]
  },
  {
    company: "CloudWare Inc",
    role: "Associate DBA",
    period: "2020 - 2021",
    color: "emerald",
    highlights: [
      "Handled schema migrations for high-traffic microservices.",
      "Optimized MySQL buffer pools and InnoDB settings for 30% speed boost.",
      "Managed user IAM policies and database secret rotation via AWS Secrets Manager."
    ],
    stack: ["MySQL", "IAM", "Secrets Manager", "Linux"]
  }
];

export default function NeerajPortfolio() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#fcfdfe] text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* Hero / Header */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-black text-2xl tracking-tighter text-blue-600">DNK<span className="text-orange-500">.</span></span>
          <div className="flex gap-4 items-center">
             <a href="tel:+917077600849" className="hidden md:block text-sm font-bold text-slate-500">+91 7077600849</a>
             <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-bold hover:shadow-lg transition-all">Hire Neeraj</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-8 py-20">
        
        {/* Intro Section */}
        <section className="mb-32">
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 mb-8">
            D Neeraj <span className="text-blue-600">Kumar</span>
          </motion.h1>
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              3.5+ Years Exp. | **AWS Certified** | Specializing in mission-critical Database Infrastructure and DevOps automation.
            </p>
            <div className="flex gap-4">
               <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 flex items-center gap-3">
                  <Cpu className="text-orange-500" />
                  <span className="text-xs font-bold uppercase text-orange-700 tracking-wider">AWS Infrastructure Architect</span>
               </div>
            </div>
          </div>
        </section>

        {/* AWS Deployment Flow Component */}
        <section className="mb-40">
           <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 mb-10">Visual AWS Pipeline</h2>
           <div className="bg-slate-900 rounded-[2.5rem] p-10 relative overflow-hidden text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                 <div className="text-center">
                    <div className="p-4 bg-white/10 rounded-2xl mb-2 flex justify-center"><Github /></div>
                    <p className="text-[10px] font-bold uppercase opacity-50">GitHub</p>
                 </div>
                 <ArrowRight className="text-blue-500 hidden md:block" />
                 <div className="text-center">
                    <div className="p-4 bg-white/10 rounded-2xl mb-2 flex justify-center"><Terminal /></div>
                    <p className="text-[10px] font-bold uppercase opacity-50">CI/CD Build</p>
                 </div>
                 <ArrowRight className="text-orange-500 hidden md:block" />
                 <div className="text-center">
                    <div className="p-4 bg-white/10 rounded-2xl mb-2 flex justify-center"><Server /></div>
                    <p className="text-[10px] font-bold uppercase opacity-50">EC2/EKS</p>
                 </div>
                 <ArrowRight className="text-emerald-500 hidden md:block" />
                 <div className="text-center scale-125">
                    <div className="p-4 bg-blue-600 rounded-2xl mb-2 flex justify-center shadow-[0_0_20px_rgba(37,99,235,0.5)]"><Database /></div>
                    <p className="text-[10px] font-bold uppercase">AWS RDS</p>
                 </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent pointer-events-none" />
           </div>
        </section>

        {/* Expandable Experience Section */}
        <section id="experience" className="mb-40">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 mb-12">Professional Experience</h2>
          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <div key={idx} className="border border-slate-200 rounded-[2rem] bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <button 
                  onClick={() => setExpanded(expanded === idx ? null : idx)}
                  className="w-full p-8 flex items-center justify-between text-left group"
                >
                  <div className="flex gap-6 items-center">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl ${
                      exp.color === 'blue' ? 'bg-blue-100 text-blue-600' : 
                      exp.color === 'orange' ? 'bg-orange-100 text-orange-600' : 'bg-emerald-100 text-emerald-600'
                    }`}>
                      {exp.company[0]}
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{exp.role}</h4>
                      <p className="text-slate-400 font-bold text-xs uppercase tracking-widest">{exp.company} • {exp.period}</p>
                    </div>
                  </div>
                  <motion.div animate={{ rotate: expanded === idx ? 180 : 0 }}>
                    <ChevronDown className="text-slate-300" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expanded === idx && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8"
                    >
                      <div className="pt-4 border-t border-slate-100 grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-4">
                          <p className="text-xs font-black uppercase text-slate-400 tracking-tighter">Key Achievements</p>
                          <ul className="space-y-3">
                            {exp.highlights.map((h, i) => (
                              <li key={i} className="flex gap-3 text-slate-600 text-sm">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <p className="text-xs font-black uppercase text-slate-400 tracking-tighter">Technology Stack</p>
                          <div className="flex flex-wrap gap-2">
                            {exp.stack.map(s => (
                              <span key={s} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold text-slate-500">{s}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Contact Card */}
        <section id="contact" className="pb-20">
          <div className="bg-white border-2 border-blue-600 rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-blue-100 text-center">
             <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">D Neeraj Kumar</h2>
             <p className="text-slate-500 mb-10 font-medium italic">Available for remote roles and high-impact infrastructure consulting.</p>
             <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <a href="mailto:d.neerajkumar480@gmail.com" className="flex items-center gap-3 text-blue-600 font-bold hover:underline underline-offset-8">
                   <Mail size={20} /> d.neerajkumar480@gmail.com
                </a>
                <a href="tel:+917077600849" className="flex items-center gap-3 text-orange-600 font-bold hover:underline underline-offset-8">
                   <Phone size={20} /> +91 7077600849
                </a>
             </div>
          </div>
        </section>
      </main>
    </div>
  );
}