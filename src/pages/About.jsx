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

const softScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function About() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 120]);
  const rotate = useTransform(scrollY, [0, 800], [0, 4]);

  return (
    <div className="bg-[#F6F9FF] text-slate-900 pt-20 overflow-x-hidden font-['Inter','Poppins',sans-serif]">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-white border-b border-[#EAF1FF] overflow-hidden px-6">
        <motion.div
          style={{ y, rotate }}
          className="absolute inset-0 opacity-[0.04]"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(#6495ED 1.5px, transparent 1.5px)",
              backgroundSize: "64px 64px"
            }}
          />
        </motion.div>

        {/* Ambient glows */}
        <div className="absolute top-24 left-16 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full" />
        <div className="absolute bottom-24 right-16 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div variants={container} initial="hidden" animate="visible">

            <motion.span
              variants={reveal}
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#EAF1FF] border border-[#D6E4FF] rounded-full text-[11px] uppercase tracking-[0.35em] font-bold text-blue-600 mb-10"
            >
              <Building2 size={14} />
              Global Advisory Core
            </motion.span>

            <motion.h1
              variants={reveal}
              className="text-[clamp(3rem,8vw,9rem)] font-extrabold tracking-tight leading-[0.9]"
            >
              Our <span className="text-blue-600">Core</span>
            </motion.h1>

            <motion.div
              variants={reveal}
              className="mt-10 flex justify-center gap-6 text-[11px] uppercase tracking-[0.45em] font-bold text-slate-500"
            >
              <span>Finance</span>
              <span>Investment</span>
              <span>Property</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="relative py-32 px-6 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F6F9FF] to-white" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#EAF1FF]/60 blur-3xl rounded-full" />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto"
        >
          <motion.div variants={reveal} className="flex items-center gap-4 mb-10">
            <div className="h-[2px] w-12 bg-blue-600" />
            <p className="text-[11px] uppercase tracking-[0.35em] font-bold text-blue-600">
              Institutional Identity
            </p>
          </motion.div>

          <motion.h2
            variants={reveal}
            className="text-[clamp(2.25rem,5vw,4.5rem)] font-extrabold tracking-tight mb-12"
          >
            Engineering Financial
            <br />
            <span className="text-blue-600">Discipline</span>
          </motion.h2>

          <motion.p
            variants={reveal}
            className="max-w-3xl text-base md:text-lg font-medium text-slate-600 leading-relaxed mb-20"
          >
            <span className="font-semibold text-slate-900">FIP Consultancy</span>{" "}
            institutionalizes financial decision-making by converting complexity
            into{" "}
            <span className="font-semibold text-blue-600">
              predictable, asset-aligned outcomes
            </span>.
          </motion.p>

          <motion.div
            variants={container}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: "Radical Transparency", icon: <Search size={18} /> },
              { title: "Asset-Backed Security", icon: <ShieldCheck size={18} /> },
              { title: "Managed Portfolios", icon: <Target size={18} /> },
              { title: "Legal Stewardship", icon: <CheckCircle2 size={18} /> }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={softScale}
                whileHover={{ y: -6 }}
                className="bg-white border border-[#EAF1FF] rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="h-12 w-12 rounded-2xl bg-[#EAF1FF] flex items-center justify-center text-blue-600 mb-6">
                  {item.icon}
                </div>
                <h4 className="text-base md:text-lg font-bold">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="py-32 bg-[#F6F9FF] px-6">
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
            Our <span className="text-blue-600">Values</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Value icon={<Award />} title="Excellence" desc="Uncompromising quality across every mandate." />
            <Value icon={<Globe />} title="Integrity" desc="Trust built through transparent execution." />
            <Value icon={<Rocket />} title="Innovation" desc="Structured thinking beyond conventions." />
          </div>
        </motion.div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-28 bg-white px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6"
        >
          <Stat value="1K+" label="Active Clients" icon={<Users />} />
          <Stat value="₹500Cr" label="AUM Advisory" icon={<BarChart4 />} />
          <Stat value="98%" label="Retention" icon={<Handshake />} />
          <Stat value="15Y" label="Market Tenure" icon={<Clock />} />
        </motion.div>
      </section>

      {/* ================= FINALE ================= */}
      <section className="py-36 bg-slate-950 text-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-[clamp(2rem,5vw,4rem)] font-extrabold tracking-tight">
            Every decision is rooted in{" "}
            <span className="text-blue-400 italic">discipline</span> and legacy.
          </p>
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Value({ icon, title, desc }) {
  return (
    <motion.div
      variants={reveal}
      whileHover={{ y: -8 }}
      className="bg-white p-12 rounded-[3rem] border border-[#EAF1FF] shadow hover:shadow-xl"
    >
      <div className="w-14 h-14 bg-[#EAF1FF] rounded-2xl flex items-center justify-center mb-6 mx-auto text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
      <p className="text-slate-500 text-sm md:text-base">{desc}</p>
    </motion.div>
  );
}

function Stat({ value, label, icon }) {
  return (
    <motion.div
      variants={reveal}
      whileHover={{ y: -8 }}
      className="bg-[#F6F9FF] p-10 rounded-[3rem] border border-[#EAF1FF] text-center shadow-sm hover:shadow-xl"
    >
      <div className="mx-auto mb-6 p-4 bg-[#EAF1FF] rounded-2xl text-blue-600 w-fit">
        {icon}
      </div>
      <p className="text-4xl md:text-5xl font-extrabold tracking-tight">
        {value}
      </p>
      <p className="text-[11px] uppercase tracking-[0.35em] font-bold text-blue-600 mt-2">
        {label}
      </p>
    </motion.div>
  );
}
