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
    <section className="bg-[#172b30]  bg-texture py-16">
      <div className="text-center text-yellow-600 text-3xl mb-12">
        EXPERIENCE
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-16 lg:px-24">

        <div
          className="flex flex-col items-center border border-yellow-600  bg-[#06181d] shadow-lg "
          data-aos="fade-up"
        >
          <div className="w-32 h-32 flex items-center justify-center rounded-full bg-[#172b30] mt-8 mb-6 animate-bounce-up-down">
            <img src={img1} alt="Oasis Infobyte Logo" className="w-[150px] object-contain" />
          </div>
          <div className="px-6 py-4 text-center">
            <h2 className="text-yellow-500 text-2xl font-bold mb-2">Web Development & Design</h2>
            <h3 className="text-white text-lg">Oasis Infobyte</h3>
            <p className="text-gray-400">15-Feb-24 to 15-Mar-24</p>
          </div>
        </div>

    
        <div
          className="flex flex-col items-center border border-yellow-600  bg-[#06181d] shadow-lg "
          data-aos="fade-up"
        >
          <div className="w-32 h-32 flex items-center justify-center rounded-full bg-[#172b30] mt-8 mb-6 animate-bounce-up-down">
            <img src={img2} alt="Tshimologong Logo" className="w-[150px] object-contain" />
          </div>
          <div className="px-6 py-4 text-center">
            <h2 className="text-yellow-500 text-2xl font-bold mb-2">Intern - Software Developer</h2>
            <h3 className="text-white text-lg">Tshimologong</h3>
            <p className="text-gray-400">18-Jul-24 to Present</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
