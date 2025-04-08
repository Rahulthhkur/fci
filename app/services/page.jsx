"use client"; // Essential for hooks and Framer Motion

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
// Assuming you have lucide-react installed for icons
import { ChevronRight, ArrowRight, Shield, Code, Server, Database, Settings, BarChart2, Smartphone, Globe, Cpu, MessageSquare } from 'lucide-react';

// --- Reusable Framer Motion Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] } // Custom ease for smooth feel
  }
};

const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerChildren,
      delayChildren: delayChildren
    }
  }
});

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut', delay: 0.4 } // Delay for visual element
  }
};

// --- Component ---
export default function ServicesPage() {
  // --- State ---
  const [activeTab, setActiveTab] = useState('all');
  const [emailInput, setEmailInput] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [bgParticles, setBgParticles] = useState([]); // Holds properties for background particles

  // --- Effects ---

  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Setup listeners and generate particle data on mount
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);

    // Generate particle properties client-side to avoid hydration mismatch
    const particles = Array.from({ length: 15 }).map(() => ({
      id: Math.random(),
      width: `${Math.random() * 200 + 50}px`,
      height: `${Math.random() * 200 + 50}px`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      parallaxFactor: Math.random() * 0.15 + 0.05 // Controls parallax speed
    }));
    setBgParticles(particles);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array ensures this runs only once

  // --- Data --- (Categories, Services, Featured, Testimonials)
  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'cloud', name: 'Cloud Solutions' },
    { id: 'development', name: 'Development' },
    { id: 'security', name: 'Security' },
    { id: 'consulting', name: 'Consulting' }
  ];

  const services = [
     { id: 1, title: 'Cloud Infrastructure', description: 'Scalable and secure cloud infrastructure solutions tailored to your business needs.', icon: <Server size={24} className="text-gray-400" />, category: 'cloud', features: [ 'Auto-scaling resources', 'Global distribution', 'High availability', 'Disaster recovery' ] },
     { id: 2, title: 'Database Management', description: 'Comprehensive database solutions for efficient data storage and retrieval.', icon: <Database size={24} className="text-gray-400"/>, category: 'cloud', features: [ 'SQL & NoSQL solutions', 'Automated backups', 'Performance optimization', 'Data migration' ] },
     { id: 3, title: 'Web Development', description: 'Custom websites and web applications built with cutting-edge technologies.', icon: <Globe size={24} className="text-gray-400"/>, category: 'development', features: [ 'Responsive design', 'SEO optimization', 'Performance tuning', 'Content management' ] },
     { id: 4, title: 'Mobile Applications', description: 'Native and cross-platform mobile applications for iOS and Android.', icon: <Smartphone size={24} className="text-gray-400"/>, category: 'development', features: [ 'Cross-platform solutions', 'Native development', 'App store optimization', 'Backend integration' ] },
     { id: 5, title: 'Cybersecurity', description: 'Comprehensive security solutions to protect your business from digital threats.', icon: <Shield size={24} className="text-gray-400"/>, category: 'security', features: [ 'Threat detection', 'Penetration testing', 'Security audits', 'Compliance solutions' ] },
     { id: 6, title: 'Custom Software', description: 'Bespoke software solutions designed to address your unique business challenges.', icon: <Code size={24} className="text-gray-400"/>, category: 'development', features: [ 'Enterprise applications', 'Integration solutions', 'Legacy system modernization', 'Process automation' ] },
     { id: 7, title: 'IT Consulting', description: 'Strategic technology advisory services to drive business growth and innovation.', icon: <Settings size={24} className="text-gray-400"/>, category: 'consulting', features: [ 'Technology roadmapping', 'Digital transformation', 'IT strategy', 'Vendor selection' ] },
     { id: 8, title: 'Data Analytics', description: 'Turn your data into actionable insights with our advanced analytics solutions.', icon: <BarChart2 size={24} className="text-gray-400"/>, category: 'consulting', features: [ 'Business intelligence', 'Predictive analytics', 'Data visualization', 'Machine learning' ] }
  ];

  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(service => service.category === activeTab);

  const featuredService = {
     title: "Enterprise Cloud Solutions", description: "Transform your business with our comprehensive enterprise cloud solutions. We provide end-to-end services from migration planning to ongoing optimization, ensuring a seamless transition to the cloud with minimal disruption to your operations.", longDescription: "Our enterprise cloud solutions are designed to help businesses of all sizes leverage the power of cloud computing. We understand that each organization has unique requirements, which is why our approach is consultative and tailored to your specific needs. From initial assessment and strategy development to implementation and ongoing management, our team of certified experts will guide you through every step of your cloud journey.", benefits: [ { title: "Scalability", description: "Easily scale your resources up or down based on demand, ensuring optimal performance without overspending." }, { title: "Cost Optimization", description: "Reduce capital expenditure and benefit from a pay-as-you-go model that aligns with your business needs." }, { title: "Enhanced Security", description: "Protect your critical data with advanced security measures, compliance frameworks, and regular audits." }, { title: "Business Continuity", description: "Ensure your operations continue without interruption with robust disaster recovery and backup solutions." } ]
  };

  const testimonials = [
     { id: 1, text: "Working with this team transformed our IT infrastructure. Their cloud solutions have significantly improved our operational efficiency.", author: "Sarah Johnson", position: "CTO, TechCorp" }, { id: 2, text: "The cybersecurity services provided have given us peace of mind knowing our sensitive data is protected against evolving threats.", author: "Michael Chen", position: "Security Director, DataSafe Inc." }, { id: 3, text: "Their custom software development team delivered a solution that perfectly addressed our unique business requirements.", author: "Alex Rivera", position: "Operations Manager, InnovateCo" }
  ];


  // --- Render ---
  return (
    <div className="min-h-screen bg-black text-gray-300 font-sans"> {/* Base styles */}

      {/* Cursor glow effect */}
      <div
        className="pointer-events-none fixed inset-0 z-[60] opacity-50"
        style={{ background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.08), transparent 80%)`}}
      />

      {/* Background grain texture - Ensure you have the base64 data */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20 z-0"></div>

      {/* === Navbar Placeholder === */}
      {/* Add your Navbar component here if it's not in layout.jsx */}
      {/* <YourNavbarComponent /> */}
       {/* Remember to add padding-top to the main content if navbar is fixed */}


      {/* === Hero Section === */}
      <motion.section
        className="relative overflow-hidden py-32 md:py-40 px-4 min-h-screen flex items-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer(0.3)}
      >
        {/* Background elements */}
         <motion.div
           className="absolute top-0 right-0 w-1/2 h-full opacity-5 z-0"
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 0.05, scale: 1 }}
           transition={{ duration: 1.5, ease: "easeOut" }}
         >
           <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-zinc-700 animate-pulse"></div>
           <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full border border-zinc-800 animate-pulse delay-500"></div>
         </motion.div>

        {/* Animated particles background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {bgParticles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-zinc-800 opacity-10"
              style={{
                width: particle.width, height: particle.height, top: particle.top, left: particle.left,
                filter: 'blur(80px)',
                transform: `translateY(${scrollY * particle.parallaxFactor}px)`,
                transition: 'transform 0.4s ease-out'
              }}
            />
          ))}
        </div>

        {/* Main Hero Content */}
        <div className="container mx-auto max-w-6xl relative z-10">
           <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

              {/* Text Content (Left Column) */}
              <motion.div
                className="lg:w-1/2 text-center lg:text-left"
                variants={staggerContainer(0.2, 0.1)}
                initial="hidden" // Ensure children inherit initial state
                animate="visible" // Ensure children inherit animate state
              >
                <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 text-white">
                  Our Services
                </motion.h1>
                <motion.div
                    variants={fadeInUp}
                    className="h-1 bg-white mb-8 origin-left mx-auto lg:mx-0"
                    style={{ width: '6rem', scaleX: 0 }} // Initial style for animation
                    animate={{ scaleX: 1 }} // Animate scaleX here
                    transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                ></motion.div>
                <motion.p variants={fadeInUp} className="text-xl md:text-2xl max-w-2xl mx-auto lg:mx-0 text-gray-300 mb-12">
                  Comprehensive technology solutions designed to drive innovation and accelerate growth for your business.
                </motion.p>
             </motion.div>

              {/* Image / SVG Visual (Right Column) */}
               <motion.div
                  className="lg:w-1/2 flex justify-center lg:justify-end"
                  variants={scaleUp} // Use scaleUp variant for entrance
                  initial="hidden"
                  animate="visible"
               >
                  <div className="relative w-full max-w-md aspect-square p-4">
                       <div className="absolute inset-0 rounded-full bg-white/5 blur-3xl animate-pulse delay-1000 duration-3000"></div>
                       <motion.svg
                         viewBox="0 0 200 200"
                         xmlns="http://www.w3.org/2000/svg"
                         className="w-full h-full relative z-10"
                         initial="hidden" // Use variants here for consistency
                         animate="visible"
                         variants={staggerContainer(0.1, 0.6)} // Stagger SVG elements after text
                        >
                          <defs>
                            <linearGradient id="gradHero1" x1="0%" y1="0%" x2="100%" y2="100%"> <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" /> <stop offset="100%" stopColor="#A0A0A0" stopOpacity="0.1" /> </linearGradient>
                            <linearGradient id="gradHero2" x1="100%" y1="0%" x2="0%" y2="100%"> <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.15" /> <stop offset="100%" stopColor="#D1D5DB" stopOpacity="0.15" /> </linearGradient>
                          </defs>
                          <motion.circle variants={fadeInUp} cx="100" cy="100" r="90" fill="url(#gradHero1)" />
                          <motion.circle variants={fadeInUp} cx="100" cy="100" r="75" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.5" />
                          <motion.circle variants={fadeInUp} cx="100" cy="100" r="60" fill="url(#gradHero2)" />
                          <motion.circle variants={fadeInUp} cx="100" cy="100" r="45" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
                          <motion.path variants={fadeInUp} d="M 50 150 Q 100 50 150 150 T 250 150" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" fill="transparent" />
                          <motion.path variants={fadeInUp} d="M 30 100 Q 100 180 170 100" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="0.5" fill="transparent" />
                        </motion.svg>
                  </div>
               </motion.div>
           </div>
        </div>
      </motion.section>


      {/* === Services Filter === */}
      <motion.section
        className="py-8 px-4 bg-black/50 backdrop-blur-sm  top-0 z-40 border-b border-t border-zinc-800"
        initial="hidden"
        whileInView="visible"
        variants={staggerContainer(0.05)}
        viewport={{ once: true, amount: 0.8 }} // Trigger when mostly in view
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                variants={fadeInUp}
                onClick={() => setActiveTab(category.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-full transition-colors duration-300 text-sm sm:text-base ${
                  activeTab === category.id ? 'bg-white text-black font-medium' : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700 hover:text-white'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* === Services Grid === */}
      <section className="py-16 md:py-24 px-4 bg-black"> {/* Ensure background */}
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {filteredServices.map((service) => (
                <motion.div
                  key={service.id}
                  variants={fadeInUp} // Use fade up for individual cards
                  layout // Animate layout changes
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }} // Simple fade out up
                  className="group"
                >
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02, borderColor: 'rgba(100, 100, 100, 0.5)' }} // Subtle scale and border change
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }} // Springy hover
                    className="bg-zinc-950 rounded-xl p-8 h-full border border-zinc-800 shadow-lg flex flex-col" // Use flex-col for alignment
                  >
                    <div className="mb-6 p-3 rounded-full bg-zinc-800 border border-zinc-700 inline-block text-gray-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">{service.title}</h3>
                    <p className="text-gray-400 mb-6 flex-grow">{service.description}</p> {/* flex-grow pushes link down */}

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <span className="text-gray-600">✓</span> {/* Use gray check */}
                          <p className="text-gray-400">{feature}</p>
                        </div>
                      ))}
                    </div>

                     {/* Use Link if navigating */}
                    <motion.a // Use motion.a for hover effect on link itself
                      href="#"
                      whileHover={{ x: 3 }}
                      className="inline-flex items-center text-white font-medium group-hover:text-gray-300 transition-colors mt-auto" // mt-auto pushes to bottom
                     >
                      Learn more <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* === Featured Service === */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer(0.2)}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
              <div className="lg:w-1/2">
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  {featuredService.title}
                </motion.h2>
                 <motion.div
                     variants={fadeInUp}
                     className="h-1 bg-white mb-8 origin-left"
                     style={{ width: '4rem', scaleX: 0 }} // w-16
                     whileInView={{ scaleX: 1 }}
                     transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                     viewport={{ once: true }}
                 ></motion.div>
                <motion.p variants={fadeInUp} className="text-lg text-gray-300 mb-6">
                  {featuredService.description}
                </motion.p>
                <motion.p variants={fadeInUp} className="text-base text-gray-400 mb-8 leading-relaxed">
                  {featuredService.longDescription}
                </motion.p>
                <motion.button
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.15)' }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-black font-bold rounded-lg transition-all duration-300 inline-flex items-center shadow-md"
                >
                  Request a consultation <ArrowRight size={18} className="ml-2" />
                </motion.button>
              </div>

              <motion.div
                 className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
                 variants={staggerContainer(0.15, 0.5)} // Stagger children with delay
               >
                {featuredService.benefits.map((benefit) => ( // Removed index as not needed for key
                  <motion.div
                    key={benefit.title} // Use unique title as key
                    variants={fadeInUp}
                     whileHover={{ y: -5, scale: 1.03, borderColor: 'rgba(100,100,100,0.4)' }} // Gray border
                     transition={{ type: 'spring', stiffness: 300 }}
                    className="bg-black/50 p-6 rounded-lg border border-zinc-800 shadow-md"
                  >
                    <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === Testimonials === */}
      <section className="py-24 px-4 bg-black">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold mb-16 text-center text-white">
              What Our <span className="text-gray-400">Clients Say</span>
            </h2>
          </motion.div>

           <motion.div
             className="grid grid-cols-1 md:grid-cols-3 gap-8"
             variants={staggerContainer()}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.1 }}
           >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={fadeInUp}
                 whileHover={{ scale: 1.03, y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.4)' }} // Add shadow
                 transition={{ type: 'spring', stiffness: 300 }}
                className="bg-zinc-950 p-8 rounded-lg border border-zinc-800 shadow-lg" // Use zinc-950
              >
                <div className="mb-6 flex text-gray-600"> {/* Gray stars */}
                   {[...Array(5)].map((_, i) => ( <span key={i}>★</span> ))}
                 </div>
                <p className="text-gray-300 mb-6 italic text-lg">"{testimonial.text}"</p>
                <div className="border-t border-zinc-800 pt-4">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* === Call to Action / Newsletter === */}
      <section className="py-24 px-4 bg-zinc-950">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp} // Single fade up for the block
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Stay Updated with Our <span className="text-gray-400">Newsletter</span>
            </h2>
            <p className="text-lg text-gray-300 mb-12">
              Subscribe to receive the latest insights, industry trends, and exclusive offers delivered straight to your inbox.
            </p>

            {/* Use motion here if desired, or keep simple */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-black border border-zinc-700 px-6 py-4 rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors placeholder-gray-500"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(255,255,255,0.15)' }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-black px-8 py-4 rounded-lg font-bold transition-all duration-300"
              >
                Subscribe Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

    </div> // End main wrapper
  );
}