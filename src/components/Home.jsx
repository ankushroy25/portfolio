import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Picture from "../assets/medbuddy.png";
import ResumePDF from "../assets/Ankush_Roy.pdf";
const Home = () => {
  return (
    <div
      name="home"
      className="w-full min-h-screen flex justify-center items-center"
    >
      <div className="max-w-[1000px] pt-24 mx-auto px-8 flex flex-col md:flex-row md:items-center">
        <div className="md:w-1/2">
          <p className="text-pink-600 text-2xl">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Ankush Roy
          </h1>
          <h2 className="text-3xl sm:text-5xl mt-4 font-bold text-[#8892b0]">
            I'm a Full Stack Developer.
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            I’m a developer who loves working with cloud and build exceptional
            digital experiences with MERN. Currently, I’m focused on learning
            DevOps to ensure seamless esperience in whatever I build.
          </p>
          <div className="flex">
            <a
              href={ResumePDF}
              className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
              download
            >
              Download Resume
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-12">
          <img src={Picture} alt="Profile Picture" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
