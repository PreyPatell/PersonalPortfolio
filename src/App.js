import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Experience from "./components/Experience";


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Education/>
      <Skills/>
      <Experience/>
    </div>
  );
}

export default App;
