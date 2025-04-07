"use client"
import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

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
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Handle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
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
    <header 
  className={`sticky top-0 z-50 transition-all duration-300 border-b ${
    isScrolled 
      ? 'bg-black/60 backdrop-blur-md shadow-lg border-white/10'
      : 'bg-gradient-to-r from-black via-neutral-900 to-black border-transparent'
  }`}
>

      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter">
          FUTURE<span className="text-gray-400">CORE</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            <a href="#services" className="hover:text-gray-300 transition-colors">Services</a>
            <a href="#work" className="hover:text-gray-300 transition-colors">Work</a>
            <a href="#approach" className="hover:text-gray-300 transition-colors">Approach</a>
            <a href="#team" className="hover:text-gray-300 transition-colors">Team</a>
          </nav>
          <button className="border border-white px-5 py-2 flex items-center space-x-2 hover:bg-white hover:text-black transition-colors">
            <span>Contact</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center w-10 h-10 bg-gray-800/50 rounded-full focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
  <div 
     className="fixed inset-0 bg-gradient-to-b from-black via-black/90 to-black/95 z-50 flex flex-col mobile-menu-overlay"
    onClick={(e) => e.target === e.currentTarget && setIsMenuOpen(false)}
>

          <div className="container mx-auto px-6 pt-20 pb-10 h-full flex flex-col relative">
            {/* Improved close button - separate from header and more visible */}
            <button 
              className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <nav className="flex flex-col space-y-6 text-xl mt-6">
              {['Services', 'Work', 'Approach', 'Team'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="py-3 border-b border-white/10 transition-colors hover:text-gray-300 flex justify-between items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>{item}</span>
                  <ArrowRight className="w-4 h-4 opacity-60" />
                </a>
              ))}
            </nav>
            
            <button className="mt-auto border border-white px-5 py-4 flex items-center justify-center w-full space-x-2 hover:bg-white hover:text-black transition-colors">
              <span>Contact</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;