import React, { useEffect } from 'react';
import { FaFacebook, FaTwitter } from "react-icons/fa"; 
import { VscGithub } from "react-icons/vsc";
import Aos from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {
  
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="bg-hero1 bg-cover bg-center h-[100vh] bg-fixed">      
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="font-sans text-center pt-[700px] md:pt-[600px] lg:pt-[300px] ">
        <h1 className="text-3xl text-white md:text-4xl lg:text-5xl" data-aos="zoom-in">
          Hi, I am <span className="text-yellow-500">Tshegofatso Mgiba</span>
        </h1>
        <p className="px-[100px] pt-6 md:text-lg text-white" data-aos="fade-left">
          I'm a frontend developer skilled in HTML, CSS, JavaScript, and React, focused on
          building responsive, user-friendly web applications. I enjoy turning designs into
          functional websites and continuously improving my skills to deliver high-quality,
          modern user experiences.
        </p>
      </div>

      <div className="flex justify-center text-white pt-10 gap-6 text-4xl  animate-bounce-up-down " data-aos="fade-down">

        <FaFacebook className='hover:text-gray-300 hover:scale-125 transform transition-transform duration-300'/>
        <FaTwitter className='hover:text-gray-300 hover:scale-125 transform transition-transform duration-300' />
        <VscGithub className='hover:text-gray-300 hover:scale-125 transform transition-transform duration-300' />
      </div>
    </section>
  );
};

export default Hero;
