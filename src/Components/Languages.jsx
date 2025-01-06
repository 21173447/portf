import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJava } from "react-icons/fa6";
import { SiTailwindcss, SiKotlin } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";

const Languages = () => {
  return (
    <div className="relative bg-white bg-texture py-16">
      <div className="absolute inset-0 bg-gray-800 bg-opacity-80 "></div>
      
      <div className="relative z-10">
        <h2 className="text-center text-white text-3xl font-bold mb-36">
          My Languages & Tools
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
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
            <FaJava className="text-red-600 text-6xl hover:scale-125 transform transition-transform duration-300" />
            <span className="text-white text-lg">Java</span>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <SiKotlin className="text-purple-400 text-6xl hover:scale-125 transform transition-transform duration-300" />
            <span className="text-white text-lg">Kotlin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
