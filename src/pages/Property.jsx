"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Building2, Search, Key, TrendingUp, ArrowUpRight,
  ShieldCheck, UserCheck, GanttChartSquare, PhoneCall, CheckCircle2,
  Quote
} from "lucide-react";

/* ================= ANIMATIONS ================= */
const containerStagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemReveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
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

const bounceIn = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 10 } }
};

export default function Property() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 150]);
  const rotateParallax = useTransform(scrollY, [0, 1000], [0, 10]);

  return (
    <div className="bg-[#F6F9FF] text-slate-900 overflow-x-hidden pt-20 font-['Poppins',sans-serif]">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center bg-white border-b border-[#EAF1FF] overflow-hidden">
        <motion.div 
          style={{ y: yParallax, rotate: rotateParallax }} 
          className="absolute inset-0"
        >
          {/* <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
            className="w-full h-full object-cover opacity-[0.06] scale-110"
          /> */}
        </motion.div>

        {/* Enhanced Glows */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-10 w-64 h-64 bg-[#6495ED]/20 blur-3xl rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-10 left-10 w-48 h-48 bg-[#6495ED]/15 blur-2xl rounded-full"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={containerStagger} initial="hidden" animate="visible">

            <motion.div 
              variants={itemReveal} 
              className="mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <span className="inline-flex items-center gap-3 px-6 py-3 text-[10px] font-black tracking-[0.4em] uppercase text-[#6495ED] bg-[#EAF1FF] border border-[#D6E4FF] rounded-full shadow-sm">
                <Building2 size={14} /> Asset Stewardship
              </span>
            </motion.div>

            <motion.h1 
              variants={itemReveal} 
              className="text-6xl md:text-[9rem] font-black leading-[0.85] tracking-tighter"
            >
              Profitable <br />
              <span className="text-[#6495ED]">Portfolios.</span>
            </motion.h1>

            <motion.p 
              variants={itemReveal} 
              className="mt-10 max-w-3xl text-xl text-slate-500 font-medium"
            >
              Lifecycle-driven real estate strategies designed for
              <span className="text-[#2C4FA3] font-bold"> maximum yield</span> and secure exits.
            </motion.p>

            <motion.div 
              variants={itemReveal} 
              className="mt-14"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => navigate("/contact")}
                className="group bg-slate-900 hover:bg-[#6495ED] text-white px-12 py-6 rounded-2xl font-black tracking-widest flex items-center gap-4 transition-all shadow-xl"
              >
                CONSULT EXPERT
                <ArrowUpRight size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* New Hero Visual Element */}
          {/* <motion.div
            initial="hidden"
            animate="visible"
            variants={slideInRight}
            className="hidden lg:block"
          >
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="bg-[#EAF1FF] p-12 rounded-[4rem] shadow-2xl"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 mx-auto mb-8 bg-[#6495ED] rounded-full flex items-center justify-center"
              >
                <Building2 size={48} className="text-white" />
              </motion.div>
              <h3 className="text-2xl font-black text-center mb-4">Strategic Insights</h3>
              <p className="text-slate-500 text-center">Data-driven decisions for optimal returns.</p>
            </motion.div>
          </motion.div> */}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-32 bg-white px-6">
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={itemReveal}
            className="text-5xl md:text-7xl font-black tracking-tighter text-center mb-16"
          >
            Our <span className="text-[#6495ED]">Services</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              index="01"
              icon={<Search size={28} />}
              title="Strategic Acquisition"
              desc="Precision-based acquisition frameworks for residential & commercial assets."
              items={["Market Entry", "Valuation Logic", "Risk Filters"]}
            />

            <ServiceCard
              index="02"
              icon={<UserCheck size={28} />}
              title="Asset Management"
              desc="Operational oversight engineered for stable rental and capital safety."
              items={["Tenant Control", "Yield Optimization", "Governance"]}
              isFeatured
            />

            <ServiceCard
              index="03"
              icon={<TrendingUp size={28} />}
              title="Capital Growth"
              desc="Long-cycle appreciation models driven by data and zoning intelligence."
              items={["Exit Timing", "Demand Zones", "Capital Scaling"]}
            />
          </div>
        </motion.div>
      </section>

      {/* ================= GROWTH STAGES ================= */}
      <section className="py-36 bg-[#F6F9FF] border-y border-[#EAF1FF] px-6 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemReveal}
          className="text-5xl md:text-8xl font-black tracking-tighter mb-24"
        >
          Growth <span className="text-[#6495ED]">Trajectory.</span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
          className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          <ExitCard stage="Stage 01" roi="15–20%" desc="Acquisition & Setup" />
          <ExitCard stage="Stage 02" roi="20–30%" desc="Market Appreciation" />
          <ExitCard stage="Stage 03" roi="30–40%" desc="Optimized Exit" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={bounceIn}
          className="mt-20 inline-flex items-center gap-6 bg-white border border-[#EAF1FF] px-10 py-6 rounded-3xl shadow-lg"
        >
          <ShieldCheck size={32} className="text-[#6495ED]" />
          <p className="font-bold text-slate-600">
            100% Legal Compliance & Asset-Backed Protection
          </p>
        </motion.div>
      </section>

      {/* ================= CLIENT SUCCESS STORIES ================= */}
      <section className="py-32 bg-white px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.h2
            variants={itemReveal}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-16"
          >
            Client <span className="text-[#6495ED]">Success</span> Stories
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={slideInLeft}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#F6F9FF] p-12 rounded-[3rem] shadow-lg border border-[#EAF1FF] relative"
            >
              <motion.div
                className="absolute -top-4 -left-4 w-12 h-12 bg-[#6495ED] rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Quote size={20} className="text-white" />
              </motion.div>
              <p className="text-lg italic mb-6 text-slate-700">"Exceptional returns and seamless management. FIP transformed our investment strategy."</p>
              <p className="font-black text-[#6495ED]">- John Doe, Investor</p>
            </motion.div>
            <motion.div
              variants={slideInRight}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-[#F6F9FF] p-12 rounded-[3rem] shadow-lg border border-[#EAF1FF] relative"
            >
              <motion.div
                className="absolute -top-4 -left-4 w-12 h-12 bg-[#6495ED] rounded-full flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Quote size={20} className="text-white" />
              </motion.div>
              <p className="text-lg italic mb-6 text-slate-700">"Professional and reliable property solutions. Highly recommend for asset growth."</p>
              <p className="font-black text-[#6495ED]">- Jane Smith, Entrepreneur</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-36 bg-slate-950 text-white px-6 relative overflow-hidden">
        <motion.div 
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#6495ED40,_transparent)]"
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemReveal}
            className="text-6xl md:text-9xl font-black tracking-tighter mb-16"
          >
            The FIP <br />
            <span className="text-[#87AFFF] italic font-light">Ecosystem.</span>
          </motion.h2>

          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#0f172a" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/contact")}
            className="bg-[#6495ED] hover:bg-white hover:text-slate-900 text-white px-14 py-7 rounded-2xl font-black tracking-widest flex items-center gap-4 mx-auto transition-all shadow-2xl"
          >
            CONSULT ADVISOR
            <PhoneCall size={20} />
          </motion.button>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function ServiceCard({ index, icon, title, desc, items, isFeatured }) {
  return (
    <motion.div
      variants={itemReveal}
      whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`p-12 rounded-[3rem] border relative transition-all overflow-hidden ${
        isFeatured
          ? "bg-slate-900 text-white border-slate-800 shadow-2xl"
          : "bg-white border-[#EAF1FF] hover:shadow-xl"
      }`}
    >
      <motion.div 
        className="absolute -top-6 -right-6 text-[8rem] font-black text-[#6495ED]/10"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      >
        {index}
      </motion.div>

      <motion.div 
        className={`mb-8 p-4 rounded-2xl w-fit ${
          isFeatured ? "bg-white/10 text-white" : "bg-[#EAF1FF] text-[#6495ED]"
        }`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>

      <h3 className="text-3xl font-black mb-4 uppercase">{title}</h3>
      <p className={`mb-10 font-medium ${isFeatured ? "text-slate-400" : "text-slate-500"}`}>
        {desc}
      </p>

      <motion.div 
        className="space-y-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerStagger}
      >
        {items.map((i, idx) => (
          <motion.div 
            key={idx} 
            variants={scaleIn}
            className="flex items-center gap-3 font-black text-xs uppercase tracking-widest"
          >
            <CheckCircle2 size={16} className="text-[#6495ED]" />
            <span>{i}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function ExitCard({ stage, roi, desc }) {
  return (
    <motion.div
      variants={itemReveal}
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white border border-[#EAF1FF] p-12 rounded-[3rem] shadow-sm hover:shadow-xl transition-all"
    >
      <p className="text-xs uppercase tracking-[0.4em] font-black text-[#6495ED] mb-6">
        {stage}
      </p>
      <motion.p 
        className="text-6xl font-black tracking-tighter mb-4"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {roi}
      </motion.p>
      <p className="text-slate-500 font-black uppercase text-xs tracking-widest">
        {desc}
      </p>
    </motion.div>
  );
}