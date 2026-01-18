"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight, ArrowRight, ShieldCheck } from "lucide-react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/FIP.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ["Home", "Finance", "Investments", "Property", "About"];

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "py-4" : "py-6 md:py-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <nav
          className={`flex items-center justify-between px-6 md:px-10 py-4 rounded-[2rem] transition-all duration-500 ${
            scrolled
              ? "bg-white/70 backdrop-blur-2xl border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]"
              : "bg-transparent"
          }`}
        >
          {/* LOGO */}
          <NavLink to="/" className="z-[110] outline-none">
            <img
              src={logo}
              alt="FIP Consultancy"
              className={`transition-all duration-500 object-contain ${
                scrolled ? "h-6 md:h-7" : "h-8 md:h-10"
              }`}
            />
          </NavLink>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-black transition-all duration-300 ${
                    isActive
                      ? "text-blue-600"
                      : "text-slate-400 hover:text-slate-950"
                  }`
                }
              >
                {item}
                <NavLinkActiveDot />
              </NavLink>
            ))}
          </div>

          {/* CTA & TRUST BADGE */}
          <div className="hidden lg:flex items-center gap-6">
            
            <NavLink
              to="/contact"
              className={`group flex items-center gap-3 px-8 py-3.5 rounded-2xl text-[10px] uppercase tracking-[0.3em] font-black transition-all duration-500 ${
                scrolled
                  ? "bg-slate-950 text-white hover:bg-blue-600"
                  : "bg-white text-slate-950 hover:bg-slate-950 hover:text-white shadow-xl shadow-blue-900/5"
              }`}
            >
              Consult Now
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </NavLink>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className={`lg:hidden z-[110] p-2 rounded-xl transition-colors ${
              open ? "text-white" : "text-slate-950"
            }`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* MOBILE MENU (FULL SCREEN COMMAND CENTER) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-slate-950 md:hidden z-[100] flex flex-col justify-center px-8"
          >
            <div className="space-y-10">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500 mb-4">Navigation Menu</p>
              {navItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between text-white text-5xl font-black tracking-tighter"
                  >
                    {item}
                    <ChevronRight className="text-blue-600" size={32} />
                  </NavLink>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-12 border-t border-white/10"
              >
                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-4 w-full bg-blue-600 text-white py-6 rounded-2xl text-[11px] uppercase tracking-[0.4em] font-black"
                >
                  Start Consultation <ArrowRight size={18} />
                </NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLinkActiveDot() {
  return (
    <AnimatePresence>
       {/* Active dot logic handled by parent class but visual dot can be animated here if using a custom wrapper */}
    </AnimatePresence>
  );
}