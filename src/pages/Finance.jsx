"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  Landmark,
  BadgePercent,
  ArrowRight,
  FileCheck,
  Coins,
  BarChart3,
  Settings,
  CheckCircle2,
  TrendingUp,
  Layers
} from "lucide-react";

/* ================= MOTION CONFIG ================= */
const ease = [0.16, 1, 0.3, 1];

const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const perspectiveReveal = {
  hidden: { opacity: 0, y: 30, rotateX: -10, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } }
};

export default function Finance() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F8FAFC] text-slate-900 overflow-x-hidden selection:bg-[#6495ED] selection:text-white">
      
      {/* ================= HERO (REFINED) ================= */}
      <section className="relative min-h-[90vh] flex items-center pt-24 px-6 overflow-hidden">
        {/* Clean Geometric Accent */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-[-12deg] translate-x-1/4 hidden lg:block border-l border-slate-100" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            variants={containerStagger}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div variants={perspectiveReveal} className="inline-block px-3 py-1 bg-white border border-slate-200 text-[#6495ED] font-bold text-[10px] tracking-[0.3em] uppercase mb-8 rounded">
              Institutional Grade Advisory
            </motion.div>
            
            <motion.h1 
              variants={perspectiveReveal}
              className="font-black tracking-tighter leading-[1.0] mb-8 text-[clamp(2.5rem,8vw,5.5rem)] text-slate-950"
            >
              Finance <br />
              <span className="text-[#6495ED]">Redefined.</span>
            </motion.h1>

            <motion.div variants={perspectiveReveal} className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              <p className="max-w-md text-slate-500 font-medium leading-relaxed text-sm md:text-lg border-l-2 border-[#6495ED] pl-6">
                Engineered capital solutions for the ambitious enterprise. 
                Governance meets rapid-deployment liquidity.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="group h-16 w-16 md:h-20 md:w-20 rounded-full bg-slate-950 flex items-center justify-center text-white hover:bg-[#6495ED] transition-all duration-300 shadow-xl"
              >
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Clean Structural Art */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 relative z-10">
              <div className="flex justify-between items-center mb-10">
                <div className="w-10 h-10 bg-slate-50 rounded flex items-center justify-center text-slate-400">
                  <TrendingUp size={20} />
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Efficiency Rating</div>
                  <div className="text-xl font-black text-slate-950">98.2%</div>
                </div>
              </div>
              <div className="space-y-4">
                {[70, 90, 65].map((w, i) => (
                  <div key={i} className="h-1.5 bg-slate-50 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${w}%` }}
                      transition={{ duration: 1.5, delay: 1 + (i * 0.1) }}
                      className={`h-full ${i === 1 ? 'bg-[#6495ED]' : 'bg-slate-300'}`} 
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CAPABILITIES (STRUCTURED) ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-6">
            
            {/* Lead Card */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-8 bg-slate-950 rounded-2xl p-8 md:p-14 text-white overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="bg-[#6495ED] w-12 h-12 rounded flex items-center justify-center mb-8">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Structured <br/>Corporate Debt</h3>
                <p className="text-slate-400 text-sm md:text-lg max-w-md mb-8 font-medium">
                  Custom-built funding instruments for enterprise expansion and large-scale asset acquisition.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["₹10Cr Cap", "Flexible Tenure"].map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded text-[9px] font-bold uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Side Card */}
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-4 bg-[#6495ED] rounded-2xl p-8 md:p-12 text-white flex flex-col justify-between"
            >
              <div className="bg-white/10 w-12 h-12 rounded flex items-center justify-center mb-8">
                <Landmark size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black mb-4 tracking-tight leading-tight">Asset Backed Liquidity</h3>
                <p className="text-blue-50 text-xs md:text-sm font-medium">Unlock capital from high-value real estate portfolios.</p>
              </div>
            </motion.div>

            {/* Bottom Cards */}
            <CapCard 
              icon={<Coins />} 
              title="Retail Speed" 
              desc="Digital-first sanctions for personal milestones." 
              span="lg:col-span-4" 
            />
            <CapCard 
              icon={<BarChart3 />} 
              title="Trade Finance" 
              desc="Global working capital for seamless export operations." 
              span="lg:col-span-4" 
            />
            <CapCard 
              icon={<BadgePercent />} 
              title="Wealth Credit" 
              desc="Liquidity lines backed by diverse financial instruments." 
              span="lg:col-span-4" 
            />
          </div>
        </div>
      </section>

      {/* ================= STRATEGIC PIPELINE ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950">The <span className="text-[#6495ED]">Pipeline</span></h2>
            <p className="text-slate-400 font-bold tracking-widest uppercase text-[10px]">Institutional Deployment Process</p>
          </div>

          {/* Strategic Diagram */}
          

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { t: "Audit", d: "Capital discovery phase.", i: <BarChart3 /> },
              { t: "Validate", d: "Underwriting & KYC.", i: <FileCheck /> },
              { t: "Engineer", d: "Debt structuring.", i: <Settings /> },
              { t: "Release", d: "Direct fund deployment.", i: <CheckCircle2 /> }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl border border-slate-200"
              >
                <div className="text-xs font-black text-[#6495ED] mb-4">STEP 0{i + 1}</div>
                <h4 className="text-lg font-black mb-2 tracking-tight">{step.t}</h4>
                <p className="text-slate-500 text-xs font-medium leading-relaxed">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 px-6 flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black tracking-tighter mb-10 text-slate-950"
        >
          Ready to <span className="text-[#6495ED]">Scale?</span>
        </motion.h2>
        <button
          onClick={() => navigate("/contact")}
          className="px-10 py-5 bg-slate-950 text-white rounded font-bold tracking-widest text-xs hover:bg-[#6495ED] transition-all shadow-xl"
        >
          INITIALIZE PROPOSAL
        </button>
      </section>
    </div>
  );
}

function CapCard({ icon, title, desc, span }) {
  return (
    <motion.div 
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`${span} bg-white border border-slate-200 p-8 rounded-xl hover:shadow-lg transition-all group`}
    >
      <div className="text-[#6495ED] mb-6">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <h4 className="text-lg font-black mb-2 tracking-tight">{title}</h4>
      <p className="text-slate-500 text-xs font-medium leading-relaxed">{desc}</p>
    </motion.div>
  );
}