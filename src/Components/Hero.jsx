import React, { useEffect } from 'react';
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import Aos from 'aos';
import 'aos/dist/aos.css';
import img1 from '../images/Untitled Project.jpg';
import HeroBgAnimation from '../Hero/HeroBgAnimation';
import { motion } from 'framer-motion';
import Stars from "../animation/stars"
import { Tilt } from 'react-tilt';

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <motion.div className="relative bg-hero1 bg-cover bg-center h-[100vh] bg-fixed">

      {/* Purple overlay to match color scheme */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 via-purple-800/60 to-purple-900/70"></div>
      
      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 120 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 2,
        })).map((star) => (
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

      {/* Background gradients matching Projects component */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-purple-800/30 to-purple-900/40" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-700/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-700/30 rounded-full blur-3xl" />

      <div className="relative z-10 text-center flex flex-col items-center justify-center h-full px-6 md:px-12 lg:px-20">
        <div className="relative flex justify-center w-full lg:w-1/2" data-aos="fade-up">
          <Stars/>
          <HeroBgAnimation />
          <img
            className="absolute top-44 w-64 sm:w-80 md:w-[24rem] lg:w-[28rem] rounded-full shadow-lg border-8 border-dashed border-purple-500/50 text-slate-200 mb-6 leading-relaxed transition-transform duration-300 transform hover:scale-105"
            src={img1}
            alt="About Me"
          />
        </div>
        
        <h1
          className="text-5xl text-white md:text-4xl lg:text-5xl font-bold mt-8"
          data-aos="zoom-in"
        >
          Hi, I am <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">Tshegofatso Mgiba</span>
        </h1>

        <p
          className="mt-6 text-md md:text-base lg:text-lg text-gray-300 max-w-4xl"
          data-aos="fade-left"
        >
          I'm a frontend developer skilled in HTML, CSS, JavaScript, and React,
          focused on building responsive, user-friendly web applications. I enjoy
          turning designs into functional websites and continuously improving my
          skills to deliver high-quality, modern user experiences.
        </p>

        <div
          className="flex justify-center gap-6 mt-10 text-4xl md:text-3xl text-white"
          data-aos="fade-down"
        >
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
          >
            <FaFacebook />
          </motion.a>
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
          >
            <FaTwitter />
          </motion.a>
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-pink-400 hover:text-pink-300 transition-colors duration-300"
          >
            <VscGithub />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;