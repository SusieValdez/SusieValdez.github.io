import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-wrap justify-center text-violet-100 mt-24 gap-2 lg:gap-3 lg:mt-8 text-xl sm:text-2xl md:text-sm lg:text-base xl:text-xl"
    >
      <span className="bg-brands-js rounded-full px-2 lg:px-3 py-1 mx-1 hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
        JavaScript
      </span>
      <span className="bg-brands-ts rounded-full px-2 lg:px-3 py-1  mx-1 hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
        TypeScript
      </span>
      <span className="bg-brands-react rounded-full px-2 lg:px-3 py-1  mx-1 hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
        React
      </span>
      <span className="bg-brands-html rounded-full px-2 lg:px-3 py-1 mx-1 hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
        HTML/CSS
      </span>
      <span className="bg-brands-python rounded-full px-2 lg:px-3 py-1  mx-1 hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
        Python
      </span>

      <span className="bg-brands-go rounded-full px-2 lg:px-3 py-1 mx-1 hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
        Go
      </span>
      <span className="bg-brands-ws rounded-full px-2 lg:px-3 py-1 mx-1 hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
        Websockets
      </span>
      <span className="bg-brands-db rounded-full px-2 lg:px-3 py-1 mx-1 hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
        Databases
      </span>
      <span className="bg-brands-node rounded-full px-2 lg:px-3 py-1 mx-1 hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
        Node
      </span>
      <span className="bg-brands-godot rounded-full px-2 lg:px-3 py-1 mx-1 hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
        GDScript
      </span>
      <span className="bg-brands-git rounded-full px-2 lg:px-3 py-1 mx-1 hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
        Git
      </span>
      <span className="bg-brands-cli rounded-full px-2 lg:px-3 py-1 mx-1 hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
        CLI
      </span>
    </div>
  );
};

export default Skills;
