"use client";
import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence, useInView } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Database, Server, Cpu, Cloud, Terminal, 
  Layers, ChevronRight, CheckCircle2, Mail, 
  Phone, Linkedin, Github, Download, Zap, ShieldCheck,
  Code, Settings, TrendingUp, Link, Star, Globe, 
  ArrowRight, X, AlertTriangle 
} from 'lucide-react';

// --- ANIMATED SECTION WRAPPER ---
const FadeInWhenVisible = ({ children, delay = 0, duration = 0.8 }: { children: React.ReactNode, delay?: number, duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: duration, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

// --- BACKGROUND COMPONENT (DB & DEVOPS ELEMENTS) ---
const BackgroundElements = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]); // More rotation for dramatic effect
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.05, 0.08, 0.08, 0.05]);

  return (
    <motion.div style={{ opacity }} className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating DB Nodes */}
      <motion.div style={{ y: y1, rotate }} className="absolute -top-1/4 left-[5%] text-blue-600">
        <Database size={400} strokeWidth={0.5} />
      </motion.div>
      <motion.div style={{ y: y2, rotate: useTransform(scrollYProgress, [0,1], [0, -60]) }} className="absolute -bottom-1/4 right-[5%] text-orange-500">
        <Server size={500} strokeWidth={0.5} />
      </motion.div>
      {/* DevOps Pipeline Pattern */}
      <svg width="100%" height="100%" className="absolute inset-0">
        <pattern id="pipeline" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="1" fill="currentColor" />
          <path d="M 0 50 L 100 50" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#pipeline)" />
      </svg>
    </motion.div>
  );
};

export default function NeerajFinalPortfolio() {
  const [expandedExpIdx, setExpandedExpIdx] = useState<number | null>(0);
  const [activeProjectIdx, setActiveProjectIdx] = useState<number | null>(null); // For projects modal
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const handleDownload = () => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#2563eb', '#f97316', '#10b981'] });
  };

  const experiences = [
    { 
      role: "Senior Database Administrator", company: "Tech Solutions", date: "2023 - Present", 
      details: ["Led design and deployment of highly available PostgreSQL clusters on AWS RDS.", "Achieved 99.99% database uptime through proactive monitoring and automated failovers.", "Implemented Infrastructure as Code (Terraform) for database provisioning and scaling, reducing deployment time by 80%."],
      stack: ["PostgreSQL", "AWS Aurora", "Terraform", "Grafana", "Prometheus"]
    },
    { 
      role: "Database Engineer", company: "DataSystems Ltd", date: "2021 - 2023", 
      details: ["Optimized complex SQL queries, reducing average load times by 40% for mission-critical applications.", "Managed large-scale MongoDB sharded clusters, ensuring seamless data distribution and performance.", "Designed and implemented robust Disaster Recovery strategies, including Point-in-Time Recovery (PITR) for all production databases."],
      stack: ["MySQL", "MongoDB", "Python", "Docker", "Kubernetes"]
    },
    { 
      role: "Associate DBA", company: "CloudWare Inc", date: "2020 - 2021", 
      details: ["Performed schema migrations and database upgrades with zero downtime.", "Enhanced database security by implementing IAM policies and VPC hardening.", "Automated daily backup and restoration procedures, ensuring data integrity and availability."],
      stack: ["MySQL", "Linux Admin", "AWS IAM", "Bash Scripting"]
    }
  ];

  const skills = [
    { name: "PostgreSQL", level: 95, icon: <Database size={24}/>, color: "blue" },
    { name: "AWS Services", level: 90, icon: <Cloud size={24}/>, color: "orange" },
    { name: "Terraform", level: 85, icon: <Layers size={24}/>, color: "purple" },
    { name: "Docker/K8s", level: 80, icon: <Server size={24}/>, color: "emerald" },
    { name: "Performance Tuning", level: 92, icon: <Zap size={24}/>, color: "rose" },
    { name: "DB Security", level: 88, icon: <ShieldCheck size={24}/>, color: "indigo" },
  ];

  const projects = [
    {
      title: "Cloud Migration Strategy",
      shortDesc: "Seamless migration of 12TB legacy SQL to AWS Aurora.",
      techStack: ["AWS RDS", "PostgreSQL", "Python", "Terraform"],
      image: 'https://via.placeholder.com/600x400/2563eb/ffffff?text=AWS+Migration', // Placeholder image
      details: {
        problem: "Monolithic on-premise SQL database with scaling limitations and high maintenance cost.",
        solution: "Designed and executed a phased migration to AWS Aurora PostgreSQL, utilizing DMS for minimal downtime.",
        outcome: "30% cost reduction, 2.5x read performance improvement, and enhanced scalability."
      }
    },
    {
      title: "Automated DR Solution",
      shortDesc: "Cross-region disaster recovery for mission-critical data.",
      techStack: ["AWS RDS", "Terraform", "Lambda", "Python"],
      image: 'https://via.placeholder.com/600x400/f97316/ffffff?text=DR+Automation',
      details: {
        problem: "Manual DR process, leading to high RTO and potential for human error.",
        solution: "Implemented automated PITR and cross-region replication with Terraform and AWS Lambda functions.",
        outcome: "RTO reduced from hours to minutes, achieving near-zero data loss capability."
      }
    },
    {
      title: "Real-time Monitoring Stack",
      shortDesc: "Integrated Grafana & Prometheus for proactive database health.",
      techStack: ["Grafana", "Prometheus", "Node Exporter", "AWS EC2"],
      image: 'https://via.placeholder.com/600x400/10b981/ffffff?text=Monitoring+Dashboard',
      details: {
        problem: "Lack of centralized visibility into database performance and health metrics.",
        solution: "Deployed Prometheus and Grafana on EC2 instances, integrating custom exporters for database-specific metrics.",
        outcome: "Enabled proactive issue detection, reducing critical incident response time by 50%."
      }
    },
    {
      title: "Microservices DB Sharding",
      shortDesc: "Scaling MongoDB for high-throughput microservice architecture.",
      techStack: ["MongoDB", "Docker", "Kubernetes", "Node.js"],
      image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=MongoDB+Sharding',
      details: {
        problem: "Monolithic MongoDB instance struggling with high write loads from microservices.",
        solution: "Implemented sharding strategy across multiple replica sets, managed with Docker and Kubernetes.",
        outcome: "Achieved linear scalability for database writes, supporting 10x user growth."
      }
    }
  ];

  const colorClasses = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", border: "border-blue-100", progress: "bg-blue-600" },
    orange: { bg: "bg-orange-50", text: "text-orange-600", border: "border-orange-100", progress: "bg-orange-600" },
    purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-100", progress: "bg-purple-600" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", border: "border-emerald-100", progress: "bg-emerald-600" },
    rose: { bg: "bg-rose-50", text: "text-rose-600", border: "border-rose-100", progress: "bg-rose-600" },
    indigo: { bg: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100", progress: "bg-indigo-600" },
  };


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
        <section id="home" className="py-24 md:py-48 flex flex-col items-start">
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

        {/* 1. SKILLS SECTION (Animated Grid) */}
        <section id="skills" className="py-24 border-t border-slate-100">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-black tracking-tight">Technical Mastery</h2>
            <div className="h-[2px] flex-1 bg-slate-100" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, idx) => {
              const colors = colorClasses[skill.color as keyof typeof colorClasses] || colorClasses.blue;
              return (
                <FadeInWhenVisible key={idx} delay={idx * 0.1}>
                  <motion.div 
                    whileHover={{ y: -5, scale: 1.02 }} 
                    className={`p-8 ${colors.bg} rounded-[2.5rem] border ${colors.border} shadow-sm group relative overflow-hidden`}
                  >
                    <div className={`text-3xl mb-4 ${colors.text}`}>{skill.icon}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{skill.name}</h3>
                    <p className="text-sm text-slate-500 mb-6">Expert level in designing and managing {skill.name} solutions.</p>
                    <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                      <span className={`${colors.text}`}>{skill.level}% Proficiency</span>
                      <div className="w-1/2 h-2 bg-white rounded-full overflow-hidden border border-gray-200">
                        <motion.div 
                          initial={{ width: 0 }} 
                          whileInView={{ width: `${skill.level}%` }} 
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className={`h-full ${colors.progress}`} 
                        />
                      </div>
                    </div>
                    {/* Background faint icon */}
                    <div className={`absolute bottom-0 right-0 text-[${colors.text}] opacity-10 translate-x-1/4 translate-y-1/4 group-hover:opacity-20 transition-opacity`}>
                        {skill.icon && React.cloneElement(skill.icon, { size: 100 })}
                    </div>
                  </motion.div>
                </FadeInWhenVisible>
              );
            })}
          </div>
        </section>

        {/* 2. PROJECTS SECTION (Bento Grid) */}
        <section id="projects" className="py-24 border-t border-slate-100">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-black tracking-tight">Key Projects & Case Studies</h2>
            <div className="h-[2px] flex-1 bg-slate-100" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <FadeInWhenVisible key={idx} delay={idx * 0.1}>
                <motion.div 
                  whileHover={{ y: -5, scale: 1.01 }} 
                  onClick={() => setActiveProjectIdx(idx)}
                  className="bg-white border border-slate-200 rounded-[2.5rem] p-8 shadow-sm cursor-pointer hover:shadow-xl transition-all relative overflow-hidden group"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Code size={20}/></div>
                    <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                  </div>
                  <p className="text-slate-500 mb-6 leading-relaxed text-sm">{project.shortDesc}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-lg border border-slate-200 uppercase">{tech}</span>
                    ))}
                  </div>
                  <button className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                    View Details <ArrowRight size={14} />
                  </button>
                  {/* Faint background image */}
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover:opacity-10 transition-opacity" />
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </section>

        {/* PROJECT MODAL */}
        <AnimatePresence>
          {activeProjectIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProjectIdx(null)}
              className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[150] flex items-center justify-center p-8"
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                className="relative bg-white rounded-[3rem] p-8 md:p-12 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              >
                <button onClick={() => setActiveProjectIdx(null)} className="absolute top-6 right-6 p-3 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition-colors">
                  <X size={20} /> {/* Assuming X icon is available from lucide-react */}
                </button>
                <img src={projects[activeProjectIdx].image} alt={projects[activeProjectIdx].title} className="w-full h-64 object-cover rounded-2xl mb-8" />
                <h3 className="text-4xl font-black mb-6">{projects[activeProjectIdx].title}</h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {projects[activeProjectIdx].techStack.map(tech => (
                    <span key={tech} className="px-4 py-1.5 bg-blue-100 text-blue-600 text-xs font-bold rounded-xl border border-blue-200 uppercase">{tech}</span>
                  ))}
                </div>
                <div className="space-y-6 text-slate-700">
                  <div>
                    <h4 className="text-xl font-bold mb-2 flex items-center gap-2"><AlertTriangle size={20} className="text-orange-500"/> The Problem</h4>
                    <p>{projects[activeProjectIdx].details.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 flex items-center gap-2"><Settings size={20} className="text-blue-600"/> My Solution</h4>
                    <p>{projects[activeProjectIdx].details.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 flex items-center gap-2"><Star size={20} className="text-emerald-500"/> The Outcome</h4>
                    <p>{projects[activeProjectIdx].details.outcome}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* SEMANTIC ANIMATED EXPERIENCE SECTION */}
        <section id="experience" className="py-24 border-t border-slate-100">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-4xl font-black tracking-tight">Professional Journey</h2>
            <div className="h-[2px] flex-1 bg-slate-100" />
          </div>

          <div className="grid gap-6">
            {experiences.map((exp, idx) => (
              <FadeInWhenVisible key={idx} delay={idx * 0.1}>
                <motion.article 
                  layout
                  className={`bg-white border rounded-[2.5rem] transition-all duration-500 overflow-hidden ${
                    expandedExpIdx === idx ? 'border-blue-500 shadow-2xl ring-4 ring-blue-500/5' : 'border-slate-200 shadow-sm hover:border-blue-300'
                  }`}
                >
                  <button 
                    onClick={() => setExpandedExpIdx(expandedExpIdx === idx ? null : idx)}
                    className="w-full text-left p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 group"
                  >
                    <div className="flex gap-8 items-center">
                      <div className={`p-5 rounded-[2rem] transition-colors ${expandedExpIdx === idx ? 'bg-blue-600 text-white shadow-xl shadow-blue-200' : 'bg-slate-50 text-blue-600'}`}>
                        <Server size={32} />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 block">{exp.date}</span>
                        <h3 className="text-3xl font-black text-slate-900">{exp.role}</h3>
                        <p className="text-blue-600 font-bold uppercase text-xs tracking-[0.2em]">{exp.company}</p>
                      </div>
                    </div>
                    <motion.div 
                      animate={{ rotate: expandedExpIdx === idx ? 90 : 0 }} 
                      className={`p-4 rounded-full transition-colors ${expandedExpIdx === idx ? 'bg-blue-600 text-white' : 'bg-slate-50 text-slate-400'}`}
                    >
                      <ChevronRight size={24} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedExpIdx === idx && (
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
              </FadeInWhenVisible>
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
             <FadeInWhenVisible key={i} delay={i * 0.1}>
               <div className="bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-sm text-center group hover:bg-blue-600 transition-colors">
                 <div className="mb-4 flex justify-center text-blue-600 group-hover:text-white transition-colors">{stat.icon}</div>
                 <div className="text-3xl font-black mb-1 group-hover:text-white transition-colors">{stat.value}</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-blue-100 transition-colors">{stat.label}</div>
               </div>
             </FadeInWhenVisible>
           ))}
        </section>

        {/* FINAL CONTACT */}
        <section id="contact" className="py-24 pb-48">
          <FadeInWhenVisible>
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
          </FadeInWhenVisible>
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