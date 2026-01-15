"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  TrendingUp, ShieldCheck, GanttChartSquare, ArrowUpRight, 
  BarChart3, Building2, PieChart, Timer, ChevronRight, PhoneCall 
} from "lucide-react";

/* ================= ANIMATIONS ================= */
const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

const rotateIn = {
  hidden: { opacity: 0, rotate: -10 },
  visible: { opacity: 1, rotate: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Investments() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F5F8FF] text-slate-900 overflow-x-hidden pt-20 selection:bg-[#6495ED] selection:text-white">

      {/* ================= HERO ================= */}
 <section className="relative min-h-[75vh] md:min-h-[90vh] flex items-center bg-white border-b border-[#E3ECFF] overflow-hidden px-6">

  {/* ================= AMBIENT BACKGROUND ================= */}
  <motion.div
    aria-hidden
    animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
    transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
    className="absolute -top-32 -left-32 w-[420px] h-[420px] md:w-[900px] md:h-[900px] bg-[#6495ED]/20 blur-[160px] rounded-full"
  />

  <motion.div
    aria-hidden
    animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
    transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 4 }}
    className="absolute bottom-[-160px] right-[-120px] w-[360px] h-[360px] md:w-[820px] md:h-[820px] bg-[#EEF4FF] blur-[180px] rounded-full"
  />

  {/* ================= CONTENT ================= */}
  <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
    <motion.div
      variants={containerStagger}
      initial="hidden"
      animate="visible"
    >
      {/* Label */}
      <motion.div
        variants={fadeUp}
        className="mb-10 flex justify-center"
      >
        <span className="inline-flex items-center gap-3 px-7 py-3 border border-[#E3ECFF] text-[#6495ED] text-[10px] uppercase tracking-[0.45em] font-black bg-[#F2F6FF] rounded-full shadow-sm">
          <ShieldCheck size={14} />
          Strategic Alpha
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        variants={fadeUp}
        className="text-[3.5rem] sm:text-[5.5rem] md:text-[8rem] xl:text-[9.5rem] font-black tracking-tight leading-[0.92] mb-10 text-slate-900"
      >
        Wealth
        <br />
        <span className="text-[#6495ED]">Architecture.</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        variants={fadeUp}
        className="max-w-3xl mx-auto text-base sm:text-xl md:text-2xl text-slate-500 leading-relaxed font-medium px-4"
      >
        Curated, high-yield opportunities engineered for{" "}
        <span className="text-[#3B6FD8] font-bold">
          capital preservation
        </span>{" "}
        and disciplined market participation.
      </motion.p>

      {/* CTA */}
      <motion.div
        variants={fadeUp}
        className="mt-16 flex justify-center"
      >
        <button
          onClick={() => navigate("/contact")}
          className="group relative overflow-hidden bg-slate-950 text-white px-14 py-6 rounded-2xl font-black tracking-[0.25em] text-sm transition-all hover:bg-[#6495ED] shadow-2xl shadow-[#6495ED33]"
        >
          <span className="relative z-10 flex items-center gap-4">
            START INVESTING
            <ArrowUpRight
              size={20}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </span>

          {/* CTA glow */}
          <span className="absolute inset-0 bg-gradient-to-r from-[#6495ED]/0 via-[#6495ED]/30 to-[#6495ED]/0 opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </motion.div>
    </motion.div>
  </div>
</section>


      {/* ================= WHY INVEST ================= */}
      <section className="py-20 md:py-32 bg-white px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
          className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8"
        >
          <WhyCard index="01" icon={<ShieldCheck size={32} />} title="Asset Backed" desc="Fully collateralized against registered A-grade properties." />
          <WhyCard index="02" icon={<TrendingUp size={32} />} title="Yield Focus" desc="Targeting 10%–40% annualized benchmarks." />
          <WhyCard index="03" icon={<GanttChartSquare size={32} />} title="Governance" desc="Quarterly audits & institutional controls." />
        </motion.div>
      </section>

      {/* ================= AUTO SCROLL ================= */}
      <section className="py-16 bg-[#EEF4FF] border-y border-[#E3ECFF] overflow-hidden">
        <motion.h3
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center text-[#6495ED] uppercase tracking-[0.4em] text-[10px] font-black mb-10"
        >
          Institutional Exposure
        </motion.h3>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInLeft}
          className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] cursor-grab"
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-6 px-3">
              {[
                "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1200",
                "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
              ].map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="w-[320px] h-[220px] md:w-[420px] md:h-[260px] shrink-0"
                >
                  <img
                    src={img}
                    className="h-full w-full object-cover rounded-[2rem] shadow-xl"
                    alt="Asset"
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* ================= INVESTMENT GRID ================= */}
      <section className="py-20 md:py-32 bg-[#F5F8FF] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8"
        >
          <InvestmentCard icon={<Timer size={24} />} rate="20–25% PA" title="Short-Term Alpha" subtitle="Rapid capital velocity." data={{ tenure: "6–12 Mths", asset: "Liquid Property", risk: "Moderate" }} />
          <InvestmentCard icon={<Building2 size={24} />} rate="30–40% PA" title="Land Appreciation" subtitle="Strategic growth zones." data={{ tenure: "3 Years", asset: "Direct Land", risk: "Strategic" }} />
          <InvestmentCard icon={<BarChart3 size={24} />} rate="10% PA" title="Passive Rental" subtitle="Predictable income." data={{ tenure: "Monthly", asset: "Commercial", risk: "Low" }} />
          <InvestmentCard icon={<PieChart size={24} />} rate="15–20% PA" title="Equity Backed" subtitle="Business participation." data={{ tenure: "Variable", asset: "Equity", risk: "Balanced" }} />
        </motion.div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto bg-slate-950 rounded-[4rem] p-16 md:p-28 text-center shadow-3xl shadow-[#6495ED55]"
        >
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl md:text-8xl font-black text-white mb-12 tracking-tighter"
          >
            Invest with <span className="text-[#6495ED]">Authority.</span>
          </motion.h2>

          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#0f172a" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="group bg-[#6495ED] hover:bg-white hover:text-slate-900 transition-all px-14 py-7 rounded-2xl font-black tracking-widest shadow-2xl flex items-center justify-center gap-4 mx-auto"
          >
            <PhoneCall size={20} />
            TALK TO AN ADVISOR
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */
function WhyCard({ index, title, desc, icon }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, scale: 1.02, rotateY: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white border border-[#E3ECFF] p-12 text-center rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-[#6495ED33] transition-all relative overflow-hidden"
    >
      <motion.div 
        className="absolute -top-4 -right-4 text-[#6495ED1A] font-black text-9xl"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        {index}
      </motion.div>
      <motion.div 
        className="mb-8 flex justify-center text-[#6495ED] p-5 bg-[#EEF4FF] w-fit mx-auto rounded-3xl"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-2xl font-black mb-4">{title}</h3>
      <p className="text-slate-500 font-medium">{desc}</p>
    </motion.div>
  );
}

function InvestmentCard({ rate, title, subtitle, data, icon }) {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white border border-[#E3ECFF] p-10 rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-[#6495ED33] transition-all flex flex-col"
    >
      <div className="flex justify-between items-center mb-10">
        <motion.div 
          className="bg-[#6495ED] text-white px-5 py-2 text-[10px] font-black rounded-xl tracking-widest"
          whileHover={{ scale: 1.1 }}
        >
          {rate}
        </motion.div>
        <motion.div 
          className="p-4 bg-[#EEF4FF] rounded-2xl text-[#6495ED]"
          whileHover={{ rotate: 10 }}
        >
          {icon}
        </motion.div>
      </div>

      <h3 className="text-3xl font-black mb-3">{title}</h3>
      <p className="text-slate-500 mb-10">{subtitle}</p>

      <motion.div 
        className="grid grid-cols-3 gap-2 py-6 mb-10 border-y border-[#E3ECFF]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerStagger}
      >
        <Info label="Tenure" value={data.tenure} />
        <Info label="Asset" value={data.asset} />
        <Info label="Risk" value={data.risk} />
      </motion.div>

      <motion.button
        onClick={() => navigate("/contact")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-auto bg-[#EEF4FF] text-[#6495ED] py-5 rounded-2xl font-black tracking-widest hover:bg-[#6495ED] hover:text-white transition-all"
      >
        INVEST NOW <ArrowUpRight className="inline ml-2" />
      </motion.button>
    </motion.div>
  );
}

function Info({ label, value }) {
  return (
    <motion.div
      variants={scaleIn}
      whileHover={{ scale: 1.05 }}
    >
      <p className="text-[9px] uppercase tracking-widest text-[#6495ED] font-black mb-1">
        {label}
      </p>
      <p className="text-sm font-black text-slate-800 truncate">
        {value}
      </p>
    </motion.div>
  );
}