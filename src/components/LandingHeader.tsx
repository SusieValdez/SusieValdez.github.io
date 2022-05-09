import React from "react";
import arrowRight from "../images/arrow-right-solid.svg";

const LandingHeader = () => {
  return (
    <div>
      <div className="leading-loose md:w-2/3">
        <h3 className="text-xl text-pink-300 font-mono">Hey! My name is</h3>
        <h1 className="text-4xl text-violet-100 font-bold mb-3 md:text-6xl">
          Susie Valdez.
        </h1>
        <h1 className="text-4xl text-violet-200 font-bold mb-3 md:text-6xl">
          Doctor
          <img
            className="w-8 h-8 inline mx-2 md:w-14 md:h-14"
            src={arrowRight}
            style={{
              filter:
                "invert(86%) sepia(28%) saturate(901%) hue-rotate(191deg) brightness(102%) contrast(102%)",
            }}
          />
          Programmer.
        </h1>
      </div>

      <p className="text-violet-200 text-lg ">
        Medical Doctor turned Software Engineer. Web development is a true
        passion of mine and I enjoy every second of it.
      </p>

      <button className="h-12 w-auto inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 font-mono rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
        <a href="https://github.com/SusieValdez" target="_blank">
          <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Check out my Github
          </span>
        </a>
      </button>
    </div>
  );
};

export default LandingHeader;
