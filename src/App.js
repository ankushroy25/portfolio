import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default App;
