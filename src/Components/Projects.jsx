import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode } from "react-icons/fi";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const radius = 400; // Distance from center to the orbit path

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // Create stars like in your TechSphere component
  const stars = Array.from({ length: 120 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
  }));

  const projects = [
    {
      title: "Survey Website",
      description:
        "A modern portfolio website showcasing personal projects and skills with interactive elements and responsive design.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      link: "",
      technologies: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Poetry Zone",
      description:
        "An elegant poetry platform featuring curated collections, user submissions, and interactive reading experiences.",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      link: "https://github.com/21173447/poetry.git",
      technologies: ["JavaScript", "CSS", "HTML"],
    },
    {
      title: "Countries Explorer",
      description:
        "Interactive world map application for exploring countries, cultures, and geographical data with beautiful visualizations.",
      image:
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&h=400&fit=crop",
      link: "https://github.com/21173447/Countries.git",
      technologies: ["React", "API", "Maps"],
    },
    {
      title: "Travel Log",
      description:
        "Personal travel journal app to document adventures, track visited places, and share memorable experiences.",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
      technologies: ["Node.js", "MongoDB", "Express"],
    },
  ];

  const total = projects.length;

  // Calculate rotation angle based on active index
  const rotationAngle = -(activeIndex / total) * 360;

  return (
    <section className="relative min-h-screen bg-[#0a0a1a] py-20 px-6 lg:px-20 overflow-hidden">
      {/* Stars from TechSphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute bg-white rounded-full shadow-lg"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              delay: star.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 via-purple-800 to-purple-900 opacity-20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-700 opacity-20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-5xl text-center py-9 md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-12"
          data-aos="fade-up"
        >
          PROJECTS


              <motion.p
                  className="text-xl md:text-2xl text-gray-300 text-center mt-4 font-normal" 
                  initial={{ y: -30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Exploring the universe of projects
                </motion.p>

        </motion.h2>

    

        {/* Circular orbit container */}
        <div className="relative w-[900px] h-[900px] mx-auto flex justify-center items-center pt-80">
          {/* Orbit path circle */}
          <div className="absolute w-full h-full border border-purple-600/20 rounded-full" />
          
          {/* Active indicator at top center */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-500 rounded-full z-30 shadow-lg shadow-purple-500/60"></div>
          
          {/* Rotating container for all projects */}
          <motion.div 
            className="absolute w-full h-full"
            animate={{ rotate: rotationAngle }}
            transition={{ 
              type: "spring", 
              stiffness: 30, 
              damping: 15,
              mass: 0.8
            }}
          >
            {projects.map((project, index) => {
              const angle = (index / total) * 2 * Math.PI; // full circle evenly
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              // Calculate counter-rotation to keep cards upright
              const cardRotation = -rotationAngle;

              return (
                <motion.div
                  key={index}
                  className="absolute cursor-pointer"
                  style={{
                    left: '50%',
                    top: '50%',
                    x: x,
                    y: y,
                    translateX: '-50%',
                    translateY: '-50%',
                    zIndex: index === activeIndex ? 20 : 1,
                    rotate: cardRotation, // Counter-rotate the card
                  }}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                >
                  {/* Project Card - All cards have glow and same size */}
                  <div className={`group relative overflow-hidden rounded-2xl bg-[#1a1a2e] border shadow-xl transition-all duration-500 w-64 glow-effect ${
                    index === activeIndex 
                      ? "border-purple-400 hover:shadow-purple-400/60 active-glow" 
                      : "border-purple-600/50 hover:shadow-purple-500/20"
                  }`}>
                    {/* Glow effect for all cards */}
                    <div className="absolute inset-0 rounded-2xl bg-purple-500/10 glow-inner z-0"></div>
                    
                    <div className="relative h-40 overflow-hidden z-10">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a2e]/90 via-[#1a1a2e]/20 to-transparent" />
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-20">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs font-medium bg-purple-500/30 text-purple-200 rounded-full backdrop-blur-sm border border-purple-400/50 shadow-sm shadow-purple-400/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 z-10 relative">
                      <h3 className="text-2xl font-bold text-purple-300 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                        {project.description}
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-3 py-1 bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-400 hover:scale-105 transition-all duration-300 shadow-sm shadow-purple-500/50"
                          >
                            <FiGithub className="w-4 h-4" />
                            GitHub
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-2 px-3 py-1 bg-gray-600 text-gray-300 rounded-lg font-medium">
                            <FiCode className="w-4 h-4" />
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-purple-600/10 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .glow-effect {
          box-shadow: 0 0 10px rgba(192, 132, 252, 0.4), 
                      0 0 20px rgba(192, 132, 252, 0.2);
        }
        .active-glow {
          box-shadow: 0 0 15px rgba(192, 132, 252, 0.6), 
                      0 0 30px rgba(192, 132, 252, 0.4),
                      0 0 45px rgba(192, 132, 252, 0.2);
        }
        .glow-inner {
          animation: pulse 3s infinite;
        }
        @keyframes pulse {
          0% { opacity: 0.1; }
          50% { opacity: 0.2; }
          100% { opacity: 0.1; }
        }
      `}</style>
    </section>
  );
};

export default Projects;