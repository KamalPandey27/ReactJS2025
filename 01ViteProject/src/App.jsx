import { useState } from "react";
import "./App.css";
import Check from "./Practice";
function App() {
  const [count, setCount] = useState(0);
  let Addvalue = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  let DecValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className=" text-blue-500 gap-4 flex-col bg-black h-screen w-full flex items-center justify-center">
        <h1 className="text-3xl text-blue-600">Kamal || React JS</h1>
        <button
          className="font-semibold text text-xl bg-blue-50 m-2 p-2 rounded"
          onClick={Addvalue}
        >
          Add Value {count}
        </button>
        <button
          className="font-semibold text text-xl bg-blue-50 m-2 p-2 rounded"
          onClick={DecValue}
        >
          Dec Value {count}
        </button>
        <footer>Also Used in this {count}</footer>
        <Check />
      </div>
    </>
  );
}

export default App;
