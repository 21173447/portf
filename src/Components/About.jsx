import img1 from '../images/Untitled Project.jpg';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section className="bg-[#1a2a38] h-auto font-sans py-8">
            <div className="text-center text-[#ffcc00] text-2xl md:text-4xl lg:text-5xl pb-6" data-aos="fade-in">
                ABOUT ME
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-4 md:px-10 lg:px-20">
                
                <div className="flex justify-center" data-aos="flip-up">
                    <img
                        className="max-w-md sm:w-80 md:w-96 lg:w-[28rem] rounded-lg shadow-lg border-4 border-[#ffcc00]"
                        src={img1}
                        alt="About Me"
                    />
                </div>
                <div className="text-center lg:text-left">
                    <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold pb-2" data-aos="zoom-in">
                        Hey there! I'm Tshegofatso
                    </h1>
                    <h2 className="text-[#ffcc00] rounded text-xl md:text-2xl lg:text-3xl font-semibold pb-4" data-aos="zoom-in">
                        Full-Stack Developer
                    </h2>
                    <p
                        className="text-white text-sm sm:text-base lg:text-lg leading-relaxed"
                        data-aos="fade-up"
                    >
                        I was born and raised in Pretoria, where I developed a passion for technology and problem-solving. My journey began at Pretoria Central High School, fueled by inspiring mentors and life-changing experiences. I further honed my skills at Rosebank College, earning a Diploma in Software Development, which opened doors to my career in full-stack development. My curiosity for learning and creating continues to drive my professional growth.
                    </p>
                    <div className="pt-6" data-aos="fade-up">
                        <button className="bg-[#ffcc00] py-2 px-6 text-sm md:text-base rounded-full text-white shadow-lg hover:bg-[#ffaa00] transition-all duration-300">
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
