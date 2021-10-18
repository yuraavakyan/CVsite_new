import Navbar from "./components/navbar";
import Main from "./components/main";
import About from "./components/about";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useRef } from "react";
import "./App.css";
import Education from "./components/education/Education";
import ContactSection from "./components/contacts-section";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      easing: "ease-in-out",
      delay: 200,
    });
  });


  return (
    <div className="App">
      <Navbar />
      <div className="main-ex">
        <Main />
      </div>
      <div className="about-ex">
        <About />
      </div>
      <div className="education-ex">
        <Education />
      </div>
      <div className="experience-ex">
        <Experience />
      </div>
      <div className="skills-ex">
        <Skills />
      </div>
      {/* <div className="port-ex">
        <Portfolio />
      </div> */}
      <ContactSection />

      <Footer />
    </div>
  );
}

export default App;
