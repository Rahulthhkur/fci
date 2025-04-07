import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react'; // Assuming lucide-react, replace if needed

// --- Placeholder Images (Using Unsplash URLs as examples) ---
// You would replace these with your actual project image URLs or use the gradient placeholders below.
const placeholderImageUrls = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', // Analytics/Dashboard
  'https://plus.unsplash.com/premium_photo-1683288295841-782fa47e4770?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fG9ubGluZSUyMHNob3BwaW5nfGVufDB8fDB8fHww', // E-commerce/Web
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80', // AI/ML/Robotics
  'https://images.unsplash.com/photo-1632910121591-29e2484c0259?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGFib3JhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D', // Collaboration/SaaS
];

// --- Realistic Project Data ---
const projects = [
  {
    id: 1,
    title: 'QuantumLeap Analytics Platform',
    description: 'Developed a cloud-native data visualization tool helping businesses unlock insights with real-time dashboards and predictive modeling.',
    tags: ['React', 'Python (Flask)', 'AWS', 'Data Viz', 'Machine Learning'],
    imageUrl: placeholderImageUrls[0], // Replace with your image URL
    gradient: 'from-blue-900/70 to-sky-800/70', // Fallback gradient
  },
  {
    id: 2,
    title: 'Aura E-commerce Ecosystem',
    description: 'Built a scalable microservices-based e-commerce platform with a focus on performance, security, and seamless user experience.',
    tags: ['Next.js', 'Node.js', 'Kubernetes', 'Microservices', 'Stripe API'],
    imageUrl: placeholderImageUrls[1],
    gradient: 'from-purple-900/70 to-indigo-800/70',
  },
  {
    id: 3,
    title: 'Synapse AI - Medical Imaging',
    description: 'AI-driven solution enhancing diagnostic accuracy by analyzing medical images using advanced deep learning models.',
    tags: ['Python (PyTorch)', 'FastAPI', 'Google Cloud', 'AI/ML', 'Healthcare'],
    imageUrl: placeholderImageUrls[2],
    gradient: 'from-emerald-900/70 to-green-800/70',
  },
  {
    id: 4,
    title: 'ConnectSphere Collaboration Hub',
    description: 'A real-time SaaS platform enabling remote teams to collaborate effectively with features like shared workspaces and video conferencing.',
    tags: ['Vue.js', 'Go', 'WebSockets', 'SaaS', 'UI/UX Design'],
    imageUrl: placeholderImageUrls[3],
    gradient: 'from-rose-900/70 to-pink-800/70',
  },
];

// --- Animation Variants ---
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
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
      ease: 'easeOut',
    },
  },
};

// --- Project Card Component ---
const ProjectCard = ({ project }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative overflow-hidden rounded-lg border border-neutral-800/70 bg-neutral-900/40 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-neutral-700 hover:bg-neutral-900/60"
    >
      {/* Image Area */}
      <div className="aspect-video overflow-hidden relative">
        {project.imageUrl ? (
          <motion.img
            src={project.imageUrl}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            initial={{ scale: 1.1 }}
            whileHover={{ scale: 1.0 }} // Corrected: use whileHover on the parent or adjust logic
            // Use group-hover for scaling the image instead of direct whileHover on img
          />
        ) : (
          // Fallback Gradient Placeholder
          <div
            className={`absolute inset-0 w-full h-full bg-gradient-to-br ${project.gradient} transition-opacity duration-500 group-hover:opacity-80`}
          >
            <div className="flex items-center justify-center h-full">
              <span className="text-neutral-400 text-sm italic">Image Placeholder</span>
            </div>
          </div>
        )}
         {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
      </div>

      {/* Content Area */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">{project.title}</h3>
        <p className="text-neutral-400 text-sm mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs bg-white/5 border border-white/10 text-neutral-300 rounded-full transition-colors group-hover:bg-white/10 group-hover:border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Removed the "View Project" link as requested */}
      </div>
       {/* Subtle glow effect on hover */}
       <div className="absolute inset-0 border border-transparent rounded-lg group-hover:border-white/20 transition-colors duration-300 pointer-events-none"></div>
    </motion.div>
  );
};


// --- Main Section Component ---
const WorkSection = () => {
  return (
    <motion.section
      id="work"
      className="py-20 md:py-32 bg-black text-white relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // Trigger animation when 10% is visible
    >
      {/* Enhanced Background Gradient Effects */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <div className="absolute w-1/2 h-1/2 bg-gradient-to-tr from-indigo-900/80 via-transparent to-transparent rounded-full blur-[100px] -top-1/4 -left-1/4 animate-pulse-slow"></div>
        <div className="absolute w-1/3 h-1/3 bg-gradient-to-bl from-teal-900/70 via-transparent to-transparent rounded-full blur-[80px] -bottom-1/4 -right-1/4 animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-20"
          variants={itemVariants} // Apply item variant to header block
        >
          <div>
            <h5 className="text-sm text-neutral-400 mb-3 tracking-widest uppercase">
              OUR PORTFOLIO
            </h5>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-400">
              Recent Projects
            </h2>
          </div>
          <p className="md:w-1/3 text-neutral-400 mt-6 md:mt-2 text-base md:text-lg">
            Discover how we've helped organizations across various industries
            achieve their digital transformation goals.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
            // Stagger children animation is handled by the parent section's variants
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
            className="mt-16 md:mt-20 text-center"
            variants={itemVariants} // Apply item variant to button block
        >
          <motion.button
            className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 ease-out border-2 border-neutral-700 rounded-lg hover:border-neutral-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
             {/* Subtle Shine Effect */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-white/0 via-white/10 to-white/0 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:scale-[2.5]"></span>
            <span className="relative flex items-center space-x-2">
                <span>View All Projects</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Add CSS for animations if needed */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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

export default WorkSection;