import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import AnimatePresence
import {
  IconDeviceLaptop,
  IconDeviceMobile,
  IconServer,
  IconBrandReact,
  IconBrandSwift,
  IconCodeCircle,
  IconCloud,
  IconDatabase,
  IconShield
} from '@tabler/icons-react';

const TechServicesSection = () => {
  const [activeService, setActiveService] = useState('web');

  // Auto-cycle through services every 5 seconds (unchanged)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(current => {
        if (current === 'web') return 'app';
        if (current === 'app') return 'it';
        return 'web';
      });
    }, 5000); // Consider pausing on hover/focus if needed

    return () => clearInterval(interval);
  }, []);

  const services = [
    // Service data remains the same
    {
      id: 'web',
      title: 'Web Development',
      description: 'Building responsive, scalable web applications with modern frameworks and cutting-edge technologies.',
      icon: <IconDeviceLaptop size={24} />, // Slightly smaller base icon size
      color: 'bg-blue-600',
      features: [
        { name: 'Frontend Development', icon: <IconBrandReact size={18} /> }, // Smaller feature icons
        { name: 'Backend Solutions', icon: <IconServer size={18} /> },
        { name: 'E-commerce Platforms', icon: <IconCodeCircle size={18} /> }
      ]
    },
    {
      id: 'app',
      title: 'App Development',
      description: 'Creating native and cross-platform mobile experiences for iOS and Android devices.',
      icon: <IconDeviceMobile size={24} />,
      color: 'bg-emerald-600',
      features: [
        { name: 'iOS Development', icon: <IconBrandSwift size={18} /> },
        { name: 'Android Development', icon: <IconCodeCircle size={18} /> },
        { name: 'Cross-Platform Apps', icon: <IconBrandReact size={18} /> }
      ]
    },
    {
      id: 'it',
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud infrastructure, security, and database management.',
      icon: <IconServer size={24} />,
      color: 'bg-purple-600',
      features: [
        { name: 'Cloud Infrastructure', icon: <IconCloud size={18} /> },
        { name: 'Database Management', icon: <IconDatabase size={18} /> },
        { name: 'Cybersecurity', icon: <IconShield size={18} /> }
      ]
    }
  ];

  const activeServiceData = services.find(s => s.id === activeService);

  // Animation variants (unchanged)
  const containerVariants = { /* ... */ };
  const itemVariants = { /* ... */ };
  const codeBlockVariants = { /* ... */ };
  const pulseVariants = { /* ... */ };

  return (
    // Added min-h-screen to ensure it takes up viewport height if content is short
    <div className="bg-black py-16 sm:py-20 px-4 overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16"> {/* Increased bottom margin slightly on medium+ screens */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            // Adjusted responsive font sizes
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4"
          >
            Tech Services <span className="text-blue-500">Reimagined</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            // Slightly larger text on medium+ screens
            className="max-w-xl md:max-w-2xl mx-auto text-neutral-400 text-base md:text-lg"
          >
            Elevate your digital presence with our comprehensive suite of development and IT services.
          </motion.p>
        </div>

        {/* Service Selector Tabs - Adjusted Spacing */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 md:mb-16"> {/* Use gap for wrapping, responsive gap */}
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              // Adjusted padding and text size for smaller screens
              className={`py-2 px-4 sm:py-2.5 sm:px-6 rounded-full flex items-center space-x-2 transition-all text-sm sm:text-base ${
                activeService === service.id
                  ? `${service.color} text-white shadow-lg`
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700' // Added hover for inactive
              }`}
            >
              {React.cloneElement(service.icon, { size: 20 })} {/* Consistent icon size in button */}
              <span>{service.title}</span>
            </motion.button>
          ))}
        </div>

        {/* Main Content Area - Adjusted Grid Gap */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch"> {/* Reduced mobile gap, items-stretch */}
          {/* Info Panel - Adjusted Padding */}
          <motion.div
            key={`${activeService}-info`} // Ensure key changes for AnimatePresence if used
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            // items-stretch on grid requires h-full if needed, or let content define height
            className="lg:col-span-2 flex flex-col"
          >
            {/* Adjusted padding */}
            <div className={`p-6 md:p-8 rounded-xl shadow-lg ${activeServiceData.color} text-white h-full flex flex-col`}>
              <div className="flex items-center mb-4 md:mb-6">
                 {/* Adjusted icon wrapper size */}
                <div className="bg-white/20 rounded-full p-2.5 mr-3">
                  {React.cloneElement(activeServiceData.icon, { size: 24 })}
                </div>
                <h3 className="text-xl md:text-2xl font-bold">{activeServiceData.title}</h3>
              </div>

              <p className="mb-6 md:mb-8 text-white/90 text-base">{activeServiceData.description}</p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-3 mb-6 md:mb-8 flex-grow" // Added flex-grow
              >
                {activeServiceData.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    // Adjusted padding and text size
                    className="flex items-center bg-black/30 p-2.5 rounded-lg text-sm md:text-base"
                  >
                    <div className="mr-2.5">{React.cloneElement(feature.icon, { size: 18 })}</div>
                    <span>{feature.name}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                // Adjusted padding and text size
                className="mt-auto bg-black/80 hover:bg-black text-white font-medium py-2.5 px-5 rounded-lg transition-all text-sm md:text-base"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Visual Representation - Added min-height, responsive content */}
          <motion.div
            // Use AnimatePresence if you want exit animations for the whole block
            key={`visual-${activeService}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }} // Slight delay for visual
            // Added min-height for mobile, items-stretch needs h-full if children need alignment
            className="lg:col-span-3 bg-neutral-900 rounded-xl shadow-lg overflow-hidden relative border border-neutral-800 min-h-[360px] sm:min-h-[400px] lg:min-h-0 flex flex-col" // Added flex flex-col
          >
             {/* Use AnimatePresence to handle the exit/enter of different visuals smoothly */}
            <AnimatePresence mode="wait">
              {activeService === 'web' && (
                <motion.div
                  key="web-visual"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 sm:p-6 h-full flex-grow" // Added flex-grow
                >
                  {/* Code Editor Mock - Responsive adjustments */}
                  <div className="bg-black rounded-lg h-full overflow-hidden border border-neutral-800 flex flex-col"> {/* Added flex flex-col */}
                    <div className="bg-neutral-900 px-4 py-2 flex items-center shrink-0"> {/* Added shrink-0 */}
                      {/* ... window controls ... */}
                       <div className="flex space-x-1.5 sm:space-x-2">
                         <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                         <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                         <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                       </div>
                      <div className="ml-3 sm:ml-4 text-xs sm:text-sm text-neutral-400">index.jsx</div>
                    </div>

                     {/* Added overflow-y-auto for scrolling if content exceeds height */}
                    <div className="p-3 sm:p-4 text-xs sm:text-sm font-mono flex-grow overflow-y-auto">
                      {/* Code lines - consider reducing number or complexity for mobile if needed */}
                      {/* ... motion divs for code lines ... */}
                      {/* Example line with responsive padding */}
                       <motion.div /* ... variants/transitions */ className="pl-2 sm:pl-4 text-white">
                         <span className="text-purple-400">return</span> (
                       </motion.div>
                       <motion.div /* ... variants/transitions */ className="pl-4 sm:pl-8 text-white">
                         &lt;<span className="text-green-400">div</span> <span className="text-blue-400">className</span>=<span className="text-green-400">"container"</span>&gt;
                       </motion.div>
                       <motion.div /* ... variants/transitions */ className="pl-6 sm:pl-12 text-white">
                         &lt;<span className="text-green-400">h1</span>&gt;Welcome&lt;/<span className="text-green-400">h1</span>&gt;
                       </motion.div>
                       {/* ... other lines similarly adjusted ... */}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeService === 'app' && (
                <motion.div
                  key="app-visual"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 sm:p-8 h-full flex justify-center items-center flex-grow" // Added flex-grow
                >
                  {/* App Design Mock - Responsive Size */}
                   {/* Removed fixed w/h, use max-w and aspect ratio */}
                  <div className="w-full max-w-[180px] sm:max-w-[220px] aspect-[9/16] bg-neutral-800 rounded-2xl sm:rounded-3xl p-2 sm:p-3 shadow-xl relative mx-auto">
                    <div className="absolute top-2 sm:top-4 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 h-2 sm:h-3 bg-neutral-700 rounded-full"></div> {/* Notch */}

                    <div className="bg-black w-full h-full rounded-xl sm:rounded-2xl overflow-hidden flex flex-col">
                      <div className="h-8 sm:h-10 bg-emerald-600 flex items-center justify-center shrink-0"> {/* Header */}
                        <div className="text-white text-xs sm:text-sm font-semibold">My App</div>
                      </div>

                       {/* Added overflow-y-auto */}
                      <div className="flex-1 p-2 sm:p-3 space-y-2 sm:space-y-3 overflow-y-auto">
                        {/* Scaled down internal elements */}
                        {[...Array(3)].map((_, i) => (
                           <motion.div
                             key={i}
                             variants={itemVariants}
                             initial="hidden"
                             animate="visible"
                             transition={{ delay: i * 0.1 }} // Faster stagger
                             className="h-20 sm:h-24 bg-neutral-900 rounded-md sm:rounded-lg p-1.5 sm:p-2"
                           >
                             <div className="h-4 sm:h-5 w-1/2 bg-emerald-500 rounded mb-1 sm:mb-1.5"></div>
                             <div className="h-2 sm:h-2.5 w-3/4 bg-neutral-800 rounded mb-1"></div>
                             <div className="h-2 sm:h-2.5 w-2/3 bg-neutral-800 rounded"></div>
                           </motion.div>
                        ))}
                      </div>

                      <div className="h-10 sm:h-14 border-t border-neutral-800 flex justify-around items-center shrink-0"> {/* Footer/Nav */}
                        <motion.div /* ... variants/animate */ className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald-500 flex items-center justify-center">
                           <IconDeviceMobile size={14} smSize={16} className="text-white" />
                        </motion.div>
                        {/* ... other nav icons ... */}
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-neutral-800"></div>
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-neutral-800"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeService === 'it' && (
                <motion.div
                  key="it-visual"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  // Added flex-grow and padding adjustments
                  className="p-4 sm:p-8 h-full flex justify-center items-center flex-grow"
                >
                  {/* Server Infrastructure - Responsive adjustments */}
                   {/* Adjusted overall container size */}
                  <div className="relative w-full max-w-xs sm:max-w-sm h-64 sm:h-72 flex items-center justify-center">
                    {/* Server Rack - Adjusted size */}
                    <div className="bg-neutral-800/50 w-36 sm:w-40 h-56 sm:h-64 rounded-lg relative overflow-hidden shadow-xl border border-neutral-700">
                       {/* ... top/bottom bars ... */}
                      <div className="absolute top-0 left-0 right-0 h-3 sm:h-4 bg-black/50 flex justify-center items-center">
                        <div className="w-12 h-1 bg-neutral-700 rounded-full"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-3 sm:h-4 bg-black/50"></div>

                      {/* Server Units - Adjusted size/spacing */}
                      {[...Array(4)].map((_, i) => ( // Reduced to 4 units for space
                        <motion.div
                          key={i} /* ... variants/transitions */
                          // Adjusted size/margin
                          className="h-8 sm:h-10 mx-2 my-2 sm:my-3 bg-neutral-800 rounded relative overflow-hidden"
                        >
                          {/* ... LEDs and vents ... */}
                           <div className="absolute left-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                             {/* ... motion divs for LEDs ... */}
                             <motion.div animate={{ backgroundColor: ['#9333ea', '#2563eb', '#9333ea'], /* transition */ }} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"></motion.div>
                             <motion.div animate={{ backgroundColor: ['#2563eb', '#9333ea', '#2563eb'], /* transition */ }} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"></motion.div>
                           </div>
                           <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 sm:w-14 h-3 sm:h-4"> {/* Vents */}
                             <div className="grid grid-cols-4 gap-0.5 sm:gap-1 h-full">
                               {[...Array(4)].map((_, j) => <div key={j} className="bg-black/50 rounded-sm"></div>)}
                             </div>
                           </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Connection Lines & Icons - Simplified Positioning */}
                     {/* Using absolute positioning relative to the main container */}
                     {/* Cloud Icon */}
                    <motion.div
                       initial={{ scale: 0, x: '50%', y: '-80%' }} // Position relative to center
                       animate={{ scale: 1 }}
                       transition={{ delay: 0.5, type: "spring" }}
                       className="absolute top-1/2 left-1/2 bg-blue-600 p-2 sm:p-3 rounded-full shadow-lg z-10" // Added z-10
                    >
                       <IconCloud size={20} smSize={24} className="text-white" />
                    </motion.div>

                     {/* Database Icon */}
                    <motion.div
                       initial={{ scale: 0, x: '50%', y: '80%' }} // Position relative to center
                       animate={{ scale: 1 }}
                       transition={{ delay: 0.7, type: "spring" }}
                       className="absolute top-1/2 left-1/2 bg-purple-600 p-2 sm:p-3 rounded-full shadow-lg z-10"
                    >
                       <IconDatabase size={20} smSize={24} className="text-white" />
                    </motion.div>

                     {/* Simplified connection lines or hide on small screens if too complex */}
                     {/* Option: Draw simpler lines or remove SVG complexity */}
                     <motion.div
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 0.5 }} // Make subtle
                         transition={{ delay: 1 }}
                         className="absolute inset-0 flex items-center justify-center pointer-events-none"
                     >
                       <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet">
                          {/* Line from Rack Center to Top Right Area (Cloud approx) */}
                         <motion.line x1="100" y1="100" x2="160" y2="40" stroke="#2563eb" strokeWidth="1.5"
                           initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.2 }} />
                           {/* Line from Rack Center to Bottom Right Area (DB approx) */}
                         <motion.line x1="100" y1="100" x2="160" y2="160" stroke="#9333ea" strokeWidth="1.5"
                           initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.4 }} />
                       </svg>
                     </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

             {/* Indicator Dots - Adjusted position */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex space-x-1.5">
               {/* ... indicator dots ... */}
               {[...Array(2)].map((_, i)=><div key={i} className="h-1.5 w-1.5 rounded-full bg-neutral-700"></div>)}
               <div className={`h-1.5 w-4 rounded-full ${activeServiceData.color}`}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechServicesSection;