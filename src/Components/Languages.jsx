import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaNodeJs } from "react-icons/fa6";
import { SiTailwindcss, SiKotlin, SiMongodb, SiTypescript, SiExpress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const Languages = () => {
  return (
    <div className="relative   bg-texture py-16">
      <div className="absolute inset-0 bg-gray-800 bg-opacity-80"></div>
      
      <div className="relative text-yellow-600 z-10">
        <h2 className="text-center text-3xl mb-10">LANGUAGES & TOOLS</h2>

        <h3 className="text-center text-2xl text-white mb-6">Frontend</h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto border border-dashed p-5 mb-10">
          <div className="flex flex-col items-center space-y-2">
            <FaHtml5 className="text-orange-500 text-6xl hover:scale-125 transform transition-transform duration-300" />
            <span className="text-white text-lg">HTML5</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaCss3Alt className="text-blue-500 text-6xl hover:scale-125 transform transition-transform duration-300" />
            <span className="text-white text-lg">CSS3</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <IoLogoJavascript className="text-yellow-400 text-6xl hover:scale-125 transform transition-transform duration-300" />
            <span className="text-white text-lg">JavaScript</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaReact className="text-cyan-400 text-6xl hover:scale-125 transform transition-transform duration-300" />
            <span className="text-white text-lg">React</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <SiTailwindcss className="text-teal-400 text-6xl hover:scale-125 transform transition-transform duration-300" />
            <span className="text-white text-lg">TailwindCSS</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <SiTypescript className="text-blue-500 text-6xl hover:scale-125 transform transition-transform duration-300" />
            <span className="text-white text-lg">TypeScript</span>
          </div>
        </div>

    
        <h3 className="text-center text-2xl text-white mb-6">Backend</h3>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto border border-dashed p-5">
          <div className="flex flex-col items-center space-y-2">
            <FaNodeJs className="text-green-500 text-6xl hover:scale-125 transform transition-transform duration-300" />
            <span className="text-white text-lg">Node.js</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <SiExpress className="text-gray-500 text-6xl hover:scale-125 transform transition-transform duration-300" />
            <span className="text-white text-lg">Express.js</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <SiMongodb className="text-green-600 text-6xl hover:scale-125 transform transition-transform duration-300" />
            <span className="text-white text-lg">MongoDB</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaJava className="text-red-600 text-6xl hover:scale-125 transform transition-transform duration-300" />
            <span className="text-white text-lg">Java</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <SiKotlin className="text-purple-400 text-6xl hover:scale-125 transform transition-transform duration-300" />
            <span className="text-white text-lg">Kotlin</span>
          </div>
        </div>

\
        <h3 className="text-center text-2xl text-white mt-10 mb-6">MERN Stack</h3>
        <div className="grid grid-cols-4 gap-6 max-w-3xl mx-auto">
          <div className="flex flex-col items-center space-y-2">
            <SiMongodb className="text-green-600 text-6xl hover:scale-125 transform transition-transform duration-300" />
            <span className="text-white text-lg">MongoDB</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <SiExpress className="text-gray-500 text-6xl hover:scale-125 transform transition-transform duration-300" />
            <span className="text-white text-lg">Express.js</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaReact className="text-cyan-400 text-6xl hover:scale-125 transform transition-transform duration-300" />
            <span className="text-white text-lg">React</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <FaNodeJs className="text-green-500 text-6xl hover:scale-125 transform transition-transform duration-300" />
            <span className="text-white text-lg">Node.js</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
