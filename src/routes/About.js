import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Landing2 from "../component/Landing2";
import About2 from "../component/About2";
function About() {
  return (
    <div>
      <Navbar />
      <Landing2 heading = "Hello" text="welcome to my about section."/>
      <About2/>
      <Footer />
    </div>
  );
}

export default About;
