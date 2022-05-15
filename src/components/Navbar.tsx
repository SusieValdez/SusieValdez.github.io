import { Link } from "gatsby";
import * as React from "react";

const Navbar = () => {
  return (
    <div className="fixed w-full">
      <div className="py-3 bg-gray-900/80 justify-between hidden items-stretch h-16 px-4 md:flex">
        <div className="leading-9 text-slate-100 font-bold text-5xl font-mono transition ease-in-out hover:text-pink-500 hover:scale-125 duration-300">
          <Link to="/">&lt;S&gt;</Link>
        </div>
        <div className="font-mono">
          <a href="/#about-me">
            <button className="inline-flex p-0.5 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="px-2 py-1 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                About Me
              </span>
            </button>
          </a>

          <a href="/#projects">
            <button className="inline-flex  p-0.5 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="px-2 py-1 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Projects
              </span>
            </button>
          </a>

          <Link to="/blog">
            <button className="hidden p-0.5 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="px-2 py-1 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Blog
              </span>
            </button>
          </Link>

          <a href="/#contact">
            <button className="inline-flex  p-0.5 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="px-2 py-1 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Contact
              </span>
            </button>
          </a>

          <a href="https://calendly.com/susievaldez" target="_blank">
            <button className="inline-flex  p-0.5 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="px-2 py-1 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Book a Meeting
              </span>
            </button>
          </a>

          <a href="https://github.com/SusieValdez" target="_blank">
            <button className="inline-flex p-0.5 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-indigo-500 to-purple-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="px-2 py-1 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                GitHub
              </span>
            </button>
          </a>

          <a href="https://www.susie.mx/cv/" target="_blank">
            <button className="inline-flex p-0.5 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-indigo-500 to-purple-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="px-2 py-1 transition-all ease-in duration-300 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                CV
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
