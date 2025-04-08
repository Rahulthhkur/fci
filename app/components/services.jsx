import React, { useEffect, useState, useRef } from "react";
import {
  Code,
  Server,
  Shield,
  Monitor,
  Zap,
  Rocket,
  ArrowRight,
} from "lucide-react";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Services data for easier management
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description:
        "Tailored solutions designed to address your unique business challenges and drive growth.",
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      icon: Server,
      title: "Cloud Infrastructure",
      description:
        "Scalable and secure cloud solutions that optimize performance and reduce operational costs.",
      color: "from-emerald-500/20 to-teal-500/20",
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      description:
        "Comprehensive security solutions that protect your data and systems from evolving threats.",
      color: "from-red-500/20 to-orange-500/20",
    },
    {
      icon: Monitor,
      title: "UI/UX Design",
      description:
        "Intuitive and engaging user experiences that connect with your audience and drive conversions.",
      color: "from-indigo-500/20 to-violet-500/20",
    },
    {
      icon: Zap,
      title: "AI & Machine Learning",
      description:
        "Advanced AI solutions that provide intelligent insights and automate complex processes.",
      color: "from-yellow-500/20 to-amber-500/20",
    },
    {
      icon: Rocket,
      title: "Digital Transformation",
      description:
        "Strategic guidance and implementation to modernize your business operations and capabilities.",
      color: "from-pink-500/20 to-rose-500/20",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 md:py-32 relative bg-black text-white overflow-hidden"
      ref={sectionRef}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-1/3 h-1/3 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl top-20 right-20 animate-pulse duration-1000"></div>
        <div className="absolute w-1/4 h-1/4 bg-gradient-to-l from-white/5 to-transparent rounded-full blur-3xl bottom-40 left-20 animate-pulse duration-1500"></div>
      </div>

      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full flex flex-col">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex-1 border-t border-white/10"></div>
          ))}
        </div>
        <div className="h-full w-full flex flex-row absolute top-0">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex-1 border-r border-white/10"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`flex flex-col md:flex-row justify-between items-start mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <div className="inline-block mb-4 bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-1 rounded-full">
              <h5 className="text-gray-400 tracking-wider text-sm font-semibold">
                WHAT WE DO
              </h5>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold relative">
              Our Services
              <span
                className={`absolute -bottom-3 left-0 h-1 bg-white/50 transition-all duration-1500 delay-500 ${
                  isVisible ? "w-24" : "w-0"
                }`}
              ></span>
            </h2>
          </div>
          <p className="md:w-1/3 text-gray-400 mt-6 md:mt-0 transition-all duration-1000 delay-300">
            We deliver comprehensive IT solutions tailored to your specific
            business needs, helping you navigate the digital landscape with
            confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`border border-white/10 rounded-lg p-8 backdrop-blur-sm bg-black/20 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${100 + index * 100}ms` }}
              >
                {/* Background gradient */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
                ></div>

                {/* Icon container with animated background */}
                <div className="relative mb-6 inline-flex">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center p-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center text-sm text-gray-400 group-hover:text-white transition-all duration-300 relative"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </a>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 right-0 w-16 h-16 -mt-8 -mr-8 bg-white/10 rotate-45"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Added CTA section */}
        <div
          className={`mt-16 p-8 border border-white/10 rounded-lg bg-gradient-to-r from-black to-gray-900/50 flex flex-col md:flex-row items-center justify-between transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">
              Ready to transform your business?
            </h3>
            <p className="text-gray-400">
              Let's discuss how our services can drive your success.
            </p>
          </div>
          <button className="bg-white text-black px-8 py-4 rounded flex items-center justify-center space-x-2 hover:bg-gray-200 transition-colors group">
            <span>Get in touch</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full"
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${
                5 + Math.random() * 5
              }s infinite ease-in-out ${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
