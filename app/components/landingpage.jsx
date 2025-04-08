// LandingPage.jsx
"use client";
import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Code,
  Server,
  Shield,
  Zap,
  ChevronRight,
  ArrowRight,
  Monitor,
  User,
  Rocket,
} from "lucide-react";
import Navbar from "./navbar";
import HeroSection from "./herosection";
import ServicesSection from "./services";
import TechServicesSection from "./technicalservice";
import WorkSection from "./workSection";
import ApproachSection from "./approach";
import Footer from "./footer";
import FAQSection from "./faq";
import AboutSection from "./about";

const LandingPage = () => {
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";

      const handleClickOutside = (e) => {
        if (e.target.classList.contains("mobile-menu-overlay")) {
          setIsMenuOpen(false);
        }
      };

      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
        document.body.style.overflow = "";
      };
    }
  }, [isMenuOpen]);
  
  return (
   <>
      {/* Navbar */}

      {/* Hero section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-black text-white">
        <HeroSection />
      </section>
      <ServicesSection />
      <AboutSection/>
      <TechServicesSection />
      <WorkSection />
      <ApproachSection />
      <FAQSection/>

      {/* Footer */}
      </>

  );
};

export default LandingPage;
