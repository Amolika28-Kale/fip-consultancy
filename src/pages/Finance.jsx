"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  ShieldCheck, Briefcase, Landmark, BadgePercent, 
  ArrowRight, FileCheck, Coins, BarChart3,
  ChevronRight, Settings, CheckCircle2
} from "lucide-react";

/* ================= UPGRADED ANIMATIONS ================= */
const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const perspectiveReveal = {
  hidden: { opacity: 0, y: 40, rotateX: -15, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Finance() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAF9FF] text-slate-900 overflow-x-hidden pt-16 md:pt-24 selection:bg-purple-100 selection:text-purple-900">

      {/* ================= HERO: INSTITUTIONAL MODERNISM ================= */}
      <section className="relative min-h-[80vh] flex items-center bg-white border-b border-purple-100 overflow-hidden px-6">
        {/* Advanced Ambient Glows */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[300px] h-[300px] md:w-[700px] md:h-[700px] bg-purple-200/40 blur-[100px] rounded-full" 
        />
        <div className="absolute bottom-[-100px] right-[-50px] w-[250px] h-[250px] md:w-[600px] md:h-[600px] bg-indigo-50/50 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={perspectiveReveal} className="flex items-center gap-3 mb-8">
              <div className="h-1 w-12 bg-purple-600 rounded-full" />
              <span className="uppercase text-[10px] tracking-[0.4em] font-black text-purple-600">
                Institutional Liquidity
              </span>
            </motion.div>

            <motion.h1
              variants={perspectiveReveal}
              className="text-5xl sm:text-8xl md:text-9xl font-black leading-[1] text-slate-900 tracking-tighter mb-8"
            >
              Structured <br />
              <span className="text-purple-600 italic">Capital.</span>
            </motion.h1>

            <motion.p
              variants={perspectiveReveal}
              className="max-w-2xl text-lg sm:text-xl md:text-2xl text-slate-500 leading-relaxed font-medium mb-12"
            >
              Institutional-grade funding mechanisms designed for sustainable scaling, 
              governed by strict compliance and asset-backed security.
            </motion.p>
            
            <motion.div variants={perspectiveReveal}>
              <button 
                onClick={() => navigate("/contact")}
                className="group w-full sm:w-auto flex items-center justify-center gap-4 bg-slate-950 text-white px-10 py-5 rounded-2xl font-black tracking-widest hover:bg-purple-600 transition-all shadow-2xl shadow-purple-200/20"
              >
                REQUEST PROPOSAL <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= CAPABILITIES: INTERACTIVE BENTO GRID ================= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6"
          >
            <div>
              <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter">
                Capabilities
              </h2>
              <p className="text-slate-500 text-lg md:text-xl mt-4">Precision-engineered liquidity solutions.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-purple-50 mx-10 mb-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Personal & Secured Loans",
                icon: <Coins size={32} />,
                desc: "High-velocity financing with fast-track digital approval workflows for immediate liquidity.",
                items: ["Up to ₹10 Lakhs", "7 Year Tenure", "Fast Sanction"],
                theme: "light"
              },
              {
                title: "Business & Project Finance",
                icon: <Briefcase size={32} />,
                desc: "Strategic growth capital for infrastructure, scaling, and institutional corporate expansion.",
                items: ["₹10L to ₹10Cr", "Equity Aligned", "Market Ready"],
                theme: "dark"
              },
              {
                title: "Land & Property Finance",
                icon: <Landmark size={32} />,
                desc: "Unlocking capital from immovable assets via structured property-backed lending models.",
                items: ["Resi: 60% LTV", "Comm: 70% LTV", "12 Mth Term"],
                theme: "tint"
              },
              {
                title: "Trade & Asset Finance",
                icon: <BarChart3 size={32} />,
                desc: "Global working capital optimization for trade, export, and commodity-based operations.",
                items: ["Gold Funding", "Export Finance", "Invoice Structuring"],
                theme: "vibrant"
              },
            ].map((block, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={perspectiveReveal}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`p-10 md:p-14 rounded-[3.5rem] border border-purple-50 flex flex-col justify-between transition-all shadow-sm hover:shadow-3xl ${
                  block.theme === "dark" ? "bg-slate-900 text-white border-slate-800" :
                  block.theme === "tint" ? "bg-[#FAF9FF]" :
                  block.theme === "vibrant" ? "bg-purple-600 text-white" : "bg-white"
                }`}
              >
                <div>
                  <div className={`w-16 h-16 flex items-center justify-center rounded-2xl mb-10 transition-transform group-hover:scale-110 ${
                    block.theme === "dark" || block.theme === "vibrant" ? "bg-white/10 text-white" : "bg-purple-50 text-purple-600 shadow-sm"
                  }`}>
                    {block.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter">
                    {block.title}
                  </h3>
                  <p className={`mb-12 text-lg leading-relaxed ${block.theme === "dark" || block.theme === "vibrant" ? "text-purple-100" : "text-slate-500"}`}>
                    {block.desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {block.items.map((item, idx) => (
                    <div key={idx} className={`flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest px-4 py-3 rounded-xl ${
                      block.theme === "dark" || block.theme === "vibrant" ? "bg-white/10 text-white" : "bg-purple-50 text-purple-600"
                    }`}>
                      <CheckCircle2 size={12} />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXECUTION MODEL: STAGGERED TIMELINE ================= */}
      <section className="py-24 md:py-32 bg-[#F5F3FF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 md:mb-32 text-center max-w-3xl mx-auto">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
            >
              <Settings className="text-purple-600" size={32} />
            </motion.div>
            <h2 className="text-4xl md:text-8xl font-black text-slate-900 tracking-tighter mb-6">
              Execution Framework
            </h2>
            <p className="text-slate-500 font-black uppercase tracking-[0.3em] text-xs">Standard Operating Procedure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              { t: "Requirement", d: "Deep dive into objectives & cash flow.", i: <BarChart3 /> },
              { t: "Verification", d: "Asset verification & KYC compliance.", i: <FileCheck /> },
              { t: "Structuring", d: "Risk-aligned financial engineering.", i: <BadgePercent /> },
              { t: "Deployment", d: "Fast-track capital release & release.", i: <Coins /> },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white p-10 md:p-12 rounded-[3rem] border border-purple-100 hover:border-purple-600 transition-all hover:shadow-2xl hover:shadow-purple-200/50"
              >
                <div className="text-5xl font-black text-purple-600/10 mb-8 transition-colors group-hover:text-purple-600/20">0{i + 1}</div>
                <div className="mb-8 p-5 bg-purple-50 rounded-2xl w-fit text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-sm">
                  {step.i}
                </div>
                <h4 className="text-2xl font-black mb-4 text-slate-900">
                  {step.t}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {step.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA: INSTITUTIONAL FINALE ================= */}
      <section className="py-24 md:py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-6xl mx-auto bg-slate-950 rounded-[4rem] p-12 md:p-28 text-center relative overflow-hidden shadow-3xl shadow-purple-900/40"
        >
          {/* Animated Purple Gradient Light */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent skew-x-12"
          />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-8xl font-black text-white mb-12 leading-[1] tracking-tighter">
              Capital structured <br /> 
              with <span className="text-purple-400">absolute certainty.</span>
            </h2>

            <button
              onClick={() => navigate("/contact")}
              className="group bg-purple-600 text-white px-12 py-6 rounded-2xl font-black tracking-widest hover:bg-white hover:text-slate-900 transition-all text-base md:text-lg shadow-2xl flex items-center justify-center gap-4 mx-auto"
            >
              SPEAK WITH AN ADVISOR 📞
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}