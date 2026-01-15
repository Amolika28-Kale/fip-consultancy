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
  CheckCircle2,
  Award,
  Globe
} from "lucide-react";

/* ================= ANIMATIONS ================= */
const containerStagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
};

const fadeUp = {
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
const softScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, ease: "easeOut" },
  },
};

export default function About() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 1000], [0, 150]);
  const rotateParallax = useTransform(scrollY, [0, 1000], [0, 5]);

  return (
    <div className="w-full bg-[#F6F9FF] text-slate-900 overflow-x-hidden pt-20 selection:bg-[#EAF1FF] selection:text-[#2C4FA3] font-['Poppins',sans-serif]">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-white border-b border-[#EAF1FF] overflow-hidden px-6">
        <motion.div 
          style={{ y: yParallax, rotate: rotateParallax }} 
          className="absolute inset-0 opacity-[0.05]"
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(#6495ED 1.5px, transparent 1.5px)",
              backgroundSize: "60px 60px"
            }}
          />
        </motion.div>

        {/* Enhanced Floating Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-32 h-32 bg-[#6495ED]/20 blur-2xl rounded-full"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-[#6495ED]/15 blur-3xl rounded-full"
        />

        <div className="max-w-7xl mx-auto py-24 text-center relative z-10">
          <motion.div initial="hidden" animate="visible" variants={containerStagger}>
            <motion.div 
              variants={fadeUp} 
              className="flex justify-center mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <span className="inline-flex items-center gap-3 px-6 py-3 text-[10px] font-black uppercase tracking-[0.4em] bg-[#EAF1FF] text-[#2C4FA3] rounded-full border border-[#D6E4FF] shadow-sm">
                <Building2 size={16} />
                Global Advisory Core
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeUp} 
              className="text-6xl md:text-[9rem] font-black tracking-tighter leading-[0.85] mb-12"
            >
              Our <span className="text-[#6495ED] ">Core.</span>
            </motion.h1>

            <motion.div 
              variants={fadeUp} 
              className="flex justify-center gap-6 opacity-40"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              // variants={containerStagger}
            >
              {["FINANCE", "INVESTMENT", "PROPERTY"].map((item, i) => (
                <motion.span 
                  key={item} 
                  variants={scaleIn}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  className="text-xs font-black tracking-[0.5em] uppercase cursor-pointer"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= STORY ================= */}
   <section className="relative py-32 px-6 bg-white overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F6F9FF] to-white" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#EAF1FF]/60 blur-3xl rounded-full" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto"
      >
        {/* Label */}
        <motion.div
          variants={fadeUp}
          className="flex items-center gap-4 mb-10"
        >
          <div className="h-[2px] w-12 bg-[#6495ED] rounded-full" />
          <p className="text-[11px] uppercase tracking-[0.35em] text-[#6495ED] font-black">
            Institutional Identity
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-12 leading-[1.05]"
        >
          Engineering Financial
          <br />
          <span className="text-[#6495ED]">Discipline.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="max-w-3xl text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-20"
        >
          <span className="font-bold text-slate-900">
            FIP Consultancy
          </span>{" "}
          institutionalizes financial decision-making by transforming market
          complexity into{" "}
          <span className="font-bold text-[#2C4FA3]">
            predictable, asset-aligned outcomes.
          </span>
        </motion.p>

        {/* Value Grid */}
        <motion.div
          variants={container}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              title: "Radical Transparency",
              icon: <Search size={18} />,
            },
            {
              title: "Asset-Backed Security",
              icon: <ShieldCheck size={18} />,
            },
            {
              title: "Managed Portfolios",
              icon: <Target size={18} />,
            },
            {
              title: "Legal Stewardship",
              icon: <CheckCircle2 size={18} />,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={softScale}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group bg-white border border-[#EAF1FF] rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-[#6495ED]/40 transition-all"
            >
              <div className="h-12 w-12 rounded-2xl bg-[#EAF1FF] flex items-center justify-center text-[#6495ED] mb-6 group-hover:bg-[#6495ED] group-hover:text-white transition-colors">
                {item.icon}
              </div>

              <h4 className="text-slate-900 font-black text-lg mb-2">
                {item.title}
              </h4>

              <div className="h-[2px] w-10 bg-[#6495ED]/30 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>

      {/* ================= NEW VALUES SECTION ================= */}
      <section className="py-32 bg-[#F6F9FF] px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerStagger}
          className="max-w-7xl mx-auto text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-16"
          >
            Our <span className="text-[#6495ED]">Values</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              variants={slideInLeft}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-12 rounded-[3rem] shadow-lg border border-[#EAF1FF]"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-[#EAF1FF] rounded-2xl flex items-center justify-center mb-6 mx-auto"
              >
                <Award size={32} className="text-[#6495ED]" />
              </motion.div>
              <h3 className="text-2xl font-black mb-4">Excellence</h3>
              <p className="text-slate-500">Delivering unparalleled quality in every service.</p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-12 rounded-[3rem] shadow-lg border border-[#EAF1FF]"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-[#EAF1FF] rounded-2xl flex items-center justify-center mb-6 mx-auto"
              >
                <Globe size={32} className="text-[#6495ED]" />
              </motion.div>
              <h3 className="text-2xl font-black mb-4">Integrity</h3>
              <p className="text-slate-500">Building trust through honest and ethical practices.</p>
            </motion.div>
            <motion.div
              variants={slideInRight}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-12 rounded-[3rem] shadow-lg border border-[#EAF1FF]"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-[#EAF1FF] rounded-2xl flex items-center justify-center mb-6 mx-auto"
              >
                <Rocket size={32} className="text-[#6495ED]" />
              </motion.div>
              <h3 className="text-2xl font-black mb-4">Innovation</h3>
              <p className="text-slate-500">Pioneering new solutions for financial success.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-28 bg-white px-6">
        <motion.div 
          variants={containerStagger} 
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
      <section className="py-40 bg-slate-950 text-white relative overflow-hidden px-6">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-[#6495ED] rounded-full blur-[160px]"
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl md:text-7xl font-black tracking-tighter"
          >
            "Every decision is rooted in <span className="text-[#87AFFF] italic">Discipline</span> & Legacy."
          </motion.p>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={bounceIn}
            className="mt-20 h-1 w-32 bg-[#6495ED] mx-auto rounded-full"
          />
        </div>
      </section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Stat({ value, label, icon }) {
  return (
    <motion.div 
      variants={fadeUp} 
      whileHover={{ y: -8, scale: 1.05, rotateY: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-[#F6F9FF] p-10 rounded-[3rem] border border-[#EAF1FF] text-center shadow-sm hover:shadow-xl transition-all"
    >
      <motion.div 
        className="mx-auto mb-6 p-4 bg-[#EAF1FF] rounded-2xl text-[#6495ED] w-fit"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>
      <motion.p 
        className="text-5xl font-black tracking-tighter"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {value}
      </motion.p>
      <p className="text-[#6495ED] uppercase tracking-[0.3em] text-[10px] font-black">{label}</p>
    </motion.div>
  );
}