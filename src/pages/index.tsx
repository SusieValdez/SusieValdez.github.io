import * as React from "react";
import "../styles/global.css";
import Navbar from "../components/Navbar";
import LandingHeader from "../components/LandingHeader";
import About from "../components/About";
import Projects from "../components/Projects";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Socials from "../components/Socials";
import Skills from "../components/Skills";
import Footer from "../components/Footer";
import profilePic from "../images/profilePic.png";

const IndexPage = () => {
  return (
    // <main className="h-full scroll-smooth bg-black sm:bg-red-500 md:bg-orange-500 lg:bg-yellow-500 xl:bg-green-500 2xl:bg-blue-500">
    <main className="h-full scroll-smooth">
      <Navbar />
      <div className="flex">
        <div className="fixed top-3/4 left-0 mx-5 h-full">
          <Socials />
        </div>
        <div className="flex flex-col pt-10 pl-20 px-10 lg:px-20 xl:px-32 md:pt-32">
          <div className="flex justify-between">
            <div className="md:w-2/3 md:mr-5 lg:mr-20">
              <LandingHeader />
              <img className="m-auto w-96 mt-10 md:hidden" src={profilePic} />
              <About />
              <div className="md:hidden">
                <Skills />
              </div>
            </div>
            <div className="hidden md:block md:w-1/3">
              <img className="w-72 lg:w-72 xl:w-96" src={profilePic} />
              <Skills />
            </div>
          </div>

          <Projects />
          <Blog />
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default IndexPage;
