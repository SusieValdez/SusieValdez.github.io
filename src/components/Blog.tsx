import React from "react";
import briefcaseSolid from "../images/briefcase-medical-solid.svg";

const About = () => {
  return (
    <div>
      <h3 className="text-lg text-pink-300 font-mono">
        Check out my latest post!
      </h3>
      <div className="flex gap-3 justify-between">
        <div className="basis-1/2 bg-slate-200 h-96">
          <img className="w-12 h-12" src={briefcaseSolid} alt="blog-logo" />
        </div>
        <div className="basis-1/2">
          <p className="text-violet-200 text-lg">
            Check out my most recent post and other stuff I've been interested
            in lately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
