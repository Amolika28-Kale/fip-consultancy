"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Users, 
  BarChart4, 
  Handshake, 
  Clock, 
  Search, 
  GraduationCap, 
  ShieldCheck, 
  Rocket,
  Target,
  Building2,
  CheckCircle2
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
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function About() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 150]);

  return (
    <div className="w-full bg-[#FAF9FF] text-slate-900 overflow-x-hidden pt-20 selection:bg-purple-100 selection:text-purple-900">

      {/* ================= HERO: INSTITUTIONAL CORE ================= */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center justify-center bg-white border-b border-purple-100 overflow-hidden px-6">
        {/* Parallax Pattern Background */}
        <motion.div style={{ y: yParallax }} className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#6D28D9 1.5px, transparent 1.5px)', backgroundSize: '60px 60px' }} />
        </motion.div>
        
        <div className="max-w-7xl mx-auto py-20 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={containerStagger}>
            <motion.div variants={fadeUp} className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-3 px-6 py-2.5 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] bg-purple-50 text-purple-700 rounded-full border border-purple-100 shadow-sm">
                <Building2 size={16} />
                Global Advisory Core
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl sm:text-7xl md:text-[10rem] font-black tracking-tighter text-slate-900 leading-[0.85] mb-12"
            >
              Our <span className="text-purple-600 italic">Core.</span>
            </motion.h1>

            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-40">
              {["FINANCE", "INVESTMENT", "PROPERTY"].map((item) => (
                <span key={item} className="text-xs md:text-sm font-black tracking-[0.5em] uppercase">{item}</span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= STORY & COLLABORATION ================= */}
      <section className="py-20 md:py-40 bg-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 md:gap-24 items-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={containerStagger}
            className="lg:col-span-7"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
               <div className="h-1 w-12 bg-purple-600 rounded-full" />
               <p className="text-[10px] uppercase tracking-[0.4em] text-purple-600 font-black">Institutional Identity</p>
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-4xl md:text-8xl font-black leading-[0.9] text-slate-900 mb-10 tracking-tighter">
              Engineering <br /> Financial <span className="text-purple-600">Discipline.</span>
            </motion.h2>

            <motion.div variants={fadeUp} className="space-y-8 text-slate-600 text-lg md:text-2xl leading-relaxed font-medium">
              <p>
                <strong className="text-purple-900">FIP Consultancy</strong> is a specialized advisory ecosystem designed to convert complex market variables into <span className="text-slate-900 font-bold">defined ROI paths.</span>
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  {[
                    { t: "Radical Transparency", i: <Search size={18}/> },
                    { t: "Asset-Backed Security", i: <ShieldCheck size={18}/> },
                    { t: "Managed Portfolios", i: <Target size={18}/> },
                    { t: "Legal Stewardship", i: <CheckCircle2 size={18}/> }
                  ].map((pill, idx) => (
                    <div key={idx} className="flex items-center gap-4 text-purple-700 font-bold text-sm bg-purple-50 p-4 rounded-2xl border border-purple-100/50">
                       <span className="p-2 bg-white rounded-xl shadow-sm text-purple-600">{pill.i}</span>
                       {pill.t}
                    </div>
                  ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="absolute -inset-6 rounded-[3.5rem] bg-gradient-to-tr from-purple-200/40 to-indigo-100/40 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80"
              alt="Advisory Team"
              className="relative rounded-[3rem] shadow-3xl shadow-purple-900/10 w-full object-cover aspect-[4/5] md:aspect-square transition-all duration-700 border border-purple-50"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= BENTO STATS ================= */}
      <section className="py-20 md:py-32 bg-[#F9F8FF] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          <Stat value="1K+" label="Active Clients" icon={<Users />} />
          <Stat value="₹500Cr" label="AUM Advisory" icon={<BarChart4 />} />
          <Stat value="98%" label="Annual Retention" icon={<Handshake />} />
          <Stat value="15Y" label="Market Tenure" icon={<Clock />} />
        </motion.div>
      </section>

      {/* ================= VALUES: THE BENTO GRID ================= */}
      <section className="py-20 md:py-40 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 md:mb-32">
            <h2 className="text-[10px] uppercase tracking-[0.5em] text-purple-600 font-black mb-6">Execution Pillars</h2>
            <h3 className="text-4xl md:text-8xl font-black text-slate-900 tracking-tighter">The FIP Standard.</h3>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerStagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <Value index="01" title="Transparency" desc="Absolute disclosure across capital structures." icon={<Search size={24}/>} />
            <Value index="02" title="Expertise" desc="Primary research coupled with market data." icon={<GraduationCap size={24}/>} />
            <Value index="03" title="Trust" desc="Bilateral partnerships built on legal integrity." icon={<ShieldCheck size={24}/>} />
            <Value index="04" title="Performance" desc="Targeting sustainable, risk-adjusted growth." icon={<Rocket size={24}/>} />
          </motion.div>
        </div>
      </section>

      {/* ================= MOBILE-FRIENDLY INSIGHTS SLIDER ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FF] border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl md:text-7xl font-black text-slate-900 tracking-tighter">Thinking.</h2>
            <div className="flex gap-2">
                <div className="w-12 h-2 bg-purple-600 rounded-full" />
                <div className="w-4 h-2 bg-purple-200 rounded-full" />
            </div>
          </div>

          {/* Horizontal Snap Scroll for Mobile, Grid for Desktop */}
          <div className="flex overflow-x-auto pb-10 gap-6 no-scrollbar snap-x touch-pan-x md:grid md:grid-cols-4 md:overflow-visible">
            {[
              { t: "Market Discipline", d: "Rigorous vetting in shifting cycles." },
              { t: "Client-Centricity", d: "Interests aligned with long-term goals." },
              { t: "Wealth Velocity", d: "Strategic capital deployment speed." },
              { t: "Asset Security", d: "Risk-mitigation at every foundation." }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="min-w-[280px] md:min-w-full snap-start bg-white p-10 rounded-[3rem] border border-purple-100 shadow-sm hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500"
              >
                <div className="mb-8 p-4 bg-purple-50 w-fit rounded-2xl text-purple-600">
                    <Rocket size={24} />
                </div>
                <h4 className="font-black text-xl text-slate-900 mb-4 uppercase tracking-tight">{item.t}</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-bold">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMMITMENT: INSTITUTIONAL FINALE ================= */}
      <section className="py-24 md:py-48 bg-slate-950 text-white relative overflow-hidden px-6">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }} 
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600 rounded-full blur-[160px]" 
        />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-7xl font-black leading-[1.1] tracking-tighter"
          >
            “Every decision is rooted in <span className="text-purple-400 italic">Discipline</span> and <span className="text-purple-400">Legacy.</span>”
          </motion.p>
          <div className="mt-20 h-1 w-32 bg-purple-500 mx-auto rounded-full" />
        </div>
      </section>
    </div>
  );
}

/* ================= REFINED COMPONENTS ================= */

function Stat({ value, label, icon }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ scale: 1.02 }}
      className="bg-white p-10 rounded-[3rem] border border-purple-50 shadow-sm hover:shadow-xl transition-all text-center group"
    >
      <div className="flex justify-center mb-6 p-4 bg-purple-50 w-fit mx-auto rounded-2xl text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all">{icon}</div>
      <p className="text-4xl md:text-6xl font-black text-slate-900 mb-2 tracking-tighter">
        {value}
      </p>
      <p className="text-purple-400 uppercase tracking-[0.3em] text-[10px] font-black">
        {label}
      </p>
    </motion.div>
  );
}

function Value({ index, title, desc, icon }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8 }}
      className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-purple-50 hover:shadow-3xl hover:shadow-purple-100 transition-all group relative overflow-hidden"
    >
      <div className="absolute -top-4 -right-4 text-purple-600/5 font-black text-8xl">{index}</div>
      <div className="text-purple-200 group-hover:text-purple-600 transition-colors duration-500 mb-8">{icon}</div>
      <h3 className="text-lg font-black mb-4 text-slate-900 uppercase tracking-widest">
        {title}
      </h3>
      <p className="text-slate-500 text-base leading-relaxed font-medium">
        {desc}
      </p>
    </motion.div>
  );
}