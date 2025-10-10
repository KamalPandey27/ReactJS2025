import { useState } from "react";

import "./App.css";

function App({ name = "Kamal", rollNumber = 22827 }) {
  const [count, setCount] = useState(0);
  const increase = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <button onClick={increase}>Increase : {count}</button>
      <button onClick={decrease}>Decrease : {count}</button>
      <div>{name}</div>
      <div>{rollNumber}</div>
    </>
  );
}

export default App;
