import React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Zap } from "lucide-react";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Simplified and potentially more abstract SVG visual
  const renderAbstractVisual = () => (
    <svg viewBox="0 0 400 300" className="w-full h-auto">
      <defs>
        <linearGradient id="visualGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" /> {/* Blue 500 */}
          <stop offset="100%" stopColor="#8b5cf6" /> {/* Violet 500 */}
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Concentric Rings - subtle pulse or energy */}
      <motion.g
        initial={{ scale: 0.95, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <circle
          cx="200"
          cy="150"
          r="80"
          stroke="url(#visualGradient)"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
          filter="url(#glow)"
        />
        <circle
          cx="200"
          cy="150"
          r="60"
          stroke="url(#visualGradient)"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />
        <circle
          cx="200"
          cy="150"
          r="40"
          stroke="url(#visualGradient)"
          strokeWidth="0.5"
          fill="rgba(99, 102, 241, 0.05)"
          opacity="0.7"
        />{" "}
        {/* Indigo semi-transparent fill */}
      </motion.g>
      {/* Abstract Lines / Data flow */}
      {Array.from({ length: 7 }).map((_, i) => (
        <motion.path
          key={i}
          d={`M${50 + i * 50}, 50 Q${100 + Math.random() * 100}, 150 ${
            350 - i * 50
          }, 250`}
          stroke="url(#visualGradient)"
          strokeWidth={0.5 + Math.random() * 0.5}
          fill="none"
          opacity={0.2 + Math.random() * 0.3}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 + Math.random() * 0.3 }}
          transition={{
            duration: 1.5 + Math.random(),
            delay: i * 0.1,
            ease: "circOut",
          }}
        />
      ))}
      {/* Central Element */}
      <Zap size={32} x="184" y="134" color="#a78bfa" opacity={0.8} />{" "}
      {/* Violet 400 */}
    </svg>
  );

  return (
    <section className="w-full bg-black text-neutral-200 py-24 sm:py-32 overflow-hidden">
      {" "}
      {/* Increased padding, lighter text base */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main about section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {" "}
          {/* Increased gap and slightly reduced bottom margin */}
          {/* Left side - Animated visual element */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }} // Trigger animation earlier
            className="relative group" // Added group for potential hover effects
          >
            <div className="relative z-10 p-4">
              {" "}
              {/* Added padding around SVG */}
              {renderAbstractVisual()}
            </div>
            {/* Enhanced background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 to-violet-600/15 rounded-3xl blur-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-500 -z-10"></div>
            <div className="absolute -inset-4 bg-gradient-to-tl from-blue-700/10 to-violet-700/10 rounded-[2rem] blur-4xl opacity-50 -z-20"></div>
          </motion.div>
          {/* Right side - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              {/* Refined subheading style */}
              <div className="inline-block mb-4 bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-1 rounded-full">
                <h5 className="text-gray-400 tracking-wider text-sm font-semibold">
                  About Us
                </h5>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
                {" "}
                {/* Slightly larger heading */}
                Future Core Innovations
              </h2>
            </motion.div>

            {/* Enhanced paragraph styling */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-300 leading-relaxed text-balance"
            >
              {" "}
              {/* Larger base text, lighter gray, text-balance */}
              At Future Core Innovations, our mission is to push the boundaries
              of what's possible through innovative technology solutions. We
              cultivate creativity and excellence to exceed client expectations.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-300 leading-relaxed text-balance"
            >
              Our goal is to drive progress and transform industries, creating a
              better, more connected world. We believe true progress demands
              deep understanding and collaboration alongside cutting-edge tech.
            </motion.p>

            {/* Removed one paragraph for conciseness, combined ideas */}
            {/* <motion.p variants={itemVariants} className="text-lg text-neutral-300 leading-relaxed text-balance">
              We take a holistic approach to innovation. We understand that true progress requires more than just cutting-edge technology; it demands a deep understanding of our client's needs and a collaborative spirit.
            </motion.p> */}

            <motion.div variants={itemVariants} className="pt-6">
              {/* Refined Button Style */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 20px -5px rgba(59, 130, 246, 0.3)",
                }} // More subtle hover scale, adjusted shadow
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }} // Spring animation for button
                className="bg-white text-black px-8 py-4 flex items-center justify-center space-x-2 hover:bg-gray-200 transition-all duration-300 rounded group relative overflow-hidden"
              >
                Learn More About Us
                <ChevronRight size={20} className="-mr-1" />{" "}
                {/* Slightly larger icon, adjusted margin */}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Project CTA section - Enhanced Styling */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative bg-gradient-to-br from-neutral-900 to-black rounded-2xl p-10 sm:p-14 shadow-xl border border-white/10 overflow-hidden" // Subtle border, increased padding
        >
          {/* Decorative background elements */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, #3b82f6, transparent 70%), radial-gradient(circle at 80% 70%, #8b5cf6, transparent 70%)",
            }}
          ></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                {" "}
                {/* Consistent heading style */}
                Start Your Next Project
              </h3>
              <p className="text-lg text-neutral-300 leading-relaxed text-balance">
                Ready to transform your ideas into reality? Our expert team is
                here to guide you through the tech landscape and build solutions
                that fuel growth.
              </p>
            </div>

            {/* CTA Button - Consistent style */}
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 15px rgba(59, 130, 246, 0.25)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-black text-white hover:text-black border border-white px-8 py-4 flex items-center justify-center space-x-2 hover:bg-gray-200 transition-all duration-300 rounded group relative overflow-hidden" // Consistent primary button style
            >
              Contact Us
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
