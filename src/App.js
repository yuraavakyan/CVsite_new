import Navbar from "./components/navbar";
import Main from "./components/main";
import About from "./components/about";
import Experience from "./components/experience";

import "./App.css";
import Education from "./components/education/Education";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
