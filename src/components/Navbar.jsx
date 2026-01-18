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
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "py-4" : "py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav
          className={`flex items-center justify-between px-8 py-4 rounded-3xl transition-all duration-500 ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl border border-slate-200 shadow-lg"
              : "bg-transparent"
          }`}
        >
          {/* LOGO */}
          <NavLink to="/" className="z-20">
            <img
              src={logo}
              alt="FIP Consultancy"
              className={`transition-all duration-300 ${
                scrolled ? "h-7" : "h-9"
              }`}
            />
          </NavLink>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative text-[11px] uppercase tracking-[0.3em] font-bold transition-colors ${
                    isActive
                      ? "text-blue-700"
                      : "text-slate-500 hover:text-blue-700"
                  }`
                }
              >
                {item}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <NavLink
              to="/contact"
              className={`flex items-center gap-3 px-7 py-3 rounded-xl text-[10px] uppercase tracking-[0.3em] font-bold transition-all ${
                scrolled
                  ? "bg-[#0B2C6F] text-white hover:bg-blue-700"
                  : "bg-white text-[#0B2C6F] hover:bg-blue-700 hover:text-white"
              }`}
            >
              Consultancy
              <ArrowRight className="w-4 h-4" />
            </NavLink>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden z-20"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-[#0B2C6F] md:hidden z-[90] flex flex-col justify-center px-10"
          >
            <div className="space-y-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <NavLink
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between text-white text-4xl font-black uppercase"
                  >
                    {item}
                    <ChevronRight />
                  </NavLink>
                </motion.div>
              ))}

              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="block mt-12 bg-white text-[#0B2C6F] py-5 rounded-2xl text-center text-xs uppercase tracking-[0.3em] font-bold"
              >
                Start Consultation
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
