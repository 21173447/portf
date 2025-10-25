import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiCode, FiExternalLink, FiStar } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "Survey Website",
      description:
        "A modern portfolio website showcasing personal projects and skills with interactive elements and responsive design.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      link: "",
      technologies: ["React", "JavaScript", "CSS3"],
      status: "In Progress",
      featured: true,
    },
    {
      title: "Poetry Zone",
      description:
        "An elegant poetry platform featuring curated collections, user submissions, and interactive reading experiences.",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      link: "https://github.com/21173447/poetry.git",
      technologies: ["React", "Node.js", "MongoDB"],
      status: "Live",
      featured: true,
    },
    {
      title: "Countries Explorer",
      description:
        "Interactive world map application for exploring countries, cultures, and geographical data with beautiful visualizations.",
      image:
        "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600&h=400&fit=crop",
      link: "https://github.com/21173447/Countries.git",
      technologies: ["React", "API", "JavaScript"],
      status: "Live",
      featured: false,
    },
    {
      title: "Travel Log",
      description:
        "Personal travel journal app to document adventures, track visited places, and share memorable experiences.",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
      link: "",
      technologies: ["React", "Node.js", "Docker"],
      status: "Coming Soon",
      featured: false,
    },
    {
      title: "Naruto Homage Site",
      description:
        "A tribute website dedicated to the legendary ninja world of Naruto, featuring character profiles, jutsu database, and interactive village exploration.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      link: "",
      technologies: ["React", "JavaScript", "CSS3", "Anime.js"],
      status: "In Progress",
      featured: true,
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Live": return "bg-green-500";
      case "In Progress": return "bg-yellow-500";
      case "Coming Soon": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#0f0f1a] to-[#0a0a1a] py-20 px-6 lg:px-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header */}
      <motion.div 
        className="relative z-10 text-center mb-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-6">
          MY PROJECTS
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Explore my collection of creative projects and technical solutions
        </p>
      </motion.div>

      {/* Projects Grid - Side by Side Layout */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            {/* Card */}
            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl overflow-hidden border border-purple-500/20 shadow-2xl transition-all duration-500 group-hover:border-purple-500/50 group-hover:shadow-purple-500/25 group-hover:shadow-2xl"
                 style={{ width: "18rem" }}>
              
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  <FiStar className="w-4 h-4" />
                  Featured
                </div>
              )}

              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`}></div>
                <span className="text-xs text-gray-300 bg-gray-800/50 px-2 py-1 rounded-full backdrop-blur-sm">
                  {project.status}
                </span>
              </div>

              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Icons */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700/50 rounded-md text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-700/50 rounded-md text-xs text-gray-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <div className="flex justify-center">
                  {project.link ? (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub className="w-4 h-4" />
                      View Code
                    </motion.a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600/50 text-gray-300 rounded-lg font-medium">
                      <FiCode className="w-4 h-4" />
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 via-pink-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:via-pink-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div 
        className="relative z-10 text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <p className="text-gray-400 mb-6">Interested in collaborating?</p>
        <motion.button
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Work Together
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Projects; 
