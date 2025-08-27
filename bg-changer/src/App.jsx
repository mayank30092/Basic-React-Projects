import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("Black");

  return (
    <div className="container" style={{ backgroundColor: color }}>
      <h1>Background Changer</h1>
      <div className="btns">
        <button
          onClick={() => {
            setColor("red");
          }}
        >
          Red
        </button>
        <button
          onClick={() => {
            setColor("green");
          }}
        >
          Green
        </button>
        <button
          onClick={() => {
            setColor("Blue");
          }}
        >
          Blue
        </button>
        <button
          onClick={() => {
            setColor("Black");
          }}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
