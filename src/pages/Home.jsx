"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, TrendingUp, Building2, ShieldCheck, PieChart, 
  Rocket, BarChart3, Landmark, Briefcase, Newspaper, 
  Clock, HomeIcon, LineChart, LucideTrendingUp, CheckCircle2 
} from "lucide-react";

/* ================= UPGRADED ANIMATIONS ================= */
const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemReveal = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const cardHover = {
  initial: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -10, transition: { duration: 0.4, ease: "easeOut" } }
};

export default function Home() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % bgImages.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#FAF9FF] text-slate-900 overflow-x-hidden selection:bg-purple-100 selection:text-purple-900">
      
      {/* ================= HERO: INSTITUTIONAL ENTRANCE ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${bgImages[index]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/10" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center pt-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerStagger}
            className="lg:col-span-7"
          >
            <motion.div variants={itemReveal} className="flex items-center gap-4 mb-8">
              <span className="h-[1px] w-12 bg-purple-600" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-purple-600">
                Authorized Financial Group
              </span>
            </motion.div>

            <motion.h1 variants={itemReveal} className="text-6xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter">
              FIP <span className="text-purple-600">CONSULTANCY</span>
            </motion.h1>

            <motion.div variants={itemReveal} className="flex items-center gap-6 mb-10 overflow-hidden">
                <div className="flex items-center gap-3 text-lg font-bold text-slate-400">
                    <span>FINANCE</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-200" />
                    <span>INVESTMENT</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-200" />
                    <span>PROPERTY</span>
                </div>
            </motion.div>

            <motion.p variants={itemReveal} className="max-w-xl text-xl text-slate-500 leading-relaxed mb-12 border-l-4 border-purple-600 pl-8">
              Navigating complex capital markets through 
              <span className="text-slate-900 font-bold"> institutional discipline </span> 
              and asset-backed security.
            </motion.p>

            <motion.div variants={itemReveal} className="flex flex-wrap gap-6">
              <button
                onClick={() => navigate("/contact")}
                className="group bg-slate-900 text-white px-10 py-5 rounded-2xl font-black text-sm tracking-widest flex items-center gap-4 hover:bg-purple-600 transition-all shadow-2xl shadow-slate-200"
              >
                CONSULT NOW
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-5 grid grid-cols-2 gap-6"
          >
            {[
              { v: "₹10Cr+", l: "FACILITATED", i: <TrendingUp /> },
              { v: "40%", l: "TARGET ROI", i: <PieChart /> },
              { v: "7Yrs", l: "MAX TENURE", i: <ShieldCheck /> },
              { v: "100+", l: "PARTNERS", i: <Building2 /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover="hover"
                variants={cardHover}
                className="p-8 bg-white border border-purple-50 rounded-[2.5rem] shadow-xl shadow-purple-100/20"
              >
                <div className="text-purple-600 mb-6">{stat.i}</div>
                <div className="text-4xl font-black text-slate-900 tracking-tighter">{stat.v}</div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-slate-400 font-black mt-2">{stat.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION: BENTO FINANCE SOLUTIONS ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={containerStagger}
            className="grid lg:grid-cols-2 gap-20 mb-20 items-end"
          >
            <motion.div variants={itemReveal}>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
                Modern <br /> <span className="text-purple-600 italic">Funding.</span>
              </h2>
              <p className="text-slate-500 text-xl">Execution-ready capital for individuals and enterprises.</p>
            </motion.div>
            <motion.div variants={itemReveal} className="hidden lg:block h-px bg-slate-100 w-full mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Retail Loans", d: "Up to ₹10 Lakhs unsecured.", icon: <HomeIcon /> },
              { t: "Project Finance", d: "Up to ₹10 Crores scale.", icon: <Rocket /> },
              { t: "Asset Backed", d: "Property based liquidity.", icon: <Landmark /> },
              { t: "Global Trade", icon: <BarChart3 />, d: "Gold & Export finance." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemReveal}
                whileHover="hover"
                className="group p-10 bg-[#FAF9FF] rounded-[3rem] border border-transparent hover:border-purple-200 hover:bg-white hover:shadow-2xl transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-purple-600 mb-8 shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4">{item.t}</h3>
                <p className="text-slate-500 font-medium mb-8 leading-relaxed">{item.d}</p>
                <div className="flex items-center gap-2 text-purple-600 font-bold text-xs uppercase tracking-widest">
                  Explore <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION: WEALTH TIERS (STAIRCASE ANIMATION) ================= */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Optimized Returns</h2>
            <div className="h-1 w-24 bg-purple-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { v: "25%", l: "Short-Term", i: Clock },
              { v: "40%", l: "Land Assets", i: Landmark },
              { v: "10%", l: "Rent Yield", i: HomeIcon },
              { v: "20%", l: "Equity Support", i: LineChart },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative p-12 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-xl group hover:bg-white transition-all"
              >
                <item.i className="w-8 h-8 text-purple-400 mb-8 group-hover:text-purple-600 transition-colors" />
                <div className="text-5xl font-black text-white group-hover:text-slate-900 transition-colors mb-2">{item.v}</div>
                <div className="text-[10px] uppercase tracking-widest font-black text-purple-300 group-hover:text-purple-600 transition-colors">
                  {item.l}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION: PROPERTY ADVISORY SPLIT ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-10 leading-[0.9]">
              Asset <br /> <span className="text-purple-600">Advisory.</span>
            </h2>
            <div className="space-y-6">
              {[
                "Strategic Sale & Purchase Management",
                "Portfolio Yield Optimization",
                "Guaranteed Exit Frameworks",
                "Full Legal Documentation Audit"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-5 p-6 rounded-[2rem] bg-[#FAF9FF] border border-transparent hover:border-purple-200 transition-all">
                  <CheckCircle2 className="text-purple-600" />
                  <span className="text-lg font-bold text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ rotate: -1 }}
            className="bg-purple-600 p-16 rounded-[4rem] shadow-3xl shadow-purple-200 relative overflow-hidden"
          >
            <ShieldCheck className="absolute -top-20 -right-20 text-white/5 w-96 h-96 rotate-12" />
            <h3 className="text-white text-3xl font-black mb-12 flex items-center gap-4">
              <ShieldCheck /> The FIP Edge
            </h3>
            <div className="grid gap-10">
              {[
                { t: "Asset Backed", d: "Secured ROI profiles." },
                { t: "Expert Managed", d: "Institutional governance." },
                { t: "Transparent", d: "Real-time compliance." }
              ].map((val, i) => (
                <div key={i} className="border-l-2 border-white/20 pl-8">
                  <div className="text-white text-xl font-bold mb-1">{val.t}</div>
                  <div className="text-purple-100 text-sm font-medium">{val.d}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION: FINAL CTA (IMPACT) ================= */}
      <section className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-6xl mx-auto bg-slate-900 rounded-[4rem] p-20 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-transparent" />
          <div className="relative z-10">
            <LucideTrendingUp className="w-16 h-16 text-purple-400 mx-auto mb-10" />
            <h2 className="text-5xl md:text-7xl font-black text-white mb-12 leading-tight tracking-tighter">
              Legacy Wealth <br /> <span className="text-purple-400">Starts Here.</span>
            </h2>
            <button
              onClick={() => navigate("/contact")}
              className="bg-white text-slate-900 px-16 py-6 rounded-2xl font-black text-lg hover:bg-purple-500 hover:text-white transition-all shadow-2xl"
            >
              START YOUR JOURNEY
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

const ChevronRight = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);

const bgImages = [
  "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
];