import "./App.css";

// this is for the header section Link
import Header from "./Components/Navbar/Header";

// this is for the home section Link
import Home from "./Components/Home/Home";

// this is for the experiences section link
import Expereinces from "./Components/Expereinces/Expereinces";

// this is for the skills section link
import Skills from "./Components/SKills/Skills";

// this is for the porjects section
import Projects from "./Components/Projects/Projects";

// this is for the contact section link
import Contact from "./Components/Contact/Contact";

// this is for the aos libarary import
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  // this for use effect function
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      {/* this is for the hadear file  */}
      <Header />

      {/* this is for the home section */}
      <Home />

      {/* this is for the experiences scetion */}
      <Expereinces />

      {/* this is for the skills section */}
      <Skills />

      {/* this is for the projects section */}
      <Projects />

      {/* this is for the contact section */}
      <Contact />
    </>
  );
}

export default App;
