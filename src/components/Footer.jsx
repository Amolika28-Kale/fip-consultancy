"use client";
import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import logo from "../assets/FIP.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-200 px-6 pt-24 pb-14">
      <div className="max-w-7xl mx-auto">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 mb-20">

          {/* BRAND */}
          <div className="space-y-7">
            <img src={logo} alt="FIP Consultancy" className="h-9" />
            <p className="text-[11px] text-slate-500 leading-relaxed uppercase tracking-[0.2em] font-semibold">
              Trusted advisory for finance, investment & property.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#0B2C6F] mb-8">
              Navigation
            </h3>
            <ul className="space-y-4">
              <FooterLink label="Finance Advisory" to="/finance" />
              <FooterLink label="Investment Strategy" to="/investments" />
              <FooterLink label="Property Advisory" to="/property" />
              <FooterLink label="About FIP" to="/about" />
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#0B2C6F] mb-8">
              Services
            </h3>
            <ul className="space-y-3 text-[11px] text-slate-500 font-semibold">
              {[
                "Personal Finance",
                "Business Loans",
                "Asset Funding",
                "Property Capital",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.4em] font-black text-[#0B2C6F] mb-8">
              Contact
            </h3>
            <div className="space-y-5 text-[11px] text-slate-500 font-semibold">
              <div className="flex gap-3">
                <MapPin size={14} />
                <span>Executive Financial District</span>
              </div>
              <div className="flex gap-3">
                <Phone size={14} />
                <span>+91 00000 00000</span>
              </div>
              <div className="flex gap-3">
                <Mail size={14} />
                <span>advisory@fipwealth.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">
          <p>© {year} FIP Consultancy</p>
          <div className="flex gap-8">
            <span className="hover:text-blue-600 cursor-pointer">Privacy</span>
            <span className="hover:text-blue-600 cursor-pointer">Disclaimer</span>
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
        className="flex items-center justify-between text-slate-500 hover:text-blue-700 transition"
      >
        <span className="uppercase tracking-[0.25em] text-[10px] font-bold">
          {label}
        </span>
        <ArrowUpRight size={14} />
      </Link>
    </li>
  );
}
