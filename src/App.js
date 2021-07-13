import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import Problem from "./component/page/Problem";
import { useState } from "react";

function App() {
  const [active, setActive] = useState("Home");
  return (
    <div className="App">
      <header className="App-header">
        {active == "Home" ? <Home /> : <Problem />}
      </header>
    </div>
  );
}

export default App;
