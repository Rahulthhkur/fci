"use client"
import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function AboutUsPage() {
  const [scrollY, setScrollY] = useState(0);
  const sectionRefs = useRef([]);

  // Reset scroll position when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle scroll animations and parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    // Animation for fade-in elements with staggered timing
    const fadeElements = document.querySelectorAll('.fade-element');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add a slight delay to each element for staggered animation
          setTimeout(() => {
            entry.target.classList.add('appear');
          }, index * 100);
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
      observer.observe(element);
    });
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  // Cursor glow effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden relative">
      {/* Cursor glow effect */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 opacity-20"
        style={{
          background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15), transparent 80%)`,
        }}
      />
      
      {/* Background grain texture */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-20 z-0"></div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black z-0"></div>
        
        {/* Animated particles background */}
        <div className="absolute inset-0 overflow-hidden z-0">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white opacity-5"
              style={{
                width: `${Math.random() * 300 + 50}px`,
                height: `${Math.random() * 300 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: 'blur(70px)',
                transform: `translateY(${scrollY * (Math.random() * 0.2)}px)`,
                transition: 'transform 0.3s ease-out'
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
              Pioneering Tomorrow's Technology
            </h1>
            <p className="text-xl mb-10 text-gray-300 leading-relaxed">
              At Future Core Innovations, we push the boundaries of what's possible through innovative technology solutions that transform industries and improve lives.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#about" className="group relative inline-flex items-center px-10 py-4 overflow-hidden rounded-full bg-white text-black font-medium shadow-lg">
                <span className="absolute left-0 w-0 h-full bg-black transition-all duration-300 ease-out group-hover:w-full opacity-10"></span>
                <span className="relative flex items-center">
                  Discover Our Vision
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <svg className="w-6 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-black relative">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 fade-element opacity-0 transform translate-y-10 transition duration-1000">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-200">About Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Get to know the company that's reshaping the digital landscape
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Who We Are",
                content: "Future Core Innovations is a leading technology company focused on innovation. Founded in 2015, we've grown from a small team of passionate tech enthusiasts to a global force driving digital transformation across industries. Our team of experts combines technical brilliance with creative thinking to deliver solutions that not only meet current needs but anticipate future challenges."
              },
              {
                title: "Our Mission",
                content: "At Future Core Innovations, our mission is to push the boundaries of what's possible through innovative technology solutions. We are committed to fostering a culture of creativity and excellence, ensuring that we not only meet but exceed our clients' expectations. Our goal is to drive progress and transform industries, creating a better, more connected world for everyone."
              },
              {
                title: "Our Approach",
                content: "We take a holistic approach to innovation. We understand that true progress requires more than just cutting-edge technology; it demands a deep understanding of our clients' needs and a collaborative spirit. By combining strategic insight with technical expertise, we deliver tailored solutions that not only address immediate challenges but also pave the way for long-term success."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="fade-element opacity-0 transform translate-y-10 transition duration-1000"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-full bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 hover:border-white transition-all duration-300 shadow-lg">
                  <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent opacity-30"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: "550+", label: "Completed Projects" },
              { value: "1.2k", label: "Businesses Covered" },
              { value: "300+", label: "Happy Clients" },
              { value: "25+", label: "Countries Served" }
            ].map((stat, index) => (
              <div key={index} className="text-center fade-element opacity-0 transform translate-y-10 transition duration-1000 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 p-8">
                  <motion.div 
                    className="text-5xl font-bold mb-4 text-white inline-block"
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-400 text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black relative">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-element opacity-0 transform translate-y-10 transition duration-1000">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-200">Core Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "💻", title: "Custom Software Development", description: "Bespoke software solutions designed to address your unique business challenges, from enterprise applications to specialized tools that streamline operations." },
              { icon: "🌐", title: "Cloud Solutions", description: "Comprehensive cloud transformation services including migration, optimization, and management for enhanced scalability and cost-efficiency." },
              { icon: "📱", title: "Mobile App Development", description: "Cross-platform and native mobile applications that deliver exceptional user experiences and drive engagement across iOS and Android devices." },
              { icon: "🤖", title: "AI & Machine Learning", description: "Intelligent solutions that leverage cutting-edge AI technologies to analyze data, automate processes, and provide valuable insights." },
              { icon: "🔒", title: "Cybersecurity Services", description: "Comprehensive security solutions to protect your digital assets, prevent breaches, and ensure regulatory compliance in an evolving threat landscape." },
              { icon: "📊", title: "Data Analytics & BI", description: "Transform raw data into actionable intelligence with our advanced analytics solutions that drive informed decision-making and business growth." }
            ].map((service, index) => (
              <motion.div 
                key={index} 
                className="fade-element opacity-0 transform translate-y-10 transition duration-1000"
                whileHover={{ y: -5 }}
              >
                <div className="h-full bg-gradient-to-br from-gray-900 to-black rounded-xl p-8 border border-gray-800 hover:border-white transition-colors duration-300 group">
                  <div className="mb-6 text-4xl relative">
                    <div className="absolute -inset-1 bg-white rounded-full opacity-0 group-hover:opacity-10 blur transition-opacity duration-300"></div>
                    <div className="relative">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-gray-200 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 fade-element opacity-0 transform translate-y-10 transition duration-1000">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-200">Why Choose Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              What sets Future Core Innovations apart from competitors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "🌍", title: "Worldwide Experience", description: "Our global expertise enables us to guide you through international challenges and opportunities with confidence, leveraging our deep market knowledge." },
              { icon: "🚀", title: "Incentive for Results", description: "We focus on achieving measurable outcomes, ensuring our objectives align with yours to drive exceptional performance and success at every stage." },
              { icon: "⭐", title: "High-Quality Results", description: "Our team delivers outstanding results, utilizing cutting-edge technologies and best practices to ensure every project meets the highest standards." },
              { icon: "⚡", title: "Agile Methodology", description: "We embrace agile practices that allow for flexibility, rapid iteration, and continuous improvement throughout the development lifecycle." },
              { icon: "🤝", title: "Strategic Partnership", description: "We don't just deliver projects; we build lasting relationships based on trust, transparency, and a shared vision for success." },
              { icon: "🔄", title: "Continuous Innovation", description: "Our commitment to ongoing research and development ensures we're always at the cutting edge of technology trends and solutions." }
            ].map((reason, index) => (
              <motion.div 
                key={index} 
                className="fade-element opacity-0 transform translate-y-10 transition duration-1000"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="h-full bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-white hover:shadow-lg hover:shadow-white/5 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="text-2xl mr-3">{reason.icon}</div>
                    <h3 className="text-xl font-bold text-white">{reason.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
    

      {/* Contact CTA Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">Ready to Transform Your Digital Future?</h2>
            <p className="text-gray-300 mb-10 text-lg">
              Let's collaborate to create innovative solutions that drive your business forward. Our team is ready to bring your vision to life.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#" className="inline-flex items-center px-8 py-4 rounded-full bg-white text-black font-medium shadow-lg shadow-white/10 hover:shadow-white/20 transition-all duration-300">
                <span className="mr-2">Get in Touch</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px);
          background-size: 40px 40px;
        }
        
        .fade-element {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 1s ease, transform 1s ease;
        }
        
        .fade-element.appear {
          opacity: 1;
          transform: translateY(0);
        }
        
        .bg-gradient-radial {
          background-image: radial-gradient(var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}