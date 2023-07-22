import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-gray-300 px-12 md:p-24">
      <div className="flex flex-col justify-center items-center w-full h-full border-gray-400 md:border-4 sm:rounded-3xl">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>An ambitious learner </p>
          </div>
          <div>
            <p className="text-2xl">
              I am currently in pre-final year pursing my Bachelors in
              Technology from Heritage Institue of Technology, Kolkata. I am
              enthusiastic about learning cloud and DevOps technologies to get
              better with my development skills. I am looking for opportunities
              to work and collaborate with the real world industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
