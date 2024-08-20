import React from "react";
import "./scss/main.scss";
import Home from "./components/Home";
import HamburgerMenu from "./components/HamburgerMenu.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pricing from "./pages/Pricing.jsx";
import Header from "./components/Header.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Schedule from "./pages/Schedule.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <HamburgerMenu />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
