import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Landing2 from "../component/Landing2";
import Card from "../component/Card";


function Project() {
  return (
    <div>
      <Navbar />
      <Landing2 heading = "Hello" text="Let's have a chat"/>
      <Card/>
      <Footer/>  
    </div>
  );
}

export default Project;
