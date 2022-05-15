import React from "react";

export type ProjectCardProps = {
  title: string;
  description: string;
  imgLink: string;
  skills: string[];
  codeLink?: string;
  demoLink?: string;
};

const Card = ({
  imgLink,
  skills,
  title,
  description,
  codeLink,
  demoLink,
}: ProjectCardProps) => {
  return (
    <div className="p-2 rounded-xl bg-gray-900">
      <div className="h-full flex flex-col rounded-xl justify-between gap-4 shadow-cla-blue bg-gradient-to-br from-gray-800 to-gray-700 overflow-hidden">
        <div className="">
          <img
            className="lg:h-48 md:h-36 object-cover"
            src={imgLink}
            alt="blog"
          />
          <h1 className="px-6 mt-2 title-font text-xl font-bold truncate text-pink-300 mb-3">
            {title}
          </h1>
          <div className="px-5 pb-4 pt-2 overflow-auto overflow-x-auto">
            {skills.map((skill) => (
              <span
                className={`bg-brands-${skill} rounded-full mx-1 px-3 py-1 text-white`}
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="w-full pb-3 px-6 flex justify-self-end flex-wrap">
            {codeLink && (
              <div className="inline-flex justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-full group bg-gradient-to-br duration-300 from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white hover:ring-4 hover:ring-purple-300 active:outline-none focus:ring-purple-300">
                <a href={codeLink}>
                  <span className="px-5 transition-all ease-in duration-75 bg-white dark:bg-transparent rounded-md group-hover:bg-opacity-0 text-ellipsis overflow-hidden truncate">
                    Source code
                  </span>
                </a>
              </div>
            )}
            {demoLink && (
              <div className="inline-flex justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white hover:ring-4 hover:ring-purple-300 active:outline-none focus:ring-purple-300">
                <a href={demoLink}>
                  <span className="px-5 transition-all ease-in duration-75 bg-white dark:bg-transparent rounded-md group-hover:bg-opacity-0 text-ellipsis overflow-hidden truncate">
                    Demo
                  </span>
                </a>
              </div>
            )}
          </div>
          <div className="px-6 leading-relaxed mb-3 text-violet-200 h-40 overflow-y-scroll">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
