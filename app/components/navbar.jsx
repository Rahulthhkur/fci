"use client";
import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll(); // Set initial state
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle menu open/close and body scroll lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out border-b ${
        isScrolled || isMenuOpen
          ? "bg-black backdrop-blur-md shadow-lg border-white/10" // Kept solid black background for header when menu is open or scrolled
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter text-white">
          FUTURE<span className="text-gray-400">CORE</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
          <nav className="flex space-x-8">
            <Link href="/about" className="hover:text-white transition-colors"> About Us </Link>
            <Link href="/services" className="hover:text-white transition-colors"> Services </Link>
            <Link href="/#approach" className="hover:text-white transition-colors"> Approach </Link>
            <Link href="/#team" className="hover:text-white transition-colors"> Team </Link>
          </nav>
          <Link href="/contact" className="border border-white/50 text-white px-5 py-2 flex items-center space-x-2 hover:bg-white hover:text-black transition-colors rounded-md text-sm" >
            <span>Contact</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 bg-transparent rounded-full focus:outline-none text-white z-[61]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black z-[60] flex flex-col mobile-menu-overlay" // Overlay is solid black, high z-index
          onClick={(e) => e.target === e.currentTarget && closeMenu()} // Close on overlay click
        >
          {/* Inner container now uses min-h-screen */}
          <div className="container mx-auto px-6 pt-20 pb-10 min-h-screen flex flex-col relative bg-black"> {/* CHANGED h-full to min-h-screen */}
            {/* <button
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-white" />
            </button> */}

            <nav className="flex flex-col space-y-5 text-2xl mt-10">
               <Link href="/about" className="py-3 border-b border-white/10 transition-colors hover:text-gray-300 flex justify-between items-center" onClick={closeMenu} > <span>About Us</span> <ArrowRight className="w-5 h-5 opacity-60" /> </Link>
               <Link href="/services" className="py-3 border-b border-white/10 transition-colors hover:text-gray-300 flex justify-between items-center" onClick={closeMenu} > <span>Services</span> <ArrowRight className="w-5 h-5 opacity-60" /> </Link>
               <Link href="/#approach" className="py-3 border-b border-white/10 transition-colors hover:text-gray-300 flex justify-between items-center" onClick={closeMenu} > <span>Approach</span> <ArrowRight className="w-5 h-5 opacity-60" /> </Link>
               <Link href="/#team" className="py-3 border-b border-white/10 transition-colors hover:text-gray-300 flex justify-between items-center" onClick={closeMenu} > <span>Team</span> <ArrowRight className="w-5 h-5 opacity-60" /> </Link>
            </nav>

            <Link href="/contact" className="mt-auto border border-white/50 text-white px-5 py-4 flex items-center justify-center w-full space-x-2 hover:bg-white hover:text-black transition-colors rounded-md text-lg" onClick={closeMenu} >
                <span>Contact</span>
                <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;