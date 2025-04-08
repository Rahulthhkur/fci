import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Compass,
  DraftingCompass,
  Component,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  ChevronRight
} from 'lucide-react';

// --- Data for Approach Steps ---
const approachSteps = [
  {
    id: 1,
    number: "01",
    title: "Discovery",
    description: "We begin by deeply understanding your vision, goals, challenges, and user needs through collaborative workshops and research.",
    icon: Compass
  },
  {
    id: 2,
    number: "02",
    title: "Strategy & Design",
    description: "A tailored roadmap is crafted, defining the architecture, tech stack, and UX/UI design prototypes for optimal results.",
    icon: DraftingCompass
  },
  {
    id: 3,
    number: "03",
    title: "Agile Implementation",
    description: "Our team executes with precision, using iterative development cycles for flexibility, transparency, and continuous feedback.",
    icon: Component
  },
  {
    id: 4,
    number: "04",
    title: "Launch & Evolution",
    description: "We ensure a smooth deployment and provide ongoing support, monitoring, and optimization for sustained growth.",
    icon: TrendingUp
  },
];

// --- Enhanced Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1], // Improved custom easing
    },
  },
};

const hoverVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.03,
    transition: { 
      duration: 0.3, 
      ease: "easeOut" 
    } 
  }
};

// --- Modern Approach Card Component ---
const ApproachCard = ({ step, index }) => {
  const Icon = step.icon;
  return (
    <motion.div
      variants={itemVariants}
      initial="rest"
      whileHover="hover"
      animate="visible"
      custom={index}
      className="relative p-6 md:p-8 bg-neutral-900/70 border border-neutral-800/90 rounded-xl overflow-hidden backdrop-blur-lg h-full flex flex-col group"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-cyan-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
      
      {/* Glowing Border Effect on Hover */}
      <div className="absolute inset-0 rounded-xl border border-cyan-500/0 group-hover:border-cyan-500/20 transition-all duration-500"></div>
      
      {/* Number in the background */}
      <span className="absolute -top-4 -left-2 text-[6rem] font-bold text-white/5 select-none z-0 group-hover:text-white/8 transition-colors duration-500">
        {step.number}
      </span>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col flex-grow">
        <motion.div 
          className="mb-4 inline-block p-3 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-lg self-start"
          whileHover={{ 
            scale: 1.05, 
            background: "linear-gradient(to bottom right, rgba(8, 145, 178, 0.3), rgba(37, 99, 235, 0.3))" 
          }}
        >
          <Icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
        </motion.div>
        
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-cyan-50 transition-colors duration-300">
          {step.title}
        </h3>
        
        <p className="text-neutral-400 text-sm leading-relaxed flex-grow group-hover:text-neutral-300 transition-colors duration-300">
          {step.description}
        </p>
        
        {/* Added subtle "Learn more" link with animation */}
        <motion.div 
          className="mt-4 flex items-center text-cyan-500/70 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: -5 }}
          whileHover={{ x: 0 }}
        >
          <span>Learn more</span>
          <ChevronRight size={16} className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
        </motion.div>
      </div>
    </motion.div>
  );
};

// --- Main Section Component ---
const ApproachSection = () => {
  return (
    <motion.section
      id="approach"
      className="py-2 md:py-2 bg-black text-white relative overflow-hidden" // Reduced top margin
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Enhanced Background Gradient Effects */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute w-1/2 h-1/2 bg-gradient-to-tr from-cyan-900/70 via-blue-900/30 to-transparent rounded-full blur-[150px] top-0 right-0 animate-pulse-slow animation-delay-4000"></div>
        <div className="absolute w-1/3 h-1/3 bg-gradient-to-bl from-blue-900/60 via-indigo-900/30 to-transparent rounded-full blur-[120px] bottom-0 left-0 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute w-1/4 h-1/4 bg-gradient-to-tr from-cyan-900/50 via-transparent to-transparent rounded-full blur-[80px] top-1/2 left-1/4 animate-pulse-slow animation-delay-3000"></div>
      </div>

      {/* Grid Lines Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMEgwdjYwaDYwVjB6TTU5IDFIMXY1OGg1OFYxeiIgZmlsbD0iIzIwMjAyMCIgZmlsbC1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start mb-12 md:mb-16"
          variants={itemVariants}
        >
          <div>
            <motion.h5 
            className="inline-block mb-4 bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-1 rounded-full">
            <span className="text-gray-400 tracking-wider text-sm font-semibold">WHAT WE DO</span>
            </motion.h5>
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Our Collaborative Approach
            </motion.h2>
          </div>
          <motion.p 
            className="md:w-2/5 lg:w-1/3 text-neutral-400 mt-6 md:mt-0 text-base md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            We follow a proven, agile methodology ensuring transparency, partnership, and exceptional results at every project stage.
          </motion.p>
        </motion.div>

        {/* Approach Steps Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={itemVariants}
        >
          {approachSteps.map((step, index) => (
            <ApproachCard key={step.id} step={step} index={index} />
          ))}
        </motion.div>

        {/* CTA & Contact Block */}
        <motion.div
          className="mt-16 md:mt-24 bg-gradient-to-br from-neutral-900/80 via-neutral-900/60 to-neutral-800/50 border border-neutral-700/60 rounded-2xl shadow-2xl relative overflow-hidden"
          variants={itemVariants}
          whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.9)" }}
          transition={{ duration: 0.5 }}
        >
          {/* Glowing Border Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Inner Glow */}
          <div className="absolute inset-px rounded-2xl bg-black/90"></div>
          
          {/* Content */}
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left Side: CTA */}
              <div className="lg:w-3/5 text-center lg:text-left">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Ready to build the future?
                </motion.h2>
                <motion.p 
                  className="text-neutral-400 text-lg mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Let's discuss how our innovative solutions and expert team can help you achieve your digital ambitions.
                </motion.p>
                <motion.button
                  className="bg-black text-white hover:text-black border border-white px-8 py-4 flex items-center justify-center space-x-2 hover:bg-gray-200 transition-all duration-300 rounded group relative overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-b from-black to-white opacity-0 group-hover:opacity-50 transition-opacity duration-300 ease-out"></span>
                  <span className="relative flex items-center space-x-2">
                    <span>Schedule a Consultation</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </div>

              {/* Right Side: Contact Info */}
              <div className="lg:w-2/5 w-full mt-10 lg:mt-0 bg-black/50 border border-neutral-700/70 rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:border-neutral-600/70">
                <h3 className="text-xl font-semibold mb-6 text-white border-b border-neutral-700/70 pb-3">
                  Get in Touch
                </h3>
                <div className="space-y-5 text-sm">
                  <motion.a 
                    href="mailto:contact@futurecore.com" 
                    className="flex items-start group text-neutral-300 hover:text-cyan-400 transition-colors duration-300"
                    whileHover={{ x: 2 }}
                  >
                    <Mail className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0 text-neutral-500 group-hover:text-cyan-500 transition-colors duration-300" />
                    <div>
                      <span className="text-neutral-500 block text-xs">Email</span>
                      <span>contact@futurecore.com</span>
                    </div>
                  </motion.a>
                  <motion.a 
                    href="tel:+15551234567" 
                    className="flex items-start group text-neutral-300 hover:text-cyan-400 transition-colors duration-300"
                    whileHover={{ x: 2 }}
                  >
                    <Phone className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0 text-neutral-500 group-hover:text-cyan-500 transition-colors duration-300" />
                    <div>
                      <span className="text-neutral-500 block text-xs">Phone</span>
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </motion.a>
                  <motion.div 
                    className="flex items-start text-neutral-300"
                    whileHover={{ x: 2 }}
                  >
                    <MapPin className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0 text-neutral-500" />
                    <div>
                      <span className="text-neutral-500 block text-xs">Address</span>
                      <span>123 Innovation Drive, Tech Center, CA 90210</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Animation Styles */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 12s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </motion.section>
  );
};

export default ApproachSection;