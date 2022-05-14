import React from "react";
import briefcaseSolid from "../images/briefcase-medical-solid.svg";

const About = () => {
  return (
    <div id="blog" className="hidden pt-16 w-2/3 md:w-fit">
      <h3 className="text-2xl font-bold text-pink-300 mb-3">
        My Recent Blog Posts
      </h3>

      <ol className="border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            February 2022
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Application UI code in Tailwind CSS
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Get access to over 20+ pages including a dashboard layout, charts,
            kanban board, calendar, and pre-order E-commerce & Marketing pages.
          </p>
          <a
            href="#"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Continue Reading
          </a>
        </li>
        <li className="mb-10 ml-4">
          <div className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            March 2022
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Marketing UI design in Figma
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            All of the pages and components are first designed in Figma and we
            keep a parity between the two versions even as we update the
            project.
          </p>
          <a
            href="#"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Continue Reading
          </a>
        </li>
        <li className="ml-4">
          <div className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            April 2022
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            E-Commerce UI code in Tailwind CSS
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Get started with dozens of web components and interactive elements
            built on top of Tailwind CSS.
          </p>
          <a
            href="#"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            Continue Reading
          </a>
        </li>
      </ol>
    </div>
  );
};

export default About;
