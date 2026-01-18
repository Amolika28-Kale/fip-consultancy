"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Building2, Search, TrendingUp, ArrowUpRight,
  ShieldCheck, UserCheck, PhoneCall, CheckCircle2, Quote,
  MapPin, BarChart4
} from "lucide-react";

/* ================= ANIMATIONS ================= */
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Property() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 100]);

  return (
    <div className="bg-[#FDFDFD] text-slate-900 pt-16 md:pt-24 overflow-x-hidden font-sans selection:bg-blue-600 selection:text-white">

      {/* ================= HERO (EDITORIAL STYLE) ================= */}
      <section className="relative min-h-[85vh] flex items-center px-4 md:px-6 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-slate-50 -z-10 skew-x-[-12deg] translate-x-1/4 hidden md:block border-l border-slate-100" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-10 items-center">
          <motion.div 
            variants={container} 
            initial="hidden" 
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div variants={reveal} className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="w-8 md:w-12 h-[1px] bg-blue-600" />
              <span className="text-blue-600 text-[9px] md:text-[11px] uppercase tracking-[0.4em] font-black">Institutional Property Alpha</span>
            </motion.div>

            <motion.h1 
              variants={reveal}
              className="text-[clamp(2.2rem,8vw,6rem)] leading-[0.9] font-black tracking-tighter mb-8 md:mb-10 text-slate-950"
            >
              Profitable <br />
              <span className="text-blue-600">Portfolios.</span>
            </motion.h1>

            <motion.p 
              variants={reveal}
              className="max-w-xl text-slate-500 font-medium leading-relaxed text-sm md:text-lg mb-10 md:mb-12 border-l-2 border-blue-600 pl-5 md:pl-6"
            >
              Lifecycle-driven real estate strategies engineered for predictable yield and capital protection in high-growth corridors.
            </motion.p>

            <motion.div variants={reveal} className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="w-full sm:w-auto bg-slate-950 text-white px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-xs md:text-sm tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-blue-900/10 flex items-center justify-center gap-3"
              >
                CONSULT EXPERT <ArrowUpRight size={18} />
              </button>
            </motion.div>
          </motion.div>

          {/* Clean Structural Art */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-lg"><BarChart4 size={24}/></div>
                  <div className="font-black text-[10px] uppercase tracking-widest text-slate-400">Market Absorption</div>
                </div>
                <div className="space-y-4">
                  <div className="h-1.5 bg-blue-600 rounded-full w-full" />
                  <div className="h-1.5 bg-slate-100 rounded-full w-3/4" />
                  <div className="h-1.5 bg-slate-100 rounded-full w-1/2" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES (BENTO GRID) ================= */}
      <section className="py-20 md:py-32 bg-white px-4 md:px-6 border-y border-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-slate-950">Asset <span className="text-blue-600">Intelligence</span></h2>
              <p className="text-slate-400 font-bold tracking-[0.2em] uppercase text-[10px]">End-to-end Portfolio Steering</p>
            </div>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <ServiceCard 
              icon={<Search />}
              title="Acquisition"
              desc="Market-driven sourcing with valuation discipline and risk filtering."
              items={["Market Screening", "Entry Logic"]}
            />
            <ServiceCard 
              icon={<UserCheck />}
              title="Management"
              desc="Operational control focused on stable rental yield and occupancy."
              items={["Tenant Oversight", "Compliance"]}
              featured
            />
            <ServiceCard 
              icon={<TrendingUp />}
              title="Appreciation"
              desc="Long-cycle capital growth via infrastructure demand mapping."
              items={["Exit Timing", "Zoning Insight"]}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= TRAJECTORY (HORIZONTAL FLOW) ================= */}
      <section className="py-20 md:py-32 bg-slate-50 px-4 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-16 md:mb-24 text-slate-950">Growth <span className="text-blue-600">Trajectory</span></h2>
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-8 mb-16">
            <TrajectoryStep stage="01" roi="15–20%" label="Setup" desc="Asset acquisition & legal structuring." />
            <TrajectoryStep stage="02" roi="20–30%" label="Maturity" desc="Operational yield & market appreciation." />
            <TrajectoryStep stage="03" roi="30–40%" label="Exit" desc="Optimized capital realization." />
          </div>

          

          <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            className="mt-16 inline-flex items-center gap-4 bg-white border border-slate-100 p-5 md:p-6 rounded-xl shadow-sm"
          >
            <ShieldCheck className="text-blue-600" size={18} />
            <p className="font-bold text-slate-500 text-[10px] uppercase tracking-widest text-left">
              Regulatory Compliant Asset-Backed Structures
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 md:py-32 bg-white px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8 text-slate-950">Client <span className="text-blue-600">Confidence.</span></h2>
              <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">
                Strategic focus on long-term value creation has allowed our partners to scale their real estate holdings with absolute clarity.
              </p>
            </div>
            <div className="space-y-6">
              <TestimonialCard text="Exceptional clarity and disciplined execution at every stage of the acquisition." />
              <TestimonialCard text="Reliable governance and a refreshing long-term focus in a short-term market." />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 md:py-40 px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-slate-950 rounded-2xl p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-10 md:mb-14 relative z-10 leading-[1.0]">
            Build Your <br /> <span className="text-blue-600">Legacy.</span>
          </h2>
          <button 
            onClick={() => navigate("/contact")}
            className="group w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 bg-blue-600 rounded-xl font-black tracking-[0.2em] text-[10px] md:text-xs hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-4 mx-auto relative z-10"
          >
            <PhoneCall size={18} />
            TALK TO AN ADVISOR
          </button>
        </div>
      </section>
    </div>
  );
}

/* ================= SUB-COMPONENTS ================= */

function ServiceCard({ icon, title, desc, items, featured = false }) {
  return (
    <motion.div 
      variants={reveal}
      className={`${featured ? 'bg-slate-950 text-white shadow-xl' : 'bg-white border-slate-100'} p-8 md:p-10 rounded-2xl border transition-all duration-300`}
    >
      <div className={`${featured ? 'bg-white/10 text-white' : 'bg-blue-50 text-blue-600'} w-12 h-12 rounded flex items-center justify-center mb-8`}>
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <h3 className="text-xl font-black mb-4 uppercase tracking-tight">{title}</h3>
      <p className={`text-xs md:text-sm font-medium mb-8 leading-relaxed ${featured ? 'text-slate-400' : 'text-slate-500'}`}>
        {desc}
      </p>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest opacity-80">
            <CheckCircle2 size={14} className="text-blue-600" /> {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function TrajectoryStep({ stage, roi, label, desc }) {
  return (
    <motion.div variants={reveal} className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center">
      <span className="text-blue-600 font-black text-[10px] tracking-[0.4em] uppercase mb-6">{stage}</span>
      <div className="text-4xl md:text-5xl font-black text-slate-950 mb-2 tracking-tighter">{roi}</div>
      <div className="font-bold text-[10px] uppercase tracking-widest text-slate-400 mb-6">{label}</div>
      <p className="text-slate-500 text-xs font-medium leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function TestimonialCard({ text }) {
  return (
    <div className="bg-slate-50 p-8 md:p-10 rounded-2xl relative">
      <Quote className="absolute -top-4 -left-2 w-8 h-8 p-1.5 bg-blue-600 text-white rounded-lg shadow-lg" />
      <p className="text-slate-600 text-xs md:text-sm font-medium italic leading-relaxed mb-6">"{text}"</p>
      <div className="flex items-center gap-2">
        <div className="w-1 h-1 bg-blue-600 rounded-full" />
        <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Verified Partner</span>
      </div>
    </div>
  );
}