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
    <section className="h-screen bg-texture bg-[#172b30] py-24">

      <div className="text-yellow-600 text-3xl text-center lg:text-3xl lg:p-1 pt-10">
        EXPERIENCE
      </div>

      <div className="grid grid-cols-2  place-self-center py-32 md:grid-cols-2 gap-12 px-4 md:px-10 lg:px-20">

        <div
          className="flex flex-col items-center border-[1px] border-yellow-600 rounded-[40px] bg-[#06181d] w-[300px]"
          data-aos="flip-left"
        >
          <div className="flex justify-center animate-bounce-up-down pt-11">
            <img src={img1} alt="Oasis Infobyte Logo" className="w-[200px]" />
          </div>
          <div className="p-6 text-white text-center">
            <h1 className="text-yellow-500 text-2xl">Web-development & Design</h1>
            <h1 className="text-lg">Oasis Infobyte</h1>
            <h1>15-Feb-24 to 15-Mar-24</h1>
          </div>
        </div>

        <div
          className="flex flex-col items-center border-[1px] border-yellow-600 rounded-[40px] bg-[#06181d] w-[300px]"
          data-aos="flip-left"
        >
          <div className="flex justify-center animate-bounce-up-down pt-11">
            <img src={img2} alt="Tshimologong Logo" className="w-[200px]" />
          </div>
          <div className="p-6 text-white text-center">
            <h1 className="text-yellow-500 text-2xl">Intern-Software-Developer</h1>
            <h1 className="text-lg">Tshimologong</h1>
            <h1>18-Jul-24 to Present</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
