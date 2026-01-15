"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  Landmark,
  BadgePercent,
  ArrowRight,
  FileCheck,
  Coins,
  BarChart3,
  Settings,
  CheckCircle2
} from "lucide-react";

/* ================= ANIMATIONS ================= */
const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const perspectiveReveal = {
  hidden: { opacity: 0, y: 40, rotateX: -12, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.45 } }
};

export default function Finance() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F5F8FF] text-slate-900 overflow-x-hidden pt-20 md:pt-28">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[80vh] bg-white border-b border-[#E3ECFF] flex items-center overflow-hidden px-6">

        {/* Ambient Glows */}
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, 25, 0], opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[700px] h-[700px] bg-[#6495ED33] blur-[140px] rounded-full"
        />
        <motion.div
          animate={{ x: [0, -30, 0], y: [0, -20, 0], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-160px] right-[-120px] w-[600px] h-[600px] bg-[#EEF4FF] blur-[160px] rounded-full"
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >

            <motion.div
              variants={perspectiveReveal}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-[2px] w-14 bg-[#6495ED] rounded-full" />
              {/* <span className="uppercase text-[11px] tracking-[0.35em] font-black text-[#6495ED]">
                Institutional Liquidity
              </span> */}
            </motion.div>

            <motion.h1
              variants={perspectiveReveal}
              className="text-6xl sm:text-8xl md:text-9xl font-black leading-[0.95] tracking-tight mb-10"
            >
              Structured <br />
              <span className="text-[#6495ED] ">Capital.</span>
            </motion.h1>

            <motion.p
              variants={perspectiveReveal}
              className="max-w-3xl text-lg sm:text-xl md:text-2xl text-slate-500 font-medium mb-14"
            >
              Institutional-grade funding mechanisms designed for scalable growth,
              governed by compliance and asset-backed certainty.
            </motion.p>

            <motion.div variants={perspectiveReveal}>
              <button
                onClick={() => navigate("/contact")}
                className="group flex items-center gap-5 bg-slate-950 text-white px-14 py-7 rounded-2xl font-black tracking-widest hover:bg-[#6495ED] transition-all shadow-2xl"
              >
                REQUEST PROPOSAL
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section className="py-28 md:py-36 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-5xl md:text-8xl font-black tracking-tight">
              Capabilities
            </h2>
            <p className="mt-6 text-xl text-slate-500">
              Precision-engineered liquidity solutions.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-2 gap-10"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Personal & Secured Loans",
                icon: <Coins size={32} />,
                desc: "Fast-track liquidity with digital-first approval workflows.",
                items: ["Up to ₹10 Lakhs", "7 Year Tenure", "Quick Sanction"],
                theme: "light"
              },
              {
                title: "Business & Project Finance",
                icon: <Briefcase size={32} />,
                desc: "Growth-aligned funding for enterprises and infrastructure.",
                items: ["₹10L to ₹10Cr", "Structured Capital", "Scalable"],
                theme: "dark"
              },
              {
                title: "Land & Property Finance",
                icon: <Landmark size={32} />,
                desc: "Capital unlocked via asset-backed property lending.",
                items: ["Resi 60% LTV", "Comm 70% LTV", "Short Term"],
                theme: "tint"
              },
              {
                title: "Trade & Asset Finance",
                icon: <BarChart3 size={32} />,
                desc: "Working capital solutions for trade and exports.",
                items: ["Gold Finance", "Export Credit", "Invoice Funding"],
                theme: "vibrant"
              }
            ].map((block, i) => (
              <motion.div
                key={i}
                variants={perspectiveReveal}
                className={`p-14 rounded-[3.5rem] border transition-all hover:-translate-y-2 hover:shadow-2xl ${
                  block.theme === "dark"
                    ? "bg-slate-950 text-white border-slate-800"
                    : block.theme === "vibrant"
                    ? "bg-[#6495ED] text-white border-[#6495ED]"
                    : block.theme === "tint"
                    ? "bg-[#EEF4FF] border-[#E3ECFF]"
                    : "bg-white border-[#E3ECFF]"
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 ${
                    block.theme === "dark" || block.theme === "vibrant"
                      ? "bg-white/10"
                      : "bg-[#EEF4FF] text-[#6495ED]"
                  }`}
                >
                  {block.icon}
                </div>

                <h3 className="text-3xl font-black mb-6">
                  {block.title}
                </h3>

                <p className={`mb-12 text-lg ${
                  block.theme === "dark" || block.theme === "vibrant"
                    ? "text-blue-100"
                    : "text-slate-500"
                }`}>
                  {block.desc}
                </p>

                <div className="grid sm:grid-cols-3 gap-4">
                  {block.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      variants={scaleIn}
                      className={`flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-widest px-4 py-3 rounded-xl ${
                        block.theme === "dark" || block.theme === "vibrant"
                          ? "bg-white/10"
                          : "bg-[#EEF4FF] text-[#6495ED]"
                      }`}
                    >
                      <CheckCircle2 size={12} />
                      {item}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= EXECUTION MODEL ================= */}
      <section className="py-28 md:py-36 bg-[#EEF4FF]">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 mx-auto mb-12 bg-white rounded-full flex items-center justify-center shadow-xl"
          >
            <Settings className="text-[#6495ED]" size={32} />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-8xl font-black mb-24"
          >
            Execution Framework
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={containerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { t: "Requirement", d: "Understanding objectives & liquidity needs.", i: <BarChart3 /> },
              { t: "Verification", d: "KYC, asset & compliance validation.", i: <FileCheck /> },
              { t: "Structuring", d: "Risk-aligned financial engineering.", i: <BadgePercent /> },
              { t: "Deployment", d: "Rapid capital release.", i: <Coins /> }
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-white p-12 rounded-[3rem] border border-[#E3ECFF] hover:shadow-2xl transition-all"
              >
                <div className="text-5xl font-black text-[#6495ED22] mb-6">
                  0{i + 1}
                </div>
                <div className="p-5 mb-6 bg-[#EEF4FF] rounded-2xl text-[#6495ED] inline-block">
                  {step.i}
                </div>
                <h4 className="text-2xl font-black mb-3">{step.t}</h4>
                <p className="text-slate-500 text-sm">{step.d}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-36 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-slate-950 rounded-[4rem] p-20 md:p-28 text-center shadow-2xl"
        >
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-8xl font-black text-white mb-16 leading-tight"
          >
            Capital structured <br />
            with <span className="text-[#6495ED]">absolute clarity.</span>
          </motion.h2>

          <motion.button
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onClick={() => navigate("/contact")}
            className="bg-[#6495ED] hover:bg-white hover:text-slate-900 transition-all px-16 py-8 rounded-2xl font-black tracking-widest shadow-xl"
          >
            SPEAK WITH AN ADVISOR 📞
          </motion.button>
        </motion.div>
      </section>

    </div>
  );
}
