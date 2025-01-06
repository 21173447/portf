import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern portfolio website showcasing personal projects and skills.",
      image: "path-to-image1.jpg",
      link: "#",
    },
    {
      title: "E-commerce App",
      description:
        "An online store application with features like cart and checkout.",
      image: "path-to-image2.jpg",
      link: "#",
    },
    {
      title: "Task Management Tool",
      description:
        "A web app to manage and organize tasks with a simple user interface.",
      image: "path-to-image3.jpg",
      link: "#",
    },
   
  ];

  return (
    <section className="bg-[#172b30] py-10 px-6 lg:px-20 min-h-screen">
      <div className="text-center text-yellow-600 text-2xl md:text-3xl lg:text-4xl pb-8">
        My Projects
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#06181d] border-[1px] border-yellow-600 rounded-[20px] overflow-hidden shadow-lg"
            data-aos="fade-up"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-yellow-500 text-xl font-semibold mb-2">
                {project.title}
              </h2>
              <p className="text-white text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block bg-yellow-500 text-white py-2 px-4 rounded-full hover:scale-105 transform transition-transform"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
