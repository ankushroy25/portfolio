import React from "react";
import { Data } from "../data/Data.js";

const Projects = () => {
  // projects file
  const project = Data;
  //setProject(data);

  return (
    <div name="projects" className="w-full md:h-screen text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pt-24">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6 text-xl">Check out the projects I have built </p>
        </div>

        {/* container for services */}
        <div className="grid grid-cols-2 gap-8">
          {/* Grid Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-red-500 group container rounded-lg
                            flex justify-center text-center items-center mx-auto content-div "
            >
              {/* Hover effect */}
              <div className="opacity-0 group-hover:opacity-100 ">
                <span className="text-2xl font font-bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  <a href={item.link} rel="noreferrer" target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                                    bg-white text-gray-700 font-bold text-lg"
                    >
                      View
                    </button>
                  </a>
                  <a href={item.code} rel="noreferrer" target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                                    bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
