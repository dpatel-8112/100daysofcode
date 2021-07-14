import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import Problem from "./page/Problem";
import { useState } from "react";
import { ProblemProvider } from "./context/ProblemContext";

function App() {
  const [active, setActive] = useState("Home");

  const activeProblemHandler = (newState) => {
    setActive(newState);
    console.log(newState);
  };

  return (
    <div className="App">
      <header className="App-header">
        <ProblemProvider value={{ active, activeProblemHandler }}>
          {active == "Home" ? <Home /> : <Problem />}
        </ProblemProvider>
      </header>
    </div>
  );
}

export default App;
