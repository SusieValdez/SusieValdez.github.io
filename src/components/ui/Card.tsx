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
    <div className="md:w-72 h-128">
      <div className="h-full flex flex-col rounded-xl justify-between gap-4 shadow-cla-blue bg-gradient-to-br from-gray-800 to-gray-700 overflow-hidden">
        <div className="">
          <img className="lg:h-48 md:h-36 w-full" src={imgLink} alt="blog" />
          <h2 className="pt-6 px-6 tracking-widest text-xs title-font font-medium text-gray-900 mb-1">
            <div className="flex flex-wrap gap-1">
              {skills.map((skill) => (
                <span className={`bg-brands-${skill} rounded-full px-3 py-1`}>
                  {skill}
                </span>
              ))}
            </div>
          </h2>
          <h1 className="px-6 title-font text-lg font-medium text-pink-300 mb-3">
            {title}
          </h1>
          <p className="px-6 leading-relaxed mb-3 text-violet-200 text-ellipsis overflow-hidden">
            {description}
          </p>
        </div>
        <div className="w-full pb-3 px-6 flex justify-self-end flex-wrap">
          {codeLink && (
            <div className="inline-flex justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white hover:ring-4 active:outline-none focus:ring-purple-300">
              <a href={codeLink}>
                <span className="px-5 transition-all ease-in duration-75 bg-white dark:bg-transparent rounded-md group-hover:bg-opacity-0 text-ellipsis overflow-hidden truncate">
                  Source code
                </span>
              </a>
            </div>
          )}
          {demoLink && (
            <div className="inline-flex justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white hover:ring-4 active:outline-none focus:ring-purple-300">
              <a href={demoLink}>
                <span className="px-5 transition-all ease-in duration-75 bg-white dark:bg-transparent rounded-md group-hover:bg-opacity-0 text-ellipsis overflow-hidden truncate">
                  Demo
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
