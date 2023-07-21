import React from "react";
import { servicesData } from "../data/servicesData.js";

const Services = () => {
  // projects file
  const project = servicesData;
  //setProject(data);

  return (
    <div
      name="services"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-2 sm:pt-14">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Services
          </p>
          <p className="py-6 text-xl">Check out the services we provide</p>
        </div>

        {/* container for services */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {/* Grid Item */}
          {project.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
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
                      Select
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

export default Services;
