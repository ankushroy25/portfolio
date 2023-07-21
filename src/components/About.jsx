import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-[#ffffff] text-cyan-700 sm:p-10 md:p-24"
    >
      <div className="flex flex-col justify-center items-center w-full h-full border-gray-900 border-4 lg:rounded-full sm:rounded-lg">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About Us
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>FlashMeds, a high quality medical aid company </p>
          </div>
          <div>
            <p className="text-xl">
              Whether you're in need of routine check-ups or more specialized
              medical care, our team is here to support you. We believe that
              everyone deserves access to high-quality healthcare, and we work
              hard to make our services affordable and accessible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
