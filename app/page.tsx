"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Activity, Server, Clock, Database as DBIcon, ArrowUpRight } from 'lucide-react';

const MonitoringDashboard = () => {
  const [latency, setLatency] = useState(42);

  // Simulated live latency jitter
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => Math.max(38, Math.min(prev + (Math.random() * 4 - 2), 48)));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { label: "CPU Usage", value: "24%", color: "text-emerald-500", bg: "bg-emerald-500/10" },
    { label: "Active Conns", value: "1,204", color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "IOPS", value: "12.4k", color: "text-orange-500", bg: "bg-orange-500/10" },
  ];

  return (
    <section className="mb-40">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-blue-600 mb-2">Live Systems Simulation</h2>
          <h3 className="text-3xl font-bold text-slate-900">Health Monitoring</h3>
        </div>
        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold animate-pulse">
          <Activity size={12} /> LIVE STATUS
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-100 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <svg width="100%" height="100%"><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="black" /></pattern><rect width="100%" height="100%" fill="url(#dots)" /></svg>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative z-10">
          {/* Main Latency Gauge */}
          <div className="md:col-span-1 p-6 bg-slate-900 rounded-3xl text-white flex flex-col justify-between">
            <div>
              <Clock size={20} className="text-blue-400 mb-4" />
              <p className="text-[10px] font-bold uppercase opacity-50 tracking-widest">Query Latency</p>
            </div>
            <div>
              <div className="text-5xl font-black mb-1 font-mono tracking-tighter">
                {latency.toFixed(1)}<span className="text-xl text-blue-400">ms</span>
              </div>
              <p className="text-[10px] text-emerald-400 font-bold">OPTIMIZED (P99)</p>
            </div>
          </div>

          {/* Other Metrics Grid */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            {metrics.map((m, i) => (
              <div key={i} className="p-6 border border-slate-100 rounded-3xl bg-slate-50/50 flex flex-col justify-between">
                <div className={`w-10 h-10 ${m.bg} rounded-xl flex items-center justify-center ${m.color}`}>
                  <Activity size={18} />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">{m.value}</div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{m.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual DB Architecture Diagram Link */}
        <div className="mt-8 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
             <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white"><DBIcon size={14}/></div>
                <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-white"><Server size={14}/></div>
             </div>
             <p className="text-xs font-medium text-slate-500">Infrastructure visualized with **AWS CloudWatch** & **Grafana**</p>
          </div>
          <button className="text-xs font-bold text-blue-600 flex items-center gap-2 hover:gap-3 transition-all">
            VIEW FULL ARCHITECTURE <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MonitoringDashboard;