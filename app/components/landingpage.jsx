// LandingPage.jsx
"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Server, Shield, Zap, ChevronRight, ArrowRight, Monitor, User, Rocket } from 'lucide-react';
import Navbar from './navbar';
import HeroSection from './herosection';
import ServicesSection from './services';
import TechServicesSection from './technicalservice';
import WorkSection from './workSection';
import ApproachSection from './approach';


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
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      
      const handleClickOutside = (e) => {
        if (e.target.classList.contains('mobile-menu-overlay')) {
          setIsMenuOpen(false);
        }
      };
      
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
        document.body.style.overflow = '';
      };
    }
  }, [isMenuOpen]);
  
 

  return (
    <div className="bg-black text-white min-h-screen font-sans relative">
    
      {/* Navbar */}
        <Navbar/>
      
      {/* Hero section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-black text-white">
        <HeroSection/>
      </section>      

      {/* Services section */}
        <ServicesSection/>

        <TechServicesSection/>
      
      {/* Work section */}
      <WorkSection/>
      
      {/* Approach section */}
      <ApproachSection/>
      <section id="team" className="py-20 md:py-32 bg-white/5 relative">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-1/3 h-1/3 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl top-20 left-20"></div>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <div>
              <h5 className="text-gray-400 mb-4 tracking-wider">WHO WE ARE</h5>
              <h2 className="text-3xl md:text-5xl font-bold">Our Team</h2>
            </div>
            <p className="md:w-1/3 text-gray-400 mt-6 md:mt-0">
              Meet our talented team of experts dedicated to delivering innovative solutions and exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="aspect-square bg-gray-900 relative overflow-hidden mb-4">
                <User className="w-full h-full p-12 text-white/20" />
              </div>
              <h3 className="text-xl font-bold">Alex Morgan</h3>
              <p className="text-gray-400">CEO & Founder</p>
            </div>
            
            <div className="group">
              <div className="aspect-square bg-gray-900 relative overflow-hidden mb-4">
                <User className="w-full h-full p-12 text-white/20" />
              </div>
              <h3 className="text-xl font-bold">Jamie Chen</h3>
              <p className="text-gray-400">CTO</p>
            </div>
            
            <div className="group">
              <div className="aspect-square bg-gray-900 relative overflow-hidden mb-4">
                <User className="w-full h-full p-12 text-white/20" />
              </div>
              <h3 className="text-xl font-bold">Taylor Reed</h3>
              <p className="text-gray-400">Head of Design</p>
            </div>
            
            <div className="group">
              <div className="aspect-square bg-gray-900 relative overflow-hidden mb-4">
                <User className="w-full h-full p-12 text-white/20" />
              </div>
              <h3 className="text-xl font-bold">Jordan Smith</h3>
              <p className="text-gray-400">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-20 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
            <div>
              <h2 className="text-xl font-bold mb-6">FUTURE<span className="text-gray-400">CORE</span></h2>
              <p className="text-gray-400">
                Empowering businesses through innovative technology solutions since 2015.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Custom Software</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cloud Infrastructure</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cybersecurity</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI & Machine Learning</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Connect</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Dribbble</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 FutureCore. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookies Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;