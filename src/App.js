import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevState => prevState + 1);
  };

  const decrement = () => {
    setCount(prevState => prevState - 1);
  };

  return (
    <div className="App">
      <button onClick={increment}> + </button>
      <h1>{count}</h1>
      <button onClick={decrement}> - </button>
    </div>
  );
}
