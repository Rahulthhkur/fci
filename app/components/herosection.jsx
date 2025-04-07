import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
   <>
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-1/2 h-1/2 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>
        <div className="absolute w-1/3 h-1/3 bg-gradient-to-l from-white/5 to-transparent rounded-full blur-3xl bottom-40 right-20 animate-pulse"></div>
        <div className="absolute w-1/4 h-1/4 bg-gradient-to-t from-white/5 to-transparent rounded-full blur-3xl top-40 right-40 animate-pulse duration-700"></div>
        <div className="absolute w-1/4 h-1/4 bg-gradient-to-b from-white/5 to-transparent rounded-full blur-3xl bottom-20 left-40 animate-pulse duration-1000"></div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s infinite ease-in-out ${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left side content */}
        <div className={`md:w-1/2 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="inline-block mb-4 bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-1 rounded-full">
            <h5 className="text-gray-400 tracking-wider text-sm font-semibold">INNOVATION THROUGH TECHNOLOGY</h5>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Creating <span className="text-gray-400 relative inline-block">
              digital
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-400 transform scale-x-0 origin-left transition-transform duration-1000 ease-out" style={{transform: isLoaded ? 'scaleX(1)' : 'scaleX(0)'}}></span>
            </span>
            <br />
            futures that <span className="text-gray-400 relative inline-block">
              matter
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gray-400 transform scale-x-0 origin-left transition-transform duration-1000 delay-500 ease-out" style={{transform: isLoaded ? 'scaleX(1)' : 'scaleX(0)'}}></span>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-10 transition-all duration-1000 delay-300" style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)'}}>
            We build transformative digital solutions that empower businesses to thrive in an increasingly connected world.
          </p>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 transition-all duration-1000 delay-500" style={{opacity: isLoaded ? 1 : 0, transform: isLoaded ? 'translateY(0)' : 'translateY(20px)'}}>
            <button className="bg-white text-black px-8 py-4 flex items-center justify-center space-x-2 hover:bg-gray-200 transition-all duration-300 rounded group relative overflow-hidden">
              <span className="relative z-10">Get Started</span>
              <ChevronRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              <div className="absolute inset-0 w-0 bg-gray-200 transition-all duration-300 group-hover:w-full"></div>
            </button>
            
            <button className="border border-white px-8 py-4 flex items-center justify-center space-x-2 hover:bg-white hover:text-black transition-all duration-300 rounded group">
              <span>Our Services</span>
              <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
          
          <div className="hidden md:flex items-center mt-16 space-x-8 transition-all duration-1000 delay-700" style={{opacity: isLoaded ? 0.7 : 0}}>
            <div className="flex space-x-1 items-center">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-sm text-gray-400">Built with modern tech</span>
            </div>
            <div className="flex space-x-1 items-center">
              <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-sm text-gray-400">Secure by design</span>
            </div>
            <div className="flex space-x-1 items-center">
              <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></div>
              <span className="text-sm text-gray-400">Fully responsive</span>
            </div>
          </div>
        </div>
        
        {/* Right side image */}
        <div className={`md:w-1/2 hidden md:flex justify-end items-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <div className="relative">
            {/* Main image with SVG placeholder instead of external image */}
            <div className="w-96 h-96 rounded-2xl bg-gradient-to-tr from-gray-800 via-gray-700 to-gray-800 shadow-2xl flex items-center justify-center overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* SVG illustration as replacement for the image */}
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-3/4 h-3/4 opacity-70">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.6" />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  
                  {/* Abstract digital elements */}
                  <circle cx="100" cy="100" r="80" fill="url(#grad1)" opacity="0.3" />
                  <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="0.5" opacity="0.5" />
                  
                  {/* Grid pattern */}
                  <path d="M40,40 L160,40 L160,160 L40,160 Z" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3" />
                  <path d="M60,40 L60,160" stroke="white" strokeWidth="0.5" opacity="0.2" />
                  <path d="M80,40 L80,160" stroke="white" strokeWidth="0.5" opacity="0.2" />
                  <path d="M100,40 L100,160" stroke="white" strokeWidth="0.5" opacity="0.2" />
                  <path d="M120,40 L120,160" stroke="white" strokeWidth="0.5" opacity="0.2" />
                  <path d="M140,40 L140,160" stroke="white" strokeWidth="0.5" opacity="0.2" />
                  
                  <path d="M40,60 L160,60" stroke="white" strokeWidth="0.5" opacity="0.2" />
                  <path d="M40,80 L160,80" stroke="white" strokeWidth="0.5" opacity="0.2" />
                  <path d="M40,100 L160,100" stroke="white" strokeWidth="0.5" opacity="0.2" />
                  <path d="M40,120 L160,120" stroke="white" strokeWidth="0.5" opacity="0.2" />
                  <path d="M40,140 L160,140" stroke="white" strokeWidth="0.5" opacity="0.2" />
                  
                  {/* Digital abstract shapes */}
                  <polygon points="100,50 120,80 80,80" fill="url(#grad2)" />
                  <rect x="70" y="90" width="60" height="25" rx="2" fill="white" opacity="0.3" />
                  <rect x="75" y="95" width="50" height="5" rx="1" fill="white" opacity="0.5" />
                  <rect x="75" y="105" width="30" height="5" rx="1" fill="white" opacity="0.5" />
                  
                  <circle cx="60" cy="135" r="15" fill="url(#grad2)" opacity="0.7" />
                  <circle cx="140" cy="135" r="15" fill="url(#grad1)" opacity="0.7" />
                  
                  <path d="M85,130 L115,130 L115,150 L85,150 Z" fill="white" opacity="0.2" />
                  <path d="M90,135 L110,135" stroke="white" strokeWidth="1" opacity="0.6" />
                  <path d="M90,140 L105,140" stroke="white" strokeWidth="1" opacity="0.6" />
                  <path d="M90,145 L100,145" stroke="white" strokeWidth="1" opacity="0.6" />
                </svg>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 border-4 border-white/30 rounded-full animate-pulse"></div>
                <div className="w-48 h-48 border-4 border-white/20 rounded-full absolute animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="w-64 h-64 border-4 border-white/10 rounded-full absolute animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center p-4 animate-bounce" style={{animationDuration: '3s'}}>
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-t-white/60 border-r-white/60 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 w-32 h-16 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
              <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center p-2">
                <div className="grid grid-cols-3 gap-1 w-full h-full">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="bg-white/30 rounded-sm animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-16 h-32 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center animate-bounce" style={{animationDuration: '5s', animationDelay: '0.5s'}}>
              <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex flex-col items-center justify-center p-2 space-y-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-full h-4 bg-white/30 rounded-sm animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className={`absolute bottom-10 left-0 right-0 flex justify-center transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <a 
          href="#services" 
          className="border border-white rounded-full p-2 hover:bg-white hover:text-black transition-colors group flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          <ChevronRight className="w-5 h-5 rotate-90 relative z-10" />
        </a>
      </div>
      
      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
</>
  );
};

export default HeroSection;