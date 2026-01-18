"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Users,
  BarChart4,
  Handshake,
  Clock,
  Search,
  ShieldCheck,
  Rocket,
  Target,
  Building2,
  CheckCircle2,
  Award,
  Globe
} from "lucide-react";

/* ================= ANIMATIONS ================= */
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const reveal = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function About() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 100]);

  return (
    <div className="bg-[#FDFDFD] text-slate-900 pt-16 md:pt-24 overflow-x-hidden font-sans">

      {/* ================= HERO (MINIMALIST) ================= */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 md:px-6 overflow-hidden bg-white border-b border-slate-100">
        <motion.div
          style={{ y }}
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }}
          />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={reveal} className="inline-flex items-center gap-3 px-5 py-2 bg-blue-50 border border-blue-100 rounded-full text-[9px] md:text-[11px] uppercase tracking-[0.4em] font-black text-blue-600 mb-8">
              <Building2 size={14} /> Global Advisory Core
            </motion.div>

            <motion.h1 
              variants={reveal}
              className="text-[clamp(3rem,12vw,8.5rem)] font-black tracking-tighter leading-[0.85] text-slate-950"
            >
              Our <span className="text-blue-600">Core.</span>
            </motion.h1>

            <motion.div 
              variants={reveal}
              className="mt-8 flex justify-center gap-4 md:gap-8 text-[9px] md:text-[11px] uppercase tracking-[0.4em] font-bold text-slate-400"
            >
              <span>Finance</span>
              <span className="w-1 h-1 bg-blue-600 rounded-full my-auto" />
              <span>Investment</span>
              <span className="w-1 h-1 bg-blue-600 rounded-full my-auto" />
              <span>Property</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= IDENTITY (EDITORIAL) ================= */}
      <section className="py-20 md:py-32 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 md:gap-20">
          <motion.div 
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.div variants={reveal} className="flex items-center gap-4 mb-8">
              <div className="h-[2px] w-10 bg-blue-600" />
              <p className="text-[10px] md:text-[12px] uppercase tracking-[0.3em] font-black text-blue-600">
                Institutional Identity
              </p>
            </motion.div>
            <motion.h2 variants={reveal} className="text-3xl md:text-6xl font-black tracking-tighter leading-tight mb-8">
              Engineering Financial <br />
              <span className="text-blue-600">Discipline.</span>
            </motion.h2>
            <motion.p variants={reveal} className="text-slate-500 font-medium text-sm md:text-lg leading-relaxed">
              FIP Consultancy institutionalizes financial decision-making by converting complexity into predictable, asset-aligned outcomes. We bridge the gap between individual ambition and institutional precision.
            </motion.p>
          </motion.div>

          <motion.div 
            className="lg:col-span-7 grid sm:grid-cols-2 gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
          >
            {[
              { title: "Radical Transparency", icon: <Search />, desc: "Complete visibility into asset workflows." },
              { title: "Asset-Backed Security", icon: <ShieldCheck />, desc: "Risk mitigated by tangible collateral." },
              { title: "Managed Portfolios", icon: <Target />, desc: "Lifecycle steering for capital growth." },
              { title: "Legal Stewardship", icon: <CheckCircle2 />, desc: "Governance through compliant frameworks." }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={reveal}
                className="p-8 md:p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {React.cloneElement(item.icon, { size: 20 })}
                </div>
                <h4 className="text-lg font-black mb-3">{item.title}</h4>
                <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= VALUES (BENTO) ================= */}
      <section className="py-20 md:py-32 bg-slate-50 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-7xl font-black tracking-tighter mb-4">The <span className="text-blue-600">Standard.</span></h2>
            <p className="text-slate-400 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">Our Unwavering Values</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <ValueCard icon={<Award />} title="Excellence" desc="Uncompromising quality across every mandate, ensuring that every touchpoint reflects institutional rigor." />
            <ValueCard icon={<Globe />} title="Integrity" desc="Trust is our primary asset. We build it through radical transparency and execution-focused honesty." />
            <ValueCard icon={<Rocket />} title="Innovation" desc="Structured thinking beyond conventions to unlock liquidity in traditional asset classes." />
          </div>
        </div>
      </section>

      {/* ================= STATS (MINIMAL) ================= */}
      <section className="py-20 md:py-32 bg-white px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatItem value="1K+" label="Active Clients" icon={<Users />} />
          <StatItem value="₹500Cr" label="Advisory AUM" icon={<BarChart4 />} />
          <StatItem value="98%" label="Retention" icon={<Handshake />} />
          <StatItem value="15Y" label="Market Tenure" icon={<Clock />} />
        </div>
      </section>

      {/* ================= FINAL (IMPACT) ================= */}
      <section className="py-32 md:py-48 bg-slate-950 text-white px-4 md:px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[clamp(1.75rem,5vw,4.5rem)] font-black tracking-tighter leading-[1.1]"
          >
            Every decision is rooted in <br />
            <span className="text-blue-500 italic">discipline</span> and legacy.
          </motion.p>
        </div>
        {/* Decorative Watermark */}
        <div className="absolute bottom-[-10%] right-[-5%] text-[15vw] font-black text-white/[0.03] select-none pointer-events-none">
          FIP.EST
        </div>
      </section>
    </div>
  );
}

/* ================= SUB-COMPONENTS ================= */

function ValueCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white p-10 md:p-12 rounded-[3rem] border border-slate-100 shadow-sm transition-all duration-500"
    >
      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8 text-blue-600">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <h3 className="text-2xl font-black mb-4 tracking-tight">{title}</h3>
      <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function StatItem({ value, label, icon }) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">
        {React.cloneElement(icon, { size: 32 })}
      </div>
      <div className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter mb-2">{value}</div>
      <div className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">{label}</div>
    </div>
  );
}