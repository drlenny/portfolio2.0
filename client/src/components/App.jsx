import React, { useState, useEffect } from "react";
import Greetings from "./Greetings";
import Footer from "./Footer";
import MyNavbar from "./Navbar";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {

  return (
    <div>
      <MyNavbar />
      <div id='greetings'>
        <Greetings />
      </div>
      <div id='middle'>
        <Skills />
        <Projects />
      </div>
      <div id="bottom">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
