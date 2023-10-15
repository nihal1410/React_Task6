import React from 'react'
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Landing2 from '../component/Landing2';
import Form from '../component/Form';
function Contact() {
  return (
    <div>
      <Navbar />
      <Landing2 heading = "Hello" text="let's interect"/>
      <Form/>
      <Footer />
    </div>
  )
}

export default Contact