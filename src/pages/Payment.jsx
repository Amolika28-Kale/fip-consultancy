"use client";
import React, { useState } from "react";
import { Lock, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Payment() {
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const amount = 499;

  const STRIPE_PAYMENT_LINK =
    "https://buy.stripe.com/test_3cI6oJ1t30Jr7b2cNAeZ200"; // Stripe Test Link

  const handlePayment = () => {
    window.location.href = STRIPE_PAYMENT_LINK;
  };

  return (
    <div className="min-h-screen bg-[#FAF9FF] text-slate-800 flex items-center justify-center px-6 selection:bg-purple-100">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

        {/* ================= LEFT CONTENT ================= */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-8 w-1.5 bg-purple-600 rounded-full" />
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              FIP <span className="text-purple-600">Consultancy</span>
            </h1>
          </div>

          <p className="text-slate-500 text-lg mb-10 max-w-lg leading-relaxed font-medium">
            Confirm your professional consultation. You will be redirected to
            <strong className="text-purple-700"> Stripe’s 256-bit secure checkout</strong> for a seamless experience.
          </p>

          <div className="space-y-4 border-l-2 border-purple-100 pl-8">
            {[
              "Instant Finance & Loan Advisory",
              "Investment Opportunities & ROI Planning",
              "Property Buy & Sell Consultation",
              "Professional Financial Structuring",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-slate-700 font-semibold group">
                <CheckCircle2 className="text-purple-500 group-hover:scale-110 transition-transform" size={18} />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-4 p-4 bg-white rounded-2xl border border-purple-50 w-fit shadow-sm">
            <ShieldCheck className="text-purple-600" size={24} />
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Security Standard</p>
                <p className="text-xs font-bold text-slate-600">Encrypted • Certified • Private</p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT PAYMENT CARD ================= */}
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-purple-100/50 border border-purple-50 relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100/30 blur-3xl -z-10 rounded-full" />
          
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-xl font-black text-slate-900 tracking-tight">
              Checkout Details
            </h2>
            <div className="bg-purple-50 p-2 rounded-lg">
                <Lock size={18} className="text-purple-600" />
            </div>
          </div>

          {/* Payment Method Selector */}
          <div className="mb-10">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-5 block">
              Select Payment Method
            </label>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setPaymentMethod("upi")}
                className={`py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all duration-300 border-2 ${
                  paymentMethod === "upi"
                    ? "bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-200"
                    : "bg-white border-purple-50 text-slate-500 hover:border-purple-200"
                }`}
              >
                UPI
              </button>

              <button
                onClick={() => setPaymentMethod("netbanking")}
                className={`py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all duration-300 border-2 ${
                  paymentMethod === "netbanking"
                    ? "bg-purple-600 text-white border-purple-600 shadow-lg shadow-purple-200"
                    : "bg-white border-purple-50 text-slate-500 hover:border-purple-200"
                }`}
              >
                Net Banking
              </button>
            </div>
          </div>

          {/* Amount Breakdown */}
          <div className="bg-purple-50/50 rounded-3xl p-6 mb-8 border border-purple-50">
            <div className="flex justify-between items-center text-slate-500 text-sm mb-2">
              <span>Consultation Fee</span>
              <span>₹499</span>
            </div>
            <div className="flex justify-between items-center text-slate-500 text-sm mb-4">
              <span>GST (Included)</span>
              <span>₹0</span>
            </div>
            <div className="h-px bg-purple-100 w-full mb-4" />
            <div className="flex justify-between items-center text-xl font-black text-slate-900">
              <span>Total Payable</span>
              <span className="text-purple-600">₹{amount}</span>
            </div>
          </div>

          <button
            onClick={handlePayment}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-5 rounded-2xl font-black uppercase tracking-widest shadow-xl shadow-purple-200 transition-all active:scale-[0.98]"
          >
            Pay Now • ₹{amount}
          </button>

          <div className="mt-8 flex flex-col items-center gap-3">
            <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.2em]">
              Powered by Stripe Secure Checkout
            </p>
            <div className="flex gap-4 grayscale opacity-40">
                <div className="h-4 w-8 bg-slate-300 rounded" />
                <div className="h-4 w-8 bg-slate-300 rounded" />
                <div className="h-4 w-8 bg-slate-300 rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}