import { useState } from "react";
import "./App.css";

function App() {
  let [Color, SetColor] = useState("");
  return (
    <>
      <div
        className=" text-white w-full h-screen flex flex-col items-center justify-end pb-7"
        style={{ backgroundColor: Color }}
      >
        <div className="flex gap-4">
          <button
            className=" w-19 h-9  px-4 py-1 rounded bg-red-600"
            onClick={() => {
              SetColor("red");
            }}
          >
            Red
          </button>
          <button
            className="  w-19 h-9  px-4 py-1 rounded bg-blue-600"
            onClick={() => {
              SetColor("Blue");
            }}
          >
            Blue
          </button>
          <button
            className="  w-19 h-9  px-4 py-1 rounded bg-white text-black border-2"
            onClick={() => {
              SetColor("white");
            }}
          >
            White
          </button>
          <button
            className="  w-19 h-9  px-4 py-1 rounded bg-black"
            onClick={() => {
              SetColor("black");
            }}
          >
            Black
          </button>
          <button
            className="  w-19 h-9  px-4 py-1 rounded bg-amber-900"
            onClick={() => {
              SetColor("brown");
            }}
          >
            Brown
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
