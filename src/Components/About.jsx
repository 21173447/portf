import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Code, Palette, Smartphone, Server } from "lucide-react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    { icon: Code, name: "Frontend Development", level: 80 },
    { icon: Server, name: "Backend Development", level: 70 },
    { icon: Palette, name: "UI/UX Design", level: 80 },
    { icon: Smartphone, name: "Mobile Development", level: 75 },
  ];

  return (
    <section
      className="bg-[#1b1b2f] h-auto font-sans py-16 relative overflow-hidden bg-texture"
    >
      {/* Glowing purple shapes */}
      <div className="absolute top-10 left-20 w-72 h-36 bg-purple-600 opacity-30 rounded-full filter blur-3xl"></div>
      <div className="absolute top-32 right-24 w-96 h-44 bg-pink-600 opacity-20 rounded-full filter blur-2xl"></div>
      <div className="absolute top-52 left-40 w-56 h-28 bg-purple-500 opacity-25 rounded-full filter blur-xl"></div>

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2
          className="text-5xl text-center py-9 md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-4"
          data-aos="fade-up"
        >
         SKILLS
        </h2>

        <div className="space-y-6" data-aos="fade-left">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="group">
                <div className="flex items-center mb-2">
                  <Icon className="w-5 h-5 text-purple-400 mr-3" />
                  <span className="text-slate-100 font-medium">{skill.name}</span>
                  <span className="ml-auto text-slate-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
