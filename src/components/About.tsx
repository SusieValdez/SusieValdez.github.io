import React from "react";
import Skills from "./Skills";

const About = () => {
  return (
    <div id="about-me" className="flex pt-16">
      <div className="flex flex-col gap-x-8">
        <h3 className="text-2xl font-bold text-pink-300 mb-3">About Me</h3>
        <p className="text-violet-200 text-lg pb-3">
          Hello! My name is Susie and I love creating code. My passion for it
          began during the pandemic when I was trying to make videogames for my
          friends. One thing led to another and I ended up learning a lot of
          technologies through several projects.
        </p>
        <p className="text-violet-200 text-lg pb-3">
          I have discovered a passion for web development, starting from HTML
          and CSS to JavaScript and now React.js.
        </p>
        <p className="text-violet-200 text-lg pb-3">
          The journey continues and so my desire for learning.
        </p>
        <p className="text-violet-200 text-lg pb-3">
          I recently released a{" "}
          <a
            href="https://susiehatter.itch.io/instant-coffee"
            className="relative text-pink-300 before:bg-pink-300 before:absolute before:block before:w-full before:h-[1px] before:bottom-[-.2em] before:left-0 before:scale-x-0 before:hover:scale-100 before:ease-in-out before:duration-300"
          >
            game online
          </a>{" "}
          that uses an AI system in the enemies you face!
        </p>
        <p className="text-violet-200 text-lg pb-3">
          Here are some of the technologies I have used so far:
        </p>
      </div>
      {/* <div className="hidden lg:block">
        <Skills />
      </div>
      <div className="lg:hidden pt-16">
        <Skills />
      </div> */}
    </div>
  );
};

export default About;
