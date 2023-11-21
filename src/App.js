import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Education/>
      <Skills/>
      <Experience/>
      <Projects/>
    </div>
  );
}

export default App;
