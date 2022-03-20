import { useState } from "react";
import Box from "./Box";
import "./styles.css";

export default function App() {
  const [boxState, setBoxState] = useState([0, 0, 0, 0]);
  return (
    <div className="App">
      <div>Count: {boxState.reduce((a, b) => a + b)}</div>
      <div class="boxes">
        {boxState.map((_, idx) => (
          <Box
            key={idx}
            boxState={boxState}
            idx={idx}
            setBoxState={setBoxState}
          />
        ))}
      </div>
      {/* {boxState.map((_, idx) => (
        <Box
          key={idx}
          boxState={boxState}
          idx={idx}
          setBoxState={setBoxState}
        />
      ))} */}
    </div>
  );
}
