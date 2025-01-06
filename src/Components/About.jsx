import img1 from '../images/Untitled Project.jpg';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section className="bg-[#172b30] lg:bg-texture h-auto font-sans py-8">

            <div className="text-center text-yellow-600 text-xl md:text-3xl lg:text-4xl pb-6 md:pb-8" data-aos="fade-in">
                ABOUT ME
            </div>


            <div
                className="grid grid-cols-10 place-content-center lg:grid-cols-3 items-center gap-12 px-4 md:px-10 lg:px-20"
                data-aos="fade-up"
            >

                <div className="flex justify-center col-span-5">
                    <img
                        className="max-w-md sm:w-80 md:w-96 lg:w-[28rem] rounded-full shadow-lg"
                        src={img1}
                        alt="About Me"
                        data-aos="flip-left"
                    />
                </div>

                <div className="text-center lg:text-left col-span-5">
                    <h1
                        className="text-white text-2xl md:text-3xl lg:text-4xl font-bold pb-2"
                        data-aos="zoom-in"
                    >
                        Hi there! I'm Tshegofatso
                    </h1>
                    <h2
                        className="text-yellow-500 text-xl md:text-2xl lg:text-3xl font-semibold pb-4"
                        data-aos="zoom-in"
                    >
                        Software Developer
                    </h2>
                    <p
                        className="text-white text-sm sm:text-base lg:text-lg leading-relaxed"
                        data-aos="fade-down"
                    >
                        I grew up in the vibrant city of Pretoria, where I spent my high school years
                        at Pretoria Central High School, surrounded by inspiring teachers and lifelong
                        friends. Driven by a passion for technology, I pursued a Diploma in Software
                        Development at Rosebank College, where I honed my skills and developed a deep
                        love for coding. Those years not only shaped my professional path but also
                        ignited a sense of creativity and curiosity that continues to fuel my journey
                        in the tech world.
                    </p>

                    <div className="pt-6" data-aos="fade-up">
                        <button className="bg-yellow-500 py-2 px-6 text-sm md:text-base rounded-full text-white shadow-lg hover:scale-110 transform transition-transform duration-300">
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
