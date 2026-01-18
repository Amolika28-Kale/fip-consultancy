"use client";
import React, { useState, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
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
} from "lucide-react";

/* ================= MOTION CONFIG ================= */
const ease = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d, duration: 0.7, ease },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

export default function Home() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="bg-paper text-ink font-sans selection:bg-accent selection:text-white">

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#6495ED] via-[#A5C4FF] to-[#6495ED] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
          <motion.div style={{ y: heroY, opacity: heroOpacity }}>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#6495ED]/20 text-[#4B6FD6] text-[10px] tracking-[0.3em] font-bold uppercase"
            >
              <ShieldCheck size={14} />
              Trusted Institutional Partner
            </motion.div>

            {/* Hero Title */}
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="leading-[0.92] tracking-tight mb-10"
            >
              <motion.span
                variants={fadeUp}
                className="block font-black text-[clamp(2.6rem,9vw,6.5rem)] text-[#0B1B3A]"
              >
                FIP
              </motion.span>
              <motion.span
                variants={fadeUp}
                className="block font-black text-[clamp(2.5rem,8vw,6rem)] text-transparent bg-clip-text bg-gradient-to-r from-[#6495ED] to-[#3B71D8]"
              >
                CONSULTANCY
              </motion.span>
            </motion.h1>

            {/* Hero Description */}
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-xl text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed text-[#5B6E99] font-medium border-l-2 border-[#6495ED] pl-6 mb-12"
            >
A comprehensive financial ecosystem designed to support individuals and businesses through structured solutions and professionally managed services.            </motion.p>

            {/* CTA */}
            <motion.div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/contact")}
                className="px-10 py-5 rounded-2xl bg-[#6495ED] text-white font-bold tracking-wide flex items-center justify-center gap-3 shadow-lg"
              >
                Consult Now <ArrowRight size={18} />
              </motion.button>

              <motion.button
                whileHover={{ backgroundColor: "#ffffff" }}
                onClick={() => navigate("/about")}
                className="px-10 py-5 rounded-2xl border border-[#DCE8FF] bg-white/60 backdrop-blur-sm font-bold tracking-wide text-[#0B1B3A]"
              >
                Our Model
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[clamp(2rem,6vw,4rem)] font-black tracking-tight leading-tight mb-16"
        >
          Precision <span className="italic font-light text-[#5B6E99]">&</span>
          <br />
          <span className="text-[#6495ED]">Capital Delivery</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <Card span="md:col-span-7" icon={<Rocket />} title="Project Finance" desc="Strategic capital infusion up to ₹10 Crores for scalable ventures." />
          <Card span="md:col-span-5" icon={<HomeIcon />} title="Retail Loans" desc="Personalized funding up to ₹10 Lakhs with digital-first speed." />
          <Card span="md:col-span-5" icon={<Landmark />} title="Asset Backed" desc="Sophisticated property-driven liquidity for high-net-worth needs." />
          <Card span="md:col-span-7" icon={<Globe />} title="Global Trade" desc="Institutional gold & export finance for international expansion." />
        </motion.div>
      </section>

            {/* ================= STATS SECTION ================= */}
      <section className="px-4 py-12 md:py-24">
        <div className="bg-[#0B1B3A] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden relative">
          {/* Decorative background for Stats */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#6495ED,transparent)]" />
          </div>

          <div className="max-w-7xl mx-auto px-8 py-20 md:py-32 grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <h3 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
                The FIP <br />
                <span className="text-[#6495ED]">Advantage</span>
              </h3>
              <div className="grid grid-cols-2 gap-8 md:gap-12 mt-12">
                <TextMetrics value="7Yrs" label="Max Tenure" light />
                <TextMetrics value="100+" label="Global Partners" light />
              </div>
            </motion.div>

            <div className="space-y-4">
               {[
                { v: "25%", l: "Short-Term Liquid", i: Zap },
                { v: "40%", l: "Real Estate Assets", i: Landmark },
                { v: "20%", l: "Private Equity", i: LineChart },
               ].map((x, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex justify-between items-center p-6 md:p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#6495ED]/20 text-[#6495ED] flex items-center justify-center">
                      <x.i size={20} />
                    </div>
                    <span className="text-white font-bold text-sm md:text-lg uppercase tracking-wider">{x.l}</span>
                  </div>
                  <span className="text-2xl md:text-4xl font-black text-[#6495ED]">{x.v}</span>
                </motion.div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 text-center px-6">
        <div className="mb-10 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#6495ED] to-[#3B71D8] flex items-center justify-center text-white shadow-xl">
            <Fingerprint size={42} />
          </div>
        </div>

        <h3 className="font-black text-[clamp(2.2rem,6vw,4.5rem)] tracking-tight mb-12">
          Secure Your <br />
          <span className="text-[#6495ED]">Legacy Today</span>
        </h3>

        <button
          onClick={() => navigate("/contact")}
          className="px-14 py-7 rounded-full bg-[#0B1B3A] text-white font-black tracking-wide flex items-center gap-4 mx-auto hover:shadow-2xl transition"
        >
          Start Journey <ArrowRight size={22} />
        </button>
      </section>
    </div>
  );
}

/* ================= SUB COMPONENTS ================= */

function Card({ icon, title, desc, span }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className={`${span} p-8 md:p-12 bg-white rounded-[2.5rem] border border-[#E4ECFF] transition shadow-sm hover:shadow-xl`}
    >
      <div className="w-16 h-16 rounded-2xl bg-[#F0F5FF] text-[#6495ED] flex items-center justify-center mb-8">
        {React.cloneElement(icon, { size: 26 })}
      </div>

      <h4 className="font-black text-xl md:text-2xl tracking-tight mb-4">
        {title}
      </h4>
      <p className="text-[#5B6E99] text-[15px] md:text-[16px] leading-relaxed font-medium">
        {desc}
      </p>

      <div className="mt-6 flex items-center gap-2 text-[#6495ED] text-[10px] tracking-[0.25em] font-bold uppercase">
        Learn More <ChevronRight size={14} />
      </div>
    </motion.div>
  );
  
}
function TextMetrics({ value, label, light }) {
  return (
    <div>
      <span className={`block text-3xl md:text-4xl font-black mb-2 ${light ? "text-white" : "text-ink"}`}>
        {value}
      </span>
      <span className={`text-sm md:text-base font-medium uppercase tracking-wider ${light ? "text-white/70" : "text-ink/70"}`}>
        {label}
      </span>
    </div>
  );
}
