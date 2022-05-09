import React from "react";
import envelopeSolid from "../images/envelope-solid.svg";
import githubSolid from "../images/github-brands.svg";
import linkedinSolid from "../images/linkedin-brands.svg";

const Socials = () => {
  return (
    <div className="ml-3 hidden md:flex flex-col bg-transparent text-base text-violet-200 ">
      <button className="my-3 hover:animate-pulse hover:text-pink-500 hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in">
        <a href="https://github.com/SusieValdez" target="_blank">
          <img
            style={{
              filter:
                "invert(86%) sepia(28%) saturate(901%) hue-rotate(191deg) brightness(102%) contrast(102%)",
            }}
            src={githubSolid}
          />
        </a>
      </button>
      <button className="my-3 hover:animate-pulse hover:text-pink-500 hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in">
        <a
          href="https://www.linkedin.com/in/susievaldezmireles/"
          target="_blank"
        >
          <img
            style={{
              filter:
                "invert(86%) sepia(28%) saturate(901%) hue-rotate(191deg) brightness(102%) contrast(102%)",
            }}
            src={linkedinSolid}
          />
        </a>
      </button>
      <button className="w-5 h-5 my-3 hover:animate-pulse hover:text-pink-500 hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in">
        <img
          style={{
            filter:
              "invert(86%) sepia(28%) saturate(901%) hue-rotate(191deg) brightness(102%) contrast(102%)",
          }}
          src={envelopeSolid}
        />
      </button>
    </div>
  );
};

export default Socials;
