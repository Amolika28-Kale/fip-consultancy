"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/FIP.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ["Home", "Finance", "Investments", "Property", "About"];

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-700 ease-in-out ${
        scrolled ? "py-4" : "py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav
          className={`relative flex items-center justify-between px-8 py-4 transition-all duration-500 rounded-[2rem] ${
            scrolled
              ? "bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)]"
              : "bg-transparent"
          }`}
        >
          {/* BRANDING */}
          <NavLink to="/" className="relative z-[110] transition-transform duration-500 hover:scale-105">
            <img 
              src={logo} 
              alt="FIP" 
              className={`transition-all duration-500 ${scrolled ? "h-7" : "h-9"}`} 
            />
          </NavLink>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) => `
                  relative text-[10px] uppercase tracking-[0.3em] font-black transition-all duration-300
                  ${isActive ? "text-blue-600" : "text-slate-500 hover:text-blue-600"}
                  group
                `}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100" />
              </NavLink>
            ))}
          </div>

          {/* ACTION BUTTON */}
          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className={`
                group flex items-center gap-3 px-8 py-3 rounded-xl
                text-[9px] uppercase tracking-[0.25em] font-black transition-all duration-500
                ${scrolled 
                  ? "bg-[#1E293B] text-white hover:bg-blue-600 shadow-lg" 
                  : "bg-white text-[#1E293B] hover:bg-blue-600 hover:text-white shadow-md"
                }
              `}
            >
              Consultancy <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden relative z-[110] p-2" 
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={24} className="text-white transition-colors" />
            ) : (
              <div className="space-y-1.5">
                <div className={`w-6 h-0.5 transition-all ${scrolled ? "bg-slate-900" : "bg-slate-800"}`} />
                <div className={`w-4 h-0.5 transition-all ${scrolled ? "bg-slate-900" : "bg-slate-800"}`} />
              </div>
            )}
          </button>
        </nav>
      </div>

      {/* FULL-SCREEN MOBILE OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-slate-900 z-[100] md:hidden flex flex-col justify-center p-12"
          >
            {/* Background Decorative Element */}
            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full" />

            <div className="relative z-10 flex flex-col gap-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="text-5xl font-black text-white hover:text-blue-400 transition-colors flex items-center justify-between group"
                  >
                    <span className="tracking-tighter uppercase">{item}</span>
                    <ChevronRight size={32} className="opacity-0 group-hover:opacity-100 transition-all text-blue-500" />
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12"
              >
                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="block w-full bg-blue-600 text-white py-6 rounded-2xl text-center font-black uppercase tracking-[0.3em] text-xs shadow-2xl"
                >
                  Start Inquiry
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}