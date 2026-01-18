"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, ShieldCheck, CheckCircle2, CreditCard, Landmark, ArrowRight } from "lucide-react";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerStagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const amount = 499;

  const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_3cI6oJ1t30Jr7b2cNAeZ200";

  const handlePayment = () => {
    window.location.href = STRIPE_PAYMENT_LINK;
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 pt-16 md:pt-0 flex items-center justify-center px-4 md:px-6 overflow-hidden font-sans">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-[-12deg] translate-x-1/4 hidden md:block" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerStagger}
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center py-10"
      >

        {/* ================= LEFT: TRANSACTION SUMMARY ================= */}
        <motion.div variants={fadeUp} className="lg:col-span-7">
          <motion.div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-blue-600" />
            <span className="text-blue-600 text-[9px] md:text-[11px] uppercase tracking-[0.4em] font-black">Transaction Gateway</span>
          </motion.div>

          <h1 className="text-[clamp(2.2rem,6vw,4.5rem)] font-black tracking-tighter leading-[0.9] text-slate-950 mb-8">
            Confirm Your <br />
            <span className="text-blue-600">Consultation.</span>
          </h1>

          <p className="text-slate-500 text-sm md:text-lg font-medium leading-relaxed mb-10 max-w-lg border-l-2 border-slate-100 pl-6">
            Secure your session with a Financial Principal. Professional grade encryption ensures your data remains <span className="text-slate-950 font-bold">confidential.</span>
          </p>

          <div className="grid gap-4 mb-10">
            {[
              "Priority Advisory Callback",
              "Structured ROI Planning",
              "Asset-Backed Strategy"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">
                <CheckCircle2 className="text-blue-600" size={16} />
                {item}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-[2rem] w-fit shadow-sm">
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-blue-600"
            >
              <ShieldCheck size={28} />
            </motion.div>
            <div>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-300">Encryption Standard</p>
              <p className="text-[10px] md:text-xs font-bold text-slate-600">AES-256 Bit Secure Socket Layer</p>
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT: PAYMENT TERMINAL ================= */}
        <motion.div
          variants={fadeUp}
          className="lg:col-span-5 bg-white p-6 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl shadow-blue-900/5 border border-slate-100 relative"
        >
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl font-black tracking-tight text-slate-950">Terminal</h2>
            <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <Lock size={18} />
            </div>
          </div>

          {/* Payment Tabs */}
          <div className="mb-10">
            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4 ml-1">Method Selection</p>
            <div className="grid grid-cols-2 gap-3">
              <PaymentTab 
                active={paymentMethod === "upi"} 
                onClick={() => setPaymentMethod("upi")}
                icon={<CreditCard size={14} />}
                label="UPI" 
              />
              <PaymentTab 
                active={paymentMethod === "netbanking"} 
                onClick={() => setPaymentMethod("netbanking")}
                icon={<Landmark size={14} />}
                label="Banking" 
              />
            </div>
          </div>

          {/* Amount Breakdown */}
          
          <div className="bg-slate-50 rounded-[2rem] p-6 mb-8 space-y-3">
            <div className="flex justify-between text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>Mandate Fee</span>
              <span>₹499.00</span>
            </div>
            <div className="flex justify-between text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">
              <span>Platform Tax</span>
              <span>Included</span>
            </div>
            <div className="h-[1px] bg-slate-200 my-2" />
            <div className="flex justify-between items-end">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Total Payable</span>
              <span className="text-2xl md:text-3xl font-black text-slate-950 tracking-tighter">₹{amount}</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handlePayment}
            className="w-full bg-blue-600 hover:bg-slate-950 text-white py-5 md:py-6 rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.3em] shadow-xl shadow-blue-600/20 transition-all flex items-center justify-center gap-3"
          >
            Authorize Payment <ArrowRight size={16} />
          </motion.button>

          <div className="mt-8 text-center">
            <p className="text-[8px] md:text-[9px] text-slate-300 font-bold uppercase tracking-[0.2em]">
              PCI DSS Compliant • Stripe Secure Network
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ================= SUB-COMPONENTS ================= */

function PaymentTab({ active, onClick, label, icon }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border ${
        active 
        ? "bg-slate-950 text-white border-slate-950 shadow-lg" 
        : "bg-white text-slate-400 border-slate-100 hover:border-blue-600"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}