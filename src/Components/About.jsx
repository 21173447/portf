import React, { useEffect } from 'react';
import { FaCode, FaGraduationCap, FaBriefcase, FaChess, FaHiking, FaUtensils } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section className="bg-texture bg-[#172b30]  h-auto font-sans py-12">
            <div className="text-center text-yellow-400 text-3xl md:text-5xl lg:text-6xl pb-8" data-aos="fade-in">
                ABOUT ME
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-16 px-4 md:px-12 lg:px-24">

                <div className="text-center lg:text-left space-y-8 w-full lg:w-1/2" data-aos="zoom-in">
                    <div className="bg-[#06181d] p-6 rounded-lg shadow-lg flex items-center space-x-4">
                        <FaCode className="text-yellow-400 text-3xl md:text-4xl lg:text-5xl" />
                        <div>
                            <h3 className="text-yellow-400 text-xl md:text-2xl lg:text-3xl font-semibold pb-2">
                                Tech Skills
                            </h3>
                            <ul className="text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed space-y-2">
                                <li>Proficient in JavaScript, React, Node.js, and Python</li>
                                <li>Experienced in building responsive web applications</li>
                            </ul>
                        </div>
                    </div>


                    <div className="bg-[#06181d] p-6 rounded-lg shadow-lg flex items-center space-x-4">
                        <FaGraduationCap className="text-yellow-400 text-3xl md:text-4xl lg:text-5xl" />
                        <div>
                            <h3 className="text-yellow-400 text-xl md:text-2xl lg:text-3xl font-semibold pb-2">
                                Professional Background
                            </h3>
                            <ul className="text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed space-y-2">
                                <li>Graduated from Rosebank College with a Diploma in Software Development</li>
                                <li>Full-Stack Developer with extensive experience in problem-solving</li>
                            </ul>
                        </div>
                    </div>


                    <div className="bg-[#06181d] p-6 rounded-lg shadow-lg flex items-center space-x-4">
                        <FaChess className="text-yellow-400 text-3xl md:text-4xl lg:text-5xl" />
                        <div>
                            <h3 className="text-yellow-400 text-xl md:text-2xl lg:text-3xl font-semibold pb-2">
                                Hobbies & Interests
                            </h3>
                            <ul className="text-gray-200 text-base sm:text-lg lg:text-xl leading-relaxed space-y-2">
                                <li>Passionate about learning new technologies</li>
                                <li>Enjoy playing chess, hiking, and exploring new cuisines</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

          
            <div className="text-center pt-8" data-aos="fade-up">
                <button className="bg-yellow-400 py-3 px-8 text-base md:text-lg rounded-full text-black shadow-lg hover:bg-yellow-500 transition-all duration-300">
                    Download CV
                </button>
            </div>
        </section>
    );
};

export default About;
