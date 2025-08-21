import React from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGitAlt, 
  FaDatabase, FaPython, FaDocker, FaAws 
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiMongodb, SiGraphql, 
  SiNextdotjs, SiVite 
} from 'react-icons/si';

const TechSphere = () => {
  const stars = Array.from({ length: 120 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
  }));
  
  const techStack = [
    { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-400" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-300" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    { name: "Git", icon: FaGitAlt, color: "text-red-500" },
    { name: "Database", icon: FaDatabase, color: "text-purple-500" },
    { name: "Python", icon: FaPython, color: "text-yellow-300" },
    { name: "Docker", icon: FaDocker, color: "text-blue-500" },
    { name: "AWS", icon: FaAws, color: "text-orange-400" },
    { name: "GraphQL", icon: SiGraphql, color: "text-pink-500" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-100" },
    { name: "Vite", icon: SiVite, color: "text-purple-400" },
  ];

  return (
    <motion.section 
      className="relative  bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-pink-900 to-indigo-900 opacity-20 animate-loop-scroll" />

      {/* Stars */}
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

      {/* Header */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          TECH STACK
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-300"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Exploring the universe of technologies
        </motion.p>

        {/* Tech Icons Grid */}
        <motion.div 
          className="grid grid-cols-4 md:grid-cols-8 gap-6 max-w-4xl mx-auto mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {techStack.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center p-4 rounded-xl bg-gray-800/40 backdrop-blur-md border border-gray-600/40 hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 group"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.08, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <IconComponent className={`text-4xl md:text-5xl ${tech.color} group-hover:animate-pulse`} />
                <span className="text-xs text-gray-200 mt-2 text-center font-mono">{tech.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TechSphere;
