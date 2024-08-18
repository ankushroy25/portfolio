import React from "react";
import { Data } from "../data/Data.js";
import { motion } from "framer-motion";
import { CodeOutlined, LinkOutlined } from "@mui/icons-material";

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
          <p className="py-6 text-xl">
            Check out some of the projects I have built{" "}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 px-4">
          {project.map((item, index) => (
            <div
              key={index}
              className="text-center rounded-lg shadow-md shadow-cyan-200 m-2"
            >
              <div
                style={{ backgroundImage: `url(${item.image})` }}
                className="group container rounded-t-md flex justify-center text-center items-center mx-auto content-div"
              >
                <div className="opacity-0 group-hover:opacity-100">
                  <p className="pt-4 text-center text-xl font-semibold text-white w-fit px-4">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="flex justify-between px-8 py-3 bg-slate-800 text-gray-200 text-lg md:text-xl font-semibold rounded-lg items-center">
                <p> {item.title}</p>
                <div className="flex">
                  <a href={item.link} rel="noreferrer" target="_blank">
                    <motion.button
                      className="text-center rounded-full p-1 mr-3 hover:bg-cyan-700 text-gray-200 font-bold text-sm"
                      whileTap={{ scale: 0.9 }}
                    >
                      <LinkOutlined />
                    </motion.button>
                  </a>
                  <a href={item.code} rel="noreferrer" target="_blank">
                    <motion.button
                      className="text-center rounded-full p-1 hover:bg-cyan-700 text-gray-200 font-bold text-sm"
                      whileTap={{ scale: 0.9 }}
                    >
                      <CodeOutlined />
                    </motion.button>
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
