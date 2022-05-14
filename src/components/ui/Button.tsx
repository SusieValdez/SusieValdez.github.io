import React from "react";

type buttonText = string;

const Button = ({ buttonText }) => {
  return (
    <div className="h-12 w-auto inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 font-mono rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
      <a href="https://github.com/SusieValdez" target="_blank">
        <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {buttonText}
        </span>
      </a>
    </div>
  );
};
