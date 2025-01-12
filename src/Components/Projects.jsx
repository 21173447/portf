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
    {
      title: "Task Management Tool",
      description:
        "A web app to manage and organize tasks with a simple user interface.",
      image: "path-to-image3.jpg",
      link: "#",
    },
  ];

  return (
    <section className="bg-[#172b30] py-12 px-6 lg:px-20  bg-texture">
      <div className="text-center text-yellow-600 text-3xl md:text-3xl lg:text-4xl pb-8">
       PROJECTS
      </div>

      <div className=" grid grid-cols-2 gap-6">
  {projects.map((project, index) => (
    <div
      key={index}
      className="bg-[#06181d] border-2 border-yellow-600 rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-all duration-200"
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
          className="inline-block bg-yellow-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-yellow-400 transition-all duration-200"
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
