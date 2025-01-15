import img1 from '../images/oasis_infobyte_logo-removebg-preview.png';
import img2 from '../images/logo-venue2-removebg-preview.png';
import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Experience = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="bg-[#172b30] bg-texture py-16">
      <div className="text-center text-yellow-600 text-3xl mb-12">
        EXPERIENCE
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-yellow-600"></div>
          <div className="grid grid-cols-9 gap-y-12">
            <div className="col-span-4 flex justify-end items-center relative">
              <div
                className="bg-[#06181d] text-white p-4 rounded-md"
                data-aos="fade-right"
              >
                <img src={img1} alt="Experience 1" className="w-28 h-28  rounded-full mb-2   animate-bounce-up-down" />
                <h4 className="font-bold text-yellow-600">Oasis Infobyte</h4>
                <p>Web Development & Design (Feb 2024 - Mar 2024)</p>
              </div>
            </div>
            <div className="col-span-1 flex justify-center relative">

              <div className="w-6 h-6 rounded-full bg-[#06181d] border-4 border-white"></div>
            </div>
            <div className="col-span-4"></div>
            <div className="col-span-4"></div>
            <div className="col-span-1 flex justify-center relative">

              <div className="w-6 h-6 rounded-full bg-[#06181d] border-4 border-white"></div>
            </div>
            <div className="col-span-4 flex justify-start items-center relative">
              <div
                className="bg-[#06181d] text-white p-4  rounded-md"
                data-aos="fade-left"
              >
                <img src={img2} alt="Experience 2" className="w-28 h-28 rounded-full mb-2   animate-bounce-up-down" />
                <h4 className="font-bold text-yellow-600">Tshimologong</h4>
                <p>Software developer intern (Jul 2024 - Present)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
