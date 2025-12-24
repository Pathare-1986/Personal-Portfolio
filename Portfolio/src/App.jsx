import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import CustomCursor from "./components/CustomCursor";
import IntroAnimation from "./components/IntroAnimation";

const App = () => {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <IntroAnimation onFinish={() => setIntroDone(true)} />}
      {introDone && (
        <div className="relative gradient text-white">
          <CustomCursor />
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
