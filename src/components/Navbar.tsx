import { Link } from "gatsby";
import * as React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full">
      <div className="py-3 bg-gray-900/80 justify-between hidden items-stretch h-16 px-4 md:flex">
        <div className="leading-9 text-slate-100 font-bold text-5xl font-mono transition ease-in-out delay-150 hover:text-pink-500 hover:scale-125 duration-300">
          <Link to="/">&lt;S&gt;</Link>
        </div>
        <div className="font-mono">
          <button className="inline-flex p-0.5 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <a href="/#about-me">About Me</a>
            </span>
          </button>

          <button className="inline-flex  p-0.5 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <a href="/#projects">Projects</a>
            </span>
          </button>
          <button className="hidden p-0.5 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <Link to="/blog">Blog</Link>
            </span>
          </button>

          <button className="inline-flex  p-0.5 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <a href="/#contact">Contact</a>
            </span>
          </button>

          <button className="inline-flex  p-0.5 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <a href="https://calendly.com/susievaldez" target="_blank">
                Book a Meeting
              </a>
            </span>
          </button>

          <button className="inline-flex p-0.5 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-indigo-500 to-purple-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="px-2 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              <a href="https://www.susie.mx/cv/" target="_blank">
                CV
              </a>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
