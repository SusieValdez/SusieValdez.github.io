import React from "react";
import GithubLogo from "../images/github-brands.svg";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center w-2/3 md:w-full">
      <h3 className="text-4xl text-violet-100 font-bold pb-20 md:text-6xl">
        Let's chat!
      </h3>

      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-violet-100 text-xs font-bold mb-2">
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-violet-100 border border-pink-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            ></input>
            <p className="text-pink-500 text-xs font-semibold italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="text-violet-100 block uppercase tracking-wide text-xs font-bold mb-2">
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-violet-100 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            ></input>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-violet-100 text-xs font-bold mb-2">
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-violet-100 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
            ></input>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-violet-100 text-xs font-bold mb-2">
              Message
            </label>
            <textarea
              className=" no-resize appearance-none block w-full bg-gray-200 text-violet-100 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="h-12 w-auto inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 font-mono rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
              type="button"
            >
              <a href="https://github.com/SusieValdez" target="_blank">
                <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Send
                </span>
              </a>
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
