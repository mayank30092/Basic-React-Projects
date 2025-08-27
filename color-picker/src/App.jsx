import { useState } from "react";
import "./App.css";

export default function App() {
  const [color, setColor] = useState("#3498db");

  return (
    <div className="main">
      <h1>Color Picker</h1>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        style={styles.input}
      />

      <div style={{ ...styles.box, backgroundColor: color }}></div>
      <p>
        Selected color :<b>{color}</b>
      </p>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    margin: "20px",
    width: "100px",
    height: "50px",
    cursor: "pointer",
  },
  box: {
    width: "200px",
    height: "200px",
    border: "2px solid #333",
    borderRadius: "10px",
    marginTop: "20px",
  },
};
