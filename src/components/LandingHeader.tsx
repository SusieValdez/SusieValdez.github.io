import React from "react";
import arrowRight from "../images/arrow-right-solid.svg";

const LandingHeader = () => {
  return (
    <div>
      <h3 className="text-2xl text-pink-300 font-bold">Hey! My name is</h3>
      <h1 className="text-violet-100 font-bold mb-3 text-4xl sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl ">
        Susie Valdez <span className="rainbow duration-300">💜</span>
      </h1>
      <h1 className="w-auto  text-violet-200 font-bold mb-3 text-2xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-7xl">
        Doctor
        <img
          className="w-9 h-9 inline mx-2 xl:w-10 xl:h-10 2xl:w-16 2xl:h-16"
          src={arrowRight}
          style={{
            filter:
              "invert(86%) sepia(28%) saturate(901%) hue-rotate(191deg) brightness(102%) contrast(102%)",
          }}
        />
        Programmer.
      </h1>

      <p className="text-violet-200 text-lg ">
        Medical Doctor turned Software Engineer. Web development is a true
        passion of mine and I enjoy every second of it!
      </p>
    </div>
  );
};

export default LandingHeader;
