import React from "react";
import Card from "./ui/Card";

const About = () => {
  return (
    <div id="projects" className="pt-16">
      <h3 className="text-2xl font-bold text-pink-300 mb-3">My Projects</h3>
      <div className="flex flex-wrap gap-6 lg:gap-12 justify-start">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default About;
