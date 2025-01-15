import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Certificates = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const certificates = [
    {
      title: "Diploma in  it in software development",
      issuer: "Rosebank Collage",
      date: "June 2024",
    },
    {
      title: "Web development & design",
      issuer: "Osasis Infobyte",
      date: "March 2024",
    },

  ];

  return (
    <section className="bg-[#172b30]   py-10 px-6 lg:px-20 bg-texture ">
      <div className="text-center text-yellow-600 text-3xl md:text-3xl lg:text-4xl pb-8">
        CERTIFICATES
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="bg-[rgb(6,24,29)] p-6  shadow-lg hover:scale-105 transform transition-transform duration-300"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <h3 className="text-yellow-500 text-xl font-semibold mb-2">
              {certificate.title}
            </h3>
            <p className="text-white text-sm">
              <span className="font-semibold text-yellow-500">Issuer: </span>
              {certificate.issuer}
            </p>
            <p className="text-white text-sm">
              <span className="font-semibold text-yellow-500">Date: </span>
              {certificate.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
