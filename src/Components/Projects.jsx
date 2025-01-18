import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import img1 from '../images/countries..jpg'
import img2 from '../images/poems.jpg'
import { Tilt } from "react-tilt";

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}


const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      title: "Survey  Website",
      description:
        "A modern portfolio website showcasing personal projects and skills.",
      image: "path-to-image1.jpg",
      link: "",
    },
    {
      title: "Poetry Zone",
      description:
        "An online store application with features like cart and checkout.",
      image: img2,
      link: "https://github.com/21173447/poetry.git",
      link2:""
    },
    {
      title: "Countries",
      description:
        "A web app to manage and organize tasks with a simple user interface.",
      image: img1,
      link: "https://github.com/21173447/Countries.git",
    },
    {
      title: "Travel log",
      description:
        "A web app to manage and organize tasks with a simple user interface.",
      image: "path-to-image3.jpg",
      link: "",
      link2: ""
    },
  ];

  return (
    <section className="bg-[#172b30] py-12 px-6 lg:px-20 bg-texture">
      <div className="text-center text-yellow-600 text-3xl md:text-3xl lg:text-4xl pb-8">
        PROJECTS
      </div>
 
      <div className=" grid grid-cols-2 gap-6">
        {projects.map((project, index) => (
          

          <div
            key={index}
            className="bg-[#06181d] border-2 border-yellow-600 overflow-hidden shadow-md transform hover:scale-105 transition-all duration-200"
            data-aos="fade-up"
          >

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-yellow-500 text-xl font-semibold mb-2">
                {project.title}
              </h2>
              <p className="text-white text-sm mb-4">{project.description}</p>

              <a
                href={project.link}
                className=" bg-yellow-500 mr-3 text-white py-2 g px-4 rounded-lg text-sm font-medium hover:bg-yellow-400 transition-all duration-200"
              >
                github
              </a>
              <a
                href={project.link2}
                className=" bg-yellow-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-yellow-400 transition-all duration-200"
              >
                View
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Projects;
