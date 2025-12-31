"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useInView } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Github, Linkedin, Mail, Database, Phone, Server, 
  ShieldCheck, Zap, TrendingUp, ChevronRight, 
  Cloud, Download, Cpu, CheckCircle2, 
  ArrowRight, Box, Globe, Lock, Quote, Star,
  User, Send, Code, Layers, MousePointer2
} from 'lucide-react';

// --- SEO & META (Put this in your layout.tsx or top of page) ---
// Title: D Neeraj Kumar | Senior DBA & DevOps Specialist
// Description: Expert Database Administrator and DevOps Engineer with 3.5+ years of experience in AWS, PostgreSQL, and Automation.

const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function NeerajPortfolio() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const skills = [
    { name: "AWS (RDS/EC2/S3)", level: 95, icon: <Cloud size={16}/> },
    { name: "PostgreSQL/MySQL", level: 98, icon: <Database size={16}/> },
    { name: "Terraform/IaC", level: 85, icon: <Layers size={16}/> },
    { name: "Docker/Kubernetes", level: 80, icon: <Box size={16}/> },
    { name: "Security & IAM", level: 90, icon: <Lock size={16}/> },
  ];

  const projects = [
    { title: "Cloud Migration", desc: "12TB On-prem to AWS Aurora migration with zero data loss.", tech: "AWS, Python", link: "#" },
    { title: "Query Optimizer", desc: "Custom engine reducing SQL execution time by 60%.", tech: "PostgreSQL, Go", link: "#" },
    { title: "Auto-DR Script", desc: "Automated Disaster Recovery for multi-region failover.", tech: "Bash, Terraform", link: "#" },
  ];

  const handleDownload = () => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#2563eb', '#f97316'] });
    // window.open('/resume.pdf', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#fcfdfe] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden relative">
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-[100] origin-left" style={{ scaleX }} />

      {/* 2. FIXED NAVIGATION BAR */}
      <nav className="fixed top-0 left-0 right-0 z-[90] bg-white/80 backdrop-blur-lg border-b border-slate-100 px-8 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-black text-xl tracking-tighter text-blue-600">DNK.</span>
          <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <button onClick={handleDownload} className="bg-slate-900 text-white px-5 py-2 rounded-full text-[10px] font-bold hover:bg-blue-600 transition-all uppercase tracking-widest">CV</button>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8 relative z-10 pt-20">
        
        {/* 1. HERO SECTION WITH VISUALS */}
        <section id="home" className="py-24 md:py-40 grid md:grid-cols-2 gap-12 items-center text-left">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold mb-6 tracking-widest uppercase border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" /> Senior DBA & DevOps Specialist
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.85] mb-8">
              D NEERAJ <br /><span className="text-blue-600">KUMAR</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-lg mb-10 leading-relaxed font-medium italic">
              "Ensuring 99.99% uptime and extreme performance through precision data engineering."
            </p>
            <div className="flex gap-4">
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-blue-200">
                <Mail size={18} /> Contact Me
              </button>
              <a href="tel:+917077600849" className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-slate-50 transition-colors">
                <Phone size={18} /> Call
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="relative flex justify-center">
            {/* Visual placeholder for Avatar/DB Concept */}
            <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] shadow-2xl rotate-3 relative overflow-hidden flex items-center justify-center">
               <Database size={120} className="text-white opacity-20 absolute -bottom-10 -right-10" />
               <Cpu size={140} className="text-white" />
            </div>
          </motion.div>
        </section>

        {/* 3. SKILLS VISUALIZATION (Visual bars) */}
        <section id="skills" className="py-24 border-t border-slate-100">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-orange-500 mb-6 font-mono">Efficiency Profile</h2>
              <h3 className="text-5xl font-black mb-10 tracking-tighter">Technical Mastery</h3>
              <div className="space-y-8">
                {skills.map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2 text-xs font-black uppercase tracking-widest">
                      <span className="flex items-center gap-2">{s.icon} {s.name}</span>
                      <span className="text-blue-600">{s.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-200/50">
                      <motion.div 
                        initial={{ width: 0 }} 
                        whileInView={{ width: `${s.level}%` }} 
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-blue-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 p-10 rounded-[3rem] text-white">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2"><Zap className="text-orange-500"/> Core Competencies</h4>
              <ul className="space-y-4 opacity-70 text-sm">
                <li className="flex gap-3"><CheckCircle2 size={16} className="text-emerald-500" /> Multi-Region Failover Strategies</li>
                <li className="flex gap-3"><CheckCircle2 size={16} className="text-emerald-500" /> Infrastructure as Code (Terraform)</li>
                <li className="flex gap-3"><CheckCircle2 size={16} className="text-emerald-500" /> Automated PITR Backups</li>
                <li className="flex gap-3"><CheckCircle2 size={16} className="text-emerald-500" /> VPC & Network Isolation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. INTERACTIVE TIMELINE EXPERIENCE */}
        <section id="experience" className="py-24 border-t border-slate-100">
          <h2 className="text-4xl font-black mb-20 tracking-tighter">Career Timeline</h2>
          <div className="relative border-l-2 border-slate-100 ml-4 md:ml-0 space-y-16">
            {[
              { year: "2023 - Present", role: "Senior DBA", co: "Tech Solutions", d: "Leading cloud data architecture and orchestration." },
              { year: "2021 - 2023", role: "DB Engineer", co: "DataSystems Ltd", d: "Optimized distributed systems for high-traffic apps." },
              { year: "2020 - 2021", role: "Associate DBA", co: "CloudWare Inc", d: "Managed relational database security and migrations." },
            ].map((exp, i) => (
              <FadeInSection key={i} delay={i * 0.1}>
                <div className="relative pl-12">
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white" />
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="text-xs font-black text-slate-400 uppercase tracking-widest">{exp.year}</div>
                    <div className="md:col-span-3">
                      <h4 className="text-2xl font-bold text-slate-900">{exp.role}</h4>
                      <p className="text-blue-600 font-bold uppercase text-[10px] tracking-[0.2em] mb-4">{exp.co}</p>
                      <p className="text-slate-500 leading-relaxed text-sm">{exp.d}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* 5. PROJECTS SECTION (Bento Grid) */}
        <section id="projects" className="py-24 border-t border-slate-100">
           <div className="flex justify-between items-end mb-16">
              <h2 className="text-4xl font-black tracking-tighter">Selected Projects</h2>
              <a href="https://github.com" className="text-[10px] font-black uppercase text-blue-600 border-b-2 border-blue-600 pb-1">View All GitHub</a>
           </div>
           <div className="grid md:grid-cols-3 gap-8">
              {projects.map((p, i) => (
                <div key={i} className="group bg-white border border-slate-200 p-8 rounded-[2.5rem] hover:shadow-2xl hover:-translate-y-2 transition-all">
                   <Code className="text-blue-600 mb-6 group-hover:rotate-12 transition-transform" />
                   <h4 className="text-xl font-bold mb-4">{p.title}</h4>
                   <p className="text-sm text-slate-500 mb-8 leading-relaxed">{p.desc}</p>
                   <div className="flex justify-between items-center">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">{p.tech}</span>
                      <ArrowRight size={18} className="text-slate-300 group-hover:text-blue-600" />
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* 7. CONTACT FORM */}
        <section id="contact" className="py-24">
          <div className="grid md:grid-cols-2 gap-16 bg-white border border-slate-200 p-12 md:p-24 rounded-[4rem] shadow-xl">
             <div>
                <h2 className="text-4xl font-black mb-8 leading-none">Get in touch.</h2>
                <p className="text-slate-500 mb-10 italic">"Always open to discussing high-availability architectures and database optimization."</p>
                <div className="space-y-6">
                   <a href="mailto:d.neerajkumar480@gmail.com" className="flex items-center gap-4 text-blue-600 font-bold"><Mail size={20}/> d.neerajkumar480@gmail.com</a>
                   <a href="tel:+917077600849" className="flex items-center gap-4 text-slate-900 font-bold"><Phone size={20}/> +91 7077600849</a>
                </div>
             </div>
             <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Full Name" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-blue-500 transition-colors" />
                <input type="email" placeholder="Email Address" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-blue-500 transition-colors" />
                <textarea rows={4} placeholder="Your Message" className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-blue-500 transition-colors" />
                <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-900 transition-colors">
                  <Send size={18} /> Send Message
                </button>
             </form>
          </div>
        </section>
      </main>

      {/* 8. STICKY FOOTER WITH SOCIAL ICONS */}
      <footer className="sticky bottom-0 z-[100] bg-white/90 backdrop-blur-md border-t border-slate-100 py-6 px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">© 2025 D Neeraj Kumar</p>
          <div className="flex gap-6 items-center">
             <a href="https://linkedin.com" className="text-slate-400 hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
             <a href="https://github.com" className="text-slate-400 hover:text-slate-900 transition-colors"><Github size={20} /></a>
             <a href="mailto:d.neerajkumar480@gmail.com" className="text-slate-400 hover:text-orange-500 transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}