import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Compass,     // For Discovery
  DraftingCompass, // For Strategy (alternative: Map)
  Component,    // For Implementation (alternative: Settings, Code)
  TrendingUp,   // For Evolution (alternative: Rocket, Zap)
  Mail,
  Phone,
  MapPin
} from 'lucide-react'; // Assuming lucide-react

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

// --- Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.15, // Slightly slower stagger
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.17, 0.67, 0.83, 0.99], // Custom ease for bounce effect
    },
  },
};

// --- Approach Card Component ---
const ApproachCard = ({ step }) => {
  const Icon = step.icon;
  return (
    <motion.div
      variants={itemVariants}
      className="relative p-6 bg-neutral-900/50 border border-neutral-800/80 rounded-xl overflow-hidden backdrop-blur-sm h-full flex flex-col" // Added h-full and flex
      whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
    >
      {/* Number in the background */}
      <span className="absolute -top-4 -left-2 text-[6rem] font-bold text-white/5 select-none z-0">
        {step.number}
      </span>
      {/* Content */}
      <div className="relative z-10 flex flex-col flex-grow"> {/* Added flex-grow */}
        <div className="mb-4 inline-block p-3 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-lg self-start">
           <Icon className="w-6 h-6 text-cyan-400" />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{step.title}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed flex-grow">{step.description}</p> {/* Added flex-grow */}
      </div>
    </motion.div>
  );
};


// --- Main Section Component ---
const ApproachSection = () => {
  return (
    <motion.section
      id="approach"
      className="py-20 md:py-32 bg-black text-white relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Enhanced Background Gradient Effects */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <div className="absolute w-1/2 h-1/2 bg-gradient-to-tr from-cyan-900/70 via-transparent to-transparent rounded-full blur-[120px] top-0 right-0 animate-pulse-slow animation-delay-4000"></div>
        <div className="absolute w-1/3 h-1/3 bg-gradient-to-bl from-blue-900/60 via-transparent to-transparent rounded-full blur-[100px] bottom-0 left-0 animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-20"
          variants={itemVariants}
        >
          <div>
            <h5 className="text-sm text-cyan-400 mb-3 tracking-widest uppercase">
              HOW WE WORK
            </h5>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300">
              Our Collaborative Approach
            </h2>
          </div>
          <p className="md:w-2/5 lg:w-1/3 text-neutral-400 mt-6 md:mt-2 text-base md:text-lg">
            We follow a proven, agile methodology ensuring transparency, partnership, and exceptional results at every project stage.
          </p>
        </motion.div>

        {/* Approach Steps Grid */}
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            // Stagger is handled by parent section
        >
          {approachSteps.map((step) => (
            <ApproachCard key={step.id} step={step} />
          ))}
        </motion.div>

        {/* CTA & Contact Block */}
        <motion.div
            className="mt-20 md:mt-32 bg-gradient-to-br from-neutral-900/80 to-neutral-800/50 border border-neutral-700/60 rounded-2xl shadow-xl relative overflow-hidden"
            variants={itemVariants}
        >
             {/* Inner Glow */}
            <div className="absolute inset-px rounded-2xl bg-black"></div>
            {/* Content */}
            <div className="relative p-8 md:p-12 lg:p-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Side: CTA */}
                    <div className="lg:w-3/5 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-300">
                            Ready to build the future?
                        </h2>
                        <p className="text-neutral-400 text-lg mb-8">
                            Let's discuss how our innovative solutions and expert team can help you achieve your digital ambitions.
                        </p>
                        <motion.button
                            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-black bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg shadow-lg transition-all duration-300 ease-out hover:from-cyan-500 hover:to-blue-600 hover:shadow-cyan-500/40"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className="relative flex items-center space-x-2">
                                <span>Schedule a Consultation</span>
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                        </motion.button>
                    </div>

                    {/* Right Side: Contact Info */}
                    <div className="lg:w-2/5 w-full mt-10 lg:mt-0 bg-black/40 border border-neutral-700/70 rounded-lg p-6 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-6 text-white border-b border-neutral-700 pb-3">
                            Get in Touch
                        </h3>
                        <div className="space-y-5 text-sm">
                            <a href="mailto:contact@futurecore.com" className="flex items-start group text-neutral-300 hover:text-cyan-400 transition-colors">
                                <Mail className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0 text-neutral-500 group-hover:text-cyan-500 transition-colors" />
                                <div>
                                    <span className="text-neutral-500 block text-xs">Email</span>
                                    <span>contact@futurecore.com</span>
                                </div>
                            </a>
                            <a href="tel:+15551234567" className="flex items-start group text-neutral-300 hover:text-cyan-400 transition-colors">
                                <Phone className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0 text-neutral-500 group-hover:text-cyan-500 transition-colors" />
                                <div>
                                    <span className="text-neutral-500 block text-xs">Phone</span>
                                    <span>+1 (555) 123-4567</span>
                                </div>
                            </a>
                            <div className="flex items-start text-neutral-300">
                                <MapPin className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0 text-neutral-500" />
                                <div>
                                    <span className="text-neutral-500 block text-xs">Address</span>
                                    <span>123 Innovation Drive, Tech Center, CA 90210</span> {/* Update if needed */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
      </div>

      {/* Include CSS for pulse animation if not already present globally */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
            animation-delay: 4s;
        }
      `}</style>
    </motion.section>
  );
};

export default ApproachSection;