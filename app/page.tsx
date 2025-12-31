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
} from "lucide-react";

/* ---------------------------------- */
/* CURSOR GLOW */
/* ---------------------------------- */
const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
      className="fixed inset-0 pointer-events-none z-[1]"
    >
      <div
        style={{ left: pos.x, top: pos.y }}
        className="absolute w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full
        bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 blur-3xl"
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

  const links = ["home", "skills", "projects", "experience", "contact"];

  return (
    <div className="fixed inset-0 z-[200] bg-black/60 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl"
      >
        <h3 className="font-black mb-4 tracking-tight">Jump to</h3>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l}`}
            onClick={() => setOpen(false)}
            className="block px-4 py-3 rounded-xl hover:bg-blue-50 font-bold capitalize"
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
      desc: "Cross-region PITR & failover",
      stack: ["AWS", "Lambda", "Python"],
      img: "https://via.placeholder.com/600x400/f97316/ffffff?text=DR+Automation",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfe] text-slate-900 relative overflow-x-hidden">
      <CursorGlow />
      <CommandPalette />

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b px-8 py-5 flex justify-between">
        <span className="font-black text-2xl text-blue-600">DNK.</span>
        <button
          onClick={handleDownload}
          className="bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-black flex gap-2"
        >
          <Download size={14} /> Resume
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-8 relative z-10">
        {/* HERO */}
        <section id="home" className="py-32">
          <FadeInWhenVisible>
            <h1 className="text-7xl md:text-[9rem] font-black leading-[0.85]">
              D NEERAJ <br />
              <span className="text-blue-600">KUMAR</span>
            </h1>

            <div className="flex items-center gap-2 mt-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Available for opportunities
              </span>
            </div>
          </FadeInWhenVisible>
        </section>

        {/* DIVIDER */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500 origin-left"
        />

        {/* PROJECTS */}
        <section id="projects" className="py-24 grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ rotateX: 5, rotateY: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{ transformStyle: "preserve-3d" }}
                onClick={() => setActiveProject(i)}
                className="bg-white rounded-[2.5rem] p-8 border shadow-lg cursor-pointer"
              >
                <img
                  src={p.img}
                  className="rounded-xl mb-6 opacity-90"
                  alt={p.title}
                />
                <h3 className="text-2xl font-black">{p.title}</h3>
                <p className="text-slate-500 mt-2">{p.desc}</p>
                <div className="flex gap-2 mt-4">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[10px] font-bold px-3 py-1 bg-slate-100 rounded-lg"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </section>

        {/* STATS */}
        <section className="py-24 grid md:grid-cols-4 gap-6">
          {[
            { label: "Uptime", value: "99.9%" },
            { label: "Data Managed", value: "50TB+" },
            { label: "AWS Deployments", value: "150+" },
            { label: "Query Gains", value: "35%" },
          ].map((s, i) => (
            <FadeInWhenVisible key={i}>
              <div
                className="backdrop-blur-xl bg-white/70 border border-white/30
                shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                rounded-[2.5rem] p-8 text-center"
              >
                <div className="text-3xl font-black">{s.value}</div>
                <div className="text-xs uppercase tracking-widest text-slate-500">
                  {s.label}
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-32">
          <FadeInWhenVisible>
            <div className="bg-slate-900 text-white rounded-[4rem] p-16 text-center">
              <h2 className="text-5xl font-black mb-8">Let’s Connect</h2>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <a
                  href="mailto:d.neerajkumar480@gmail.com"
                  className="bg-blue-600 px-10 py-5 rounded-3xl font-black text-xs"
                >
                  <Mail size={16} /> Email Me
                </a>
                <a
                  href="tel:+917077600849"
                  className="bg-white text-black px-10 py-5 rounded-3xl font-black text-xs"
                >
                  <Phone size={16} /> Call Me
                </a>
              </div>
            </div>
          </FadeInWhenVisible>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-8 py-12 border-t text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 flex justify-between">
        <span>© {new Date().getFullYear()} D Neeraj Kumar</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-blue-600">
            <Linkedin size={14} />
          </a>
          <a href="#" className="hover:text-blue-600">
            <Github size={14} />
          </a>
        </div>
      </footer>
    </div>
  );
}
