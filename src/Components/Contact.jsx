import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-[#172b30] py-10 px-6 lg:px-20 bg-texture ">
      <div className="text-center text-yellow-600 text-2xl md:text-3xl lg:text-4xl pb-8">
        CONTACT
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        <div
          className=" p-8  shadow-lg"
          data-aos="fade-right"
        >
          <h2 className="text-yellow-500 text-xl font-semibold mb-4">
            Get in Touch
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-white text-sm mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-md bg-[#172b30] text-white border-[1px] border-yellow-600 focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white text-sm mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-md bg-[#172b30] text-white border-[1px] border-yellow-600 focus:ring-2 focus:ring-yellow-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-white text-sm mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full p-3 rounded-md bg-[#172b30] text-white border-[1px] border-yellow-600 focus:ring-2 focus:ring-yellow-500"
                placeholder="Write your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-yellow-500 py-2 px-6 text-white rounded-full shadow-lg hover:scale-105 transform transition-transform duration-300"
            >
              Send Message
            </button>
          </form>
        </div>


        <div
          className="text-white space-y-2"
          data-aos="fade-left"
        >
          <h2 className="text-yellow-500 text-xl font-semibold">
            Get in Touch
          </h2>
          <p className="text-sm sm:text-base">
            Feel free to reach out to us using the contact form or through the
            following methods:
          </p>
          <div>
            <h3 className="font-semibold text-yellow-500">Email:</h3>
            <p>tshegofatsononyane009@gmail.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-yellow-500">Phone:</h3>
            <p>+27 81 503 8545</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
