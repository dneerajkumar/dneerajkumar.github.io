"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useInView } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Github, Linkedin, Mail, Database, Phone, Server, 
  ShieldCheck, Zap, TrendingUp, ChevronRight, 
  Cloud, Download, Cpu, CheckCircle2, 
  ArrowRight, Box, Globe, Lock, Quote, Star
} from 'lucide-react';

// --- ANIMATED SECTION WRAPPER ---
const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

// --- SKILLS RADAR COMPONENT ---
const SkillsRadar = () => {
  const skills = [
    { name: "DBA", value: 100, x: 200, y: 50 },
    { name: "AWS", value: 90, x: 350, y: 150 },
    { name: "DevOps", value: 85, x: 300, y: 320 },
    { name: "Security", value: 95, x: 100, y: 320 },
    { name: "Linux", value: 80, x: 50, y: 150 },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square flex items-center justify-center">
      <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
        {/* Background Hexagons */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((scale, i) => (
          <circle key={i} cx="200" cy="200" r={150 * scale} fill="none" stroke="#e2e8f0" strokeWidth="1" />
        ))}
        {/* Radar Path */}
        <motion.polygon
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          points={skills.map(s => `${s.x},${s.y}`).join(' ')}
          fill="rgba(37, 99, 235, 0.1)"
          stroke="#2563eb"
          strokeWidth="3"
        />
        {/* Labels */}
        {skills.map((s, i) => (
          <text key={i} x={s.x} y={s.y - 15} textAnchor="middle" className="text-[12px] font-black fill-slate-400 uppercase tracking-widest">
            {s.name}
          </text>
        ))}
      </svg>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <Cpu className="text-blue-200 w-12 h-12" />
      </div>
    </div>
  );
};

// --- TESTIMONIAL CAROUSEL ---
const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);
  const testimonials = [
    { text: "Neeraj's ability to optimize our PostgreSQL cluster saved us thousands in AWS costs monthly.", author: "CTO @ Tech Solutions", stars: 5 },
    { text: "A rare DBA who understands DevOps. His CI/CD pipelines for database migrations are flawless.", author: "Lead Architect @ DataSystems", stars: 5 },
    { text: "Reliability is Neeraj's middle name. Our uptime went from 99.1% to 99.99% under his watch.", author: "Manager @ CloudWare", stars: 5 }
  ];

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white border border-slate-200 rounded-[3rem] p-12 shadow-sm relative overflow-hidden h-[300px] flex items-center">
      <Quote className="absolute top-8 left-8 text-blue-50 w-24 h-24 -z-0" />
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="relative z-10 w-full"
        >
          <div className="flex gap-1 mb-6">
            {[...Array(testimonials[index].stars)].map((_, i) => <Star key={i} size={16} className="fill-orange-400 text-orange-400" />)}
          </div>
          <p className="text-2xl font-medium text-slate-700 italic mb-6 leading-relaxed">"{testimonials[index].text}"</p>
          <p className="text-sm font-black text-blue-600 uppercase tracking-[0.2em]">— {testimonials[index].author}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function NeerajPortfolio() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const handleDownload = () => {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 }, colors: ['#2563eb', '#f97316', '#10b981'] });
  };

  const experiences = [
    { 
      role: "Senior DBA", company: "Tech Solutions", date: "2023 - Present", 
      details: ["Managed 50TB+ AWS RDS instances", "99.99% Uptime achievement", "Terraform for DB automation"],
      tags: ["PostgreSQL", "AWS Aurora"]
    },
    { 
      role: "Database Engineer", company: "DataSystems Ltd", date: "2021 - 2023", 
      details: ["Query optimization reducing load by 40%", "MongoDB Sharding", "DR Strategy Implementation"],
      tags: ["MySQL", "MongoDB"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfe] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden relative">
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 z-[100] origin-left" style={{ scaleX }} />

      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100 px-8 py-5 flex justify-between items-center">
        <span className="font-black text-2xl tracking-tighter text-blue-600 uppercase">DNK<span className="text-orange-500">.</span></span>
        <button onClick={handleDownload} className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-bold hover:shadow-lg transition-all shadow-blue-200">
          <Download size={14} /> Download CV
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-8 relative z-10">
        {/* HERO SECTION */}
        <section className="py-24 md:py-48 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter text-slate-900 leading-none mb-10">
              D NEERAJ <br /><span className="text-blue-600 uppercase">KUMAR</span>
            </h1>
            <p className="text-2xl text-slate-500 max-w-2xl mx-auto font-medium italic">Empowering data systems with 3.5+ years of DBA & DevOps excellence.</p>
          </motion.div>
        </section>

        {/* RADAR & SKILLS SECTION */}
        <section className="py-20 border-t border-slate-100">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <FadeInSection>
              <h2 className="text-xs font-black uppercase tracking-[0.4em] text-orange-500 mb-6">Efficiency Profile</h2>
              <h3 className="text-5xl font-black mb-8 leading-tight">Mastery across the <br /><span className="text-blue-600 underline decoration-slate-200 underline-offset-8">Data Stack.</span></h3>
              <p className="text-slate-500 text-lg mb-10">From raw SQL optimization to cloud-native Kubernetes orchestration, I bridge the gap between code and infrastructure.</p>
              <div className="flex flex-wrap gap-4">
                 {["PostgreSQL", "AWS RDS", "Docker", "Terraform", "Prometheus"].map(s => (
                   <span key={s} className="px-4 py-2 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 shadow-sm">{s}</span>
                 ))}
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <SkillsRadar />
            </FadeInSection>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="py-20">
          <FadeInSection>
            <h2 className="text-5xl font-black mb-20 tracking-tight text-center">Work Experience</h2>
          </FadeInSection>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <FadeInSection key={idx} delay={idx * 0.1}>
                <div 
                  className={`bg-white border rounded-[3rem] transition-all duration-500 ${expandedIdx === idx ? 'border-blue-500 shadow-2xl p-10' : 'border-slate-200 p-8 shadow-sm hover:border-blue-300'}`}
                  onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                >
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6 cursor-pointer">
                    <div className="flex gap-6 items-center">
                      <div className={`p-4 rounded-3xl ${expandedIdx === idx ? 'bg-blue-600 text-white shadow-lg' : 'bg-slate-100 text-blue-600'}`}><Server size={30} /></div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{exp.date}</span>
                        <h4 className="text-3xl font-bold">{exp.role}</h4>
                        <p className="text-blue-600 font-bold text-sm uppercase">{exp.company}</p>
                      </div>
                    </div>
                    <ChevronRight className={`transition-transform duration-500 ${expandedIdx === idx ? 'rotate-90 text-blue-600' : 'text-slate-300'}`} size={32} />
                  </div>
                  <AnimatePresence>
                    {expandedIdx === idx && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pt-8 mt-8 border-t border-slate-100">
                        <ul className="space-y-4">
                          {exp.details.map((d, i) => (
                            <li key={i} className="flex gap-3 text-slate-600 items-start"><CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-1" />{d}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* TESTIMONIAL SECTION */}
        <section className="py-20">
          <FadeInSection>
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-orange-500 mb-10 text-center">Testimonials</h2>
            <TestimonialCarousel />
          </FadeInSection>
        </section>

        {/* FOOTER CONTACT */}
        <FadeInSection>
          <section id="contact" className="py-24 mb-20">
            <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
              <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter uppercase leading-none">Let's build <br />Future.</h2>
              <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
                <a href="mailto:d.neerajkumar480@gmail.com" className="bg-blue-600 text-white px-12 py-5 rounded-3xl font-black uppercase text-sm shadow-xl shadow-blue-900/40">Email Neeraj</a>
                <a href="tel:+917077600849" className="bg-white text-black px-12 py-5 rounded-3xl font-black uppercase text-sm hover:bg-orange-500 hover:text-white transition-all">+91 7077600849</a>
              </div>
              <Database className="absolute -bottom-10 -right-10 w-96 h-96 text-white/[0.03] rotate-12" />
            </div>
          </section>
        </FadeInSection>
      </main>

      <footer className="max-w-6xl mx-auto px-8 py-12 border-t border-slate-100 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">
        <p>D Neeraj Kumar — {new Date().getFullYear()}</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-blue-600">LinkedIn</a>
          <a href="#" className="hover:text-blue-600">GitHub</a>
        </div>
      </footer>
    </div>
  );
}