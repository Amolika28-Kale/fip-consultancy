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
  Lock
} from "lucide-react";
import { useNavigate } from "react-router-dom";

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: "easeOut" }
  }
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: "easeOut" }
  }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.16 } }
};

/* ================= PAGE ================= */

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-[#F6F9FF] text-slate-800 overflow-x-hidden pt-20 selection:bg-[#EAF1FF] selection:text-[#2C4FA3]">

      {/* ================= HERO ================= */}
      <section className="relative bg-white border-b border-[#EAF1FF]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#EAF1FF]/70 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.span
              variants={fadeUp}
              className="inline-block mb-8 px-6 py-2 text-[11px] uppercase tracking-[0.35em] font-bold bg-[#EAF1FF] text-[#2C4FA3] rounded-full border border-[#D6E4FF]"
            >
              Professional Consultation
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8"
            >
              Speak With a{" "}
              <span className="text-[#6495ED]">Financial Principal</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-slate-500 max-w-2xl mx-auto text-base md:text-lg font-medium"
            >
              Expert guidance across finance, investment, and property —
              confidential, structured, and compliant.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-start">

          {/* ================= FORM ================= */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeScale}
            className="relative bg-white rounded-[2.5rem] border border-[#D6E4FF] shadow-2xl shadow-[#EAF1FF] p-10 md:p-14"
          >
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-[#EAF1FF] to-transparent pointer-events-none" />

            <div className="relative">
              <div className="flex items-center gap-2 mb-10">
                <Lock size={14} className="text-[#6495ED]" />
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#6495ED]">
                  Secure Consultation Request
                </p>
              </div>

              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput label="Full Name" placeholder="Your Name" />
                  <FormInput label="Email Address" placeholder="you@email.com" />
                </div>

                <FormInput label="Mobile Number" placeholder="+91 XXXXX XXXXX" />

                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Inquiry Details
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Briefly describe your requirement..."
                    className="w-full border border-[#D6E4FF] bg-[#EAF1FF]/50 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#6495ED] focus:bg-white text-sm resize-none transition-all"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  onClick={() => navigate("/payment")}
                  className="w-full bg-[#6495ED] hover:bg-[#2C4FA3] text-white py-5 rounded-2xl font-bold uppercase tracking-widest shadow-lg shadow-[#EAF1FF] transition-all flex items-center justify-center gap-3"
                >
                  Submit & Proceed — ₹499
                </motion.button>

                <div className="flex flex-wrap justify-center gap-6 opacity-60">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    <ShieldCheck size={12} /> Secure
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    <Lock size={12} /> Confidential
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

          {/* ================= INFO ================= */}
          <div className="space-y-16 lg:pt-10">

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">
                Contact Channels
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                <ContactIconCard
                  icon={<Phone size={20} />}
                  title="Phone Support"
                  info="+91 XXXXX XXXXX"
                  sub="Mon–Sat • 9 AM – 6 PM"
                />
                <ContactIconCard
                  icon={<Mail size={20} />}
                  title="Email Support"
                  info="support@fip.com"
                  sub="24×7 Response"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-[#EAF1FF] shadow-xl shadow-[#EAF1FF]"
            >
              <h3 className="text-2xl font-black mb-10 text-slate-900 tracking-tight">
                The FIP <span className="text-[#6495ED]">Standard</span>
              </h3>

              <ul className="space-y-6">
                <WhyItem icon={<ShieldCheck size={18} />} text="Verified & compliant advisory process" />
                <WhyItem icon={<BarChart3 size={18} />} text="Data-backed financial recommendations" />
                <WhyItem icon={<Zap size={18} />} text="Fast execution & clear timelines" />
                <WhyItem icon={<Users size={18} />} text="Experienced finance & property advisors" />
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-12 bg-white border-t border-[#EAF1FF] text-center px-6">
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">
          ₹499 Consultation Fee • SSL Encrypted • FIP Consultancy
        </p>
      </footer>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function FormInput({ label, placeholder }) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="w-full border border-[#D6E4FF] bg-[#EAF1FF]/50 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#6495ED] focus:bg-white text-sm transition-all"
      />
    </div>
  );
}

function ContactIconCard({ icon, title, info, sub }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-3xl border border-[#EAF1FF] shadow-sm hover:shadow-2xl hover:shadow-[#EAF1FF] transition-all group"
    >
      <div className="text-[#6495ED] mb-4 p-3 bg-[#EAF1FF] w-fit rounded-xl group-hover:bg-[#6495ED] group-hover:text-white transition-all">
        {icon}
      </div>
      <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400 mb-1">
        {title}
      </p>
      <p className="text-lg font-black text-slate-900 mb-1 tracking-tight">
        {info}
      </p>
      <p className="text-[11px] font-medium text-slate-500">
        {sub}
      </p>
    </motion.div>
  );
}

function WhyItem({ icon, text }) {
  return (
    <motion.li
      variants={fadeUp}
      className="flex items-center gap-4 text-sm text-slate-600 font-bold group"
    >
      <div className="text-[#6495ED] shrink-0 p-1.5 bg-[#EAF1FF] rounded-lg">
        {icon}
      </div>
      <span className="group-hover:text-[#2C4FA3] transition-colors">
        {text}
      </span>
    </motion.li>
  );
}
