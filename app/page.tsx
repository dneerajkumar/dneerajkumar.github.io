"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
  useInView,
} from "framer-motion";
import confetti from "canvas-confetti";
import {
  Database,
  Server,
  Cpu,
  Cloud,
  Terminal,
  Layers,
  ChevronRight,
  CheckCircle2,
  Mail,
  Phone,
  Linkedin,
  Github,
  Download,
  Zap,
  ShieldCheck,
  Code,
  Settings,
  Star,
  ArrowRight,
  X,
  AlertTriangle,
  FileCode,
  HardDrive,
  Activity,
  Workflow,
  Shield,
  Container
} from "lucide-react";

/* ---------------------------------- */
/* PARALLAX TECHNOLOGY BACKGROUND */
/* ---------------------------------- */
const TechBackground = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax layers
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const icons = [
    { Icon: Database, color: "text-blue-500", top: "10%", left: "5%", size: 40 },
    { Icon: Server, color: "text-orange-500", top: "25%", left: "85%", size: 60 },
    { Icon: Cpu, color: "text-purple-500", top: "45%", left: "10%", size: 50 },
    { Icon: Container, color: "text-emerald-500", top: "60%", left: "80%", size: 45 },
    { Icon: HardDrive, color: "text-blue-600", top: "75%", left: "15%", size: 55 },
    { Icon: Shield, color: "text-red-400", top: "15%", left: "70%", size: 35 },
    { Icon: Workflow, color: "text-purple-400", top: "85%", left: "75%", size: 40 },
    { Icon: Activity, color: "text-emerald-400", top: "35%", left: "20%", size: 30 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.04]">
      {/* Layer 1: Fast moving */}
      <motion.div style={{ y: y1, rotate }} className="absolute inset-0">
        {icons.slice(0, 4).map((item, i) => (
          <div key={i} className={`absolute ${item.color}`} style={{ top: item.top, left: item.left }}>
            <item.Icon size={item.size} />
          </div>
        ))}
      </motion.div>
      
      {/* Layer 2: Slow moving */}
      <motion.div style={{ y: y2 }} className="absolute inset-0">
        {icons.slice(4).map((item, i) => (
          <div key={i} className={`absolute ${item.color}`} style={{ top: item.top, left: item.left }}>
            <item.Icon size={item.size} />
          </div>
        ))}
      </motion.div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
    </div>
  );
};

/* ---------------------------------- */
/* CURSOR GLOW */
/* ---------------------------------- */
const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      <div
        style={{ left: pos.x, top: pos.y }}
        className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full
        bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10 blur-[100px]"
      />
    </div>
  );
};

/* ---------------------------------- */
/* COMMAND PALETTE */
/* ---------------------------------- */
const CommandPalette = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (!open) return null;

  const links = ["home", "projects", "skills", "contact"];

  return (
    <div className="fixed inset-0 z-[200] bg-black/60 flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-black tracking-tight">Command Palette</h3>
          <span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-500">ESC to close</span>
        </div>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l}`}
            onClick={() => setOpen(false)}
            className="block px-4 py-3 rounded-xl hover:bg-blue-50 font-bold capitalize transition-colors"
          >
            {l}
          </a>
        ))}
      </motion.div>
    </div>
  );
};

/* ---------------------------------- */
/* FADE IN */
/* ---------------------------------- */
const FadeInWhenVisible = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

/* ---------------------------------- */
/* MAIN COMPONENT */
/* ---------------------------------- */
export default function NeerajFinalPortfolio() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const handleDownload = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      colors: ["#2563eb", "#9333ea", "#f97316"],
    });
  };

  const projects = [
    {
      title: "Cloud Migration Strategy",
      desc: "12TB SQL → AWS Aurora with near-zero downtime",
      stack: ["AWS", "PostgreSQL", "Terraform"],
      img: "https://via.placeholder.com/600x400/2563eb/ffffff?text=Cloud+Migration",
    },
    {
      title: "Automated DR Platform",
      desc: "Cross-region PITR & failover automation",
      stack: ["AWS", "Lambda", "Python"],
      img: "https://via.placeholder.com/600x400/f97316/ffffff?text=DR+Automation",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfe] text-slate-900 relative overflow-x-hidden selection:bg-blue-500/30">
      <TechBackground />
      <CursorGlow />
      <CommandPalette />

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b px-8 py-5 flex justify-between items-center">
        <span className="font-black text-2xl text-blue-600 tracking-tighter hover:scale-105 transition-transform">DNK.</span>
        <div className="hidden md:flex gap-8 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </div>
        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-black flex items-center gap-2 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95"
        >
          <Download size={14} /> Resume
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-8 relative z-10">
        {/* HERO */}
        <section id="home" className="py-32">
          <FadeInWhenVisible>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">
              Senior Database Administrator & DevOps
            </div>
            <h1 className="text-7xl md:text-[9rem] font-black leading-[0.85] tracking-tighter">
              D NEERAJ <br />
              <span className="text-blue-600">KUMAR</span>
            </h1>

            <div className="flex items-center gap-2 mt-8">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Architecting 99.9% Uptime Solutions
              </span>
            </div>
          </FadeInWhenVisible>
        </section>

        {/* STATS SECTION */}
        <section className="py-24 grid md:grid-cols-4 gap-6">
          {[
            { label: "Uptime Managed", value: "99.9%", icon: Activity, color: "text-emerald-500" },
            { label: "Data Scale", value: "50TB+", icon: Database, color: "text-blue-500" },
            { label: "AWS Deployments", value: "150+", icon: Cloud, color: "text-orange-500" },
            { label: "Query Optimization", value: "35%", icon: Zap, color: "text-purple-500" },
          ].map((s, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.1}>
              <div
                className="backdrop-blur-xl bg-white/70 border border-white/30
                shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all
                rounded-[2.5rem] p-8 text-center group"
              >
                <div className={`${s.color} mb-4 flex justify-center group-hover:scale-110 transition-transform`}>
                  <s.icon size={28} />
                </div>
                <div className="text-3xl font-black mb-1">{s.value}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {s.label}
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Portfolio</h2>
              <h3 className="text-4xl font-black tracking-tight">Featured Infrastructure</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <FadeInWhenVisible key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  onClick={() => setActiveProject(i)}
                  className="bg-white rounded-[2.5rem] p-8 border shadow-sm hover:shadow-2xl transition-all cursor-pointer group"
                >
                  <div className="overflow-hidden rounded-xl mb-6">
                    <img
                      src={p.img}
                      className="w-full opacity-90 group-hover:scale-105 transition-transform duration-500"
                      alt={p.title}
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-black tracking-tight">{p.title}</h3>
                      <p className="text-slate-500 mt-2 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                  <div className="flex gap-2 mt-6">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-bold px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-slate-500"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32">
          <FadeInWhenVisible>
            <div className="bg-slate-900 text-white rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <Workflow size={200} />
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-8 relative z-10">Scale Your <br/><span className="text-blue-500">Infrastructure</span></h2>
              <p className="text-slate-400 mb-12 max-w-lg mx-auto relative z-10 font-medium leading-relaxed">
                Currently open to freelance DBA roles and full-time engineering positions. Let's build something scalable.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center relative z-10">
                <a
                  href="mailto:d.neerajkumar480@gmail.com"
                  className="bg-blue-600 hover:bg-blue-700 transition-colors px-10 py-5 rounded-3xl font-black text-xs flex items-center justify-center gap-3"
                >
                  <Mail size={16} /> Email Neeraj
                </a>
                <a
                  href="tel:+917077600849"
                  className="bg-white text-black hover:bg-slate-100 transition-colors px-10 py-5 rounded-3xl font-black text-xs flex items-center justify-center gap-3"
                >
                  <Phone size={16} /> Schedule Call
                </a>
              </div>
            </div>
          </FadeInWhenVisible>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="max-w-6xl mx-auto px-8 py-12 border-t text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 flex flex-col md:flex-row justify-between gap-6">
        <span>© {new Date().getFullYear()} D Neeraj Kumar • Lead Database Architect</span>
        <div className="flex gap-8">
          <a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-2 underline underline-offset-4">
            <Linkedin size={14} /> LinkedIn
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-2 underline underline-offset-4">
            <Github size={14} /> GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}