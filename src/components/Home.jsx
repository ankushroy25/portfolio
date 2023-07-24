import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
import Picture from "../assets/profilepic.jpg";

const Home = () => {
  const textToType = "I'm a Full Stack Developer.";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      setDisplayText(textToType.slice(0, currentIndex));
      currentIndex++;

      if (currentIndex > textToType.length) {
        clearInterval(typingInterval);
      }
    }, 100); //  typing speed

    return () => clearInterval(typingInterval);
  }, []);

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
          <motion.h2
            animate={{
              opacity: [0, 1],
              transition: { duration: 0.8, delay: 0.3 },
            }}
            className="text-3xl sm:text-5xl mt-4 font-bold text-[#8892b0]"
          >
            {displayText}
          </motion.h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            I’m a web developer who loves working with Cloud and build
            exceptional digital experiences with MERN applications. Trying
            everyday to get better than my yesterday's self.
          </p>
          <div className="flex">
            <a
              href="https://drive.google.com/file/d/1FZz4mjXqjNqwnVTqrfTvmfQVZaYiaH1t/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
              download
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </a>
          </div>
        </div>
        <motion.div
          className="flex justify-center md:w-1/2 mt-8 md:mt-0 md:ml-12 "
          initial={{ rotate: 180, scale: 1.5 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 10,
            duration: 5,
          }}
        >
          <img
            src={Picture}
            alt="Profile"
            className="h-80 md:h-full rounded-full shadow-cyan-300 shadow-2xl"
          />
        </motion.div>

        {/* social links for mobile screens */}
        <div className="md:hidden mt-20">
          <ul className="flex justify-center">
            <li className="w-[50px] h-[50px] flex justify-between items-center  bg-blue-600">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/ankush-roy-b141b2224/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[50px] h-[50px] flex justify-between items-center  bg-black">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/ankushroy25"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </li>

            <li className="w-[50px] h-[50px] flex justify-between items-center  bg-red-600">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="mailto:`imankushroy@gmail.com`"
                target="_blank"
                rel="noreferrer"
              >
                <HiOutlineMail size={30} />
              </a>
            </li>

            <li className="w-[50px] h-[50px] flex justify-between items-center  bg-blue-500">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://twitter.com/_ankush___"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
