import React, { useState, useEffect, useCallback } from 'react'; // Added useCallback
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'; // ChevronLeft/Right no longer used but kept import for now

const sampleImageUrls = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
];

const projects = [
  {
    id: 1,
    title: 'QuantumLeap Analytics',
    description: 'Cloud-native data visualization tool helping businesses unlock insights with real-time dashboards & predictive modeling.',
    tags: ['React', 'Python', 'AWS', 'Data Viz', 'ML'],
    gradient: 'from-blue-900/70 to-sky-800/70',
    imageUrl: sampleImageUrls[0],
  },
  {
    id: 2,
    title: 'Aura E-commerce Eco',
    description: 'Scalable microservices e-commerce platform focusing on performance, security, and seamless user experience.',
    tags: ['Next.js', 'Node.js', 'K8s', 'Microservices', 'Stripe'],
    gradient: 'from-purple-900/70 to-indigo-800/70',
    imageUrl: sampleImageUrls[1],
  },
  {
    id: 3,
    title: 'Synapse AI Medical Imaging',
    description: 'AI solution enhancing diagnostic accuracy by analyzing medical images using advanced deep learning models.',
    tags: ['PyTorch', 'FastAPI', 'GCP', 'AI/ML', 'Healthcare'],
    gradient: 'from-emerald-900/70 to-green-800/70',
    imageUrl: sampleImageUrls[2],
  },
  {
    id: 4,
    title: 'ConnectSphere Collab Hub',
    description: 'Real-time SaaS platform enabling remote teams to collaborate effectively via shared workspaces & video conferencing.',
    tags: ['Vue.js', 'Go', 'WebSockets', 'SaaS', 'UI/UX'],
    gradient: 'from-rose-900/70 to-pink-800/70',
    imageUrl: sampleImageUrls[3],
  },
];

// --- Animation Variants (definitions would go here if not empty) ---
const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, staggerChildren: 0.25 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};


const ProjectCard = ({ project }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-neutral-800/80 bg-neutral-900/60 backdrop-blur-md shadow-xl h-full flex flex-col`}
    >
      <div
        className={`absolute inset-0 w-full h-full bg-gradient-to-br ${project.gradient} opacity-10 transition-opacity duration-500 pointer-events-none rounded-2xl`}
      />
      <div className="p-6 pt-8 sm:p-8 sm:pt-10 relative z-10 flex flex-col flex-grow">
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-white/5 to-white/0 rounded-full blur-xl opacity-30 transition-opacity duration-700 pointer-events-none" />
        <h3 className="text-xl sm:text-2xl font-bold mb-3 text-white overflow-hidden text-ellipsis whitespace-nowrap" title={project.title}>
          {project.title}
        </h3>
        <p className="text-neutral-400 text-sm mb-5 leading-relaxed flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[11px] font-medium bg-white/5 border border-white/10 text-neutral-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4">
          <button className="flex items-center space-x-2 text-white text-sm font-medium group/btn">
            <span>Explore Project</span>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover/btn:text-white transition-colors" />
          </button>
        </div>
      </div>
      <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
    </div>
  );
};

const FeaturedProject = ({ project }) => {
  return (
    <motion.div
      className="relative col-span-1 md:col-span-2 bg-gradient-to-br from-neutral-900 to-black rounded-2xl border border-neutral-800/50 overflow-hidden"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 md:order-1">
           <div className="inline-flex mb-4 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-teal-400 self-start">
            Featured Project
          </div>
          <h3 className="text-2xl md:text-4xl font-bold mb-4 text-white">
            {project.title}
          </h3>
          <p className="text-neutral-400 mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 text-xs bg-white/5 border border-white/10 text-neutral-300 rounded-full">
                {tag}
              </span>
            ))}
          </div>
          <button className="flex items-center space-x-2 text-white font-medium self-start group">
            <span>View Case Study</span>
            <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-white transition-all duration-300 group-hover:translate-x-1" />
          </button>
        </div>
        <div className="relative md:h-full min-h-[250px] md:min-h-0 aspect-video md:aspect-auto order-1 md:order-2">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`} />
          {project.imageUrl ? (
             <img
                src={project.imageUrl}
                alt={`${project.title} visual`}
                className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-30"
             />
          ) : null }
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-8 left-8 flex flex-col">
            <div className="flex space-x-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-white/20 animate-pulse-slow" />
              <div className="w-3 h-3 rounded-full bg-white/20 animate-pulse-slow animation-delay-2000" />
              <div className="w-3 h-3 rounded-full bg-white/20 animate-pulse-slow animation-delay-4000" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const [isHoveringGallery, setIsHoveringGallery] = useState(false); // Track hover state
  const intervalRef = React.useRef(null); // Ref to store interval ID

  useEffect(() => {
    const updateItemsPerPage = () => {
      setItemsPerPage(window.innerWidth < 768 ? 1 : 2);
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const nextSlideCallback = useCallback(() => {
     setCurrentIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]); // Dependency: only totalPages

   // Effect for automatic sliding interval
   useEffect(() => {
    // Clear previous interval if it exists
     if (intervalRef.current) {
       clearInterval(intervalRef.current);
     }

     // Start new interval only if not hovering and more than one page
     if (!isHoveringGallery && totalPages > 1) {
       intervalRef.current = setInterval(nextSlideCallback, 5000); // 5 seconds interval
     }

     // Cleanup function to clear interval on unmount or when dependencies change
     return () => {
       if (intervalRef.current) {
         clearInterval(intervalRef.current);
       }
     };
   }, [isHoveringGallery, totalPages, nextSlideCallback]); // Rerun effect when hover state or page count changes


  useEffect(() => {
     if (totalPages > 0 && currentIndex >= totalPages) {
        setCurrentIndex(totalPages - 1);
     } else if (currentIndex < 0 && totalPages > 0) {
         setCurrentIndex(0);
     } else if (totalPages === 1) {
         setCurrentIndex(0);
     }
  }, [itemsPerPage, totalPages, currentIndex]);

  const getCurrentProjects = () => {
    const start = currentIndex * itemsPerPage;
    const end = start + itemsPerPage;
    return projects.slice(start, end);
  };

  const currentProjects = getCurrentProjects();

  return (
    <div
        className="relative"
        onMouseEnter={() => setIsHoveringGallery(true)}
        onMouseLeave={() => setIsHoveringGallery(false)}
    >
      <div className="hidden md:flex justify-between items-center mb-8">
        <h3 className="text-lg font-medium text-white">Explore Our Work</h3>
        {totalPages > 1 && (
             <div className="flex space-x-2">
                 {Array.from({ length: totalPages }).map((_, index) => (
                 <button
                     key={index}
                     aria-label={`Go to page ${index + 1}`}
                     className={`w-8 h-1 rounded-full transition-colors duration-300 ${
                     currentIndex === index ? 'bg-white' : 'bg-neutral-700 hover:bg-neutral-600'
                     }`}
                     onClick={() => setCurrentIndex(index)}
                 />
                 ))}
             </div>
        )}
      </div>

      <div className="relative overflow-hidden">
        <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 opacity-0 pointer-events-none"
            aria-hidden="true"
            style={{ visibility: 'hidden' }}
        >
            {Array.from({ length: itemsPerPage }).map((_, index) => (
                 <div key={`spacer-${index}`} className="rounded-2xl border border-transparent">
                    <div className="min-h-[380px] sm:min-h-[400px]"></div>
                 </div>
            ))}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 absolute top-0 left-0 w-full"
          >
            {currentProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

       {/* Navigation buttons are removed */}
    </div>
  );
};


const WorkSection = () => {
     return (
    <motion.section
      id="work"
      // Reduced bottom padding: pb-16 md:pb-24
      className="pt-24 pb-2 md:pt-40 md:pb-4 bg-black text-white relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
    >
        <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(25,25,25,0.8),rgba(0,0,0,0))]"></div>
            <motion.div className="absolute w-1/2 h-1/2 bg-gradient-to-tr from-indigo-900/30 via-transparent to-transparent rounded-full blur-[120px] -top-1/4 -left-1/4" animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}/>
            <motion.div className="absolute w-1/3 h-1/3 bg-gradient-to-bl from-teal-900/30 via-transparent to-transparent rounded-full blur-[100px] -bottom-1/4 -right-1/4" animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}/>
            <motion.div className="absolute w-1/4 h-1/4 bg-gradient-to-tr from-rose-900/20 via-transparent to-transparent rounded-full blur-[80px] bottom-1/4 right-1/4" animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}/>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMDEwMTAiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwQzAgMTMuNDMxIDEzLjQzMSAwIDMwIDBjMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjMjIyIiBzdHJva2Utd2lkdGg9Ii4yNSIvPjxwYXRoIGQ9Ik0zNC44MTggMjVhMTAgMTAgMCAwMC0xOS42MzYgMEg1djEwaDEwLjE4MmExMCAxMCAwIDAwMTkuNjM2IDBINV0iIHN0cm9rZT0iIzIyMiIgc3Ryb2tlLXdpZHRoPSIuMjUiLz48L2c+PC9zdmc+')] opacity-5 mix-blend-luminosity" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16 md:mb-24"
          variants={fadeInVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.2 }}
        >
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
           >
             <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm font-medium text-neutral-300 mb-6">
               <span className="block w-2 h-2 rounded-full bg-teal-400 mr-2 animate-pulse" />
               <span>Our Portfolio</span>
             </div>
           </motion.div>

           <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Transforming Ideas Into
            <span className="block">Digital Experiences</span>
          </motion.h2>

           <motion.p
            className="text-lg text-neutral-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover how we've helped organizations across various industries
            achieve their digital transformation goals through innovative solutions.
          </motion.p>
        </motion.div>

        <motion.div
          className="mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <FeaturedProject project={projects[0]} />
        </motion.div>

        <motion.div
          className="mb-16 md:mb-24" // Keep margin for spacing above potential footer
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <ProjectGallery />
        </motion.div>

        {/* View All Projects button is removed */}

      </div>

       <style jsx global>{`
         @keyframes pulse-slow {
            0%, 100% { opacity: 0.2; transform: scale(1); }
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