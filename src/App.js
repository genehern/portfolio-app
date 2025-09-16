import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="overflow-hidden bg-cover bg-center bg-[url('./images/backgroundImage.jpg')] ">
      <Navbar />
      <Home />
      <About />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
