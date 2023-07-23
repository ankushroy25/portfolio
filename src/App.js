import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skill";
import ScrollTop from "./components/ScrollToTop";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="bg-mesh">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <ScrollTop />
    </div>
  );
}

export default App;
