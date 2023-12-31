import React from "react";
import { Data } from "../data/Data.js";
import { motion } from "framer-motion";

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
        <div className="grid sm:grid-cols-2 gap-8 px-4">
          {/* Grid Item */}
          {project.map((item, index) => (
            <div
              key={index}
              className=" text-center rounded-lg shadow-md shadow-cyan-200 m-2"
            >
              <motion.div
                key={index}
                style={{ backgroundImage: `url(${item.image})` }}
                className=" group container rounded-md
                            flex justify-center text-center items-center mx-auto content-div"
                whileHover={{ scale: 1.075 }}
              >
                {/* Hover effect */}
                <div className="opacity-0 group-hover:opacity-100">
                  <span className="text-xl font-semibold sm:font-bold text-white tracking-wider ">
                    {item.description}
                  </span>
                  <div className="pt-4 text-center ">
                    <a href={item.link} rel="noreferrer" target="_blank">
                      <motion.button
                        className="text-center rounded-lg px-4 py-2 m-2
                                    bg-white text-gray-700 font-bold text-md"
                        whileTap={{ scale: 0.9 }}
                      >
                        View
                      </motion.button>
                    </a>
                    <a href={item.code} rel="noreferrer" target="_blank">
                      <motion.button
                        className="text-center rounded-lg px-4 py-2 m-2
                                    bg-white text-gray-700 font-bold text-md"
                        whileTap={{ scale: 0.9 }}
                      >
                        Code
                      </motion.button>
                    </a>
                  </div>
                </div>
              </motion.div>
              <div className="p-2 bg-slate-800 text-gray-200 text-2xl font-semibold rounded-lg">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
