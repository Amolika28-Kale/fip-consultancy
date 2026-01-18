"use client";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Rocket,
  HomeIcon,
  Landmark,
  LineChart,
  Globe,
  Zap,
  Fingerprint,
  ChevronRight,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

/* ================= MOTION CONFIG ================= */
const ease = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d, duration: 0.8, ease },
  }),
};

export default function Home() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#F8FAFC] text-[#0B1B3A] font-sans selection:bg-[#6495ED] selection:text-white">
      {/* Subtle Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#6495ED] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-white border border-slate-200 text-[#4B6FD6] text-[10px] tracking-[0.2em] font-bold uppercase rounded"
            >
              <ShieldCheck size={12} /> Institutional Partner
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[1.1] tracking-tighter mb-6 text-[#0B1B3A]"
            >
              FIP <br />
              <span className="text-[#6495ED]">CONSULTANCY</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-md text-sm md:text-lg text-[#5B6E99] leading-relaxed mb-8 border-l-2 border-[#6495ED] pl-6"
            >
              Architecting a financial ecosystem where institutional precision
              meets individual ambition. Structured solutions for modern capital.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-4 bg-[#0B1B3A] text-white text-xs md:text-sm font-bold uppercase tracking-widest flex items-center gap-3 transition-colors hover:bg-[#6495ED]"
              >
                Get Started
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => navigate("/about")}
                className="px-8 py-4 bg-transparent text-[#0B1B3A] text-xs md:text-sm font-bold uppercase tracking-widest border border-slate-200 transition-colors hover:bg-slate-50"
              >
                Methodology
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Visual - Clean & Structural */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/3] bg-slate-100 rounded-2xl relative overflow-hidden border border-slate-200 shadow-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                    <TrendingUp size={120} className="text-slate-200" />
                </div>
                {/* Information Card Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 bg-white p-6 rounded-xl shadow-xl border border-slate-100">
                    <div className="flex justify-between items-center mb-6">
                        <div className="text-[10px] font-bold uppercase tracking-widest text-[#6495ED]">Capital Flow</div>
                        <Zap size={14} className="text-[#6495ED]" />
                    </div>
                    <div className="space-y-3">
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: "70%" }} transition={{ duration: 1.5 }} className="h-full bg-[#0B1B3A]" />
                        </div>
                        <div className="h-1.5 w-4/5 bg-slate-100 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ duration: 1.5, delay: 0.2 }} className="h-full bg-[#6495ED]" />
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= SOLUTIONS GRID ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-[#0B1B3A]">
              Specializations
            </h2>
            <div className="h-1 w-12 bg-[#6495ED]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <BentoCard
              span="md:col-span-2"
              icon={<Rocket />}
              title="Project Finance"
              desc="Full-spectrum capital deployment for industrial expansions up to ₹10 Crores."
              theme="dark"
            />
            <BentoCard
              icon={<HomeIcon />}
              title="Retail Loans"
              desc="Streamlined personal funding for high-impact milestones."
              theme="light"
            />
            <BentoCard
              icon={<Globe />}
              title="Global Trade"
              desc="Export financing and institutional gold liquidity for markets."
              theme="light"
            />
            <BentoCard
              span="md:col-span-2"
              icon={<Landmark />}
              title="Asset Backed Solutions"
              desc="Leverage property portfolios for liquidity with customized repayment structures."
              theme="blue"
            />
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto bg-[#0B1B3A] rounded-2xl p-10 md:p-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight">
                Data Driven Results.
              </h3>
              <div className="grid grid-cols-2 gap-8">
                <Metric value="7Y" label="Max Tenure" />
                <Metric value="100+" label="Partners" />
              </div>
            </div>

            <div className="space-y-3">
              {[
                { label: "Real Estate Assets", value: "40%", icon: Landmark },
                { label: "Liquid Capital", value: "25%", icon: Zap },
                { label: "Equity Growth", value: "20%", icon: LineChart },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-5 bg-white/5 border border-white/10 rounded-lg"
                >
                  <div className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest">
                    <item.icon size={16} className="text-[#6495ED]" />
                    {item.label}
                  </div>
                  <span className="text-2xl font-black text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-24 text-center px-6">
        <div className="inline-block p-4 bg-slate-100 rounded-full mb-8">
            <Fingerprint size={32} className="text-[#0B1B3A]" />
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10 text-[#0B1B3A]">
          Ready for the Next Tier?
        </h2>
        <button
          onClick={() => navigate("/contact")}
          className="px-10 py-5 bg-[#0B1B3A] text-white text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-[#6495ED]"
        >
          Secure Consultation
        </button>
      </section>
    </div>
  );
}

/* ================= SUB COMPONENTS ================= */

function BentoCard({ icon, title, desc, span = "", theme = "light" }) {
  const themes = {
    light: "bg-slate-50 text-[#0B1B3A] border-slate-200",
    dark: "bg-[#0B1B3A] text-white border-transparent",
    blue: "bg-[#6495ED] text-white border-transparent",
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`${span} ${themes[theme]} p-8 rounded-xl border flex flex-col justify-between transition-all`}
    >
      <div>
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-8 ${theme === 'light' ? 'bg-[#6495ED]/10 text-[#6495ED]' : 'bg-white/10 text-white'}`}>
          {React.cloneElement(icon, { size: 22 })}
        </div>
        <h4 className="text-xl font-black mb-3 tracking-tight">{title}</h4>
        <p className="text-sm opacity-80 leading-relaxed font-medium">
          {desc}
        </p>
      </div>
      <div className="mt-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-60">
        Details <ChevronRight size={12} />
      </div>
    </motion.div>
  );
}

function Metric({ value, label }) {
  return (
    <div>
      <div className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tight">
        {value}
      </div>
      <div className="text-[#6495ED] font-bold text-[10px] uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}