"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  ShieldCheck,
  Zap,
  BarChart3,
  Users,
  Lock,
  ArrowRight,
  Headphones
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const containerStagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

/* ================= PAGE ================= */

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#FDFDFD] text-slate-900 overflow-x-hidden pt-16 md:pt-24 font-sans selection:bg-blue-600 selection:text-white">

      {/* ================= HERO (ASYMMETRIC) ================= */}
      <section className="relative min-h-[50vh] flex items-center px-4 md:px-6 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute top-0 right-0 w-full md:w-1/3 h-full bg-slate-50 -z-10 skew-x-[-12deg] translate-x-1/4 hidden md:block" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div initial="hidden" animate="visible" variants={containerStagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <span className="w-8 md:w-12 h-[1px] bg-blue-600" />
              <span className="text-blue-600 text-[9px] md:text-[11px] uppercase tracking-[0.4em] font-black">Professional Intake</span>
            </motion.div>

            <motion.h1 
              variants={fadeUp}
              className="text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.9] font-black tracking-tighter text-slate-950 mb-8"
            >
              Consult a <br />
              <span className="text-blue-600">Principal.</span>
            </motion.h1>

            <motion.p 
              variants={fadeUp}
              className="max-w-xl text-slate-500 font-medium leading-relaxed text-sm md:text-lg border-l-2 border-blue-600 pl-5 md:pl-6"
            >
              Direct access to professional guidance across finance and property ecosystems. 
              Confidential, structured, and compliant.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 md:gap-20 items-start">

          {/* ================= SECURE FORM (BENTO BOX) ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="lg:col-span-7 bg-white rounded-[2.5rem] md:rounded-[3.5rem] border border-slate-100 shadow-2xl shadow-blue-900/5 p-8 md:p-14 relative overflow-hidden"
          >
            {/* Visual Progress Header */}
            <div className="flex justify-between items-center mb-10 md:mb-12 border-b border-slate-50 pb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                  <Lock size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">Step 01/02</p>
                  <h3 className="text-lg md:text-xl font-black text-slate-950 tracking-tight">Intake Details</h3>
                </div>
              </div>
              <div className="hidden sm:block text-right">
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-300 mb-1">Status</p>
                <p className="text-[10px] font-black text-green-500 flex items-center gap-1">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> Encrypted Session
                </p>
              </div>
            </div>

            <form className="space-y-6 md:space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <FormInput label="Full Name" placeholder="Full legal name" />
                <FormInput label="Email Address" placeholder="Institutional email" />
              </div>

              <FormInput label="Mobile Number" placeholder="+91 XXXXX XXXXX" />

              <div className="space-y-3">
                <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  Requirement Brief
                </label>
                <textarea
                  rows="4"
                  placeholder="Describe your inquiry (Investment, Loan, or Property)..."
                  className="w-full border border-slate-100 bg-slate-50/50 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-xs md:text-sm resize-none transition-all placeholder:text-slate-300"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate("/payment")}
                className="w-full bg-slate-950 text-white py-5 md:py-6 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.3em] shadow-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-3"
              >
                Continue to Payment — ₹499 <ArrowRight size={16} />
              </motion.button>

              <div className="flex justify-center gap-8 pt-4">
                <TrustBadge icon={<ShieldCheck size={14}/>} text="SSL Protected" />
                <TrustBadge icon={<Users size={14}/>} text="Expert Review" />
              </div>
            </form>
          </motion.div>

          {/* ================= SIDEBAR INFO ================= */}
          <div className="lg:col-span-5 space-y-10 md:space-y-12">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerStagger}>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 md:mb-8">Support Channels</h4>
              <div className="grid gap-4">
                <ContactCard 
                  icon={<Headphones />} 
                  title="Direct Line" 
                  val="+91 XXXXX XXXXX" 
                  sub="Mon–Sat • Priority Support"
                />
                <ContactCard 
                  icon={<Mail />} 
                  title="Documentation" 
                  val="support@fip.com" 
                  sub="24h Response SLA"
                />
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100"
            >
              <h4 className="text-xl font-black mb-8 tracking-tight">The FIP <span className="text-blue-600">Assurance</span></h4>
              <ul className="space-y-5">
                <WhyItem text="Strict confidential handling of all data" />
                <WhyItem text="Direct interaction with domain principals" />
                <WhyItem text="Structured 48-hour response protocol" />
                <WhyItem text="Compliant financial documentation" />
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-12 bg-white border-t border-slate-100 text-center px-4">
        <p className="text-[9px] md:text-[10px] text-slate-300 font-bold uppercase tracking-[0.3em]">
          Certified Consultation • FIP Consultancy Group • 2026
        </p>
      </footer>
    </div>
  );
}

/* ================= SUB-COMPONENTS ================= */

function FormInput({ label, placeholder }) {
  return (
    <div className="space-y-2">
      <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full border border-slate-100 bg-slate-50/50 rounded-2xl px-5 py-4 md:py-5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-xs md:text-sm transition-all placeholder:text-slate-300"
      />
    </div>
  );
}

function ContactCard({ icon, title, val, sub }) {
  return (
    <motion.div 
      variants={fadeUp}
      whileHover={{ x: 5 }}
      className="flex items-center gap-6 p-6 rounded-[2rem] bg-white border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all group"
    >
      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
        {React.cloneElement(icon, { size: 20 })}
      </div>
      <div>
        <p className="text-[9px] font-black uppercase tracking-widest text-slate-300 mb-0.5">{title}</p>
        <p className="text-sm md:text-base font-black text-slate-900 tracking-tight">{val}</p>
        <p className="text-[10px] font-bold text-slate-400">{sub}</p>
      </div>
    </motion.div>
  );
}

function WhyItem({ text }) {
  return (
    <li className="flex items-center gap-4 text-[11px] md:text-xs font-bold text-slate-500">
      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full shrink-0" />
      {text}
    </li>
  );
}

function TrustBadge({ icon, text }) {
  return (
    <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-300">
      {React.cloneElement(icon, { size: 12 })}
      {text}
    </div>
  );
}