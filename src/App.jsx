import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="bg-white h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
      
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
