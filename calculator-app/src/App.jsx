import { useState } from "react";
import "./App.css";

function App() {
  const [curr, setCurr] = useState("");

  const handleClick = (val) => {
    setCurr(curr + val);
  };

  return (
    <div className="container">
      <h1>Calculator</h1>
      <div className="input">{curr || 0}</div>
      <div className="btns">
        <div className="first">
          <button className="btn" onClick={() => handleClick("7")}>
            7
          </button>
          <button className="btn" onClick={() => handleClick("8")}>
            8
          </button>
          <button className="btn" onClick={() => handleClick("9")}>
            9
          </button>
          <button className="btn" onClick={() => handleClick("/")}>
            /
          </button>
        </div>
        <div className="second">
          <button className="btn" onClick={() => handleClick("4")}>
            4
          </button>
          <button className="btn" onClick={() => handleClick("5")}>
            5
          </button>
          <button className="btn" onClick={() => handleClick("6")}>
            6
          </button>
          <button className="btn" onClick={() => handleClick("*")}>
            *
          </button>
        </div>
        <div className="third">
          <button className="btn" onClick={() => handleClick("1")}>
            1
          </button>
          <button className="btn" onClick={() => handleClick("2")}>
            2
          </button>
          <button className="btn" onClick={() => handleClick("3")}>
            3
          </button>
          <button className="btn" onClick={() => handleClick("-")}>
            -
          </button>
        </div>
        <div className="fourth">
          <button className="btn" onClick={() => handleClick("0")}>
            0
          </button>
          <button className="btn" onClick={() => handleClick(".")}>
            .
          </button>
          <button
            className="btn"
            onClick={() => setCurr(eval(curr).toString())}
          >
            =
          </button>
          <button className="btn" onClick={() => handleClick("+")}>
            +
          </button>
        </div>
        <div className="fifth">
          <button className="btn" onClick={() => setCurr("")}>
            c
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
