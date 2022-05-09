import React from "react";
import profilePic from "../images/profilePic.png";

const About = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold text-pink-300 mb-3"> About Me </h3>
      <div className="flex flex-col place-items-center md:flex-row md:justify-between gap-4">
        <div className="bg-gray-800 rounded-3xl p-4 md:w-1/2">
          <p className="text-violet-200 text-lg pb-3">
            Hello! My name is Susie and I love creating code. My passion for it
            began during the pandemic when I was trying to make videogames for
            my friends. One thing led to another and I ended up learning a lot
            of technologies through several projects.
          </p>
          <p className="text-violet-200 text-lg pb-3">
            I have discovered a passion for web development, starting from HTML
            and CSS to JavaScript and now React.js.
          </p>
          <p className="text-violet-200 text-lg pb-3">
            {" "}
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
          <ul className="grid grid-cols-2 text-base text-violet-200 list-disc pl-4">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>WebSockets</li>
            <li>Golang</li>
            <li>Python</li>
            <li>Node.js</li>
            <li>Git</li>
            <li>CLIs</li>
            <li>HTML/CSS</li>
            <li>Godot+GDScript</li>
            <li>Gatsby</li>
            <li>Databases: SQL+NOSQL</li>
          </ul>
        </div>
        <div className="w-2/3 bg-gray-800 rounded-full md:w-2/6 md:place-self-center md:justify-self-center">
          <img
            className="rounded-full"
            src={profilePic}
            alt="profile picture"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
