"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  Building2, Search, Key, TrendingUp, ArrowUpRight, 
  ShieldCheck, UserCheck, GanttChartSquare, PhoneCall, CheckCircle2 
} from "lucide-react";

/* ================= UPGRADED ANIMATIONS ================= */
const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemReveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Property() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <div className="bg-[#FAF9FF] text-slate-900 overflow-x-hidden pt-20">

      {/* ================= HERO: ARCHITECTURAL PRECISION ================= */}
      <section className="relative min-h-[75vh] md:min-h-[90vh] flex items-center overflow-hidden bg-white border-b border-purple-100">
        
        {/* Parallax Architectural Backdrop */}
        <motion.div style={{ y: yParallax }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            alt="Real Estate Infrastructure"
            className="w-full h-full object-cover opacity-[0.05] scale-125"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div variants={containerStagger} initial="hidden" animate="visible">
            
            <motion.div variants={itemReveal} className="mb-8 flex justify-center">
              <span className="inline-flex items-center gap-3 px-5 py-2.5 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-purple-600 bg-purple-50 border border-purple-100 rounded-full shadow-sm">
                <Building2 size={14} className="animate-pulse" /> Asset Stewardship 
              </span>
            </motion.div>

            <motion.h1
              variants={itemReveal}
              className="text-5xl sm:text-8xl md:text-[10rem] font-black tracking-tighter text-slate-900 leading-[0.85] mb-8"
            >
              Profitable <br />
              <span className="text-purple-600 italic">Portfolios.</span>
            </motion.h1>

            <motion.p
              variants={itemReveal}
              className="mt-6 md:mt-12 max-w-3xl mx-auto text-lg md:text-2xl text-slate-500 leading-relaxed font-medium"
            >
              Full-lifecycle real estate advisory engineered for <span className="text-purple-700 font-bold">maximum yield</span>, absolute legal compliance, and strategic exit optimization.
            </motion.p>

            <motion.div variants={itemReveal} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
               <button 
                onClick={() => navigate("/contact")} 
                className="w-full sm:w-auto group flex items-center justify-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black tracking-widest hover:bg-purple-600 transition-all shadow-2xl"
               >
                 CONSULT AN EXPERT <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
               </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= BENTO SERVICES GRID ================= */}
      <section className="py-20 md:py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerStagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            <ServiceCard
              index="01"
              icon={<Search size={28} />}
              title="Strategic Acquisition"
              desc="High-precision guidance for residential and commercial entry points."
              items={["Price Arbitrage", "Due Diligence", "Market Entry"]}
            />
            <ServiceCard
              index="02"
              icon={<UserCheck size={28} />}
              title="Asset Management"
              desc="End-to-end rental yield optimization and tenant governance."
              items={["Oversight", "Yield Management", "Tenant Sourcing"]}
              isFeatured={true}
            />
            <ServiceCard
              index="03"
              icon={<TrendingUp size={28} />}
              title="Capital Gains"
              desc="Data-driven strategies for long-term wealth appreciation."
              items={["Timing Strategy", "Zone Selection", "Exit Planning"]}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= RETURNS MODEL: THE STAIRCASE ================= */}
      <section className="py-20 md:py-36 bg-[#F9F8FF] border-y border-purple-100 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-purple-700 bg-purple-50 px-5 py-2 rounded-full border border-purple-100">
              Structured Exit Alpha
            </span>
            <h2 className="text-4xl md:text-8xl font-black text-slate-900 mt-8 mb-16 md:mb-24 tracking-tighter">
              Growth <span className="text-purple-600">Trajectory.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <ExitCard year="STAGE 01" roi="15–20%" desc="Acquisition & Setup" delay={0.1} height="h-64" />
            <ExitCard year="STAGE 02" roi="20–30%" desc="Market Appreciation" delay={0.2} height="h-80" />
            <ExitCard year="STAGE 03" roi="30–40%" desc="Optimized Liquidity" delay={0.3} height="h-96" />
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-16 md:mt-24 p-8 bg-white border border-purple-100 rounded-[2.5rem] shadow-xl shadow-purple-100/50 inline-flex items-center gap-6"
          >
             <ShieldCheck size={32} className="text-purple-600 shrink-0" />
             <p className="text-slate-600 text-sm md:text-lg font-bold tracking-tight text-left">
               Full Legal Compliance & Asset-Backed ROI Protection
             </p>
          </motion.div>
        </div>
      </section>

      {/* ================= INSIGHTS TICKER ================= */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 flex items-center justify-between">
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter">
            Intelligence.
          </h2>
          <div className="flex gap-2">
             <div className="w-12 h-2 bg-purple-600 rounded-full" />
             <div className="w-4 h-2 bg-purple-100 rounded-full" />
          </div>
        </div>

        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] cursor-grab">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-6 px-3">
              {["Market Trends", "Rental Strategy", "Exit Timing", "Compliance", "Outlook"].map((item, idx) => (
                <div key={idx} className="bg-[#FAF9FF] border border-purple-50 p-10 w-[300px] md:w-[400px] shrink-0 rounded-[3rem] group hover:bg-purple-600 transition-all duration-500">
                  <GanttChartSquare className="mb-6 text-purple-200 group-hover:text-white transition-colors" size={32} />
                  <h4 className="font-black text-2xl text-slate-800 group-hover:text-white mb-4">{item}</h4>
                  <p className="text-slate-500 group-hover:text-purple-100 mb-8 font-medium">Strategic real estate intelligence for high-net-worth deployments.</p>
                  <div className="flex items-center gap-2 text-[10px] font-black text-purple-600 group-hover:text-white uppercase tracking-widest">
                    Read Report <ArrowUpRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY FIP: IMPACT CTA ================= */}
      <section className="py-20 md:py-40 bg-slate-950 text-white relative overflow-hidden px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-9xl font-black mb-12 tracking-tighter leading-[0.9]">
            The FIP <br /><span className="text-purple-400 italic font-light">Ecosystem.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 text-left mb-16">
            {[
              "Finance & Property Synergy",
              "Tier-1 Asset Allocation",
              "Managed ROI Structures",
              "Digital Custodial Compliance"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-5 p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md hover:bg-white/10 transition-colors">
                <div className="bg-purple-600 p-2 rounded-lg"><Key size={20} /></div>
                <span className="font-black text-lg md:text-xl tracking-tight uppercase">{text}</span>
              </div>
            ))}
          </div>

          <button 
            onClick={() => navigate("/contact")}
            className="group w-full sm:w-auto bg-purple-600 text-white px-12 py-6 rounded-2xl font-black tracking-widest hover:bg-white hover:text-slate-900 transition-all shadow-2xl flex items-center justify-center gap-4 mx-auto"
          >
            CONSULT ADVISOR <PhoneCall size={20} className="group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}

/* ================= REFINED COMPONENTS ================= */

function ServiceCard({ index, icon, title, desc, items, isFeatured }) {
  return (
    <motion.div 
      variants={itemReveal}
      whileHover={{ y: -10 }}
      className={`group p-10 md:p-14 rounded-[3.5rem] border transition-all relative overflow-hidden flex flex-col ${
        isFeatured 
        ? "bg-slate-900 border-slate-800 text-white shadow-3xl shadow-purple-900/20" 
        : "bg-white border-purple-50 shadow-sm hover:shadow-2xl hover:shadow-purple-100"
      }`}
    >
      <div className="absolute -top-4 -right-4 p-8 text-purple-600/5 font-black text-8xl md:text-9xl">{index}</div>
      <div className={`p-4 rounded-2xl w-fit mb-8 transition-all ${
        isFeatured ? "bg-white/10 text-white" : "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
      }`}>
        {icon}
      </div>
      <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase">{title}</h3>
      <p className={`text-base md:text-lg mb-10 font-medium leading-relaxed ${isFeatured ? "text-slate-400" : "text-slate-500"}`}>{desc}</p>
      
      <div className="space-y-4 mt-auto">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-xs font-black uppercase tracking-widest">
            <CheckCircle2 size={16} className="text-purple-500" />
            <span className={isFeatured ? "text-slate-300" : "text-slate-700"}>{item}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ExitCard({ year, roi, desc, delay, height }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className={`bg-white border border-purple-50 p-10 flex flex-col justify-center rounded-[3rem] hover:shadow-2xl hover:shadow-purple-100 transition-all group ${height}`}
    >
      <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-400 mb-6 group-hover:text-purple-600 transition-colors">{year}</h4>
      <p className="text-5xl md:text-7xl font-black text-slate-900 mb-4 tracking-tighter">{roi}</p>
      <p className="text-slate-500 text-xs font-black uppercase tracking-widest leading-relaxed">{desc}</p>
    </motion.div>
  );
}