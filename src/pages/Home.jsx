"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, TrendingUp, Building2, ShieldCheck, PieChart, 
  Rocket, BarChart3, Landmark, Briefcase, Newspaper, 
  Clock, HomeIcon, LineChart, LucideTrendingUp, CheckCircle2,
  ChevronRight
} from "lucide-react";

/* ================= THEME & FONTS ================= */
// Note: Ensure Google Fonts Poppins is imported in your layout or CSS file:
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;900&display=swap');

const fontStack = "'Poppins', sans-serif";

/* ================= UPGRADED ANIMATIONS ================= */
const perspectiveReveal = {
  hidden: { opacity: 0, y: 50, rotateX: -15, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

export default function Home() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % bgImages.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`bg-[#FAF9FF] text-slate-900 overflow-x-hidden selection:bg-purple-100 selection:text-purple-900`} style={{ fontFamily: fontStack }}>
      
      {/* ================= HERO SECTION ================= */}
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
            <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-white via-white/95 to-white/30" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center pt-24 pb-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <motion.div variants={perspectiveReveal} className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <span className="h-[2px] w-12 bg-purple-600 rounded-full" />
              <span className="text-[10px] uppercase tracking-[0.5em] font-black text-purple-600">
                Authorized Financial Group
              </span>
            </motion.div>

            <motion.h1 
              variants={perspectiveReveal} 
              className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-black mb-1 leading-[1] tracking-tighter"
            >
              FIP <span className="text-purple-600">CONSULTANCY</span>
            </motion.h1>

            <motion.p 
              variants={perspectiveReveal} 
              className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-500 leading-relaxed mb-12 border-l-0 lg:border-l-4 border-purple-600 lg:pl-8"
            >
              A comprehensive financial ecosystem designed to support individuals and businesses through structured solutions and managed services.
            </motion.p>

            <motion.div variants={perspectiveReveal} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <button
                onClick={() => navigate("/contact")}
                className="w-full sm:w-auto group bg-slate-950 text-white px-10 py-5 rounded-2xl font-bold text-sm tracking-widest flex items-center justify-center gap-4 hover:bg-purple-600 transition-all shadow-2xl shadow-purple-200"
              >
                CONSULT NOW
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
              <button
                onClick={() => navigate("/about")}
                className="w-full sm:w-auto bg-white border border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-bold text-sm tracking-widest hover:bg-slate-50 transition-all"
              >
                OUR MODEL
              </button>
            </motion.div>
          </motion.div>

          {/* STATS BENTO */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-6 mt-12 lg:mt-0"
          >
            {[
              { v: "₹10Cr+", l: "FACILITATED", i: <TrendingUp /> },
              { v: "40%", l: "TARGET ROI", i: <PieChart /> },
              { v: "7Yrs", l: "MAX TENURE", i: <ShieldCheck /> },
              { v: "100+", l: "PARTNERS", i: <Building2 /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-6 md:p-8 bg-white border border-purple-50 rounded-[2.5rem] shadow-xl shadow-purple-100/20 text-center lg:text-left"
              >
                <div className="text-purple-600 mb-6 flex justify-center lg:justify-start">{stat.i}</div>
                <div className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">{stat.v}</div>
                <div className="text-[9px] uppercase tracking-[0.3em] text-slate-400 font-black mt-2">{stat.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= BENTO SOLUTIONS ================= */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-2 gap-12 mb-20 items-end text-center lg:text-left"
          >
            <motion.div variants={perspectiveReveal}>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6">
                Modern <br /> <span className="text-purple-600 italic">Funding.</span>
              </h2>
              <p className="text-slate-500 text-lg md:text-xl">Precision capital delivery for every business stage.</p>
            </motion.div>
            <motion.div variants={perspectiveReveal} className="hidden lg:block h-px bg-slate-100 w-full mb-8" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Retail Loans", d: "Up to ₹10 Lakhs unsecured.", icon: <HomeIcon /> },
              { t: "Project Finance", d: "Up to ₹10 Crores scale.", icon: <Rocket /> },
              { t: "Asset Backed", d: "Property based liquidity.", icon: <Landmark /> },
              { t: "Global Trade", icon: <BarChart3 />, d: "Gold & Export finance." },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 bg-[#FAF9FF] rounded-[3rem] border border-transparent hover:border-purple-200 hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-purple-600 mb-8 shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-all">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-4">{item.t}</h3>
                <p className="text-slate-500 font-medium mb-8 leading-relaxed text-sm">{item.d}</p>
                <div className="flex items-center gap-2 text-purple-600 font-black text-xs uppercase tracking-widest cursor-pointer">
                  Learn More <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INVESTMENT TIERS ================= */}
      <section className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
        <motion.div 
          animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/50 via-transparent to-transparent" 
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Optimized Returns</h2>
            <div className="h-1.5 w-24 bg-purple-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { v: "25%", l: "Short-Term", i: Clock },
              { v: "40%", l: "Land Assets", i: Landmark },
              { v: "10%", l: "Rent Yield", i: HomeIcon },
              { v: "20%", l: "Equity Support", i: LineChart },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-12 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl group hover:bg-white transition-all duration-500"
              >
                <item.i className="w-8 h-8 text-purple-400 mb-8 group-hover:text-purple-600 transition-colors" />
                <div className="text-5xl font-black text-white group-hover:text-slate-950 transition-colors mb-2">{item.v}</div>
                <div className="text-[10px] uppercase tracking-[0.4em] font-black text-purple-300 group-hover:text-purple-600 transition-colors">{item.l}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROPERTY ADVISORY ================= */}
      <section className="py-24 md:py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-5xl md:text-8xl font-black text-slate-950 tracking-tighter mb-12 leading-[0.9]">
              Asset <br /> <span className="text-purple-600">Advisory.</span>
            </h2>
            <div className="space-y-4">
              {[
                "Strategic Sale & Purchase Management",
                "Portfolio Yield Optimization",
                "Guaranteed Exit Frameworks",
                "Regulatory Compliance Audit"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-5 p-6 rounded-3xl bg-[#FAF9FF] border border-transparent hover:border-purple-200 transition-all">
                  <CheckCircle2 className="text-purple-600 shrink-0" />
                  <span className="text-base md:text-lg font-bold text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 0.98 }}
            className="bg-purple-600 p-10 md:p-20 rounded-[4rem] shadow-3xl shadow-purple-200 relative overflow-hidden"
          >
            <div className="absolute -top-10 -right-10 opacity-10">
              <ShieldCheck size={400} className="text-white rotate-12" />
            </div>
            <h3 className="text-white text-3xl font-black mb-12 flex items-center gap-4">
              <ShieldCheck size={32} /> The FIP Edge
            </h3>
            <div className="grid gap-10">
              {[
                { t: "Asset Backed", d: "Secured ROI profiles." },
                { t: "Expert Managed", d: "Institutional governance." },
                { t: "Transparent", d: "Real-time compliance." }
              ].map((val, i) => (
                <div key={i} className="border-l-2 border-white/30 pl-8">
                  <div className="text-white text-xl md:text-2xl font-black mb-1">{val.t}</div>
                  <div className="text-purple-100 text-sm font-medium">{val.d}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 md:py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-6xl mx-auto bg-slate-950 rounded-[3.5rem] p-12 md:p-28 text-center relative overflow-hidden shadow-3xl shadow-purple-900/30"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-transparent" />
          <div className="relative z-10">
            <LucideTrendingUp className="w-16 h-16 text-purple-400 mx-auto mb-10" />
            <h2 className="text-4xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-tight">
              Wealth Creation <br /> <span className="text-purple-400">Starts Here.</span>
            </h2>
            <button
              onClick={() => navigate("/contact")}
              className="group bg-white text-slate-950 px-16 py-6 rounded-2xl font-black text-lg hover:bg-purple-600 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-4 mx-auto"
            >
              START YOUR JOURNEY
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

const bgImages = [
  "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
];