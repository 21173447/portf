import img1 from '../images/Untitled Project.jpg';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
;

const About = () => {

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section className='bg-[#172b30] lg:bg-texture h-[70vh] lg:h-[70vh]  font-sans' >  
            <div className='h-10 md:pt-4 md:text-3xl text-center text-yellow-600 lg:text-3xl lg:pt-5'>ABOUT ME </div>

         
            <div className='md:pt-28 md:grid grid-cols-2 px-[20px] md:px-0 lg:grid grid-flow-col lg:gap-0'>


                <div className='flex justify-center'>
                    <img className='w-96 rounded-[300px]'src={img1} data-aos="flip-left"/>
                </div> 

                <div className='text-justify pr-4 lg:pt-11'>
                    <div className='px-4 lg:px-6'>

                        
                        <h1 className='text-white text-center text-3xl lg:text-4xl' data-aos="zoom-in" >Hi there! I'm Tshegofatso</h1>
                        <h2 className='text-yellow-500 text-center text-2xl lg:text-3xl pt-1' data-aos="zoom-in" >Software Developer</h2>
                        <p className='text-white pt-3 ' data-aos="fade-down" >I grew up in the vibrant city of Pretoria, where I spent my high school years at Pretoria Central High School, surrounded by inspiring teachers and lifelong friends. Driven by a passion for technology, I pursued a Diploma in Software Development at Rosebank College, where I honed my skills and developed a deep love for coding. Those years not only shaped my professional path but also ignited a sense of creativity and curiosity that continues to fuel my journey in the tech world.</p>
                    </div>
                    <div className='flex justify-center pt-4 animate-Side '>
                        <button className='bg-yellow-500 py-2 px-4 shadow-md shadow-white rounded-[40px] text-white hover:scale-125 transform transition-transform duration-300 '>Download CV</button>
                    </div>
                </div>
            </div> 
        </section>
    );
}

export default About;
