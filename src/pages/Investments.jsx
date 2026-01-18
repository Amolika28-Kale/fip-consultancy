"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  TrendingUp,
  ShieldCheck,
  GanttChartSquare,
  ArrowUpRight,
  BarChart3,
  Building2,
  PieChart,
  Timer,
  PhoneCall,
  Activity,
  ChevronRight
} from "lucide-react";

/* ================= ANIMATIONS ================= */
const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const perspectiveReveal = {
  hidden: { opacity: 0, y: 40, rotateX: -10, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Investments() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F8FAFC] text-slate-900 overflow-x-hidden selection:bg-[#6495ED] selection:text-white">

      {/* ================= HERO (WEALTH DASHBOARD STYLE) ================= */}
      <section className="relative min-h-screen flex items-center pt-24 px-6 overflow-hidden">
        {/* Abstract Background Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            variants={containerStagger} 
            initial="hidden" 
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div variants={perspectiveReveal} className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-[#6495ED]" />
              <span className="text-[#6495ED] text-[10px] uppercase tracking-[0.5em] font-black">Strategic Alpha Architecture</span>
            </motion.div>

            <motion.h1 
              variants={perspectiveReveal}
              className="font-black tracking-tighter leading-[0.85] mb-10 text-[clamp(3.5rem,9vw,7.5rem)] text-slate-950"
            >
              Wealth <br />
              <span className="text-[#6495ED]">Engineered.</span>
            </motion.h1>

            <motion.p 
              variants={perspectiveReveal}
              className="max-w-xl text-slate-500 font-medium leading-relaxed text-lg md:text-xl mb-12"
            >
              Disciplined capital preservation meets institutional-grade yield. 
              We don't just find opportunities; we architect them.
            </motion.p>

            <motion.div variants={perspectiveReveal} className="flex flex-wrap gap-6">
              <button
                onClick={() => navigate("/contact")}
                className="bg-slate-950 text-white px-10 py-5 rounded-2xl font-black tracking-widest text-xs hover:bg-[#6495ED] transition-all shadow-2xl flex items-center gap-4"
              >
                OPEN PORTFOLIO <ArrowUpRight size={18} />
              </button>
              <div className="flex items-center gap-4 px-6 border-l border-slate-200">
                <Activity className="text-[#6495ED]" />
                <div className="text-left">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Current Benchmarks</div>
                  <div className="text-sm font-black">15.5% — 40.0% PA</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Asset Allocation Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="bg-white p-8 rounded-[3rem] shadow-2xl border border-slate-100 relative z-20">
               <div className="flex items-center justify-between mb-8">
                  <h4 className="font-black text-slate-400 text-xs uppercase tracking-widest">Global Balanced Fund</h4>
                  <PieChart className="text-[#6495ED]" size={20} />
               </div>
               
               {/* Allocation Diagram */}
               

               <div className="space-y-6 mt-8">
                  <AllocationRow label="Real Estate" value="45%" color="bg-[#6495ED]" />
                  <AllocationRow label="Private Equity" value="30%" color="bg-slate-900" />
                  <AllocationRow label="Structured Debt" value="25%" color="bg-slate-200" />
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= RISK-REWARD MATRIX ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-50 rounded-[3rem] p-10 md:p-16 border border-slate-100">
            <h3 className="text-2xl font-black mb-8 tracking-tight">Alpha Strategy Matrix</h3>
            <p className="text-slate-500 mb-12 max-w-2xl font-medium">Visualization of our risk-adjusted return spectrum across various maturity horizons.</p>
            
            
          </div>
        </div>
      </section>

      {/* ================= INVESTMENT GRID (BENTO STYLE) ================= */}
      <section className="py-32 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Investment <span className="text-[#6495ED]">Tiers</span></h2>
            <p className="text-slate-400 font-bold tracking-[0.2em] uppercase text-xs">Curated Asset Classes</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            <BentoInvestment 
              span="lg:col-span-8" 
              icon={<Building2 />} 
              rate="30–40% PA" 
              title="Strategic Land Appreciation"
              desc="Direct equity into high-growth developmental zones with 36-month horizons."
              tags={["3 Years", "Direct Land", "High Alpha"]}
              dark
            />
            <BentoInvestment 
              span="lg:col-span-4" 
              icon={<Timer />} 
              rate="20–25% PA" 
              title="Short-Term Alpha"
              desc="Rapid velocity liquidity backed by property."
              tags={["6-12 Mo", "Property"]}
            />
            <BentoInvestment 
              span="lg:col-span-5" 
              icon={<BarChart3 />} 
              rate="10% PA" 
              title="Passive Rental Income"
              desc="Predictable monthly yield from commercial portfolios."
              tags={["Monthly", "Low Risk"]}
            />
            <BentoInvestment 
              span="lg:col-span-7" 
              icon={<PieChart />} 
              rate="15–20% PA" 
              title="Venture Participation"
              desc="Equity involvement in pre-vetted, scalable business ecosystems."
              tags={["Variable", "Business Equity"]}
              color="bg-[#EEF4FF]"
            />
          </div>
        </div>
      </section>

      {/* ================= FINAL CALL ================= */}
      <section className="py-40 px-6">
        <motion.div 
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          className="max-w-5xl mx-auto bg-slate-950 rounded-[4rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-3xl"
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12">
            Secure Your <br /><span className="text-[#6495ED]">Legacy.</span>
          </h2>
          <button 
            onClick={() => navigate("/contact")}
            className="group px-14 py-7 bg-[#6495ED] rounded-2xl font-black tracking-[0.3em] text-xs hover:bg-white hover:text-slate-900 transition-all flex items-center gap-4 mx-auto"
          >
            <PhoneCall size={18} />
            TALK TO AN ARCHITECT
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>
    </div>
  );
}

/* ================= SUB COMPONENTS ================= */

function AllocationRow({ label, value, color }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
        <span>{label}</span>
        <span className="text-[#6495ED]">{value}</span>
      </div>
      <div className="h-1.5 w-full bg-slate-50 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: value }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className={`h-full ${color}`} 
        />
      </div>
    </div>
  );
}

function Pillar({ icon, title, desc }) {
  return (
    <motion.div variants={fadeInUp} className="group">
      <div className="w-16 h-16 bg-[#EEF4FF] text-[#6495ED] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#6495ED] group-hover:text-white transition-all duration-300">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <h3 className="text-2xl font-black mb-4 tracking-tight">{title}</h3>
      <p className="text-slate-500 font-medium leading-relaxed text-sm">{desc}</p>
    </motion.div>
  );
}

function BentoInvestment({ icon, rate, title, desc, tags, span, dark = false, color = "bg-white" }) {
  const navigate = useNavigate();
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`${span} ${dark ? 'bg-slate-950 text-white border-transparent' : color} p-10 md:p-12 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between shadow-sm transition-all duration-500 hover:shadow-2xl`}
    >
      <div>
        <div className="flex justify-between items-start mb-12">
          <div className={`${dark ? 'bg-white/10 text-white' : 'bg-[#6495ED]/10 text-[#6495ED]'} p-4 rounded-2xl`}>
            {React.cloneElement(icon, { size: 30 })}
          </div>
          <div className="text-2xl font-black text-[#6495ED]">{rate}</div>
        </div>
        <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight leading-none">{title}</h3>
        <p className={`text-sm md:text-base font-medium mb-10 leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-10">
        {tags.map((tag, i) => (
          <span key={i} className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest ${dark ? 'bg-white/5' : 'bg-slate-50 text-[#6495ED]'}`}>
            {tag}
          </span>
        ))}
      </div>

      <button 
        onClick={() => navigate("/contact")}
        className={`w-full py-5 rounded-2xl font-black text-[10px] tracking-[0.3em] uppercase transition-all ${dark ? 'bg-[#6495ED] hover:bg-white hover:text-slate-900' : 'bg-slate-900 text-white hover:bg-[#6495ED]'}`}
      >
        Analyze Opportunity
      </button>
    </motion.div>
  );
}