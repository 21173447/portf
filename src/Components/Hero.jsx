import React, { useEffect } from 'react';
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import Aos from 'aos';
import 'aos/dist/aos.css';
import img1 from '../images/Untitled Project.jpg';
import HeroBgAnimation from '../Hero/HeroBgAnimation';
import { motion } from 'framer-motion';
import Stars from "../animation/stars"

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <motion.div className="relative bg-hero1 bg-cover bg-center h-[100vh] bg-fixed">
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 text-center flex flex-col items-center justify-center h-full px-6 md:px-12 lg:px-20">
        <div className="relative flex justify-center w-full lg:w-1/2" data-aos="fade-up">
          <Stars/>
          <HeroBgAnimation />
          <img
            className="absolute top-44 w-64 sm:w-80 md:w-[24rem] lg:w-[28rem] rounded-full shadow-lg border-8 border-dashed border-yellow-400 border-transition-transform duration-300 transform hover:scale-105"
            src={img1}
            alt="About Me"
          />
        </div>
        <h1
          className="text-5xl text-white md:text-4xl lg:text-5xl font-bold"
          data-aos="zoom-in"
        >
          Hi, I am <span className="text-yellow-500">Tshegofatso Mgiba</span>
        </h1>

        <p
          className="mt-6 text-md md:text-base lg:text-lg text-white max-w-4xl"
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
          <FaFacebook className="hover:text-gray-300 hover:scale-125 transform transition-transform duration-300" />
          <FaTwitter className="hover:text-gray-300 hover:scale-125 transform transition-transform duration-300" />
          <VscGithub className="hover:text-gray-300 hover:scale-125 transform transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
