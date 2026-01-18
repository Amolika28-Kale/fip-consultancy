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
  PhoneCall
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
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } }
};

export default function Investments() {
  const navigate = useNavigate();

  return (
    <div className="bg-paper text-slate-900 overflow-x-hidden pt-20 md:pt-28 font-sans ">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] md:min-h-[90vh] flex items-center bg-white border-b border-[#E3ECFF] overflow-hidden px-6">

        {/* Ambient background */}
        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[420px] h-[420px] md:w-[900px] md:h-[900px] bg-[#6495ED]/20 blur-[160px] rounded-full"
        />
        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.05, 1], opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-[-160px] right-[-120px] w-[360px] h-[360px] md:w-[820px] md:h-[820px] bg-[#EEF4FF] blur-[180px] rounded-full"
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full text-center">
          <motion.div variants={containerStagger} initial="hidden" animate="visible">

            {/* Label */}
            <motion.div variants={fadeUp} className="mb-10 flex justify-center">
              <span className="inline-flex items-center gap-3 px-7 py-3 border border-[#E3ECFF] text-[#6495ED] text-[10px] uppercase tracking-[0.45em] font-black bg-[#F2F6FF] rounded-full">
                <ShieldCheck size={14} />
                Strategic Alpha
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-black tracking-tight leading-[0.92] mb-10 text-[clamp(2.8rem,8vw,6.8rem)]"
            >
              Wealth <br />
              <span className="text-[#6495ED]">Architecture.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="max-w-3xl mx-auto text-[15px] sm:text-[17px] md:text-[19px] text-slate-500 leading-relaxed font-medium px-4"
            >
              Curated, high-yield opportunities engineered for{" "}
              <span className="text-[#3B6FD8] font-bold">
                capital preservation
              </span>{" "}
              and disciplined market participation.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUp} className="mt-16 flex justify-center">
              <button
                onClick={() => navigate("/contact")}
                className="group bg-slate-950 text-white px-12 py-6 rounded-2xl font-black tracking-[0.25em] text-xs sm:text-sm hover:bg-[#6495ED] transition-all shadow-2xl"
              >
                <span className="flex items-center gap-4">
                  START INVESTING
                  <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY INVEST ================= */}
      <section className="py-24 md:py-32 bg-white px-6">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8"
        >
          <WhyCard index="01" icon={<ShieldCheck />} title="Asset Backed" desc="Fully collateralized against registered A-grade properties." />
          <WhyCard index="02" icon={<TrendingUp />} title="Yield Focus" desc="Targeting disciplined annualized benchmarks." />
          <WhyCard index="03" icon={<GanttChartSquare />} title="Governance" desc="Quarterly audits & institutional controls." />
        </motion.div>
      </section>

      {/* ================= INVESTMENT GRID ================= */}
      <section className="py-24 md:py-32 bg-[#F5F8FF] px-6">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8"
        >
          <InvestmentCard icon={<Timer />} rate="20–25% PA" title="Short-Term Alpha" subtitle="Rapid capital velocity." data={{ tenure: "6–12 Months", asset: "Liquid Property", risk: "Moderate" }} />
          <InvestmentCard icon={<Building2 />} rate="30–40% PA" title="Land Appreciation" subtitle="Strategic growth zones." data={{ tenure: "3 Years", asset: "Direct Land", risk: "Strategic" }} />
          <InvestmentCard icon={<BarChart3 />} rate="10% PA" title="Passive Rental" subtitle="Predictable income." data={{ tenure: "Monthly", asset: "Commercial", risk: "Low" }} />
          <InvestmentCard icon={<PieChart />} rate="15–20% PA" title="Equity Backed" subtitle="Business participation." data={{ tenure: "Variable", asset: "Equity", risk: "Balanced" }} />
        </motion.div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-28 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-slate-950 rounded-[4rem] p-16 md:p-28 text-center shadow-2xl"
        >
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-black tracking-tight text-[clamp(2rem,6vw,4.5rem)] text-white mb-14"
          >
            Invest with <span className="text-[#6495ED]">Authority.</span>
          </motion.h2>

          <motion.button
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onClick={() => navigate("/contact")}
            className="bg-[#6495ED] hover:bg-white hover:text-slate-900 transition-all px-14 py-7 rounded-2xl font-black tracking-[0.25em] shadow-xl text-xs sm:text-sm flex items-center justify-center gap-4 mx-auto"
          >
            <PhoneCall size={18} />
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
      className="bg-white border border-[#E3ECFF] p-12 text-center rounded-[3rem] hover:shadow-2xl transition-all relative"
    >
      <div className="absolute top-6 right-6 text-[#6495ED1A] font-black text-6xl">
        {index}
      </div>
      <div className="mb-8 flex justify-center text-[#6495ED] p-5 bg-[#EEF4FF] w-fit mx-auto rounded-3xl">
        {icon}
      </div>
      <h3 className="font-black text-xl mb-4">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function InvestmentCard({ rate, title, subtitle, data, icon }) {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={fadeUp}
      className="bg-white border border-[#E3ECFF] p-10 rounded-[3rem] hover:shadow-2xl transition-all flex flex-col"
    >
      <div className="flex justify-between items-center mb-10">
        <div className="bg-[#6495ED] text-white px-5 py-2 text-[10px] font-black rounded-xl tracking-widest">
          {rate}
        </div>
        <div className="p-4 bg-[#EEF4FF] rounded-2xl text-[#6495ED]">
          {icon}
        </div>
      </div>

      <h3 className="font-black text-xl mb-2">{title}</h3>
      <p className="text-slate-500 text-sm mb-10">{subtitle}</p>

      <div className="grid grid-cols-3 gap-3 py-6 mb-10 border-y border-[#E3ECFF]">
        <Info label="Tenure" value={data.tenure} />
        <Info label="Asset" value={data.asset} />
        <Info label="Risk" value={data.risk} />
      </div>

      <button
        onClick={() => navigate("/contact")}
        className="mt-auto bg-[#EEF4FF] text-[#6495ED] py-5 rounded-2xl font-black tracking-widest text-xs hover:bg-[#6495ED] hover:text-white transition-all"
      >
        INVEST NOW <ArrowUpRight className="inline ml-2" />
      </button>
    </motion.div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-[9px] uppercase tracking-[0.25em] text-[#6495ED] font-black mb-1">
        {label}
      </p>
      <p className="text-sm font-black text-slate-800 truncate">
        {value}
      </p>
    </div>
  );
}
