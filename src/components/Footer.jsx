"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone, ShieldCheck, Globe } from "lucide-react";
import logo from "../assets/FIP.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 px-4 md:px-6 pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 mb-24">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-5 space-y-10">
            <img src={logo} alt="FIP Consultancy" className="h-10 md:h-12 object-contain" />
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-slate-950 leading-tight">
              Architecting <span className="text-blue-600">Financial Legacy</span> <br /> 
              Through Institutional Precision.
            </h2>
            <div className="flex flex-wrap gap-6 pt-4">
               <TrustIndicator icon={<ShieldCheck size={14}/>} text="Certified Advisory" />
               <TrustIndicator icon={<Globe size={14}/>} text="Global Coverage" />
            </div>
          </div>

          {/* LINKS GRID */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <FooterHeader title="Ecosystem" />
              <ul className="space-y-4">
                <FooterLink label="Finance" to="/finance" />
                <FooterLink label="Investments" to="/investments" />
                <FooterLink label="Property" to="/property" />
                <FooterLink label="About" to="/about" />
              </ul>
            </div>

            <div className="hidden md:block">
              <FooterHeader title="Services" />
              <ul className="space-y-4 text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                <li className="hover:text-blue-600 transition-colors cursor-default">Debt Structuring</li>
                <li className="hover:text-blue-600 transition-colors cursor-default">Asset Allocation</li>
                <li className="hover:text-blue-600 transition-colors cursor-default">Risk Governance</li>
                <li className="hover:text-blue-600 transition-colors cursor-default">Yield Optimization</li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <FooterHeader title="HQ Terminals" />
              <div className="space-y-6 text-[11px] font-bold text-slate-500 leading-relaxed tracking-wide">
                <ContactItem icon={<MapPin size={16}/>} text="Executive Financial District, Mumbai" />
                <ContactItem icon={<Phone size={16}/>} text="+91 00000 00000" />
                <ContactItem icon={<Mail size={16}/>} text="advisory@fipwealth.com" />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">
            © {year} FIP Consultancy • Institutional Grade
          </div>
          
          <div className="flex items-center gap-10">
            {["Privacy Protocol", "Legal Disclaimer", "Compliance"].map((item) => (
              <span key={item} className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-blue-600 cursor-pointer transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ================= SUB-COMPONENTS ================= */

function FooterHeader({ title }) {
  return (
    <h3 className="text-[10px] uppercase tracking-[0.5em] font-black text-blue-600 mb-8">
      {title}
    </h3>
  );
}

function FooterLink({ label, to }) {
  return (
    <li>
      <Link
        to={to}
        className="flex items-center gap-2 text-slate-500 hover:text-slate-950 transition-all group"
      >
        <span className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] font-black">
          {label}
        </span>
        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
      </Link>
    </li>
  );
}

function ContactItem({ icon, text }) {
  return (
    <div className="flex gap-4 group cursor-pointer">
      <div className="text-blue-600 shrink-0 group-hover:scale-110 transition-transform">{icon}</div>
      <span className="group-hover:text-slate-950 transition-colors">{text}</span>
    </div>
  );
}

function TrustIndicator({ icon, text }) {
   return (
      <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-xl border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-500">
         <span className="text-blue-600">{icon}</span>
         {text}
      </div>
   );
}