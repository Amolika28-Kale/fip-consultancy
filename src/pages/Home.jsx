"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring, useTransform, useInView } from "framer-motion";
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
  hidden: { opacity: 0, y: 40 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: d, duration: 0.8, ease },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } },
};

export default function Home() {
  const navigate = useNavigate();
  const [bg, setBg] = useState(0);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  
  // Parallax for Hero Text
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  // Floating animation for ambient glows
  const glowFloat = {
    y: [0, -20, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  };

  useEffect(() => {
    const i = setInterval(() => setBg((v) => (v + 1) % bgImages.length), 7000);
    return () => clearInterval(i);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#EEF4FF] font-inter text-[#0B1B3A] selection:bg-[#6495ED] selection:text-white">
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#6495ED] to-[#A5C4FF] origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={bg}
            className="absolute inset-0 bg-cover bg-center"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.15, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            style={{ backgroundImage: `url(${bgImages[bg]})` }}
          />
        </AnimatePresence>

        {/* Ambient Glows with Floating Animation */}
        <motion.div
          className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#6495ED]/10 blur-[120px] rounded-full"
          animate={glowFloat}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#6495ED]/10 blur-[100px] rounded-full"
          animate={{ ...glowFloat, transition: { ...glowFloat.transition, delay: 2 } }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#EEF4FF]/20 via-[#EEF4FF]/60 to-[#EEF4FF]" />

        <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
          <motion.div style={{ y: heroY }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/20 text-[#6495ED] text-[10px] font-black tracking-[0.3em] shadow-sm"
            >
              <ShieldCheck size={14} /> AUTHORIZED FINANCIAL GROUP
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-[clamp(3.5rem,10vw,8rem)] font-black leading-[0.85] tracking-tighter mb-10"
            >
              <motion.span variants={fadeUp} className="block">FIP</motion.span>
              <motion.span variants={fadeUp} className="block text-[#6495ED] ">CONSULTANCY</motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="max-w-xl text-xl text-[#5B6E99] mb-12 leading-relaxed border-l-2 border-[#6495ED]/30 pl-8"
            >
              A high-performance financial ecosystem delivering structured
              capital solutions and institutional-grade management.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -15px rgba(100, 149, 237, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact")}
                className="px-12 py-6 bg-[#6495ED] text-white rounded-2xl font-black tracking-wider flex items-center gap-3 shadow-xl transition-all"
              >
                CONSULT NOW <ArrowRight size={20} />
              </motion.button>

              <motion.button
                whileHover={{ backgroundColor: "rgba(220, 232, 255, 1)" }}
                onClick={() => navigate("/about")}
                className="px-12 py-6 rounded-2xl border-2 border-[#C7D9FF] font-black tracking-wider text-[#0B1B3A] transition-colors"
              >
                OUR MODEL
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-40">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-6xl md:text-7xl font-black tracking-tight leading-none"
          >
            Precision <span className="font-thin text-[#5B6E99] italic">&</span>
            <br />
            <span className="text-[#6495ED]">Capital Delivery</span>
          </motion.h2>
          <motion.div 
             initial={{ opacity: 0 }} 
             whileInView={{ opacity: 1 }}
             className="text-[#5B6E99] font-medium max-w-xs text-right hidden md:block"
          >
            Providing the fuel for industrial expansion and private wealth growth.
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-12 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <Card span="md:col-span-7" icon={<Rocket />} title="Project Finance" desc="Strategic capital infusion up to ₹10 Crores for scalable ventures." />
          <Card span="md:col-span-5" icon={<HomeIcon />} title="Retail Loans" desc="Unsecured funding up to ₹10 Lakhs with streamlined approval." />
          <Card span="md:col-span-5" icon={<Landmark />} title="Asset Backed" desc="Sophisticated property-driven liquidity frameworks." />
          <Card span="md:col-span-7" icon={<Globe />} title="Global Trade" desc="Institutional gold & export finance for cross-border operations." />
        </motion.div>
      </section>

      {/* ================= PERFORMANCE ================= */}
      <section className="bg-white rounded-[3rem] md:rounded-[5rem] mx-4 py-32 md:py-48 shadow-2xl shadow-blue-900/5">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInLeft}
          >
            <h3 className="text-6xl md:text-8xl font-black leading-[0.85] mb-16">
              The FIP <br />
              <span className="text-[#6495ED] tracking-tighter">Performance</span>
            </h3>

            <motion.div
              className="grid grid-cols-2 gap-12 border-t border-[#EEF4FF] pt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <Metric value="7Yrs" label="Max Tenure" />
              <Metric value="100+" label="Strategic Partners" />
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInRight}
          >
            {[
              { v: "25%", l: "Short-Term Liquid", i: Zap },
              { v: "40%", l: "Real Estate Assets", i: Landmark },
              { v: "10%", l: "Rental Yields", i: HomeIcon },
              { v: "20%", l: "Private Equity", i: LineChart },
            ].map((x, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 12, backgroundColor: "#F8FAFF", scale: 1.02 }}
                className="group flex justify-between items-center p-8 bg-[#EEF4FF]/50 rounded-[2rem] border border-[#DCE8FF] transition-all"
              >
                <div className="flex items-center gap-6">
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:text-[#6495ED] transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <x.i size={24} />
                  </motion.div>
                  <span className="text-xl font-bold tracking-tight">{x.l}</span>
                </div>
                <motion.span
                  className="text-4xl font-black text-[#6495ED]"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.3, type: "spring", stiffness: 200 }}
                >
                  {x.v}
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-48 overflow-hidden">
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
            <Fingerprint size={800} />
        </motion.div>
        
        <div className="relative text-center px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="mb-12 inline-block p-6 rounded-full bg-[#6495ED]/10 text-[#6495ED]"
          >
            <Fingerprint size={60} />
          </motion.div>
          
          <motion.h4 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-6xl md:text-9xl font-black mb-16 tracking-tighter"
          >
            Secure Your <br />
            <span className="text-[#5B6E99]">Legacy</span>
          </motion.h4>

          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/contact")}
            className="group px-16 py-8 bg-[#0B1B3A] text-white rounded-full text-xl font-black hover:bg-[#6495ED] transition-all shadow-2xl flex items-center gap-4 mx-auto"
          >
            START JOURNEY 
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={24} />
          </motion.button>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="py-16 border-t border-[#DCE8FF] bg-white/50 backdrop-blur-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10px] font-black tracking-[0.4em] text-[#0B1B3A]">
                FIP CONSULTANCY GROUP
            </div>
            <div className="text-[10px] tracking-[0.2em] text-[#5B6E99] uppercase">
                © 2026 — Institutional Grade Advisory. All Rights Reserved.
            </div>
        </div>
      </motion.footer>
    </div>
  );
}

/* ================= SUB-COMPONENTS ================= */

function Card({ icon, title, desc, span }) {
  const cardRef = useRef(null);
  const isHovered = useInView(cardRef);

  return (
    <motion.div
      ref={cardRef}
      variants={fadeUp}
      whileHover={{ y: -12, transition: { duration: 0.4, ease: "easeOut" }, scale: 1.02 }}
      className={`${span} relative group p-12 bg-white rounded-[3.5rem] border border-[#DCE8FF] hover:border-[#6495ED]/30 transition-colors shadow-xl shadow-blue-900/[0.02] overflow-hidden`}
    >
      {/* Glossy Overlay */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#6495ED]/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-[#6495ED]/10 transition-colors" />
      
      <motion.div
        className="w-20 h-20 rounded-[2rem] bg-[#EEF4FF] text-[#6495ED] flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-[#6495ED] group-hover:text-white transition-all duration-500"
        whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
      >
        {React.cloneElement(icon, { size: 32 })}
      </motion.div>
      
      <h3 className="text-3xl font-black mb-4 tracking-tight">{title}</h3>
      <p className="text-[#5B6E99] text-lg mb-12 leading-relaxed font-medium">{desc}</p>
      
      <div className="flex items-center gap-3 text-[#6495ED] text-xs font-black tracking-[0.2em]">
        LEARN MORE <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}

function Metric({ value, label }) {
  return (
    <motion.div
        variants={fadeUp}
    >
      <motion.div
        className="text-6xl font-black mb-3 tracking-tighter text-[#0B1B3A]"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {value}
      </motion.div>
      <div className="text-[10px] tracking-[0.3em] font-black text-[#6495ED] uppercase">
        {label}
      </div>
    </motion.div>
  );
}

const bgImages = [
  // "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=1974&auto=format&fit=crop",
  // "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  // "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2073&auto=format&fit=crop",
];