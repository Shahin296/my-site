import React from "react"
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Experience from "./component/Experience/Experience";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import Passion from "./component/Passion/Passion";
import Work from "./component/Work/Work";



function App() {
  return (
    <div>
      <Home/>
      <About/>
      <Passion/>
      <Experience/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
