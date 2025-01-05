import React, { useEffect } from 'react';


import { FaHtml5 } from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa6";
import { SiKotlin } from "react-icons/si";


const Languages = () => {
  return (

    <div className='h-[50vh] bg-[#172b30] bg-texture'>
      <div className='md:pt-24'>
        <div className='flex overflow-hidden space-x-7 md:pt-0 lg:pt-9 '>
          <div className='flex pt-10 space-x-16 animate-loop-scroll text-white text-8xl py-10'>
            <FaHtml5 />
            <SiTailwindcss />
            <FaCss3Alt />
            <FaReact />
            <IoLogoJavascript />
            <FaJava />
            <SiKotlin />
          </div>
          <div className='flex pt-10 space-x-16 animate-loop-scroll text-white text-8xl'>
            <FaHtml5 />
            <SiTailwindcss />
            <FaCss3Alt />
            <FaReact />
            <IoLogoJavascript />
            <FaJava />
            <SiKotlin />
          </div>
        </div>
      </div>
    </div>

    
  )
}

export default Languages
