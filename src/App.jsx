import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Finance from "./pages/Finance";
import Investments from "./pages/Investments";
import Property from "./pages/Property";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/finance" element={<Finance />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/property" element={<Property />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />


      </Routes>

      <Footer />
    </>
  );
}
