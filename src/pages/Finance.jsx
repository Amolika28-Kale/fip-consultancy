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

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function Finance() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAF9FF] text-slate-900 overflow-x-hidden pt-20">

      {/* ================= HERO: MODERN FINANCE ================= */}
      <section className="relative min-h-[80vh] flex items-center bg-white border-b border-purple-100 overflow-hidden px-4 md:px-0">
        {/* Animated ambient purple blurs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-purple-200/40 blur-[80px] md:blur-[120px]" 
        />
        <div className="absolute bottom-[-100px] right-[-50px] w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-indigo-100/50 blur-[100px] md:blur-[140px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6 md:mb-10">
              <div className="h-1 w-12 bg-purple-600 rounded-full" />
              <span className="uppercase text-[10px] tracking-[0.4em] font-black text-purple-600">
                Institutional Lending
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-7xl md:text-9xl font-black leading-[1] text-slate-900 tracking-tighter mb-6 md:mb-8"
            >
              Structured <br />
              <span className="text-purple-600 italic">Capital.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-2xl text-base sm:text-xl md:text-2xl text-slate-500 leading-relaxed font-medium mb-10 md:mb-12"
            >
              Bespoke funding mechanisms designed for growth, secured by tangible assets and governed by institutional-grade compliance.
            </motion.p>
            
            <motion.div variants={fadeUp}>
              <button 
                onClick={() => navigate("/contact")}
                className="group w-full sm:w-auto flex items-center justify-center gap-4 bg-slate-900 text-white px-8 md:px-12 py-5 rounded-2xl font-black tracking-widest hover:bg-purple-600 transition-all shadow-2xl shadow-purple-200"
              >
                REQUEST PROPOSAL <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= CAPABILITIES: BENTO GRID ================= */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-20 gap-6"
          >
            <div>
              <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter">
                Capabilities
              </h2>
              <p className="text-slate-500 text-lg md:text-xl mt-4">Multi-sector liquidity solutions.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-purple-50 mx-10 mb-6" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Personal & Secured Loans",
                icon: <Coins size={32} />,
                desc: "Flexible financing with fast-track digital approval workflows.",
                items: ["Up to ₹10 Lakhs", "7 Year Tenure", "Digital Sanction"],
                accent: "bg-purple-50"
              },
              {
                title: "Business & Project Finance",
                icon: <Briefcase size={32} />,
                desc: "Strategic growth capital for infrastructure and expansion.",
                items: ["₹10L to ₹10Cr", "Institutional Docs", "Equity Aligned"],
                accent: "bg-slate-900 text-white"
              },
              {
                title: "Land & Property Finance",
                icon: <Landmark size={32} />,
                desc: "Leveraging immovable assets for immediate capital needs.",
                items: ["Residential: 60%", "Commercial: 70%", "6–12 Month Term"],
                accent: "bg-[#FAF9FF]"
              },
              {
                title: "Trade & Asset Finance",
                icon: <BarChart3 size={32} />,
                desc: "Working capital optimization for global trade operations.",
                items: ["Gold Funding", "Export Finance", "Invoice Structuring"],
                accent: "bg-purple-600 text-white"
              },
            ].map((block, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className={`p-8 md:p-12 rounded-[2.5rem] border border-purple-50 flex flex-col justify-between transition-all shadow-sm hover:shadow-2xl hover:shadow-purple-100 ${block.accent}`}
              >
                <div>
                  <div className={`w-14 h-14 flex items-center justify-center rounded-2xl mb-8 ${block.accent.includes('bg-white') || block.accent.includes('bg-[#') ? 'bg-white shadow-sm text-purple-600' : 'bg-white/10 text-white'}`}>
                    {block.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black mb-4 tracking-tight">
                    {block.title}
                  </h3>
                  <p className={`mb-8 text-base md:text-lg leading-relaxed ${block.accent.includes('text-white') ? 'text-purple-100' : 'text-slate-500'}`}>
                    {block.desc}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {block.items.map((item, idx) => (
                    <div key={idx} className={`flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-lg ${block.accent.includes('text-white') ? 'bg-white/10 text-white' : 'bg-purple-50/50 text-purple-700'}`}>
                      <CheckCircle2 size={14} />
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXECUTION: TIMELINE MODEL ================= */}
      <section className="py-20 md:py-32 bg-[#F5F3FF] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:mb-24 text-center">
            <motion.div 
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
            >
              <Settings className="text-purple-600" size={32} />
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter mb-4">
              Execution Model
            </h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">The Standard 4-Step Deployment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 relative">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-purple-200 -z-10" />

            {[
              { t: "Requirement", d: "Cash flow & funding audit.", i: <BarChart3 /> },
              { t: "Verification", d: "Compliance & KYC audit.", i: <FileCheck /> },
              { t: "Structuring", d: "Financial engineering.", i: <BadgePercent /> },
              { t: "Deployment", d: "Fast-track capital release.", i: <Coins /> },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white p-8 md:p-10 border border-purple-100 md:border-transparent md:hover:bg-purple-600 transition-all rounded-[2rem] md:rounded-none md:first:rounded-l-[3rem] md:last:rounded-r-[3rem] text-center"
              >
                <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white transition-all shadow-sm">
                  {step.i}
                </div>
                <h4 className="text-lg font-black mb-2 group-hover:text-white transition-colors">
                  {step.t}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-purple-100 transition-colors">
                  {step.d}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 md:py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] p-10 md:p-24 text-center relative overflow-hidden shadow-3xl shadow-purple-200/50"
        >
          {/* Animated Purple Gradient Light */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent skew-x-12"
          />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-7xl font-black text-white mb-10 md:mb-12 leading-tight tracking-tighter">
              Capital structured <br /> 
              with <span className="text-purple-400">absolute certainty.</span>
            </h2>

            <button
              onClick={() => navigate("/contact")}
              className="bg-purple-600 text-white px-10 md:px-16 py-5 md:py-6 rounded-2xl font-black tracking-widest hover:bg-white hover:text-slate-900 transition-all text-sm md:text-base shadow-2xl"
            >
              SPEAK WITH AN ADVISOR 📞
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}