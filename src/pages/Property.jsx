"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Building2, Search, TrendingUp, ArrowUpRight,
  ShieldCheck, UserCheck, PhoneCall, CheckCircle2, Quote
} from "lucide-react";

/* ================= ANIMATIONS ================= */
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const reveal = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function Property() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 120]);

  return (
    <div className="bg-[#F6F9FF] text-slate-900 pt-20 overflow-x-hidden font-['Inter','Poppins',sans-serif]">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white border-b border-[#EAF1FF]">
        <motion.div style={{ y }} className="absolute inset-0" />

        {/* Ambient glows */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-20 left-10 w-56 h-56 bg-blue-500/10 blur-2xl rounded-full" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div variants={container} initial="hidden" animate="visible">

            <motion.span
              variants={reveal}
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#EAF1FF] border border-[#D6E4FF] rounded-full text-[11px] uppercase tracking-[0.35em] font-bold text-blue-600"
            >
              <Building2 size={14} />
              Asset Stewardship
            </motion.span>

            <motion.h1
              variants={reveal}
              className="mt-10 text-[clamp(3rem,8vw,9rem)] leading-[0.9] font-extrabold tracking-tight"
            >
              Profitable
              <br />
              <span className="text-blue-600">Portfolios</span>
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-8 max-w-xl text-base md:text-lg font-medium text-slate-600"
            >
              Lifecycle-driven real estate strategies engineered for
              <span className="font-semibold text-slate-900"> predictable yield </span>
              and capital protection.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-12 flex flex-col sm:flex-row gap-5"
            >
              <button
                onClick={() => navigate("/contact")}
                className="bg-slate-900 hover:bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold tracking-wide flex items-center justify-center gap-3 transition-all shadow-xl"
              >
                CONSULT EXPERT
                <ArrowUpRight size={18} />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-28 bg-white px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.h2
            variants={reveal}
            className="text-center text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold tracking-tight mb-20"
          >
            Our <span className="text-blue-600">Services</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Service
              icon={<Search />}
              title="Strategic Acquisition"
              desc="Market-driven sourcing with valuation discipline."
              items={["Market Screening", "Risk Filters", "Entry Logic"]}
            />
            <Service
              icon={<UserCheck />}
              title="Asset Management"
              desc="Operational control for stable rental yield."
              items={["Tenant Oversight", "Yield Control", "Compliance"]}
              featured
            />
            <Service
              icon={<TrendingUp />}
              title="Capital Growth"
              desc="Long-cycle appreciation via demand mapping."
              items={["Exit Timing", "Zoning Insight", "Scaling"]}
            />
          </div>
        </motion.div>
      </section>

      {/* ================= GROWTH ================= */}
      <section className="py-32 bg-[#F6F9FF] border-y border-[#EAF1FF] px-6 text-center">
        <motion.h2
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[clamp(2.25rem,6vw,5rem)] font-extrabold tracking-tight mb-24"
        >
          Growth <span className="text-blue-600">Trajectory</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Exit stage="Stage 01" roi="15–20%" desc="Acquisition & Setup" />
          <Exit stage="Stage 02" roi="20–30%" desc="Market Appreciation" />
          <Exit stage="Stage 03" roi="30–40%" desc="Optimized Exit" />
        </div>

        <div className="mt-20 inline-flex items-center gap-5 bg-white border border-[#EAF1FF] px-10 py-6 rounded-3xl shadow">
          <ShieldCheck className="text-blue-600" />
          <p className="font-semibold text-slate-600 text-sm">
            Fully compliant, asset-backed investment structure
          </p>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-28 bg-white px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.h2
            variants={reveal}
            className="text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold tracking-tight mb-20"
          >
            Client <span className="text-blue-600">Success</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Testimonial text="Exceptional clarity and disciplined execution." />
            <Testimonial text="Reliable governance and long-term focus." />
          </div>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 bg-slate-950 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold tracking-tight mb-14">
            The FIP Ecosystem
          </h2>

          <button
            onClick={() => navigate("/contact")}
            className="bg-blue-600 hover:bg-white hover:text-slate-900 text-white px-14 py-6 rounded-2xl font-bold tracking-wide flex items-center gap-4 mx-auto transition-all shadow-2xl"
          >
            CONSULT ADVISOR
            <PhoneCall size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Service({ icon, title, desc, items, featured }) {
  return (
    <motion.div
      variants={reveal}
      className={`p-12 rounded-[3rem] border transition-all ${
        featured
          ? "bg-slate-900 text-white border-slate-800 shadow-2xl"
          : "bg-white border-[#EAF1FF] hover:shadow-xl"
      }`}
    >
      <div className={`mb-8 p-4 rounded-2xl w-fit ${featured ? "bg-white/10" : "bg-[#EAF1FF] text-blue-600"}`}>
        {icon}
      </div>

      <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase">{title}</h3>
      <p className={`mb-8 text-sm md:text-base ${featured ? "text-slate-400" : "text-slate-500"}`}>
        {desc}
      </p>

      <div className="space-y-3">
        {items.map((i, idx) => (
          <div key={idx} className="flex items-center gap-3 text-[11px] uppercase tracking-widest font-bold">
            <CheckCircle2 size={14} className="text-blue-600" />
            {i}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Exit({ stage, roi, desc }) {
  return (
    <motion.div
      variants={reveal}
      className="bg-white border border-[#EAF1FF] p-12 rounded-[3rem] shadow hover:shadow-xl"
    >
      <p className="text-[11px] uppercase tracking-[0.35em] font-bold text-blue-600 mb-6">
        {stage}
      </p>
      <p className="text-5xl font-extrabold tracking-tight mb-4">{roi}</p>
      <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">{desc}</p>
    </motion.div>
  );
}

function Testimonial({ text }) {
  return (
    <motion.div
      variants={reveal}
      className="bg-[#F6F9FF] p-12 rounded-[3rem] border border-[#EAF1FF] shadow relative"
    >
      <Quote className="absolute -top-5 -left-5 text-white bg-blue-600 w-10 h-10 p-2 rounded-full" />
      <p className="italic text-slate-700 mb-6">{text}</p>
      <p className="font-bold text-blue-600">Verified Investor</p>
    </motion.div>
  );
}
