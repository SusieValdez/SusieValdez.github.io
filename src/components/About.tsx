import React from "react";

const About = () => {
  return (
    <div className="pt-80">
      <h3 className="text-lg text-pink-300 font-mono"> About Me </h3>
      <div className="flex flex-col w-1/2">
        <p className="text-violet-200 text-base pb-2">
          Hello! My name is Susie and I love creating code. My passion for it
          began during the pandemic when I was trying to make videogames for my
          friends. One thing led to another and I ended up learning a lot of
          technologies through several projects. I have discovered a passion for
          web development, starting from HTML and CSS to JavaScript to now
          React.js the journey continues and so my desire for learning.
        </p>
        <p className="text-violet-200 text-base pb-2">
          I recently released a{" "}
          <a
            href="https://susiehatter.itch.io/instant-coffee"
            className="relative text-pink-300 before:bg-pink-300 before:absolute before:block before:w-full before:h-[1px] before:bottom-[-.2em] before:left-0 before:scale-x-0 before:hover:scale-100 before:ease-in-out before:duration-300"
          >
            game online
          </a>{" "}
          that uses an AI system in the enemies you face!
        </p>
        <p className="text-violet-200 text-base pb-2">
          Here are some of the technologies I have used so far:
        </p>
        <ul className="pl-3 grid grid-cols-2 text-sm text-violet-200 list-disc">
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
    </div>
  );
};

export default About;
