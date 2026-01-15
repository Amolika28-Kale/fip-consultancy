"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/FIP.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-[#D6E4FF] px-6 pt-24 pb-14 overflow-hidden selection:bg-[#EAF1FF]">

      {/* Soft Cornflower Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#EAF1FF]/60 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-20 mb-24">

          {/* BRAND */}
          <div className="space-y-8">
            <img src={logo} alt="FIP Consultancy" className="h-9 object-contain" />
            <p className="text-[10px] leading-relaxed uppercase tracking-[0.25em] font-bold text-slate-400">
              Trusted advisory for finance, investment & property — built on
              transparency, discipline, and long-term wealth creation.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#2C4FA3] mb-9">
              Quick Navigation
            </h3>
            <ul className="space-y-5">
              <FooterLink label="Finance Advisory" to="/finance" />
              <FooterLink label="Investment Tiers" to="/investments" />
              <FooterLink label="Property Solutions" to="/property" />
              <FooterLink label="Our Foundation" to="/about" />
            </ul>
          </div>

          {/* CAPITAL */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-800 mb-9">
              Capital Avenues
            </h3>
            <ul className="space-y-4 text-[11px] text-slate-500 font-semibold">
              {[
                "Personal Loans",
                "Business Finance",
                "Land & Property Funding",
                "Gold & Trade Finance",
                "Export Liquidity",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D6E4FF] group-hover:bg-[#6495ED] transition-all" />
                  <span className="group-hover:text-[#2C4FA3] transition-colors tracking-wide">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-800 mb-9">
              Get In Touch
            </h3>

            <div className="space-y-6 text-[11px] text-slate-500 font-bold">
              <div className="flex gap-4 group">
                <MapPin size={14} className="text-[#6495ED]" />
                <span className="uppercase tracking-widest">
                  Financial District<br />Executive Office
                </span>
              </div>
              <div className="flex gap-4">
                <Phone size={14} className="text-[#6495ED]" />
                <span>+91 00000 00000</span>
              </div>
              <div className="flex gap-4">
                <Mail size={14} className="text-[#6495ED]" />
                <span>advisory@fipwealth.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#D6E4FF] to-transparent mb-12" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] uppercase tracking-[0.3em] font-black text-slate-400">
          <p>© {year} FIP Consultancy — Finance | Investment | Property</p>
          <div className="flex gap-10">
            <span className="hover:text-[#6495ED] cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#6495ED] cursor-pointer">Disclaimer</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

function FooterLink({ label, to }) {
  return (
    <li>
      <Link
        to={to}
        className="flex items-center justify-between group text-slate-400 hover:text-[#2C4FA3] transition-colors"
      >
        <span className="uppercase tracking-[0.25em] text-[10px] font-black group-hover:translate-x-1 transition-transform">
          {label}
        </span>
        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 text-[#6495ED]" />
      </Link>
    </li>
  );
}
