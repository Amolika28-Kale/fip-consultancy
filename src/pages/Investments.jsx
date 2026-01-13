"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { 
  TrendingUp, ShieldCheck, GanttChartSquare, ArrowUpRight, 
  BarChart3, Building2, PieChart, Timer, ChevronRight, PhoneCall 
} from "lucide-react";

/* ================= UPGRADED ANIMATIONS ================= */
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

export default function Investments() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#FAF9FF] text-slate-900 overflow-x-hidden pt-20">

      {/* ================= HERO: STRATEGIC GROWTH ================= */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center bg-white border-b border-purple-100 overflow-hidden px-6">
        {/* Dynamic Background Blurs */}
        <motion.div 
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[300px] h-[300px] md:w-[700px] md:h-[700px] bg-purple-100/40 blur-[100px] rounded-full" 
        />
        <div className="absolute bottom-[-100px] right-[-50px] w-[250px] h-[250px] md:w-[600px] md:h-[600px] bg-indigo-50/50 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
          <motion.div variants={containerStagger} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} className="mb-8 flex justify-center">
              <span className="flex items-center gap-2 px-5 py-2.5 border border-purple-100 text-purple-600 text-[10px] uppercase tracking-[0.4em] font-black bg-purple-50/50 rounded-full shadow-sm">
                <ShieldCheck size={14} className="animate-pulse" /> Strategic Alpha
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-8xl md:text-[10rem] font-black tracking-tighter text-slate-900 leading-[0.9] mb-8"
            >
              Wealth <br />
              <span className="text-purple-600 italic">Architecture.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-3xl mx-auto text-base sm:text-xl md:text-2xl text-slate-500 leading-relaxed font-medium px-4"
            >
              Curated, high-yield opportunities designed for <span className="text-purple-700 font-bold">capital preservation</span> and exponential market participation.
            </motion.p>
            
            <motion.div variants={fadeUp} className="mt-12">
               <button 
                onClick={() => navigate("/contact")} 
                className="group w-full sm:w-auto flex items-center justify-center gap-4 bg-slate-900 text-white px-10 py-5 rounded-2xl font-black tracking-widest hover:bg-purple-600 transition-all shadow-2xl shadow-purple-200"
               >
                 START INVESTING <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= BENTO WHY INVEST ================= */}
      <section className="py-20 md:py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerStagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            <WhyCard
              icon={<ShieldCheck size={32} />}
              index="01"
              title="Asset Backed"
              desc="Full collateralization against registered A-grade property assets."
            />
            <WhyCard
              icon={<TrendingUp size={32} />}
              index="02"
              title="Yield Focus"
              desc="Targeting 10%–40% annualized benchmarks with risk-mitigation."
            />
            <WhyCard
              icon={<GanttChartSquare size={32} />}
              index="03"
              title="Governance"
              desc="Quarterly audits and institutional management standards."
            />
          </motion.div>
        </div>
      </section>

      {/* ================= AUTO-SCROLL CREDIBILITY ================= */}
      <section className="py-12 md:py-20 bg-[#F9F8FF] border-y border-purple-50 overflow-hidden">
        <div className="flex flex-col gap-10">
          <h3 className="text-center text-purple-400 uppercase tracking-[0.4em] text-[10px] font-black">Institutional Exposure</h3>
          <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] cursor-grab">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-6 px-3">
                {[
                  "https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?w=600&auto=format&fit=crop",
                  "https://media.istockphoto.com/id/2198966747/photo/couple-closing-real-estate-contract-with-real-estate-agent.webp?a=1&b=1&s=612x612&w=0&k=20&c=MRupwwS_sR21cACmOIEPxd5ykbXbZsxLoc_oKUsaNhc=",
                  "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1200",
                  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
                ].map((img, idx) => (
                  <div key={idx} className="w-[300px] h-[200px] md:w-[400px] md:h-[250px] shrink-0">
                    <img src={img} className="h-full w-full object-cover rounded-[2rem] shadow-xl grayscale hover:grayscale-0 transition-all duration-700" alt="Asset" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INVESTMENT OPPORTUNITIES GRID ================= */}
      <section className="py-20 md:py-32 bg-[#F9F8FF] px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-16 md:mb-24">
            <h2 className="text-4xl md:text-8xl font-black text-slate-900 tracking-tighter mb-6">
               Active <span className="text-purple-600">Portfolios.</span>
            </h2>
            <div className="h-1.5 w-32 bg-purple-600 rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InvestmentCard
              icon={<Timer size={24} />}
              rate="20–25% PA"
              title="Short-Term Alpha"
              subtitle="Optimized for rapid capital velocity."
              data={{ tenure: "6–12 Mths", asset: "Liquid Property", risk: "Moderate" }}
              features={["Land-based arbitrage", "Residential equity", "Fixed timelines"]}
            />

            <InvestmentCard
              icon={<Building2 size={24} />}
              rate="30–40% PA"
              title="Land Appreciation"
              subtitle="Long-term growth in high-demand zones."
              data={{ tenure: "3 Years", asset: "Direct Land", risk: "Strategic" }}
              features={["Acquisition timing", "Appreciation cycle", "Legal audit"]}
            />

            <InvestmentCard
              icon={<BarChart3 size={24} />}
              rate="10% PA"
              title="Passive Rental"
              subtitle="Predictable monthly cash generation."
              data={{ tenure: "Monthly", asset: "Commercial", risk: "Conservative" }}
              features={["Monthly disbursement", "Tenant management", "Capital growth"]}
            />

            <InvestmentCard
              icon={<PieChart size={24} />}
              rate="15–20% PA"
              title="Equity Backed"
              subtitle="Participation in business expansion."
              data={{ tenure: "Variable", asset: "Business Equity", risk: "Balanced" }}
              features={["Profit sharing", "Assured floor return", "Growth oversight"]}
            />
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA: BENTO STYLE ================= */}
      <section className="py-20 md:py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-6xl mx-auto bg-slate-950 rounded-[3rem] md:rounded-[4rem] p-10 md:p-28 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-tight">
              Invest with <span className="text-purple-400">Authority.</span>
            </h2>
            <button
              onClick={() => navigate("/contact")}
              className="group w-full sm:w-auto bg-white text-slate-900 px-12 py-6 rounded-2xl font-black text-lg tracking-widest hover:bg-purple-600 hover:text-white transition-all shadow-2xl flex items-center justify-center gap-4 mx-auto"
            >
              <PhoneCall size={20} className="group-hover:rotate-12 transition-transform" />
              TALK TO AN ADVISOR
            </button>
          </div>
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
      whileHover={{ y: -8 }}
      className="bg-white border border-purple-50 p-10 md:p-14 text-center rounded-[3rem] shadow-sm hover:shadow-2xl hover:shadow-purple-100/50 transition-all relative overflow-hidden"
    >
      <div className="absolute -top-4 -right-4 p-8 text-purple-600/5 font-black text-8xl md:text-9xl pointer-events-none">
        {index}
      </div>
      <div className="mb-8 flex justify-center text-purple-600 p-5 bg-purple-50 w-fit mx-auto rounded-3xl">
        {icon}
      </div>
      <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-900">
        {title}
      </h3>
      <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
        {desc}
      </p>
    </motion.div>
  );
}

function InvestmentCard({ rate, title, subtitle, data, features, icon }) {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={fadeUp}
      className="bg-white border border-purple-100/50 p-8 md:p-12 group hover:border-purple-600 transition-all flex flex-col shadow-sm hover:shadow-3xl hover:shadow-purple-200/50 rounded-[3rem] relative"
    >
      <div className="flex justify-between items-center mb-10">
        <div className="bg-purple-600 text-white px-5 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl">
          {rate}
        </div>
        <div className="p-4 bg-purple-50 rounded-2xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all">
          {icon}
        </div>
      </div>

      <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tighter group-hover:text-purple-600 transition-colors">
        {title}
      </h3>

      <p className="text-slate-500 text-base mb-10 font-medium leading-relaxed">
        {subtitle}
      </p>

      <div className="grid grid-cols-3 gap-2 py-6 mb-10 border-y border-purple-50">
        <Info label="Tenure" value={data.tenure} />
        <Info label="Asset" value={data.asset} />
        <Info label="Risk" value={data.risk} />
      </div>

      <ul className="space-y-4 flex-grow mb-12">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-slate-600 font-bold">
            <ChevronRight size={16} className="text-purple-600 shrink-0" />
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={() => navigate("/contact")}
        className="w-full flex items-center justify-center gap-3 bg-purple-50 text-purple-600 py-5 rounded-2xl font-black tracking-widest group-hover:bg-purple-600 group-hover:text-white transition-all active:scale-[0.98]"
      >
        INVEST NOW <ArrowUpRight size={20} />
      </button>
    </motion.div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-[9px] uppercase tracking-widest text-purple-400 mb-2 font-black">
        {label}
      </p>
      <p className="text-[12px] md:text-sm font-black text-slate-800 truncate">
        {value}
      </p>
    </div>
  );
}