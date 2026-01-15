"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, ShieldCheck, CheckCircle2 } from "lucide-react";

/* ================= ANIMATIONS ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const scaleSoft = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const amount = 499;

  const STRIPE_PAYMENT_LINK =
    "https://buy.stripe.com/test_3cI6oJ1t30Jr7b2cNAeZ200";

  const handlePayment = () => {
    window.location.href = STRIPE_PAYMENT_LINK;
  };

  return (
    <div className="min-h-screen bg-[#F6F9FF] text-slate-800 flex items-center justify-center px-6 selection:bg-[#EAF1FF] selection:text-[#2C4FA3]">
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24"
      >

        {/* ================= LEFT CONTENT ================= */}
        <motion.div variants={fadeRight} className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-8 w-1.5 bg-[#6495ED] rounded-full" />
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              FIP <span className="text-[#6495ED]">Consultancy</span>
            </h1>
          </div>

          <p className="text-slate-500 text-lg mb-10 max-w-lg leading-relaxed font-medium">
            Confirm your professional consultation. You will be redirected to
            <strong className="text-[#2C4FA3]">
              {" "}Stripe’s 256-bit secure checkout
            </strong>{" "}
            for a seamless experience.
          </p>

          <div className="space-y-4 border-l-2 border-[#D6E4FF] pl-8">
            {[
              "Instant Finance & Loan Advisory",
              "Investment Opportunities & ROI Planning",
              "Property Buy & Sell Consultation",
              "Professional Financial Structuring",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-center gap-3 text-slate-700 font-semibold"
              >
                <CheckCircle2
                  className="text-[#6495ED]"
                  size={18}
                />
                {item}
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={scaleSoft}
            className="mt-12 flex items-center gap-4 p-4 bg-white rounded-2xl border border-[#EAF1FF] w-fit shadow-sm"
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ShieldCheck className="text-[#6495ED]" size={24} />
            </motion.div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Security Standard
              </p>
              <p className="text-xs font-bold text-slate-600">
                Encrypted • Certified • Private
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT PAYMENT CARD ================= */}
        <motion.div
          variants={fadeLeft}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-[#EAF1FF] border border-[#D6E4FF] relative overflow-hidden"
        >
          {/* Background Glow */}
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-0 right-0 w-40 h-40 bg-[#87AFFF]/30 blur-3xl -z-10 rounded-full"
          />

          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl font-black text-slate-900 tracking-tight">
              Checkout Details
            </h2>
            <div className="bg-[#EAF1FF] p-2 rounded-lg">
              <Lock size={18} className="text-[#6495ED]" />
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-10">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-5 block">
              Select Payment Method
            </label>

            <div className="grid grid-cols-2 gap-4">
              {["upi", "netbanking"].map((method) => (
                <motion.button
                  key={method}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setPaymentMethod(method)}
                  className={`py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all border-2 ${
                    paymentMethod === method
                      ? "bg-[#6495ED] text-white border-[#6495ED] shadow-lg"
                      : "bg-white border-[#D6E4FF] text-slate-500 hover:border-[#6495ED]"
                  }`}
                >
                  {method === "upi" ? "UPI" : "Net Banking"}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Amount */}
          <motion.div variants={scaleSoft} className="bg-[#EAF1FF]/60 rounded-3xl p-6 mb-8 border border-[#D6E4FF]">
            <div className="flex justify-between text-slate-500 text-sm mb-2">
              <span>Consultation Fee</span>
              <span>₹499</span>
            </div>
            <div className="flex justify-between text-slate-500 text-sm mb-4">
              <span>GST (Included)</span>
              <span>₹0</span>
            </div>
            <div className="h-px bg-[#D6E4FF] mb-4" />
            <div className="flex justify-between text-xl font-black text-slate-900">
              <span>Total Payable</span>
              <span className="text-[#6495ED]">₹{amount}</span>
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={handlePayment}
            className="w-full bg-[#6495ED] hover:bg-[#2C4FA3] text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl transition-all"
          >
            Pay Now • ₹{amount}
          </motion.button>

          <div className="mt-8 text-center">
            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em]">
              Powered by Stripe Secure Checkout
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
