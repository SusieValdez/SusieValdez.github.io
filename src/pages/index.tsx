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

const IndexPage = () => {
  return (
    <main className="bg-gray-900 h-full scroll-smooth">
      <Navbar />
      <div className="flex">
        <div className="fixed top-3/4 left-0 mx-5 h-full">
          <Socials />
        </div>
        <div className="flex flex-col gap-32 px-20 md:px-48 pt-32">
          <LandingHeader />
          <About />
          <Projects />
          <Skills />
          <Blog />
          <Contact />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default IndexPage;
