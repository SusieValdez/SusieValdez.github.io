import React from "react";

const Skills = () => {
  return (
    <div className=" md:w-full">
      <h3 className="text-2xl font-bold text-pink-300 mb-3">My Skills</h3>
      <div className="flex flex-col md:items-center md:justify-center gap-2 md:gap-5 text-violet-100 py-6">
        <div className="flex">
          <div className="bg-brands-js rounded-full px-3 py-1 mx-1 text-base md:text-2xl hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
            JavaScript
          </div>
          <div className="bg-brands-ts rounded-full px-3 py-1  mx-1 text-base md:text-2xl hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
            TypeScript
          </div>
          <div className="bg-brands-react rounded-full px-3 py-1  mx-1 text-base md:text-2xl hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
            React
          </div>
          <div className="bg-brands-html rounded-full px-3 py-1 mx-1 text-base md:text-2xl hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
            HTML/CSS
          </div>
        </div>
        <div className="flex">
          <div className="bg-brands-python rounded-full px-3 py-1  mx-1 text-base md:text-2xl hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
            Python
          </div>

          <div className="bg-brands-go rounded-full px-3 py-1 mx-1 text-base md:text-2xl hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
            Go
          </div>
          <div className="bg-brands-ws rounded-full px-3 py-1 mx-1 text-base md:text-2xl hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
            Websockets
          </div>
          <div className="bg-brands-db rounded-full px-3 py-1 mx-1 text-base md:text-2xl hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
            Databases
          </div>
        </div>
        <div className="flex">
          <div className="bg-brands-node rounded-full px-3 py-1 mx-1 text-base md:text-2xl hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
            Node
          </div>
          <div className="bg-brands-godot rounded-full px-3 py-1 mx-1 text-base md:text-2xl hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
            GDScript
          </div>
          <div className="bg-brands-git rounded-full px-3 py-1 mx-1 text-base md:text-2xl hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
            Git
          </div>
          <div className="bg-brands-cli rounded-full px-3 py-1 mx-1 text-base md:text-2xl hover:-translate-y-1 transition duration-150 ease-out  hover:ease-in hover:animate-pulse hover:scale-110  cursor-pointer">
            CLI
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
