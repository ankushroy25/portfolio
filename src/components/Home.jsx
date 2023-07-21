import React from "react";
import { BiPhoneCall, BiLogInCircle } from "react-icons/bi";
import cover from "../assets/cover.jpg";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen text-sky-700">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="text-center pt-20 pb-8 pl-4 m-auto ml-10">
            <p className="text-5xl mt-14 font-bold border-b-4 border-pink-600">
              Welcome
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-8">
          <div className="text-left text-4xl font-bold ">
            <p>One stop medical hub</p>
            <p>Find all the necessary services</p>
            <div>
              <button className="text-black group border-2 h-14 border-blue-900 rounded-lg px-5 py-3 my-8 flex items-center hover:bg-pink-300 hover:border-pink-600">
                <span className="group-hover:rotate-45 duration-300">
                  <BiPhoneCall className="mr-4" size={30} />
                </span>
                Call us
              </button>
              <button className="text-black group border-2 h-14 border-blue-900 rounded-lg px-5 py-3 my-8 flex items-center hover:bg-pink-300 hover:border-pink-600">
                <span className="group-hover:rotate-45 duration-300">
                  <BiLogInCircle className="mr-4" size={30} />
                </span>
                Sign in
              </button>
            </div>
          </div>
          <div className="pb-20 mb-32">
            <img src={cover} className="w-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
