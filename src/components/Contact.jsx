import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen px-8 flex justify-center items-center"
    >
      <form
        method="POST"
        action="https://getform.io/f/86f6d824-7df9-417f-8c5d-d8eab98540d0"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Reach out
          </p>
          <p className="text-gray-300 py-4">
            Contact me regarding any queries, feedbacks or any other matters.{" "}
          </p>
        </div>
        <input
          required
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Your Name"
          name="name"
        />
        <input
          required
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Your email"
          name="email"
        />
        <textarea
          required
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Write your message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Connect
        </button>
      </form>
    </div>
  );
};

export default Contact;
