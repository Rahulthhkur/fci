import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  
  // Auto-cycle through services every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService(current => {
        if (current === 'web') return 'app';
        if (current === 'app') return 'it';
        return 'web';
      });
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const services = [
    {
      id: 'web',
      title: 'Web Development',
      description: 'Building responsive, scalable web applications with modern frameworks and cutting-edge technologies.',
      icon: <IconDeviceLaptop size={28} />,
      color: 'bg-blue-600',
      features: [
        { name: 'Frontend Development', icon: <IconBrandReact size={20} /> },
        { name: 'Backend Solutions', icon: <IconServer size={20} /> },
        { name: 'E-commerce Platforms', icon: <IconCodeCircle size={20} /> }
      ]
    },
    {
      id: 'app',
      title: 'App Development',
      description: 'Creating native and cross-platform mobile experiences for iOS and Android devices.',
      icon: <IconDeviceMobile size={28} />,
      color: 'bg-emerald-600',
      features: [
        { name: 'iOS Development', icon: <IconBrandSwift size={20} /> },
        { name: 'Android Development', icon: <IconCodeCircle size={20} /> },
        { name: 'Cross-Platform Apps', icon: <IconBrandReact size={20} /> }
      ]
    },
    {
      id: 'it',
      title: 'IT Services',
      description: 'Comprehensive IT solutions including cloud infrastructure, security, and database management.',
      icon: <IconServer size={28} />,
      color: 'bg-purple-600',
      features: [
        { name: 'Cloud Infrastructure', icon: <IconCloud size={20} /> },
        { name: 'Database Management', icon: <IconDatabase size={20} /> },
        { name: 'Cybersecurity', icon: <IconShield size={20} /> }
      ]
    }
  ];
  
  const activeServiceData = services.find(s => s.id === activeService);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };
  
  const codeBlockVariants = {
    initial: { scaleY: 0, originY: 0 },
    animate: { 
      scaleY: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="bg-black py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-5xl font-bold text-white mb-4"
          >
            Tech Services <span className="text-blue-500">Reimagined</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="max-w-2xl mx-auto text-neutral-400"
          >
            Elevate your digital presence with our comprehensive suite of development and IT services.
          </motion.p>
        </div>
        
        {/* Service Selector Tabs */}
        <div className="flex justify-center space-x-4 mb-12">
          {services.map((service) => (
            <motion.button
              key={service.id}
              onClick={() => setActiveService(service.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`py-2 px-6 rounded-full flex items-center space-x-2 transition-all ${
                activeService === service.id 
                  ? `${service.color} text-white shadow-lg`
                  : 'bg-neutral-800 text-neutral-300'
              }`}
            >
              {service.icon}
              <span>{service.title}</span>
            </motion.button>
          ))}
        </div>
        
        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info Panel */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 flex flex-col"
          >
            <div className={`p-8 rounded-xl shadow-lg ${activeServiceData.color} text-white h-full`}>
              <div className="flex items-center mb-6">
                <div className="bg-white/20 rounded-full p-3">
                  {activeServiceData.icon}
                </div>
                <h3 className="text-2xl font-bold ml-3">{activeServiceData.title}</h3>
              </div>
              
              <p className="mb-8 text-white/90">{activeServiceData.description}</p>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                {activeServiceData.features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex items-center bg-black/30 p-3 rounded-lg"
                  >
                    <div className="mr-3">{feature.icon}</div>
                    <span>{feature.name}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-black text-white font-medium py-2 px-6 rounded-lg hover:bg-neutral-900 transition-all"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
          
          {/* Visual Representation */}
          <motion.div
            key={`visual-${activeService}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 bg-neutral-900 rounded-xl shadow-lg overflow-hidden relative border border-neutral-800"
          >
            {/* Code Editor Mock for Web Dev */}
            {activeService === 'web' && (
              <div className="p-6 h-full">
                <div className="bg-black rounded-lg h-full overflow-hidden border border-neutral-800">
                  <div className="bg-neutral-900 px-4 py-2 flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="ml-4 text-sm text-neutral-400">index.jsx</div>
                  </div>
                  
                  <div className="p-4 text-sm font-mono">
                    <motion.div
                      variants={codeBlockVariants}
                      initial="initial"
                      animate="animate"
                      className="text-blue-400"
                    >
                      <span className="text-purple-400">import</span> React <span className="text-purple-400">from</span> <span className="text-green-400">'react'</span>;
                    </motion.div>
                    
                    <motion.div
                      variants={codeBlockVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: 0.2 }}
                      className="text-white"
                    >
                      <span className="text-purple-400">const</span> <span className="text-yellow-400">App</span> = () =&gt; {'{'}
                    </motion.div>
                    
                    <motion.div
                      variants={codeBlockVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: 0.4 }}
                      className="pl-4 text-white"
                    >
                      <span className="text-purple-400">return</span> (
                    </motion.div>
                    
                    <motion.div
                      variants={codeBlockVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: 0.6 }}
                      className="pl-8 text-white"
                    >
                      &lt;<span className="text-green-400">div</span> <span className="text-blue-400">className</span>=<span className="text-green-400">"container"</span>&gt;
                    </motion.div>
                    
                    <motion.div
                      variants={codeBlockVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: 0.8 }}
                      className="pl-12 text-white"
                    >
                      &lt;<span className="text-green-400">h1</span>&gt;Welcome to our website&lt;/<span className="text-green-400">h1</span>&gt;
                    </motion.div>
                    
                    <motion.div
                      variants={codeBlockVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: 1 }}
                      className="pl-12 text-white"
                    >
                      &lt;<span className="text-green-400">p</span>&gt;Built with React&lt;/<span className="text-green-400">p</span>&gt;
                    </motion.div>
                    
                    <motion.div
                      variants={codeBlockVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: 1.2 }}
                      className="pl-8 text-white"
                    >
                      &lt;/<span className="text-green-400">div</span>&gt;
                    </motion.div>
                    
                    <motion.div
                      variants={codeBlockVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: 1.4 }}
                      className="pl-4 text-white"
                    >
                      );
                    </motion.div>
                    
                    <motion.div
                      variants={codeBlockVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: 1.6 }}
                      className="text-white"
                    >
                      {'}'};
                    </motion.div>
                    
                    <motion.div
                      variants={codeBlockVariants}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: 1.8 }}
                      className="text-white"
                    >
                      <span className="text-purple-400">export</span> <span className="text-purple-400">default</span> App;
                    </motion.div>
                  </div>
                </div>
              </div>
            )}
            
            {/* App Design Mock for App Dev */}
            {activeService === 'app' && (
              <div className="p-8 h-full flex justify-center items-center">
                <div className="w-64 h-96 bg-neutral-800 rounded-3xl p-3 shadow-xl relative">
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-neutral-700 rounded-full"></div>
                  
                  <div className="bg-black w-full h-full rounded-2xl overflow-hidden flex flex-col">
                    <div className="h-10 bg-emerald-600 flex items-center justify-center">
                      <div className="text-white text-sm font-semibold">My App</div>
                    </div>
                    
                    <div className="flex-1 p-3">
                      <motion.div 
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="h-24 bg-neutral-900 rounded-lg mb-3"
                      >
                        <div className="h-6 w-1/2 bg-emerald-500 m-2 rounded"></div>
                        <div className="h-3 w-3/4 bg-neutral-800 m-2 rounded"></div>
                        <div className="h-3 w-2/3 bg-neutral-800 m-2 rounded"></div>
                      </motion.div>
                      
                      <motion.div 
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                        className="h-24 bg-neutral-900 rounded-lg mb-3"
                      >
                        <div className="h-6 w-1/3 bg-emerald-500 m-2 rounded"></div>
                        <div className="h-3 w-3/4 bg-neutral-800 m-2 rounded"></div>
                        <div className="h-3 w-2/3 bg-neutral-800 m-2 rounded"></div>
                      </motion.div>
                      
                      <motion.div 
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                        className="h-24 bg-neutral-900 rounded-lg"
                      >
                        <div className="h-6 w-2/5 bg-emerald-500 m-2 rounded"></div>
                        <div className="h-3 w-3/4 bg-neutral-800 m-2 rounded"></div>
                        <div className="h-3 w-2/3 bg-neutral-800 m-2 rounded"></div>
                      </motion.div>
                    </div>
                    
                    <div className="h-14 border-t border-neutral-800 flex justify-around items-center">
                      <motion.div 
                        variants={pulseVariants}
                        animate="pulse"
                        className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center"
                      >
                        <IconDeviceMobile size={16} className="text-white" />
                      </motion.div>
                      <div className="w-8 h-8 rounded-full bg-neutral-800"></div>
                      <div className="w-8 h-8 rounded-full bg-neutral-800"></div>
                      <div className="w-8 h-8 rounded-full bg-neutral-800"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Server Infrastructure for IT Services */}
            {activeService === 'it' && (
              <div className="p-8 h-full flex justify-center items-center">
                <div className="relative w-full h-64 flex items-center justify-center">
                  {/* Server Rack */}
                  <div className="bg-neutral-900 w-40 h-64 rounded-lg relative overflow-hidden shadow-xl border border-neutral-800">
                    <div className="absolute top-0 left-0 right-0 h-4 bg-black flex justify-center items-center">
                      <div className="w-16 h-1 bg-neutral-800 rounded-full"></div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-4 bg-black"></div>
                    
                    {/* Server Units */}
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ delay: i * 0.2 }}
                        className="h-10 mx-2 my-3 bg-neutral-800 rounded relative overflow-hidden"
                      >
                        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 flex space-x-1">
                          <motion.div 
                            animate={{ 
                              backgroundColor: ['#9333ea', '#2563eb', '#9333ea'],
                              transition: { duration: 3, repeat: Infinity, delay: i * 0.5 }
                            }}
                            className="w-2 h-2 rounded-full bg-purple-600"
                          ></motion.div>
                          <motion.div 
                            animate={{ 
                              backgroundColor: ['#2563eb', '#9333ea', '#2563eb'],
                              transition: { duration: 3, repeat: Infinity, delay: i * 0.5 + 1 }
                            }}
                            className="w-2 h-2 rounded-full bg-blue-600"
                          ></motion.div>
                        </div>
                        
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-14 h-4">
                          <div className="grid grid-cols-4 gap-1 h-full">
                            {[...Array(4)].map((_, j) => (
                              <div key={j} className="bg-black rounded-sm"></div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Connection Lines */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute"
                  >
                    <svg width="400" height="200" viewBox="0 0 400 200">
                      {/* Cloud Connection */}
                      <motion.path
                        d="M 100 100 C 150 20, 250 20, 300 100"
                        stroke="#2563eb"
                        strokeWidth="2"
                        fill="transparent"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1.5 }}
                      />
                      
                      {/* Database Connection */}
                      <motion.path
                        d="M 100 110 C 150 180, 250 180, 300 110"
                        stroke="#9333ea"
                        strokeWidth="2"
                        fill="transparent"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1.8 }}
                      />
                    </svg>
                  </motion.div>
                  
                  {/* Cloud Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2, type: "spring" }}
                    className="absolute left-3/4 top-1/4 bg-blue-600 p-3 rounded-full shadow-lg"
                  >
                    <IconCloud size={24} className="text-white" />
                  </motion.div>
                  
                  {/* Database Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2.2, type: "spring" }}
                    className="absolute left-3/4 bottom-1/4 bg-purple-600 p-3 rounded-full shadow-lg"
                  >
                    <IconDatabase size={24} className="text-white" />
                  </motion.div>
                  
                  {/* Data Transfer Animation */}
                  <motion.div
                    animate={{
                      x: [0, 150, 150, 0],
                      y: [0, -40, 40, 0],
                      opacity: [0, 1, 1, 0],
                      scale: [0.5, 1, 1, 0.5],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute left-1/4 top-1/2 bg-blue-500 w-3 h-3 rounded-full"
                  />
                </div>
              </div>
            )}
            
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              <div className="h-2 w-2 rounded-full bg-neutral-700"></div>
              <div className={`h-2 w-6 rounded-full ${activeServiceData.color}`}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechServicesSection;