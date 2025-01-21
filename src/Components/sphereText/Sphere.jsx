import React, { useRef } from "react";
import TagCloud from "https://cdn.skypack.dev/TagCloud@2.2.0";
import { motion } from "framer-motion"; // Import motion
import Stars from "../../animation/stars";
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGitAlt, FaDatabase } from 'react-icons/fa';

const Sphere = () => {
  const sphereMounted = useRef(false);

  React.useEffect(() => {
    if (sphereMounted.current === false) {
      const myTags = [
        "JavaScript",
        "TypeScript",
        "CSS",
        "TailwindCSS",
        "HTML",
        "Node.js",
        "React",
        "git",
        "JSON",
        "Express",
        "MongoDB",
        "github",
      ];

      TagCloud(".sphere", myTags, {
        radius: 200, // radius in px
        maxSpeed: "fast",
        initSpeed: "fast",
        direction: 135,
        keep: true,
      });
    }

    return () => {
      sphereMounted.current = true;
    };
  }, []);

  return (
    <motion.div className="relative bg-[#06181d] bg-cover bg-fixed py-10">
      <Stars />
      <div className="text-center mb-8">
        <h1 className="text-3xl text-yellow-600">TOOLS & LANGUAGES</h1>
      </div>

      <div className="sphere mx-auto  w-1/2 text-white text-xl flex justify-center hover:text-yellow-500"></div>

      <div className="flex justify-center flex-wrap gap-6 mt-10">
        <div className="flex flex-col items-center">
          <FaReact className="text-blue-500 text-4xl" />
          <span className="text-white">React</span>
        </div>
        <div className="flex flex-col items-center">
          <FaHtml5 className="text-orange-500 text-4xl" />
          <span className="text-white">HTML</span>
        </div>
        <div className="flex flex-col items-center">
          <FaCss3Alt className="text-blue-400 text-4xl" />
          <span className="text-white">CSS</span>
        </div>
        <div className="flex flex-col items-center">
          <FaJsSquare className="text-yellow-500 text-4xl" />
          <span className="text-white">JavaScript</span>
        </div>
        <div className="flex flex-col items-center">
          <FaNodeJs className="text-green-500 text-4xl" />
          <span className="text-white">Node.js</span>
        </div>
        <div className="flex flex-col items-center">
          <FaGitAlt className="text-red-600 text-4xl" />
          <span className="text-white">Git</span>
        </div>
        <div className="flex flex-col items-center">
          <FaDatabase className="text-green-700 text-4xl" />
          <span className="text-white">MongoDB</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Sphere;
