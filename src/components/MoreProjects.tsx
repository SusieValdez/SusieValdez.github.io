import React from "react";

const MoreProjects = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1>This are some other noteworthy projects</h1>
        <h2>View the archive</h2>
      </div>

      <div className="grid grid-cols-3 row-auto gap-3">
        <div className="w-auto h-auto bg-white">
          <h3>Language/Tech</h3>
        </div>{" "}
        <div className="w-auto h-auto bg-white">
          <h3>Language/Tech</h3>
        </div>{" "}
        <div className="w-auto h-auto bg-white">
          <h3>Language/Tech</h3>
        </div>{" "}
        <div className="w-auto h-auto bg-white">
          <h3>Language/Tech</h3>
        </div>{" "}
        <div className="w-auto h-auto bg-white">
          <h3>Language/Tech</h3>
        </div>{" "}
        <div className="w-auto h-auto bg-white">
          <h3>Language/Tech</h3>
        </div>
      </div>
    </div>
  );
};

export default MoreProjects;
