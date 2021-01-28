import logo from "./logo.svg";
import Navbar from "./components/navbar";
import Main from "./components/main";
import About from "./components/about";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
    </div>
  );
}

export default App;
