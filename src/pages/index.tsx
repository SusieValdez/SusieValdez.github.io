import * as React from "react";
import "../styles/global.css";
import Navbar from "../components/Navbar";
import LandingHeader from "../components/LandingHeader";
import About from "../components/About";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Socials from "../components/Socials";

const IndexPage = () => {
  return (
    <main className="bg-gray-900 h-full">
      <Navbar />
      <div className="flex">
        <div className="fixed top-3/4 left-0 mx-5 h-full">
          <Socials />
        </div>
        <div className="ml-20 mt-24 pt-12">
          <LandingHeader />
          <About />
          <Projects />
          <Blog />
          <Contact />
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
