import React from "react";

const LandingHeader = () => {
  return (
    <div className="">
      <h3 className="text-lg text-pink-300 font-mono">Hey! My name is</h3>
      <div className="py-5">
        <h1 className="text-5xl text-violet-100 font-bold mb-3">
          Susie Valdez.
        </h1>
        <h1 className="text-4xl text-violet-200 font-bold mb-3">
          I am a doctor and programmer.
        </h1>
      </div>

      <p className="text-violet-200 text-lg mb-10">
        Medical Doctor turned Software Engineer. Web development is a true
        passion of mine and I enjoy every second of it.
      </p>

      <button className="h-10 w-auto relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 font-mono rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        <a href="https://github.com/SusieValdez">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Check out my Github
          </span>
        </a>
      </button>
    </div>
  );
};

export default LandingHeader;
