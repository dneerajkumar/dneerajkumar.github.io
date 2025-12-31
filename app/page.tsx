"use client";
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Github, Linkedin, Mail, Database, Phone, ExternalLink, MapPin, Calendar, Briefcase } from 'lucide-react';

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const experiences = [
    {
      year: "2023 - Present",
      role: "Senior Database Administrator",
      company: "Tech Solutions Corp",
      desc: "Architecting high-availability PostgreSQL clusters and automating backup orchestration for 50TB+ of data.",
    },
    {
      year: "2021 - 2023",
      role: "Database Engineer",
      company: "DataSystems Ltd",
      desc: "Optimized complex SQL queries reducing server load by 40%. Managed replication and sharding strategies.",
    },
    {
      year: "2020 - 2021",
      role: "Junior DBA",
      company: "CloudWare Inc",
      desc: "Focused on monitoring, schema migrations, and user access management in MySQL environments.",
    }
  ];

  return (
    <div className="min-h-screen bg-[#020202] text-zinc-100 selection:bg-blue-500/30">
      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left" style={{ scaleX }} />

      {/* Nav */}
      <nav className="max-w-6xl mx-auto px-8 py-10 flex justify-between items-center relative z-10">
        <span className="text-xl font-black tracking-tighter">DNK<span className="text-blue-600">.</span></span>
        <div className="flex gap-6 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8">
        {/* Hero */}
        <section className="py-20 md:py-32">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h2 className="text-blue-500 font-mono mb-4">Hello, I am</h2>
            <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-8">
              D Neeraj <br /><span className="text-zinc-600">Kumar.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl leading-relaxed mb-10">
              A **Database Administrator** with 3.5+ years of experience building resilient, high-performance data architectures.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <a href="mailto:d.neerajkumar480@gmail.com" className="flex items-center gap-2 text-zinc-300 hover:text-blue-500 transition-colors">
                <Mail size={18} /> d.neerajkumar480@gmail.com
              </a>
              <a href="tel:+917077600849" className="flex items-center gap-2 text-zinc-300 hover:text-blue-500 transition-colors">
                <Phone size={18} /> +91 7077600849
              </a>
            </div>
          </motion.div>
        </section>

        {/* Experience Section with Scroll Path */}
        <section id="experience" className="py-40 relative">
          <h2 className="text-4xl font-bold mb-20 tracking-tight">Professional Journey</h2>
          
          <div className="relative max-w-3xl mx-auto">
            {/* The Vertical Line Path */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-800 -translate-x-1/2" />

            <div className="space-y-24">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* The Dot on the path */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2 border-4 border-[#020202] z-10" />
                  
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                    <span className="text-blue-500 font-mono text-sm mb-2 block">{exp.year}</span>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <h4 className="text-zinc-500 font-medium mb-4">{exp.company}</h4>
                    <p className="text-zinc-400 leading-relaxed bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-blue-500/30 transition-colors">
                      {exp.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final Contact Section */}
        <section id="contact" className="pb-40 pt-20 border-t border-zinc-900">
          <div className="bg-gradient-to-br from-zinc-900 to-black p-12 md:p-24 rounded-[3rem] border border-zinc-800 text-center relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to secure your data?</h2>
                <p className="text-zinc-400 mb-12 max-w-md mx-auto">I'm currently available for full-time opportunities and consulting.</p>
                <div className="flex flex-col md:flex-row justify-center gap-6">
                  <a href="mailto:d.neerajkumar480@gmail.com" className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all">Hire Neeraj</a>
                  <div className="flex justify-center gap-4">
                    <button className="p-4 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"><Linkedin size={20}/></button>
                    <button className="p-4 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"><Github size={20}/></button>
                  </div>
                </div>
             </div>
             <Database className="absolute -bottom-20 -left-20 text-white/[0.02] w-96 h-96" />
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-8 py-10 border-t border-zinc-900 text-center text-zinc-600 text-xs tracking-widest uppercase">
        Built with Precision by D Neeraj Kumar — {new Date().getFullYear()}
      </footer>
    </div>
  );
}