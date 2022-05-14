import * as React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";

export default function Blog() {
  return (
    <main className="bg-gray-900 h-full scroll-smooth">
      <Navbar />
      <div className="flex">
        <div className="fixed top-3/4 left-0 mx-5 h-full">
          <Socials />
        </div>
        <div className="flex flex-col px-20 md:px-48 pt-32">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          itaque temporibus sed, tempora atque quam aperiam incidunt eius eum
          obcaecati, corporis id, sunt velit dolore! Fugit nam itaque ad cumque.
        </div>
      </div>
      <Footer />
    </main>
  );
}
