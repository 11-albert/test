import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import HireMe from "./component/HireMe";
import Nav1 from "./component/Nav1";
import OurService from "./component/OurService";
import Projects from "./component/Projects";
import ScrollTop1 from "./component/ScrollTop1";
import Skills from "./component/Skills";


function App() {
  return (
    <>
     <Nav1/>
     <Hero/>
     <About/>
     <OurService/>
     {/* <Skills/> */}
     <HireMe/>
     <Projects/>
     <Contact/>
     <Footer/>
     <ScrollTop1/>
  
    </>
    
  );
}

export default App;
