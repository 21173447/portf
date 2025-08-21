import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Code, Palette, Smartphone, Server } from "lucide-react";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const skills = [
    { icon: Code, name: "Frontend Development", level: 85 },
    { icon: Server, name: "Backend Development", level: 70 },
    { icon: Palette, name: "UI/UX Design", level: 80 },
    { icon: Smartphone, name: "Mobile Development", level: 75 },
  ];

  return (
    <section className="relative bg-[#0f0f1a] py-20 overflow-hidden">
      {/* Glowing nebula shapes */}
      <div className="absolute top-10 left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-32 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="max-w-6xl mx-auto relative z-10 px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left text */}
        <div data-aos="fade-right">
          <h2 className="text-5xl text-center md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-6">
            MY SKILLS
          </h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            I specialize in crafting responsive web applications with modern UI
            design. From building clean frontends to managing backend logic,
            I’m passionate about delivering seamless user experiences and
            high-quality code.
          </p>
        </div>

        {/* Right skills */}
        <div className="space-y-6" data-aos="fade-left">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="p-5 rounded-xl bg-[#1b1b2f]/60 backdrop-blur-md border border-purple-500/20 shadow-lg hover:shadow-purple-500/30 transition-shadow duration-300"
              >
                <div className="flex items-center mb-3">
                  <Icon className="w-6 h-6 text-purple-400 mr-3" />
                  <span className="text-slate-100 font-medium text-lg">{skill.name}</span>
                  <span className="ml-auto text-slate-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700/40 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 h-2 rounded-full shadow-lg"
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
