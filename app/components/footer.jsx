"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Dribbble } from 'lucide-react'; // Added social icons

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Slightly adjusted stagger
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Slightly increased y offset
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } // Smoother ease
    }
  };

  // Social Icons Data
  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
    { name: "Dribbble", icon: Dribbble, href: "#" },
  ];

  return (
    <footer className="bg-black text-neutral-300 py-16 md:py-24 border-t border-neutral-800/50">
      <motion.div
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // Trigger slightly earlier
        variants={containerVariants}
      >
        {/* Top Section: Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16 md:mb-20">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              FUTURE<span className="text-cyan-400">CORE</span>
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed pr-4">
              Empowering businesses through innovative technology solutions
              since 2015. Driving digital transformation forward.
            </p>
            <div className="pt-3">
              <span className="inline-block h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded"></span>
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-base font-semibold text-neutral-200 uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-3">
              {["Custom Software Dev", "Cloud Solutions", "Cybersecurity", "AI & ML Integration"].map((item, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="text-neutral-400 hover:text-white relative group text-sm pb-1"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>{item}</span>
                    <span className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-[width] duration-300 ease-out bg-cyan-400"></span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-base font-semibold text-neutral-200 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Careers", "Blog", "Contact"].map((item, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="text-neutral-400 hover:text-white relative group text-sm pb-1"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>{item}</span>
                    <span className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-[width] duration-300 ease-out bg-blue-500"></span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-base font-semibold text-neutral-200 uppercase tracking-wider mb-4">Connect</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => {
                 const Icon = link.icon;
                 return (
                    <li key={link.name}>
                        <motion.a
                        href={link.href}
                        target="_blank" // Open social links in new tab
                        rel="noopener noreferrer" // Security best practice
                        className="text-neutral-400 hover:text-white relative group text-sm pb-1 flex items-center space-x-2"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                        >
                        <Icon className="w-4 h-4 text-neutral-500 group-hover:text-purple-400 transition-colors" />
                        <span>{link.name}</span>
                        <span className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-[width] duration-300 ease-out bg-purple-500"></span>
                        </motion.a>
                    </li>
                 );
              })}
            </ul>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          variants={itemVariants}
          className="mb-16 md:mb-20 p-6 md:p-8 border border-neutral-800/70 rounded-xl relative overflow-hidden bg-gradient-to-br from-neutral-900/30 to-neutral-950/30 backdrop-blur-sm"
        >
          {/* Subtle background glow */}
          <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-600/20 blur-lg opacity-60"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Stay Ahead of the Curve</h3>
              <p className="text-neutral-400 text-sm">Subscribe for the latest tech insights, trends, and news.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your.email@example.com"
                required
                className="px-4 py-3 bg-neutral-900 border border-neutral-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 flex-grow text-sm text-neutral-200 placeholder-neutral-500"
              />
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(56, 189, 248, 0.3)' }} // Cyan shadow
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium text-white hover:from-cyan-400 hover:to-blue-500 transition duration-300 shadow-md"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="border-t border-neutral-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left"
        >
          <p className="text-neutral-500 text-xs mb-4 md:mb-0">
            {/* Dynamic year */}
            &copy; {new Date().getFullYear()} FutureCore Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {["Privacy Policy", "Terms of Service", "Cookies Policy"].map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-neutral-500 hover:text-neutral-200 transition-colors text-xs"
                whileHover={{ y: -1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;