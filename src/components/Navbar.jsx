"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/FIP.png";

/* ================= PURPLE BRAND PALETTE ================= */
const BRAND = {
  primary: "#1E1B4B",   // Slate Indigo (Premium trust)
  secondary: "#7C3AED", // Violet (Innovation)
  accent: "#F5F3FF",    // Lavender Mist
  text: "#0F172A",
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  /* Scroll detection */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  const navItems = ["Home", "Finance", "Investments", "Property", "About"];

  const linkClass = ({ isActive }) =>
    `relative text-[11px] uppercase tracking-[0.25em] font-bold transition-all duration-300
     ${isActive ? "text-purple-700" : "text-slate-500 hover:text-purple-600"}`;

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-[0_10px_40px_-15px_rgba(109,40,217,0.1)] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">

        {/* ================= LOGO ================= */}
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="relative z-[110] flex items-center"
        >
          <img
            src={logo}
            alt="FIP Consultancy"
            className={`transition-all duration-500 object-contain ${
              scrolled ? "h-7 md:h-8" : "h-9 md:h-10"
            }`}
          />
        </NavLink>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            const active = location.pathname === path;

            return (
              <NavLink key={item} to={path} className={linkClass}>
                {item}
                {/* Active Underline */}
                <span
                  className={`absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] transition-all duration-300 rounded-full
                  ${active ? "w-full bg-purple-600" : "w-0 bg-purple-400 group-hover:w-full"}`}
                />
              </NavLink>
            );
          })}
        </nav>

        {/* ================= DESKTOP CTA ================= */}
        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="group relative flex items-center gap-3 px-8 py-3 rounded-xl
                       text-[10px] uppercase tracking-[0.2em] font-bold
                       bg-purple-600 text-white transition-all duration-300
                       hover:bg-purple-700 hover:shadow-xl hover:shadow-purple-200
                       active:scale-95"
          >
            <span>Consultation</span>
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </NavLink>
        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="md:hidden p-2 text-slate-900 relative z-[110]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} className="text-white" /> : <Menu size={28} className="text-purple-900" />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 z-[105] bg-slate-950 md:hidden transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Decorative Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/40 via-transparent to-transparent opacity-60" />

        <div className="relative z-10 flex flex-col justify-center h-full px-12 gap-10">
          <p className="text-purple-400 text-[10px] uppercase tracking-[0.5em] font-bold">
            Menu
          </p>

          {navItems.map((item, i) => (
            <NavLink
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: `${i * 60}ms` }}
              className={`text-4xl font-black text-white flex justify-between items-center
                          transition-all duration-500 tracking-tighter ${
                            open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                          }`}
            >
              <span className="hover:text-purple-400 transition-colors uppercase">
                {item}
              </span>
              <ChevronRight className="text-purple-500" />
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className={`mt-6 bg-purple-600 text-white py-5 rounded-2xl text-center
                        font-bold text-xs uppercase tracking-[0.25em]
                        transition-all duration-500 shadow-xl shadow-purple-900/20 ${
                          open ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                        }`}
          >
            Start Consultation
          </NavLink>
        </div>
      </div>
    </header>
  );
}